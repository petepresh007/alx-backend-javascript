import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    readDatabase('database.csv')
      .then((data) => {
        const fields = Object.keys(data)
          .sort((a, b) => a.toLowerCase()
            .localeCompare(b.toLowerCase()));
        let response = 'This is the list of our students\n';

        fields.forEach((field) => {
          response += `students in ${field}: ${data[field].length}. List: ${data[field].join(',')}\n`;
        });
        res.status(200).send(response.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    readDatabase('database.csv')
      .then((data) => {
        const fields = Object.keys(data)
          .sort((a, b) => a.toLowerCase()
            .localeCompare(b.toLowerCase()));
        const selectedMajor = fields.filter((data) => data === major);

        if (!fields.includes(major)) {
          res.status(500).send('Major parameter must be CS or SWE');
        } else {
          let response = '';
          selectedMajor.forEach((field) => {
            response += `List: ${data[field].join(',')}\n`;
          });
          res.status(200).send(response.trim());
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
