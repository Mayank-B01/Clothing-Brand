const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navigation = document.querySelector('.navigation');

menu.onclick = () => {
    menu.classList.toggle('fa-a');
    navigation.classList.toggle('open'); 
};