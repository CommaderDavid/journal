import './styles.css';
import { JournalEntry } from './journal.js';

$(document).ready(function() {
  $("#new-entry-form").submit(function(e) {
    e.preventDefault();

    var title = $("input#new-title").val();
    var entry = $("input#new-entry").val();

    var totalWord = new JournalEntry(entry);
    totalWord.countVowel();
    
    $("#journal-entries").prepend("<li>" + title + "<br> Total Word count: " + totalWord.paragraph.length + "<br>" + entry + "<br> Vowel count: " + totalWord.currentVowel + "<br> Consonants count: " + totalWord.currentConson + "</li>");
  });
});
