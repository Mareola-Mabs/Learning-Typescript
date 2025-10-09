// Interface Merging Challenge
interface Person {
    name: string;
}

interface DogOwner extends Person {
    dogName: string
}

interface Manager extends Person {
    managePeople():void;
    delegateTasks():void;
}


function getEmployee(): Person | Manager | DogOwner{
    let randNo = Math.random()

    if (randNo <= 0.33){
        const person: Person = {
            name: "Adams"
        }
        return person
    }
    else if (randNo <= 0.66){
        const person: DogOwner = {
            name: "Toyosi",
            dogName: "Chelsea"
        }
        return person
    }
    else {
        const person: Manager = {
            name: "Ibukunola",
            managePeople(){
                console.log('Managing People...')
            },
            delegateTasks(){
                console.log('Delegating Tasks...')
            }
        }
        return person
    }
}





// Adding TypeGuarding
const employee: Manager | Person | DogOwner = getEmployee()

function isManager(obj: Person | Manager | DogOwner): obj is Manager{
    return 'delegateTasks' in obj
}

console.log(isManager(employee), employee)

if (isManager(employee)){
    employee.delegateTasks()
}


