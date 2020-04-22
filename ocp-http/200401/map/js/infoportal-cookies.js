var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Infoportal == "undefined") {
    PTK.Infoportal = {}
}
PTK.Infoportal.Cookies = {
    checkCookiesStaus: function() {
        var a = false;
        if (Prototype.Browser.IE && (document.cookie = "cookie").indexOf.call(document.cookie, "cookie") != -1) {
            a = true
        } else {
            if (!Prototype.Browser.IE) {
                a = navigator.cookieEnabled
            }
        }
        return a
    },
    cookiesOffMessage: function(d, b) {
        var a = PTK.Infoportal.Cookies.checkCookiesStaus(),
            c = $(b);
        if (!a && c) {
            c.innerHTML = d;
            c.removeClassName("ptk-hidden")
        }
    }
};