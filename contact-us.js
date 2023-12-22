
function sendMessage(){
    (function(){
        emailjs.init("6fG8glFGGDuOUmfvn"); // Account Public key
    })();


    var serviceID = "service_8av0tmr"; // Email Service ID
    var templateID = "template_cdq7syx" // Email Template ID

    var params = {
        senderName: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        senderNumber: document.querySelector("#number").value,
        message: document.querySelector("#text-area").value
    };
    emailjs.send(serviceID, templateID, params) 
 .then(res =>{
    alert('thank you,' + params["senderName"] + '! your message has been sent.');
 })
};const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};
const sliders = document.querySelectorAll('.slide-in')
const appearOnscroll = new IntersectionObserver
(function(
    entries,
     appearOnscroll
     ){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else{
                entry.target.classList.add('appear');
                appearOnscroll.unobserve(entry.target)
            };
        });
     }, 
     appearOptions);

   faders.forEach(fader =>{
    appearOnscroll.observe(fader)
   });
    sliders.forEach(slider =>{
        appearOnscroll.observe(slider)
    });
