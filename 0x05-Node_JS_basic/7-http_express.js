const fs = require('fs');
const express = require('express');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Attempt to read the file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // If there's an error, reject the promise with a specific error message
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the data into lines
      const lines = data.split('\n');

      // Filter out empty lines and the header line
      const students = lines.slice(1).filter((line) => line.trim() !== '');

      // Initialize an object to store the count of students per field
      const fieldCount = {};

      // Loop through each student line
      students.forEach((student) => {
        // Split the line by comma to get the individual fields
        const [firstname, , , field] = student.split(',');

        if (!fieldCount[field]) {
          fieldCount[field] = [];
        }

        // Add the student's first name to the appropriate field list
        fieldCount[field].push(firstname);
      });

      // Log the total number of students
      let result = `Number of students: ${students.length}\n`;

      for (const [field, names] of Object.entries(fieldCount)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      console.log(`${err.message}\n`);
    });
});

app.listen(1245, () => {
  console.log('app listening on port: 1245');
});

module.exports = app;
