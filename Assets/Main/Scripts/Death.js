#pragma strict

//The position to reset to, usually the player start position. 
var startx : float;
var starty : float;

function Start () {
	
}

function Update () 
{
	
	if (transform.position.y <= -10)
	{
		//Back to start position.
		transform.position.x = startx;
		transform.position.y = starty;
		
		//This resets the scene.
		//Application.LoadLevel(Application.loadedLevelName);
		
	}
}