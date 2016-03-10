alert("ROCK! PAPER! SCISSORS!");
var playerchoice;
var computerchoices;
var lose_audio = new Audio('Taylor_Swift.mp3');
var Night = true;
var compscore = 0;
var playerscore = 0;

lose_audio.play();

function Player(i) {
    playerchoice = i;
    if(i == 0) {
        //document.getElementById("for_rock").innerHTML=("Player chose ROCK");
        document.getElementById("playerside").style.backgroundImage = "url('rock.png')";
    } else if (i == 1) {
       // document.getElementById("for_paper").innerHTML = "Player chose PAPER"; 
        document.getElementById("playerside").style.backgroundImage = "url('paper.png')";
    } else {
      //  document.getElementById("for_scissors").innerHTML = "Player chose SCISSORS";
        document.getElementById("playerside").style.backgroundImage = "url('scissors.png')";
    }
};
    
    function Computer() {

        var computer_choice = Math.floor((Math.random() * 3) + 0);
        computerchoices = computer_choice;
        alert("HI");
        lose_audio.play();
        if(computer_choice == 0) {
            alert("The computer chose PAPER");
            document.getElementById("computerside").style.backgroundImage = "url('paper.png')";
        } else if(computer_choice == 1) {
            alert("The computer chose ROCK!");
            document.getElementById("computerside").style.backgroundImage = "url('rock.png')";
        } else {
            alert("The computer chose Scissors!");
            document.getElementById("computerside").style.backgroundImage = "url('scissors.png')";
        }
         window.setTimeout("Animation()", 2000);
    };
    
       
        
        function Animation() {
            if(computerchoices == 0 && playerchoice == 1) {
                alert("Tie!");
            } else if(computerchoices == 0 && playerchoice == 0) {
                alert("You lose");
                compscore++;
                document.getElementById("cscore").innerHTML= "WINS: " + compscore;
            } else if(computerchoices == 0 && playerchoice == 2) {
                alert("You win");
                playerscore++;
                document.getElementById("pscore").innerHTML="WINS: " + compscore;
            } else if(computerchoices == 1 && playerchoice == 0) {
                alert("Tie!");
            } else if(computerchoices == 1 && playerchoice == 1) {
                alert("You win!");
                playerscore++;
                document.getElementById("pscore").innerHTML="WINS: " + compscore;
            } else if(computerchoices == 1 && playerchoice == 2) {
                alert("You lose!");
                compscore++;
                document.getElementById("cscore").innerHTML= "WINS " + compscore;
            } else if(computerchoices == 2 && playerchoice == 0) {
                alert("You win!");
                playerscore++;
                document.getElementById("pscore").innerHTML="WINS: " + compscore;
            } else if(computerchoices == 2 && playerchoice == 1) {
                alert("You lose!");
                compscore++;
                document.getElementById("cscore").innerHTML= "WINS " + compscore;
            } else if(computerchoices == 2 && playerchoice == 2) {
                alert("Tie!");
            } else {
                alert("REDO!");
            }
        };

function Change() {
    if(Night === true) {
        'use strict';
            var change1 = document.getElementById("title"),
            change2 = document.getElementById("background"),
            change3 = document.getElementById("switching"),
            change4 = document.getElementById("playerside"),
            change5 = document.getElementById("computerside"),
            change6 = document.getElementById("for_rock"),
            change7 = document.getElementById("for_paper"),
            change8 = document.getElementById("for_scissors"),
            change9 = document.getElementById("crossexamine"),
            change10 = document.getElementById("com1"),
            change11 = document.getElementById("com2"),
            change12 = document.getElementById("com3");
        
        change1.style.backgroundColor = '#f00';
        change1.style.color = '#333';
        change2.style.backgroundColor = '#224D54';
        change3.style.backgroundColor = '#00ff1d';
        change4.style.backgroundColor = '#462B63';
        change5.style.backgroundColor = '#145C1C';
        change6.style.backgroundColor = '#0C0F7A';
        change7.style.backgroundColor = '#AD7722';
        change8.style.backgroundColor = '#AD2828';
        change9.style.backgroundColor = '#35871B';
        change10.style.backgroundColor = '#35871B';
        change11.style.backgroundColor = '#0E46C7';
        change12.style.backgroundColor = '#7A210C';
            Night = false;
        
    } else {
            var change1 = document.getElementById("title"),
            change2 = document.getElementById("background"),
            change3 = document.getElementById("switching"),
            change4 = document.getElementById("playerside"),
            change5 = document.getElementById("computerside"),
            change6 = document.getElementById("for_rock"),
            change7 = document.getElementById("for_paper"),
            change8 = document.getElementById("for_scissors"),
            change9 = document.getElementById("crossexamine"),
            change10 = document.getElementById("com1"),
            change11 = document.getElementById("com2"),
            change12 = document.getElementById("com3");
        
        change1.style.backgroundColor = 'Peru';
        change1.style.color = '#333';
        change2.style.backgroundColor = 'Peru';
        change3.style.backgroundColor = 'Yellow';
        change4.style.backgroundColor = 'Yellow';
        change5.style.backgroundColor = 'Firebrick';
        change6.style.backgroundColor = 'aquamarine';
        change7.style.backgroundColor = 'rebeccapurple';
        change8.style.backgroundColor = 'olivedrab';
        change9.style.backgroundColor = '#35871B';
        change10.style.backgroundColor = 'aqua';
        change11.style.backgroundColor = '#0EburlywoodC7';
        change12.style.backgroundColor = 'darkorchid';
            Night = true;
    }
};

function over() {
    'use strict';
    var change = document.getElementById("container");
    change.style.backgroundColor = '#f3f3f3';
};

function off() {
    'use strict';
    var change = document.getElementById("container");
    change.style.backgroundColor = '#6d8c8e';
};



