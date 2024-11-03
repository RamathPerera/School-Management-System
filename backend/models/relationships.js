export default (sequelize) => {
    const { Student, Lecturer, Course, Enrollment } = sequelize.models;
  
    // many-to-many relationship between Student and Course through Enrollment
    Student.belongsToMany(Course, { through: Enrollment, foreignKey: 'studentId' });
    Course.belongsToMany(Student, { through: Enrollment, foreignKey: 'courseId' });
  
    // one-to-one relationship between Lecturer and Course
    Lecturer.hasOne(Course, { foreignKey: 'lecturerId' });
    Course.belongsTo(Lecturer, { foreignKey: 'lecturerId' });
};
