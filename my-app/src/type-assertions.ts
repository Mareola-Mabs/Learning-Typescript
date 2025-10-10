// With variables
let someValue: any = 'This is a String'

let strLength = (someValue as String).length

console.log(strLength) // 16

type Bird = {
    name: string
}

const birdString = '{"name": "Eagle"}'

const dogString = '{"breed": "Poodle"}'

const catString = '{"sound": "Meow"}'

const dogObject = JSON.parse(dogString) //JSON.parse outputs a type of "any"
const birdObject = JSON.parse(birdString) //JSON.parse outputs a type of "any"

const catObject = JSON.parse(catString)

birdObject as Bird // Works

dogObject as Bird // Works

console.log(dogObject, birdObject)  

const cat = catObject as Bird 

console.log(cat.name) // Undefined, no cat.name does not exist in cat object
// console.log(cat.sound) // Error, cat.sound does not exist in Bird type


// Using Enums
enum Status {
    Success = 'Success',
    Failure = 'Failure'

}

const statusValue = 'Success'

const value:Status = statusValue as Status



