define("plugins/disable-field-check", ["require", "adapter/dom", "common/basePlugin", "jq", "adapter/jsClass", "adapter/enumerable"], function(e) {
    var t = e("adapter/dom"),
        n = e("common/basePlugin"),
        r = e("jq"),
        i = e("adapter/jsClass"),
        s = e("adapter/enumerable"),
        o = i.Class(n, {
            constructor: function(e, n, r, i) {
                var u = {
                    elementsClass: "field-check",
                    fieldSelector: "input, select, textarea",
                    errorClass: "error",
                    errorMsgSelector: ".b-v-error",
                    disableOnStart: "#client, #notclient",
                    notChangeState: ""
                };
                this.context = t.find("#" + e), this.settings = s.defaults(i, u), o.$super.call(this, e, n, r, i), this.init()
            },
            init: function() {
                this.elements = t.find("." + this.settings.elementsClass, this.context), this.onInit(), this.initObserver()
            },
            initObserver: function() {
                t.on(this.elements, "change", null, null, this.handleInputEvent.bind(this))
            },
            onInit: function() {
                s.each(this.elements, function(e, t) {
                    (e.tagName.toLowerCase() == "input" && e.type == "checkbox" || !e.disabled) && this.modifySection(e, !0)
                }, this)
            },
            findElementsInElement: function(e, n) {
                var i = t.find("." + this.settings.elementsClass, e);
                i.length > 0 && s.each(i, function(e, i) {
                    if (!n) {
                        var s = t.identify(e);
                        if (this.settings.notChangeState.indexOf(s + ";") == -1) {
                            e.tagName.toLowerCase() == "input" && e.type == "checkbox" && e.checked == 1 && (e.checked = !1);
                            if (e.tagName.toLowerCase() == "select") {
                                e.selectedIndex = 0;
                                if (t.hasClass(e, "selectboxit-select")) {
                                    var o = r(e).data("selectBox-selectBoxIt");
                                    o.setOption(0)
                                }
                            }
                        }
                    }
                    var u = e.disabled;
                    e.tagName.toLowerCase() == "option" && (u = t.parent(e)[0].disabled), u || this.modifySection(e, n)
                }, this)
            },
            handleInputEvent: function(e) {
                this.modifySection(e.currentTarget, !1)
            },
            modifySection: function(e, n) {
                if (e.tagName.toLowerCase() == "select") {
                    var r = t.find("option", e);
                    e = r[e.selectedIndex]
                }
                var i = !1,
                    o = !1,
                    u = !1,
                    a = !1;
                e.tagName.toLowerCase() == "label" && (i = t.find("input", e)[0].checked), e.tagName.toLowerCase() == "input" && (i = e.checked), t.getAttribute(e, "type") == "checkbox" && (t.getData(e, "hide") === t.getData(e, "show") && e.tagName && (o = !0), t.hasClass(e, "field-check-always") && (a = !0)), this.settings.disableOnStart && n && s.each(t.find(this.settings.disableOnStart, this.context), function(e, n) {
                    var r = t.find(t.getData(e, "hide"), this.context);
                    if (r.length > 0) {
                        elemID = t.getAttribute(r, "id");
                        var i, s, o, u = t.find("[data-show]:checked");
                        for (var n = 0; n < u.length; ++n) {
                            o = u[n], i = o.getAttribute("data-show");
                            if (i) {
                                showIdsArr = i.split(",");
                                for (var a = 0; a < showIdsArr.length; ++a)
                                    if (showIdsArr[a].trim() == "#" + elemID) {
                                        s = !0;
                                        break
                                    }
                                if (s) break
                            }
                        }
                        s ? t.trigger(o, "change") : t.hide(r, !1)
                    }
                });
                if ((t.getData(e, "hide") || t.getData(e, "show")) && (r && r.length || i || o || a)) {
                    var f = t.find(t.getData(e, "hide"), this.context);
                    f.length > 0 && this.hideCondition(e) && (this.toggle(e, f, !0), this.findElementsInElement(f, n));
                    if (r && r.length) {
                        var l = "",
                            c = "";
                        s.each(r, function(n) {
                            n !== e && (c = t.getData(n, "show"), l.indexOf(c) == -1 && c != h && (l += c ? c + "," : ""))
                        }), l !== "" && (this.toggle(e, l.slice(0, -1), !0), this.findElementsInElement(l.slice(0, -1), n))
                    }
                    var h = t.getData(e, "show"),
                        p = t.find(h, this.context);
                    p.length > 0 && this.showCondition(e) && this.toggle(e, p, !1), this.publish("diablefieldcheck:sectionmodified")
                }
            },
            showCondition: function(e) {
                return !0
            },
            hideCondition: function(e) {
                return !0
            },
            toggle: function(e, n, r) {
                var i = t.filter(n, ".js-hidden, .g-hide");
                if (i.length > 0 && (e.type !== "radio" || e.type !== "checkbox") || i.length > 0 && e.checked !== !1) t.hide(i), t.removeClass(i, "js-hidden"), t.removeClass(i, "g-hide");
                var o = t.filter(n, ".js-visible");
                o.length > 0 && t.removeClass(o, "js-visible");
                if (e.type != "radio" || e.checked != 0) {
                    e.tagName.toLowerCase() == "input" && e.checked == 0 && (r = !r);
                    var u = t.find(this.settings.fieldSelector, n),
                        a = t.filter(u, function() {
                            return t.getData(this, "disabled") == undefined || t.getData(this, "disabled") != !r
                        });
                    if (r) {
                        t.hide(n), t.hasClass(e, "field-check-always") && t.setProperty(n, "disabled", !0), t.removeClass(u, this.settings.errorClass), t.removeClass(t.find(this.settings.errorMsgSelector, n), "visible");
                        var f = t.filter(u, "select");
                        s.each(f, function(e) {
                            this.disableSelect(e)
                        }, this);
                        var l = t.filter(n, "select");
                        s.each(l, function(e) {
                            this.disableSelect(e)
                        }, this)
                    } else {
                        t.show(n), t.hasClass(e, "field-check-always") && t.setProperty(n, "disabled", !1);
                        var l = t.filter(n, "select");
                        l.length > 0 && s.each(l, function(e) {
                            this.enableSelect(e)
                        }, this);
                        var f = t.filter(u, "select");
                        f.length > 0 && s.each(f, function(e) {
                            this.enableSelect(e)
                        }, this)
                    }
                }
            },
            enableSelect: function(e) {
                var n = t.isVisible(e);
                if (t.hasClass(e, "selectboxit-select")) {
                    var i = r(e).data("selectBox-selectBoxIt");
                    n = i.dropdownContainer && t.isVisible(i.dropdownContainer) ? !0 : !1, n && i.enable()
                }
                n && this.modifySection(e)
            },
            disableSelect: function(e) {
                if (t.hasClass(e, "selectboxit-select")) {
                    var n = r(e).data("selectBox-selectBoxIt");
                    n.disable()
                }
            }
        });
    return o
});