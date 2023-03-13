const richtextRepository = require("../repository/richtext.repository");

class TaskService {
  constructor() {}

  async getContent() {
    return await richtextRepository.getContent();
  }

  // async createTask(task) {
  //     return await taskRepository.createTask(task);
  // }

  async getRichTextInputs() {
    return await richtextRepository.getRichTextInputs();
  }

  async updateRichText(richtext) {
    return await richtextRepository.updateRichText(richtext);
  }

  async updateRichTextInputs(richtext) {
    return await richtextRepository.updateRichTextInputs(richtext);
  }

  // async deleteTask(taskId) {
  //     return await taskRepository.deleteTask(taskId);
  // }
}

module.exports = new TaskService();
