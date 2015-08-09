var sound = function(){
	this.id;
	this.synth;
	this.freq;
	this.div;
	this.paper;
	this.circle;
}

sound.prototype.init = function(){
	this.synth = new Tone.AMSynth().toMaster();
	this.freq = this.generateNote();
}

sound.prototype.play = function(){
	this.synth.triggerAttackRelease(this.freq,"4n");
}


sound.prototype.generateNote = function(){
	var num = 2+Math.floor(Math.random()*2);
	var key = ['D','E','F','A','Bb'];
	var ind = Math.floor(Math.random()*4);
	var note = ''+key[ind]+''+num+'';
	return note;
}

sound.prototype.putPaper = function(){
	console.log("in putpaper");
	this.paper = Raphael(''+this.id,100,100);
	console.log(this.paper);
	this.circle = this.paper.circle(10,10,50,50);
	this.circle.attr("fill","#f00");
	this.circle.attr("stroke","#fff");
}


//"D4", "E4", "F4", "A4", "E5", "F5", "Bb4", "D5", "E5", "F5", "A5", "E6", "F6", "Bb5"

