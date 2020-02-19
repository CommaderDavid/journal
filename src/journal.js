export function JournalEntry(entry) {
  this.paragraph = entry.split(" ");
  this.letters = this.paragraph.join('').split("");

  this.currentVowel = 0;
  this.currentConson = 0;
}

JournalEntry.prototype.countVowel = function() {
  var allLetters = this.letters;
  var totalVowel = 0;
  var totalConson = 0;

  for (var i = 0; i < allLetters.length; i++) {
    // Create if statment that goes through each vowel and adds one to totalVowel
    if (allLetters[i] === "a") {
      totalVowel += 1;
    } else if (allLetters[i] === "e") {
      totalVowel += 1;
    } else if (allLetters[i] === "i") {
      totalVowel += 1;
    } else if (allLetters[i] === "o") {
      totalVowel += 1;
    } else if (allLetters[i] === "u") {
      totalVowel += 1;
    } else {
      totalConson += 1;
    }

    this.currentVowel = totalVowel;
    this.currentConson = totalConson;
  }
};
