var newNoteApp = function() {
  noteApp = new NoteApp();
};

function saveNote() {
  var note = document.getElementById('create-note-text').value;
  noteApp.createNewNote(note);
  noteApp.abbrev(note);
  document.noteForm.reset();
  displayAbbrevNotes();
}

function displayAbbrevNotes() {
  var link = "";
  for (i=0; i < noteApp.sliced.length; i++) {
    var slicedNote = noteApp.sliced[i];
    var myDiv = document.getElementById('abbrev-notes');
    if (slicedNote.length >= 20) {
      slicedNote += ' ...';
    }
    link += "<a href=#" + noteApp.notes[i].replace(/\s/g, "_") + ">" + slicedNote + "</a><br>";
    myDiv.innerHTML = link;
  }
}

makeUrlChangeNoteForCurrentPage();

function makeUrlChangeNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
}

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl((window.location)).replace(/_/g, ' '));
}

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
}

function showNote(note) {
  document
    .getElementById("full-notes")
    .innerHTML = note;
}
