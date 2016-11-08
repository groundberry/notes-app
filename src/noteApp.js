var NoteApp = function () {
  this.notes = [];
  this.sliced = [];
};

NoteApp.prototype.abbrev = function () {
  for(var i=0; i < this.notes.length; i++) {
  this.sliced.push(this.notes[i].slice(0, 20));
  }
};

NoteApp.prototype.createNewNote = function(note) {
  this.notes.push(note);
};
//
NoteApp.prototype.displayAbbrevNotes = function () {
  for (i=0;i<this.sliced.length;i++) {
    var mydiv = document.getElementById("abbrevNotes");
    var aTag = document.createElement('a');
    aTag.setAttribute('href', i);
    console.log(i);
    aTag.innerHTML = i;
    mydiv.appendChild(aTag);
  }
};
