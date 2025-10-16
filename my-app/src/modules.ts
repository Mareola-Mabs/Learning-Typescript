// const name = 'This is a name' // Won't work except we Export it or force the module in TypeScript config

// const newItem = 'New' // Will not also work, since we've used this variable name in another typeScript file

export function sayHello(name: string): void{
    console.log(`Hello ${name}`)
}

export let person = 'susan'

export type Student = {
    name: string,
    age: number
}

const newStudent: Student = {
    name: 'Peter',
    age: 24
}

export default newStudent