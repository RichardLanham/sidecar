const richtextService = require("../service/richtext.service");
const logger = require("../logger/api.logger");

class RichTextController {
  async getSectionsRichText() {
    return await richtextService.getSectionsRichText();
  }
  async getSlicesInputs() {
    return await richtextService.getSlicesInputs();
  }

  async updateRichTextInputs(richtext) {
    // logger.info('Controller: updateTask', task);
    return await richtextService.updateSlicesInputs(richtext);
  }

  async updateSectionsRichText(richtext) {
    // logger.info('Controller: updateTask', task);
    return await richtextService.updateSectionsRichText(richtext);
  }

  ///////

  async updateSlicesLargeVideos(richtext) {
    // logger.info('Controller: updateTask', task);
    return await richtextService.updateSlicesLargeVideos(richtext);
  }
  async updateElementsGmaps(richtext) {
    // logger.info('Controller: updateTask', task);
    return await richtextService.updateElementsGmaps(richtext);
  }
  async updateElementsCkeditors(richtext) {
    // logger.info('Controller: updateTask', task);
    return await richtextService.updateElementsCkeditors(richtext);
  }

  // // TODO
  // components_slices_large_videos richtext
  // components_elements_gmaps richtext
  // components_elements_ckeditors richtext

  // async createTask(task) {
  //     logger.info('Controller: createTask', task);
  //     return await taskService.createTask(task);
  // }

  // async deleteTask(taskId) {
  //     logger.info('Controller: deleteTask', taskId);
  //     return await taskService.deleteTask(taskId);
  // }
}
module.exports = new RichTextController();
