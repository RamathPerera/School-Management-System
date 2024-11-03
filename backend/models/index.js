import sequelize from '../config/dbConnection.js';
import defineStudent from './student.js';
import defineLecturer from './lecturer.js';
import defineCourse from './course.js';
import defineEnrollment from './enrollment.js';
import setupRelationships from './relationships.js';
import defineAdmin from './admin.js';

const Student = defineStudent(sequelize);
const Lecturer = defineLecturer(sequelize);
const Course = defineCourse(sequelize);
const Enrollment = defineEnrollment(sequelize);
const Admin = defineAdmin(sequelize);

setupRelationships(sequelize);

export const syncDatabase = async () => {
    try {
        await sequelize.sync();
        console.log("Database & tables are synchronized!");
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

export { sequelize, Student, Lecturer, Course, Enrollment, Admin };
