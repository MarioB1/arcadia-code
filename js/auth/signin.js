const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingnin = document.getElementById("btnSignin");

btnSingnin.addEventListener("click", ckeckCredentials);

function ckeckCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD

    if(mailInput.value == "test@mail.com" && passwordInput.value =="123"){

        //Il faudra recuperer le vrai token
        const token = "jcfehofruheorheorhvceorheorhvcoerhv";
setToken(token);
        //placer ce token en cookie

        setCookie("role", "admin", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}
