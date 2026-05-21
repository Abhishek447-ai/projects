function Hero() {

return(

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

opacity:"0.30",

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

maxWidth:"900px",

zIndex:"2"

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

"58px"

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

marginTop:"35px",

fontSize:

window.innerWidth<768

?

"20px"

:

"28px",

color:"#9ca3af",

lineHeight:"1.8"

}}

>

Mini Projects • Final Year

<br/>

Source Code • PPT • Documentation

</p>



<p
style={{

marginTop:"60px",

fontSize:"22px",

color:"#7c83a5"

}}

>

Explore Projects • Pricing • Contact

</p>

</div>

</section>

)

}

export default Hero