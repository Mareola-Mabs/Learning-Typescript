// TYPE ALIASES
type User = {id: number; name:string; isActive: boolean}

const john: User = {
    id: 1,
    name: 'John',
    isActive: true
}

function createNewUser(user:User):string{
    return `${user.name.toUpperCase()}, ${JSON.stringify(user)}`
}

console.log(createNewUser(john))

type stringOrNumber = string | number

let newNum:stringOrNumber = 50

console.log(newNum)

// Challenge
type Employee = {id:number; name:string; department:string}

type Manager = {id:number; name:string; employees: Employee[]}

type Staff = Employee | Manager

const printStaffDetails = (param:Staff):void =>{
    if ('employees' in param){
        console.log(`${param.name} is a Manager, they manage ${param.employees.length} employee(s)`)
    }
    else{
        console.log(`${param.name} is an Employee and in department ${param.department}`)
    }
}

const alice:Employee = {id:1, name: 'alice', department: 'sales'}

const steve:Employee = {id:2, name: 'steve', department: 'hr'}

const bob:Manager = {id:1, name: 'bob', employees: [alice, steve]}


printStaffDetails(bob)

