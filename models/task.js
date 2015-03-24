module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Task", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    state: DataTypes.ENUM('icebox', 'todo', 'progress', 'done')
  })
}