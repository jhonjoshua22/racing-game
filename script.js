let turns = 0;
let player1 = 0;
let player2 = 0;
let lastblock1;
let lastblock2;

function dicenum(min, max) {
	turns += 1;
	let x = Math.floor(Math.random() * (max - min)) + min;
	
	if (turns % 2 != 0) {
		document.getElementById('arrow1').style.visibility = 'hidden';
		document.getElementById('arrow2').style.visibility = 'visible';
		lastblock1 = player1;
		player1 += x;
		if (player1 > 53) {
			document.getElementById('54').style.backgroundColor = "red";
			document.getElementById('54').style.animation = 'bounce 1s linear infinite';
			document.getElementById('54').style.border = '0.5vw solid black';
			document.getElementById('pl1').innerHTML = player1;
			document.getElementById(lastblock1).style.backgroundColor = "rgb(200, 200, 200)";
			document.getElementById(lastblock1).style.animation = 'none';
			document.getElementById(lastblock1).style.border = '0.1vw solid black';
			const button = document.getElementById('mybutton');
			button.disabled = true;
			return "PLAYER 1 WINS!";
		} else {
		document.getElementById(player1).style.backgroundColor = "red";
		document.getElementById(player1).style.animation = 'bounce 1s linear infinite';
		document.getElementById(player1).style.border = '0.5vw solid black';
		document.getElementById('pl1').innerHTML = player1;
		}
	} else { 
		document.getElementById('arrow1').style.visibility = 'visible';
		document.getElementById('arrow2').style.visibility = 'hidden';
		lastblock2 = player2;
		player2 += x;
		if (player2 > 53) {
			document.getElementById('54').style.backgroundColor = "blue";
			document.getElementById('54').style.animation = 'bounce 1s linear infinite';
			document.getElementById('54').style.border = '0.5vw solid black';
			document.getElementById('pl2').innerHTML = player2;
			document.getElementById(lastblock2).style.backgroundColor = "rgb(200, 200, 200)";
			document.getElementById(lastblock2).style.animation = 'none';
			document.getElementById(lastblock2).style.border = '0.1vw solid black';	
			const button = document.getElementById('mybutton');
			button.disabled = true;
			return "PLAYER 2 WINS!";
		} else {
		document.getElementById(player2).style.backgroundColor = "blue";
		document.getElementById(player2).style.animation = 'bounce 1s linear infinite';
		document.getElementById(player2).style.border = '0.5vw solid black';
		document.getElementById('pl2').innerHTML = player2;
		}
	}

	if (turns > 2) {
		if (lastblock1 == player2) {
			document.getElementById(lastblock1).style.backgroundColor = "blue";
			document.getElementById(lastblock1).style.animation = 'bounce 1s linear infinite';
			document.getElementById(lastblock1).style.border = '0.5vw solid black';
		} else {
		document.getElementById(lastblock1).style.backgroundColor = "rgb(200, 200, 200)";
		document.getElementById(lastblock1).style.animation = 'none';
		document.getElementById(lastblock1).style.border = '0.1vw solid black';
		}
		if (lastblock2 == player1) {
			document.getElementById(lastblock2).style.backgroundColor = "red";
			document.getElementById(lastblock2).style.animation = 'bounce 1s linear infinite';
			document.getElementById(lastblock2).style.border = '0.5vw solid black';
		} else {
		document.getElementById(lastblock2).style.backgroundColor = "rgb(200, 200, 200)";
		document.getElementById(lastblock2).style.animation = 'none';
		document.getElementById(lastblock2).style.border = '0.1vw solid black';	
		}
	} 
	return x;
}
