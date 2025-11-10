document.addEventListener("DOMContentLoaded", function() {

    // Get the main screens
    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainApp = document.getElementById("mainApp");

    // Get the trigger buttons
    const getStartedBtn = document.getElementById("getStartedBtn");
    const loginLink = document.getElementById("loginLink");
    
    // --- 1. Screen Toggling Logic ---
    function showMainApp() {
        if (welcomeScreen) {
            welcomeScreen.style.display = "none";
        }
        if (mainApp) {
            mainApp.style.display = "flex"; // Show the app container
        }
    }

    // Add listeners to the welcome screen buttons
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", showMainApp);
    }
    if (loginLink) {
        loginLink.addEventListener("click", (e) => {
            e.preventDefault(); // Stop the link from navigating
            showMainApp();
            // In a real app, this might go to a different login page
        });
    }

    // --- 2. App Navigation Logic (Scoped to mainApp) ---
    const navButtons = mainApp.querySelectorAll(".nav-item");
    const contentPages = mainApp.querySelectorAll(".content-page");
    
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            
            const targetPageId = button.dataset.page;
            
            navButtons.forEach(btn => btn.classList.remove("active"));
            contentPages.forEach(page => page.classList.remove("active"));
            
            button.classList.add("active");
            
            // Find the page inside the mainApp
            const targetPage = mainApp.querySelector("#" + targetPageId);
            if (targetPage) {
                targetPage.classList.add("active");
            }
        });
    });

    // --- 3. Simulated Report Logic (Scoped to mainApp) ---
    const getReadingBtn = mainApp.querySelector("#getReadingBtn");
    
    if (getReadingBtn) {
        getReadingBtn.addEventListener("click", () => {
            const reportsButton = mainApp.querySelector('.nav-item[data-page="page-reports"]');
            if (reportsButton) {
                reportsButton.click();
            }
        });
    }

}); // End of DOMContentLoaded