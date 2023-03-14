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

  async getSectionsRichText() {
    try {
      const content = await this.db.sectionsRichtext.findOne({ id: 1 });
      return content;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getSlicesInputs() {
    try {
      const content = await this.db.slicesInputs.findOne({ id: 1 });
      return content;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async updateSectionsRichText(richtext) {
    let data = {};
    try {
      data = await this.db.sectionsRichtext.update(
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

  async updatSlicesInputs(richtext) {
    console.log(richtext);
    let data = {};
    try {
      data = await this.db.slicesInputs.update(
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

  ////

  async updateElementsCkeditors(richtext) {
    console.log(richtext);
    let data = {};
    try {
      data = await this.db.elementsCkeditors.update(
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

  async updateElementsGmaps(richtext) {
    console.log(richtext);
    let data = {};
    try {
      data = await this.db.elementsGmaps.update(
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

  async updatSlicesLargeVideos(richtext) {
    console.log(richtext);
    let data = {};
    try {
      data = await this.db.slicesLargeVideos.update(
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
