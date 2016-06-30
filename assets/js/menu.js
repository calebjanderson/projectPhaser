var startButton;

var Menu = {

	preload : function() {
		var style = { font: "32px Arial", fill: "black", align: "center", backgroundColor: "#eef" };
		this.game.stage.backgroundColor = '#71c5cf'


	 	text = game.add.text(300, 50, "The Oregon Trail", style);
	 	text.anchor.set(0.5);
		game.load.image('background', './assets/images/title.png')
		game.load.image('startButton', './assets/images/start_button.png')
		game.load.image('newGameButton', './assets/images/newgame_button.png')
		game.load.image('loadGameButton', './assets/images/loadgame_button.jpg')
	},

	create: function() {
		var style = { font: "32px Arial", fill: "black", align: "center", backgroundColor: "#eef" };
		

    background = game.add.tileSprite(0, 0, 800, 600, 'background');

    text = game.add.text(300, 50, "The Oregon Trail", style);
	 	text.anchor.set(0.5);

	 	startButton = game.add.button(285, 265, 'startButton', this.clickStartButton, this);

	},

	startGame: function() {
		this.state.start('Game')
	},

  clickStartButton: function() {
    startButton.destroy();

    game.add.button(100, 100, 'newGameButton', function(){
      console.log('clicked!')
    }, this);
    game.add.button(100, 200, 'loadGameButton', function(){
      console.log('clicked!')
    }, this);
  }



}
