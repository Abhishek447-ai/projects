import { motion } from "framer-motion"
import sun from "../../assets/sun.png"

export default function Hero() {

return (

<section
className="
relative

min-h-screen

flex
items-center
justify-center

overflow-hidden

px-5
md:px-6
"
>

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,#fff8ef,#f7f4ef)]
"
/>

<div
className="
absolute
top-[-200px]
left-[-200px]

w-[450px]
md:w-[600px]

h-[450px]
md:h-[600px]

rounded-full

blur-[180px]

opacity-40

bg-[var(--primary)]
"
/>

<div
className="
absolute
right-[-250px]
bottom-[-250px]

w-[450px]
md:w-[650px]

h-[450px]
md:h-[650px]

rounded-full

blur-[200px]

bg-[#f2e7d8]

opacity-60
"
/>


<div
className="
relative

w-full

max-w-7xl

mx-auto

text-center

pt-[140px]
md:pt-28
"
>

<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}
>

<div
className="
flex
flex-col
items-center
"
>

<h1
className="
font-black

text-[34px]
sm:text-[58px]
md:text-[112px]
lg:text-[132px]

leading-[0.95]

tracking-[-2px]

text-[#5e4d3f]
"
>

Rising{" "}

<span
className="
inline-flex
items-center
"
>

S

<img
src={sun}
alt="sun"

className="
inline-block

w-[28px]
sm:w-[42px]
md:w-[80px]
lg:w-[95px]

mx-[-5px]

translate-y-[2px]

object-contain
"
/>

<span className="ml-[2px]">

N

</span>

</span>

</h1>


<h2
className="
font-black

text-[#cbb094]

leading-none

mt-[-4px]
md:mt-[-8px]

text-[40px]
sm:text-[60px]
md:text-[118px]
lg:text-[136px]
"
>

Tech Hub

</h2>

</div>


<p
className="
mt-10

uppercase

tracking-[5px]
sm:tracking-[10px]

text-[10px]
sm:text-sm
md:text-lg

text-[var(--muted)]
"
>

Innovate · Build · Rise

</p>


<p
className="
mt-8

max-w-[320px]
sm:max-w-[550px]
md:max-w-4xl

mx-auto

text-[15px]
sm:text-lg
md:text-2xl

leading-8
md:leading-10

text-[var(--muted)]
"
>

Building elegant digital products,
startup platforms and modern
engineering experiences.

</p>

</motion.div>

</div>

</section>

)

}