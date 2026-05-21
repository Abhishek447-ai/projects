function Hero() {

const mobile = window.innerWidth < 768;

return (

<section
style={{

display:"flex",

flexDirection:

mobile

?

"column"

:

"row",

alignItems:"center",

justifyContent:"space-between",

padding:

mobile

?

"40px 25px"

:

"80px 10%",

gap:"40px",

minHeight:"80vh"

}}

>

<div>

<p
style={{

color:"#8b5cf6",

fontSize:

mobile

?

"20px"

:

"28px"

}}

>

PROJECT HUB

</p>


<h1
style={{

fontSize:

mobile

?

"58px"

:

"110px",

lineHeight:"1",

fontWeight:"900",

marginTop:"20px"

}}

>

Engineering

<br/>

Projects

</h1>


<h2
style={{

marginTop:"20px",

fontSize:

mobile

?

"48px"

:

"90px",

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

marginTop:"30px",

color:"#9ca3af",

fontSize:

mobile

?

"22px"

:

"30px",

lineHeight:"1.8"

}}

>

Mini Projects

<br/>

Source Code

<br/>

Documentation

<br/>

PPT

</p>


<button
style={{

marginTop:"35px",

padding:"18px 35px",

border:"none",

borderRadius:"18px",

background:

"linear-gradient(90deg,#2563eb,#8b5cf6)",

color:"white",

fontSize:"20px"

}}

>

View Projects

</button>

</div>



<div>

<div
style={{

width:

mobile

?

"280px"

:

"520px",

height:

mobile

?

"280px"

:

"420px",

borderRadius:"40px",

background:

"linear-gradient(135deg,#2563eb,#8b5cf6)",

boxShadow:

"0 0 100px rgba(79,70,229,.45)",

display:"flex",

justifyContent:"center",

alignItems:"center",

fontSize:

mobile

?

"110px"

:

"180px"

}}

>

💻

</div>

</div>

</section>

)

}

export default Hero