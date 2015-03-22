module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Task", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    difficulty: DataTypes.ENUM(1,2,3,5,8),
    state: DataTypes.ENUM('icebox', 'todo', 'progress', 'done')
  })
}