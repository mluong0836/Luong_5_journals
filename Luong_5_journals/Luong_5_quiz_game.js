var grade = 10;
var name = prompt("What is your name?"); 

alert("Hi " + name + ". Welcome to Micheal's trivia Quest!");
confirm("Start Now!");

alert("Is Javascript the same thing as Java?");
var one = prompt("yes or no");
var check_one;

if(one == "no") {
    alert("That is correct!");
    check_one = true;
} else {
    alert("Just stop and exit right now. That's the easiest question and you've got it wrong!");
    check_one = false;
    grade--;
}

confirm("Are you ready for the next question?");
var two = prompt("How does one specify the string or integer of a variable?" + "\n A. = \n B. == \n C. ===");
var check_two;

if(two == "A") {
    alert("That is correct!");   
    check_two = true;
} else if(two == "B") {
    alert("That is not correct. == checks the value.");
    check_two = false;
    grade--;
} else {
    alert("That is incorrect! === checks different values, such as strings, integers, etc...");
    check_two = false;
    grade--;
}

confirm("Are you ready for question number 3?");
var three = prompt("What's the difference between public and private int?\n\n A. Public makes it acessible throughout other classes." + 
                  "while private ints makes it only accessible for that class.\n \n B. Public makes it only accessible for that class while\n" +
                  "private makes it accessible every class.\n \n C. Both are the same thing, people just wanted to overcomplicate things!.\n \n" +
                  "D. You don't need to know about this! Choose A to D");
var check_three;

if(three == "A") {
    alert("That is correct!");
    check_three = true;
} else if(three == "B") {
    alert("That's the opposite of the correct answer! WORNG!");
    check_three = false;
    grade--;
} else {
    alert("WORNG! Go back to preschool!");
    check_three = false;
    grade--;
}

confirm("Are you ready for question 4");
var four = prompt("What does equivocate mean? \n \n A. diligent, hard-working, sedulous. \n \n B. Make thin. weaken, enervate. \n \n" +
                 "C. lie, mislead, conceal the truth.\n \n D. calm, sluggish temperament; unemotional.");
var check_four;

if(four == "C"){
    alert("NICE. That's one of the most difficult words that illerate people like you have problems with.");
    check_four = true;
} else {
    alert("OF COURSE you couldn't get that right. SO ILLETRATE!");
    check_four = false;
    grade--;
}

confirm("Are you ready for question 5");
var five = prompt("Describe Micheal's sister.\n\n A. Annoying\n\n B. Anime Freak\n\n C. Name is Kim\n\n D. All the above.");
var check_five;

if(five == "D") {
    alert("CORRECT!");
    check_five = true;
} else {
    alert("The answer was D. WRONG!");
    check_five = false;
    grade--;
}

confirm("Are you ready for question six?");
var six = prompt("What are wrapper classes?\n\n A. An interface can only declare constants and instance methods, but cannot implement a default behavior. All methods are implicitly" +                       "abstract.\n\n B.Class that can't be extended nor subclassed. Methods can't be overridden when its class is inherited. And you can't change value of a final variable." +
                "\n\n C. Specified classes for each primitive data type. \n\n D. None of the above.");
var check_six;

if(six == "C") {
    alert("CORRECT! You know your stuff!");
    check_six = true;
} else{
    alert("Wrong! Please relearn Java.");
    check_six = false;
    grade--;
}

confirm("Are you ready for question number seven");
var seven = prompt("In java, is it necessary that each try block must be followed by a catch block?\n\n A. No, because java is programmed to resolve issues\n\n" +
                  "B. Yes, because try blocks are necessary for booleans to run correctly.\n\n C. No, but it should be followed by a catch or finally.\n\n" +
                  "D. None of the above");	

var check_seven;
    
if(seven == "A") {
    alert("Wrong!");
    alert("Right answer, but wrong explanation.");
    check_seven = false;
    //grade--;
} else if(seven == "B") {
    alert("Not even close!");
    alert("NO RELATIONSHIP AT ALL!");
    check_seven = false;
    //grade--;
} else if(seven == "D") {
    alert("Never chose this answer. You are always wrong!");
    check_seven = false;
    grade--;
} else{
    alert("CORRECT!");
    check_seven = true;
}
    
confirm("Are you ready for question eight?");    
var eight = prompt("What is 'null' in JavaScript?\n\n A. Value is zero. \n\n B. Value is equal to what you typed.\n\n C. primitive data type indicating 'no value' is present\n\n" +
                  "D. All the above");
var check_eigth;
    
if(eight == "C") {
    alert("CORRECT! That is right, null means no value.");
    check_eigth = true;
} else{
    alert("WORNG! Null means no value present.");
    check_eigth = false;
    grade--;
}
    
confirm("Are you ready for question 9");
var nine = prompt("What is Micheal's last name?");
var check_nine;
    
if(nine == "Luong") {
    alert("How do you know my last name?");
    check_nine = true;
} else{
    alert("My last name is Luong");
    check_nine = false;
    grade--;
} 
    
confirm("Last Question. Are you ready?");
var ten = prompt("Where is the main Samsung company located?");
var check_ten;
    
if(nine == "Korea"){
    alert("Great Job at googling.");
    check_ten = true;
} else {
    alert("WRONG! Did you know that this question be easily searched.");
    check_ten = false;
    grade--;
}
    
    prompt("You have completed the quiz. Please feel free to check your grade below and view the questions that you missed and got right with the view" +
          "questions.");
    
function gradecheck() {
    prompt("Here are the results from your quiz:");
    
    if(grade == 10) {
        prompt("Great job! You got all of them right!.");
    } else if(grade == 9) {
        prompt("Great job you got 90% correct.");
    } else if(grade == 8) {
        prompt("You got 80% correct");
    } else if(grade == 7) {
        prompt("You have 70% correct!");
    } else if(grade == 6) {
        prompt("You have 60% correct!");
    } else if(grade == 5) {
        prompt("You have half of them correct.");
    } else if(grade == 4) {
        prompt("You have 40%");
    } else if(grade == 3) {
        prompt("You have a 30");
    } else if(grade == 2) {
        prompt("You have a 20.");
    } else if(grade == 1) {
        prompt("You got a 10.");
    } else {
        prompt("You suck, you missed all of them!");
    }
}
    
    function reloadfunction() {
        location.reload();
    }
    
    function cancel() {
        prompt("Thanks for playing");
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    