const fs = require('fs');

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
      console.log(`Number of students: ${students.length}`);

      // Log the number of students in each field and their names
      for (const [field, names] of Object.entries(fieldCount)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      // Resolve the promise indicating success
      resolve();
    });
  });
}

module.exports = countStudents;
