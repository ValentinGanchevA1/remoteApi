var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.JustifiedMenu == "undefined") {
    PTK.JustifiedMenu = {};
    PTK.JustifiedMenu = Class.create({
        initialize: function(e) {
            if (!Prototype.Browser.IE7) {
                var c = $(e);
                if (typeof c != "undefined") {
                    var a = c.select("li.parent.active")[0];
                    if (typeof a != "undefined") {
                        c.addClassName("justified-menu");
                        var d = a.select("div")[0];
                        if (d) {
                            var b = d.select("ul")[0];
                            if (b) {
                                b.setStyle({
                                    left: "-" + a.positionedOffset().left + "px"
                                });
                                d.setStyle({
                                    height: b.offsetHeight + "px"
                                })
                            }
                        }
                    }
                }
            }
        }
    })
};