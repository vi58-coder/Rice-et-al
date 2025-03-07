const numberInput = document.getElementById('number');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const likeButton = document.getElementById('likeButton');
const accordionHeaders = document.querySelectorAll('.accordion-header');


let quantity = 1;

minusButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        numberInput.value = quantity;
    }
});

plusButton.addEventListener('click', () => {
    quantity++;
    numberInput.value = quantity;
});



likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked'); // Toggle the 'liked' class
});

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