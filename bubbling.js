const Gparent = document.querySelector(".grand");
const P1parent = document.querySelector(".parent-1");
const P2parent = document.querySelector(".parent-2");
const Cparent = document.querySelector(".child")

Gparent.addEventListener("click",(e)=>{
    console.log
    ("p2arent was clicked")
   
    e.stopPropagation()
    setTimeout(()=>{
        Gparent.style.background="red"

    },3000)
})
P1parent.addEventListener("click",(e)=>{
    console.log
    ("p2arent was clicked")
   
     e.stopPropagation()
     setTimeout(()=>{
  P1parent.style.background="yellow"
     },3000)
})
P2parent.addEventListener("click",(e)=>{
    console.log
    ("p2arent was clicked")
     
     e.stopPropagation()
     setTimeout(()=>{
 P2parent.style.background="orange"
     },4000)
})
Cparent.addEventListener("click",(e)=>{
     Cparent.style.background="blue"
    console.log
    ("cparent was clicked")
    
})
