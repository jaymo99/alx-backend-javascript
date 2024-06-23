const { readDatabase } = require('../utils');

class StudentsController {
  /**
   * Handles the /students endpoint to get all students.
   * @param {Object} req The request object.
   * @param {Object} res The response object.
   */
  static async getAllStudents(req, res) {
    try {
      const databasePath = req.app.locals.databasePath; // Retrieve database filename dynamically
      const { totalStudents, students } = await readDatabase(databasePath);

      let response = `This is the list of our students\nNumber of students: ${totalStudents}\n`;
      for (const [field, names] of Object.entries(students)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    }
  }

  /**
   * Handles the /students/:major endpoint to get students by major.
   * @param {Object} req The request object.
   * @param {Object} res The response object.
   */
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const databasePath = req.app.locals.databasePath; // Retrieve database filename dynamically
      const { students } = await readDatabase(databasePath);

      const studentsInMajor = students[major] || [];
      const response = `List: ${studentsInMajor.join(', ')}`;

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }
}

module.exports = StudentsController;
