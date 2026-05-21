function Hero() {

return (

<section
style={{

display:"flex",

flexDirection:"column",

justifyContent:"center",

alignItems:"center",

textAlign:"center",

minHeight:"85vh",

padding:"40px"

}}

>

<p
style={{

color:"#8b5cf6",

fontSize:"22px"

}}

>

PROJECT HUB

</p>



<h1
style={{

fontSize:

window.innerWidth<768

?

"58px"

:

"110px",

lineHeight:"1",

marginTop:"20px"

}}

>

Engineering

<br/>

Projects

</h1>



<h2
style={{

marginTop:"15px",

fontSize:

window.innerWidth<768

?

"44px"

:

"85px",

background:

"linear-gradient(90deg,#2563eb,#8b5cf6)",

WebkitBackgroundClip:

"text",

color:"transparent"

}}

>

For Every Year

</h2>



<p
style={{

marginTop:"25px",

color:"#9ca3af",

fontSize:"22px"

}}

>

Mini Projects • Source Code

</p>



<button

onClick={()=>{

window.location.href="#projects"

}}

style={{

marginTop:"40px",

padding:"20px 45px",

background:

"linear-gradient(90deg,#2563eb,#8b5cf6)",

border:"none",

borderRadius:"20px",

color:"white",

fontSize:"22px"

}}

>

View Projects

</button>

</section>

)

}

export default Hero