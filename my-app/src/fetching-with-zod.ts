// Using ZOD Library for Validation
import * as z from 'zod' //Import Zod

const url = 'https://www.course-api.com/react-tours-project'

const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    info: z.string(), 
    image: z.string(), 
    price: z.string(),

    date: z.string() //Additional property that won't be in fetched data
})

// Inferring the Zod schema onto the type
type Tours = z.infer<typeof tourSchema>

async function fetchNewData(url: string): Promise<Tours[]>{
    try{
        const response = await fetch(url)
        if (!response.ok){
            throw new Error(`HTTP error! status:${response.status}`)
        }
        const rawData:Tours[] = await response.json()
        
        const result = tourSchema.array().safeParse(rawData)
        console.log(result)
        if (!result.success){
            throw new Error(`Invalid Data: ${result.error}`)
        }
        return result.data
    }
    catch(err){
        const errorMsg = err instanceof Error? err.message : `There was an error`
        console.log(errorMsg)
        return []
    }
}

const newTours = await fetchNewData(url)

newTours.map(item => console.log(item.date)) //This should cause an error at runtime