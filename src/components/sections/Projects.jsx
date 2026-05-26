export default function Projects(){

const projects=[

{
title:"Startup Websites",
desc:
"Modern responsive websites with premium UI."
},

{
title:"Business Platforms",
desc:
"Scalable platforms for growing companies."
},

{
title:"UI / UX Systems",
desc:
"Beautiful interfaces focused on user experience."
},

{
title:"Custom Solutions",
desc:
"Tailored digital solutions for business needs."
}

]

return(

<section
id="projects"

className="
py-28
px-6
"
>

<div
className="
max-w-7xl
mx-auto
"
>

<p
className="
text-center

uppercase

tracking-[10px]

text-[var(--muted)]
"
>

Projects

</p>


<h2
className="
mt-6

text-center

text-5xl
md:text-7xl

font-black

hero-text
"
>

Featured Work

</h2>


<div
className="
mt-20

grid

md:grid-cols-2

gap-8
"
>

{

projects.map((p)=>(

<div

key={p.title}

className="
glass

rounded-[40px]

p-10

hover:-translate-y-2

duration-300
"

>

<h3
className="
text-3xl

font-bold
"
>

{p.title}

</h3>


<p
className="
mt-5

leading-8

text-[var(--muted)]
"
>

{p.desc}

</p>


<button
className="
mt-8

text-[var(--primary)]

font-semibold
"
>

View →

</button>

</div>

))

}

</div>

</div>

</section>

)

}