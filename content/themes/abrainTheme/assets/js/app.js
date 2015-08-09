var player = [];

window.onload = function(){
	//player[0] = new sound();
	//player[0].init();
	//player[0].play("E2");

	var x = document.getElementsByClassName("pad");
	for(i=0;i<x.length;i++){
		player[i] = new sound();
		player[i].init();
		player[i].id = i;
		player[i].div = x[i];
		player[i].div.id = i;
		player[i].putPaper();
		player[i].div.onclick = function(){
			player[this.id].play();
		}
	}
}