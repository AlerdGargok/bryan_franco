function modoclaro() {
    var body = document.body;
    var lightmode = body.classList.toggle("light-mode");

    var lightMode_cor= "#fff";  
    var darkMode_cor= "#1b1b1b";   

    var novacor = lightmode ?  lightMode_cor: darkMode_cor ;
    body.style.backgroundColor = novacor;

    localStorage.setItem("background-color", novacor);
}

window.onload = function() {
    var corusuario = localStorage.getItem("background-color");

    if (corusuario) {
        document.body.style.backgroundColor = corusuario;
        if (corusuario === "#fff") {
            document.body.classList.add("light-mode");
        }
    }
};