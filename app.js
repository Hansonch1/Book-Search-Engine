// DOM Elements
const searchBooksLink = document.getElementById('search-books');
const loginSignupLink = document.getElementById('login-signup');
const searchSection = document.getElementById('search-section');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

// Event Listeners
searchBooksLink.addEventListener('click', showSearchSection);
loginSignupLink.addEventListener('click', toggleModal);
searchBtn.addEventListener('click', searchBooks);

// Functions
function showSearchSection(event) {
    event.preventDefault();
    searchSection.style.display = 'block';
}

function toggleModal(event) {
    event.preventDefault();
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function searchBooks(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    // Implement book search logic here
}

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Close the modal when the user clicks on the close button
document.getElementById('closeModalBtn').addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
});
