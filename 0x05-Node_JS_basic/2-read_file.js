const fs = require('fs');

function countStudents(path) {
  try {
    const read = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
    const lines = read.split('\n');
    const students = lines.slice(1).filter((line) => line.trim() !== '');

    const fieldCount = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      console.log(firstname, field);

      if (!fieldCount[field]) {
        fieldCount[field] = [];
      }
      fieldCount[field].push(firstname);
    });

    console.log(`Number of students: ${students.length}`);

    for (const [field, name] of Object.entries(fieldCount)) {
      console.log(`Number of students in ${field}: ${name.length}. List: ${name.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
