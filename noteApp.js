function NoteApp(){
   this.sliced = [];
}

NoteApp.prototype.abbrev = function () {
  for(var i=0; i < this.notes.length; i++) {
  this.sliced.push(this.notes[i].slice(0, 20));
  }
};
