var newNoteApp = function() {
  noteApp = new NoteApp();
};

displayFullNoteForEachLink();

function saveNote() {
  arrayNote = document.getElementById('create-note-text').value;
  noteApp.createNewNote(arrayNote);
  noteApp.abbrevNote(arrayNote);
  document.noteForm.reset();
  addLinkNotes();
}

function addLinkNotes() {
  link = ""
  for (i=0; i<noteApp.notes.length; i++) {
    myDiv = document.getElementById('linkNotes');
    // var aTag = document.createElement('a');
    // aTag.setAttribute("href","#" + noteApp.sliced[i]);
    // aTag.inner.HTML = noteApp.sliced[i];
    link += "<a href='#"+noteApp.notes[i]+"'>"+noteApp.sliced[i]+"</a><br>"
    myDiv.innerHTML = link;
  };
};

function displayFullNoteForEachLink() {
  window.addEventListener("hashchange", displayFullNote)
};

function displayFullNote() {
  displayNote(grabFromAddressBar(window.location));
};

function grabFromAddressBar(url) {
  return url.hash.split("#")[1]
};

function displayNote(hashLinkIsNote) {
  document.getElementById("fullNote").innerHTML = hashLinkIsNote;
};
