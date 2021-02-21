let db = require("../db/db.json");
let path = require("path");
const fs = require("fs");


module.exports = function (app) {

  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, noteData) => {
        if (err) throw err;

        res.json(JSON.parse(noteData));

    });
  });


  app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;

        let noteData = JSON.parse(data);
            noteData.push(req.body);
            
        for (let i = 0; i < noteData.length; i++) {
            noteData[i].id = i + 1;
      }
    fs.writeFile("./db/db.json", JSON.stringify(noteData), (err) => {
        if (err) throw err;

            res.send(db);

      });
    });
  });

  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;

        let noteNew = JSON.parse(data);

        for (let i = 0; i < noteNew.length; i++) {

        if (noteNew[i].id == req.params.id) {
            noteNew.splice(i, 1);

        }
      }

    fs.writeFile("./db/db.json", JSON.stringify(noteNew), (err) => {
        if (err) throw err;

        res.send(noteNew);

      });
    });
  });
};