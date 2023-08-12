/* Reset default margin and padding for all elements */
document.addEventListener("DOMContentLoaded", function() {
  const galleryImages = document.querySelectorAll('.gallery img');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const closeButton = lightbox.querySelector('.close-btn');
  let currentIndex = 0;

  // Function to open the lightbox
  function openLightbox(index) {
    lightboxImg.src = galleryImages[index].getAttribute('src');
    lightbox.classList.add('active');
    currentIndex = index;
  }

  // Function to close the lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
  }

  // Add event listeners to each image to open the lightbox on click
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  // Close lightbox when the close button is clicked
  closeButton.addEventListener('click', closeLightbox);

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Function to display the next image
  function slideToNextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].getAttribute('src');
  }

  // Function to start the slide animation
  function startSlideShow() {
    openLightbox(0); // Open the lightbox with the first image
    setInterval(slideToNextImage, 2000); // Slide to the next image every 2 seconds
  }

  // Start the slide animation when the page loads
  startSlideShow();
});
