// gives current date and time
var currentdate = new Date(); 
var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();




if (localStorage.getItem('visitorCount')) {
    let count = parseInt(localStorage.getItem('visitorCount'));
    count++;
    localStorage.setItem('visitorCount', count);
} else {
    localStorage.setItem('visitorCount', 1);
}
let count = localStorage.getItem('visitorCount');



var div = document.querySelector(".date");
div.innerHTML = datetime;
var visits = document.querySelector(".visitors");
visits.innerHTML = count;


//empty the fields after press

var btn = document.querySelector(".input");
btn.addEventListener('click', ()=>{
    document.querySelector("input").value = "";
    document.querySelector(".mail").value = "";
    document.querySelector("textarea").value = "";
    document.querySelector(".user").focus();
});




const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav div a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('highlight');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('highlight');
        }
    });
});
