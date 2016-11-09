
var NoteApp = function () {
  this.notes = [];
  this.sliced = [];
};

// NoteApp.prototype.abbrev = function () {
//   for(var i=0; i < this.notes.length; i++) {
//   this.sliced.push(this.notes[i].slice(0, 20));
//   }
// };

NoteApp.prototype.abbrevNote = function (note) {
  abbr = note.slice(0,20)
  this.sliced.push(abbr);
};

NoteApp.prototype.createNewNote = function(note) {
  this.notes.push(note);
};
