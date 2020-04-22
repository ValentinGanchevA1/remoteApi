var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Faq == "undefined") {
    PTK.Faq = {
        toggleFaqPopup: function() {
            $$(".popup .popup-content .articles li div.header").each(function(b, a) {
                b.observe("click", function(d) {
                    Event.stop(d);
                    var c = Event.element(d);
                    var e = c.up("li").hasClassName("open");
                    $$(".popup .popup-content .articles li div.header").each(function(g, f) {
                        g.up("li").addClassName("close");
                        g.up("li").removeClassName("open")
                    });
                    if (e) {
                        c.up("li").addClassName("close");
                        c.up("li").removeClassName("open")
                    } else {
                        c.up("li").addClassName("open");
                        c.up("li").removeClassName("close")
                    }
                })
            });
            this.adjustFaqContentHeight()
        },
        adjustFaqContentHeight: function() {
            var a = $$(".popup .popup-content ul.tabs")[0].getHeight() - 22;
            var b = $$(".popup .popup-content .tab-content-main")[0].getHeight() - 22;
            var c = window.navigator.appVersion;
            if (c.match("MSIE 6")) {
                $$(".popup .popup-content .tab-content-main")[0].setStyle({
                    height: a + "px"
                })
            } else {
                $$(".popup .popup-content .tab-content-main")[0].setStyle({
                    minHeight: a + "px"
                })
            }
        }
    }
};