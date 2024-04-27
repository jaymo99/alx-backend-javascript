export default function createIteratorObject(report) {
  const newArr = [];
  const employees = Object.values(report.allEmployees);

  employees.forEach((employee) => {
    if (Array.isArray(employee)) {
      newArr.push(...employee);
    } else {
      newArr.push(employee);
    }
  });
  return newArr;
}
