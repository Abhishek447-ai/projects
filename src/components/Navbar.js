import { useState } from "react";

const Navbar = () => {

const [open,setOpen]=useState(false);

return (

<>

<nav
style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center",

padding:"30px 10%"

}}>

<h1
style={{

fontSize:"42px",

color:"#7c3aed"

}}>

ProjectHub

</h1>


<div
style={{

display:"flex",

gap:"30px",

alignItems:"center"

}}>

<a
href="#projects"
style={{

color:"white",

textDecoration:"none"

}}>

Projects

</a>


<a
href="#pricing"

style={{

color:"white",

textDecoration:"none",

cursor:"pointer"

}}

>

Pricing

</a>

<button

onClick={()=>{

setOpen(true)

}}

style={{

padding:"16px 28px",

background:

"linear-gradient(90deg,#2563eb,#7c3aed)",

border:"none",

borderRadius:"16px",

color:"white",

cursor:"pointer"

}}

>

Contact

</button>

</div>

</nav>


{

open && (

<div
style={{

position:"fixed",

top:0,

left:0,

right:0,

bottom:0,

background:

"rgba(0,0,0,.7)",

display:"flex",

justifyContent:"center",

alignItems:"center",

zIndex:999

}}

>

<div
style={{

background:"#111827",

padding:"50px",

borderRadius:"30px",

width:"420px",

textAlign:"center",

color:"white"

}}

>

<h1>

Contact Us

</h1>

<br/>

<p
style={{

color:"#9ca3af"

}}>

Click below for communication

</p>

<br/>


<a

href="mailto:risingsunprojects1@gmail.com"

style={{

display:"flex",

justifyContent:"center",

alignItems:"center",

gap:"15px",

padding:"18px",

background:"#1e293b",

borderRadius:"18px",

textDecoration:"none",

color:"white",

marginBottom:"20px"

}}

>

📧

<span>

Email Us

</span>

</a>



<button

onClick={()=>{

window.open(

"https://wa.me/919535554218"

)

}}

style={{

display:"flex",

justifyContent:"center",

alignItems:"center",

gap:"15px",

width:"100%",

padding:"18px",

background:"#25D366",

border:"none",

borderRadius:"18px",

color:"white",

fontSize:"18px"

}}

>

🟢

<span>

Chat on WhatsApp

</span>

</button>

<br/>


<button

onClick={()=>{

setOpen(false)

}}

style={{

padding:"16px",

width:"100%",

border:"none",

borderRadius:"18px"

}}

>

Close

</button>

</div>

</div>

)

}

</>

);

};

export default Navbar;