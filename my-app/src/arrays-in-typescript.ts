// TYPE ANNOTATIONS ON ARRAYS

const books:(string | number)[] = [1984, 'Brave New World', 'Fahrenheit 451'] // String or Number type

let numbers: Array<number | string> = [1, 2, 3] // String or Number type

// let other:[] = ['item1'] This throws an error, expects empty values


let foundBook: string | null | undefined

for (let book of books){
    if (book === 'Fahrenheit 45111'){
        foundBook = book
        break
    }
}

console.log(foundBook?.length)

