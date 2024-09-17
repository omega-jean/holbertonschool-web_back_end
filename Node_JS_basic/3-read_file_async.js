// task 3
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.promises.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim().length > 0);
        if (lines.length <= 1) {
          console.log('Number of students: 0');
          return resolve();
        }

        const students = lines.slice(1);
        const fieldMap = {};

        students.forEach((student) => {
          const [firstName, , , field] = student.split(',');
          if (!fieldMap[field]) {
            fieldMap[field] = [];
          }
          fieldMap[field].push(firstName);
        });

        const totalStudents = students.length;
        console.log(`Number of students: ${totalStudents}`);

        for (const field in fieldMap) {
          if (Object.prototype.hasOwnProperty.call(fieldMap, field)) {
            const studentList = fieldMap[field];
            console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
          }
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
