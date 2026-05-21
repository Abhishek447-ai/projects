function Projects(){

const projects=[

"Student Performance Prediction",

"AI Resume Screening",

"College Enquiry Chatbot",

"Attendance Management",

"Expense Tracker",

"Online Voting System",

"Library Management",

"Weather Prediction",

"Placement Management"

]

return(

<section
id="projects"

style={{

padding:"100px",

color:"white"

}}>

<h1
style={{

fontSize:"60px",

marginBottom:"50px"

}}>

Featured Projects

</h1>


<div
style={{

display:"grid",

gridTemplateColumns:

"repeat(3,1fr)",

gap:"25px"

}}>

{

projects.map(

(x)=>(

<div

key={x}

style={{

background:

"linear-gradient(135deg,#111827,#1e293b)",

padding:"35px",

borderRadius:"25px",

fontSize:"22px",

transition:"0.3s",

cursor:"pointer"

}}

>

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