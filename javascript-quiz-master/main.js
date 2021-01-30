


function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11= document.quiz.question11.value;
	var question12= document.quiz.question12.value;
	var question13= document.quiz.question13.value;
	var question14= document.quiz.question14.value;
	var question15= document.quiz.question15.value;
	var question16= document.quiz.question16.value;
	var question17= document.quiz.question17.value;
	var question18= document.quiz.question18.value;

	var correct = 0;

    

	 if (question1 == "yo habia estado") {
		correct++;
		document.quiz.question1.style.backgroundColor = "rgb(58,180,87)";
	   }else {
		document.quiz.question1.style.backgroundColor = "rgb(180,58,82)";
		} 

	if (question2 == "yo he estado" ) {
		correct++;
		document.quiz.question2.style.backgroundColor = "rgb(58,180,87)";
	}else{
		document.quiz.question2.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question3 == "yo estare" || "yo sere") {
		correct++;
		document.quiz.question3.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question3.style.backgroundColor = "rgb(180,58,82)";
	}

	if (question4 == "yo habre estado") {
		correct++;
		document.quiz.question4.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question4.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question5 == "yo estaria") {
		correct++;
		document.quiz.question5.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question5.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question6 == "yo habria estado") {
		correct++;
		document.quiz.question6.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question6.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question7 == "yo voy a estar") {
		correct++;
		document.quiz.question7.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question7.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question8 == "yo iba a estar") {
		correct++;
		document.quiz.question8.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question8.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question9 == "yo estuve") {
		correct++;
		document.quiz.question9.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question9.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question10 == "estuvimos") {
		correct++;
		document.quiz.question10.style.backgroundColor = "rgb(58,180,87)";
	}else{
		document.quiz.question10.style.backgroundColor = "rgb(180,58,82)";
			}
    if (question11 == "yo habia") {
		correct++;
		document.quiz.question11.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question11.style.backgroundColor = "rgb(180,58,82)";
	}
    if (question12 == "yo he") {
		correct++;
		document.quiz.question12.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question12.style.backgroundColor = "rgb(180,58,82)";
	}
    if (question13 == "yo hare") {
		correct++;
		document.quiz.question13.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question13.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question14 == "yo habre") {
		correct++;
		document.quiz.question14.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question14.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question15 == "ria") {
		correct++;
		document.quiz.question15.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question15.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question16 == "yo habria") {
		correct++;
		document.quiz.question16.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question16.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question17 == "yo voy a") {
		correct++;
		document.quiz.question17.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question17.style.backgroundColor = "rgb(180,58,82)";
	}
	if (question18 == "yo iba a") {
		correct++;
		document.quiz.question18.style.backgroundColor = "rgb(58,180,87)";
	}else{
        document.quiz.question18.style.backgroundColor = "rgb(180,58,82)";
	}
	



	var pictures = ["img/lose.gif", "img/oo.webp","img/win.gif","img/lose.gif", "img/oo.webp","img/win.gif","img/lose.gif", "img/oo.webp","img/win.gif","img/lose.gif", "img/oo.webp","img/win.gif","img/lose.gif", "img/oo.webp","img/win.gif","img/lose.gif", "img/oo.webp","img/win.gif","img/sorpresa.webp"];
	var messages = [ "You really need to do better","That's just okay","Great job!","You really need to do better","That's just okay","Great job!","You really need to do better","That's just okay","Great job!","You really need to do better","That's just okay","Great job!","You really need to do better","That's just okay","Great job!","You really need to do better","That's just okay","Great job!","you did it!"];
	var score;


	if (correct == 0) {
		score = 0;
	}

	if (correct == 1) {
		score = 1;
	}

	if (correct == 2) {
		score = 2;
	}

	if (correct == 3) {
		score = 3;
	}

	if (correct == 4) {
		score = 4;
	}

	if (correct == 5) {
		score = 5;
	}

	if (correct == 6) {
		score = 6;
	}

	if (correct == 7) {
		score = 7;
	}

	if (correct == 8) {
		score = 8;
	}

	if (correct == 9) {
		score = 9;
	}

	if (correct == 10) {
		score = 10;
	}

	if (correct == 11) {
		score = 11;
	}

	if (correct == 12) {
		score = 12;
	}

	if (correct == 13) {
		score = 13;
	}

	if (correct == 14) {
		score = 14;
	}
	if (correct == 15) {
		score = 15;
	}

	if (correct == 16) {
		score = 16;
	}

	if (correct == 17) {
		score = 17;
	}

	if (correct == 18) {
		score = 18;
	}


	
	document.getElementById("after_submit").style.width= "49.8%";
	document.getElementById("quiz").style.marginLeft = "0"
	

	document.getElementById("message").innerHTML = messages[score];

	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

	document.getElementById("picture").src = pictures[score];
	}
	


	
	
