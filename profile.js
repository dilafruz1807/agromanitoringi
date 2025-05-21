    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Tab functionality
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        // Remove active class from all triggers and contents
        tabTriggers.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked trigger and corresponding content
        trigger.classList.add('active');
        const tabId = trigger.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
    });

    // Generate seller products
    const sellerProducts = document.getElementById('seller-products');

    // Generate 4 product items
    for (let i = 1; i <= 4; i++) {
    const price = (Math.random() * 20 + 5).toFixed(2);
    const stock = Math.floor(Math.random() * 50) + 10;
    
    const productItem = document.createElement('div');
    productItem.className = 'product-list-item';
    
    productItem.innerHTML = `
        <div class="product-list-image">
        <div>Image</div>
        </div>
        <div class="product-list-details">
        <h4 class="product-list-title">Organic Product ${i}</h4>
        <p class="product-list-stock">Stock: ${stock} units</p>
        <p class="product-list-price">$${price}</p>
        <div class="product-list-actions">
            <button class="btn btn-sm btn-outline btn-edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            Edit
            </button>
            <button class="btn btn-sm btn-outline btn-delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            Delete
            </button>
        </div>
        </div>
    `;
    
    sellerProducts.appendChild(productItem);
    }

    // Generate orders table
    const ordersTableBody = document.getElementById('orders-table-body');

    // Generate 5 order rows
    for (let i = 1; i <= 5; i++) {
    const total = (Math.random() * 100 + 20).toFixed(2);
    const items = Math.floor(Math.random() * 3) + 1;
    
    let status, statusClass;
    if (i % 3 === 0) {
        status = 'Pending';
        statusClass = 'status-pending';
    } else if (i % 3 === 1) {
        status = 'Completed';
        statusClass = 'status-completed';
    } else {
        status = 'Processing';
        statusClass = 'status-processing';
    }
    
    const orderRow = document.createElement('tr');
    
    orderRow.innerHTML = `
        <td>ORD-${1000 + i}</td>
        <td>Customer ${i}</td>
        <td>${items} items</td>
        <td>$${total}</td>
        <td><span class="status-badge ${statusClass}">${status}</span></td>
    `;
    
    ordersTableBody.appendChild(orderRow);
    }

    // Add event listeners to product action buttons
    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Edit product functionality will be implemented here');
    });
    });

    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Delete product functionality will be implemented here');
    });
    });

    // Add event listener to add product button
    const addProductButton = document.querySelector('.tab-header .btn-primary');
    addProductButton.addEventListener('click', function() {
    alert('Add new product functionality will be implemented here');
    });

    // Add event listener to save profile button
    const saveProfileButton = document.querySelector('.profile-form .btn-primary');
    saveProfileButton.addEventListener('click', function() {
    alert('Profile changes saved successfully!');
    });

    // Add event listener to change photo button
    const changePhotoButton = document.querySelector('.profile-photo-container .btn-outline');
    changePhotoButton.addEventListener('click', function() {
    alert('Photo upload functionality will be implemented here');
    });

    // Add event listener to logout button
    const logoutButton = document.querySelector('.header-actions .btn-outline');
    logoutButton.addEventListener('click', function() {
    window.location.href = 'index.html';
    });