const inputElement = document.querySelector("#input");
const addButtonEl = document.querySelector("#sumit-button");
const ulElement = document.querySelector("#todo-list");
const resetButtonEl = document.querySelector("#reset-button")

addButtonEl.addEventListener("click", function(e) {
    if(inputElement.value){
    const li = document.createElement('li');
    li.textContent = inputElement.value;
    inputElement.value = "";
    ulElement.appendChild(li);
    }
})

resetButtonEl.addEventListener("click", function(e) {
    while(ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
    }
    inputElement.value = "";
})

ulElement.addEventListener("click", function(e) {
    ulElement.removeChild(e.target);
})