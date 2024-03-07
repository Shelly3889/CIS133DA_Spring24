// create variables for DOM objects
    const navBar = document.getElementById('navBar');
    const footer = document.getElementById('footer');

// create variables for scripting
    const intCurrDate = new Date();
    const intCurrYear = intCurrDate.getFullYear();
    const intFirstYear = 2023; 
    let strFooter = '&copy;' + intFirstYear.toString();

// write the footer with copyright year(s)
    if (intCurrYear > intFirstYear) {
        strFooter += '-' + intCurrYear.toString();
    }
    footer.innerHTML = strFooter + ': SocratesOnline';

// fetch the footer into the page
    fetch('./components/navbar.html')
        .then(response => response.text())
        .then(html => {
            navBar.innerHTML = html
        })
        .catch(error => console.error('Error fetching navBar:', error));

