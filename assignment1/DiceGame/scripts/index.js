//playername score variable
let  firstPlayerName=""
let secondPlayerName=""
let firstPlayerScore=0
let secondPlayerScore=0
let totalScore=0

function onSubmit(event){
    event.preventDefault();
    // console.log("event:",event)
    // const fromData=document.getElementsByTagName("input");
    const fromData=document.getElementsByClassName("form-container")
// console.log(fromData)
   firstPlayerName=fromData[0][0].value;
    console.log(firstPlayerName)
    secondPlayerName=fromData[0][1].value;
    totalScore=fromData[0][2].value;
document.getElementById("form-container").style.display="none"
document.getElementById("board-container").style.display="block"
document.getElementsByClassName("form-container")[0].style.display="none"
// document.getElementsByClassName("board-container")[0].style.display="block"
//getElementsByClassName give array and getElementById give the very first value
document.getElementById("player1").getElementsByClassName("heading")[0].innerHTML=firstPlayerName
document.getElementById("player2").getElementsByClassName("heading")[0].innerHTML=secondPlayerName
}

function rollDice(playerIndex){
const randomNumber=getRandomNumber()
// console.log(randomNumber)
const playerNodes=document.getElementById(`player${playerIndex}`)
playerNodes.querySelector(".dice img").setAttribute("src",`../images/dice${randomNumber}.png`)
switch(playerIndex){
    case 1:firstPlayerScore +=randomNumber
    playerNodes.getElementsByClassName("score")[0].innerHTML=firstPlayerScore;
    playerNodes.getElementsByTagName("input")[0].setAttribute("disabled",true);
    document.getElementById("player2").getElementsByTagName("input")[0].removeAttribute("disabled");
    break
    case 2:secondPlayerScore +=randomNumber
    playerNodes.getElementsByClassName("score")[0].innerHTML=secondPlayerScore;
    playerNodes.getElementsByTagName("input")[0].setAttribute("disabled",true);
    document.getElementById("player1").getElementsByTagName("input")[0].removeAttribute("disabled");
    break
    default:
        break
}
checkifWinnerExists()
}

function getRandomNumber(){
return  Math.floor(Math.random()*6)+1
}
function checkifWinnerExists(){
    if (firstPlayerScore>=totalScore){
        document.getElementById("player1").innerHTML+=`<div class="winner"></div>`
        document.getElementById("player2").getElementsByTagName('input')[0].setAttribute("disabled",true)
    }
    if (secondPlayerScore>=totalScore){
        document.getElementById("player2").innerHTML+=`<div class="winner"></div>`
        document.getElementById("player1").getElementsByTagName('input')[0].setAttribute("disabled",true)
    }
}

