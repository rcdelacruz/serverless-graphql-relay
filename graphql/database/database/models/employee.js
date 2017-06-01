
module.exports = function (sequelize, DataTypes) {
  const Employee = sequelize.define('tala_employees', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique: true,
      validate: {
        isEmail: {
          msg: 'Email must be valid',
        },
        isUnique: sequelize.validateIsUnique('email', 'Email address already used'),
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {},
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {},
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {},
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {},
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
  },
    {
      paranoid: true,
    },
  );


  return Employee;
};

