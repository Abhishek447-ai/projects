import { useState } from "react";

export default function RegisterProject() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    projectTitle: "",
    language: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
   const res = await fetch("https://business-backend-dfxj.onrender.com/api/register-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Project Registered Successfully!");

      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        projectTitle: "",
        language: "",
        
      });
    } else {
      alert(data.message || "Something went wrong");
    }

  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};

  return (
    <section className="min-h-screen bg-[var(--background)] py-24 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center">
          Register Your Project
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Fill in the details below and our team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <input
            type="text"
            name="projectTitle"
            placeholder="Project Title"
            value={formData.projectTitle}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          >
            <option value="">Select Programming Language</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="MERN Stack">MERN Stack</option>
            <option value="React.js">React.js</option>
            <option value="Node.js">Node.js</option>
            <option value="Spring Boot">Spring Boot</option>
            <option value="Android">Android</option>
            <option value="Flutter">Flutter</option>
          </select>

          

          <button
            type="submit"
            className="w-full bg-[var(--primary)] text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Submit Request
          </button>

        </form>

      </div>
    </section>
  );
}