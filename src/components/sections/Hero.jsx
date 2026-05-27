import { motion } from "framer-motion"
import sun from "../../assets/sun.png"
import bgSun from "../../assets/bg.png"

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[100svh]
        flex items-center justify-center
        overflow-hidden
        px-5 md:px-6
      "
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff8ef,#f7f4ef)]" />

      {/* BG Sun watermark — inside hero */}
      <img
        src={bgSun}
        alt=""
        aria-hidden="true"
        className="
          absolute
          bottom-[-60px]
          left-1/2 -translate-x-1/2
          w-[85%] sm:w-[60%] md:w-[55%]
          max-w-[750px]
          object-contain
          opacity-20
          pointer-events-none
          select-none
        "
      />

      {/* Decorative blobs */}
      <div className="absolute top-[-150px] left-[-150px] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[120px] md:blur-[180px] opacity-40 bg-[var(--primary)]" />
      <div className="absolute right-[-150px] bottom-[-150px] w-[300px] md:w-[650px] h-[300px] md:h-[650px] rounded-full blur-[120px] md:blur-[200px] bg-[#f2e7d8] opacity-60" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto text-center pt-[72px] md:pt-28 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center">

            <h1
              className="
                font-black
                leading-[0.95]
                tracking-[-1px] md:tracking-[-2px]
                text-[#5e4d3f]
                text-[18vw] sm:text-[13vw] md:text-[8.25rem]
              "
            >
              Rising{" "}
              <span className="inline-flex items-center">
                S
                <img
                  src={sun}
                  alt="sun"
                  className="
                    inline-block
                    w-[11vw] sm:w-[8vw] md:w-[5.9rem]
                    mx-[-2px] md:mx-[-5px]
                    translate-y-[2px]
                    object-contain
                  "
                />
                <span className="ml-[2px]">N</span>
              </span>
            </h1>

            <h2
              className="
                font-black
                text-[#cbb094]
                leading-none
                mt-[-2px] md:mt-[-8px]
                text-[19vw] sm:text-[14vw] md:text-[8.5rem]
              "
            >
              Tech Hub
            </h2>
          </div>

          <p className="mt-8 md:mt-10 uppercase tracking-[4px] sm:tracking-[10px] text-[11px] sm:text-sm md:text-lg text-[var(--muted)]">
            Innovate · Build · Rise
          </p>

          <p className="mt-6 md:mt-8 max-w-[300px] sm:max-w-[550px] md:max-w-4xl mx-auto text-[15px] sm:text-lg md:text-2xl leading-7 md:leading-10 text-[var(--muted)]">
            Building elegant digital products, startup platforms and modern
            engineering experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}