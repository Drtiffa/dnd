const buttonAdd = document.getElementById("add");
const blockChildren = document.querySelector(".children");
let i = 0;

// first parent click
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
        blockChildren.insertAdjacentHTML("beforeend", "<div id='block_"+[parseInt(parentNumber)+1]+"' class='family'><div class='block child child_"+i+"' data-child='"+[parseInt(parentNumber)+1]+"_"+i+"'><p>child "+parentNumber+"_"+i+"</p><button id='add_"+parentNumber+"_"+i+"'>+</button></div><div class='children'></div></div>");
    }

    // first child click
    let children = document.querySelectorAll('button')
    if (children) {
        let i = 0;

        children.forEach(function(element) {
            element.addEventListener('click', function(e) {
                const parentNumber = e.target.parentElement.getAttribute('data-child');
                
                console.log(parentNumber)
                
                let blockChild = document.querySelector('#block_'+parseInt(parentNumber)+' .children');

                console.log(blockChild)

                i += 1;

                blockChild.classList.add("has-child");

                if (blockChild.childElementCount === 1) {
                    blockChild.classList.add("has-two-child");

                } else if (blockChild.childElementCount === 2) {
                    blockChild.classList.add("has-three-child");
                    buttonAdd.remove();
                }

                if (blockChild.childElementCount < 3) {
                    blockChild.insertAdjacentHTML("beforeend", "<div id='block_"+[parseInt(parentNumber)+1]+"' class='family'><div class='block child child_"+i+"' data-child='"+parentNumber+"_"+i+"'><p>child "+parentNumber+"_"+i+"</p><button id='add_"+parentNumber+"_"+i+"'>+</button></div><div class='children'></div></div>");
                }
            })
        })
    }
});
