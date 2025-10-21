const url = 'https://www.course-api.com/react-tours-project'

type Tour = {
    name:string, 
    id: string, 
    info: string, 
    image: string, 
    price: string
}

async function fetchData(url: string): Promise<Tour[]>{
    try{
        const response = await fetch(url)
        if (!response.ok){
            throw new Error(`HTTP error! status:${response.status}`)
        }
        const data:Tour[] = await response.json()
        return data
    }
    catch(err){
        const errorMsg = err instanceof Error? err.message : `There was an error`
        console.log(errorMsg)
        return []
    }
}



const tours = await fetchData(url)

tours.map(item => console.log(item.name))




