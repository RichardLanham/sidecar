const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class RichTextRepository {
  db = {};

  constructor() {
    this.db = connect();
    // For Development
    // this.db.sequelize.sync({ force: true }).then(() => {
    //   console.log("Drop and re-sync db.");
    // });
  }

  async getContent() {
    try {
      const content = await this.db.richtext.findOne({ id: 1 });
      //   console.log(content);
      //   console.log(this.db);
      //   const content = await this.db.richtext.findAll();
      //   console.log("content:::", content);
      //   return content;
      return content;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getRichTextInputs() {
    try {
      const content = await this.db.richtextInputs.findOne({ id: 1 });
      //   console.log(content);
      //   console.log(this.db);
      //   const content = await this.db.richtext.findAll();
      //   console.log("content:::", content);
      //   return content;
      return content;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  // async createTask(task) {
  //     let data = {};
  //     try {
  //         task.createdate = new Date().toISOString();
  //         data = await this.db.tasks.create(task);
  //     } catch(err) {
  //         logger.error('Error::' + err);
  //     }
  //     return data;
  // }

  async updateRichText(richtext) {
    let data = {};
    try {
      data = await this.db.richtext.update(
        { ...richtext },
        {
          where: {
            id: richtext.id,
          },
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updateRichTextInputs(richtext) {
    let data = {};
    try {
      data = await this.db.richtextInputs.update(
        { ...richtext },
        {
          where: {
            id: richtext.id,
          },
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  // async deleteTask(taskId) {
  //     let data = {};
  //     try {
  //         data = await this.db.tasks.destroy({
  //             where: {
  //                 id: taskId
  //             }
  //         });
  //     } catch(err) {
  //         logger.error('Error::' + err);
  //     }
  //     return data;
  //     return {status: `${data.deletedCount > 0 ? true : false}`};
  // }
}

module.exports = new RichTextRepository();
