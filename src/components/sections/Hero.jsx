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
        px-6
      "
    >
      {/* BACKGROUND */}
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
          w-[600px]
          h-[600px]
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
          w-[650px]
          h-[650px]
          rounded-full
          blur-[200px]
          bg-[#f2e7d8]
          opacity-60
        "
      />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          text-center
          pt-28
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1
          }}
        >
          {/* TITLE */}
          <div className="flex flex-col items-center justify-center w-full">
            <h1
              className="
                font-black
                text-[48px]
                sm:text-[80px]
                md:text-[115px]
                lg:text-[135px]
                leading-none
                tracking-[-3px]
                sm:tracking-[-6px]
                text-[#5e4d3f]
                flex
                flex-wrap
                justify-center
                items-center
                gap-x-4
                sm:gap-x-6
              "
            >
              <span>Rising</span>

              <span className="inline-flex items-center">
                <span>S</span>
                <img
                  src={sun}
                  alt="sun"
                  className="
                    inline-block
                    w-[25px]
                    sm:w-[54px]
                    md:w-[78px]
                    lg:w-[92px]
                    mx-[-2px]
                    sm:mx-[-4px]
                    translate-y-[-2px]
                    sm:translate-y-[-4px]
                    object-contain
                  "
                />
                <span>n</span>
              </span>

              <span className="text-[#cbb094]">
                Tech Hub
              </span>
            </h1>
          </div>

          {/* TAGLINE */}
          <p
            className="
              mt-14
              uppercase
              tracking-[6px]
              sm:tracking-[10px]
              text-xs
              md:text-lg
              text-[var(--muted)]
              opacity-80
            "
          >
            Innovate · Build · Rise
          </p>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-4xl
              mx-auto
              text-base
              sm:text-lg
              md:text-2xl
              leading-8
              md:leading-10
              text-[var(--muted)]
              opacity-90
            "
          >
            Building elegant digital products, startup platforms and modern
            engineering experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
