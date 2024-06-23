const fs = require('fs');
const util = require('util');

// Promisify fs.readFile to use async/await syntax
const readFileAsync = util.promisify(fs.readFile);

/**
 * Reads the database asynchronously.
 * @param {string} databasePath Path to the database file.
 * @returns {Promise<Object>} Promise that resolves to an object containing student names grouped by field.
 */
async function readDatabase(databasePath) {
  try {
    const data = await readFileAsync(databasePath, 'utf8');
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

    return {
      totalStudents,
      students,
    };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = {
  readDatabase,
};
