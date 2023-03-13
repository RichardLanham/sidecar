const richtextService = require("../service/richtext.service");
const logger = require("../logger/api.logger");

class RichTextController {
  async getRichText() {
    return await richtextService.getContent();
  }

  // async createTask(task) {
  //     logger.info('Controller: createTask', task);
  //     return await taskService.createTask(task);
  // }

  async updateRichText(richtext) {
    // logger.info('Controller: updateTask', task);
    return await richtextService.updateRichText(richtext);
  }

  async getRichTextInputs() {
    return await richtextService.getRichTextInputs();
  }

  async updateRichTextInputs(richtext) {
    // logger.info('Controller: updateTask', task);
    return await richtextService.updateRichTextInputs(richtext);
  }

  // async deleteTask(taskId) {
  //     logger.info('Controller: deleteTask', taskId);
  //     return await taskService.deleteTask(taskId);
  // }
}
module.exports = new RichTextController();
