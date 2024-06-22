const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift(); // Remove the header row

      const students = {
        CS: [],
        SWE: [],
      };

      lines.forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        if (firstname && lastname && age && field) {
          if (students[field]) {
            students[field].push(firstname);
          }
        }
      });

      const totalStudents = lines.length;
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, names] of Object.entries(students)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve({
        totalStudents,
        students,
      });
    });
  });
}

module.exports = countStudents;
