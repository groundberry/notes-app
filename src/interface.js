var newNoteApp = function() {
  noteApp = new NoteApp();
};

function saveNote() {
  note = document.getElementById('create-note-text').value;
  noteApp.createNewNote(note);
  noteApp.abbrev(note);
  document.noteForm.reset();
}

function displayAbbrevNotes() {
  for (i=0;i<noteApp.sliced.length;i++) {
    var mydiv = document.getElementById("abbrevNotes");
    var aTag = document.createElement('a');
    aTag.setAttribute("href", "#" + noteApp.sliced[i]);
    aTag.innerHTML = noteApp.sliced[i];
    console.log(aTag);
    mydiv.appendChild(aTag);
  }
}

function makeUrlChangeNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
}

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
}

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
}

function showNote(note) {
  document
    .getElementById("fullNotes")
    .innerHTML = note;
}
