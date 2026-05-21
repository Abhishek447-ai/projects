function Contact() {

return (

<section

id="contact"

style={{

background:"#000",

padding:"150px 10%",

color:"white",

textAlign:"center",

position:"relative"

}}

>

<h1

style={{

fontSize:"80px",

marginBottom:"20px",

background:
"linear-gradient(90deg,#2563eb,#9333ea)",

WebkitBackgroundClip:"text",

color:"transparent"

}}

>

Contact

</h1>


<p

style={{

color:"#94a3b8",

fontSize:"22px",

marginBottom:"60px"

}}

>

Need more projects?
<br/>

Want your own custom project?
<br/>

Contact now.

</p>



<div

style={{

display:"flex",

justifyContent:"center",

gap:"30px",

flexWrap:"wrap"

}}

>


{/* WHATSAPP */}

<a

href="https://wa.me/919535554218"

target="_blank"

rel="noreferrer"

style={btn}

>

📱 WhatsApp

</a>



{/* GMAIL */}

<a

href="mailto:abhishekokali100@gmail.com"

style={btn2}

>

📧 Gmail

</a>

</div>


<div

style={{

marginTop:"80px",

color:"#64748b",

fontSize:"18px"

}}

>

<p>Terms And Conditions Apply </p>

</div>


</section>

)

}



const btn={

padding:"22px 50px",

borderRadius:"24px",

textDecoration:"none",

fontSize:"22px",

fontWeight:"600",

color:"white",

background:
"linear-gradient(90deg,#2563eb,#9333ea)",

boxShadow:
"0 0 40px rgba(124,58,237,.5)"

}



const btn2={

padding:"22px 50px",

borderRadius:"24px",

textDecoration:"none",

fontSize:"22px",

fontWeight:"600",

color:"white",

background:"#0f172a",

border:"1px solid #7c3aed"

}



export default Contact