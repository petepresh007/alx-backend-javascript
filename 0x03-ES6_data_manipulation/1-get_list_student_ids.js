export default function getListStudentIds(getListStudents) {
  const newArr = [];
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.map((data) => newArr.push(data.id));
}
