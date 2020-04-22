function linkServicesShowCustom(a) {
    a.up("a").adjacent(".image-default")[0].hide()
}

function linkServicesShowDefault(a) {
    a.up("a").hide();
    a.up("a").adjacent(".image-default")[0].show()
}

function checkCustomImg(d) {
    if (d.length) {
        for (i = 0; i < d.length; i++) {
            var c = d[i].select(".image-custom");
            if (c.length) {
                var a = c[0].select("img");
                if (a.length == 1) {
                    if (isImageLoaded(a[0])) {
                        linkServicesShowCustom(a[0])
                    } else {
                        linkServicesShowDefault(a[0])
                    }
                }
            } else {
                var b = d[i].select(".image-default");
                if (b.length) {
                    b[0].show()
                }
            }
        }
    }
}

function isImageLoaded(a) {
    if (!a.complete) {
        return false
    }
    if (typeof a.naturalWidth != "undefined" && a.naturalWidth === 0) {
        return false
    }
    return true
}

function checkImages(d, b, c, a) {
    if (d.length) {
        for (i = 0; i < d.length; i++) {
            if (!(a && d[i].hasClassName("image-checked"))) {
                if (isImageLoaded(d[i])) {
                    b(d[i])
                } else {
                    c(d[i])
                }
                if (a) {
                    d[i].addClassName("image-checked")
                }
            }
        }
    }
};