let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*------------------------------- Scrol revaal Js -----------------------------------*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', { origin: 'bottom' });


/* -------------------------typed js -------------------------*/

const typed = new Typed('.multiple-text', {
    strings: ['Web developer', '23 years old'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* -------------------------------- download Cv -------------------------*/

// $(document).ready(function(){
//     $('#btnd').click(function(e){
//         e.preventDefault();
//         window.location.href ='CV_Othmane_BOUDALI-V1.pdf';
//     });
// })


/*   ------------         send email ---------------------------  */

function validform(){
    var phone = document.getElementById('phone').value;
    var emailsend = document.getElementById('email').value;
    if (phone.length != 10) {
        alert("invalid phone number ");
        phone.focus();
        return false;
    }
   
    else if (emailsend.value.indexOf(".", 0) < 0) {
        alert("Mettez une adresse email valide.");
        email.focus();
        return false;
    }
    
    else{

        alert("les donnes sont pas valid.");

    }
    
   
    
    
  
}

function sendEmail() {

  
   
    
    Email.send({

        SecureToken: "d1eab259-8ee9-4062-af93-474203778c53",
        Host: "smtp.elasticemail.com",
        Username: "othmane.boudali01@gmail.com",
        Password: "EE5411A9057A335F24D8B97F3EB80CE65A10",
        To: 'othmane.boudali01@gmail.com',
        From: 'othmane.boudali01@gmail.com',
        Subject: "This is the subject",
        Body: "Name: " + document.getElementById("fullname").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone Number is: " + document.getElementById("phone").value
            + "<br> Message : " + document.getElementById("message").value
    }).then(
        message => alert("Sent Succesfully")
    );
       
  

}


/////////////////////////////////////////// Swiper ////////////////////////////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


////////////////////////////////////////
if(localStorage.getItem('theme')== 'dark'){
    setDarkMode();
    if(document.getElementById('checkbox').checked){
        localStorage.setItem('checkbox', true)
    }
}
function setDarkMode(){
    let isDark = document.body.classList.toggle('darkmode');

    if(isDark){
        setDarkMode.checked = true;
        localStorage.setItem('theme', 'dark');
        document.getElementById('checkbox').setAttribute('checked', 'checked');

    } else{
        setDarkMode.checked = true;
        localStorage.removeItem('theme', 'dark')
    }
    
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*= ' + id +'] ').classList.add('active');
            })

        }
    })
}