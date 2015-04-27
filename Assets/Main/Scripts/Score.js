#pragma strict

var score : UnityEngine.UI.Text;
var player : GameObject;
var startx : int = 14;

function Start () 
{
	score.text = "0";
}

function Update () {
	
	if (player.transform.position.x >= startx)
	{
		score.text = Mathf.Round(player.transform.position.x).ToString();
	}
	
}