import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/services", "Nos services", "/pages/services.html"),
    new Route("/habitats", "Nos habitats", "/pages/habitats.html"),
    new Route("/jungle", "Jungle", "/pages/jungle.html"),
    new Route("/marais", "Marais", "/pages/marais.html"),
    new Route("/savane", "Savane", "/pages/savane.html"),
    new Route("/lion", "Lion", "/pages/lion.html"),
    new Route("/zebre", "Zebre", "/pages/zebre.html"),
    new Route("/hippopotame", "Hippopotame", "/pages/hippopotame.html"),
    new Route("/girafe", "Girafe", "/pages/girafe.html"),
    new Route("/elephant", "Elephant", "/pages/elephant.html"),
    new Route("/girafe", "Girafe", "/pages/girafe.html"),
    new Route("/buffle", "Buffle", "/pages/buffle.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", "/js/auth/signin.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";