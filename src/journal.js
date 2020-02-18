export function JournalEntry(entry) {
  this.paragraph = entry.split(" ");
  this.vowels = ['a', 'e', 'i', 'o', 'u'];
  this.letters = entry.split("");
  this.currentVowel = 0;
  this.currentConson = 0;
}

JournalEntry.prototype.countVowel = function() {
  var allLetters = this.letters;
  var totalVowel = this.currentVowel;
  var totalConson = this.currentConson;

  for (var i = 0; i < allLetters.length; i++) {
    // Create if statment that goes through each vowel and adds one to totalVowel
    //  inside this forEach loop the definition of `this` changes
    this.vowels.forEach(function(vowel) {
      if (allLetters[i] === vowel) {
        totalVowel += 1;
      } else {
        totalConson += 1;
      }
    });
    //  `this` goes back to normal

    this.currentVowel = totalVowel;
    this.currentConson = totalConson;
  }
};
