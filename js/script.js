const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");

signoutBtn.addEventListener("click", signout);

function signout() {
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    
    // Vérifier que les cookies sont supprimés
    console.log("Token cookie après suppression:", getCookie(tokenCookieName)); // Devrait être null
    console.log("Role cookie après suppression:", getCookie(RoleCookieName));   // Devrait être null
    
    // Recharger la page
    window.location.reload();
}

// Fonction pour récupérer un cookie par son nom
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Fonction pour effacer un cookie
function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    console.log("Cookie effacé: " + name); // Vérifier dans la console
}

// Vérifier si l'utilisateur est connecté
function isConnected() {
    if (getToken() == null || getToken() == undefined) {
        return false;
    } else {
        return true;
    }
}

// Récupérer le token du cookie
function getToken() {
    return getCookie(tokenCookieName);
}

window.onload = function () {
    showAndHideElementsForRoles(); // Appel après la redirection pour masquer/afficher les éléments selon le rôle
};

function showAndHideElementsForRoles() {
    const userConnected = isConnected(); // Vérifiez si l'utilisateur est connecté
    const role = getRole(); // Récupérez le rôle depuis le cookie

    let allElementsToEdit = document.querySelectorAll('[data-show]'); // Tous les éléments avec data-show

    allElementsToEdit.forEach(element => {
        switch (element.dataset.show) {
            case 'disconnected':
                if (userConnected) {
                    element.classList.add("d-none");
                }
                break;
           
            case 'admin':
                if (!userConnected || role !== "admin") {
                    element.classList.add("d-none");
                }
                break;
            case 'veterinaire':
                if (!userConnected || role !== "veterinaire") {
                    element.classList.add("d-none");
                }
                break;
            case 'employe':
                if (!userConnected || role !== "employe") {
                    element.classList.add("d-none");
                }
                break;
        }
    });
}


function isConnected() {
    return getToken() !== null; // Vérifiez si un token est présent
}

// Récupérer le rôle depuis le cookie
function getRole() {
    return getCookie("role"); // Récupérer le rôle depuis le cookie
}

// Fonction pour récupérer un cookie par son nom
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

