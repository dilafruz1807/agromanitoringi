// dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mobileSidebar = document.getElementById('mobileSidebar');
    
    if (sidebarToggle && mobileSidebar) {
        sidebarToggle.addEventListener('click', function() {
            mobileSidebar.classList.remove('hidden');
        });
    }
    
    // Function to close mobile sidebar
    window.closeMobileSidebar = function() {
        if (mobileSidebar) {
            mobileSidebar.classList.add('hidden');
        }
    };
    
    // Farm detail page functionality
    const urlParams = new URLSearchParams(window.location.search);
    const farmId = urlParams.get('id');
    
    if (farmId && window.location.pathname.includes('dashboard-farm-detail.html')) {
        // Load farm data based on ID
        // This would typically fetch data from a server
        console.log('Loading farm data for ID:', farmId);
        
        // Tabs functionality
        const tabTriggers = document.querySelectorAll('.tab-trigger');
        const tabContents = document.querySelectorAll('.tab-content');
        
        if (tabTriggers.length && tabContents.length) {
            tabTriggers.forEach(trigger => {
                trigger.addEventListener('click', function() {
                    const target = this.getAttribute('data-tab');
                    
                    // Hide all tab contents
                    tabContents.forEach(content => {
                        content.classList.add('hidden');
                    });
                    
                    // Remove active class from all triggers
                    tabTriggers.forEach(t => {
                        t.classList.remove('active');
                    });
                    
                    // Show the selected tab content
                    document.getElementById(target).classList.remove('hidden');
                    
                    // Add active class to clicked trigger
                    this.classList.add('active');
                });
            });
        }
    }
});