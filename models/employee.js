'use strict';

module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
      EmployeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      LastName: DataTypes.STRING,
      FirstName: DataTypes.STRING,
      Title: DataTypes.STRING,
      ReportsTo: DataTypes.STRING,
      BirthDate: DataTypes.DATE,
      HireDate: DataTypes.DATE,
      Address: DataTypes.STRING,
      City: DataTypes.STRING,
      State: DataTypes.STRING,
      Country: DataTypes.STRING,
      PostalCode: DataTypes.STRING,
      Phone: DataTypes.STRING,
      Fax: DataTypes.STRING,
      Email: DataTypes.STRING
    }, {
      tableName: 'Employee',
      timestamps: false,
      classMethods: {
        associate: function(models) {
          Employee.hasMany(models.Customer, {
            foreignKey: 'EmployeeId'
          });
        }
      }
  });

  return Employee;
};
