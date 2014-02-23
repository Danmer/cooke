'use strict';

(function($, Parallax){

	$(function(){

		var scene = document.getElementById('scene');

		new Parallax(scene);

		$('#jplayer').jPlayer({
			volume: 0.2,
			swfPath: '../media',
			supplied: 'mp3, oga',
			ready: function () {
				$(this).jPlayer('setMedia', {
					mp3: '../media/fire.mp3',
					oga: '../media/fire.ogg'
				});
			}
		});

		$('body').on('click', function(){
			$('#jplayer').jPlayer('play');
		});

	});

})(jQuery, Parallax);
