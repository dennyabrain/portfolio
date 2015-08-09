var sound = function(){
	this.id;
	this.synth;
	this.freq;
	this.div;
}

sound.prototype.init = function(){
	this.synth = new Tone.AMSynth().toMaster();
	this.freq = this.generateNote();
}

sound.prototype.play = function(){
	this.synth.triggerAttackRelease(this.freq,"4n");
}


sound.prototype.generateNote = function(){
	var num = 3+Math.floor(Math.random()*3);
	var key = ['D','E','F','A','Bb'];
	var ind = Math.floor(Math.random()*4);
	var note = ''+key[ind]+''+num+'';
	return note;
}


//"D4", "E4", "F4", "A4", "E5", "F5", "Bb4", "D5", "E5", "F5", "A5", "E6", "F6", "Bb5"

