
      /*BLONDE ACCORDION CONTAINER*/

       // Add event listener to all accordion buttons
       var accordionButtons = document.querySelectorAll('.accordion-open-btn');
    
       accordionButtons.forEach(function(button) {
           button.addEventListener('click', function() {
               // Toggle the visibility of the associated accordion content
               var targetId = button.getAttribute('data-target');
               var accordionContent = document.getElementById(targetId);
               accordionContent.style.display = (accordionContent.style.display === 'none' || accordionContent.style.display === '') ? 'block' : 'none';
   
               // Rotate the icon
               button.classList.toggle('rotate-icon');
           });
       });
      /* END */

// SECTION 5 CAROUSEL SLIDER
const selectText = document.getElementById('select-text')
const section5Container = [...document.querySelectorAll('.section-5-container')];
const prevBtn = [...document.querySelectorAll('#prevBtn')];
const nextBtn = [...document.querySelectorAll('#nextBtn')];

section5Container.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
        selectText.innerHTML = '1/3'
    });
    prevBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;  
        selectText.innerHTML = '1/2'
    });
});





// ARM BURGER MENU NAV

let serviceList = document.querySelector('.services');
let subMenu = document.querySelector('.sub-menu-1');


function revealMenu(){
    if(subMenu.classList.contains('services')){
        subMenu.classList.remove('services')
    } else{
        subMenu.classList.add('services')
    }
    

}

document.body.addEventListener('click', function(event){
if(event.target !== serviceList && !serviceList.contains(event.target)){
    subMenu.classList.remove('services')
}

})
serviceList.addEventListener('click', revealMenu);


// INDEX CART ACCORDION COLOR AND SIZE

const dropDown = document.querySelector('#color-down-icon');
const moreColor = document.querySelector('.more-color');


function openMoreColor(){

    if(moreColor.classList.contains('more-color')){
        moreColor.classList.remove('more-color');
        moreColor.style.display = "none"
    }else{
         moreColor.classList.add('more-color');
         moreColor.style.display = "block"
    };
};
dropDown.addEventListener('click', openMoreColor);


const dropDown2 = document.querySelector('#size-down-icon');
const moreSize = document.querySelector('.more-size');

function openMoreSize(){
    if(moreSize.classList.contains('more-size')){
        moreSize.classList.remove('more-size');
        moreSize.style.display = "none"
    }else{
         moreSize.classList.add('more-size');
         moreSize.style.display = "block"
    };
};
dropDown2.addEventListener('click', openMoreSize);


//ADDITION AND DEDUCTION IN CART SECTION


let currentResult = 0;

function updateResult() {
  document.getElementById('result').textContent = currentResult;
};

function add() {
  currentResult += 1;
  updateResult();
};

function subtract() {
  currentResult -= 1;
  updateResult();
};

// FADING ANIMATION
const faders = document.querySelectorAll('.fade-in');
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


    // OPEN MORE BUTTON
let servicesBtn = document.querySelector("#services-btn");
let currentItem = 4;

servicesBtn.onclick = () => {
    let boxes = [...document.querySelectorAll("#section-3 #wig-collections-container .wig-collections-card-container")];
    for(var i = currentItem; i < currentItem + 4; i++){
        boxes[i].style.display = "flex";

    };
    currentItem += 4;
    
    if(currentItem >= boxes.length){
        servicesBtn.style.display = "none"
    };

};

// GALLERY CAROUSEL

const galleryContainer = [...document.querySelectorAll('.gallery-container')];
const prevButton = [...document.querySelectorAll('#prev-button')];
const nextButton = [...document.querySelectorAll('#next-button')];

galleryContainer.forEach((item, i) => {
    let galleryDimensions = item.getBoundingClientRect();
    let containersWidth = galleryDimensions.width;

    nextButton[i].addEventListener('click', () =>{
        item.scrollLeft += containersWidth;
    })
    prevButton[i].addEventListener('click', () =>{
        item.scrollLeft -= containersWidth;
    });

});


// NAV BAR ON MEDIA SCREEN 

const checkBox1 = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-list');

function openNav(){
    if(menuList.classList.contains('hamburger')){
        menuList.classList.remove('hamburger')
    }else{
        menuList.classList.add('hamburger')
    }

}

checkBox1.addEventListener('click', openNav);


//SECTION 4 ADD TO CART POPUP

function showCartPopup() {
   const cartPopUp = document.querySelector('.section-4-popup-container') ;
   cartPopUp.classList.add('bounceAnimation');
   cartPopUp.style.display = 'flex';
   cartPopUp.style.transform= " transform: opacity(0) ease-in"
   setTimeout(() => {
    cartPopUp.style.transform = 'translate(-50%, -50%)';
  },0); 
    document.querySelector("#showCartBtn").style.backgroundColor = "#2F4858";
 
};
    function hidePopup() {
        const cartPopUp = document.querySelector('.section-4-popup-container') ;
        
        cartPopUp.style.transform = 'translate(100%, -50%)';
        setTimeout(() => {
            cartPopUp.style.display = 'none';
            // document.getElementById('overlay').style.display = 'none';
          }, 250);
          document.querySelector("#showCartBtn").style.backgroundColor = "#6C4B03";
          
      };


       
        


     
      