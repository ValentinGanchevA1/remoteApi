define("plugins/password-strength", ["require", "adapter/dom", "common/basePlugin", "adapter/jsClass", "adapter/enumerable"], function(e) {
    var t = e("adapter/dom"),
        n = e("common/basePlugin"),
        r = e("adapter/jsClass"),
        i = e("adapter/enumerable"),
        s = r.Class(n, {
            constructor: function(e, n, r, o) {
                var u = {
                    passClass: "pass-strength",
                    parentClass: ".f-row",
                    messages: ["", "słabe", "średnie", "silne", "bardzo silne"],
                    minchar: [8, 10],
                    showBars: !1
                };
                this.field = t.find("#" + e)[0], this.settings = i.defaults(o, u), s.$super.call(this, e, n, r, o), this.init()
            },
            init: function() {
                this.parent = t.parent(this.field, this.settings.parentClass);
                var e = this.createPassCheck(this.field);
                return this.passchecklist = t.find("." + this.settings.passClass + "-list", e), this.passchecktext = t.find("." + this.settings.passClass + "-msg", e), this.checkUserPasswordStrength(), t.on(this.field, "keyup", null, null, this.checkUserPasswordStrength.bind(this)), !0
            },
            createPassCheck: function(e) {
                var n = "";
                this.settings.showBars && (n = '<ul><li class="pass-strength-field-1"></li><li class="pass-strength-field-2"></li><li class="pass-strength-field-3"></li><li class="pass-strength-field-4 last"></li></ul>');
                var r = '<div class="' + this.settings.passClass + '"><strong>siła hasła:</strong><span><span class="' + this.settings.passClass + '-list">' + n + '</span><span class="' + this.settings.passClass + '-msg"></span></span></div>';
                return t.append(this.parent, r), t.find("." + this.settings.passClass, this.parent)
            },
            checkUserPasswordStrength: function() {
                var e = this.getPasswordScore(this.field.value);
                this.displayPasswordStrengthFeedback(e)
            },
            displayPasswordStrengthFeedback: function(e) {
                this.passchecktext[0].innerHTML = this.settings.messages[e], this.passchecktext[0].className = this.settings.passClass + "-msg " + this.settings.passClass + "-" + e, this.passchecklist[0].className = this.settings.passClass + "-list " + this.settings.passClass + "-" + e
            },
            getPasswordScore: function(e) {
                var t = 0;
                if (e.length == 0) t = 0;
                else {
                    if (e.match(/[a-z]/) || e.match(/[0-9]/)) t = 1;
                    e.match(/([a-z])/) && e.match(/([0-9])/) && e.length > this.settings.minchar[0] - 1 && (t = 2), e.match(/([a-z])/) && e.match(/([0-9])/) && e.match(/([A-Z])/) && e.length > this.settings.minchar[1] - 1 && (t = 3), e.match(/([a-z])/) && e.match(/([0-9])/) && e.match(/([A-Z])/) && e.match(/.[!,@,#,$,%,^,&,*,?,_,~]/) && e.length > this.settings.minchar[1] - 1 && (t = 4)
                }
                return t
            }
        });
    return s
});