import { useState } from "react";

import { useNavigate } from "react-router-dom";
export default function Projects() {
  
  const navigate = useNavigate();
  const projects = [
    { title: "Startup Websites",   desc: "Modern responsive websites with premium UI." },
    { title: "Business Platforms", desc: "Scalable platforms for growing companies." },
    { title: "UI / UX Systems",    desc: "Beautiful interfaces focused on user experience." },
    { title: "Custom Solutions",   desc: "Tailored digital solutions for business needs." },
  ]

  return (
    <section
      id="projects"
      className="py-28 px-6 "
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-center uppercase tracking-[10px] text-[var(--muted)]">
          Projects
        </p>

        <h2 className="mt-6 text-center text-5xl md:text-7xl font-black hero-text">
          Featured Work
        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass rounded-[40px] p-10 hover:-translate-y-2 duration-300"
            >
              <h3 className="text-3xl font-bold">{p.title}</h3>
              <p className="mt-5 leading-8 text-[var(--muted)]">{p.desc}</p>
              <button className="mt-8 text-[var(--primary)] font-semibold"></button>
            </div>
          ))}
        </div>
        <div className="mt-16">
  <div className="glass rounded-[40px] p-12 text-center hover:-translate-y-2 duration-300">
    <h3 className="text-4xl font-bold">
      Build Your Project
    </h3>

    <p className="mt-6 text-lg leading-8 text-[var(--muted)] max-w-3xl mx-auto">
      Choose your technology, share your requirements, and we'll take care of the rest.
    </p>

   <button
  onClick={() => navigate("/register-project")}
  className="mt-10 px-8 py-4 rounded-full bg-[var(--primary)] text-white font-semibold hover:scale-105 transition"
>
  🚀 Register Your Project
</button>
  </div>
</div>
      </div>
    
    </section>
  )
}