function Contact(){

return(

<div
style={{

padding:"100px",

textAlign:"center",

color:"white"

}}>

<h1>

Contact Us

</h1>

<br/>

<p>

Click below for communication

</p>

<br/>

<a

href="mailto:risingsunprojects1@gmail.com"

style={{

display:"block",

marginBottom:"20px",

color:"#60a5fa"

}}

>

📧 Email Us

</a>



<button

onClick={()=>{

window.open(

"https://wa.me/919535554218"

)

}}

style={{

padding:"18px",

background:"#25D366",

border:"none",

borderRadius:"15px",

color:"white"

}}

>

🟢 Chat on WhatsApp

</button>

</div>

)

}

export default Contact