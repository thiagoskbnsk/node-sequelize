const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

class User extends Model {
  static init(sequelize) {
    super.init({ 
      name: DataTypes.STRING,
      email: DataTypes.STRING
    }, {
      sequelize,
      hooks: {
        beforeCreate: (user) => {
          user.id = uuidv4()
        }
      }
    });
  }
}

module.exports = User;