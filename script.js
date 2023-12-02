let addToDoButton = document.getElementById('addBtn');
let toDoContainer = document.getElementById('toDoContainer');
let field = document.getElementById('field');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('para-style');
    paragraph.innerText = field.value;
    toDoContainer.appendChild(paragraph);
    field.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        paragraph.removeChild(paragraph)
    })
})