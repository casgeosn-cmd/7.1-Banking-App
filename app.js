


// task #3
const routes = {
    "/login": { templateId: "login"},
    "/dashboard": {templateId: "dashboard"}
};

// add a new function named register: 

async function register() {
    const registerForm = document.getElementById('registerForm');
    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data);
    const result = await createAccount(jsonData);

     if (result.error) {
        return console.log('An error occured:', result.error);
     }
     console.log('Account created!', result);
}

// task #2
function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];

    // task #4 part 2 
    if (!route) {
        return navigate("login");
        }
        
        const template = document.getElementById(route.templateIId);
        const view = template.contentEditable.cloneNode(true);
        const app = document.getElementById("app");

        // clear innerHTML of selected app div 
        app.innerHTML="";
        app.appendChild(view);
}

// create a new function named createAccount
async function createAccount(account) {
    try {
        const response = await fetch('//localhost:5000/api/accounts', {
            method: 'POST',
            headers: { 'Content-Typep': 'application/json'},
            body: account,
        });
        return await response.json();
    } catch (error) {
        return {error: error.message || 'Unknown Error'};
    }
}