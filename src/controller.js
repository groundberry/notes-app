clickCreateNote();
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

function clickCreateNote () {
  document
  .getElementById("create-note-button")
  .addEventListener("click", function(clickEvent){
    clickEvent.preventDefault();
    saveNote();
  });
}
