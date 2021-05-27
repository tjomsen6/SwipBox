var container = document.getElementsByClassName("inputcontainer")[0];
var last = document.getElementById("fourth-input");

container.addEventListener("keyup", function (e) {
    var target = e.srcElement || e.target;
    var maxlength = parseInt(target.attributes["maxlength"].value, 10);
    var mylenght = target.value.length;

    if (mylenght == maxlength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null) break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }

        if (document.activeElement === last) {
            if (last.value != "") {
                window.location.href = "start.html";

            }
        }
    } else if (mylength === 0) {
        var prev = target;
        while (prev = prev.previousElementSibling) {
            if (prev == null) break;
            if (prev.tagName.toLowerCase === "null") {
                prev.focus;
                break;
            }
        }
    }
})