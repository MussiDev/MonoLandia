


window.addEventListener('scroll', function (e) {
  var nav = document.getElementById('menu');
  if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
          nav.classList.add('nav-colored');
          nav.classList.remove('nav-transparent');
      } else {
          nav.classList.add('nav-transparent');
          nav.classList.remove('nav-colored');
      }
});

function cambioColor(){
  let collapse = document.getElementById('reloco');
  collapse.style.backgroundImage = "linear-gradient(120deg, rgba(250, 207, 68, 0.308) 0%, rgba(92, 84, 8, 0.294) 100%), url(./img/monkey.jpg)";
  collapse.style.marginTop = "10px";
  collapse.style.borderRadius = "20px";
  collapse.style.maxWidth = "100%";
}


ScrollReveal().reveal('#hero');
ScrollReveal().reveal('.mono');
ScrollReveal().reveal('.tercero');
ScrollReveal().reveal('.Multimedia');
ScrollReveal().reveal('footer');




