interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const firstStudent: Student = {
    firstName:'John',
    lastName:'Doe',
    age:32,
    location:'San Fransisco'
}

const secondStudent: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 31,
    location: 'San Fransisco'
}

const studentsList: Student[] = [firstStudent, secondStudent]

document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");

    studentsList.forEach((student) => {
        const row = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        table.appendChild(row);
    });

    document.body.appendChild(table);
});
