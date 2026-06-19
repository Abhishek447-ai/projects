export default function Products() {
  return (
    <section
      id="products"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          Products
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-3xl font-bold mb-4">
            NSS Report Generator
          </h3>

          <p className="text-lg text-gray-600 mb-6">
            Generate complete NSS reports instantly with AI-powered
            document generation for VTU students.
          </p>

          <button
  onClick={() =>
    window.open(
      "https://report-business-six.vercel.app/",
      "_blank"
    )
  }
  className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white"
>
  Open Product
</button>
        </div>
      </div>
    </section>
  )
}