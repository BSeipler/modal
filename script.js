// Get modal element
const modal = document.querySelector('#simpleModal');
// Get open modal button
const modalBtn = document.querySelector('#modalBtn');
// Get close button
const closeBtn = document.querySelector('.closeBtn');

// Function to opan modal
const openModal = () => {
    modal.style.display = 'block';
}

// Function to close modal
const closeModal = () => {
    modal.style.display = 'none';
}

// Function to close modal if outside click
const clickOutside = e => {
    if (e.target == modal) {
    modal.style.display = 'none';
    }
}

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', clickOutside);


