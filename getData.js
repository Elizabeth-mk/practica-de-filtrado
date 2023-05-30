
export const getData  = async() => {
 
   const res = await fetch(api)
   const personas  =await res.json()
   return personas
} 
const api="https://fakerapi.it/api/v1/persons?_quantity=100"

