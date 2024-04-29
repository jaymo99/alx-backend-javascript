export default function cleanSet(set, startString) {
  const array = [];

  for (const element of set) {
    if (element.startsWith(startString)) {
      array.push(element.slice(startString.length));
    }
  }

  return array.join('-');
}
