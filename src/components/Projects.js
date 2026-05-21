function Projects() {

const mobile = window.innerWidth < 768;

const projects = [

"AI Resume Screening",

"Student Performance Prediction",

"Online Voting System",

"Library Management",

"Attendance Management",

"Weather Prediction",

"Expense Tracker",

"College Chatbot",

"Placement Management"

];

return (

<section
style={{

padding:"80px 8%",

color:"white",

minHeight:"100vh"

}}

>

<h1
style={{

fontSize:

mobile

?

"58px"

:

"90px",

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

mobile

?

"1fr"

:

"repeat(3,1fr)",

gap:"35px"

}}

>

{

projects.map(

(project)=>(

<div

key={project}

style={{

background:

"rgba(255,255,255,.04)",

padding:"50px",

borderRadius:"35px",

backdropFilter:"blur(25px)",

boxShadow:

"0 0 60px rgba(99,102,241,.2)",

textAlign:"center"

}}

>

<div
style={{

fontSize:"60px"

}}

>

🚀

</div>

<br/>

<h2
style={{

fontSize:"26px"

}}

>

{project}

</h2>

</div>

)

)

}



<div
style={{

background:

"linear-gradient(135deg,#2563eb,#8b5cf6)",

padding:"50px",

borderRadius:"35px",

textAlign:"center",

boxShadow:

"0 0 90px rgba(99,102,241,.55)"

}}

>

<h1
style={{

fontSize:"80px"

}}

>

+

</h1>



<h2
style={{

fontSize:"36px"

}}

>

Many More Projects

</h2>


<br/>


<p
style={{

lineHeight:"2",

fontSize:"18px"

}}

>

Web Development

<br/>

Java

<br/>

Python

<br/>

AI / ML

<br/>

Cloud

<br/>

IoT

<br/>

Android

<br/>

Cyber Security

<br/>

And More...

</p>


<br/>


<button

onClick={()=>{

window.location.href="/contact"

}}

style={{

padding:"18px 35px",

border:"none",

borderRadius:"18px",

background:"white",

fontSize:"18px",

cursor:"pointer",

boxShadow:

"0 0 40px rgba(255,255,255,.35)"

}}

>

For More Projects

<br/>

Contact Now →

</button>


</div>


</div>


</section>

)

}

export default Projects