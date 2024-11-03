import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Enrollment = sequelize.define('Enrollment', {
    enrollment_date: { 
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW 
    },
  });
  return Enrollment;
};
