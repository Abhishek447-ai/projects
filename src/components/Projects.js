function Projects() {

const projects = [

{
name:"AI Resume Screening",
desc:
"Automatically filters resumes using AI and ranks candidates."
},

{
name:"Student Performance Prediction",
desc:
"Predicts student results using machine learning."
},

{
name:"College Chatbot",
desc:
"Smart assistant for college queries and support."
},

{
name:"Expense Tracker",
desc:
"Track income, expenses and monthly reports."
},

{
name:"Placement Management",
desc:
"Manage placements and student records."
},

{
name:"Weather Prediction",
desc:
"Forecast weather using historical data."
}

]

return (

<section

id="projects"

style={{

background:"#020617",

padding:"140px 0",

minHeight:"100vh"

}}

>

<h1

style={{

textAlign:"center",

fontSize:"90px",

marginBottom:"100px",

background:
"linear-gradient(90deg,#2563eb,#9333ea)",

WebkitBackgroundClip:"text",

color:"transparent"

}}

>

Featured Projects

</h1>


<div

style={{

display:"flex",

flexDirection:"column",

gap:"40px",

maxWidth:"900px",

margin:"auto"

}}

>

{

projects.map((p,index)=>(

<div

key={index}

style={{

background:
"linear-gradient(180deg,#071028,#0b1435)",

padding:"50px",

borderRadius:"35px",

border:
"1px solid rgba(255,255,255,.08)",

boxShadow:
"0 0 80px rgba(37,99,235,.12)"

}}

>

<div

style={{

fontSize:"50px",

marginBottom:"10px"

}}

>

🚀

</div>


<h2

style={{

color:"white",

fontSize:"36px",

marginBottom:"20px"

}}

>

{p.name}

</h2>


<p

style={{

color:"#94a3b8",

fontSize:"20px",

lineHeight:"1.8"

}}

>

{p.desc}

</p>



<div

style={{

marginTop:"40px"

}}

>

<button

onClick={()=>{

alert(

`${p.name}

This project includes:

• Source Code

• PPT

• Documentation


For more information or your own project requirements contact owner.`

)

}}

style={{

padding:"18px 40px",

border:"none",

borderRadius:"20px",

background:
"linear-gradient(90deg,#2563eb,#9333ea)",

color:"white",

fontSize:"18px",

cursor:"pointer"

}}

>

View

</button>

</div>

</div>

))

}

</div>



<div

style={{

textAlign:"center",

marginTop:"120px"

}}

>

<h2

style={{

color:"white",

fontSize:"50px"

}}

>

Need More Projects?

</h2>


<p

style={{

color:"#94a3b8",

fontSize:"22px",

marginTop:"20px"

}}

>

For more information or your own project requirements contact owner.

</p>

</div>


</section>

)

}

export default Projects