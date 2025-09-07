// TYPE ANNOTATIONS WITH OBJECTS
let car: { brand: string; year: number } = {
  brand: "Toyota",
  year: 2020,
}


let car1:{ brand: string; year: number } = Object.create(car) // Copy the car object

let book:{title: string; cost: number} = {title: 'book', cost: 20}
let pen:{title: string; cost: number} = {title: 'pen', cost: 10}

// Adding support for Optional keys/values
let notebook:{title: string; cost?: number} = {title: 'book'} // ? is used to denote there might be a cost or not

let items:{title:string; cost?:number}[] = [book, pen, notebook] 

// Adding readonly/immutable keys/values
let newItems: {readonly title:string; cost: number} = {title:'Just a book', cost: 50}

// newItems['title'] = "Something else" // Throws an error