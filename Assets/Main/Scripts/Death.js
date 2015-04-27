#pragma strict

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
		//Application.LoadLevel(Application.loadedLevelName);
		
	}
}