let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('nav-toggle');
let mainNavToggle = document.getElementById('js-nav');

navBarToggle.addEventListener('click',function(){
    mainNav.classList.toggle('active');
});

navBarToggle.addEventListener('click',function(){
    mainNavToggle.classList.toggle('active-nav');
    
});

