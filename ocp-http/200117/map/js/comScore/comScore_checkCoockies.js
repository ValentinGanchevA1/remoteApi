(function() {
    if ((document.cookie).search("comScore_cookie") != -1) {
        if ((typeof PTK == "undefined" || typeof PTK.Comscore == "undefined")) {
            var c = document.createElement("script"),
                d = "/ocp-http/200401/map/js/comScore/comScore_getClick.js",
                a = 0,
                b = setInterval(function() {
                    if (typeof PTK != "undefined" && typeof PTK.Comscore != "undefined" && !a) {
                        clearInterval(b);
                        a = 1;
                        PTK.Comscore.comscore_checkCookieState()
                    }
                }, 3000);
            c.type = "text/javascript";
            c.src = d;
            document.body.appendChild(c)
        } else {
            PTK.Comscore.comscore_checkCookieState()
        }
    }
})();