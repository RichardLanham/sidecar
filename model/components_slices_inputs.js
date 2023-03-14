module.exports = (sequelize, DataTypes, Model) => {
  class RichtextInputs extends Model {}

  RichtextInputs.init(
    {
      richtext: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "components_slices_inputs",
    }
  );

  return RichtextInputs;
};
