const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n');

    const filteredLines = lines.filter((line) => line.trim() !== '');

    if (filteredLines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = filteredLines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((student) => {
      const details = student.split(',');

      const firstName = details[0];
      const field = details[3];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    for (const field in fields) {
      const studentList = fields[field];
      console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
