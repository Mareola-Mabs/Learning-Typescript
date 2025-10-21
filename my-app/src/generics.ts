// Examples of Repetitive and Redundant Functions
function checkString(arg:string): string{
    return arg
}

function checkNumber(arg:number): number{
    return arg
} // Causing repetition if same function is to be used for different types


// Creating a Generic Function
function generic<T>(arg: T): T{
    return arg
}

const checkNewString = generic<string>('This is a String')
const checkNewNumber = generic<number>(2)

interface genericInterface<T>{
    value: T,
    getValue: ()=> T
}

const genericObject: genericInterface<string>= {
    value: "This is a just a string",
    getValue: ()=> 'A Return String',
}
// Adding Extensions
const newGenericObject: genericInterface<string> & {type: number}= {
    value: "This is a just a string",
    getValue: ()=> 'A Return String',
    type: 50
}

console.log(genericObject.getValue())


// Working WIth Promises
async function doSomething():Promise<string>{
    return 'hello world'
}

function newPromise(): Promise<string>{ // This promise should reject
    return new Promise((res, rej)=>{
        const value = false
        if (value){
            return res("ok")
        }
        else{
            return rej("Promise Rejected")
        }
    })
}

async function heyYo(): Promise<void>{
    try{
        const value = await newPromise()
        console.log(value)
    }
    catch(err){
        console.log(err)
    }
}

heyYo()
// newPromise().then(res => console.log(res))
// .catch(err => console.log(err))


// Exercise
function generateArray(length: number, value: string): string[]{
    let result: string[] = []
    result = Array(length).fill(value)
    return result
}

console.log(generateArray(6, "Hello"))

// Converting to a generic function
function createArray<T>(length: number, value: T): T[]{
    let result: T[] = []
    result = Array(length).fill(value)
    return result
}

console.log(createArray<string>(4, "Hello World"))


// Generic functions with multiple parameters
function pair<T, U>(val1: T, val2: U): (T | U)[]{
    return [val1]
}

console.log(pair<string, number>("Generic function with multiple params", 25))


// Limiting Generic function types
function processValue<T extends string>(value: T): T{
    console.log(value)
    return value
}
processValue<string>('Test String') // Works
// processValue<number>(50) // Won't work, type is limited to string

function processValue1<T extends (string | number),>(value: T): T{
    console.log(value)
    return value
}

processValue1<number>(50) // Works, type can be string or number


// Exercise 2.0
type Car = {
    brand: string,
    model: string
}
const car: Car = {
    brand: 'Ford',
    model: 'Mustang'
}

type Product = {
    brand: string,
    price: number
}

const product: Product = {
    brand: 'Shoes',
    price: 1.99
}
type Student = {
    name: string,
    age: number
}
const student: Student = {
    name: 'Peter',
    age: 20
}


function printName<T extends Student>(input: T): void{
    console.log(input.name);
    
}

printName<Student>(student)
printName(student) // Also works
// printName(product) // Won't work

function printName1<T extends {brand: string}>(input: T): void{
    console.log(input.brand);
    
}

printName1(product) // Works


// Setting up Default Types
interface StoreData<T = any>{
    data: T[]
}

const storeNumbers: StoreData<number> = {
    data: [1, 2, 3, 4]
}

const randomStuff: StoreData = { //Works
    data: ['random', 1]
}
const randomStuff1: StoreData<any> = { //Also Works
    data: ['random', 1]
}

