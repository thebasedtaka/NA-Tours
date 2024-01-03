import { editReview } from './review';
/**
 * Initializes the review card functionality.
 * @param {Array} editButton - Array of edit buttons.
 * @param {Array} ratingStars - Array of rating stars.
 * @param {HTMLElement} reviewsCard - The reviews card element.
 * @param {HTMLElement} reviewText - The review text element.
 * @param {HTMLInputElement} textBox - The text input element.
 */
export function reviewCardInit(editButton, ratingStars, reviewText, textBox) {
  let reviewId, reviewBody;
  let rating;
  let hoveredStar;
  let edit = false;

  /**
   * Updates the star classes based on the hovered star.
   */
  function updateStarClasses() {
    ratingStars.forEach((star, index) => {
      star.classList.toggle('hovered', index < hoveredStar);
    });
  }

  /**
   * Handles the mouse enter event on the rating stars.
   */
  function handleMouseEnter(e) {
    // Get the index of the hovered star
    if (!edit) return;
    const index = Array.from(ratingStars).indexOf(e.target);
    hoveredStar = index + 1;
    updateStarClasses();
  }

  /**
   * Handles the mouse exit event on the rating stars.
   */
  function handleMouseExit() {
    hoveredStar = null;
    updateStarClasses();
  }

  /**
   * Handles the click event on the rating stars.
   */
  function handleClick(e) {
    // selects the clicked star and if there is an image, it reroutes to the parent
    const clickedStar =
      e.target.nodeName === 'use' ? e.target.parentNode : e.target;
    rating = +clickedStar.dataset.starIndex + 1;
    // removes the hover effect
    hoveredStar = rating;
    updateStarClasses();
    e.target.removeEventListener('mouseover', handleMouseEnter);
    e.target.removeEventListener('mouseout', handleMouseExit);
    e.target.removeEventListener('click', handleClick);
  }

  // Add event listeners to the rating stars
  ratingStars.forEach((star) => {
    star.addEventListener('mouseover', handleMouseEnter);
    star.addEventListener('mouseout', handleMouseExit);
    star.addEventListener('click', handleClick);
  });

  // Add event listeners to the edit buttons
  editButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (edit) {
        // Code for the second button press functionality
        reviewId = btn.dataset.reviewId;
        reviewBody =
          e.target.parentNode.parentNode.querySelector('.form__input');
        edit = false;
        editReview(reviewId, reviewBody.value, rating);
        textBox.replaceWith(reviewText);
      } else {
        // Code for the first button press functionality
        edit = true;
        e.target.textContent = 'Update Review';
        textBox.classList.add('form__input');
        textBox.value = reviewText.textContent;
        // Replace the text node with the input node
        reviewText.replaceWith(textBox);
      }
    });
  });
}
