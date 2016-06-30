var Menu = {

	preload : function() {
		var style = { font: "32px Arial", fill: "black", align: "center", backgroundColor: "#eef" };
		this.game.stage.backgroundColor = '#71c5cf'


	 	text = game.add.text(300, 50, "The Oregon Trail", style);
	 	text.anchor.set(0.5);
		game.load.image('background', './assets/images/title.png')
		game.load.image('button', './assets/images/start_button.png')
	},

	create: function() {
		var style = { font: "32px Arial", fill: "black", align: "center", backgroundColor: "#eef" };
		

	    background = game.add.tileSprite(0, 0, 800, 600, 'background');

	    text = game.add.text(300, 50, "The Oregon Trail", style);
	 	text.anchor.set(0.5);

	 	game.add.button(285, 265, 'button', function(){
	 		game.add.button(100, 100, 'button', function(){
	 			console.log('clicked!')
	 		}, this);
	 	}, this);

	    
	},

	startGame: function() {
		this.state.start('Game')
	}



}