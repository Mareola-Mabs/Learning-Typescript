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
function calculate(num:number):number{
    const hasDiscount = true

    // if(hasDiscount) return 'It is true' // throws an error, return value has been set to a number
    return num * 60
}

console.log(calculate(60));



