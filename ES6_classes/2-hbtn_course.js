export default class HolbertonCourse {
    constructor(name, lenght, students) {
        this.name = name
        this.lenght = lenght
        this.students = students
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = value;
    }

    get lenght(){
        return this._lenght;
    }

    set lenght(value) {
        if (typeof value !== 'Number') {
            throw new TypeError('Lenght must be a number')
        }
        this._lenght = value;
    }

    get students() {
        return this._students;
    }

    set students(value) {
        if (!Array.isArray(value) || !students.every(value => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = value
    }
}