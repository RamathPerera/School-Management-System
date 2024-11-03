import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Student = sequelize.define('Student', {
    name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    age: { 
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    address: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    gender: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    birth_certificate: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
  });
  return Student;
};
