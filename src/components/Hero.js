import { motion } from "framer-motion"

function Hero(){

return(

<section

style={{

minHeight:"100vh",

background:
"linear-gradient(135deg,#000814,#020617,#03045e)",

overflow:"hidden",

display:"flex",

alignItems:"center",

justifyContent:"center",

padding:"120px 20px 60px",

position:"relative"

}}

>


<motion.div

animate={{
x:[0,250,-200,0],
y:[0,-150,100,0]
}}

transition={{
duration:20,
repeat:Infinity
}}

style={{

position:"absolute",

width:"70vw",

height:"70vw",

maxWidth:"700px",

maxHeight:"700px",

borderRadius:"50%",

background:
"radial-gradient(circle,#2563eb,transparent)",

filter:"blur(130px)",

opacity:.45

}}
/>



<motion.div

animate={{
x:[0,-200,250,0]
}}

transition={{
duration:18,
repeat:Infinity
}}

style={{

position:"absolute",

width:"60vw",

height:"60vw",

maxWidth:"600px",

maxHeight:"600px",

borderRadius:"50%",

background:
"radial-gradient(circle,#9333ea,transparent)",

filter:"blur(130px)",

opacity:.35

}}
/>



<div

style={{

textAlign:"center",

zIndex:10,

maxWidth:"900px"

}}

>

<h1

style={{

fontSize:
"clamp(58px,15vw,150px)",

lineHeight:"0.95",

fontWeight:"900",

marginBottom:"30px",

background:
"linear-gradient(90deg,#2563eb,#9333ea)",

WebkitBackgroundClip:"text",

color:"transparent"

}}

>

Engineering
<br/>
Projects

</h1>


<p

style={{

fontSize:
"clamp(18px,4vw,28px)",

color:"#9ca3af",

lineHeight:"1.8",

padding:"0 10px"

}}

>

Mini Projects • Final Year
<br/>

Source Code • PPT

</p>



<div

style={{

display:"flex",

justifyContent:"center",

gap:"18px",

flexWrap:"wrap",

marginTop:"50px"

}}

>

<button

style={btn1}

onClick={()=>

document
.getElementById("projects")
.scrollIntoView({
behavior:"smooth"
})

}

>

View Projects

</button>


<button

style={btn2}

onClick={()=>

document
.getElementById("contact")
.scrollIntoView({
behavior:"smooth"
})

}

>

Contact

</button>

</div>

</div>

</section>

)

}


const btn1={

padding:"18px 34px",

border:"none",

borderRadius:"20px",

fontSize:"18px",

background:
"linear-gradient(90deg,#2563eb,#9333ea)",

color:"white",

cursor:"pointer"

}


const btn2={

padding:"18px 34px",

borderRadius:"20px",

fontSize:"18px",

border:"1px solid #7c3aed",

background:"transparent",

color:"white",

cursor:"pointer"

}


export default Hero