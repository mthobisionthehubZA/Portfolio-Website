var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link"); 
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// footer current year 
document.getElementById("year").innerHTML = new Date().getFullYear();

// animated skills script
var typed=new Typed((".skills"),{
    strings: ["Software Developer","UI Designer","Android Developer","Data Analyst","Software Support Engineer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 100,
    backDelay :true,
    loop : true
});

// hamburger menu script
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// clear contact form input 
window.onbeforeunload =() => {
    for(const form of document.getElementsByTagName('form')){
        form.reset();
    }
}

// scroll up icon script
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Show or hide the scroll-to-top arrow based on scroll position
    var scrollArrow = document.querySelector('.scroll-top');
    if (scrollPosition > 100) { // Adjust scroll position as needed
        scrollArrow.style.display = 'block';
    } else {
        scrollArrow.style.display = 'none';
    }
});

document.querySelector('.scroll-top').addEventListener('click', function(e) {
    e.preventDefault();
    // Scroll back to the top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
