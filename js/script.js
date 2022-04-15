//show the option to choose between the two mad libs
document.getElementById("whichLib").classList.toggle("hidden");

//create a function that runs the first lib
function libOne(){
	//hide which lib form and display first lib
	document.getElementById("whichLib").classList.toggle("hidden");
	document.getElementById("libOneForm").classList.toggle("hidden");
}

//create a function that runs the second lib
function libTwo(){
	//hide which lib form and display second lib
	document.getElementById("whichLib").classList.toggle("hidden");
	document.getElementById("libTwoForm").classList.toggle("hidden");
}

//create a function that displays the first lib
function printLibOne(){
	var paraone = document.createElement("p");
	paraone.innerText = 'There once was a ' + document.getElementById("nounOne") + ' and ' + document.getElementById("pronounOne") + ' loved to ' + document.getElementById("adverbOne") + ' ' + document.getElementById("verbOne") + ' in different planetariums. ' + document.getElementById("interjectionOne") + ' What a ' + document.getElementById("adjectiveOne") + ' time it was. ' + document.getElementById("pronounOne") + ' especially loved the looking at the planets that were shaped like a ' + document.getElementById("nounTwo") + '. ' + document.getElementById("pronounOne") + ' also liked when ' + document.getElementById("pronounOne") + ' went ' + document.getElementById("prepositionOne") + ' Becky. She made the adventure much more ' + document.getElementById("adjectiveTwo") + '. One day the ' + document.getElementById("nounOne") + ' went to a planetarium field ' + document.getElementById("conjunctionOne") + ' Becky stayed at home. This made the ' +  document.getElementById("nounOne") + ' ' + document.getElementById("adverbTwo") + ' sad. The ' + document.getElementById("nounOne") + ' would say "' + document.getElementById("interjectionTwo") + ' I am really sad!" Over and over ' + document.getElementById("prepositionTwo") + ' ' + document.getElementById("pronounTwo") + ' would come back and they would ' + document.getElementById("verbTwo") + ' together all day long. ' + document.getElementById("conjunctionTwo") + ' on other days, ' + document.getElementById("pronounOne") + ' just stayed home and watched TV.';
	div.append(paraone);
	console.log(div.para-one);
}

//create a function that displays the second lib
function printLibTwo(){
	var paratwo = document.createElement("p");
	paratwo.innerText = "Jelly beans aren't just Easter candy; they have a(n) " + document.getElementById("adverbOne") + ' long and ' + document.getElementById("adjectiveOne") + ' history in the USA, dating back to ' + document.getElementById("prepositionOne") + ' the 1800s. ' + document.getElementById("prepositionTwo") + ' the ' + document.getElementById("adjectiveTwo") + ' ' + document.getElementById("nounTwo") + ' War, Americans were sent jelly beans to soldiers to put smiles on their faces. ' + document.getElementById("conjunctionOne") + ' this pushed the start of "penny candy" sweets you could buy for just one ' +  document.getElementById("nounTwo") + '. ' + document.getElementById("interjectionOne") + "! Ain't that something? " + document.getElementById("conjunctionTwo") + ' not all people thouhght ' + document.getElementById("pronounOne") + ' was/were worth all the hype. ' + document.getElementById("pronounTne") + ' thought ' + document.getElementById("pronounOne") + ' make you ' + document.getElementById("adverbTwo") + ' ' + document.getElementById("verbOne") + ' and ' + document.getElementById("verbTwo") + '. But, that just made everyone else think, "' + document.getElementById("interjectionTwo") + ' ' + document.getElementById("pronounTwo") + ' are so dumb!"';
	div.append(paratwo)
	console.log(div.para-two);
}
