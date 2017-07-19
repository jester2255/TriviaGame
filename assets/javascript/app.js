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
    		theEnd();
        	clearInterval(interval);
    	}
	}

	//try to put this in to a for loop
    $("#header2").html("<br><p>What is the DOM?</p><br>");
    $("#header2").append("<form> <input type='radio' name='answer' value='1'> Document Object Model <input type='radio' name='answer' value='0'> Document Object Mode <br> <input type='radio' name='answer' value='0'> Digital Object Mode <input type='radio' name='answer' value='0'> Dungon Of Monsters <br> </form>");
	$("#header2").append("<br><p>What does HTML stand for?</p><br>");
	$("#header2").append("<form> <input type='radio' name='answer' value='0'> Hyper toddlers making lemonade <input type='radio' name='answer' value='0'> Hypertext madeup language <br> <input type='radio' name='answer' value='1'> Hypertext markup language <input type='radio' name='answer' value='0'> Hypertext mobile language <br> </form>");
	$("#header2").append("<br><p>What does CSS stand for?</p><br>");
	$("#header2").append("<form> <input type='radio' name='answer' value='0'> Carbonated Soda Slurpy <input type='radio' name='answer' value='0'> Carbuncle shimmy shack <br> <input type='radio' name='answer' value='0'> Cat Styling salon <input type='radio' name='answer' value='1'> Cascading Style Sheet<br> </form>");
	$("#header2").append("<br><p>What dose AJAX stand for?</p><br>");
	$("#header2").append("<!--<form> <input type='radio' name='answer' value='0'> Awsome jazz asynchronous xylophone <input type='radio' name='answer' value='0'>Animals jumping asynchronously examples<br> <input type='radio' name='answer' value='0'>Clean dishes at low prices <input type='radio' name='answer' value='1'>Asynchronous JavaScript and XML<br> </form>");
	$("#header2").append("<br><p>What does PHP stand for?</p><br>");
	$("#header2").append("<form> <input type='radio' name='answer' value='1'>HyperText Preprocessor<input type='radio' name='answer' value='0'>People Happy People<br><input type='radio' name='answer' value='0'>porcupine helping pinapples<input type='radio' name='answer' value='0'>plentiful happy platypuses <br> </form>");
	$("#header2").append("<br><p>Question 6</p><br>");
	$("#header2").append("<form> <input type='radio' name='answer' value='1'>I am correct <input type='radio' name='answer' value='0'> I am incorrect<br> <input type='radio' name='answer' value='0'>I am incorrect <input type='radio' name='answer' value='0'>I am incorrect<br> </form>");
	$("#header2").append("<br><p>Question 7</p><br>");
	$("#header2").append("<form> <input type='radio' name='answer' value='1'>I am correct <input type='radio' name='answer' value='0'> I am incorrect<br> <input type='radio' name='answer' value='0'>I am incorrect <input type='radio' name='answer' value='0'>I am incorrect<br> </form>");
	$("#header2").append("<br><p>Question 8</p><br>");
	$("#header2").append("<form> <input type='radio' name='answer' value='1'>I am correct <input type='radio' name='answer' value='0'> I am incorrect<br> <input type='radio' name='answer' value='0'>I am incorrect <input type='radio' name='answer' value='0'>I am incorrect<br> </form>");
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
	    	document.getElementById("theContainer").reset();
	    };

//------------------------------------------------------------------------------------------------------------
/*var questions = [
{	question:
	
	answer:
	
}

]*/