type Book = {id:number; name:string, price:number}
type BookDiscount = Book & {discount: number}
type BookDiscount1 = {id:number; name:string, price:number; discount: number}

const book:Book = {
    id: 1, 
    name: "How to cook a Dragon", 
    price: 15
}

const book1:Book = {
    id: 1, 
    name: "The secret life of Unicorns", 
    price: 18
}

// Adding a type intersection
const discountedBook:Book & {discount: number} = {
    id: 3, 
    name: "Gnomes vs. Goblins,",
    price: 18,
    discount: 0.15
}

// Works
const discountedBook1:BookDiscount = {
    id: 3, 
    name: "Gnomes vs. Goblins,",
    price: 18,
    discount: 0.15
}

// Also Works
const discountedBook2:BookDiscount1 = {
    id: 3, 
    name: "Gnomes vs. Goblins,",
    price: 18,
    discount: 0.15
}


// COMPUTED PROPERTIES
const propName = 'age'

type Animal = {[propName]: number}

let tiger:Animal = {
    [propName]: 5,
}

