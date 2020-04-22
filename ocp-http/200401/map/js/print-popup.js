var filesadded = "";

function checkloadcssfile(a) {
    if (filesadded.indexOf("[" + a + "]") == -1) {
        loadcssfile(a);
        filesadded += "[" + a + "]"
    }
}

function loadcssfile(a) {
    var b = document.createElement("link");
    b.setAttribute("rel", "stylesheet");
    b.setAttribute("media", "print");
    b.setAttribute("type", "text/css");
    b.setAttribute("href", a);
    document.getElementsByTagName("head")[0].appendChild(b)
}

function popupRegisterPrint(d, c) {
    var a = $(d);
    if (a) {
        checkloadcssfile("/ocp-http/200401/map/css/ff3_6/print-popup.css");
        Event.observe(a, "click", onPopupPrint)
    }
    var b = $(c);
    if (b) {
        Event.observe(b, "click")
    }
}

function onPopupPrint(a) {
    window.print()
};