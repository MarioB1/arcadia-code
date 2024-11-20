import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/services", "Nos services", "/pages/services.html",[]),
    new Route("/habitats", "Nos habitats", "/pages/habitats.html",[]),
    new Route("/jungle", "Jungle", "/pages/jungle.html",[]),
    new Route("/marais", "Marais", "/pages/marais.html",[]),
    new Route("/savane", "Savane", "/pages/savane.html",[]),
    new Route("/lion", "Lion", "/pages/lion.html",[]),
    new Route("/zebre", "Zebre", "/pages/zebre.html",[]),
    new Route("/hippopotame", "Hippopotame", "/pages/hippopotame.html",[]),
    new Route("/girafe", "Girafe", "/pages/girafe.html",[]),
    new Route("/elephant", "Elephant", "/pages/elephant.html",[]),
    new Route("/buffle", "Buffle", "/pages/buffle.html"),
    new Route("/alligator", "Alligator", "/pages/alligator.html",[]),
    new Route("/chaus", "Chaus", "/pages/chaus.html",[]),
    new Route("/ragondin", "Ragondin", "/pages/ragondin.html",[]),
    new Route("/salamandre", "Salamandre", "/pages/salamandre.html",[]),
    new Route("/raton", "Raton laveur", "/pages/raton.html",[]),
    new Route("/couleuvre", "Couleuvre à collier", "/pages/couleuvre.html",[]),
    new Route("/panthere", "Panthere", "/pages/panthere.html",[]),
    new Route("/toucan", "Toukan toco", "/pages/toucan.html",[]),
    new Route("/lemurien", "Maki lemurien", "/pages/lemurien.html",[]),
    new Route("/tamarin", "Tamarin empreur", "/pages/tamarin.html",[]),
    new Route("/jaguar", "Jaguar", "/pages/jaguar.html",[]),
    new Route("/gorille", "Gorille", "/pages/gorille.html",[]),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", "/js/auth/signin.js",[]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";