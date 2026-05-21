import { Link } from "react-router-dom";

function Navbar(){

const mobile = window.innerWidth < 768;

return(

<nav
style={{

display:"flex",

flexDirection:

mobile

?

"column"

:

"row",

justifyContent:"space-between",

alignItems:"center",

padding:

mobile

?

"20px"

:

"25px 8%",

gap:

mobile

?

"20px"

:

"0",

position:"sticky",

top:"0",

zIndex:"999",

background:

"rgba(10,15,40,.45)",

backdropFilter:"blur(20px)",

borderBottom:

"1px solid rgba(255,255,255,.08)"

}}

>

<h1
style={{

fontSize:

mobile

?

"42px"

:

"58px",

background:

"linear-gradient(90deg,#2563eb,#8b5cf6)",

WebkitBackgroundClip:"text",

color:"transparent",

fontWeight:"900"

}}

>

ProjectHub

</h1>


<div
style={{

display:"flex",

flexWrap:"wrap",

justifyContent:"center",

gap:"14px"

}}

>

{

[

["/","Home"],

["/projects","Projects"],

["/pricing","Pricing"]

].map(

([path,name])=>(

<Link

key={name}

to={path}

style={{

padding:

mobile

?

"12px 18px"

:

"14px 24px",

borderRadius:"16px",

background:

"rgba(255,255,255,.05)",

color:"white",

boxShadow:

"0 0 25px rgba(99,102,241,.25)"

}}

>

{name}

</Link>

)

)

}



<Link to="/contact">

<button
style={{

padding:

mobile

?

"12px 20px"

:

"16px 32px",

border:"none",

borderRadius:"18px",

background:

"linear-gradient(90deg,#2563eb,#8b5cf6)",

color:"white",

boxShadow:

"0 0 40px rgba(99,102,241,.6)"

}}

>

✨ Contact

</button>

</Link>

</div>

</nav>

)

}

export default Navbar