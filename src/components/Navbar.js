import { useEffect, useState } from "react"

function Navbar(){

const [scroll,setScroll]=useState(false)

useEffect(()=>{

const handle=()=>{

setScroll(window.scrollY>100)

}

window.addEventListener("scroll",handle)

return()=>window.removeEventListener("scroll",handle)

},[])

return(

<nav

style={{

position:"fixed",

top:scroll?"15px":"30px",

left:"50%",

transform:"translateX(-50%)",

display:"flex",

gap:"12px",

zIndex:999,

padding:scroll?"8px":"0",

borderRadius:"999px",

background:
scroll
?"rgba(5,10,30,.75)"
:"transparent",

backdropFilter:
scroll
?"blur(18px)"
:"none",

transition:"0.4s"

}}

>

<Button title="Home" click={()=>window.scrollTo({
top:0,
behavior:"smooth"
})}/>

<Button
title="Projects"
click={()=>
document
.getElementById("projects")
.scrollIntoView({
behavior:"smooth"
})
}
/>

<Button
title="Pricing"
click={()=>
document
.getElementById("pricing")
.scrollIntoView({
behavior:"smooth"
})
}
/>

<Button
title="✨ Contact"

contact

click={()=>
document
.getElementById("contact")
.scrollIntoView({
behavior:"smooth"
})
}
/>

</nav>

)

}



function Button({

title,

click,

contact

}){

return(

<button

onClick={click}

style={{

padding:"12px 22px",

border:"none",

borderRadius:"999px",

fontSize:"16px",

cursor:"pointer",

color:"white",

background:
contact
?"linear-gradient(90deg,#2563eb,#9333ea)"
:"rgba(20,20,40,.4)",

backdropFilter:"blur(12px)",

transition:"0.3s"

}}

>

{title}

</button>

)

}



export default Navbar