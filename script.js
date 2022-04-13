const buttonAdd = document.getElementById("add");
let i = 0;

buttonAdd.addEventListener("click", () => {
    const blockWrapper = document.getElementById("block-wrapper");
    i += 1;

    if(blockWrapper.childElementCount < 4) {
        blockWrapper.insertAdjacentHTML("beforeend", "<div class='block child"+i+"'><p>child "+i+"</p><button id='add_"+i+"'>+</button></div>");
    }
});
