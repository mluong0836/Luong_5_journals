var row = 40;
var column = 40;
var hints = 5;
var rand = Math.floor((Math.random() * 140) + 0);
var rand2 = Math.floor((Math.random() * 140) + 0);
var rand3 = Math.floor((Math.random() * 140) + 0);
var rand4 = Math.floor((Math.random() * 140) + 0);
var rand5 = Math.floor((Math.random() * 140) + 0);

function draw(a, b, c) {
    var i;
    var j;
    for(i = 0; i < 140; i++) {
        
        if(i == rand) {
            $("#q").append( "<img class='Img' src='whale2.png'/>" );
        } else if(i == rand2) {
            $("#q").append( "<img class='Img' src='whale3.png'/>" );
        } else if(i == rand3) {
            $("#q").append( "<img class='Img' src='whale4.png'/>" );
        } else if(i == rand4) {
            $("#q").append( "<img class='Img' src='whale5.png'/>" );
        } else if(i == rand5) {
            $("#q").append( "<img class='Img' src='whale6.png'/>" );
        } else {
            $("#q").append( "<img class='theImg' src='whale.png'/>" );
        }
    }

    $(".theImg").click(function() {
        alert("NOPE!");
        var wpoints = -5;
        b = wpoints;
        a = a - 5;
        c++;
        
        alert(a);
        $(".score").html("SCORE: " + a);
        $(".turns").html("POINTS: " + b);
        $(".total").html("TURNS: " + c);
    });
        
    $(".Img").click(function() {
        alert("YOU GOT IT!");
        var wpoints = 5;
        b = wpoints;
        a = a + 5;
        c++;
        
        alert(a);
        $(".score").html("SCORE: " + a);
        $(".turns").html("POINTS: " + "+" +b);
        $(".total").html("TURNS: " + c);
    });
    
    $("#bhints").click(function() {
        hints--;
        if(hints >= 0) {
            alert("You have " + hints + " left.")
            hint();
        } else {
            alert("You've run out of hints!");
        }
    });
    
    function hint() {
        if(hints == 4) {
            alert("There are 5 different whales.");
        } else if(hints == 3) {
            alert("Check their belly...");
        } else if(hints == 2) {
            alert("Do the whales have the same color?");
        } else if(hints == 1) {
            alert("What color are their eyes?");
        } else {
            alert("The whales have different eye colors. ");
        }
    }
};





