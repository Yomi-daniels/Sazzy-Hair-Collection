       

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
