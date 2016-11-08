var newNoteApp = function() {
  noteApp = new NoteApp();
};

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
