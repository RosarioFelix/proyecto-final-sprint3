var lastScrollTop = 0;

var enlace=document.getElementsByClassName('enlace');
var boton=document.getElementById("lyft");
var otroBoton=document.getElementById("otro-boton");
var logo= document.getElementById("logo");
var logoDos=document.getElementById("logo-dos");

window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="block";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").style.opacity = 1;
     logoDos.style.display="block"; //agregando logo
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
       logoDos.style.display="none";

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
