const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.SIDECARPORT || 3081;
app.use(bodyParser.json());
app.use(cors());

const taskController = require("./controller/task.controller");
const richTextController = require("./controller/richtext.controller");

app.get("/sidecar/api/components_sections_rich_texts", (req, res) => {
  richTextController.getSectionsRichText().then((data) => res.json(data));
});
app.get("/sidecar/api/components_slices_inputs", (req, res) => {
  richTextController.getSlicesInputs().then((data) => res.json(data));
});

app.put("/sidecar/api/components_sections_rich_texts", (req, res) => {
  richTextController
    .updateSectionsRichText(req.body.richtext)
    .then((data) => res.json(data));
});

app.put("/sidecar/api/components_slices_inputs", (req, res) => {
  richTextController
    .updateRichTextInputs(req.body.richtext)
    .then((data) => res.json(data));
});

///////

app.put("/sidecar/api/components_slices_large_videos", (req, res) => {
  richTextController
    .updateSlicesLargeVideos(req.body.richtext)
    .then((data) => res.json(data));
});

app.put("/sidecar/api/components_elements_gmaps", (req, res) => {
  richTextController
    .updateElementsGmaps(req.body.richtext)
    .then((data) => res.json(data));
});

app.put("/sidecar/api/components_elements_ckeditors", (req, res) => {
  richTextController
    .updateElementsCkeditors(req.body.richtext)
    .then((data) => res.json(data));
});

// // TODO
// components_slices_large_videos richtext
// components_elements_gmaps richtext
// components_elements_ckeditors richtext

//// content TO richtext
// components_sections_rich_texts.model

// ALL DONE
// components_slices_inputs

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
