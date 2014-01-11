
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

function getStats() {

    for (var i = 0; i < 3; i++) {

        if(label.innerHTML == "You win!"){
            document.querySelector(".stats dl dd:first-of-type").innerHTML = 1;
            // oppure... document.querySelector(".stats").getElementsByTagName("dd")[0].innerHTML= 1;

        }else{
            document.querySelector(".stats").getElementsByTagName("dd")[1].innerHTML= 1;
        }
    }
   
}


document.getElementById("rock").addEventListener('click', function(){
    console.log(this);
    console.log($(this));
    //console.log($.innerHTML);
    var res = getResult(this.innerHTML);
    updateLabel(res);
});

document.getElementById("paper").addEventListener('click', function(){
     var result = getResult(this.innerHTML);
     updateLabel(result);
});

document.getElementById("scissors").addEventListener('click',function(){ 
     var result = getResult(this.innerHTML);
     updateLabel(result);
});

document.getElementById("start-game").addEventListener('click', function() {
    //remove hidden class
    document.querySelector(".buttons").className = document.querySelector(".buttons").className.replace(/(?:^|\s)hidden(?!\S)/,'');
    
});
