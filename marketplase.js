    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Generate random products
    const productsContainer = document.getElementById('products-container');

    // Generate 8 product cards
    for (let i = 1; i <= 8; i++) {
    const price = (Math.random() * 20 + 5).toFixed(2);
    const stock = Math.floor(Math.random() * 50) + 10;
    
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    productCard.innerHTML = `
        <div class="product-image">
        <div>Product Image</div>
        </div>
        <div class="product-header">
        <h3 class="product-title">Organic Product ${i}</h3>
        <p class="product-subtitle">Fresh from local farms</p>
        </div>
        <div class="product-content">
        <p class="product-price">$${price}</p>
        <p class="product-stock">Available: ${stock} units</p>
        </div>
        <div class="product-footer">
        <button class="btn btn-primary btn-block">Add to Cart</button>
        </div>
    `;
    
    productsContainer.appendChild(productCard);
    }

    // Add event listeners to cart buttons
    const addToCartButtons = document.querySelectorAll('.btn-primary');
    addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Product added to cart!');
    });
    });

    // Cart functionality
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.addEventListener('click', function() {
    alert('Cart functionality will be implemented here');
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        alert(`Searching for: ${searchInput.value}`);
        searchInput.value = '';
    }
    });