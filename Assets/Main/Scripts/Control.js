#pragma strict

import UnityStandardAssets.CrossPlatformInput;

//Set up our variables. 
var anim : Animator; //Control the animation.
var m_Rigidbody2D : Rigidbody2D; //Control our player.
var MaxSpeed : float = 10;
var JumpForce : float = 400;
var WhatIsGround : LayerMask; //What is considered ground.
private var Grounded : boolean; //If the player is touching ground.
private var GroundCheck : Transform; //The box around the players feet for collision detection.
var GroundedRadius : float = .2; //Radius to check for ground.
var jump : boolean; //If is jumping.

function Start () {

}

function Awake()
{
	//Link our game objects.
	anim = GetComponent(Animator);
	m_Rigidbody2D = GetComponent(Rigidbody2D);
	GroundCheck = transform.Find("GroundCheck");
	
	
}
function Update()
{
	//Check to see if jump was pressed.
	jump = CrossPlatformInputManager.GetButtonDown("Jump");
}

function FixedUpdate () 
{

	Grounded = false;
	
	var s : float = CrossPlatformInputManager.GetAxis("Horizontal");
	
	var colliders : Collider2D[];
	
	//Get array of everything our players feet is touching.
	colliders = Physics2D.OverlapCircleAll(GroundCheck.position, GroundedRadius, WhatIsGround);

	//Loop through this array.
	for (var i : int = 0; i < colliders.length; i++)
	{
		//Make sure we aren't colliding with ourself.
		if (colliders[i].gameObject != gameObject)
        	Grounded = true;
   	}
   	
   	//If jump was pressed and our player is touching the ground.
   	if (jump && Grounded)
	{
		//Send him flying!
		m_Rigidbody2D.AddForce(new Vector2(0, JumpForce));
	}
	

	anim.SetBool("jump", !Grounded);

	//Tell our animatior we're moving.
	anim.SetFloat("speed", Mathf.Abs(s));
	
	//Actually move our player.
	m_Rigidbody2D.velocity = new Vector2(s*MaxSpeed, m_Rigidbody2D.velocity.y);
}