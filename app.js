const imagenes = document.querySelectorAll('.img-gallery');
const imageShow = document.querySelector('.showImage');
const containerImage = document.querySelector('.image-show');



imagenes.forEach(imagen => {
  imagen.addEventListener('click', () =>{
    mostrarImagen(imagen.getAttribute('src'));
  })
});

containerImage.addEventListener('click', (e) => {
  if(e.target !== imageShow){
    containerImage.classList.toggle('show');
    imageShow.classList.toggle('showSee');
  }
})

const mostrarImagen = (imagen) => {
  imageShow.src = imagen;
  containerImage.classList.toggle('show');
  imageShow.classList.toggle('showSee');
}

/* MENU RESPONSIVE */

const enlaces = document.getElementsByClassName('header-menu')[0];

const menu = document.getElementsByClassName('menu')[0];
const menuHamburguer = document.getElementById('hamburguer');

let abierto = false;

const toggleMenu = () => {
  enlaces.classList.toggle('header-menu2');
  enlaces.style.transition = 'transform 0.5s ease-in-out';
}

menu.addEventListener('click', function(){
  toggleMenu();
  if(document.querySelector('.header-menu.header-menu2')){
    abierto = true;
  } else {
    abierto = false;
  }
});

window.addEventListener('click', function(e) {
  if(abierto){

    if(e.target !== menuHamburguer){

      abierto = false;
      toggleMenu();


    }
  }

});


window.addEventListener('resize', function(){
  if(this.screen.width > 800){
    if(abierto){
      toggleMenu();
      enlaces.style.transition = 'none';
      openn = false;
    }
  }
});
