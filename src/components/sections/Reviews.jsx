import { useState, useEffect } from "react";

export default function Reviews() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [reviews, setReviews] = useState([]);
  const fetchReviews = async () => {
  try {
    const res = await fetch("https://business-backend-dfxj.onrender.com/api/reviews");
    const data = await res.json();
    setReviews(data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchReviews();
}, []);

  const handleSubmit = async () => {
  if (!name || !review || rating === 0) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch("https://business-backend-dfxj.onrender.com/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        rating,
        review,
      }),
    });

    if (res.ok) {
      fetchReviews();

      setName("");
      setReview("");
      setRating(0);
    }
  } catch (error) {
    console.error(error);
  }
};
const displayedReviews = showAll
  ? reviews
  : reviews.slice(0, 2);
  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          Reviews
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl p-4 mb-6"
          />

          <div className="flex gap-2 mb-6 text-4xl">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
              >
                {star <= rating ? "⭐" : "☆"}
              </button>
            ))}
          </div>

          <textarea
            rows="5"
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border rounded-xl p-4 mb-6"
          />

          <button
            onClick={handleSubmit}
            className="bg-[var(--primary)] text-white px-8 py-4 rounded-2xl font-semibold"
          >
            Submit Review
          </button>

          <div className="mt-12 space-y-6">
            {displayedReviews.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-6"
              >
                <div className="text-2xl mb-2">
                  {"⭐".repeat(item.rating)}
                </div>

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-600 mt-3 text-lg">
                  {item.review}
                </p>
              </div>
            ))}
          </div>
          {reviews.length > 2 && (
  <div className="text-center mt-6">
    <button
      onClick={() => setShowAll(!showAll)}
      className="bg-[var(--primary)] text-white px-6 py-3 rounded-xl"
    >
      {showAll ? "Show Less" : "View More Reviews"}
    </button>
  </div>
)}
        </div>
      </div>
    </section>
  );
}