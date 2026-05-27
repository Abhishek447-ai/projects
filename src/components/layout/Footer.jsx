export default function Footer(){

return(

<footer
className="
px-6
pb-10
"
>

<div
className="
max-w-7xl

mx-auto

border-t

border-black/10

pt-10
"
>

<div
className="
flex

flex-col
md:flex-row

justify-between

gap-10
"
>

{/* LEFT */}

<div>

<h2
className="
text-3xl

font-black

hero-text
"
>

Rising Sun Tech Hub

</h2>

<p
className="
mt-4

text-[var(--muted)]

leading-8
"
>

Innovate · Build · Rise

</p>

</div>


{/* RIGHT */}

<div
className="
text-[var(--muted)]
"
>

© 2026

</div>

</div>

</div>

<a 
  href="/terms" 
  className="text-[var(--muted)] hover:text-[var(--primary)] duration-300 text-sm underline underline-offset-4"
>
  Terms & Conditions
</a>

</footer>

)

}