var what10 = undefined;
var the10s = undefined;
var the100s = 0;
var pre = undefined;
var end = undefined;
var newnum = undefined;
function calculate() {
	var br = document.createElement("BR");
	test = "if you are reading this, this is just for testing purposes. if I'm not dumb, you aren't reading this.";
//	console.log(test);
	//this is a failsafe
	error = "Please use a whole number.";
	//the rest is code
	end = error
	var p = document.getElementById("p1");
	p.innerHTML = "The code is being buggy at the moment.";
	test = "the code run, you're just dumb.";
//	console.log(test);
	num = document.getElementById('power');
	if (Number.isInteger(Number(num.value)) && num.value != "" && Number(num.value) >= 0 && Number(num.value) <= 3003) {}
	else if (Number(num.value) > 3003) {
		p = document.getElementById("p1");
		p.innerHTML = "You have entered an unnamed number.";
		p = document.getElementById("p0");
		p.innerHTML = "Scroll down for some information about larger numbers:"
		p = document.getElementById("p2");
		p.innerHTML = " 10 to the power of 3000003 is one micrillion. ";
		p = document.getElementById("p3");
		p.innerHTML = " 10 to the power of 3000000003 is one nanillion. ";
		p = document.getElementById("p4");		
		p.innerHTML = " 10 to the power of 3000000000003 is one pictillion. ";
		p = document.getElementById("p5");		
		p.innerHTML = " 10 to the power of 3000000000000003 is one femtillion. ";
		p = document.getElementById("p6");		
		p.innerHTML = " 10 to the power of 3000000000000000003 is one attillion. ";
		p = document.getElementById("p7");		
		p.innerHTML = " 10 to the power of 3000000000000000000003 is one zeptillion. ";
		p = document.getElementById("p8");		
		p.innerHTML = " 10 to the power of 3000000000000000000000003 is one yoctillion. ";
		p = document.getElementById("p9");		
		p.innerHTML = " There are no larger (official) named numbers other than a googolplex. ";
		return;
	}
	else {
		p.innerHTML = error;
		test = "the error message happened";
	//	console.log(test);
		return;
	};
	test = "it got to the 1/10/100s line"
//	console.log(test);
	var bgin = Number(num.value) % 3;
	if (bgin == 0) {bgin = "one"};
	if (bgin == 1) {bgin = "ten"};
	if (bgin == 2) {bgin = "one hundred"};
	test = "it got to the illion part";
//	console.log(test);
	newnum = Number(num.value) - Number(num.value) % 3;
	if (newnum == 0) {
		test = "it thinks it doesn't need the end";
	//	console.log(test);
		end = ""}
	else if (newnum != 0) {
		test = "it thinks that it needs the end part";
	//	console.log(test);
		newnum = newnum / 3;
		newnum--;
		//ones
		if (newnum == 0) {end = " thousand"}
		if (newnum == 1) {end = " million"}
		if (newnum == 2) {end = " billion"}
		if (newnum == 3) {end = " trillion"}
		if (newnum == 4) {end = " quadrillion"}
		if (newnum == 5) {end = " quintillion"}
		if (newnum == 6) {end = " sextillion"}
		if (newnum == 7) {end = " septillion"}
		if (newnum == 8) {end = " octillion"}
		if (newnum == 9) {end = " nonillion"}
		else {
		tens();}
	}
	test = "it should print out the thing if it hasn't yet";
//	console.log(test);
	if (end == error) {
		p.innerHTML = error;
		test = "the other error happened";
	//	console.log(test);
	}
	else if (num.value == "100") {
		p.innerHTML = "The way you say 10 to the power of 100 is ten duotrigintillion, or one googol.";
		test = "googol";
//		console.log(test);
	}
	else {
		p.innerHTML = "The way you say 10 to the power of " + num.value + " is " + bgin + end + ".";
		test = "it did the common thing";
	//	console.log(test);
	};
	test = "the code run, you're just dumb.";
//	console.log(test);
}
function tens() {
		the10s = Math.floor(newnum / 10);
		if (the10s == 1) {
		if (newnum == 10) {pre = " "};
		if (newnum == 11) {pre = " un"};
		if (newnum == 12) {pre = " duo"};
		if (newnum == 13) {pre = " tre"};
		if (newnum == 14) {pre = " quattuor"};
		if (newnum == 15) {pre = " quinqua"};
		if (newnum == 16) {pre = " se"};
		if (newnum == 17) {pre = " septen"};
		if (newnum == 18) {pre = " octo"};
		if (newnum == 19) {pre = " noven"};
		what10 = "dec"
		end = pre + what10 + "illion";};
		if (the10s == 2) {
		if (newnum == 20) {pre = " "};
		if (newnum == 21) {pre = " un"};
		if (newnum == 22) {pre = " duo"};
		if (newnum == 23) {pre = " tres"};
		if (newnum == 24) {pre = " quattuor"};
		if (newnum == 25) {pre = " quinqua"};
		if (newnum == 26) {pre = " ses"};
		if (newnum == 27) {pre = " septem"};
		if (newnum == 28) {pre = " octo"};
		if (newnum == 29) {pre = " novem"};
		what10 = "vigint"
		end = pre + what10 + "illion";};
		if (the10s == 3) {
		if (newnum == 30) {pre = " "};
		if (newnum == 31) {pre = " un"};
		if (newnum == 32) {pre = " duo"};
		if (newnum == 33) {pre = " tres"};
		if (newnum == 34) {pre = " quattuor"};
		if (newnum == 35) {pre = " quinqua"};
		if (newnum == 36) {pre = " ses"};
		if (newnum == 37) {pre = " septen"};
		if (newnum == 38) {pre = " octo"};
		if (newnum == 39) {pre = " noven"};
		what10 = "trigint"
		end = pre + what10 + "illion";};
		if (the10s == 4) {
		if (newnum == 40) {pre = " "};
		if (newnum == 41) {pre = " un"};
		if (newnum == 42) {pre = " duo"};
		if (newnum == 43) {pre = " tres"};
		if (newnum == 44) {pre = " quattuor"};
		if (newnum == 45) {pre = " quinqua"};
		if (newnum == 46) {pre = " ses"};
		if (newnum == 47) {pre = " septen"};
		if (newnum == 48) {pre = " octo"};
		if (newnum == 49) {pre = " noven"};
		what10 = "quadragint"
		end = pre + what10 + "illion";};
		if (the10s == 5) {
		if (newnum == 50) {pre = " "};
		if (newnum == 51) {pre = " un"};
		if (newnum == 52) {pre = " duo"};
		if (newnum == 53) {pre = " tres"};
		if (newnum == 54) {pre = " quattuor"};
		if (newnum == 55) {pre = " quinqua"};
		if (newnum == 56) {pre = " ses"};
		if (newnum == 57) {pre = " septen"};
		if (newnum == 58) {pre = " octo"};
		if (newnum == 59) {pre = " noven"};
		what10 = "quinquagint"
		end = pre + what10 + "illion";};
		if (the10s == 6) {
		if (newnum == 60) {pre = " "};
		if (newnum == 61) {pre = " un"};
		if (newnum == 62) {pre = " duo"};
		if (newnum == 63) {pre = " tre"};
		if (newnum == 64) {pre = " quattuor"};
		if (newnum == 65) {pre = " quinqua"};
		if (newnum == 66) {pre = " se"};
		if (newnum == 67) {pre = " septen"};
		if (newnum == 68) {pre = " octo"};
		if (newnum == 69) {pre = " noven"};
		what10 = "sexagint"
		end = pre + what10 + "illion";};
		if (the10s == 7) {
		if (newnum == 70) {pre = " "};
		if (newnum == 71) {pre = " un"};
		if (newnum == 72) {pre = " duo"};
		if (newnum == 73) {pre = " tre"};
		if (newnum == 74) {pre = " quattuor"};
		if (newnum == 75) {pre = " quinqua"};
		if (newnum == 76) {pre = " se"};
		if (newnum == 77) {pre = " septen"};
		if (newnum == 78) {pre = " octo"};
		if (newnum == 79) {pre = " noven"};
		what10 = "septugint"
		end = pre + what10 + "illion";};
		if (the10s == 8) {
		if (newnum == 80) {pre = " "};
		if (newnum == 81) {pre = " un"};
		if (newnum == 82) {pre = " duo"};
		if (newnum == 83) {pre = " tre"};
		if (newnum == 84) {pre = " quattuor"};
		if (newnum == 85) {pre = " quinqua"};
		if (newnum == 86) {pre = " sex"};
		if (newnum == 87) {pre = " septem"};
		if (newnum == 88) {pre = " octo"};
		if (newnum == 89) {pre = " novem"};
		what10 = "octogint"
		end = pre + what10 + "illion";};
		if (the10s == 9) {
		if (newnum == 90) {pre = " "};
		if (newnum == 91) {pre = " un"};
		if (newnum == 92) {pre = " duo"};
		if (newnum == 93) {pre = " tre"};
		if (newnum == 94) {pre = " quattuor"};
		if (newnum == 95) {pre = " quinqua"};
		if (newnum == 96) {pre = " se"};
		if (newnum == 97) {pre = " septe"};
		if (newnum == 98) {pre = " octo"};
		if (newnum == 99) {pre = " nove"};
		what10 = "nonagint"
		end = pre + what10 + "illion";};
		if (newnum >= 100) {hundred()};
}
function hundred() {
	the100s = Math.floor(newnum / 100);
	if (the100s == 1) {
		the10s = the10s - 10;
		newnew = newnum - 100;
		if (newnew < 10){
		if (newnew == 0) {pre100 = " "};
		if (newnew == 1) {pre100 = " un"};
		if (newnew == 2) {pre100 = " duo"};
		if (newnew == 3) {pre100 = " tre"};
		if (newnew == 4) {pre100 = " quattuor"};
		if (newnew == 5) {pre100 = " quinqua"};
		if (newnew == 6) {pre100 = " sex"};
		if (newnew == 7) {pre100 = " septen"};
		if (newnew == 8) {pre100 = " octo"};
		if (newnew == 9) {pre100 = " noven"}; 
		end = pre100 + "centillion"}
		if (newnew >= 10) {
		newnum = newnum - 100
		if (the10s == 1) {
		if (newnum == 10) {pre = " "};
		if (newnum == 11) {pre = " un"};
		if (newnum == 12) {pre = " duo"};
		if (newnum == 13) {pre = " tre"};
		if (newnum == 14) {pre = " quattuor"};
		if (newnum == 15) {pre = " quinqua"};
		if (newnum == 16) {pre = " se"};
		if (newnum == 17) {pre = " septen"};
		if (newnum == 18) {pre = " octo"};
		if (newnum == 19) {pre = " noven"};
		what10 = "dec"
		end = pre + what10 + "illion";};
		if (the10s == 2) {
		if (newnum == 20) {pre = " "};
		if (newnum == 21) {pre = " un"};
		if (newnum == 22) {pre = " duo"};
		if (newnum == 23) {pre = " tres"};
		if (newnum == 24) {pre = " quattuor"};
		if (newnum == 25) {pre = " quinqua"};
		if (newnum == 26) {pre = " ses"};
		if (newnum == 27) {pre = " septem"};
		if (newnum == 28) {pre = " octo"};
		if (newnum == 29) {pre = " novem"};
		what10 = "vigint"
		end = pre + what10 + "illion";};
		if (the10s == 3) {
		if (newnum == 30) {pre = " "};
		if (newnum == 31) {pre = " un"};
		if (newnum == 32) {pre = " duo"};
		if (newnum == 33) {pre = " tres"};
		if (newnum == 34) {pre = " quattuor"};
		if (newnum == 35) {pre = " quinqua"};
		if (newnum == 36) {pre = " ses"};
		if (newnum == 37) {pre = " septen"};
		if (newnum == 38) {pre = " octo"};
		if (newnum == 39) {pre = " noven"};
		what10 = "trigint"
		end = pre + what10 + "illion";};
		if (the10s == 4) {
		if (newnum == 40) {pre = " "};
		if (newnum == 41) {pre = " un"};
		if (newnum == 42) {pre = " duo"};
		if (newnum == 43) {pre = " tres"};
		if (newnum == 44) {pre = " quattuor"};
		if (newnum == 45) {pre = " quinqua"};
		if (newnum == 46) {pre = " ses"};
		if (newnum == 47) {pre = " septen"};
		if (newnum == 48) {pre = " octo"};
		if (newnum == 49) {pre = " noven"};
		what10 = "quadragint"
		end = pre + what10 + "illion";};
		if (the10s == 5) {
		if (newnum == 50) {pre = " "};
		if (newnum == 51) {pre = " un"};
		if (newnum == 52) {pre = " duo"};
		if (newnum == 53) {pre = " tres"};
		if (newnum == 54) {pre = " quattuor"};
		if (newnum == 55) {pre = " quinqua"};
		if (newnum == 56) {pre = " ses"};
		if (newnum == 57) {pre = " septen"};
		if (newnum == 58) {pre = " octo"};
		if (newnum == 59) {pre = " noven"};
		what10 = "quinquagint"
		end = pre + what10 + "illion";};
		if (the10s == 6) {
		if (newnum == 60) {pre = " "};
		if (newnum == 61) {pre = " un"};
		if (newnum == 62) {pre = " duo"};
		if (newnum == 63) {pre = " tre"};
		if (newnum == 64) {pre = " quattuor"};
		if (newnum == 65) {pre = " quinqua"};
		if (newnum == 66) {pre = " se"};
		if (newnum == 67) {pre = " septen"};
		if (newnum == 68) {pre = " octo"};
		if (newnum == 69) {pre = " noven"};
		what10 = "sexagint"
		end = pre + what10 + "illion";};
		if (the10s == 7) {
		if (newnum == 70) {pre = " "};
		if (newnum == 71) {pre = " un"};
		if (newnum == 72) {pre = " duo"};
		if (newnum == 73) {pre = " tre"};
		if (newnum == 74) {pre = " quattuor"};
		if (newnum == 75) {pre = " quinqua"};
		if (newnum == 76) {pre = " se"};
		if (newnum == 77) {pre = " septen"};
		if (newnum == 78) {pre = " octo"};
		if (newnum == 79) {pre = " noven"};
		what10 = "septugint"
		end = pre + what10 + "illion";};
		if (the10s == 8) {
		if (newnum == 80) {pre = " "};
		if (newnum == 81) {pre = " un"};
		if (newnum == 82) {pre = " duo"};
		if (newnum == 83) {pre = " tre"};
		if (newnum == 84) {pre = " quattuor"};
		if (newnum == 85) {pre = " quinqua"};
		if (newnum == 86) {pre = " sex"};
		if (newnum == 87) {pre = " septem"};
		if (newnum == 88) {pre = " octo"};
		if (newnum == 89) {pre = " novem"};
		what10 = "octogint"
		end = pre + what10 + "illion";};
		if (the10s == 9) {
		if (newnum == 90) {pre = " "};
		if (newnum == 91) {pre = " un"};
		if (newnum == 92) {pre = " duo"};
		if (newnum == 93) {pre = " tre"};
		if (newnum == 94) {pre = " quattuor"};
		if (newnum == 95) {pre = " quinqua"};
		if (newnum == 96) {pre = " se"};
		if (newnum == 97) {pre = " septe"};
		if (newnum == 98) {pre = " octo"};
		if (newnum == 99) {pre = " nove"};
		what10 = "nonagint"
		end = pre + what10 + "illion";};
			if (the10s == 1 || the10s == 2) {end = pre + what10 + "i" + "centillion"};
			if (the10s >= 3) {end = pre + what10 + "a" + "centillion"};
		};
	};
	if (the100s == 2) {
		the10s = the10s - 20;
		newnew = newnum - 200;
		if (newnew < 10){
		if (newnew == 0) {pre100 = " "};
		if (newnew == 1) {pre100 = " un"};
		if (newnew == 2) {pre100 = " duo"};
		if (newnew == 3) {pre100 = " tre"};
		if (newnew == 4) {pre100 = " quattuor"};
		if (newnew == 5) {pre100 = " quinqua"};
		if (newnew == 6) {pre100 = " se"};
		if (newnew == 7) {pre100 = " septen"};
		if (newnew == 8) {pre100 = " octo"};
		if (newnew == 9) {pre100 = " noven"}; 
		end = pre100 + "ducentillion"}
		if (newnew >= 10) {
		newnum = newnum - 200
		if (the10s == 1) {
		if (newnum == 10) {pre = " "};
		if (newnum == 11) {pre = " un"};
		if (newnum == 12) {pre = " duo"};
		if (newnum == 13) {pre = " tre"};
		if (newnum == 14) {pre = " quattuor"};
		if (newnum == 15) {pre = " quinqua"};
		if (newnum == 16) {pre = " se"};
		if (newnum == 17) {pre = " septen"};
		if (newnum == 18) {pre = " octo"};
		if (newnum == 19) {pre = " noven"};
		what10 = "dec"
		end = pre + what10 + "illion";};
		if (the10s == 2) {
		if (newnum == 20) {pre = " "};
		if (newnum == 21) {pre = " un"};
		if (newnum == 22) {pre = " duo"};
		if (newnum == 23) {pre = " tres"};
		if (newnum == 24) {pre = " quattuor"};
		if (newnum == 25) {pre = " quinqua"};
		if (newnum == 26) {pre = " ses"};
		if (newnum == 27) {pre = " septem"};
		if (newnum == 28) {pre = " octo"};
		if (newnum == 29) {pre = " novem"};
		what10 = "vigint"
		end = pre + what10 + "illion";};
		if (the10s == 3) {
		if (newnum == 30) {pre = " "};
		if (newnum == 31) {pre = " un"};
		if (newnum == 32) {pre = " duo"};
		if (newnum == 33) {pre = " tres"};
		if (newnum == 34) {pre = " quattuor"};
		if (newnum == 35) {pre = " quinqua"};
		if (newnum == 36) {pre = " ses"};
		if (newnum == 37) {pre = " septen"};
		if (newnum == 38) {pre = " octo"};
		if (newnum == 39) {pre = " noven"};
		what10 = "trigint"
		end = pre + what10 + "illion";};
		if (the10s == 4) {
		if (newnum == 40) {pre = " "};
		if (newnum == 41) {pre = " un"};
		if (newnum == 42) {pre = " duo"};
		if (newnum == 43) {pre = " tres"};
		if (newnum == 44) {pre = " quattuor"};
		if (newnum == 45) {pre = " quinqua"};
		if (newnum == 46) {pre = " ses"};
		if (newnum == 47) {pre = " septen"};
		if (newnum == 48) {pre = " octo"};
		if (newnum == 49) {pre = " noven"};
		what10 = "quadragint"
		end = pre + what10 + "illion";};
		if (the10s == 5) {
		if (newnum == 50) {pre = " "};
		if (newnum == 51) {pre = " un"};
		if (newnum == 52) {pre = " duo"};
		if (newnum == 53) {pre = " tres"};
		if (newnum == 54) {pre = " quattuor"};
		if (newnum == 55) {pre = " quinqua"};
		if (newnum == 56) {pre = " ses"};
		if (newnum == 57) {pre = " septen"};
		if (newnum == 58) {pre = " octo"};
		if (newnum == 59) {pre = " noven"};
		what10 = "quinquagint"
		end = pre + what10 + "illion";};
		if (the10s == 6) {
		if (newnum == 60) {pre = " "};
		if (newnum == 61) {pre = " un"};
		if (newnum == 62) {pre = " duo"};
		if (newnum == 63) {pre = " tre"};
		if (newnum == 64) {pre = " quattuor"};
		if (newnum == 65) {pre = " quinqua"};
		if (newnum == 66) {pre = " se"};
		if (newnum == 67) {pre = " septen"};
		if (newnum == 68) {pre = " octo"};
		if (newnum == 69) {pre = " noven"};
		what10 = "sexagint"
		end = pre + what10 + "illion";};
		if (the10s == 7) {
		if (newnum == 70) {pre = " "};
		if (newnum == 71) {pre = " un"};
		if (newnum == 72) {pre = " duo"};
		if (newnum == 73) {pre = " tre"};
		if (newnum == 74) {pre = " quattuor"};
		if (newnum == 75) {pre = " quinqua"};
		if (newnum == 76) {pre = " se"};
		if (newnum == 77) {pre = " septen"};
		if (newnum == 78) {pre = " octo"};
		if (newnum == 79) {pre = " noven"};
		what10 = "septugint"
		end = pre + what10 + "illion";};
		if (the10s == 8) {
		if (newnum == 80) {pre = " "};
		if (newnum == 81) {pre = " un"};
		if (newnum == 82) {pre = " duo"};
		if (newnum == 83) {pre = " tre"};
		if (newnum == 84) {pre = " quattuor"};
		if (newnum == 85) {pre = " quinqua"};
		if (newnum == 86) {pre = " sex"};
		if (newnum == 87) {pre = " septem"};
		if (newnum == 88) {pre = " octo"};
		if (newnum == 89) {pre = " novem"};
		what10 = "octogint"
		end = pre + what10 + "illion";};
		if (the10s == 9) {
		if (newnum == 90) {pre = " "};
		if (newnum == 91) {pre = " un"};
		if (newnum == 92) {pre = " duo"};
		if (newnum == 93) {pre = " tre"};
		if (newnum == 94) {pre = " quattuor"};
		if (newnum == 95) {pre = " quinqua"};
		if (newnum == 96) {pre = " se"};
		if (newnum == 97) {pre = " septe"};
		if (newnum == 98) {pre = " octo"};
		if (newnum == 99) {pre = " nove"};
		what10 = "nonagint"
		end = pre + what10 + "illion";};
			if (the10s == 1 || the10s == 2) {end = pre + what10 + "i" + "ducentillion"};
			if (the10s >= 3) {end = pre + what10 + "a" + "ducentillion"};
		};
	};
	if (the100s == 3) {
		the10s = the10s - 30;
		newnew = newnum - 300;
		if (newnew < 10){
		if (newnew == 0) {pre100 = " "};
		if (newnew == 1) {pre100 = " un"};
		if (newnew == 2) {pre100 = " duo"};
		if (newnew == 3) {pre100 = " tres"};
		if (newnew == 4) {pre100 = " quattuor"};
		if (newnew == 5) {pre100 = " quinqua"};
		if (newnew == 6) {pre100 = " ses"};
		if (newnew == 7) {pre100 = " septen"};
		if (newnew == 8) {pre100 = " octo"};
		if (newnew == 9) {pre100 = " noven"}; 
		end = pre100 + "centillion"}
		if (newnew >= 10) {
		newnum = newnum - 300
		if (the10s == 1) {
		if (newnum == 10) {pre = " "};
		if (newnum == 11) {pre = " un"};
		if (newnum == 12) {pre = " duo"};
		if (newnum == 13) {pre = " tre"};
		if (newnum == 14) {pre = " quattuor"};
		if (newnum == 15) {pre = " quinqua"};
		if (newnum == 16) {pre = " se"};
		if (newnum == 17) {pre = " septen"};
		if (newnum == 18) {pre = " octo"};
		if (newnum == 19) {pre = " noven"};
		what10 = "dec"
		end = pre + what10 + "illion";};
		if (the10s == 2) {
		if (newnum == 20) {pre = " "};
		if (newnum == 21) {pre = " un"};
		if (newnum == 22) {pre = " duo"};
		if (newnum == 23) {pre = " tres"};
		if (newnum == 24) {pre = " quattuor"};
		if (newnum == 25) {pre = " quinqua"};
		if (newnum == 26) {pre = " ses"};
		if (newnum == 27) {pre = " septem"};
		if (newnum == 28) {pre = " octo"};
		if (newnum == 29) {pre = " novem"};
		what10 = "vigint"
		end = pre + what10 + "illion";};
		if (the10s == 3) {
		if (newnum == 30) {pre = " "};
		if (newnum == 31) {pre = " un"};
		if (newnum == 32) {pre = " duo"};
		if (newnum == 33) {pre = " tres"};
		if (newnum == 34) {pre = " quattuor"};
		if (newnum == 35) {pre = " quinqua"};
		if (newnum == 36) {pre = " ses"};
		if (newnum == 37) {pre = " septen"};
		if (newnum == 38) {pre = " octo"};
		if (newnum == 39) {pre = " noven"};
		what10 = "trigint"
		end = pre + what10 + "illion";};
		if (the10s == 4) {
		if (newnum == 40) {pre = " "};
		if (newnum == 41) {pre = " un"};
		if (newnum == 42) {pre = " duo"};
		if (newnum == 43) {pre = " tres"};
		if (newnum == 44) {pre = " quattuor"};
		if (newnum == 45) {pre = " quinqua"};
		if (newnum == 46) {pre = " ses"};
		if (newnum == 47) {pre = " septen"};
		if (newnum == 48) {pre = " octo"};
		if (newnum == 49) {pre = " noven"};
		what10 = "quadragint"
		end = pre + what10 + "illion";};
		if (the10s == 5) {
		if (newnum == 50) {pre = " "};
		if (newnum == 51) {pre = " un"};
		if (newnum == 52) {pre = " duo"};
		if (newnum == 53) {pre = " tres"};
		if (newnum == 54) {pre = " quattuor"};
		if (newnum == 55) {pre = " quinqua"};
		if (newnum == 56) {pre = " ses"};
		if (newnum == 57) {pre = " septen"};
		if (newnum == 58) {pre = " octo"};
		if (newnum == 59) {pre = " noven"};
		what10 = "quinquagint"
		end = pre + what10 + "illion";};
		if (the10s == 6) {
		if (newnum == 60) {pre = " "};
		if (newnum == 61) {pre = " un"};
		if (newnum == 62) {pre = " duo"};
		if (newnum == 63) {pre = " tre"};
		if (newnum == 64) {pre = " quattuor"};
		if (newnum == 65) {pre = " quinqua"};
		if (newnum == 66) {pre = " se"};
		if (newnum == 67) {pre = " septen"};
		if (newnum == 68) {pre = " octo"};
		if (newnum == 69) {pre = " noven"};
		what10 = "sexagint"
		end = pre + what10 + "illion";};
		if (the10s == 7) {
		if (newnum == 70) {pre = " "};
		if (newnum == 71) {pre = " un"};
		if (newnum == 72) {pre = " duo"};
		if (newnum == 73) {pre = " tre"};
		if (newnum == 74) {pre = " quattuor"};
		if (newnum == 75) {pre = " quinqua"};
		if (newnum == 76) {pre = " se"};
		if (newnum == 77) {pre = " septen"};
		if (newnum == 78) {pre = " octo"};
		if (newnum == 79) {pre = " noven"};
		what10 = "septugint"
		end = pre + what10 + "illion";};
		if (the10s == 8) {
		if (newnum == 80) {pre = " "};
		if (newnum == 81) {pre = " un"};
		if (newnum == 82) {pre = " duo"};
		if (newnum == 83) {pre = " tre"};
		if (newnum == 84) {pre = " quattuor"};
		if (newnum == 85) {pre = " quinqua"};
		if (newnum == 86) {pre = " sex"};
		if (newnum == 87) {pre = " septem"};
		if (newnum == 88) {pre = " octo"};
		if (newnum == 89) {pre = " novem"};
		what10 = "octogint"
		end = pre + what10 + "illion";};
		if (the10s == 9) {
		if (newnum == 90) {pre = " "};
		if (newnum == 91) {pre = " un"};
		if (newnum == 92) {pre = " duo"};
		if (newnum == 93) {pre = " tre"};
		if (newnum == 94) {pre = " quattuor"};
		if (newnum == 95) {pre = " quinqua"};
		if (newnum == 96) {pre = " se"};
		if (newnum == 97) {pre = " septe"};
		if (newnum == 98) {pre = " octo"};
		if (newnum == 99) {pre = " nove"};
		what10 = "nonagint"
		end = pre + what10 + "illion";};
			if (the10s == 1 || the10s == 2) {end = pre + what10 + "i" + "trecentillion"};
			if (the10s >= 3) {end = pre + what10 + "a" + "trecentillion"};
		};
	};
	if (the100s == 4) {
		the10s = the10s - 40;
		newnew = newnum - 400;
		if (newnew < 10){
		if (newnew == 0) {pre100 = " "};
		if (newnew == 1) {pre100 = " un"};
		if (newnew == 2) {pre100 = " duo"};
		if (newnew == 3) {pre100 = " tres"};
		if (newnew == 4) {pre100 = " quattuor"};
		if (newnew == 5) {pre100 = " quinqua"};
		if (newnew == 6) {pre100 = " ses"};
		if (newnew == 7) {pre100 = " septen"};
		if (newnew == 8) {pre100 = " octo"};
		if (newnew == 9) {pre100 = " noven"}; 
		end = pre100 + "quadringentillion"}
		if (newnew >= 10) {
		newnum = newnum - 400
		if (the10s == 1) {
		if (newnum == 10) {pre = " "};
		if (newnum == 11) {pre = " un"};
		if (newnum == 12) {pre = " duo"};
		if (newnum == 13) {pre = " tre"};
		if (newnum == 14) {pre = " quattuor"};
		if (newnum == 15) {pre = " quinqua"};
		if (newnum == 16) {pre = " se"};
		if (newnum == 17) {pre = " septen"};
		if (newnum == 18) {pre = " octo"};
		if (newnum == 19) {pre = " noven"};
		what10 = "dec"
		end = pre + what10 + "illion";};
		if (the10s == 2) {
		if (newnum == 20) {pre = " "};
		if (newnum == 21) {pre = " un"};
		if (newnum == 22) {pre = " duo"};
		if (newnum == 23) {pre = " tres"};
		if (newnum == 24) {pre = " quattuor"};
		if (newnum == 25) {pre = " quinqua"};
		if (newnum == 26) {pre = " ses"};
		if (newnum == 27) {pre = " septem"};
		if (newnum == 28) {pre = " octo"};
		if (newnum == 29) {pre = " novem"};
		what10 = "vigint"
		end = pre + what10 + "illion";};
		if (the10s == 3) {
		if (newnum == 30) {pre = " "};
		if (newnum == 31) {pre = " un"};
		if (newnum == 32) {pre = " duo"};
		if (newnum == 33) {pre = " tres"};
		if (newnum == 34) {pre = " quattuor"};
		if (newnum == 35) {pre = " quinqua"};
		if (newnum == 36) {pre = " ses"};
		if (newnum == 37) {pre = " septen"};
		if (newnum == 38) {pre = " octo"};
		if (newnum == 39) {pre = " noven"};
		what10 = "trigint"
		end = pre + what10 + "illion";};
		if (the10s == 4) {
		if (newnum == 40) {pre = " "};
		if (newnum == 41) {pre = " un"};
		if (newnum == 42) {pre = " duo"};
		if (newnum == 43) {pre = " tres"};
		if (newnum == 44) {pre = " quattuor"};
		if (newnum == 45) {pre = " quinqua"};
		if (newnum == 46) {pre = " ses"};
		if (newnum == 47) {pre = " septen"};
		if (newnum == 48) {pre = " octo"};
		if (newnum == 49) {pre = " noven"};
		what10 = "quadragint"
		end = pre + what10 + "illion";};
		if (the10s == 5) {
		if (newnum == 50) {pre = " "};
		if (newnum == 51) {pre = " un"};
		if (newnum == 52) {pre = " duo"};
		if (newnum == 53) {pre = " tres"};
		if (newnum == 54) {pre = " quattuor"};
		if (newnum == 55) {pre = " quinqua"};
		if (newnum == 56) {pre = " ses"};
		if (newnum == 57) {pre = " septen"};
		if (newnum == 58) {pre = " octo"};
		if (newnum == 59) {pre = " noven"};
		what10 = "quinquagint"
		end = pre + what10 + "illion";};
		if (the10s == 6) {
		if (newnum == 60) {pre = " "};
		if (newnum == 61) {pre = " un"};
		if (newnum == 62) {pre = " duo"};
		if (newnum == 63) {pre = " tre"};
		if (newnum == 64) {pre = " quattuor"};
		if (newnum == 65) {pre = " quinqua"};
		if (newnum == 66) {pre = " se"};
		if (newnum == 67) {pre = " septen"};
		if (newnum == 68) {pre = " octo"};
		if (newnum == 69) {pre = " noven"};
		what10 = "sexagint"
		end = pre + what10 + "illion";};
		if (the10s == 7) {
		if (newnum == 70) {pre = " "};
		if (newnum == 71) {pre = " un"};
		if (newnum == 72) {pre = " duo"};
		if (newnum == 73) {pre = " tre"};
		if (newnum == 74) {pre = " quattuor"};
		if (newnum == 75) {pre = " quinqua"};
		if (newnum == 76) {pre = " se"};
		if (newnum == 77) {pre = " septen"};
		if (newnum == 78) {pre = " octo"};
		if (newnum == 79) {pre = " noven"};
		what10 = "septugint"
		end = pre + what10 + "illion";};
		if (the10s == 8) {
		if (newnum == 80) {pre = " "};
		if (newnum == 81) {pre = " un"};
		if (newnum == 82) {pre = " duo"};
		if (newnum == 83) {pre = " tre"};
		if (newnum == 84) {pre = " quattuor"};
		if (newnum == 85) {pre = " quinqua"};
		if (newnum == 86) {pre = " sex"};
		if (newnum == 87) {pre = " septem"};
		if (newnum == 88) {pre = " octo"};
		if (newnum == 89) {pre = " novem"};
		what10 = "octogint"
		end = pre + what10 + "illion";};
		if (the10s == 9) {
		if (newnum == 90) {pre = " "};
		if (newnum == 91) {pre = " un"};
		if (newnum == 92) {pre = " duo"};
		if (newnum == 93) {pre = " tre"};
		if (newnum == 94) {pre = " quattuor"};
		if (newnum == 95) {pre = " quinqua"};
		if (newnum == 96) {pre = " se"};
		if (newnum == 97) {pre = " septe"};
		if (newnum == 98) {pre = " octo"};
		if (newnum == 99) {pre = " nove"};
		what10 = "nonagint"
		end = pre + what10 + "illion";};
			if (the10s == 1 || the10s == 2) {end = pre + what10 + "i" + "quadringentillion"};
			if (the10s >= 3) {end = pre + what10 + "a" + "quagringentillion"};
		};
	};
	if (the100s == 5) {
		the10s = the10s - 50;
		newnew = newnum - 500;
		if (newnew < 10){
		if (newnew == 0) {pre100 = " "};
		if (newnew == 1) {pre100 = " un"};
		if (newnew == 2) {pre100 = " duo"};
		if (newnew == 3) {pre100 = " tres"};
		if (newnew == 4) {pre100 = " quattuor"};
		if (newnew == 5) {pre100 = " quinqua"};
		if (newnew == 6) {pre100 = " ses"};
		if (newnew == 7) {pre100 = " septen"};
		if (newnew == 8) {pre100 = " octo"};
		if (newnew == 9) {pre100 = " noven"}; 
		end = pre100 + "quingentillion"}
		if (newnew >= 10) {
		newnum = newnum - 100
		if (the10s == 1) {
		if (newnum == 10) {pre = " "};
		if (newnum == 11) {pre = " un"};
		if (newnum == 12) {pre = " duo"};
		if (newnum == 13) {pre = " tre"};
		if (newnum == 14) {pre = " quattuor"};
		if (newnum == 15) {pre = " quinqua"};
		if (newnum == 16) {pre = " se"};
		if (newnum == 17) {pre = " septen"};
		if (newnum == 18) {pre = " octo"};
		if (newnum == 19) {pre = " noven"};
		what10 = "dec"
		end = pre + what10 + "illion";};
		if (the10s == 2) {
		if (newnum == 20) {pre = " "};
		if (newnum == 21) {pre = " un"};
		if (newnum == 22) {pre = " duo"};
		if (newnum == 23) {pre = " tres"};
		if (newnum == 24) {pre = " quattuor"};
		if (newnum == 25) {pre = " quinqua"};
		if (newnum == 26) {pre = " ses"};
		if (newnum == 27) {pre = " septem"};
		if (newnum == 28) {pre = " octo"};
		if (newnum == 29) {pre = " novem"};
		what10 = "vigint"
		end = pre + what10 + "illion";};
		if (the10s == 3) {
		if (newnum == 30) {pre = " "};
		if (newnum == 31) {pre = " un"};
		if (newnum == 32) {pre = " duo"};
		if (newnum == 33) {pre = " tres"};
		if (newnum == 34) {pre = " quattuor"};
		if (newnum == 35) {pre = " quinqua"};
		if (newnum == 36) {pre = " ses"};
		if (newnum == 37) {pre = " septen"};
		if (newnum == 38) {pre = " octo"};
		if (newnum == 39) {pre = " noven"};
		what10 = "trigint"
		end = pre + what10 + "illion";};
		if (the10s == 4) {
		if (newnum == 40) {pre = " "};
		if (newnum == 41) {pre = " un"};
		if (newnum == 42) {pre = " duo"};
		if (newnum == 43) {pre = " tres"};
		if (newnum == 44) {pre = " quattuor"};
		if (newnum == 45) {pre = " quinqua"};
		if (newnum == 46) {pre = " ses"};
		if (newnum == 47) {pre = " septen"};
		if (newnum == 48) {pre = " octo"};
		if (newnum == 49) {pre = " noven"};
		what10 = "quadragint"
		end = pre + what10 + "illion";};
		if (the10s == 5) {
		if (newnum == 50) {pre = " "};
		if (newnum == 51) {pre = " un"};
		if (newnum == 52) {pre = " duo"};
		if (newnum == 53) {pre = " tres"};
		if (newnum == 54) {pre = " quattuor"};
		if (newnum == 55) {pre = " quinqua"};
		if (newnum == 56) {pre = " ses"};
		if (newnum == 57) {pre = " septen"};
		if (newnum == 58) {pre = " octo"};
		if (newnum == 59) {pre = " noven"};
		what10 = "quinquagint"
		end = pre + what10 + "illion";};
		if (the10s == 6) {
		if (newnum == 60) {pre = " "};
		if (newnum == 61) {pre = " un"};
		if (newnum == 62) {pre = " duo"};
		if (newnum == 63) {pre = " tre"};
		if (newnum == 64) {pre = " quattuor"};
		if (newnum == 65) {pre = " quinqua"};
		if (newnum == 66) {pre = " se"};
		if (newnum == 67) {pre = " septen"};
		if (newnum == 68) {pre = " octo"};
		if (newnum == 69) {pre = " noven"};
		what10 = "sexagint"
		end = pre + what10 + "illion";};
		if (the10s == 7) {
		if (newnum == 70) {pre = " "};
		if (newnum == 71) {pre = " un"};
		if (newnum == 72) {pre = " duo"};
		if (newnum == 73) {pre = " tre"};
		if (newnum == 74) {pre = " quattuor"};
		if (newnum == 75) {pre = " quinqua"};
		if (newnum == 76) {pre = " se"};
		if (newnum == 77) {pre = " septen"};
		if (newnum == 78) {pre = " octo"};
		if (newnum == 79) {pre = " noven"};
		what10 = "septugint"
		end = pre + what10 + "illion";};
		if (the10s == 8) {
		if (newnum == 80) {pre = " "};
		if (newnum == 81) {pre = " un"};
		if (newnum == 82) {pre = " duo"};
		if (newnum == 83) {pre = " tre"};
		if (newnum == 84) {pre = " quattuor"};
		if (newnum == 85) {pre = " quinqua"};
		if (newnum == 86) {pre = " sex"};
		if (newnum == 87) {pre = " septem"};
		if (newnum == 88) {pre = " octo"};
		if (newnum == 89) {pre = " novem"};
		what10 = "octogint"
		end = pre + what10 + "illion";};
		if (the10s == 9) {
		if (newnum == 90) {pre = " "};
		if (newnum == 91) {pre = " un"};
		if (newnum == 92) {pre = " duo"};
		if (newnum == 93) {pre = " tre"};
		if (newnum == 94) {pre = " quattuor"};
		if (newnum == 95) {pre = " quinqua"};
		if (newnum == 96) {pre = " se"};
		if (newnum == 97) {pre = " septe"};
		if (newnum == 98) {pre = " octo"};
		if (newnum == 99) {pre = " nove"};
		what10 = "nonagint"
		end = pre + what10 + "illion";};
			if (the10s == 1 || the10s == 2) {end = pre + what10 + "i" + "quingentillion"};
			if (the10s >= 3) {end = pre + what10 + "a" + "quingentillion"};
		};
	};
		if (the100s == 6) {
		the10s = the10s - 60;
		newnew = newnum - 600;
		if (newnew < 10){
		if (newnew == 0) {pre100 = " "};
		if (newnew == 1) {pre100 = " un"};
		if (newnew == 2) {pre100 = " duo"};
		if (newnew == 3) {pre100 = " tre"};
		if (newnew == 4) {pre100 = " quattuor"};
		if (newnew == 5) {pre100 = " quinqua"};
		if (newnew == 6) {pre100 = " se"};
		if (newnew == 7) {pre100 = " septen"};
		if (newnew == 8) {pre100 = " octo"};
		if (newnew == 9) {pre100 = " noven"}; 
		end = pre100 + "sescentillion"}
		if (newnew >= 10) {
		newnum = newnum - 600
		if (the10s == 1) {
		if (newnum == 10) {pre = " "};
		if (newnum == 11) {pre = " un"};
		if (newnum == 12) {pre = " duo"};
		if (newnum == 13) {pre = " tre"};
		if (newnum == 14) {pre = " quattuor"};
		if (newnum == 15) {pre = " quinqua"};
		if (newnum == 16) {pre = " se"};
		if (newnum == 17) {pre = " septen"};
		if (newnum == 18) {pre = " octo"};
		if (newnum == 19) {pre = " noven"};
		what10 = "dec"
		end = pre + what10 + "illion";};
		if (the10s == 2) {
		if (newnum == 20) {pre = " "};
		if (newnum == 21) {pre = " un"};
		if (newnum == 22) {pre = " duo"};
		if (newnum == 23) {pre = " tres"};
		if (newnum == 24) {pre = " quattuor"};
		if (newnum == 25) {pre = " quinqua"};
		if (newnum == 26) {pre = " ses"};
		if (newnum == 27) {pre = " septem"};
		if (newnum == 28) {pre = " octo"};
		if (newnum == 29) {pre = " novem"};
		what10 = "vigint"
		end = pre + what10 + "illion";};
		if (the10s == 3) {
		if (newnum == 30) {pre = " "};
		if (newnum == 31) {pre = " un"};
		if (newnum == 32) {pre = " duo"};
		if (newnum == 33) {pre = " tres"};
		if (newnum == 34) {pre = " quattuor"};
		if (newnum == 35) {pre = " quinqua"};
		if (newnum == 36) {pre = " ses"};
		if (newnum == 37) {pre = " septen"};
		if (newnum == 38) {pre = " octo"};
		if (newnum == 39) {pre = " noven"};
		what10 = "trigint"
		end = pre + what10 + "illion";};
		if (the10s == 4) {
		if (newnum == 40) {pre = " "};
		if (newnum == 41) {pre = " un"};
		if (newnum == 42) {pre = " duo"};
		if (newnum == 43) {pre = " tres"};
		if (newnum == 44) {pre = " quattuor"};
		if (newnum == 45) {pre = " quinqua"};
		if (newnum == 46) {pre = " ses"};
		if (newnum == 47) {pre = " septen"};
		if (newnum == 48) {pre = " octo"};
		if (newnum == 49) {pre = " noven"};
		what10 = "quadragint"
		end = pre + what10 + "illion";};
		if (the10s == 5) {
		if (newnum == 50) {pre = " "};
		if (newnum == 51) {pre = " un"};
		if (newnum == 52) {pre = " duo"};
		if (newnum == 53) {pre = " tres"};
		if (newnum == 54) {pre = " quattuor"};
		if (newnum == 55) {pre = " quinqua"};
		if (newnum == 56) {pre = " ses"};
		if (newnum == 57) {pre = " septen"};
		if (newnum == 58) {pre = " octo"};
		if (newnum == 59) {pre = " noven"};
		what10 = "quinquagint"
		end = pre + what10 + "illion";};
		if (the10s == 6) {
		if (newnum == 60) {pre = " "};
		if (newnum == 61) {pre = " un"};
		if (newnum == 62) {pre = " duo"};
		if (newnum == 63) {pre = " tre"};
		if (newnum == 64) {pre = " quattuor"};
		if (newnum == 65) {pre = " quinqua"};
		if (newnum == 66) {pre = " se"};
		if (newnum == 67) {pre = " septen"};
		if (newnum == 68) {pre = " octo"};
		if (newnum == 69) {pre = " noven"};
		what10 = "sexagint"
		end = pre + what10 + "illion";};
		if (the10s == 7) {
		if (newnum == 70) {pre = " "};
		if (newnum == 71) {pre = " un"};
		if (newnum == 72) {pre = " duo"};
		if (newnum == 73) {pre = " tre"};
		if (newnum == 74) {pre = " quattuor"};
		if (newnum == 75) {pre = " quinqua"};
		if (newnum == 76) {pre = " se"};
		if (newnum == 77) {pre = " septen"};
		if (newnum == 78) {pre = " octo"};
		if (newnum == 79) {pre = " noven"};
		what10 = "septugint"
		end = pre + what10 + "illion";};
		if (the10s == 8) {
		if (newnum == 80) {pre = " "};
		if (newnum == 81) {pre = " un"};
		if (newnum == 82) {pre = " duo"};
		if (newnum == 83) {pre = " tre"};
		if (newnum == 84) {pre = " quattuor"};
		if (newnum == 85) {pre = " quinqua"};
		if (newnum == 86) {pre = " sex"};
		if (newnum == 87) {pre = " septem"};
		if (newnum == 88) {pre = " octo"};
		if (newnum == 89) {pre = " novem"};
		what10 = "octogint"
		end = pre + what10 + "illion";};
		if (the10s == 9) {
		if (newnum == 90) {pre = " "};
		if (newnum == 91) {pre = " un"};
		if (newnum == 92) {pre = " duo"};
		if (newnum == 93) {pre = " tre"};
		if (newnum == 94) {pre = " quattuor"};
		if (newnum == 95) {pre = " quinqua"};
		if (newnum == 96) {pre = " se"};
		if (newnum == 97) {pre = " septe"};
		if (newnum == 98) {pre = " octo"};
		if (newnum == 99) {pre = " nove"};
		what10 = "nonagint"
		end = pre + what10 + "illion";};
			if (the10s == 1 || the10s == 2) {end = pre + what10 + "i" + "sescentillion"};
			if (the10s >= 3) {end = pre + what10 + "a" + "sescentillion"};
		};
	};
		if (the100s == 7) {
		the10s = the10s - 70;
		newnew = newnum - 700;
		if (newnew < 10){
		if (newnew == 0) {pre100 = " "};
		if (newnew == 1) {pre100 = " un"};
		if (newnew == 2) {pre100 = " duo"};
		if (newnew == 3) {pre100 = " tre"};
		if (newnew == 4) {pre100 = " quattuor"};
		if (newnew == 5) {pre100 = " quinqua"};
		if (newnew == 6) {pre100 = " se"};
		if (newnew == 7) {pre100 = " septen"};
		if (newnew == 8) {pre100 = " octo"};
		if (newnew == 9) {pre100 = " noven"}; 
		end = pre100 + "septingentillion"}
		if (newnew >= 10) {
		newnum = newnum - 700
		if (the10s == 1) {
		if (newnum == 10) {pre = " "};
		if (newnum == 11) {pre = " un"};
		if (newnum == 12) {pre = " duo"};
		if (newnum == 13) {pre = " tre"};
		if (newnum == 14) {pre = " quattuor"};
		if (newnum == 15) {pre = " quinqua"};
		if (newnum == 16) {pre = " se"};
		if (newnum == 17) {pre = " septen"};
		if (newnum == 18) {pre = " octo"};
		if (newnum == 19) {pre = " noven"};
		what10 = "dec"
		end = pre + what10 + "illion";};
		if (the10s == 2) {
		if (newnum == 20) {pre = " "};
		if (newnum == 21) {pre = " un"};
		if (newnum == 22) {pre = " duo"};
		if (newnum == 23) {pre = " tres"};
		if (newnum == 24) {pre = " quattuor"};
		if (newnum == 25) {pre = " quinqua"};
		if (newnum == 26) {pre = " ses"};
		if (newnum == 27) {pre = " septem"};
		if (newnum == 28) {pre = " octo"};
		if (newnum == 29) {pre = " novem"};
		what10 = "vigint"
		end = pre + what10 + "illion";};
		if (the10s == 3) {
		if (newnum == 30) {pre = " "};
		if (newnum == 31) {pre = " un"};
		if (newnum == 32) {pre = " duo"};
		if (newnum == 33) {pre = " tres"};
		if (newnum == 34) {pre = " quattuor"};
		if (newnum == 35) {pre = " quinqua"};
		if (newnum == 36) {pre = " ses"};
		if (newnum == 37) {pre = " septen"};
		if (newnum == 38) {pre = " octo"};
		if (newnum == 39) {pre = " noven"};
		what10 = "trigint"
		end = pre + what10 + "illion";};
		if (the10s == 4) {
		if (newnum == 40) {pre = " "};
		if (newnum == 41) {pre = " un"};
		if (newnum == 42) {pre = " duo"};
		if (newnum == 43) {pre = " tres"};
		if (newnum == 44) {pre = " quattuor"};
		if (newnum == 45) {pre = " quinqua"};
		if (newnum == 46) {pre = " ses"};
		if (newnum == 47) {pre = " septen"};
		if (newnum == 48) {pre = " octo"};
		if (newnum == 49) {pre = " noven"};
		what10 = "quadragint"
		end = pre + what10 + "illion";};
		if (the10s == 5) {
		if (newnum == 50) {pre = " "};
		if (newnum == 51) {pre = " un"};
		if (newnum == 52) {pre = " duo"};
		if (newnum == 53) {pre = " tres"};
		if (newnum == 54) {pre = " quattuor"};
		if (newnum == 55) {pre = " quinqua"};
		if (newnum == 56) {pre = " ses"};
		if (newnum == 57) {pre = " septen"};
		if (newnum == 58) {pre = " octo"};
		if (newnum == 59) {pre = " noven"};
		what10 = "quinquagint"
		end = pre + what10 + "illion";};
		if (the10s == 6) {
		if (newnum == 60) {pre = " "};
		if (newnum == 61) {pre = " un"};
		if (newnum == 62) {pre = " duo"};
		if (newnum == 63) {pre = " tre"};
		if (newnum == 64) {pre = " quattuor"};
		if (newnum == 65) {pre = " quinqua"};
		if (newnum == 66) {pre = " se"};
		if (newnum == 67) {pre = " septen"};
		if (newnum == 68) {pre = " octo"};
		if (newnum == 69) {pre = " noven"};
		what10 = "sexagint"
		end = pre + what10 + "illion";};
		if (the10s == 7) {
		if (newnum == 70) {pre = " "};
		if (newnum == 71) {pre = " un"};
		if (newnum == 72) {pre = " duo"};
		if (newnum == 73) {pre = " tre"};
		if (newnum == 74) {pre = " quattuor"};
		if (newnum == 75) {pre = " quinqua"};
		if (newnum == 76) {pre = " se"};
		if (newnum == 77) {pre = " septen"};
		if (newnum == 78) {pre = " octo"};
		if (newnum == 79) {pre = " noven"};
		what10 = "septugint"
		end = pre + what10 + "illion";};
		if (the10s == 8) {
		if (newnum == 80) {pre = " "};
		if (newnum == 81) {pre = " un"};
		if (newnum == 82) {pre = " duo"};
		if (newnum == 83) {pre = " tre"};
		if (newnum == 84) {pre = " quattuor"};
		if (newnum == 85) {pre = " quinqua"};
		if (newnum == 86) {pre = " sex"};
		if (newnum == 87) {pre = " septem"};
		if (newnum == 88) {pre = " octo"};
		if (newnum == 89) {pre = " novem"};
		what10 = "octogint"
		end = pre + what10 + "illion";};
		if (the10s == 9) {
		if (newnum == 90) {pre = " "};
		if (newnum == 91) {pre = " un"};
		if (newnum == 92) {pre = " duo"};
		if (newnum == 93) {pre = " tre"};
		if (newnum == 94) {pre = " quattuor"};
		if (newnum == 95) {pre = " quinqua"};
		if (newnum == 96) {pre = " se"};
		if (newnum == 97) {pre = " septe"};
		if (newnum == 98) {pre = " octo"};
		if (newnum == 99) {pre = " nove"};
		what10 = "nonagint"
		end = pre + what10 + "illion";};
			if (the10s == 1 || the10s == 2) {end = pre + what10 + "i" + "septingentillion"};
			if (the10s >= 3) {end = pre + what10 + "a" + "septingentillion"};
		};
	};
		if (the100s == 8) {
		the10s = the10s - 80;
		newnew = newnum - 800;
		if (newnew < 10){
		if (newnew == 0) {pre100 = " "};
		if (newnew == 1) {pre100 = " un"};
		if (newnew == 2) {pre100 = " duo"};
		if (newnew == 3) {pre100 = " tre"};
		if (newnew == 4) {pre100 = " quattuor"};
		if (newnew == 5) {pre100 = " quinqua"};
		if (newnew == 6) {pre100 = " sex"};
		if (newnew == 7) {pre100 = " septem"};
		if (newnew == 8) {pre100 = " octo"};
		if (newnew == 9) {pre100 = " novem"}; 
		end = pre100 + "octingentillion"}
		if (newnew >= 10) {
		newnum = newnum - 800
		if (the10s == 1) {
		if (newnum == 10) {pre = " "};
		if (newnum == 11) {pre = " un"};
		if (newnum == 12) {pre = " duo"};
		if (newnum == 13) {pre = " tre"};
		if (newnum == 14) {pre = " quattuor"};
		if (newnum == 15) {pre = " quinqua"};
		if (newnum == 16) {pre = " se"};
		if (newnum == 17) {pre = " septen"};
		if (newnum == 18) {pre = " octo"};
		if (newnum == 19) {pre = " noven"};
		what10 = "dec"
		end = pre + what10 + "illion";};
		if (the10s == 2) {
		if (newnum == 20) {pre = " "};
		if (newnum == 21) {pre = " un"};
		if (newnum == 22) {pre = " duo"};
		if (newnum == 23) {pre = " tres"};
		if (newnum == 24) {pre = " quattuor"};
		if (newnum == 25) {pre = " quinqua"};
		if (newnum == 26) {pre = " ses"};
		if (newnum == 27) {pre = " septem"};
		if (newnum == 28) {pre = " octo"};
		if (newnum == 29) {pre = " novem"};
		what10 = "vigint"
		end = pre + what10 + "illion";};
		if (the10s == 3) {
		if (newnum == 30) {pre = " "};
		if (newnum == 31) {pre = " un"};
		if (newnum == 32) {pre = " duo"};
		if (newnum == 33) {pre = " tres"};
		if (newnum == 34) {pre = " quattuor"};
		if (newnum == 35) {pre = " quinqua"};
		if (newnum == 36) {pre = " ses"};
		if (newnum == 37) {pre = " septen"};
		if (newnum == 38) {pre = " octo"};
		if (newnum == 39) {pre = " noven"};
		what10 = "trigint"
		end = pre + what10 + "illion";};
		if (the10s == 4) {
		if (newnum == 40) {pre = " "};
		if (newnum == 41) {pre = " un"};
		if (newnum == 42) {pre = " duo"};
		if (newnum == 43) {pre = " tres"};
		if (newnum == 44) {pre = " quattuor"};
		if (newnum == 45) {pre = " quinqua"};
		if (newnum == 46) {pre = " ses"};
		if (newnum == 47) {pre = " septen"};
		if (newnum == 48) {pre = " octo"};
		if (newnum == 49) {pre = " noven"};
		what10 = "quadragint"
		end = pre + what10 + "illion";};
		if (the10s == 5) {
		if (newnum == 50) {pre = " "};
		if (newnum == 51) {pre = " un"};
		if (newnum == 52) {pre = " duo"};
		if (newnum == 53) {pre = " tres"};
		if (newnum == 54) {pre = " quattuor"};
		if (newnum == 55) {pre = " quinqua"};
		if (newnum == 56) {pre = " ses"};
		if (newnum == 57) {pre = " septen"};
		if (newnum == 58) {pre = " octo"};
		if (newnum == 59) {pre = " noven"};
		what10 = "quinquagint"
		end = pre + what10 + "illion";};
		if (the10s == 6) {
		if (newnum == 60) {pre = " "};
		if (newnum == 61) {pre = " un"};
		if (newnum == 62) {pre = " duo"};
		if (newnum == 63) {pre = " tre"};
		if (newnum == 64) {pre = " quattuor"};
		if (newnum == 65) {pre = " quinqua"};
		if (newnum == 66) {pre = " se"};
		if (newnum == 67) {pre = " septen"};
		if (newnum == 68) {pre = " octo"};
		if (newnum == 69) {pre = " noven"};
		what10 = "sexagint"
		end = pre + what10 + "illion";};
		if (the10s == 7) {
		if (newnum == 70) {pre = " "};
		if (newnum == 71) {pre = " un"};
		if (newnum == 72) {pre = " duo"};
		if (newnum == 73) {pre = " tre"};
		if (newnum == 74) {pre = " quattuor"};
		if (newnum == 75) {pre = " quinqua"};
		if (newnum == 76) {pre = " se"};
		if (newnum == 77) {pre = " septen"};
		if (newnum == 78) {pre = " octo"};
		if (newnum == 79) {pre = " noven"};
		what10 = "septugint"
		end = pre + what10 + "illion";};
		if (the10s == 8) {
		if (newnum == 80) {pre = " "};
		if (newnum == 81) {pre = " un"};
		if (newnum == 82) {pre = " duo"};
		if (newnum == 83) {pre = " tre"};
		if (newnum == 84) {pre = " quattuor"};
		if (newnum == 85) {pre = " quinqua"};
		if (newnum == 86) {pre = " sex"};
		if (newnum == 87) {pre = " septem"};
		if (newnum == 88) {pre = " octo"};
		if (newnum == 89) {pre = " novem"};
		what10 = "octogint"
		end = pre + what10 + "illion";};
		if (the10s == 9) {
		if (newnum == 90) {pre = " "};
		if (newnum == 91) {pre = " un"};
		if (newnum == 92) {pre = " duo"};
		if (newnum == 93) {pre = " tre"};
		if (newnum == 94) {pre = " quattuor"};
		if (newnum == 95) {pre = " quinqua"};
		if (newnum == 96) {pre = " se"};
		if (newnum == 97) {pre = " septe"};
		if (newnum == 98) {pre = " octo"};
		if (newnum == 99) {pre = " nove"};
		what10 = "nonagint"
		end = pre + what10 + "illion";};
			if (the10s == 1 || the10s == 2) {end = pre + what10 + "i" + "octingentillion"};
			if (the10s >= 3) {end = pre + what10 + "a" + "octingentillion"};
		};
	};
		if (the100s == 9) {
		the10s = the10s - 90;
		newnew = newnum - 900;
		if (newnew < 10){
		if (newnew == 0) {pre100 = " "};
		if (newnew == 1) {pre100 = " un"};
		if (newnew == 2) {pre100 = " duo"};
		if (newnew == 3) {pre100 = " tre"};
		if (newnew == 4) {pre100 = " quattuor"};
		if (newnew == 5) {pre100 = " quinqua"};
		if (newnew == 6) {pre100 = " se"};
		if (newnew == 7) {pre100 = " septe"};
		if (newnew == 8) {pre100 = " octo"};
		if (newnew == 9) {pre100 = " nove"}; 
		end = pre100 + "nongentillion"}
		if (newnew >= 10) {
		newnum = newnum - 900
		if (the10s == 1) {
		if (newnum == 10) {pre = " "};
		if (newnum == 11) {pre = " un"};
		if (newnum == 12) {pre = " duo"};
		if (newnum == 13) {pre = " tre"};
		if (newnum == 14) {pre = " quattuor"};
		if (newnum == 15) {pre = " quinqua"};
		if (newnum == 16) {pre = " se"};
		if (newnum == 17) {pre = " septen"};
		if (newnum == 18) {pre = " octo"};
		if (newnum == 19) {pre = " noven"};
		what10 = "dec"
		end = pre + what10 + "illion";};
		if (the10s == 2) {
		if (newnum == 20) {pre = " "};
		if (newnum == 21) {pre = " un"};
		if (newnum == 22) {pre = " duo"};
		if (newnum == 23) {pre = " tres"};
		if (newnum == 24) {pre = " quattuor"};
		if (newnum == 25) {pre = " quinqua"};
		if (newnum == 26) {pre = " ses"};
		if (newnum == 27) {pre = " septem"};
		if (newnum == 28) {pre = " octo"};
		if (newnum == 29) {pre = " novem"};
		what10 = "vigint"
		end = pre + what10 + "illion";};
		if (the10s == 3) {
		if (newnum == 30) {pre = " "};
		if (newnum == 31) {pre = " un"};
		if (newnum == 32) {pre = " duo"};
		if (newnum == 33) {pre = " tres"};
		if (newnum == 34) {pre = " quattuor"};
		if (newnum == 35) {pre = " quinqua"};
		if (newnum == 36) {pre = " ses"};
		if (newnum == 37) {pre = " septen"};
		if (newnum == 38) {pre = " octo"};
		if (newnum == 39) {pre = " noven"};
		what10 = "trigint"
		end = pre + what10 + "illion";};
		if (the10s == 4) {
		if (newnum == 40) {pre = " "};
		if (newnum == 41) {pre = " un"};
		if (newnum == 42) {pre = " duo"};
		if (newnum == 43) {pre = " tres"};
		if (newnum == 44) {pre = " quattuor"};
		if (newnum == 45) {pre = " quinqua"};
		if (newnum == 46) {pre = " ses"};
		if (newnum == 47) {pre = " septen"};
		if (newnum == 48) {pre = " octo"};
		if (newnum == 49) {pre = " noven"};
		what10 = "quadragint"
		end = pre + what10 + "illion";};
		if (the10s == 5) {
		if (newnum == 50) {pre = " "};
		if (newnum == 51) {pre = " un"};
		if (newnum == 52) {pre = " duo"};
		if (newnum == 53) {pre = " tres"};
		if (newnum == 54) {pre = " quattuor"};
		if (newnum == 55) {pre = " quinqua"};
		if (newnum == 56) {pre = " ses"};
		if (newnum == 57) {pre = " septen"};
		if (newnum == 58) {pre = " octo"};
		if (newnum == 59) {pre = " noven"};
		what10 = "quinquagint"
		end = pre + what10 + "illion";};
		if (the10s == 6) {
		if (newnum == 60) {pre = " "};
		if (newnum == 61) {pre = " un"};
		if (newnum == 62) {pre = " duo"};
		if (newnum == 63) {pre = " tre"};
		if (newnum == 64) {pre = " quattuor"};
		if (newnum == 65) {pre = " quinqua"};
		if (newnum == 66) {pre = " se"};
		if (newnum == 67) {pre = " septen"};
		if (newnum == 68) {pre = " octo"};
		if (newnum == 69) {pre = " noven"};
		what10 = "sexagint"
		end = pre + what10 + "illion";};
		if (the10s == 7) {
		if (newnum == 70) {pre = " "};
		if (newnum == 71) {pre = " un"};
		if (newnum == 72) {pre = " duo"};
		if (newnum == 73) {pre = " tre"};
		if (newnum == 74) {pre = " quattuor"};
		if (newnum == 75) {pre = " quinqua"};
		if (newnum == 76) {pre = " se"};
		if (newnum == 77) {pre = " septen"};
		if (newnum == 78) {pre = " octo"};
		if (newnum == 79) {pre = " noven"};
		what10 = "septugint"
		end = pre + what10 + "illion";};
		if (the10s == 8) {
		if (newnum == 80) {pre = " "};
		if (newnum == 81) {pre = " un"};
		if (newnum == 82) {pre = " duo"};
		if (newnum == 83) {pre = " tre"};
		if (newnum == 84) {pre = " quattuor"};
		if (newnum == 85) {pre = " quinqua"};
		if (newnum == 86) {pre = " sex"};
		if (newnum == 87) {pre = " septem"};
		if (newnum == 88) {pre = " octo"};
		if (newnum == 89) {pre = " novem"};
		what10 = "octogint"
		end = pre + what10 + "illion";};
		if (the10s == 9) {
		if (newnum == 90) {pre = " "};
		if (newnum == 91) {pre = " un"};
		if (newnum == 92) {pre = " duo"};
		if (newnum == 93) {pre = " tre"};
		if (newnum == 94) {pre = " quattuor"};
		if (newnum == 95) {pre = " quinqua"};
		if (newnum == 96) {pre = " se"};
		if (newnum == 97) {pre = " septe"};
		if (newnum == 98) {pre = " octo"};
		if (newnum == 99) {pre = " nove"};
		what10 = "nonagint"
		end = pre + what10 + "illion";};
			if (the10s == 1 || the10s == 2) {end = pre + what10 + "i" + "nongentillion"};
			if (the10s >= 3) {end = pre + what10 + "a" + "nongentillion"};
		};
	};
	if (newnum == 1000) {
		if (num.value = "3003") {
		end = " millillion"}
	}
};