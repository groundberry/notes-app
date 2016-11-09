var newNoteApp = function() {
  noteApp = new NoteApp();
};

function saveNote() {
  note = document.getElementById('create-note-text').value;
  noteApp.createNewNote(note);
  noteApp.abbrev(note);
  document.noteForm.reset();
  displayAbbrevNotes();
}

function displayAbbrevNotes() {
  link = "";
  for (i=0; i<noteApp.sliced.length; i++) {
    myDiv = document.getElementById('abbrevNotes');
    link += "<a href=#"+noteApp.notes[i]+">"+noteApp.sliced[i]+"</a><br>";
    myDiv.innerHTML = link;
  }

}
