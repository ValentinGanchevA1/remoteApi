define("plugins/app-banner", ["require", "common/basePlugin", "adapter/jsClass", "adapter/enumerable", "lib/plugins/smart-app-banner"], function(e) {
    var t = e("common/basePlugin"),
        n = e("adapter/jsClass"),
        r = e("adapter/enumerable"),
        i = e("lib/plugins/smart-app-banner");
    return AppBanner = n.Class(t, {
        constructor: function(e, t, n, i) {
            var s = {
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
                position: "top",
                meta: {
                    ios: "588720962",
                    android: "pl.orange.mojeorange",
                    windows: "9wzdncrdqw2f"
                }
            };
            this.options = r.defaults(i, s), this.modId = e, this.context = dom.find("#" + this.modId), this.options.elementId = e, AppBanner.$super.call(this, e, t, n, i), this.context.length > 0 && this.init()
        },
        init: function() {
            this.addMetaTag(), i.prototype.create = this.create, this.banner = new i(this.options)
        },
        addMetaTag: function() {
            var e = dom.find("head")[0];
            dom.append(e, '<meta name="apple-itunes-app" content="app-id=' + this.options.meta.ios + '">'), dom.append(e, '<meta name="google-play-app" content="app-id=' + this.options.meta.android + '">'), dom.append(e, '<meta name="msApplication-ID" content="' + this.options.meta.windows + '">'), dom.append(e, '<meta name="msApplication-PackageFamilyName" content="microsoft.build_8wekyb3d8bbwe">')
        },
        create: function() {
            var e = function(e, t) {
                    return t.querySelector(e)
                },
                t = function(t, n) {
                    return n = n || document, e(t, n)
                },
                n = document;
            for (var r = this.getStoreLink(), i = this.options.price[this.type] + " - " + this.options.store[this.type], s, o = 0; o < this.iconRels.length; o++) {
                var u = t('link[rel="' + this.iconRels[o] + '"]');
                if (u) {
                    s = u.getAttribute("href");
                    break
                }
            }
            var a = dom.find("#" + this.options.elementId)[0];
            a.className = "smartbanner smartbanner-" + this.type, a.innerHTML = '<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon"></span><div class="smartbanner-info"><div class="smartbanner-title">' + this.options.title + "</div>" + "<div>" + this.options.author + "</div>" + "<span>" + i + "</span>" + "</div>" + '<a href="' + r + '" class="smartbanner-button">' + '<span class="smartbanner-button-text">' + this.options.button + "</span>" + "</a>" + "</div>", n.body ? this.options.position == "top" ? document.body.insertBefore(a, document.body.childNodes[0]) : n.body.appendChild(a) : n && n.addEventListener("DOMContentLoaded", function() {
                this.options.position == "top" ? document.body.insertBefore(a, document.body.childNodes[0]) : n.body.appendChild(a)
            }), t(".smartbanner-button", a).addEventListener("click", this.install.bind(this), !1), t(".smartbanner-close", a).addEventListener("click", this.close.bind(this), !1)
        }
    }), AppBanner
});