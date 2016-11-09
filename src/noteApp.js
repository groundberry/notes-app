
var NoteApp = function () {
  this.notes = [];
  this.sliced = [];
};


NoteApp.prototype.abbrev = function (note) {
  var slicedNote = note.slice(0,20);
  this.sliced.push(slicedNote);
};

NoteApp.prototype.createNewNote = function(note) {
  this.notes.push(note);
};
