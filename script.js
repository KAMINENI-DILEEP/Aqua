// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    // Get all navigation buttons and content pages
    const navButtons = document.querySelectorAll(".nav-item");
    const contentPages = document.querySelectorAll(".content-page");
    
    // --- 1. Navigation Logic ---
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            
            // Get the target page ID from the button's 'data-page' attribute
            const targetPageId = button.dataset.page;
            
            // Remove 'active' class from all buttons and pages
            navButtons.forEach(btn => btn.classList.remove("active"));
            contentPages.forEach(page => page.classList.remove("active"));
            
            // Add 'active' class to the clicked button
            button.classList.add("active");
            
            // Show the corresponding content page
            document.getElementById(targetPageId).classList.add("active");
        });
    });

    // --- 2. Simulated Report Logic ---
    const getReadingBtn = document.getElementById("getReadingBtn");
    
    getReadingBtn.addEventListener("click", () => {
        // This is a simple simulation.
        // In a real app, this would trigger a sensor and wait for data.
        
        // We will simulate this by switching to the 'Reports' page.
        
        // Manually trigger a click on the "Reports" nav button.
        // We find it by its 'data-page' attribute.
        const reportsButton = document.querySelector('.nav-item[data-page="page-reports"]');
        if (reportsButton) {
            reportsButton.click();
        }
    });

});