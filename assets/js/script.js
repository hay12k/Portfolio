// ------Active navlist-----------
var btnContainer = document.getElementById("navlist");
var li = btnContainer.getElementsByClassName("li");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active");
        this.className += "active";
    })
}
// ------background visibale When scroll down-----------
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// -------project popup----------
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("project-bottom")) {
        toggleProjectPopup();
        projectItemDetails(e.target.parentElement);
    }
});
function toggleProjectPopup() {
    document.querySelector(".project-popup").classList.toggle("open");
}
document.querySelector(".project-popup-close").addEventListener("click", toggleProjectPopup)

function projectItemDetails(projectItem) {
    document.querySelector(".pp-thumbnail img").src = projectItem.querySelector(".project-img").src;
    document.querySelector(".project-popup-subtitle span").innerHTML = projectItem.querySelector(".project-title").innerHTML;
    document.querySelector(".project-popup-body").innerHTML = projectItem.querySelector(".project-item-details").innerHTML;
}