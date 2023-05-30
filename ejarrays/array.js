const name='laptop'
const pricie= 2800

const newProduct= {
    name,
    pricie
}

console.log(newProduct);

const title= document.createElement( 'h1' )
console.log(title)
title.innerText= 'Hola elizabeth'
document.body.append(title) 


const button= document.createElement('button')
 button.innerText=('aceptar  ')

 document.body.append(button)
 console.log(button)
 button.addEventListener('click',function(){
    title.innerText='actualizado'
 })

 const user = {
    name:'anon' ,
    apellido: 8,
 }
 const parrafo= document.createElement('p')
parrafo.innerText=('hola mundomundomundomundomundomundo')
 document.body.append(parrafo)

  const link= document.createElement('a')
 link.innerText=('inicio')
   document.body.append(link)
   console.log(link)

   const h2= document.createElement('h2')
   h2.innerText=('subtitulo')
   document.body.append(h2)

   function printInfo(user){
    return '<h3>hola '+ user.name + '</h3>'
    
   }

   document.body.innerHTML= printInfo(user)