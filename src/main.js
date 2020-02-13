import './styles.css';
import { journalEntry } from './journal.js';

$(document).ready(function() {
  $("#new-entry-form").submit(function(e) {
    e.preventDefault();
    var title = $("input#new-title").val();
    var entry = $("input#new-entry").val();
    
  });
});
