
const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const restart = document.querySelector('.restart');
const start = document.querySelector('.start');
const GameOver = document.querySelector('.Gamer-Over');
const nuvem= document.querySelector('.nuvem')

audioStart = new Audio('./src/sound/MARIO_soung_audio_theme.mp3')
audioGameOver = new Audio('./src/sound/MARIO_soung_audio_gameover.mp3')
audioJump = new Audio('./src/sound/mario-jump.mp3')
 

const startGame = () => {
    cano.classList.add('cano-animação');
    start.style.display = 'none';
    audioStart.play();
    restartGame();
};

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};


const restartGame = () => {
    
    GameOver.style.display = 'none';
    cano.style.left = ''
    cano.style.bottom = '60px';
    cano.style.right= '60px' ;
    mario.src ="./src/imagem/mario.gif";
    mario.style.width = '150px';
    mario.style.bottom = '60px';
    start.style.display = 'none';
    restart.style.display ='flex';


    audioGameOver.pause();
    audioGameOver.currentTime = 0;

     audioStart.play();
    audioStart.currentTime = 0;
    

}; 

 const loop = () => {
    setInterval(() => {
      const canoPosition = cano.offsetLeft
      const marioPosition = window
        .getComputedStyle(mario)
        .bottom.replace('px', ' ')
  
      if (canoPosition <= 120 && canoPosition > 0 && marioPosition < 160) {
        //cano.style.animation ='none';
      cano.classList.remove('.cano-animation')
        cano.style.left = `${canoPosition}px`

       // mario.style.animation ='none'
        mario.classList.remove('.jump')
        mario.style.bottom = `${marioPosition}px`

        mario.src="./src/imagem/game-over.png";
        mario.style.width = '75px'
        mario.style.marginLeft = '70px'
        
        
        function stopAudioStart() {
          audioStart.pause()
        }
        stopAudioStart()

        audioGameOver.play()
        
        function stopAudio() {
          audioGameOver.pause()
        }
        setTimeout(stopAudio, 7000)
        
        GameOver.style.display = 'flex'
        
        clearInterval(loop)
      }


    }, 10)
  } 
                        

    loop()
    
document.addEventListener('keydown', (e) => {
    const tecla = e.key;
    if (tecla === ' ') {
        jump();
        audioJump.play()
      
    
    } else if (tecla === 'Enter') {
        startGame();
        
    }
});


document.addEventListener('touchstart', (e) => {
    if (e.touches.length) {
        jump();
    }
});

start.addEventListener('click', startGame);
restart.addEventListener('click',restartGame);

