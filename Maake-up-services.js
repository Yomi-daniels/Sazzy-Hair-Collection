

let items = document.querySelectorAll('.gallery-container .item');
let next = document.getElementById('next');
let prev = document.getElementById("prev");

let active = 3;
function loadShow (){
  let stt = 0;
  items[active].style.transform = `none`;
      items[active].style.zIndex = 1;
      items[active].style.opacity = 1;
  for(var i = active + 1; i < items.length; i++){
      stt++;
      items[i].style.transform = `translateX(${130*stt}px) scale(${1 - 0.2*stt})`;
      items[i].style.zIndex = -stt
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0

  for(var i = active - 1; i >= 0; i--){
    stt++;
      items[i].style.transform = `translateX(${-130*stt}px) scale(${1 - 0.2*stt})`;
      items[i].style.zIndex = -stt
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}


const previewContainer = document.querySelector('.gallery-image-preview');
const previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll(".gallery-images .item").forEach(item =>{
    item.onclick = () =>{
        previewContainer.style.display = "flex"

        let name = item.getAttribute('data-name');
        previewBox.forEach(preview =>{
           let target = preview.getAttribute('data-target');
             if(name == target){
                preview.classList.add('active')
             }
        });
    };
});
 

previewBox.forEach(close =>{
    close.querySelector('.fa-xmark').onclick = () => {
        close.classList.remove('active')
        previewContainer.style.display = "none"
    }
 
})
