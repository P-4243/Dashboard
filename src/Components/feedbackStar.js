// feedbackStar.js

// Define and export the setRating function
export function setRating(rating) {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => star.classList.remove('active'));

  for (let i = 0; i < rating; i++) {
    stars[i].classList.add('active');
  }

  console.log("Star rating set to:", rating);
}
