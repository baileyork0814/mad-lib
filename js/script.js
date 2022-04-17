//HTML
var whichLibDiv = document.getElementById("whichLib");
var libOneDiv = document.getElementById("libOne");
var libTwoDiv = document.getElementById("libTwo");

//show the option to choose between the two mad libs
whichLibDiv.classList.toggle("hidden");

//create a function that runs the first lib
function libOne() {
  //hide which lib form and display first lib
  whichLibDiv.classList.toggle("hidden");
  libOneDiv.classList.toggle("hidden");
}

//create a function that runs the second lib
function libTwo() {
  //hide which lib form and display second lib
  whichLibDiv.classList.toggle("hidden");
  libTwoDiv.classList.toggle("hidden");
}

//create a function that displays the first lib
function printLibOne() {
  libOneDiv.classList.toggle("hidden");
  var paraone = document.createElement("p");
  paraone.innerText =
    "There once was a " +
    document.getElementById("nounOne").value +
    " and " +
    document.getElementById("pronounOne").value +
    " loved to " +
    document.getElementById("adverbOne").value +
    " " +
    document.getElementById("verbOne").value +
    " in different planetariums. " +
    document.getElementById("interjectionOne").value +
    " What a " +
    document.getElementById("adjectiveOne").value +
    " time it was. " +
    document.getElementById("pronounOne").value +
    " especially loved the looking at the planets that were shaped like a " +
    document.getElementById("nounTwo").value +
    ". " +
    document.getElementById("pronounOne").value +
    " also liked when " +
    document.getElementById("pronounOne").value +
    " went " +
    document.getElementById("prepositionOne").value +
    " Becky. She made the adventure much more " +
    document.getElementById("adjectiveTwo").value +
    ". One day the " +
    document.getElementById("nounOne").value +
    " went to a planetarium field " +
    document.getElementById("conjunctionOne").value +
    " Becky stayed at home. This made the " +
    document.getElementById("nounOne").value +
    " " +
    document.getElementById("adverbTwo").value +
    " sad. The " +
    document.getElementById("nounOne").value +
    ' would say "' +
    document.getElementById("interjectionTwo").value +
    ' I am really sad!" Over and over ' +
    document.getElementById("prepositionTwo").value +
    " " +
    document.getElementById("pronounTwo").value +
    " would come back and they would " +
    document.getElementById("verbTwo").value +
    " together all day long. " +
    document.getElementById("conjunctionTwo").value +
    " on other days, " +
    document.getElementById("pronounOne").value +
    " just stayed home and watched TV.";

  var paraOneDiv = document.getElementById("paraOne");

  //change class to libs (a styled class) and show the paragraph
  paraOneDiv.classList.add("libs");
  paraOneDiv.classList.toggle("hidden");

  paraOneDiv.append(paraone);
}

//create a function that displays the second lib
function printLibTwo() {
  libTwoDiv.classList.toggle("hidden");
  var paratwo = document.createElement("p");
  paratwo.innerText =
    "Jelly beans aren't just Easter candy; they have a(n) " +
    document.getElementById("adverb1").value +
    " long and " +
    document.getElementById("adjective1").value +
    " history in the USA, dating back to " +
    document.getElementById("preposition1").value +
    " the 1800s. " +
    document.getElementById("preposition2").value +
    " the " +
    document.getElementById("adjective2").value +
    " " +
    document.getElementById("noun2").value +
    " War, Americans were sent jelly beans to soldiers to put smiles on their faces. " +
    document.getElementById("conjunction1").value +
    ' this pushed the start of "penny candy" sweets you could buy for just one ' +
    document.getElementById("noun2").value +
    ". " +
    document.getElementById("interjection1").value +
    "! Ain't that something? " +
    document.getElementById("conjunction2").value +
    " not all people thouhght " +
    document.getElementById("pronoun1").value +
    " was/were worth all the hype. " +
    document.getElementById("pronoun1").value +
    " thought " +
    document.getElementById("pronoun1").value +
    " make you " +
    document.getElementById("adverb2").value +
    " " +
    document.getElementById("verb1").value +
    " and " +
    document.getElementById("verb2").value +
    '. But, that just made everyone else think, "' +
    document.getElementById("interjection2").value +
    " " +
    document.getElementById("pronoun2").value +
    ' are so dumb!"';

  var paraTwoDiv = document.getElementById("paraTwo");

  //change class to libs (a styled class) and show the paragraph
  paraTwoDiv.classList.add("libs");
  paraTwoDiv.classList.toggle("hidden");

  paraTwoDiv.append(paratwo);
}
