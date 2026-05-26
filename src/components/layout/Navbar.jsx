import { useState, useEffect } from "react"

export default function Navbar() {
  const [scroll, setScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handle = () => setScroll(window.scrollY > 20)
    window.addEventListener("scroll", handle)
    return () => window.removeEventListener("scroll", handle)
  }, [])

  // Close menu on scroll
  useEffect(() => {
    if (scroll) setMenuOpen(false)
  }, [scroll])

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#pricing",  label: "Pricing"  },
    { href: "#contact",  label: "Contact"  },
  ]

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 duration-300
        ${scroll ? "bg-[#f7f4ef]/90 backdrop-blur-xl shadow-sm" : "bg-transparent"}
      `}
    >
      {/* ── Main bar ── */}
      <div
        className="
          relative max-w-[1600px] mx-auto
          h-[72px] md:h-[100px]
          px-5 md:px-10
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <img
          src="/companylogo.jpeg"
          alt="Rising Sun Tech Hub"
          className="w-[85px] sm:w-[110px] md:w-[155px] object-contain"
        />

        {/* DESKTOP MENU — centred */}
        <nav
          className="
            hidden md:flex
            absolute left-1/2 -translate-x-1/2
            items-center gap-16
          "
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-[20px] font-medium hover:text-[var(--primary)] duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* CTA button */}
          <a
            href="#contact"
            className="
              bg-[var(--primary)] text-white
              px-5 md:px-10
              py-2.5 md:py-5
              rounded-full
              text-[14px] md:text-[20px]
              font-semibold shadow-lg
              hover:scale-105 duration-300
            "
          >
            Get Started
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="
              md:hidden
              flex flex-col justify-center items-center
              w-10 h-10 gap-[6px]
              rounded-full
              focus:outline-none
            "
          >
            <span
              className={`block w-6 h-[2px] bg-[#5e4d3f] rounded transition-all duration-300
                ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#5e4d3f] rounded transition-all duration-300
                ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#5e4d3f] rounded transition-all duration-300
                ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <div
        className={`
          md:hidden
          overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
          bg-[#f7f4ef]/95 backdrop-blur-xl
          border-t border-[#e8ddd3]
        `}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="
                text-[18px] font-medium text-[#5e4d3f]
                py-3 border-b border-[#e8ddd3] last:border-0
                hover:text-[var(--primary)] duration-200
              "
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}