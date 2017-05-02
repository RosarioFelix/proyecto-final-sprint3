var lastScrollTop = 0;

var enlace=document.getElementsByClassName('enlace');
var boton=document.getElementById("lyft");
var otroBoton=document.getElementById("otro-boton");
var containerLogo=document.getElementById("conten-logo");
var logo= document.getElementById("logo");

var imagen= document.createElement("img");
imagen.classList.add("box-img");
imagen.setAttribute("src","assets/img/logo-pink.png");

window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="block";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").style.opacity = 1;
     imagen.style.display="block";
     imagen.style.width="50px";
     containerLogo.appendChild(imagen);


     logo.style.display="none"; //quitando logo
     enlace[0].style.color="#000"
     enlace[1].style.color="#000"
     enlace[2].style.color="#000"

     boton.style.background="#FFF";
     boton.style.color="#000";
     boton.style.border="2px solid #ff2fca";
     otroBoton.style.visibility="visible"
   };

   if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
       logo.style.display="block";
       imagen.style.display="none";

        enlace[0].style.color="#fff"
        enlace[1].style.color="#fff"
        enlace[2].style.color="#fff"

        boton.style.background="#25073c";
        boton.style.color="#FFF";
        boton.style.border="2px solid #FFF";
        otroBoton.style.visibility="hidden"
     }
   lastScrollTop = currentScroll;
}, false);
