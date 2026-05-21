import { useNavigate } from "react-router-dom";

function Hero() {

const navigate = useNavigate();

return (

<section
style={{

minHeight:"85vh",

display:"flex",

justifyContent:"center",

alignItems:"center",

textAlign:"center",

padding:"40px",

position:"relative",

overflow:"hidden"

}}

>

<div
style={{

position:"absolute",

width:"500px",

height:"500px",

background:"#2563eb",

filter:"blur(180px)",

opacity:"0.35",

borderRadius:"50%",

top:"-150px",

left:"-150px"

}}
/>

<div
style={{

position:"absolute",

width:"450px",

height:"450px",

background:"#8b5cf6",

filter:"blur(180px)",

opacity:"0.25",

borderRadius:"50%",

bottom:"-120px",

right:"-120px"

}}
/>


<div
style={{

zIndex:"2",

maxWidth:"900px"

}}

>

<p
style={{

fontSize:"22px",

color:"#8b5cf6",

letterSpacing:"4px"

}}

>

PROJECT HUB

</p>


<h1
style={{

fontSize:

window.innerWidth<768

?

"60px"

:

"95px",

lineHeight:"1",

fontWeight:"900",

marginTop:"20px"

}}

>

Engineering Projects

<br/>

<span
style={{

background:

"linear-gradient(90deg,#2563eb,#8b5cf6)",

WebkitBackgroundClip:"text",

color:"transparent"

}}

>

For Every Year

</span>

</h1>



<p
style={{

marginTop:"30px",

fontSize:"24px",

color:"#9ca3af",

lineHeight:"1.8"

}}

>

Mini Projects • Final Year

<br/>

Source Code • PPT • Documentation

</p>



<div
style={{

display:"flex",

justifyContent:"center",

gap:"20px",

marginTop:"50px",

flexWrap:"wrap"

}}

>

<button

onClick={()=>navigate("/projects")}

style={{

padding:"18px 38px",

background:

"linear-gradient(90deg,#2563eb,#8b5cf6)",

border:"none",

borderRadius:"18px",

color:"white",

fontSize:"18px"

}}

>

View Projects

</button>



<button

onClick={()=>navigate("/pricing")}

style={{

padding:"18px 38px",

background:

"linear-gradient(90deg,#ec4899,#8b5cf6)",

border:"none",

borderRadius:"18px",

color:"white",

fontSize:"18px"

}}

>

View Pricing

</button>



<button

onClick={()=>navigate("/contact")}

style={{

padding:"18px 38px",

background:"transparent",

border:"1px solid #8b5cf6",

borderRadius:"18px",

color:"white",

fontSize:"18px"

}}

>

Contact Now

</button>


</div>

</div>

</section>

)

}

export default Hero