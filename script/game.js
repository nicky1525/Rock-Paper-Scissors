(function(){

var label = document.querySelector(".result");

var result = {
    tie: "It's tie!",
    win: "You WIN!",
    lose:"Sorry, you lose."
}

var winsCounter = 0,
    lossesCounter = 0,
    choice = ['Rock', 'Paper', 'Scissors'];

function rdmChoice() {

    return choice[Math.floor(Math.random() * choice.length)];
}

function getResult(text) {
    var computer = rdmChoice();
    document.querySelector(".opponent-choice").innerHTML =  computer;
    document.querySelector(".your-choice").innerHTML = text;
    if (text == computer){
        return result.tie;
    }else{
        if((text == 'Rock' && computer == 'Paper')||
            (text == 'Paper' && computer == 'Scissors')){
            return result.lose;
        }else{
            return result.win;
        }
    }
}

function updateLabel(resultValue) {
     //remove hidden class
    document.querySelector(".game").className = document.querySelector(".game").className.replace(/(?:^|\s)hidden(?!\S)/,'');
    label.innerHTML = resultValue;
}

function updateCounters(resultValue) {
     //remove hidden class
    document.querySelector(".stats").className = document.querySelector(".stats").className.replace(/(?:^|\s)hidden(?!\S)/,'');
    switch (resultValue){
        case result.tie:
            //does nothing
            break;
        case result.win:
            winsCounter++;
            document.querySelector("dl dd:first-of-type").innerHTML = winsCounter;
            break;
        case result.lose:
           lossesCounter++;
            document.querySelector("dl dd:last-of-type").innerHTML = lossesCounter;
            break;
    }
}

function run(that) {
    var res = getResult(that.innerHTML);
    updateLabel(res);
    updateCounters(res);
}

document.getElementById("rock").addEventListener('click', function(){ run(this) });
document.getElementById("paper").addEventListener('click', function(){ run(this) });
document.getElementById("scissors").addEventListener('click',function(){ run(this) });

})();
