
export class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'game' });
    }
 
    
 
    // imágenes del personaje y  frutas.
    preload() {
    this.load.image('jugador', './assets/images/jugador.png');
    this.load.image('pera', './assets/images/pera.png');
    this.load.image('platano', './assets/images/platano.png');
    this.load.image('naranja', './assets/images/naranja.png');
    this.load.image('mina', './assets/images/mina .png')
    this.load.image('background', './assets/images/playita.jpg')
    this.load.audio('musica', './assets/audios/musiquita.mp3');
    }
    //donde creo elementos del juego, incluyendo el jugador, las frutas y la puntuación.
    create() {
    
      this.music = this.sound.add(
        "musica", 
        {loop: true},

      )
      this.music.play();
        const radioMina = 80;
        const radioPera = 25;
        const background = this.add.image(400,300, 'background').setScale(1);
        background.displayWidth = this.scale.width;
        background.displayHeight = this.scale.height;
        this.player = this.physics.add.image(500, 600, 'jugador');
        this.player.setCollideWorldBounds(true);
        this.background = 'background';
      
        this.fruits = this.physics.add.group();

        this.physics.add.overlap(this.player, this.fruits, this.collectFruit, null, this);
        //en esta lista añado las frutas que quiero que aparezcan
        const crearFrutas = (tipo, cantidad, velocidadMin, velocidadMax, puntos) => {
            for (let i = 0; i < cantidad; i++) {
                let fruta = this.fruits.create(Phaser.Math.Between(50, 750), Phaser.Math.Between(-200, 0), tipo);
                fruta.setVelocity(0, Phaser.Math.Between(velocidadMin, velocidadMax));
                fruta.setData('points', puntos);
                if (tipo === 'pera'){
                    fruta.setCircle(radioPera,radioPera/1)
                }else if (tipo === 'mina'){
                    fruta.setCircle(radioMina, radioMina/1,radioMina/3)
                }
            }
        };
        
        // Crear diferentes tipos de frutas con cantidades y velocidades distintas
        crearFrutas('naranja', 5, 30, 80, 10);  // 5 naranjas con velocidad 30-80
        crearFrutas('platano', 3, 50, 150, 20); // 3 plátanos con velocidad 50-150
        crearFrutas('pera', 2, 120, 200, 30);   // 2 peras con velocidad 120-200
        crearFrutas('mina', 1, 30, 80, 10)
        this.cursors = this.input.keyboard.createCursorKeys();
        this.scoreText = this.add.text(10, 10, 'Score: ', { fontSize: '20px', fill: '#fff' });
        this.score = 0;
        this.physics.add.overlap(this.player, this.fruits, this.collectFruit, null, this);
    }

// movimiento del jugador.
    update()
    {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-300);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(300);
        } else {
            this.player.setVelocityX(0);
        }
    }
    
    // cuando se recoge una fruta, aumenta la puntuación y reposiciona la fruta
    collectFruit(player, fruit) {
        if(fruit.texture.key === 'mina'){
            this.gameOver();
        }
        fruit.setY(0);
        fruit.setX(Phaser.Math.Between(50, 750));
        this.score += fruit.getData('points');
        this.scoreText.setText('Score: ' + this.score);
       
       
        // Cambiar el tamaño del jugador de manera uniforme cada 250 puntos
        if (this.score >= 250 && this.score < 500) {
            player.setScale(1.5);
        } else if (this.score >= 500 && this.score < 750) {
            player.setScale(2);        
        } else if (this.score >= 750 && this.score < 1000) {
            player.setScale(2.5);   
        } else if (this.score >= 1000) 
            this.win()
    }

    gameOver() {
        this.physics.pause(); // Detiene el movimiento del juego
        this.player.setTint(0xff0000); // Cambia el color del jugador a rojo
        this.add.text(300, 250, 'GAME OVER', { fontSize: '50px', fill: '#ff0000' }).setOrigin(0.5);
    }

    win(){
        this.physics.pause(); // Detiene el movimiento del juego
        this.player.setTint(0xff0000); // Cambia el color del jugador a rojo
        this.add.text(300, 250, 'HAS GANADO!!!', { fontSize: '50px', fill: '#00ff00' }).setOrigin(0.5);  
    }

    
}
