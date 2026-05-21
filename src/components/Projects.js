function Projects(){

const projects=[

"AI Resume Screening",

"Student Performance Prediction",

"Online Voting System",

"Library Management",

"Attendance Management",

"Weather Prediction",

"Expense Tracker",

"College Chatbot",

"Placement Management"

]

return(

<section
style={{

padding:"80px 8%",

color:"white",

minHeight:"100vh"

}}

>

<h1
style={{

fontSize:"60px",

textAlign:"center",

marginBottom:"60px",

background:

"linear-gradient(90deg,#2563eb,#8b5cf6)",

WebkitBackgroundClip:"text",

color:"transparent"

}}

>

Featured Projects

</h1>



<div
style={{

display:"grid",

gridTemplateColumns:

window.innerWidth<768

?

"1fr"

:

"repeat(3,1fr)",

gap:"30px"

}}

>

{

projects.map(

(x)=>(

<div

key={x}

style={{

background:

"rgba(255,255,255,.04)",

backdropFilter:

"blur(20px)",

padding:"40px",

borderRadius:"25px",

border:

"1px solid rgba(255,255,255,.08)",

boxShadow:

"0 0 40px rgba(99,102,241,.18)",

fontSize:"22px",

textAlign:"center"

}}

>

🚀

<br/><br/>

{x}

</div>

)

)

}

</div>


</section>

)

}

export default Projects