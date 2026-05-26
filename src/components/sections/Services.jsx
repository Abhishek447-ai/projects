export default function Services(){

const services=[

"Website Development",

"UI / UX Design",

"Startup Solutions",

"Engineering Projects"

]

return(

<section
className="
py-24
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

Services

</p>


<h2
className="
mt-6

text-center

text-4xl
md:text-6xl

font-black

hero-text
"
>

What We Build

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

services.map((x)=>(

<div

key={x}

className="

glass

rounded-[40px]

p-10

hover:translate-y-[-8px]

duration-300
"

>

<h3
className="
text-3xl

font-bold
"
>

{x}

</h3>


<p
className="
mt-4

text-[var(--muted)]

leading-8
"
>

Premium solutions designed
for startups and modern businesses.

</p>

</div>

))

}

</div>

</div>

</section>

)

}