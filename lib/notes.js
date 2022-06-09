const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  notesArray.push(body);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: notesArray,
      },
      null,
      2
    )
  );

  return note;
}

function deleteNote(notesArray, id) {
  let deleteID = parseInt(id);

  // This loop re-writes the indexes for the remaining notes.
  for (let i = 0; i < notesArray.length; i++) {
    if (deleteID === notesArray[i].id) {
      notesArray.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(
          {
            notes: notesArray,
          },
          null,
          2
        )
      );
    }
  }
}

module.exports = {
  createNewNote,
  deleteNote,
};
