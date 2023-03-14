const richtextRepository = require("../repository/richtext.repository");

class TaskService {
  constructor() {}

  async getSectionsRichText() {
    return await richtextRepository.getSectionsRichText();
  }

  async getSlicesInputs() {
    return await richtextRepository.getSlicesInputs();
  }

  async updateSectionsRichText(richtext) {
    return await richtextRepository.updateSectionsRichText(richtext);
  }

  async updateSlicesInputs(richtext) {
    return await richtextRepository.updatSlicesInputs(richtext);
  }

  ////

  async updateSlicesLargeVideos(richtext) {
    return await richtextRepository.updatSlicesLargeVideos(richtext);
  }

  async updateElementsGmaps(richtext) {
    return await richtextRepository.updateElementsGmaps(richtext);
  }

  async updateElementsCkeditors(richtext) {
    return await richtextRepository.updateElementsCkeditors(richtext);
  }

  // // TODO
  // components_slices_large_videos richtext
  // components_elements_gmaps richtext
  // components_elements_ckeditors richtext

  // async createTask(task) {
  //     return await taskRepository.createTask(task);
  // }

  // async deleteTask(taskId) {
  //     return await taskRepository.deleteTask(taskId);
  // }
}

module.exports = new TaskService();
