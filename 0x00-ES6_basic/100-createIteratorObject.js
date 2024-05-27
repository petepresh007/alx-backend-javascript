export default function createIteratorObject(report) {
  const arr = [];
  for (const data of Object.values(report.allEmployees)) {
    arr.push(...data);
  }
  return arr;
}
