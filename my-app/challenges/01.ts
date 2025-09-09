const names:string[] = ["Mareola", "Oreoluwa", "Mabawonku", "Segun", "Olaide"]


function isThereName(nameString:string):boolean{
    return names.includes(nameString)
}

console.log(isThereName("Olaide"))