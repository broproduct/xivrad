function play() {
	if ( $('#play').hasClass('glyphicon-play') ){
		$('#play').removeClass('glyphicon-play');
		document.getElementById('player').play();
		$('#play').addClass('glyphicon-pause');
	}
	else {
		$('#play').removeClass('glyphicon-pause');
		document.getElementById('player').pause()
		$('#play').addClass('glyphicon-play');
	}
}
function mute () {
	if ( $('#mute').hasClass('glyphicon-volume-off') ){
		$('#mute').removeClass('glyphicon-volume-off');
		document.getElementById('player').volume=0;
		$('#mute').addClass('glyphicon-volume-up');
	}
	else {
		$('#mute').removeClass('glyphicon-volume-up');
		document.getElementById('player').volume=1;
		$('#mute').addClass('glyphicon-volume-off');
	}
}