
function check (checkboxId, element) {
    if (document.getElementById(checkboxId).checked) {
        paragraph = document.getElementById(element);
        paragraph.style.visibility = "visible";
    }
    else {
        paragraph.style.visibility = "hidden";
    }
}

