export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
        this.authorize = authorize;
    }
}

/* 
[] -> Tout le monde peut y acceder
["disconnected"] -> Reserve aux utilisateurs deconnecte
["admin"]-> Reserve aux utilisateurs avec le role admin
["employe"]-> Reserve aux utilisateurs avec le role employe
["veterinaire"]-> Reserve aux utilisateurs avec le role veterinaire
["admin", "employe", "veterinaire"] -> Reserve aux utilisateurs avec le role admin ou employe ou veterinaire
["admin", "employe"]-> Reserve aux utilisateurs avec le role admin ou employe
*/