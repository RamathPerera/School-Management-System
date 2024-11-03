import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Admin = sequelize.define('Admin', {
    user_name: { 
      type: DataTypes.STRING, 
      unique: true,
      allowNull: false
    },
    password: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
  });
  return Admin;
};
