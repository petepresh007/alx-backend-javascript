export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((data) => data.location === city);
}
