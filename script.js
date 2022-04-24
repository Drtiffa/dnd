const buttonAdd = document.querySelectorAll('*[id^="add"]');
const blockChildren = document.getElementById("children");
let i = 0;

console.log(buttonAdd)

buttonAdd.addEventListener("click", (e) => {
    const parentNumber = e.target.parentElement.getAttribute("data-parent");
    i += 1;

    blockChildren.classList.add("has-child");

    if (blockChildren.childElementCount === 1) {
        blockChildren.classList.add("has-two-child");

    } else if (blockChildren.childElementCount === 2) {
        blockChildren.classList.add("has-three-child");
        buttonAdd.remove();
    }

    if (blockChildren.childElementCount < 3) {
        blockChildren.insertAdjacentHTML("beforeend", "<div class='block child_"+i+"' data-child='"+parentNumber+"_"+i+"'><p>child "+parentNumber+"_"+i+"</p><button id='add_"+parentNumber+"_"+i+"'>+</button></div>");
    }
});
