const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require("../logger/api.logger");

const connect = () => {
  const hostName = process.env.SIDECARHOST;
  const userName = process.env.SIDECARUSER;
  const password = process.env.SIDECARPGPASSWORD;
  const database = process.env.SIDECARPGDB;
  const dialect = process.env.SIDECARDIALECT;

  const sequelize = new Sequelize(database, userName, password, {
    host: hostName,
    dialect: "postgres",
    operatorsAliases: false,
    define: {
      timestamps: false,
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000,
    },
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.tasks = require("../model/task.model")(sequelize, DataTypes, Model);

  db.sectionsRichtext =
    require("../model/components_sections_rich_texts.model")(
      sequelize,
      DataTypes,
      Model
    );

  db.slicesInputs = require("../model/components_slices_inputs")(
    sequelize,
    DataTypes,
    Model
  );

  //
  db.elementsCkeditors = require("../model/components_elements_ckeditors")(
    sequelize,
    DataTypes,
    Model
  );
  db.elementsGmaps = require("../model/components_elements_gmaps")(
    sequelize,
    DataTypes,
    Model
  );

  db.slicesLargeVideos = require("../model/components_slices_large_videos")(
    sequelize,
    DataTypes,
    Model
  );

  return db;
};

module.exports = {
  connect,
};
