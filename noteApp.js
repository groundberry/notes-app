var NoteApp = function () {
  this.notes = [];
};

NoteApp.prototype.createNewNote = function(note) {
  this.notes.push(note);
};
