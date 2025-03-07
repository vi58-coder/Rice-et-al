const accordionHeaders = document.querySelectorAll('.accordion-header');
const slider = document.getElementById('slider');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');

    // Close all other accordions
    accordionHeaders.forEach(otherHeader => {
      if (otherHeader !== header) {
        otherHeader.classList.remove('active');
        otherHeader.nextElementSibling.style.display = 'none';
      }
    });

    // Toggle the current accordion
    if (isActive) {
      header.classList.remove('active');
      content.style.display = 'none';
    } else {
      header.classList.add('active');
      content.style.display = 'block';
    }
  });
});

// slider 
let slideIndex = 0;

        function slide(direction) {
            slideIndex += direction;
            const dishWidth = document.querySelector('.dish').offsetWidth + 20; // Include margin
            const maxSlides = document.querySelectorAll('.dish').length - 1;

            if (slideIndex < 0) {
                slideIndex = maxSlides;
            } else if (slideIndex > maxSlides) {
                slideIndex = 0;
            }

            slider.style.transform = `translateX(-${slideIndex * dishWidth}px)`;
        }