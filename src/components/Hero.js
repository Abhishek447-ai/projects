import { motion } from "framer-motion"

function Hero() {

return (

<section
style={{
minHeight:"100vh",
paddingTop:"180px",
position:"relative",

background:
"linear-gradient(135deg,#000814,#020617,#03045e)",

overflow:"hidden",

display:"flex",

alignItems:"center",

justifyContent:"center"
}}
>


{/* MOVING BLOBS */}

<motion.div

animate={{
x:[0,300,-200,0],
y:[0,-150,150,0]
}}

transition={{
duration:20,
repeat:Infinity
}}

style={{

position:"absolute",

width:"700px",

height:"700px",

borderRadius:"50%",

background:
"radial-gradient(circle,#2563eb,transparent)",

filter:"blur(150px)",

opacity:.45

}}
/>


<motion.div

animate={{
x:[0,-250,200,0],
y:[0,250,-150,0]
}}

transition={{
duration:18,
repeat:Infinity
}}

style={{

position:"absolute",

width:"600px",

height:"600px",

borderRadius:"50%",

background:
"radial-gradient(circle,#9333ea,transparent)",

filter:"blur(140px)",

opacity:.4

}}
/>



<motion.div

initial={{
opacity:0,
y:80
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1.5
}}

style={{
zIndex:2,
textAlign:"center"
}}

>



<h1

style={{

fontSize:"clamp(60px,10vw,140px)",

lineHeight:"1",

marginBottom:"40px",

fontWeight:"900",

background:
"linear-gradient(90deg,#2563eb,#9333ea)",

WebkitBackgroundClip:"text",

color:"transparent",

textAlign:"center"

}}

>

Engineering
<br/>
Projects

</h1>


<p
style={{

color:"#94a3b8",

fontSize:"22px",

maxWidth:"900px",

margin:"auto",

lineHeight:"1.8"

}}


>

Mini Projects • Final Year • Source Code • PPT

</p>


<div
style={{
marginTop:"80px",

display:"flex",

gap:"25px",

justifyContent:"center"
}}
>

<button

onClick={()=>
document
.getElementById("projects")
.scrollIntoView()
}

style={btn1}

>

View Projects

</button>


<button

onClick={()=>
document
.getElementById("contact")
.scrollIntoView()
}

style={btn2}

>

Contact

</button>

</div>

</motion.div>

</section>

)

}

const btn1={

padding:"20px 45px",

border:"none",

borderRadius:"18px",

fontSize:"20px",

background:
"linear-gradient(90deg,#2563eb,#9333ea)",

color:"white",

cursor:"pointer"
}

const btn2={

padding:"20px 45px",

border:"1px solid #7c3aed",

borderRadius:"18px",

fontSize:"20px",

background:"transparent",

color:"white",

cursor:"pointer"
}

export default Hero