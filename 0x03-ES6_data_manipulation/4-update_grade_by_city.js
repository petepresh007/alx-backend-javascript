export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const filteredObj = getListStudents.filter((data) => data.location === city);
  const l = filteredObj.map((data) => {
    const newGrade = newGrades.find((grade) => grade.studentId === data.id);
    return {
      ...data,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
  return l;
}
