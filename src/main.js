import './styles.css';
import { journalEntry } from './journal.js';

$(document).ready(function() {
  $("#new-entry-form").submit(function(e) {
    e.preventDefault();
    var title = $("input#new-title").val();
    var totalWord = new journalEntry($("input#new-entry").val());
    var entry = $("input#new-entry").val();

    $("#journal-entries").prepend("<li>" + title + "<br>" + entry + "<br>" + totalWord.paragraph.length + "</li>");
  });
});
