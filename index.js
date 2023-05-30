// import {data } from "./data.js"

import { getData } from "./getData.js"



const input=document.getElementById('input')

const listCard =document.getElementById('list-card')

    window.addEventListener('DOMContentLoaded',async function(){

        const personas = await getData()

        mostrandoHtml(personas.data)

    })

    input.addEventListener('keyup',async function(){

        const {data ,total} = await getData()

        console.log(total);



        const filterData =data.filter((user)=>{
            return user.firstname.toLowerCase().includes(input.value.toLowerCase())

        })
        console.log(filterData)
        mostrandoHtml(filterData)

    })

 const creatData  =function(usuarios=[] ){

    return usuarios.map((user)=>{ 
        return `
        <div class="iten-card">
            <img src="${user.image}" alt="">
                    <div class="content"> 
                        <h2>${user.firstname}</h2>
                        <p>${user.birthday}</p>
                        <span> ${user.address.country}</span>
                        <span> etiqueta</span>
                        <div>
                            <button> ver mas</button>

                        </div>
                    </div>

         </div>` 
    }).join('')
}
    const mostrandoHtml=(data_=[])=>{
    const itenCard =creatData(data_)
    listCard.innerHTML=itenCard

  }
