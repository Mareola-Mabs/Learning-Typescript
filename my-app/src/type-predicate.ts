type Student = {
    name: string,
    study: ()=> void
}

type User = {
    name: string,
    login: ()=> void
}

type Person = Student | User

function randomPerson(): Person{
    return Math.random() > 0.5? {name: 'John', study: ()=> console.log('Studying...')}
    : {name: 'Mary', login: ()=> console.log('Logging in...')}
}
 const person: Person = randomPerson()

//  function isStudent(person: Person): person is Student{
//     return 'study' in person

//     // OR
 function isStudent(person: Person): person is Student{
    return 'study' in person
 }
//     // return (person as Student).study !== undefined
//  }

 if (isStudent(person)){
    person.study()
 }else{
    person.login()
 }


//  Example 2.0
const ada: Student = {
    name: 'Ada',
    study: ()=> console.log('Studying...')
}

const james: User = {
    name: 'James',
    login: ()=> console.log('Login...')
}

let objHolder: Person

Math.random() > 0.55? objHolder = james : objHolder = ada

function isaStudent(obj: Person):obj is Student{
    return 'study' in obj
}

isaStudent(objHolder)? objHolder.study() : objHolder.login()


