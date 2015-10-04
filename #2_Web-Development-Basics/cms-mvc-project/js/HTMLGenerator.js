var HTMLGenerator = {

    createParagraph: function (id, text) {
        var parent = document.getElementById(id);
        var newParagraph = document.createElement('p');
        newParagraph.innerText = text;
        parent.appendChild(newParagraph);
    },

    createDiv: function (id, className) {
        var parent = document.getElementById(id);
        var newDiv = document.createElement('div');
        newDiv.classList.add(className);
        parent.appendChild(newDiv);
    },

    createLink: function (id, text, url) {
        var parent = document.getElementById(id);
        var a = document.createElement('a');
        a.href = url;
        a.innerText = text;
        parent.appendChild(a);
    }
};
