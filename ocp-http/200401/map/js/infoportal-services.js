function onServicePopupOpen(e) {
    if ($("services-section")) {
        if (!($("services-section-place"))) {
            $("services-section").wrap("div", {
                id: "services-section-place",
                style: ("height:" + $("services-section").getHeight() + "px")
            })
        }
        var a = $("services-section").cumulativeOffset().left;
        var f = $("services-section").cumulativeOffset().top;
        if (!($("services-popup-menu"))) {
            $("services-popup").insert({
                after: '<div id="services-popup-menu"></div>'
            });
            $("services-popup-menu").insert($("services-section"));
            $("services-popup-menu").setStyle({
                left: a + "px",
                top: f + "px"
            })
        }
        var d = f - 16;
        if ($$("#services-section ul li.selected").length > 0) {
            d = $$("#services-section ul li.selected")[0].cumulativeOffset().top;
            d -= 16
        }
        $("services-popup").setStyle({
            top: d + "px"
        });
        positionPopup()
    }
    var b = $(e);
    if (b) {
        Event.observe(b, "click", onCloseServicesPopup)
    }
    var c = $("services-popup-curtain-proxy");
    if (c) {
        c.remove()
    }
    var h = new Element("div", {
        id: "services-popup-curtain-proxy"
    });
    h.clonePosition($("services-popup-curtain"));
    var g = $$("body")[0].insert(h);
    h.setStyle({
        zIndex: "55",
        position: "absolute"
    });
    Event.observe(h, "click", onCloseServicesPopup)
}

function removeSelection() {
    var a = $$("#services-section ul li.selected");
    if (a && a.length > 0) {
        a[0].removeClassName("selected")
    }
}

function onCloseServicesPopup(a) {
    if ($("services-section-place")) {
        $("services-section-place").replace($("services-section"));
        $("services-popup-menu").remove()
    }
    removeSelection();
    $("quick-view-close").remove();
    $("services-popup-curtain-proxy").remove();
    PTK.Ajax.popupClose("services-popup");
    Event.stop(a)
}

function positionPopup() {
    var i = $$("#services-popup .services-inner")[0];
    var c = $$("#services-popup .services-box")[0];
    var d = $$("#services-popup .services-content")[0];
    var h = $$("#services-popup .close")[0];
    var a = document.viewport.getHeight();
    var g = d.viewportOffset().top;
    var e = i.getHeight();
    var f = 0;
    if (e < a) {
        f = a - e
    }
    var b = f / 2 - g;
    b = Math.min(b, 0);
    b = Math.max(b, -e + 50);
    $(h).setStyle({
        marginTop: b + "px"
    });
    $(c).setStyle({
        marginTop: b + "px"
    })
}

function initServicesMenu() {
    if ($("left-region") && $("right-region")) {
        $("right-region").style.zIndex = "1";
        $("left-region").style.zIndex = "2"
    }
    if ($("services-section")) {
        $$("#services-section .nav-services li a.quick-view").each(function(a, b) {
            a.observe("click", onServiceQuickView)
        })
    }
}

function onServiceQuickView(a) {
    removeSelection();
    this.up("li").addClassName("selected");
    if ($("quick-view-close")) {
        $("quick-view-close").remove()
    }
    this.insert({
        after: '<a id="quick-view-close" href="#"></a>'
    });
    $("quick-view-close").observe("click", onCloseServicesPopup)
}

function getFrameContents(c) {
    var a = document.getElementById(c);
    var b;
    if (a.contentDocument) {
        b = a.contentDocument.getElementsByTagName("body")[0]
    } else {
        if (a.contentWindow) {
            b = a.contentWindow.document.getElementsByTagName("body")[0]
        }
    }
    return b
}
var PTK;
if (typeof PTK === "undefined") {
    PTK = {}
}
if (typeof PTK.Infoportal === "undefined") {
    PTK.Infoportal = {}
}
PTK.Infoportal.SmsSender = {
    defaultPhoneHint: "Wpisz numer telefonu",
    init: function() {
        var a = this;
        var b = $$(".orange-form-sms");
        if (!b.length) {
            return
        }
        b.each(function(e, d) {
            var c = e.select(".sms-phone").first();
            e.observe("submit", a.submitSmsForm.bindAsEventListener(e));
            c.observe("focus", a.clearInput.bind(c));
            c.observe("blur", a.fillInput.bind(c));
            a.fillInput.bind(c)()
        })
    },
    sendSms: function(d) {
        var a = d.select(".sms-phone").first().value;
        var e = d.select(".sms-message").first();
        var c = e ? e.value : "";
        var b = this;
        new Ajax.Request("/gear/commerce/ajax", {
            method: "post",
            parameters: {
                c: "AjaxSmsSender",
                m: "sendSms",
                p: '{"p1":"' + c + '","p2":"' + escape(a) + '"}'
            },
            onSuccess: function(f) {
                b.ajaxCallback(f, d)
            }
        })
    },
    ajaxCallback: function(d, b) {
        var a = d.responseText.evalJSON(true);
        if (a.result == "failure") {
            this.showError(a.message, b)
        } else {
            if (a.result == "success") {
                var c = b;
                if (c) {}
                c = b.select(".sms-inputs").first();
                if (c) {
                    c.hide()
                }
                c = b.select(".sms-success").first();
                if (c) {
                    c.style.display = "block"
                }
            } else {
                this.showError("internal_error")
            }
        }
    },
    fillInput: function() {
        var a = this;
        if (a) {
            if (a.value == "") {
                a.value = a.title;
                a.addClassName("default-value")
            }
        }
    },
    clearInput: function() {
        var a = this;
        if (a.value == a.title) {
            a.value = "";
            a.removeClassName("default-value")
        }
    },
    checkSmsForm: function(a) {
        var c = true;
        var b = a.select(".sms-phone").first();
        if (b) {
            if (b.value == "" || b.value == b.title) {
                this.showError("empty_phone", a);
                c = false
            } else {
                if (b.value.length != 9) {
                    this.showError("bad_phone", a);
                    c = false
                } else {
                    if (!this.isNumeric(b.value)) {
                        this.showError("bad_phone", a);
                        c = false
                    }
                }
            }
        }
        return c
    },
    isNumeric: function(a) {
        return (a - 0) == a && a.length > 0
    },
    showError: function(a, c) {
        var b = c.select(".sms-phone").first();
        if (a == "empty_phone") {
            var d = c.select(".sms-empty-phone").first();
            if (d) {
                d.removeClassName("ptk-hidden")
            }
            b.addClassName("error")
        } else {
            if (a == "bad_phone") {
                var d = c.select(".sms-bad-phone").first();
                if (d) {
                    d.removeClassName("ptk-hidden")
                }
                b.addClassName("error")
            } else {
                var d = c.select(".sms-internal-error").first();
                if (d) {
                    d.removeClassName("ptk-hidden")
                }
            }
        }
    },
    cleanErrors: function(a) {
        var c = a.select(".sms-errors .err");
        c.each(function(e, d) {
            e.addClassName("ptk-hidden")
        });
        var b = a.select(".sms-phone").first();
        if (b) {
            b.removeClassName("error")
        }
    },
    submitSmsForm: function(c) {
        var b = Event.element(c);
        Event.stop(c);
        var a = PTK.Infoportal.SmsSender;
        a.cleanErrors(b);
        if (a.checkSmsForm(b)) {
            a.sendSms(b)
        }
    }
};