const router = require("express").Router();
const { notes } = require("../db/db.json");
const { createNewNote, deleteNote } = require("../lib/notes");
const { v4: uuidv4 } = require("uuid");
router.get("/notes", (req, res) => {
  let saved = notes;
  res.json(saved);
});

router.post("/notes", (req, res) => {
  req.body.id = uuidv4();
  res.json(createNewNote(req.body, notes));
});

router.delete("/notes/:id", (req, res) => {
  deleteNote(note, req.params.id);
  res.json(note);
});

module.exports = router;
