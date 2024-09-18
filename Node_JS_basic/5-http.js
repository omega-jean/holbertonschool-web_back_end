// task 5
const http = require('http');
const fs = require('fs');
const path = require('path');

function countStudents(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const studentsByField = {};

      lines.slice(1).forEach((line) => {
        const [name, , , field] = line.split(',');
        if (field) {
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(name);
        }
      });

      resolve(studentsByField);
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const database = process.argv[2];

    if (!database) {
      res.end('Cannot load the database');
    } else {
      res.write('This is the list of our students\n');
      countStudents(database)
        .then((studentsByField) => {
          let totalStudents = 0;

          Object.keys(studentsByField).forEach((field) => {
            totalStudents += studentsByField[field].length;
          });

          res.write(`Number of students: ${totalStudents}\n`);

          Object.keys(studentsByField).forEach((field) => {
            const studentList = studentsByField[field].join(', ');
            res.write(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentList}\n`);
          });

          res.end();
        })
        .catch((error) => {
          res.end(error.message);
        });
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
