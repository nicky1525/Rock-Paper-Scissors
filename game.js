
var label = document.querySelector(".result");

var result = {
    tie: 0,
    win: 1,
    lose:2
}

var resultStrings = [
    "It's tie!",
    "You WIN!",
    "Sorry, you lose."
];

var winsCounter = 0;
var lossesCounter = 0;

function rdmChoice(){
    var choice = ['Stone', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getResult(text){
    var computer = rdmChoice();
    document.querySelector(".opponent-choice").innerHTML =  computer;
    document.querySelector(".your-choice").innerHTML = text;
    if (text == computer){
        return result.tie;
        //label.innerHTML = "Tie!";
    }else{
        if((text == 'Rock' && computer == 'Paper')||
            (text == 'Paper' && computer == 'Scissors')){
            //label.innerHTML = "You loose!";
            return result.lose;
        }else{
            return result.win;
            //label.innerHTML = "You win!";
        }
    }
}

function updateLabel(resultValue) {
    label.innerHTML = resultStrings[resultValue];
}

function updateCounters(resultValue) {
    switch (resultValue){
        case 0:
            //does nothing
        break;
        case 1:
            winsCounter++;
            document.querySelector("dl dd:first-of-type").innerHTML = winsCounter;
        break;
        case 2:
           lossesCounter++;
            document.querySelector("dl dd:last-of-type").innerHTML = lossesCounter;
        break;
    }
}

function run(that) {
    var self = that;
    var res = getResult(self.innerHTML);
    updateLabel(res);
    updateCounters(res);
}

document.getElementById("rock").addEventListener('click', function(){ run(this) });
document.getElementById("paper").addEventListener('click', function(){ run(this) });
document.getElementById("scissors").addEventListener('click',function(){ run(this) });

/*document.getElementById("start-game").addEventListener('click', function() {
    //remove hidden class
    document.querySelector(".buttons").className = document.querySelector(".buttons").className.replace(/(?:^|\s)hidden(?!\S)/,'');
    this.className = this.className + "hidden";
    
});
*/
