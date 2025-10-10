enum Direction {
    Up, // -> 0
    Down, // -> 1
    Left, // -> 2
    Right // -> 3
}

console.log(Direction.Up) // 0
console.log(Direction[0]) // Up

const direction: Direction = Direction.Up

console.log(direction) // 0

// Assigning Values to enum (If the first value is assigned a String, You must also explicitly assign the other values)
enum Role {
    Admin = "ADMIN",
    User = 1,
    Guest
}

console.log(Role.Guest) // 2


enum NewDirection { // Works
  Up = 1,
  Down = "Down", // String
  Left = 3,     // 3
  Right = 4     // 4
}

// enum Test {
//     Value = "Just a String",
//     Value2, // Won't work, since previous value is a string type, you must explicitly assign the next value
//     value3,
//     Value4,
// }


enum ServerResponseStatus {
    Error = "Error",
    Success = 200
}

console.log(ServerResponseStatus)

interface ServerResponse {
    result: ServerResponseStatus,
    data: string[]
}

function getServerResponse(): ServerResponse{
    return {
        result: ServerResponseStatus.Success,
        data: ["First Item", "Second Item"]
    }
}

const response: ServerResponse = getServerResponse()

console.log(response)

// Looping through the enum Object
console.log(Object.values(ServerResponseStatus).forEach(item => console.log(item)))

// Setting up number Values
enum NumericEnum {
    Member = 1,
    Member2 = 100,
    Member3 = 'Just a string'
    
}

let newNumber: NumericEnum = 1 // Works
let newNumber2: NumericEnum = 100 // Also works

// let newString: NumericEnum = 'Just a String'  Won't work for Strings


// Challenge
enum UserRoles {
    Admin,
    Manager,
    Employee
}

type User = {
    id: number,
    name: string,
    role: UserRoles
    contact: readonly [string, string]
}

function createUser(obj:User): User{
    return obj
}

let testObject: User = {
    id: 1,
    name: "Mareola",
    role: UserRoles.Admin,
    contact: ["Bulun1001@gmail.com", "08145507839"]
}

const output: User = createUser(testObject)
console.log(output)
