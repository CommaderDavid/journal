import './styles.css';
import { journalEntry } from './journal.js';

$(document).ready(function() {
  $("#new-entry-form").submit(function(e) {
    e.preventDefault();
    // var title = $("input#new-title").val();
    var entry = new journalEntry($("input#new-entry").val());

    $("#journal-entries").append(entry.paragraph.length);
  });
});
