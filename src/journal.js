export function JournalEntry(entry) {
  this.paragraph = entry.split(" ");
  this.vowels = ['a', 'e', 'i', 'o', 'u'];
  this.letters = entry.split("");
  this.currentVowel = 0;
  this.currentConson = 0;
}

JournalEntry.prototype.countVowel = function() {
  for (var i = 0; i < this.letters.length; i++) {
    var allLetters = this.letters;
    var totalVowel = this.currentVowel;
    var totalConson = this.currentConson;

    //  inside this forEach loop the definition of `this` changes
    this.vowels.forEach(function(vowel) {
      if (allLetters[i] === vowel) {
        totalVowel += 1;
      } else {
        totalConson += 1;
        console.log("consonant total number " + totalConson);
      }
    });
    //  `this` goes back to normal

    this.currentVowel = totalVowel;
    this.currentConson = totalConson;
  }
};
