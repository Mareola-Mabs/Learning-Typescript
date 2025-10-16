import newStudent, {sayHello, person, type Student} from "./modules"

console.log(newStudent)
sayHello('Mareola')
console.log(person)

const anotherStudent: Student = { // Using the Type: Student
    name: 'Mareola',
    age: 26
}

console.log(anotherStudent)