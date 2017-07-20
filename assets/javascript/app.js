//Variables declared globaly
var correct;
var incorrect;
var counter = 20;
var timer;
var totalScore = 0;
var myValue;
var interval


/*Click the start button and start the game */
$("#start").on("click", trivaStart);

function trivaStart(){ //start of triviaStart
	//var time = timeConverter();
	console.log("The start button works!")//debugging
	//This function trackes the correct answers
	$(document).ready(function(){
		$(document).on("click", "input",thisFunction);
		function thisFunction(){
		myValue = $(this).attr("value");
		totalScore += +myValue;
		console.log(myValue);//debugging 
		console.log(totalScore);//debugging
		}
   	//This is for the timer
	interval = setInterval(myTimer ,1000);
        function myTimer(){
    	counter --;
 
    $("#header").html("<h1>Trivia! Trivia! Trivia!</h1> <br> <h3>Time remaining "+counter+" seconds</h3>");
    console.log(counter); //debugging  
   		if (counter === 0){
        	clearInterval(interval);
        	theEnd();
    	}
	}

	//try to put this in to a for loop
    $("#header2").html("<br><p>What is the DOM?</p><br>");
    $("#header2").append("<form> <input type='radio' name='answer' value='1'> Document Object Model <input type='radio' name='answer' value='0'> Document Object Mode <br> <input type='radio' name='answer' value='0'> Digital Object Mode <input type='radio' name='answer' value='0'> Dungon Of Monsters <br> </form>");
	$("#header2").append("<br><p>What does HTML stand for?</p><br>");
	$("#header2").append("<form> <input type='radio' name='answer' value='0'> Hyper toddlers making lemonade <input type='radio' name='answer' value='0'> Hypertext madeup language <br> <input type='radio' name='answer' value='1'> Hypertext markup language <input type='radio' name='answer' value='0'> Hypertext mobile language <br> </form>");
	$("#header2").append("<br><p>What does CSS stand for?</p><br>");
	$("#header2").append("<form> <input type='radio' name='answer' value='0'> Carbonated Soda Slurpy <input type='radio' name='answer' value='0'> Carbuncle shimmy shack <br> <input type='radio' name='answer' value='0'> Cat Styling salon <input type='radio' name='answer' value='1'> Cascading Style Sheet<br> </form>");
	$("#header2").append("<br><p>What does AJAX stand for?</p><br>");
	$("#header2").append("<form> <input type='radio' name='answer' value='0'> Awsome jazz asynchronous xylophone <input type='radio' name='answer' value='0'>Animals jumping asynchronously examples<br> <input type='radio' name='answer' value='0'>Clean dishes at low prices <input type='radio' name='answer' value='1'>Asynchronous JavaScript and XML<br> </form>");
	$("#header2").append("<br><p>What does PHP stand for?</p><br>");
	$("#header2").append("<form> <input type='radio' name='answer' value='1'>HyperText Preprocessor<input type='radio' name='answer' value='0'>People Happy People<br><input type='radio' name='answer' value='0'>porcupine helping pinapples<input type='radio' name='answer' value='0'>plentiful happy platypuses <br> </form>");
	$("#header2").append("<br><p>What does JSON stand for?</p><br>");
	$("#header2").append("<form><input type='radio' name='answer' value='0'>jumpin style of norwegians <input type='radio' name='answer' value='0'> Just sit on nothing<br><input type='radio' name='answer' value='1'>JavaScript Object Notation <input type='radio' name='answer' value='0'>Jason Simon Oliver Nathan <br> </form>");
	$("#header2").append("<br><p>What does API stand for?</p><br>");
	$("#header2").append("<form><input type='radio' name='answer' value='0'>Apple pie interface <input type='radio' name='answer' value='1'>Application programming interface<br> <input type='radio' name='answer' value='0'>Aqua polo incognito <input type='radio' name='answer' value='0'>Application prepending intercom <br> </form>");
	$("#header2").append("<br><p>What does GIF stand for?</p><br>");
	$("#header2").append("<form><input type='radio' name='answer' value='0'>Grummpy ignorant farts<input type='radio' name='answer' value='0'> Get in fast!<br><input type='radio' name='answer' value='1'>Graphics Interchange Format<input type='radio' name='answer' value='0'> Git Interchange Forum<br> </form>");
	});
}//end of triviaStart



//--------------------------------------------------end function goes here-------------------------------------
	    /**/
	    function theEnd(){
	    	/*If the person clickes thr correct answer multiple times,
	    	this will amke sure that they cant get a score higher than 100%*/
	    	if (totalScore > 8) {
	    		totalScore = 8
	    	}
	    	//displayes the total correct and incorrect then resets the game
	    	var missed = 8 - totalScore 
	    	alert("Times up! Your score is " + totalScore + " correct and " + missed +" inccorect")
	    	//document.getElementById("theContainer").reset();
	    };

//------------------------------------------------------------------------------------------------------------
/*var questions = [
{	question:
	
	answer:
	
}

]*/