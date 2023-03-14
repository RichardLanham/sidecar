module.exports = (sequelize, DataTypes, Model) => {
  class Richtext extends Model {}

  Richtext.init(
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      richtext: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "components_sections_rich_texts",
    }
  );

  return Richtext;
};
