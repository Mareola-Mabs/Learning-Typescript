interface Person {
    name: string;
    getDetails(): string
}

interface Person { // Interface Merging or Reopening
    age: number 
}

interface DogOwner {
    dogName: string;
    getDogDetails(): string
}

const person: Person & {age:number} = {
    name: "John",
    age: 20,
    getDetails(){
        return `Name is ${this.name}, Age is ${this.age}`
    }
}

console.log(person.getDetails())

// Interface Extension
interface Employee extends Person{
    employeeId: number
}
const employee:Employee = {
    name: "John",
    age: 28,
    employeeId: 111,
    getDetails(){
        return `Name is ${this.name}, Age is ${this.age}, EmployeeID is ${this.employeeId}`

    }
}

console.log(employee.getDetails())

// Extending from multiple interfaces
interface Manager extends Person, DogOwner{
    managePeople(): void
}
const manager: Manager & {age:number} = {
    name: "Bob",
    age: 35,
    dogName: "Rex",
    
    getDetails(){
        return `Name is ${this.name}, Age is ${this.age}`

    },
    managePeople(){

    },
    getDogDetails(){
        return `${this.dogName}`
    }
}

console.log(manager.getDetails())


// Challenge See ./challenges/02.ts