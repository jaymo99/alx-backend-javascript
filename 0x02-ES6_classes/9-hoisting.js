/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
export class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }

  get year() { return this._year; }

  set year(newYear) {
    if (typeof newYear !== 'number') {
      throw TypeError('Year must be a number');
    }

    this._year = newYear;
  }

  get location() { return this._location; }

  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw TypeError('Location must be a string');
    }

    this._location = newLocation;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.holbertonClass = holbertonClass;
  }

  get firstName() { return this._firstName; }

  set firstName(newFirname) {
    if (typeof newFirname !== 'string') {
      throw TypeError('FirstName must be a string');
    }

    this._firstName = newFirname;
  }

  get lastName() { return this._lastName; }

  set lastName(newLasname) {
    if (typeof newLasname !== 'string') {
      throw TypeError('LastName must be a string');
    }

    this._lastName = newLasname;
  }

  get fullName() { return `${this._firstName} ${this._lastName}`; }

  get holbertonClass() { return this._holbertonClass; }

  set holbertonClass(newHolb) {
    if (!(newHolb instanceof HolbertonClass)) {
      throw TypeError('HolbertonClass must be an Holberton class object');
    }

    this._holbertonClass = newHolb;
  }

  get fullStudentDescription() {
    return `${this.fullName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
