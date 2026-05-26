import { useRef, useEffect, useState } from "react"

export default function Videos() {

const v1 = useRef()
const v2 = useRef()

const [blurScreen, setBlurScreen] = useState(false)

useEffect(() => {

if (v1.current)
v1.current.playbackRate = 2.4

if (v2.current) {

v2.current.playbackRate = 2.4

const handleTime = () => {

const t = v2.current.currentTime

if (t >= 17 && t <= 22) {

setBlurScreen(true)

} else {

setBlurScreen(false)

}

}

v2.current.addEventListener(
"timeupdate",
handleTime
)

return () =>
v2.current?.removeEventListener(
"timeupdate",
handleTime)

}

}, [])

return (

<section className="py-28 px-6">

<div
className="
max-w-7xl
mx-auto

grid
md:grid-cols-2

gap-10
"
>

{/* VIDEO 1 */}

<video
ref={v1}
controls
muted
autoPlay
loop
className="
w-full
rounded-[40px]
shadow-xl
"
>

<source src="/video1.mp4"/>

</video>


{/* VIDEO 2 */}

<div className="relative">

<video
ref={v2}
controls
muted
autoPlay
loop
className="
w-full
rounded-[40px]
shadow-xl
"
>

<source src="/video2.mp4"/>

</video>


{blurScreen && (

<div
className="
absolute
inset-0

backdrop-blur-3xl

bg-white/20

rounded-[40px]

flex
items-center
justify-center

text-white
text-2xl
font-bold
"
>

Content Hidden

</div>

)}

</div>

</div>

</section>

)

}