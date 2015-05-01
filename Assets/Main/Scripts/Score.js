#pragma strict

//The text element.
var score : UnityEngine.UI.Text;
//The player object.
var player : GameObject;
var startx : int = 14;

function Start () 
{
	//Set the score to zero.
	score.text = "0";
}

function Update () 
{
	//If the player is past the start platform, start counting score.
	if (player.transform.position.x >= startx)
	{
		score.text = Mathf.Round(player.transform.position.x).ToString();
	}
	
}