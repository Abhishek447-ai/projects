import { useState, useEffect } from "react"

export default function Navbar(){

const [scroll,setScroll]=useState(false)

useEffect(()=>{

const handle=()=>{

setScroll(window.scrollY>20)

}

window.addEventListener("scroll",handle)

return()=>window.removeEventListener("scroll",handle)

},[])

return(

<header
className={`

fixed
top-0
left-0
right-0

z-50

duration-300

${
scroll
?
"bg-[#f7f4ef]/90 backdrop-blur-xl shadow-sm"
:
"bg-transparent"
}

`}
>

<div
className="
relative

max-w-[1600px]

mx-auto

h-[82px]
md:h-[100px]

px-5
md:px-10

flex
items-center
justify-between
"
>

{/* LOGO */}

<img
src="/companylogo.jpeg"
alt="Rising Sun Tech Hub"

className="
w-[95px]
sm:w-[120px]
md:w-[155px]

object-contain
"
/>


{/* MENU */}

<div
className="
hidden
md:flex

absolute

left-1/2

-translate-x-1/2

items-center

gap-16
"
>

<a
href="#projects"

className="
text-[20px]

font-medium

hover:text-[var(--primary)]

duration-300
"
>

Projects

</a>


<a
href="#pricing"

className="
text-[20px]

font-medium

hover:text-[var(--primary)]

duration-300
"
>

Pricing

</a>


<a
href="#contact"

className="
text-[20px]

font-medium

hover:text-[var(--primary)]

duration-300
"
>

Contact

</a>

</div>


{/* BUTTON */}

<a

href="#contact"

className="
bg-[var(--primary)]

text-white

px-6
md:px-10

py-3
md:py-5

rounded-full

text-[15px]
md:text-[20px]

font-semibold

shadow-lg

hover:scale-105

duration-300
"

>

Get Started

</a>

</div>

</header>

)

}