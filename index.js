// This function creates a login system
function createLogin() {
    let tries = 3;   // number of tries allowed
    console.log("Login started. Tries:", tries);

    // This function remembers 'tries' (closure)
    return function (username, passcode) {
        console.log("Trying to login...");
        console.log("Tries left before:", tries);

        // If no tries left
        if (tries === 0) {
            console.log("Account already locked");
            return "Account LOCKED!";
        }

        // Correct username and passcode
        if (username === "admin" && password === "123") {
            tries = 3; // reset tries
            console.log("Correct login. Tries reset to:", tries);
            return "Login OK!";
        }

        // Wrong passcode
        tries--;
        console.log("Wrong login. Tries left now:", tries);

        if (tries === 0) {
            console.log("No tries left. Account locked.");
            return "Wrong! Account now LOCKED.";
        }

        return "Wrong passcode. " + tries + " tries left.";
    };
}

// Create the login function
const login = createLogin();

// When button is clicked
document.getElementById("btn").onclick = function () {
    console.log("Login button clicked");

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let result = login(user, pass);
    console.log("Result:", result);

    document.getElementById("msg").textContent = result;
    document.getElementById("pass").value = ""; // clear passcode 
};
