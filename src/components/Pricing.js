function Pricing(){

const mobile = window.innerWidth < 768

const plans=[

{
name:"Basic",
price:"₹4999"
},

{
name:"Standard",
price:"₹9999"
},

{
name:"Premium",
price:"₹14999"
}

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

fontSize:

mobile

?

"58px"

:

"90px",

marginBottom:"50px"

}}

>

Pricing

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

gap:"30px"

}}

>

{

plans.map(

(x)=>(

<div

key={x.name}

style={{

padding:"50px",

borderRadius:"35px",

background:

"linear-gradient(135deg,#111827,#3b82f6,#8b5cf6)",

boxShadow:

"0 0 60px rgba(99,102,241,.35)",

textAlign:"center"

}}

>

<h2
style={{

fontSize:"40px"

}}

>

{x.name}

</h2>


<br/>


<h1
style={{

fontSize:

mobile

?

"62px"

:

"80px"

}}

>

{x.price}

</h1>


<br/>

<p>

✔ Source Code

<br/>

✔ Report

<br/>

✔ PPT

<br/>

✔ Support

</p>


</div>

)

)

}

</div>


<p
style={{

marginTop:"60px",

textAlign:"center",

color:"#9ca3af",

fontSize:"20px"

}}

>

* Terms & Conditions Apply

<br/>

Pricing may vary based on project complexity,

technology stack,

documentation requirements,

customization and support.

</p>

</section>

)

}

export default Pricing