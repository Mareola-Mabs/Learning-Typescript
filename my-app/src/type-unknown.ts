let unknownVAlue: unknown

unknownVAlue = 'Hello World'

unknownVAlue = [1, 2, 3]

unknownVAlue = 42.33455

// unknownVAlue.toFIxed(2) // Won't work for Type "Unknown"

if (typeof unknownVAlue === 'number'){
    console.log(unknownVAlue.toFixed(2))
}

// Working with Try and Catch block
try{
    throw new Error('This is an Error Message')
}

catch(err){
    // Type Guarding
    if (err instanceof Error){
        console.log(err.message)
    }
    else{
        console.log(err)
    }
}
