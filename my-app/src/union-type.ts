// UNION TYPE
let value:string | number | boolean = 20

value = 'aNewValue' // Works

value = 'true' // Also works

console.log(value) // true



// LITERAL VALUES
let requestStatus: 'pending' | 'success' | 'error' = 'pending'

requestStatus = 'pending' // Works

//  

console.log(requestStatus)

// TYPE ANY
let notSure: any = 4

notSure = 'aString' // Works

notSure = false // Works too

let random; // This is type any by default


