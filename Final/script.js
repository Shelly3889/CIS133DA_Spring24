// Selecting the sidbar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
    sidebar.classList.toggle("locked");
    // If the sidebar is not locked
    if(!sidebar.classList.contains("locked")){
        sidebar.classList.add("hoverable")
        sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
    } else {
        sidebar.classList.remove("hoverable")
        sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
    }
};

//Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
    if (sidebar.classList.contains("hoverable")){
        sidebar.classList.add("close");
    }
};

//Function to show the sidebar when the mouse enters
const showSidebar = () => {
    if (sidebar.classList.contains("hoverable")){
        sidebar.classList.remove("close");
    }
};

// Function to show and hide sidebar
const toggleSidebar = () => {
    sidebar.classList.toggle("close");
};

// If the window width is less than 800px, close the sidebar and remove hoverablity and lock
if(window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
}

// Adding event listeners to buttones and sidebar for the corresponding actions
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarLockBtn.addEventListener("click", toggleLock);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);

// create variables for scripting
const intCurrDate = new Date();
const intCurrYear = intCurrDate.getFullYear();
const intFirstYear = 2023; 
let strFooter = '&copy;' + intFirstYear.toString();

// write the footer with copyright year(s)
if (intCurrYear > intFirstYear) {
    strFooter += '-' + intCurrYear.toString();
}
footer.innerHTML = strFooter + '';

// fetch the footer into the page
fetch('./components/navbar.html')
    .then(response => response.text())
    .then(html => {
        navBar.innerHTML = html
    })
    .catch(error => console.error('Error fetching navBar:', error));