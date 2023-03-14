// ------background visibale When scroll down-----------
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

// -------project popup----------
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("project-bottom")){
        toggleProjectPopup();
    }
});
function toggleProjectPopup(){
    document.querySelector(".project-popup").classList.toggle("open");
}