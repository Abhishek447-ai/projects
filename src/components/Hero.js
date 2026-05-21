function Hero() {

const mobile = window.innerWidth < 768

return (

<section
style={{

display:"grid",

gridTemplateColumns:

mobile

?

"1fr"

:

"1fr 1fr",

alignItems:"center",

gap:"50px",

minHeight:"80vh",

padding:"60px 10%",

overflow:"hidden"

}}

>

{/* LEFT */}

<div>

<p
style={{

color:"#7c3aed",

fontSize:"28px",

marginBottom:"20px"

}}

>

PROJECT HUB

</p>


<h1
style={{

fontSize:

mobile

?

"72px"

:

"120px",

fontWeight:"900",

lineHeight:"1"

}}

>

Engineering

<br/>

Projects

<br/>

<span
style={{

background:

"linear-gradient(90deg,#2563eb,#8b5cf6)",

WebkitBackgroundClip:

"text",

color:"transparent"

}}

>

For Every Year

</span>

</h1>


<p
style={{

marginTop:"30px",

fontSize:"28px",

color:"#9ca3af"

}}

>

Mini Projects • Source Code

<br/>

Documentation • PPT

</p>


<button
style={{

marginTop:"40px",

padding:"18px 35px",

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

</div>



{/* RIGHT */}

<div
style={{

display:"flex",

justifyContent:"center"

}}

>

<div
style={{

width:

mobile

?

"300px"

:

"600px",

height:

mobile

?

"350px"

:

"450px",

background:

"linear-gradient(135deg,#2563eb,#8b5cf6)",

borderRadius:"40px",

display:"flex",

justifyContent:"center",

alignItems:"center",

fontSize:

mobile

?

"100px"

:

"180px",

boxShadow:

"0 0 120px rgba(79,70,229,.5)",

maxWidth:"100%"

}}

>

💻

</div>

</div>


</section>

)

}

export default Hero