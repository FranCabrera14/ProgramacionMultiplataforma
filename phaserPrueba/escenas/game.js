
export class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'game' });
    }
 
    
 
    // imágenes del personaje, frutas background y audios
    preload() {
    this.load.image('jugador', './assets/images/jugador.png');
    this.load.image('pera', './assets/images/pera.png');
    this.load.image('platano', './assets/images/platano.png');
    this.load.image('naranja', './assets/images/naranja.png');
    this.load.image('mina', './assets/images/mina .png')
    this.load.image('background', './assets/images/playita.jpg')
    this.load.audio('musica', './assets/audios/musiquita.mp3');
    this.load.audio('mordisco','./assets/audios/mordisquito.mp3')
    this.load.audio('gameover', './assets/audios/gameover.mp3')
    this.load.audio('victory','./assets/audios/victory.mp3')
    }
    //donde creo elementos del juego, incluyendo el jugador, las frutas, la musica y demás
    create() {
    
      this.music = this.sound.add(
        "musica", 
        {loop: true},

      )
      this.victory = this.sound.add('victory')
      this.gameover = this.sound.add('gameover')
      this.mordisco = this.sound.add('mordisco')
      this.music.play();
        //las imagenes me venian como un radio muy grande y algunas las tuve que corregir creando esta constante para hacerle luego un setCircle()
        const radioMina = 80;
        const radioPera = 25;
        const background = this.add.image(400,300, 'background').setScale(1);
        background.displayWidth = this.scale.width;
        background.displayHeight = this.scale.height;
        this.player = this.physics.add.image(500, 600, 'jugador');
        this.player.setCollideWorldBounds(true);
        this.background = 'background';
      
        this.fruits = this.physics.add.group();
        //overlap es para que cuando toque el jugador una fruta llame a la funcion collectFruit
        this.physics.add.overlap(this.player, this.fruits, this.collectFruit, null, this);
               //en esta lista añado las frutas que quiero que aparezcan
        //metodo crearFrutas donde creo las frutas con delay porque me dio muchos problemas creandome demasiadas a la vez,donde les cambio el radio
        //doy velocidad puntos y hago que aparezcan de forma aleatoria y arriba
        const crearFrutas = (tipo,velocidadMin, velocidadMax, puntos) => {
            this.time.addEvent({
                delay: 2000,
                callback: () => {
                    let fruta = this.fruits.create(
                        Phaser.Math.Between(50, 750),
                        -50, 
                        tipo 
                    );
                    if (tipo === 'pera'){
                        fruta.setCircle(radioPera,radioPera/1)
                    }else if (tipo === 'mina'){
                        fruta.setCircle(radioMina, radioMina/1,radioMina/3)
                    }
                    fruta.setVelocityY(Phaser.Math.Between(velocidadMin, velocidadMax)); 
                    fruta.setData('points', puntos); 
                },
                loop: true // Hace que se repita infinitamente
            });
        };

    
    
        crearFrutas('naranja', 60, 90, 10);
        crearFrutas('platano', 120, 175, 20); 
        crearFrutas('pera', 175, 250, 30);   
        crearFrutas('mina', 60, 90, 10)
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
        this.mordisco.play();
        fruit.setY(0);
        fruit.setX(Phaser.Math.Between(50, 750));
        this.score += fruit.getData('points');
        this.scoreText.setText('Score: ' + this.score);
       
       
        //hago que crezca el jugador y si llega a 1000 gana
        if (this.score >= 250 && this.score < 500) {     
            player.setScale(1.5);
        } else if (this.score >= 500 && this.score < 750) {
            player.setScale(2.5);        
        } else if (this.score >= 750 && this.score < 1000) {
            player.setScale(3);   
        } else if (this.score >= 1000) 
            this.win()
    }

    gameOver() {
        this.music.stop();
        this.gameover.play();
        this.physics.pause();
        this.player.setTint(0xff0000); 
        this.add.text(
            this.cameras.main.centerX, 
            this.cameras.main.centerY,
            'HAS PERDIDO', 
            { fontSize: '50px', fill: '#ff0000', fontFamily: 'Arial' }
        ).setOrigin(0.5);
    }

    win(){
        this.music.stop();
        this.victory.play();
        this.physics.pause();
        this.player.setTint(0x00ff00); 
        this.add.text(this.cameras.main.centerX, 
                    this.cameras.main.centerY, 
                    'HAS GANADO!!!', 
                    { fontSize: '50px', fill: '#00ff00', fontFamily: 'Arial' }
                ).setOrigin(0.5);  
    }

    
}
