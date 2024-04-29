export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) { return []; }
  if (typeof city !== 'string') { return []; }

  const updatedArr = students.map((student) => {
    const updatedStudent = { ...student };
    const gradeObj = newGrades.find((obj) => obj.studentId === student.id);
    if (gradeObj) {
      updatedStudent.grade = gradeObj.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }
    return updatedStudent;
  });

  return (updatedArr.filter((student) => student.location === city));
}
