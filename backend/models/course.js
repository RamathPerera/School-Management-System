import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Course = sequelize.define('Course', {
    course_code: { 
      type: DataTypes.STRING, 
      unique: true,
      allowNull: false
    },
    course_name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    course_description: { 
      type: DataTypes.TEXT,
      allowNull: false
    },
  });
  return Course;
};
