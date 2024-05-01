interface Teacher{
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface PrintTeacherFunction {
    (firstName: string, lastName:string): string;
}

const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const fullName = `${firstInitial}. ${lastName}`;
    return fullName;
};

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentClass {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}


