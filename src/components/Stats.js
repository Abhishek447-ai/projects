function Stats(){

const s=[

["100+","Projects"],

["50+","Students"],

["24/7","Support"],

["10+","Domains"]

]

return(

<section>

<div
style={{

display:"grid",

gridTemplateColumns:

"repeat(auto-fit,minmax(250px,1fr))",

gap:25

}}>

{

s.map(

x=>

<div
key={x[0]}

style={{

background:

"rgba(255,255,255,.05)",

padding:50,

borderRadius:30,

backdropFilter:"blur(20px)",

textAlign:"center"

}}>

<h1
style={{

fontSize:55,

color:"#7c3aed"

}}>

{x[0]}

</h1>

<p>

{x[1]}

</p>

</div>

)

}

</div>

</section>

)

}

export default Stats