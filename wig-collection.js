       

let servicesBtn = document.querySelector("#services-btn");
let currentItem = 4;

servicesBtn.onclick = () => {
    let boxes = [...document.querySelectorAll("#section-3 #wig-collections-container .wig-collections-card-container")];
    for(var i = currentItem; i < currentItem + 4; i++){
        boxes[i].style.display = "block";

    };
    currentItem += 4;
    
    if(currentItem >= boxes.length){
        servicesBtn.style.display = "none"
    };

};