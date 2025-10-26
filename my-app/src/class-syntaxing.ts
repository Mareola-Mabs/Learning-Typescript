

class Book <T, U>{

    readonly title: T // Adding readonly property on a Public Property

    private author: U // Adding Private property

    public checkOut: boolean = false // Setting Default value on another Public Property

    constructor(title: T, author: U){
        this.title = title
        this.author = author
        this.checkOut = true // Changed value to true
    }

    // Public Method 
    getTitle(){
        return this.title
    }

    // Another Public Method
    public setAuthor(author: U){
        this.author = author
    }

    // Private Method
    private getAuthor(){
        return this.author
    }

    getFullInfo(){
        return `The Book '${this.title}' Was Written by ${this.getAuthor()}`
    }
}

const deepWork = new Book<string, string>('Deep Work', 'Cal Newport')

console.log(deepWork)
console.log(deepWork.checkOut) // Works

// deepWork.title = 'Something Else' // Won't work cus it's readonly

// console.log(deepWork.author) // Won't work, It's a Private property

console.log(deepWork.getTitle()) // Will Work

console.log(deepWork.getFullInfo())
// console.log(deepWork.getAuthor) // Won't work, It's a Private Method


// SHORTCUT
class Animal{
    constructor(public name:string, public lifeSpan:number, readonly age?: number){}
}

const dog = new Animal('Dog', 10)

console.log(dog.name) // 'Dog
console.log(dog.age) // Undefined


// Getters and Setters
class Person{
    private isMale: boolean = false
    constructor(public name: string, public age: number){

    }
    get info():string{
        return `${this.name} by ${this.age}`
    }

    set setMale(value: boolean){
        this.isMale = value
    }
}

const femi = new Person('Femi', 24)

console.log(femi.info)

femi.setMale = true

console.log(femi)

// Implementing Interface With Classes
interface IPerson{
    name: string,
    age: number,
    greet: ()=> void
}

class NewPerson implements IPerson{
    constructor (public name: string, public age: number){


    }
    greet(): void{
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} year(s) old`)
    }
}

const hipster = new NewPerson('Shake and Bake', 100)

console.log(hipster)