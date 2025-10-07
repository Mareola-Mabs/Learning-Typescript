// TYPE ANNOTATIONS ON ARRAYS

const books:(string | number)[] = [1984, 'Brave New World', 'Fahrenheit 451'] // String or Number type

let stringOrNumbers: Array<number | string> = [1, 2, 3] // String or Number type

let numbers: number[] = [4, 5, 6] // Accepts only numbers

// numbers = [4, 5, 6, 'Femi' Won't work Accepts only numbers

console.log(numbers, stringOrNumbers)

// let other:[] = ['item1'] This throws an error, expects empty values


let foundBook: string | null | undefined

for (let book of books){
    if (book === 'Fahrenheit 45111'){
        foundBook = book
        break
    }
}

console.log(foundBook?.length)

