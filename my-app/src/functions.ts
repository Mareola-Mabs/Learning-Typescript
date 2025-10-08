function sayHi(name:string){
    return name.toUpperCase()
}

console.log(sayHi("Mareola"))

let book:{title: string; cost: number} = {title: 'book', cost: 20}


function sayHis(book:object){
    return book
}

console.log(sayHis(book))


// Specifying return value
function calculate(num:number):number | string{
    const hasDiscount = true

    // if(hasDiscount) return 'It is true' // throws an error, return value has been set to a number
    return num * 60
}

console.log(calculate(60));


// Optional and default parameters
function calculatePrice(price:number = 50, discount?:number) {
    return price - (discount || 0) 
}

let priceAfterDiscount = calculatePrice(100) // 100 - 0

console.log(priceAfterDiscount) // ==> 100


// Working with ...rest parameters
function sum(message:string, ...numbers:number[]):string | number{
    return message + numbers.reduce((acc:number, num:number) => acc + num, 0)
}

let result = sum('The total is: ', 1, 2, 3, 4, 5)

console.log(result) // 15

// Working with type void
function logMessage(message:string):void{
    console.log(message)
}

logMessage("Hello Mareola")

// Type Guarding
function processInput(param:(string | number)):void{
    typeof param === 'number'? console.log(param * 2) : console.log(param.toUpperCase())
}

processInput("Mareola")
processInput(10)


// Destructuring Objects
let newItems:{id:number} = {id:60}
function createEmployee({id}:{id:number}):{id:number; isActive:boolean}{
    return{
        id, isActive: id % 2 == 0
    }
}

console.log(createEmployee(newItems))


function processData(input:number | string, reverse:{reverse:boolean} = {reverse:true}):void{
    if (typeof input === 'number'){
        console.log(input ** 2)
    }
    if (typeof input === 'string'){
        console.log(input.toUpperCase())
    }
    if(typeof input === 'string' && reverse){
        console.log(input.split("").reverse().join("").toUpperCase())
    }
    else{
        console.log("input is a number")

    }

}   

let configurations = {
    reverse: true
}

processData("Hello", configurations)


function createStudents(student:{id: number; name: string}): void{
    console.log(`Welcome to the course ${student.name.toUpperCase()}`)
}

let student = {
    id: 1,
    name: "Mareola",
    email: "bulun1001@gmail.com"
}

createStudents(student) // Works even when "email" wasn't specified in parameter type

// createStudents({id: 1,name: "Mareola", email: "bulun1001@gmail.com"}) // Won't work for inline Objects