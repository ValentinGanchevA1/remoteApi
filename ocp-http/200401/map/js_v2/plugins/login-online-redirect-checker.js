define("plugins/login-online-redirect-checker", ["require", "adapter/dom", "common/basePlugin", "adapter/jsClass", "adapter/enumerable"], function(e) {
    var t = e("adapter/dom"),
        n = e("common/basePlugin"),
        r = e("adapter/jsClass"),
        i = e("adapter/enumerable"),
        s = r.Class(n, {
            constructor: function(e, n, r, o) {
                var u = {
                    ecareOnlineActionUrl: "http://orange.pl/"
                };
                this.settings = i.defaults(o, u), s.$super.call(this, e, n, r, o), this.context = t.find("#" + e), this.loginBtn = t.find("#login-box__button"), this.init()
            },
            init: function() {
                var e = document.getElementById("login-field");
                e.removeAttribute("disabled"), t.on(this.context, "submit", this.checkLogin.bind(this))
            },
            checkLogin: function(e) {
                e.preventDefault();
                var n = document.getElementById("login-box-form"),
                    r = document.getElementById("login-field").value,
                    i = document.getElementById("login-box__button");
                this.isEmail(r) ? (n.setAttribute("action", this.settings.ecareOnlineActionUrl), n.submit(), i.setAttribute("disabled", "disabled"), t.addClass(this.loginBtn, "login-box__btn--disabled")) : r != "" && (n.submit(), i.setAttribute("disabled", "disabled"), t.addClass(this.loginBtn, "login-box__btn--disabled"))
            },
            isEmail: function(e) {
                var t = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return t.test(e)
            }
        });
    return s
});