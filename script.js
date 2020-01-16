const coinArray = ["Orzeł","Reszka"];
let score = [0,0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

for(let i = 0;i < buttons.length;i++){
    console.log(buttons[i]);
    buttons[i].addEventListener("click",tossCoin);
}

function tossCoin(e){
    let playerGuess = e.target.innerText;
    let computerToss = Math.floor(Math.random()*2);
    let computerGuess = coinArray[computerToss];

    let output;

    if(playerGuess === computerGuess){
        output = "Gracz wygrywa!"
        score[0]++;
        //win
    } else{
        output = "Komputer wygrywa!"
        score[1]++;
        //loss
    }
    message.innerHTML = "<b>"+output+"</b><hr><br>Gracz: "+score[0]+
    "pkt Komputer: "+score[1]+"pkt"; 
}