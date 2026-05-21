function Hero(){

return(

<section
style={{

display:"flex",

minHeight:"90vh",

alignItems:"center"

}}>

<div
style={{

flex:1

}}>

<p
style={{

color:"#7c3aed"

}}>

PROJECT HUB

</p>

<h1
style={{

fontSize:"90px",

lineHeight:"95px"

}}>

Engineering

<br/>

Projects

<br/>

<span
style={{

background:

"linear-gradient(90deg,#2563eb,#7c3aed)",

WebkitBackgroundClip:"text",

color:"transparent"

}}>

For Every Year

</span>

</h1>

<p
style={{

marginTop:30,

color:"#94a3b8",

fontSize:22

}}>

Mini Projects

•

Source Code

•

Documentation

•

PPT

</p>

<div
style={{

marginTop:40

}}>

<button

onClick={()=>{

window.scrollTo({

top:700,

behavior:"smooth"

})

}}

style={{

padding:"18px 34px",

border:"none",

borderRadius:"16px",

background:

"linear-gradient(90deg,#2563eb,#7c3aed)",

color:"white"

}}

>

View Projects

</button>

</div>

</div>


<div
style={{

flex:1,

display:"flex",

justifyContent:"center"

}}>

<div
style={{

width:520,

height:360,

borderRadius:35,

background:

"linear-gradient(135deg,#2563eb,#7c3aed)",

display:"flex",

justifyContent:"center",

alignItems:"center",

fontSize:140,

boxShadow:

"0 0 120px #4f46e5"

}}

>

💻

</div>

</div>

</section>

)

}

export default Hero