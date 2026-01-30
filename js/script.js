var list = ["apple", "banana", "orange"];
$("#practice").append(list[1]);
var L = list.length;

var fakeCards = [];

$("#practice").append("list length before" + fakeCards.length)

for(i=1; i<53; i++) {
    list.push(i);
}
$("#practice").append("list length after" + fakeCards.length)

var passengers = [
    ["Lee", "red", "grapes"],
    ["Dave", "blue", "oranges"]
];

list.shift();
$("#practice").html(list[list.length-1]);

Pop, shift, splice
var firstPlayer = [];
var secondPlayer = [];
var playedCards = [];
var cards = [];
var $draw = $("#draw");
var $firstPlayer = $("#firstPlayer");
var $secondPlayer = $("#secondPlayer");
var $firstPlayerNumber = $("#firstPlayerNumber");
var $secondPlayerNumber = $("#secondPlayerNumber");
var $firstPlayerSuit = $("#firstPlayerSuit");
var $secondPlayerSuit = $("#secondPlayerSuit");
var $winner = $("#winner");
var $player1Count = $("#player1Count");
var $player2Count = $("#player2Count");
var $submit = $("#submit");
var number1;
var number2;
var suit1;
var suit2;
var numberImg1;
var numberImg2;
var compare = 0;
var chosen = 0;
var winner = 0;
var integerChoice = 0;
var addition = 0;
var multiplication = 0;
var subtraction = 0;
var arithmetic = 0;

for (i=1; i<14; i++) {
    for (k=1; k<5; k++) {
        var j = [i,k];
        cards.push(j);
    }
}

    cards.shuffle = function() {
        console.log("shuffle");
        var input = this;
        for (var i = cards.length-1; i >=0; i--) {
            var randomIndex = Math.floor(Math.random()*(i+1));
            var itemAtIndex = cards[randomIndex][0];
            var itemAtSecond = cards[randomIndex][1];

            input[randomIndex][0] = input[i][0];
            input[randomIndex][1] = input[i][1];
            input[i][0] = itemAtIndex;
            input[i][1] = itemAtSecond;
        }
        return input;
    }

    //end of shuffle function

    cards.shuffle();

    
    var half = cards.length/2;
    for (i=0; i<half; i++) {
        firstPlayer.push(cards[i]);
    }

    cards.splice(0, half);

    secondPlayer = cards;
    
//Turn off the ability to click the winner until math options is chosen
$secondPlayer.unbind("click");
$firstPlayer.unbind("click");
    for (i=0; i<cards.length; i++) {
        firstPlayer.push(cards[i]);
        secondPlayer.push(cards[i]);
    }
    $player1Count.html(firstPlayer.length);
    $player2Count.html(secondPlayer.length);

    function assign(){

                $firstPlayer.css("border-color", "black");
        $secondPlayer.css("border-color", "black");

        if(firstPlayer.length == 0 || secondPlayer.length == 0){
            endGame();
        }
$draw.on('click', function() {

    assign();
    })
    
        console.log
        $firstPlayerSuit.empty();
        $secondPlayerSuit.empty();

        $firstPlayerSuit.css("display", "block");
        $secondPlayerSuit.css("display","block");

        number1=firstPlayer[0][0];
        number2=secondPlayer[0][0];

        $firstPlayerNumber.html(number1);
        $secondPlayerNumber.html(number2);

        suit1 = firstPlayer[0][1];
        suit2 = secondPlayer[0][1];

    if (integerChoice == 1){
            if (suit1 == 1){
                number1 = number1 - 2*(number1);
            }
            if (suit1 == 2){
                number1 = number1 - 2*(number1);
            }
            if (suit2 == 1){
                number2 = number2 - 2*(number2);
            }
            if (suit2 == 2){
                number2 = number2 - 2*(number2);
            }
        }

    if (suit1 == 1) {
        suit1 = "<img src='./images/hearts.png'/>"
    }
    if (suit1 == 2) {
        suit1 = "<img src='./images/diamonds.png'/>"
    }
    if (suit1 == 3) {
        suit1 = "<img src='./images/clubs.png'/>"
    }
    if (suit1 == 4) {
        suit1 = "<img src='./images/spades.png'/>"
    }

    if (suit2 == 1) {
        suit2 = "<img src='./images/hearts.png'/>"
    }
    if (suit2 == 2) {
        suit2 = "<img src='./images/diamonds.png'/>"
    }
    if (suit2 == 3) {
        suit2 = "<img src='./images/clubs.png'/>"
    }
    if (suit2 == 4) {
        suit2 = "<img src='./images/spades.png'/>"
    }

    if(number1<11) {
    for (i=0; i<(Math.abs(number1)); i++) {
        $firstPlayerSuit.append(suit1);
    };
} else {
    if (number1 == 11 || number1 == -11) {
        numberImg1 = "<img src='./images/Jack.png/>";
        $firstPlayerSuit.append(suit1);
        $firstPlayerNumber.html(numberImg1);
    }
}
if (number1 == 12 || number1 == -12) {

numberImg1 = "<img src='./images/queen.png'/>";

$firstPlayerSuit.append(suit1);

$firstPlayerNumber.html(numberImg1);

}

if (number1 == 13 || number1 == -13) {

numberImg1 = "<img src='./images/king.png'/>";

$firstPlayerSuit.append(suit1);

$firstPlayerNumber.html(numberImg1);

}

    }
if(number2<11) {
    for (i=0; i<(Math.abs(number2)); i++) {
        $secondPlayerSuitPlayerSuit.append(suit2);
    };
} else {
    if (number2 == 11 || number2 == -11) {
        numberImg2 = "<img src='./images/Jack.png/>";
        $secondPlayerSuit.append(suit2);
        $secondPlayerNumber.html(numberImg2);
    }
}
if (number2 == 12 || number2 == -12) {

numberImg2 = "<img src='./images/queen.png'/>";

$secondPlayerSuit.append(suit2);

$secondPlayerNumber.html(numberImg2);

}

if (number2 == 13 || number2 == -13) {

numberImg2 = "<img src='./images/king.png'/>";

$secondPlayerSuit.append(suit2);

$secondPlayerNumber.html(numberImg2);

}
    

if (integerChoice == 1){

if (suit1 == 1){

number1 = (-1)*number1;

}

if (suit1 == 2){

number1 = (-1)*number1;

}

if (suit2 == 1){

number2 = (-1)*number2;

}

if (suit2 == 2){

number2 = (-1)*number2;

}

}


    for (i=0; i<number1; i++) {
        $firstPlayerSuit.append(suit1);

    };
    for (i=0; i<number2; i++) {
        $secondPlayerSuit.append(suit2);
    }
    playedCards.push(firstPlayer[0]);
    playedCards.push(secondPlayer[0]);;
    firstPlayer.splice(0,1);
    secondPlayer.splice(0,1);

    if (number1 > number2) {
        $winner.html("Player One Wins");
        for (i=0; i<playedCards.length; i++) {
            firstPlayer.push(playedCards[i]);
                    }
    } else if (number2 > number1) {
        $winner.html("Player Two Wins");
        for (i=0; i<playedCards.length; i++) {
            secondPlayer.push(playedCards[i]);
            
        }
    } 

    playedCards = [];
    $player1Count.html(firstPlayer.length);
    $player2Count.html(secondPlayer.length);

    playedCards.push(firstPlayer[0]);
    playedCards.push(secondPlayer[0]);

    firstPlayer.splice(0,1);
    secondPlayer.splice(0,1);
    $player1Count.html(firstPlayer.length);
    $player2Count.html(secondPlayer.length);
    
;
    
    function war() {

        $draw.prop('disabled', true);
        $winner.html("This means war!");
        for (i=0; i<3; i++){
            playedCards.push(firstPlayer[0]);
            playedCards.push(secondPlayer[0]);
            firstPlayer.splice(0,1);
            secondPlayer.splice(0,1);
            $player1Count.html(firstPlayer.length);
            $player2Count.html(secondPlayer.length);
            console.log("put down a card", number1, number2);
        }
        $firstPlayerSuit.css("display", "none");
        $secondPlayerSuit.css("display", "none");

        numberImg1 = "<img style='height:14rem;' src='./images/card.png'/>"
        $firstPlayerNumber.html(numberImg1);
        numberImg2 = "<img style='height:14rem;' src='./images/card.png'/>"
        $secondPlayerNumber.html(numberImg2);

        $draw.prop('disabled', false);
    }

    


    $draw.on('click', function()) {
        $firstPlayerSuit.empty();
        $secondPlayerSuit.empty();
        var number1=firstPlayer[0][0];
        var number2=secondPlayer[0][0];
        //need to put in Jack, Queen, King
        $firstPlayerNumber.html(number1);
        $secondPlayerNumber.html(number2);
        suit1 = firstPlayer[0][1];
        suit2 = secondPlayer[0][1];
    }


    function compareMath(){
        console.org("run compare");
        if (number1 > number2) {
            winner = 1;
        } else {
            winner = 2;
        }
    }

    function addMath() {
        answer = number1 + number2;
        if (playerAnswer == answer) {
            winner = 1;
        } else {
            winner = 2;
        }
    }

    function subtractMath() {
        answer = number1 - number2;
        if (playerAnswer == answer) {
            winner = 1;
        } else {
            winner = 2;
        }
    }

    function multiplyMath() {
        answer = number1 * number2;
        if (playerAnswer == answer) {
            winner = 1;
        } else {
            winner = 2;
        }
    }

    function mathCheck(){
        
        if (chosen == winner){
            for (i=0; i<playedCards.length; i++) {
                firstPlayer.push(playedCards[i]);
            }
            $winner.html("Player One Wins");
            $firstPlayer.css("border-color", "red");
            $player1Count.html(firstPlayer.length);
            playedCards=[];
        } else if (chosen != winner) {
            for (i=0; i<playedCards.length; i++) {
                secondPlayer.push(playedCards[i]);
            }
            $winner.html("Player Two Wins");
            $secondPlayer.css("border-color", "red");
            $player2Count.html(secondPlayer.length);
            playedCards=[];
        }
    }

    console.log("call greater");
greater();

    function greater(){

        
        if (number1 > number2) {
            $winner.html("Player One Wins");
            for (i=0; i<playedCards.length; i++) {
                firstPlayer.push(playedCards[i]);
            }
            $player1Count.html(firstPlayer.length);
            playedCards=[];
        } else if (number2 > number1){
            $winner.html("player Two Wins");
            for (i=0; i<playedCards.length; i++) {
                secondPlayer.push(playedCards[i]);
            }
            $player2Count.html(secondPlayer);
            playedCards=[];
        } else if (number1 === number2) {
            war();
        }
    }

    
if (compare == 1) {
    compareMath();
    return;
}
    if (addition == 1) {
        addMath();
        return;
    }

    function endGame () {

        if(firstPlayer.length == 0){
            $winner.html("GAME OVER </br> Player Two Wins </br> Player One has no more cards to play.");
        }
        if(secondPlayer.length == 0){
            $winner.html("GAME OVER </br> Player One Wins </br> Player Two has no more cards to play.");
        }
        $winner.css("color", "red");
        $winner.css("font-weight", "bold");
        $("#end").css("display", "none");
        $firstPlayerNumber.html("");
        $secondPlayerSuit.html("");
        $draw.off();
    }

$("#mathOptions").on('click', function(){
$(".hidden").css("display", "nonw");
$("#options").css("display", "block");
})

$("#compare").on('click', function() {
$("#options").css("display", "none");
$("#integers").css("display", "block");
$("#compareDirections").css("display", "block");
$("#one").css("display", "block");
$("#two").css("display", "block");



$player1Count.on('click', function(){
chosen = 1;
mathCheck();
}

)

$player2Count.on('click', function(){
chosen = 2;
mathCheck();
})
})
//When the player vlicks on arithmetic
$("#arithmetic").on('click', function() {
$("#options").css("display", "none");
$("#math").css("display", "flex");
$("#mathOptions").css("display", "block");
$("#directions").css("display", "block");
arithmetic = 1;                      ,

})

$("#math").on('click', function(){
    $("#math").css("display", "none");
    $("#integers").css("display", "block");
})

$("#no").on('click', function() {
    $("#integers").css("display", "none");
})

$("#yes").on('click', function() {
    $("#integers").css("display", "none");
    $("#integersDirections").css("display", "block");
    integerChoice = 1;
})

$("#add").on('click', function() {
    $("#addDirections").css("display", "block");
    addition = 1;
})

$("#multiply").on('click', function() {
    $("#multiplyDirections").css("display", "block");
    multiplication = 1;
})

$("#subtract").on('click', function() {
    $("subtractDirections").css("display", "block");
    subtraction = 1;
})

$("#one").on('click', function() {
    chosen = 1;
    mathCheck();
})

$("#two").on('click', function() {
    chosen = 2;
    mathCheck();
})

$("#two").on('click', function() {
    chosen = 2;
    mathCheck();
})

$submit.on('click', function(){
    playerAnswer = $playerAnswer.val().trim();
    Submit();
})

function submit() {

if (addition == 1) { 
    
    addMath();
}
if (subtraction == 1) { 
    
    subtractMath();
}

if (multiplication == 1) { 
    
    multiplyMath();
}



if (playerAnswer == answer) {

chosen = winner;

} else {

chosen = winner - 1;

}

mathCheck();

}

function addMath() {

answer = number1 + number2;

}

$draw.on('click', function() {
    if (arithmetic == 1){
        $("#submit").css("display", "block");
        $("#playerAnswer").css("display", "block");
    }

    $('input').val(''); //This empties out the input box.

    assign();
})