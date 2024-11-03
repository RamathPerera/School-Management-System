import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Lecturer = sequelize.define('Lecturer', {
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
  });
  return Lecturer;
};
