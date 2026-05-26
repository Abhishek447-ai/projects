import { motion } from "framer-motion"
import sun from "../../assets/sun.png"
import risingBg from "../../assets/sun.png" // 👈 replace with your actual rising sun image path e.g. "../../assets/rising-sun.png"

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
      {/* ── Base gradient background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff8ef,#f7f4ef)]" />

      {/* ── Rising sun background image (low opacity) ── */}
      <img
        src={risingBg}
        alt=""
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-1/2 -translate-x-1/2
          w-[90%] md:w-[70%] lg:w-[55%]
          max-w-[900px]
          object-contain
          opacity-[0.08]
          pointer-events-none
          select-none
        "
      />

      {/* ── Decorative blobs ── */}
      <div
        className="
          absolute top-[-150px] left-[-150px]
          w-[300px] md:w-[600px]
          h-[300px] md:h-[600px]
          rounded-full blur-[120px] md:blur-[180px]
          opacity-40 bg-[var(--primary)]
        "
      />
      <div
        className="
          absolute right-[-150px] bottom-[-150px]
          w-[300px] md:w-[650px]
          h-[300px] md:h-[650px]
          rounded-full blur-[120px] md:blur-[200px]
          bg-[#f2e7d8] opacity-60
        "
      />

      {/* ── Content ── */}
      <div
        className="
          relative w-full max-w-7xl mx-auto
          text-center
          pt-[72px] md:pt-28
          px-4
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center">

            {/* "Rising S☀N" */}
            <h1
              className="
                font-black
                text-[clamp(2.4rem,10vw,8.25rem)]
                leading-[0.95]
                tracking-[-1px] md:tracking-[-2px]
                text-[#5e4d3f]
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
                    w-[clamp(1.6rem,6vw,5.9rem)]
                    mx-[-3px] md:mx-[-5px]
                    translate-y-[2px]
                    object-contain
                  "
                />
                <span className="ml-[2px]">N</span>
              </span>
            </h1>

            {/* "Tech Hub" */}
            <h2
              className="
                font-black
                text-[#cbb094]
                leading-none
                mt-[-2px] md:mt-[-8px]
                text-[clamp(2.8rem,11vw,8.5rem)]
              "
            >
              Tech Hub
            </h2>
          </div>

          {/* Tagline */}
          <p
            className="
              mt-8 md:mt-10
              uppercase
              tracking-[4px] sm:tracking-[10px]
              text-[10px] sm:text-sm md:text-lg
              text-[var(--muted)]
            "
          >
            Innovate · Build · Rise
          </p>

          {/* Description */}
          <p
            className="
              mt-6 md:mt-8
              max-w-[290px] sm:max-w-[550px] md:max-w-4xl
              mx-auto
              text-[14px] sm:text-lg md:text-2xl
              leading-7 md:leading-10
              text-[var(--muted)]
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