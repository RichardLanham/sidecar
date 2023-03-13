const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();

const taskController = require("./controller/task.controller");

const richTextController = require("./controller/richtext.controller");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/sidecar/api/richtext", (req, res) => {
  richTextController.getRichText().then((data) => res.json(data));
});
app.put("/sidecar/api/richtext", (req, res) => {
  richTextController
    .updateRichText(req.body.richtext)
    .then((data) => res.json(data));
});

app.get("/sidecar/api/richtextInputs", (req, res) => {
  richTextController.getRichTextInputs().then((data) => res.json(data));
});
app.put("/sidecar/api/richtextInputs", (req, res) => {
  richTextController
    .updateRichTextInputs(req.body.richtext)
    .then((data) => res.json(data));
});

// TODO
// ComponentSectionsLargeVideo.richtext
// // components_slices_large_videos

// components_elements_ckeditors

//

/// boilerplate ////////////////////////////////////////////////////////////////////////////////////////////// boiler plate:
app.get("/api/tasks", (req, res) => {
  taskController.getTasks().then((data) => res.json(data));
});

app.post("/api/task", (req, res) => {
  console.log(req.body);
  taskController.createTask(req.body.task).then((data) => res.json(data));
});

app.put("/api/task", (req, res) => {
  taskController.updateTask(req.body.task).then((data) => res.json(data));
});

app.delete("/api/task/:id", (req, res) => {
  taskController.deleteTask(req.params.id).then((data) => res.json(data));
});

app.get("/", (req, res) => {
  res.send(`<h1>API Works !!!</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
