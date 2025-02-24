const numberInput = document.getElementById('number');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const likeButton = document.getElementById('likeButton');


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