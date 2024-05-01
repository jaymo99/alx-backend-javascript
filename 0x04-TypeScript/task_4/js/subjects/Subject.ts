/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        private _teacher: Teacher | null = null;

        public setTeacher(teacher: Teacher): void {
            this._teacher = teacher;
        }

        public get teacher(): Teacher | null {
            return this._teacher;
        }
    }
}
