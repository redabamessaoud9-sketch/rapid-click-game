const playButton=document.getElementById("playButton");
const startButton=document.getElementById("startButton");

const scoreText=document.getElementById("score");
const timeText=document.getElementById("time");
const message=document.getElementById("message");

const bestScoreText=document.getElementById("bestScore");

const themeBtn=document.getElementById("themeBtn");
const musicBtn=document.getElementById("musicBtn");
const music=document.getElementById("music");

let score=0;
let time=10;
let timer;

// Chargement du meilleur score
let best=localStorage.getItem("bestScore")||0;
bestScoreText.textContent=best;

// Commencer
startButton.onclick=startGame;

// Compter les clics
playButton.onclick=()=>{

    score++;
    scoreText.textContent=score;

};

// Mode sombre

themeBtn.onclick=()=>{

    document.body.classList.toggle("dark");

};

// Musique

let playing=false;

musicBtn.onclick=()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML="🎵 Musique : OFF";

    }

    else{

        music.play();

        musicBtn.innerHTML="🎵 Musique : ON";

    }

    playing=!playing;

};

// Jeu

function startGame(){

    score=0;
    time=10;

    scoreText.textContent=0;
    timeText.textContent=10;

    message.innerHTML="";

    playButton.disabled=false;
    startButton.disabled=true;

    timer=setInterval(()=>{

        time--;

        timeText.textContent=time;

        if(time<=0){

            clearInterval(timer);

            playButton.disabled=true;
            startButton.disabled=false;

            // Nouveau record

            if(score>best){

                best=score;

                localStorage.setItem("bestScore",best);

                bestScoreText.textContent=best;

            }

            message.innerHTML="🎉 Partie terminée !<br>Score : "+score;

            // Confettis

            confetti({

                particleCount:300,

                spread:180,

                origin:{y:0.6}

            });

        }

    },1000);

}
