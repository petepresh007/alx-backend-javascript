import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error(err));
        return;
      }

      const lines = data.split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');

      const studentObject = {};

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!studentObject[field]) {
          studentObject[field] = [];
        }
        studentObject[field].push(firstname);
      });
      resolve(studentObject);
    });
  });
}

export default readDatabase;
