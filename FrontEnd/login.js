const form = document.querySelector("form");

const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');

let email, password;



    inputs.forEach((input) => {
        input.addEventListener("input", (event) => {
            switch (event.target.id){
                case "email":
                    emailChecker(event.target.value)
                break;
                case "password":
                    passwordChecker(event.target.value)
                break;
                default:
                    null;
            }
        })
    })