let person:[string, number] = ["Mareola", 26]

let date: readonly [number, number, number] = [12, 12, 1999]

person.push("Mareola") //Works if the readonly attribute is not set

console.log(person)

// date.push(20) Won't work, cus it has been set as readonly



function getDetails(): [string, number]{
    return ["Mareola", 26]
}

console.log(getDetails()[0])

// Using optional parameters
const susan: [string, number?] = ["Susan"] // number is optional
console.log(susan)