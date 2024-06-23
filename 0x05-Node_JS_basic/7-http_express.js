const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

const databasePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databasePath)
    .then(({ totalStudents, students }) => {
      let response = `This is the list of our students\nNumber of students: ${totalStudents}\n`;
      for (const [field, names] of Object.entries(students)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.send(response.trim()); // Use trim to remove the trailing newline
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

module.exports = app;
