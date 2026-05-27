export default function Pricing() {
  const plans = [
    ["Basic",       "₹7000",  "₹5999"],
    ["Standard",    "₹10000", "₹8999"],
    ["Outstanding", "₹12000", "₹9999"],
  ]

  return (
    <section
      id="pricing"
      className="py-24 px-6 "
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black hero-text">
          Pricing
        </h2>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {plans.map((x) => (
            <div key={x[0]} className="glass rounded-[40px] p-14">
              <h3 className="text-3xl font-bold">{x[0]}</h3>
              <div className="mt-10">
                <p className="text-3xl line-through text-gray-400">{x[1]}</p>
                <h1 className="text-6xl font-black hero-text">{x[2]}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 text-center text-[var(--muted)] text-sm tracking-wide">
  * Prices may vary based on project requirements and complexity.
</p>
    </section>
  )
}