Event.observe(window, "beforeunload", function() {
    $$("select option").each(function(a, b) {
        a.remove()
    })
});

function setContactDropdown(a) {
    $$("#titleSelect option").each(function(b, c) {
        if (b.value == a) {
            $("titleSelect").selectedIndex = c
        }
    })
}

function setContactCancel() {
    if ($("contact-cancel")) {
        $("contact-cancel").observe("click", function(a) {
            $("contact-form-link").show();
            $("contact-form-box").hide();
            $("contact-form-box").addClassName("custom-select-hide")
        })
    }
}

function addContactShowLink() {
    $("contact-form-link").observe("click", function(a) {
        this.hide();
        $("contact-form-box").show();
        $("contact-form-box").removeClassName("custom-select-hide");
        Event.stop(a)
    })
}

function prepareProducerChooserForm() {
    var a = $("terminal-chooser");
    if (a) {
        a.addClassName("js-hide-selects")
    }
    var b = $("producer-chooser-form");
    if (b) {
        PTK.Autocompleter.replaceSelects($$("#producer-chooser-form #producer-select"), {
            width: "200px",
            onChange: executeProducerRequest
        });
        PTK.Autocompleter.replaceSelects($$("#producer-chooser-form #terminal-select"), {
            width: "200px",
            onChange: executePhoneRequest
        })
    }
}

function executeProducerRequest() {
    var a = $("producer-chooser-form");
    if (a) {
        PTK.Ajax.createCover("terminal-chooser");
        PTK.Ajax.submitForm(a)
    }
}

function showSearchContainer() {
    var a = $("search-terminal");
    if (a && a.hasClassName("phone-filter")) {
        a.removeClassName("ptk-show-hide-hidden")
    }
}

function executePhoneRequest() {
    var b = $("terminal-chooser-form") || $("terminal-chooser-form-phone-details"),
        a = $("terminal-select"),
        c = $("selectedTerminalHidden");
    if (b && c && a && a.options.selectedIndex) {
        c.value = a.options[a.options.selectedIndex].value;
        var d = "false";
        if (Prototype.Browser.IE) {
            d = this.getAttribute("data-disable-autosubmit")
        } else {
            d = a.dataset.disableAutosubmit
        }
        if (d != "true") {
            PTK.Ajax.createCover("terminal-chooser");
            b.submit()
        }
    }
}

function clearSite() {
    var a = $("terminal-chooser");
    if (a) {
        (a.siblings()).each(function(b) {
            b.remove()
        })
    }
}

function setMenuClickSelection(a) {
    $$(a).each(function(c, b) {
        c.observe("click", function(d) {
            var e = this.up("ul").down(".selected");
            if (e) {
                e.removeClassName("selected")
            }
            this.up("li").addClassName("selected")
        })
    })
}

function textAreaMaxLength(g, a, d) {
    var f = $(g);
    var c = $(a);
    var k = f.value;
    var h = f.value.length;
    var j = 0;
    var b = 0;
    for (i = 0; i < h; i++) {
        if (k.charAt(i) == "\n") {
            j++;
            b++;
            if (navigator.appName != "Netscape") {
                i++
            }
        }
        j++
    }
    var e = d - j;
    if (e < 0) {
        e = 0
    }
    c.update(e);
    if (j > d) {
        if (navigator.appName != "Netscape") {
            f.value = f.value.substring(0, d)
        } else {
            f.value = f.value.substring(0, d - b)
        }
        c.value = 30 - d;
        alert("Maksymalna długość to " + d + "!")
    }
}

function filterServices(b, a) {
    submitParentForm(b, a)
}

function replaceSelectsWithFormSubmit(a) {
    PTK.CustomForms.replaceSelects(a, {
        onChange: submitParentForm
    })
}

function submitParentForm(b, a) {
    PTK.Ajax.submitForm(a.up("form").id)
}

function setPhoneInfoTabs() {
    $$(".phone-information-category li a").each(function(a, b) {
        a.observe("click", function(c) {
            var f = $$(".phone-information-category li.active"),
                h = $$(".phone-information-content li.active"),
                k = this.siblings("ul"),
                l = this.up("ul").up("li");
            if (f.length) {
                f[0].removeClassName("active");
                var j = f[0].up("li");
                if (j) {
                    j.removeClassName("on")
                }
            }
            if (h) {
                h[0].removeClassName("active")
            }
            if (l) {
                l.addClassName("on")
            }
            if (k.length) {
                this.up("li").addClassName("on");
                var d = k[0].select("li a");
                if (d.length) {
                    d[0].up("li").addClassName("active");
                    var e = d[0].id.slice(14),
                        g = $("category-" + e)
                }
            } else {
                var e = this.id.slice(14),
                    g = $("category-" + e);
                this.up("li").addClassName("active")
            }
            g.addClassName("active");
            Event.stop(c)
        })
    })
}

function disableButton(c) {
    var a = $(c);
    if (a) {
        var b = a.next();
        if (b) {
            b.remove()
        }
    }
}

function initPhoneSlider() {
    var g = $("slider-container"),
        e = 0,
        b = $("slider"),
        d = $("trigger"),
        h = $("slider-track"),
        j = 0,
        k = 0;
    if (g) {
        e = g.getDimensions().width
    }
    if (b && d && g && h) {
        var a = b.select("li"),
            c = 0;
        if (a.length) {
            j = a[0].getDimensions().width;
            c = ((a.length * j) / e);
            if (Math.floor(c) < c) {
                c = Math.floor(c) + 1
            } else {
                c = Math.floor(c)
            }
            d.setStyle({
                width: (h.getDimensions().width / c) + "px"
            });
            k = a.length * j;
            if (a.length > 5) {
                h.removeClassName("ptk-hidden");
                var f = new Control.Slider("trigger", "slider-track", {
                    range: 0,
                    sliderValue: 0,
                    startSpan: "webtv-slider-span",
                    onSlide: function(l) {
                        var m = -1 * l * (k - e) + 3;
                        b.setStyle({
                            left: m + "px"
                        })
                    },
                    onChange: function(l) {
                        var m = -1 * l * (k - e) + 3;
                        b.setStyle({
                            left: m + "px"
                        })
                    }
                })
            }
        }
    }
}

function addEpropositionPopup(c, b, e, f) {
    var d = $$("a");
    var a = $("help-article-bookmark");
    if (a) {
        if (!a.getStorage().toObject().prototype_event_registry) {
            a.observe("ptk:ajax:after", function(g) {
                addEpropositionPopup(c, b, e, f)
            })
        }
    }
    d.each(function(g) {
        g.identify();
        var j = g.href.toQueryParams();
        if (("popup" in j)) {
            if (j.popup === "true") {
                var h = "";
                for (el in j) {
                    if (j[el] !== undefined) {
                        h += "&" + el + "=" + j[el]
                    }
                }
                h += "&pathParam=" + g.pathname;
                PTK.Ajax.ajaxifyLinks("'" + g.id + "':{a:'" + c + "?toGet=" + b + h + "&toUpdate=" + g.id + "-popup',c:PTK.Ajax.popupCallback, pc:'" + e + "', uurl:'" + f + "'}")
            }
        }
    })
}

function esupportChangeScreen() {
    if ($("changed-screens") != undefined) {
        oldHeight = "0";
        time = "0.5";
        $("changed-screens").removeClassName("no-js");
        $("changed-screens").down(0).insert({
            before: "<div id='first-change-screen' class='screen'><div class='center-container nowrap'></div></div>"
        });
        $("first-change-screen").down(".center-container.nowrap").insert($$(".help-box")[0]);
        $("first-change-screen").down(".center-container.nowrap").insert($$(".plain-html-wrapper.article.article-without-layout")[0]);
        $("first-change-screen").insert({
            after: "<div id='second-change-screen' class='screen'><div class='center-container nowrap'></div></div>"
        });
        $("second-change-screen").down(".center-container.nowrap").insert($$("#visual-container")[0]);
        $("second-change-screen").down(".center-container.nowrap").insert($$(".plain-html-wrapper.article.article-without-layout")[1]);
        windowSize = document.viewport.getDimensions();
        $("second-change-screen").setStyle({
            left: windowSize.width + "px"
        });
        $("changed-screens").on("click", "a.ptk-btn.grey", function(b, a) {
            b.preventDefault();
            windowSize = document.viewport.getDimensions();
            elAttr = a.up(".screen").readAttribute("id");
            el = a.up("#" + elAttr);
            elParent = this;
            elParentAttr = elParent.readAttribute("id");
            elParent.up(".f-section").setStyle({
                overflowX: "hidden"
            });
            if (elAttr == "first-change-screen") {
                elOther = a.up("#" + elParentAttr).down("#second-change-screen");
                hideSite = "-"
            }
            if (elAttr == "second-change-screen") {
                elOther = a.up("#" + elParentAttr).down("#first-change-screen");
                hideSite = "+"
            }
            elOtherHeight = elOther.getHeight();
            if (elOtherHeight >= oldHeight) {
                elParent.setStyle({
                    minHeight: elOtherHeight + "px"
                })
            }
            el.setStyle({
                width: windowSize.width + "px"
            });
            elOther.setStyle({
                width: windowSize.width + "px",
                right: hideSite + windowSize.width + "px",
                display: "block"
            });
            new Effect.Move(el, {
                x: hideSite + windowSize.width,
                y: 0,
                duration: time,
                mode: "absolute"
            });
            new Effect.Move(elOther, {
                x: 0,
                y: 0,
                mode: "absolute",
                duration: time,
                afterFinish: function() {
                    if (elOtherHeight < oldHeight) {
                        elParent.setStyle({
                            minHeight: elOtherHeight + "px"
                        })
                    }
                    elParent.up(".f-section").setStyle({
                        overflowX: "inherit"
                    });
                    oldHeight = elOtherHeight;
                    el.setStyle({
                        position: "absolute",
                        display: "none"
                    });
                    elOther.setStyle({
                        position: "relative"
                    })
                }
            })
        })
    }
}

function automaticSetToggle(c, a) {
    if (a.hasClassName("checked")) {
        if ($$("#phoneChangeSelects").length) {
            var d = $$("#phoneChangeSelects select");
            d.each(function(f) {
                $(f).writeAttribute("disabled", "disabled")
            });
            var b = $$("#phoneChangeSelects .autocompleter-input");
            b.each(function(f) {
                $(f).addClassName("autocompleter-input-disabled").writeAttribute("disabled", "disabled")
            })
        }
        $("automatic-set-phone-checkbox-hidden").setValue("on")
    } else {
        if ($$("#phoneChangeSelects").length) {
            var b = $$("#phoneChangeSelects .autocompleter-input");
            var d = $$("#phoneChangeSelects select");
            if (b[0].getValue() != "Wybierz producenta") {
                d.each(function(f) {
                    $(f).writeAttribute("disabled", null)
                });
                b.each(function(f) {
                    $(f).removeClassName("autocompleter-input-disabled").writeAttribute("disabled", null)
                })
            } else {
                d[0].writeAttribute("disabled", null);
                b[0].writeAttribute("disabled", null).removeClassName("autocompleter-input-disabled")
            }
        }
        $("automatic-set-phone-checkbox-hidden").setValue("off")
    }
};