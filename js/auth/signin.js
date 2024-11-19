const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Ici, vous devrez appeler l'API pour vérifier les credentials en BDD
    if (mailInput.value === "test@mail.com" && passwordInput.value === "123") {
        // Simuler la récupération d'un vrai token
        const token = "jcfehofruheorheorhvceorheorhvcoerhv";
        
        setToken(token); // Placer le token dans un cookie
        setCookie("RoleCookieName", "admin", 7); // Exemple de rôle

        // Appel de la fonction pour ajuster l'affichage des éléments en fonction du rôle avant la redirection
        showAndHideElementsForRoles();

        // Redirection vers la page d'accueil
        window.location.replace("/"); // Page d'accueil
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}


// Fonction pour définir le token dans un cookie
function setToken(token) {
    setCookie("accesstoken", token, 7); // Enregistrez le token d'accès dans un cookie
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
