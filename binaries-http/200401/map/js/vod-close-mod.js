function initCloseLink(a) {
    $$(".btn").each(function(b) {
        b.observe("click", onCloseClick)
    });
    $(a).observe("click", onCloseClick)
}

function onCloseClick(a) {
    Event.stop(a);
    this.up(".mod").fade();
    if ($("cookieName") && $("cookieValue")) {
        setCookieValue($("cookieName").value, $("cookieValue").value)
    }
}

function setCookieValue(b, a) {
    a = escape(a);
    document.cookie = b + "=" + a + "; path=/"
};