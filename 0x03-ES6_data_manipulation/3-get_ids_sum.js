export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((sum, getListStudents) => getListStudents.id + sum, 0);
}
