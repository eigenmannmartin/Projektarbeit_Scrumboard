module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  })
}