function addToCart(dealId) {
    alert(`✅ Added ${dealId} to Cart`);
  }
  
  function addToWishlist(dealId) {
    alert(`💖 Added ${dealId} to Wishlist`);
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-bar');
    const locationDropdown = document.querySelector('.location-dropdown');
    const searchButton = document.querySelector('.search-button');
  
    searchButton.addEventListener('click', () => {
      const searchQuery = searchBar.value.trim();
      const selectedLocation = locationDropdown.value;
      if (searchQuery === '') {
        alert('Please enter a search query.');
      } else {
        alert(`🔍 Searching for '${searchQuery}' in ${selectedLocation}`);
      }
    });
  });
  