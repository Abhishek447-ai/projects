function Pricing(){

const plans=[

{
name:"Basic",
price:"₹4999",
features:[
"Mini Project",
"Source Code",
"PPT",
"Documentation"
]
},

{
name:"Standard",
price:"₹8999",
features:[
"Final Year Project",
"Source Code",
"PPT",
"Documentation"
]
},

{
name:"Premium",
price:"₹14999",
features:[
"Custom Project",
"Full Support",
"Documentation",
"Deployment"
]
}

]

return(

<section id="pricing"
style={{
padding:"120px 10%",
background:"#000814",
color:"white"
}}
>

<h1
style={{
fontSize:"80px",
textAlign:"center",
marginBottom:"80px"
}}
>

Pricing

</h1>



<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(320px,1fr))",
gap:"40px"
}}
>

{

plans.map((plan)=>(

<div
key={plan.name}
style={{
padding:"50px",

borderRadius:"35px",

background:
"linear-gradient(145deg,#111827,#1e1b4b)",

border:
"1px solid rgba(255,255,255,.08)",

textAlign:"center",

boxShadow:
"0 0 80px rgba(99,102,241,.15)"
}}
>

<h2>

{plan.name}

</h2>

<br/>

<h1
style={{
fontSize:"70px",

background:
"linear-gradient(90deg,#2563eb,#9333ea)",

WebkitBackgroundClip:"text",

color:"transparent"
}}
>

{plan.price}

</h1>

<br/>

{

plan.features.map(

(f)=>(

<p
key={f}
style={{
color:"#94a3b8"
}}
>

✓ {f}

</p>

)

)

}

<br/>

<button

onClick={()=>{

window.open(
"https://wa.me/919535554218"
)

}}

style={{
marginTop:"20px",

padding:"18px 40px",

border:"none",

borderRadius:"18px",

background:
"linear-gradient(90deg,#2563eb,#9333ea)",

color:"white"
}}
>

Get Project

</button>

</div>

))

}

</div>



<p
style={{
textAlign:"center",
marginTop:"70px",
color:"#64748b"
}}
>

Pricing may vary depending on complexity

</p>

</section>

)

}

export default Pricing