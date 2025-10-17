// Contains a variety of type guarding examples
type Dog = {
    type: 'dog',
    name: string,
    bark: () => void
}

type Cat = {
    type: 'cat',
    name: string,
    meow: () => void
}

type Animal = Dog | Cat

// Type Guarding with a Property
function makeSound(animal: Animal){
    if (animal.type === 'dog'){
        animal.bark()
    }
    else{
        animal.meow()
    }
}

function makeNewSound(animal: Animal){
    if ('bark' in animal){
        animal.bark()
    }
    else{
        animal.meow()
    }
}

// Truthy or Falsy Type Guarding
function printStrLength(str: string | null | undefined): void{
    if (str){
        console.log(str.length)
    }
    else{
        console.log('No string provided')
    }
}

printStrLength('Hello')
printStrLength('')
printStrLength(undefined)


// Type-guarding with Instance of
try{
    // throw Error('This is an Error Message')
    throw 'Something Happened'
}
catch(err){
    if (err instanceof Error){
        console.log(err.message)
    }
    else{
        console.log('Unknown Error', err)
    }
}

// Instance of a Date Object
function checkInput(date: Date | string): string{
    if (date instanceof Date){
        return date.getFullYear().toString()
    }
    else{
        return 'The input was a String'
    }
}

console.log(checkInput(new Date()))
console.log(checkInput('Just a String'))
