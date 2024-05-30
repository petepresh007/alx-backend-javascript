import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  const classroomOne = new ClassRoom(19);
  const classroomTwo = new ClassRoom(20);
  const classroomThree = new ClassRoom(34);
  arr.push(classroomOne, classroomTwo, classroomThree);
  return arr;
}
