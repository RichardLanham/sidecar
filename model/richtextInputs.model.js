module.exports = (sequelize, DataTypes, Model) => {
  class RichtextInputs extends Model {}

  RichtextInputs.init(
    {
      // Model attributes are defined here
      // id: {
      //   type: DataTypes.id,
      //   allowNull: false,
      // },
      richtext: {
        type: DataTypes.TEXT,
        allowNull: true,
        // allowNull defaults to true
      },
      // createdate: {
      // createdate: {
      //   type: DataTypes.DATE,
      //   // allowNull defaults to true
      // },
      // updateddate: {
      //   type: DataTypes.DATE,
      //   // allowNull defaults to true
      // },
      // createdby: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // updatedby: {
      //   type: DataTypes.STRING,
      //   // allowNull defaults to true
      // },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "components_slices_inputs", // We need to choose the model name
    }
  );

  return RichtextInputs;
};
