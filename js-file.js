const div = document.querySelector("div")
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addItem() {
    const currItem = input.value;
    console.log(currItem)
    input.value = '';
    
    const list = document.createElement("li");
    const span = document.createElement("span");
    const deletethis = document.createElement("button");
    deletethis.style.cssText = "color: black; font-size:10px;"

    span.textContent = currItem;
    deletethis.textContent = "Delete";

    div.appendChild(list);
    list.appendChild(span);
    list.appendChild(deletethis);

    deletethis.addEventListener('click', () => {
        list.remove();
    })

    ul.appendChild(list)
    input.focus()
}




button.addEventListener('click', () => {
    addItem();
})
