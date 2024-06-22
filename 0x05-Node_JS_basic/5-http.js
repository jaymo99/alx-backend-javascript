const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (path === '/students') {
    countStudents(databasePath)
      .then(({ totalStudents, students }) => {
        let response = `This is the list of our students\nNumber of students: ${totalStudents}\n`;
        for (const [field, names] of Object.entries(students)) {
          response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

module.exports = app;
