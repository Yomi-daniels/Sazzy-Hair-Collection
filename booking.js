

const accordionBtn = document.querySelector('.main-text');
const servicesLists = document.querySelector('.services-lists-container');

function openAccordion(){
    if(servicesLists.classList.contains('services-lists-container')){
        servicesLists.classList.remove('services-lists-container')
    }else{
        servicesLists.classList.add('services-lists-container')
       
        
    }
}

accordionBtn.addEventListener('click', openAccordion);


const accordionBtn2 = document.querySelector('.main-text2');
const servicesLists2 = document.querySelector('.accordion-container-box');

function openAccord(){
    if(servicesLists2.classList.contains('accordion-container-box')){
        servicesLists2.classList.remove('accordion-container-box')
    }else{
        servicesLists2.classList.add('accordion-container-box')
        
    }
}

accordionBtn2.addEventListener('click', openAccord);

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