// Interface type is used to describe the shape of an Object
interface Book{
    readonly isbn: number;
    title: string; // Strings, Semicolons or Linebreaks work
    author: string
    genre: string
    price?: number

    // Methods
    printAuthor():void
    OptionalPrintAuthor?():void
    printTitle(message:string):string

    // Other way for methods
    printSomething: (someValue: number)=> number

    
}

const deepWork:Book = {
    isbn: 123,
    title: "Deep Work",
    author: "Cal Newport",
    genre: 'Self-Help',
    printAuthor(){
        console.log(this.author)
    },
    printTitle(message){
        return `${this.title}, ${message}`
    },

    // printSomething(number){
    //     return number
    // } // Works

    // printSomething: function(number){
    //     return number
    // } // Also works

    printSomething: (number)=>{
        return number
    } // Also works
}

console.log(deepWork.author)
deepWork.printAuthor()
deepWork.printTitle('Hello')

// Challenge
interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    storage?: string;
    upgradeRam(param:number): number;
}

const laptop:Computer = {
    id: 1,
    brand: "Lenovo",
    ram: 32,
    upgradeRam: (param)=>{
      laptop.ram += param
      return laptop.ram
    }
}

console.log(laptop.upgradeRam(16))


