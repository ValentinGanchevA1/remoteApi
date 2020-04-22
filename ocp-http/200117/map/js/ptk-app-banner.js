var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.AppBanner == "undefined") {
    PTK.AppBanner = Class.create({
        initialize: function(a) {
            this.defaults = {
                elementId: "" || "app-banner",
                daysHidden: 15,
                daysReminder: 90,
                appStoreLanguage: "pl",
                title: "Mój Orange",
                author: "Orange Polska",
                button: "Pokaż",
                force: "",
                price: {
                    ios: "",
                    android: "",
                    windows: ""
                },
                store: {
                    ios: "",
                    android: "",
                    windows: ""
                },
                position: "" || "top",
                meta: {
                    ios: "588720962",
                    android: "pl.orange.mojeorange",
                    windows: "9wzdncrdqw2f"
                }
            };
            this.options = Object.extend(this.defaults, a);
            if ($(this.options.elementId)) {
                this.init()
            }
        },
        init: function() {
            this.addMetaTag();
            SmartBanner.prototype.create = this.create;
            new SmartBanner(this.options)
        },
        addMetaTag: function() {
            var a = $$("head")[0];
            a.insert('<meta name="apple-itunes-app" content="app-id=' + this.options.meta.ios + '">');
            a.insert('<meta name="google-play-app" content="app-id=' + this.options.meta.android + '">');
            a.insert('<meta name="msApplication-ID" content="' + this.options.meta.windows + '">');
            a.insert('<meta name="msApplication-PackageFamilyName" content="microsoft.build_8wekyb3d8bbwe">')
        },
        create: function() {
            var g = function(c, d) {
                return d.querySelector(c)
            };
            var k = function(c, d) {
                d = d || document;
                return g(c, d)
            };
            var l = document;
            for (var j = this.getStoreLink(), h = this.options.price[this.type] + " - " + this.options.store[this.type], i, n = 0; n < this.iconRels.length; n++) {
                var m = k('link[rel="' + this.iconRels[n] + '"]');
                if (m) {
                    i = m.getAttribute("href");
                    break
                }
            }
            var f = $(this.options.elementId);
            f.className = "smartbanner smartbanner-" + this.type;
            f.innerHTML = '<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon"></span><div class="smartbanner-info"><div class="smartbanner-title">' + this.options.title + "</div><div>" + this.options.author + "</div><span>" + h + '</span></div><a href="' + j + '" class="smartbanner-button"><span class="smartbanner-button-text">' + this.options.button + "</span></a></div>";
            f.inner;
            if (l.body) {
                this.options.position == "top" ? document.body.insertBefore(f, document.body.childNodes[0]) : l.body.appendChild(f)
            } else {
                l && l.addEventListener("DOMContentLoaded", function() {
                    this.options.position == "top" ? document.body.insertBefore(f, document.body.childNodes[0]) : l.body.appendChild(f)
                })
            }
            k(".smartbanner-button", f).addEventListener("click", this.install.bind(this), !1);
            k(".smartbanner-close", f).addEventListener("click", this.close.bind(this), !1)
        }
    })
};