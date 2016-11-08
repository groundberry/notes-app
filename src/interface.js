var newNoteApp = function() {
  noteApp = new NoteApp()
};

startNoteApp();

function startNoteApp() {
  document.getElementById("create-note-button").addEventListener('click', function() {
  createNewNote();
});



}
