import React, { useEffect, useState } from 'react';
import reviews from '../data/reviews';

const HomeMainSection = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const shuffledReviews = [...reviews].sort(() => 0.5 - Math.random());
    setSelectedReviews(shuffledReviews.slice(0, 2));
  }, []);

  return (
    <main>
      <section>
        <h2>About Us</h2>
        <p>Welcome to our online store! We are passionate about providing high-quality products.</p>
        <button onClick={() => window.location.href='/products'}>Shop Now</button>
      </section>
      <section>
        <h3>Customer Reviews</h3>
        {selectedReviews.map((review, index) => (
          <div key={index}>
            <h4>{review.customerName}</h4>
            <p>{review.reviewContent}</p>
            <p>Rating: {"★".repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeMainSection;