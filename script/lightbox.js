const images = document.querySelectorAll('.image');

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');

    const fullSizeImage = document.createElement('img');
    fullSizeImage.src = image.src;
    fullSizeImage.classList.add('lightbox-image');
    lightbox.appendChild(fullSizeImage);

    const leftArrow = document.createElement('div');
    leftArrow.classList.add('arrow', 'left-arrow');
    leftArrow.innerHTML = '&lt;';
    lightbox.appendChild(leftArrow);

    const rightArrow = document.createElement('div');
    rightArrow.classList.add('arrow', 'right-arrow');
    rightArrow.innerHTML = '&gt;';
    lightbox.appendChild(rightArrow);

    let currentIndex = index;

    function showImage(index) {
      fullSizeImage.style.opacity = 0; // Fade out
      setTimeout(() => {
        fullSizeImage.src = images[index].src;
        fullSizeImage.style.opacity = 1; // Fade in
      }, 300); // Delay to allow fade out transition to complete
    }

    leftArrow.addEventListener('click', (event) => {
      event.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    rightArrow.addEventListener('click', (event) => {
      event.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        lightbox.classList.add('fade-out');
        setTimeout(() => {
          document.body.removeChild(lightbox);
        }, 500);
      }
    });

    document.body.appendChild(lightbox);

    setTimeout(() => {
      lightbox.classList.add('fade-in');
    }, 50);
  });
});
