const btnToggler = document.querySelector('.goods__default');
const activeToggler = document.querySelector('.goods__default_active');
const selectItem = document.querySelectorAll('.select-item');

//select-box

btnToggler.addEventListener('click', () => {
    if (getComputedStyle(activeToggler).display === "none") {
        activeToggler.style.display = "flex";
    } else {
        activeToggler.style.display = "none";
    }
})

selectItem.forEach(element => {
    element.addEventListener('click', () => {
        let text = element.innerText;
        document.getElementById('select-default').innerText = text;
    })
});

//sort

document.querySelector('#sort-default-price').addEventListener("click", sortDefault);
document.querySelector('#sort-upp-price').addEventListener("click", sortUpp);
document.querySelector('#sort-down-price').addEventListener("click", sortDown);

function sortDefault() {
    let sort = document.querySelector('#sort');
    for (let i = 0; i < sort.children.length; i++) {
        for (let j = i; j < sort.children.length; j++) {
            if (+sort.children[i].getAttribute('default') > +sort.children[j].getAttribute('default')) {
                replaceNode = sort.replaceChild(sort.children[j], sort.children[i]);
                insertAfter(replaceNode, sort.children[i]);
            }
        }
    }
}

function sortUpp() {
    let sort = document.querySelector('#sort');
    for (let i = 0; i < sort.children.length; i++) {
        for (let j = i; j < sort.children.length; j++) {
            if (+sort.children[i].getAttribute('data-price') > +sort.children[j].getAttribute('data-price')) {
                replaceNode = sort.replaceChild(sort.children[j], sort.children[i]);
                insertAfter(replaceNode, sort.children[i]);
            }
        }
    }
}

function sortDown() {
    let sort = document.querySelector('#sort');
    for (let i = 0; i < sort.children.length; i++) {
        for (let j = i; j < sort.children.length; j++) {
            if (+sort.children[i].getAttribute('data-price') < +sort.children[j].getAttribute('data-price')) {
                replaceNode = sort.replaceChild(sort.children[j], sort.children[i]);
                insertAfter(replaceNode, sort.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}