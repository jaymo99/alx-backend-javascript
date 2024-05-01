interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stud1: Student = {
  firstName: "Martin",
  lastName: "King",
  age: 27,
  location: "Kigali",
}

const stud2: Student = {
  firstName: "James",
  lastName: "Kariuki",
  age: 25,
  location: "Nairobi",
}

const studentList: Array<Student> = [stud1, stud2]

function renderTable(students: Array<Student>) {
  const table = document.createElement("table");
  const headerRow = table.insertRow();
  const firstNameHeader = headerRow.insertCell();
  firstNameHeader.textContent = "First Name";
  const locationHeader = headerRow.insertCell();
  locationHeader.textContent = "Location";

  students.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
  });

  document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", () => {
  renderTable(studentList);
});
