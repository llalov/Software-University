function createParagraph (id, text) {
    var parent = document.getElementById(id);
    var newParagraph = document.createElement('p');
    newParagraph.innerText = text;
    parent.appendChild(newParagraph);
}
createParagraph('wrapper', 'Some text');