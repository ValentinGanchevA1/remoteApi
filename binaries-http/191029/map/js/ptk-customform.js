var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.CustomForms == "undefined") {
    PTK.CustomForms = {
        observers: {},
        lastEvent: null,
        replaceCheckboxes: function(a, e) {
            if (!a) {
                return
            }
            var j = this;
            var a = a;
            this.replaceCheckboxes.selected = new Object();
            if (a.id) {
                a = $$("#" + a.id)
            }
            var b = e || {};
            b.className = b.className || "ptk-checkbox";
            b.display = b.display || "inline";
            b.onChange = b.onChange || function() {};
            a.each(function(m, l) {
                if (m.type == "radio" || m.type == "checkbox") {
                    var k = $$("label[for=" + m.id + "]")[0];
                    k.writeAttribute({
                        id: "ptk-checkbox-label-" + m.id
                    });
                    var n = k.id;
                    k.addClassName(b.className + " ptk-" + m.type + " " + b.display);
                    if (k.down("span.ptk-checkbox-wrapper")) {
                        return
                    }
                    k.insert({
                        top: '<span class="ptk-checkbox-wrapper"><span class="ptk-checkbox-holder"></span></span>'
                    });
                    if (m.checked) {
                        k.addClassName("checked");
                        j.replaceCheckboxes.selected = m
                    }
                    m.addClassName("ptk-hidden-checkbox");
                    if (m.disabled) {
                        if (m.checked) {
                            k.addClassName("ptk-checkbox-checked-disabled")
                        } else {
                            k.addClassName("ptk-checkbox-disabled")
                        }
                        return
                    }
                    j.observers[n] = new Object();
                    j.observers[m.id] = new Object();
                    j.observers[n].click = f.bindAsEventListener(k);
                    j.observers[n].mousedown = d.bindAsEventListener(k);
                    j.observers[m.id].keyup = i.bindAsEventListener(k);
                    j.observers[m.id].keypress = c.bindAsEventListener(m);
                    j.observers[m.id].focus = g.bindAsEventListener(m);
                    j.observers[m.id].blur = h.bindAsEventListener(m);
                    Event.observe(k, "click", j.observers[n].click);
                    Event.observe(k, "custom:click", j.observers[n].click);
                    Event.observe(k, "mousedown", j.observers[n].mousedown);
                    Event.observe(m, "keyup", j.observers[m.id].keyup);
                    Event.observe(m, "keypress", j.observers[m.id].keypress);
                    Event.observe(m, "focus", j.observers[m.id].focus);
                    Event.observe(m, "blur", j.observers[m.id].blur)
                }
            });

            function g(l) {
                var k = l.findElement("label");
                if (PTK.CustomForms.lastEvent == "keypress") {
                    k.addClassName("ptk-el-focused")
                }
                PTK.CustomForms.lastEvent = "keypress"
            }

            function h(l) {
                var k = Event.element(l);
                k.up("label").removeClassName("ptk-el-focused").removeClassName("ptk-checkbox-clicked")
            }

            function d(k) {
                PTK.CustomForms.lastEvent = null
            }

            function c(k) {
                PTK.CustomForms.lastEvent = "keypress"
            }

            function i(k) {
                if ((k.keyCode || k.which) === 32) {
                    f.bindAsEventListener(this)(k)
                }
            }

            function f(n) {
                if (!(n.findElement().tagName.toLowerCase() == "input" && n.type == "click")) {
                    var m = this;
                    (n.type == "click") ? m.addClassName("ptk-checkbox-clicked"): m.removeClassName("ptk-checkbox-clicked");
                    if (Event.element(n).tagName.toLowerCase() != "a") {
                        Event.stop(n)
                    }
                    var k = $(m.readAttribute("for"));
                    if (k.disabled) {
                        return
                    }
                    k.focus();
                    var l = false;
                    if (k.type == "radio") {
                        l = m.hasClassName("checked");
                        a.each(function(p) {
                            if (p.type == "radio" && p.name == k.name) {
                                p.checked = false;
                                var o = $$("label[for=" + p.id + "]")[0];
                                if (o) {
                                    o.removeClassName("checked")
                                }
                            }
                        })
                    }
                    if (n.target.nodeName !== "a".toUpperCase()) {
                        m.toggleClassName("checked");
                        if ((k.checked == false)) {
                            k.checked = true
                        } else {
                            k.checked = false
                        }
                        j.replaceCheckboxes.selected = k;
                        if (k.type == "radio") {
                            if (!l) {
                                b.onChange(j.replaceCheckboxes, m, k)
                            }
                        } else {
                            b.onChange(j.replaceCheckboxes, m, k)
                        }
                        k.fire("ptk:customforms:change", {
                            input: k,
                            checked: k.checked,
                            element: m
                        })
                    }
                }
            }
        },
        destroyObserver: function(a) {
            if (!$(a)) {
                return
            }
            var b = this.observers[a];
            if (b.click) {
                Event.stopObserving(a, "click", b.click)
            }
            if (b.focus) {
                Event.stopObserving(a, "focus", b.focus)
            }
            if (b.blur) {
                Event.stopObserving(a, "blur", b.blur)
            }
            if (b.keyup) {
                Event.stopObserving(a, "keyup", b.keyup)
            }
            if (b.keypress) {
                Event.stopObserving(a, "keypress", b.keypress)
            }
            delete this.observers[a]
        },
        replaceSelects: function(d, a) {
            if (!d) {
                return
            }
            var c = this;
            var b = null;
            this.replaceSelects.selected = {};
            if (d.id) {
                d = $$("#" + d.id)
            }
            if (d.length <= 0) {
                return
            }
            this.replaceSelects.eachF = d.each(function(g, j) {
                if (g.nodeName == "SELECT" && !g.hasClassName("reader-only")) {
                    var e = a || {};
                    e.wrapperClass = e.wrapperClass || "ptk-selectbox-wrapper";
                    e.containerClass = e.containerClass || "ptk-selectbox-container";
                    e.inputClass = e.inputClass || "ptk-selectbox-clickable";
                    e.hoverClass = e.hoverClass || "ptk-selectbox-hovered-option";
                    e.currentClass = e.selectedClass || "ptk-selectbox-selected-option";
                    e.debug = e.debug || false;
                    e.maxElements = e.maxElements || 10;
                    e.onChange = e.onChange || function() {};
                    e.width = e.width || null;
                    e.addWidthValue = e.addWidthValue || 0;
                    e.cutValue = e.cutValue != null ? e.cutValue : true;
                    e.allowSelectedClick = e.allowSelectedClick != null ? e.allowSelectedClick : false;
                    e.maxTextLength = e.maxTextLength ? e.maxTextLength : null;
                    e.afterCreateSelect = e.afterCreateSelect || function() {};
                    e.isMobile = e.isMobile != null ? e.isMobile : false;
                    e.onListShowCallback = e.onListShowCallback || null;
                    e.onListHideCallback = e.onListHideCallback || null;
                    e.onShowCallbackOnlyForShow = e.onShowCallbackOnlyForShow || null;
                    e.isFilteredSelect = e.isFilteredSelect || false;
                    if (g.disabled) {
                        if (e.inputClass.indexOf("ptk-selectbox-disabled") == -1) {
                            e.inputClass += " ptk-selectbox-disabled"
                        }
                    } else {
                        e.inputClass = (e.inputClass).replace("ptk-selectbox-disabled", "")
                    }
                    var l = g.identify();
                    if (g.hasClassName("none")) {
                        if (window.console) {
                            console.warn("PTK.CustomForms - select nie moze byc ukryty")
                        }
                        return
                    }
                    var v = g;
                    var t = null;
                    var f = null;
                    var m = null;
                    var r = null;
                    var q = e;
                    if (!e.isMobile) {
                        c.afterCreateSelect[l] = e.afterCreateSelect;
                        var z;
                        var i = -1;
                        var y = 0;
                        b = null;
                        var o = false;
                        if (!e.isFilteredSelect) {
                            w(l, e)
                        } else {
                            u(l, e);
                            m = $(l + "_input_live");
                            f.observe("keypress", x);
                            r.on("mousedown", function(A) {
                                A.preventDefault()
                            })
                        }
                        z = t.style.zIndex;
                        s(e, z);
                        v.addClassName("reader-only").writeAttribute("tabindex", "-1");
                        (function() {
                            c.afterCreateSelect[l]()
                        }).defer()
                    } else {
                        if (!v.up(0).hasClassName("select-arrow")) {
                            var h = new Element("div", {
                                "class": "select-arrow"
                            });
                            v.wrap(h);
                            h.setStyle({
                                width: v.getWidth() + "px"
                            });
                            w(l, e);
                            s(e, z);
                            t.addClassName("reader-only");
                            v.onchange = n;
                            if (v.disabled) {
                                h.addClassName("select-arrow-disabled")
                            }
                        }
                    }
                }

                function x(A) {
                    var A = A || window.event;
                    if (A.keyCode == 13) {
                        A.preventDefault()
                    }
                }

                function w(B, A) {
                    var C = v.readAttribute("data-select-title");
                    v.insert({
                        before: new Template('<div id="#{id}_wrapper" class="#{wrapperClass}"><a id="#{id}_input" onmouseout="#{outEv}" onclick="#{clickEv}" class="#{clickClass}" title="#{title}" tabIndex="0"></a><div tabindex="1" onkeydown="#{containerKeyDown}" onmouseover="#{containerOver}" onmouseout="#{containerOut}" id="#{id}_container" class="#{containerClass}" data-keycount="0"></div></div>').evaluate({
                            id: B,
                            wrapperClass: A.wrapperClass,
                            clickClass: A.inputClass,
                            containerClass: A.containerClass,
                            clickEv: "PTK.CustomForms.selectOnClick('" + B + "', " + A.maxElements + ", " + 0 + ",'" + A.onListShowCallback + "','" + A.onShowCallbackOnlyForShow + "');",
                            outEv: "PTK.CustomForms.selectOnRollOut('" + B + "', " + 0 + ",'" + A.onListHideCallback + "');",
                            containerOut: "PTK.CustomForms.containerOnRollOut('" + B + "', " + 0 + ",'" + A.onListHideCallback + "');",
                            containerOver: "PTK.CustomForms.containerOnRollOover('" + B + "');",
                            containerKeyDown: "PTK.CustomForms.focusOnKeyDown(event,'" + B + "_container');",
                            title: (C) ? C : ""
                        })
                    });
                    t = $(B + "_wrapper");
                    f = $(B + "_input");
                    r = $(B + "_container")
                }

                function u(C, B) {
                    var E = v.readAttribute("data-select-title");
                    var A = (navigator.appVersion.indexOf("MSIE 8.") == -1) ? false : true;
                    var D = A ? "onpropertychange" : "oninput";
                    v.insert({
                        before: new Template('<div id="#{id}_wrapper" class="#{wrapperClass}"><a id="#{id}_input" onclick="#{clickEv}" class="#{clickClass}" title="#{title}" tabIndex="0"></a><input id="#{id}_input_live" onblur="#{blurEv}" #{inputEv} autocomplete="off" class="#{inputFilterClass}" data-title="#{title}" value="" style="display: none;" tabIndex="0"/><div tabindex="1" id="#{id}_container" class="#{containerClass}" data-keycount="0"></div></div>').evaluate({
                            id: C,
                            wrapperClass: B.wrapperClass,
                            clickClass: B.inputClass,
                            containerClass: B.containerClass,
                            inputFilterClass: "ptk-selectbox-filter-input",
                            clickEv: "PTK.CustomForms.expandOnClick('" + C + "', " + B.maxElements + ", " + 0 + ",'" + B.onListShowCallback + "','" + B.onShowCallbackOnlyForShow + "');",
                            blurEv: "PTK.CustomForms.filterOnBlur('" + C + "', " + 0 + ",'" + B.onListHideCallback + "');",
                            inputEv: D + "=\"PTK.CustomForms.filterOnInput(event,'" + C + "_container', " + B.maxElements + ');"',
                            title: (E) ? E : ""
                        })
                    });
                    t = $(C + "_wrapper");
                    f = $(C + "_input");
                    r = $(C + "_container")
                }

                function n(E, D) {
                    var B = E.findElement(),
                        F = $(B.id + "_wrapper"),
                        A = B.selectedIndex,
                        C = F.select("ul > li")[A];
                    q.onChange(c.replaceSelects, C, B);
                    B.fire("ptk:customforms:change", {
                        input: B,
                        checked: A,
                        element: F
                    })
                }

                function k() {
                    y = 0;
                    t.setStyle({
                        zIndex: z
                    });
                    r.hide()
                }

                function s(D, C) {
                    C = C || 0;
                    var F = t.getLayout();
                    var B = F.get("border-left") + F.get("border-right") + F.get("padding-left") + F.get("padding-right");
                    var E = D.width;
                    if (E == null) {
                        E = v.offsetWidth
                    }
                    E += D.addWidthValue;
                    var G = f.getLayout().get("border-left");
                    var H = f.getLayout().get("padding-right");
                    f.setStyle({
                        width: E - G - B + "px"
                    });
                    r.insert(p(l, D, C, E)).hide();
                    if (D.isFilteredSelect) {
                        if (m) {
                            m.setStyle({
                                width: E - G - H + "px"
                            })
                        }
                    }
                    var A = (navigator.appVersion.indexOf("MSIE 6.") == -1) ? false : true;
                    if (A) {
                        if (r.getDimensions().width < E) {
                            r.setStyle({
                                width: E - 2 * G + "px"
                            })
                        } else {
                            r.setStyle({
                                width: "auto"
                            })
                        }
                    } else {
                        r.setStyle({
                            minWidth: f.offsetWidth - 2 + "px"
                        })
                    }
                }

                function p(E, C, B, D) {
                    var A = "";
                    v.childElements().each(function(F, G) {
                        var I = F.readAttribute("class") ? F.readAttribute("class") : "";
                        if (G == 0) {
                            $(E + "_wrapper").ptkOnChange = C.onChange
                        }
                        A += '<li id="' + E + "_input_" + G + '" onclick="PTK.CustomForms.selectOption(\'' + E + "', " + G + ", " + null + ", " + B + ", " + e.cutValue + ", " + e.maxTextLength + ", " + e.allowSelectedClick + ')" ';
                        if (F.readAttribute("selected") == "selected" || F.selected) {
                            b = F;
                            PTK.CustomForms.setValue(f, F, e.cutValue, e.maxTextLength, v);
                            I += " " + e.currentClass
                        }
                        A += 'class="' + I + '" ';
                        var H = (F.readAttribute("data-select-title")) ? (F.readAttribute("data-select-title")) : "";
                        A += '><a href="#" onclick="return false;" title="' + H + '">' + F.text + "</a></li>";
                        if (G == C.maxElements) {
                            $(E).setMaxElements = true
                        }
                    });
                    return "<ul>" + A + "</ul>"
                }
            });
            Event.observe(window, "beforeunload", function() {
                $$(".ptk-selectbox-wrapper").each(function(e) {
                    e.ptkOnChange = null
                })
            })
        },
        getSelectedOption: function(b) {
            var a = $(b);
            if (!a) {
                return (-1)
            }
            return a.selectedIndex
        },
        expandOnClick: function(elm_id, maxElements, wrapperZindex, onShowCallback, onShowCallbackOnlyForShow) {
            var cont = $(elm_id + "_container");
            var wrap = $(elm_id + "_wrapper");
            var inp = $(elm_id + "_input");
            var input = $(elm_id + "_input_live");
            var sel = $(elm_id);
            if (sel.disabled) {
                return
            }
            if (cont.style.display == "none") {
                cont.setStyle({
                    top: inp.getHeight() + "px",
                    left: "0px"
                })
            }
            if (wrap.style.zIndex == 0 || wrap.style.zIndex == "") {
                wrap.setStyle({
                    zIndex: "5000"
                });
                cont.setStyle({
                    zIndex: "5000"
                });
                input.setStyle({
                    zIndex: "5001"
                })
            } else {
                wrap.setStyle({
                    zIndex: wrapperZindex
                });
                wrap.setStyle({
                    zIndex: wrapperZindex
                })
            }
            input.toggle();
            cont.toggle();
            input.focus();
            cont.toggleClassName("open");
            if (sel.setMaxElements) {
                var h = cont.select("li a")[0].getHeight();
                if (!h) {
                    h = 19
                }
                cont.setStyle({
                    height: (maxElements * h) + "px",
                    overflowY: "scroll",
                    overflowX: "hidden"
                })
            }
            if (PTK.CustomForms.checkViewportBottomPadding(wrap) <= (cont.getHeight() + inp.getHeight())) {
                var contNewTop = -cont.getHeight();
                cont.addClassName("ptk-rollout-up");
                cont.setStyle({
                    top: contNewTop + "px",
                    left: "0px"
                })
            }
            if (onShowCallback && onShowCallback != "null") {
                eval(onShowCallback + "('" + elm_id + "'," + maxElements + "," + wrapperZindex + "," + cont.visible() + ")")
            }
        },
        filterOnInput: function(i, b, a) {
            var k = $(b),
                i = i || window.event,
                d = (navigator.appVersion.indexOf("MSIE 8.") == -1) ? false : true,
                f, j;
            if (d) {
                f = i.srcElement.getValue().toLowerCase()
            } else {
                f = i.target.getValue().toLowerCase()
            }
            j = k.select("li");
            if (f === "") {
                j.invoke("show")
            } else {
                j.each(function(h, e) {
                    if (h.down("a").innerHTML.strip().toLowerCase().indexOf(f) !== 0) {
                        if (h.visible()) {
                            h.hide()
                        }
                    } else {
                        if (!h.visible()) {
                            h.show()
                        }
                    }
                })
            }
            var c = j.findAll(function(e) {
                return e.visible()
            });
            var g = k.select("li a")[0].getHeight();
            if (!g) {
                g = 19
            }
            if (c.length > a) {
                k.setStyle({
                    height: (a * g) + "px",
                    overflowY: "scroll",
                    overflowX: "hidden"
                })
            } else {
                k.setStyle({
                    height: "",
                    overflowY: "",
                    overflowX: ""
                });
                PTK.CustomForms.redraw(k)
            }
        },
        focusOnKeyDown: function(h, b) {
            var k = $(b),
                h = h || window.event,
                i, d = [],
                g, a, j = "",
                c, f = {
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9"
                };
            if (!k.hasClassName("open")) {
                return
            }
            i = k.select("li");
            if (h.keyCode in f) {
                i.each(function(l, e) {
                    if (l.down("a").innerHTML.strip().toLowerCase().substring(0, 1) == f[h.keyCode]) {
                        d.push(e)
                    }
                });
                if (d.length) {
                    g = k.getAttribute("data-keycount");
                    g++;
                    k.setAttribute("data-keycount", g);
                    c = k.select("li.focus");
                    if (c.length) {
                        j = k.select("li.focus a")[0].innerHTML.strip().toLowerCase().substring(0, 1);
                        c[0].removeClassName("focus")
                    }
                    if (j != f[h.keyCode]) {
                        g = 1;
                        k.setAttribute("data-keycount", g)
                    } else {
                        if (g >= d.length) {
                            k.setAttribute("data-keycount", 0);
                            if (g > d.length) {
                                g = 1
                            }
                        }
                    }
                    a = d[g - 1];
                    i[a].down("a").focus();
                    i[a].addClassName("focus")
                }
            }
        },
        selectOption: function(c, e, a, k, o, l, d) {
            var g = $(c);
            if (!g) {
                return (-1)
            }
            var f = $(c + "_wrapper");
            if (!a) {
                a = "ptk-selectbox-selected-option"
            }
            var n = g.selectedIndex;
            var b = f.select("li")[n];
            var i = g.select("option")[n];
            var j = g.select("option")[e];
            var h = f.select("li")[e];
            if (i) {
                i.selected = false;
                b.writeAttribute({
                    "class": false
                })
            }
            j.selected = true;
            h.addClassName(a);
            g.value = h.innerHTML;
            g.selectedIndex = parseInt(e);
            PTK.CustomForms.setValue(f.select("a.ptk-selectbox-clickable")[0], h.select("a")[0], o, l, g);
            f.setStyle({
                zIndex: k
            });
            f.select(".ptk-selectbox-container")[0].hide();
            f.select(".ptk-selectbox-container")[0].setStyle({
                zIndex: k
            });
            var m = $(c + "_input_live");
            if (m) {
                m.blur()
            }
            if (b != h || d) {
                f.ptkOnChange(this.replaceSelects, h, g);
                g.fire("ptk:customforms:change", {
                    input: g,
                    checked: g.selectedIndex,
                    element: f
                })
            }
        },
        outState: true,
        hideOnRollOut: function(elm_id, onHideCallback) {
            if (PTK.CustomForms.outState) {
                var cont = $(elm_id + "_container");
                var wrap = $(elm_id + "_wrapper");
                var inp = $(elm_id + "_input");
                wrap.setStyle({
                    zIndex: 0
                });
                wrap.setStyle({
                    zIndex: 0
                });
                cont.removeClassName("ptk-rollout-up");
                cont.hide();
                cont.removeClassName("open");
                inp.removeClassName("open");
                if (onHideCallback && onHideCallback != "null") {
                    eval(onHideCallback + "(" + elm_id + ")")
                }
            }
        },
        hideOnBlur: function(elm_id, onHideCallback) {
            if (PTK.CustomForms.outState) {
                var cont = $(elm_id + "_container");
                var wrap = $(elm_id + "_wrapper");
                var input = $(elm_id + "_input_live");
                var items = cont.select("li");
                wrap.setStyle({
                    zIndex: 0
                });
                wrap.setStyle({
                    zIndex: 0
                });
                input.setStyle({
                    zIndex: 0
                });
                input.setValue("");
                input.hide();
                items.invoke("show");
                cont.removeClassName("ptk-rollout-up");
                cont.hide();
                cont.removeClassName("open");
                if (onHideCallback && onHideCallback != "null") {
                    eval(onHideCallback + "(" + elm_id + ")")
                }
            }
        },
        setValue: function(j, d, m, g, h) {
            var l = j.offsetWidth,
                m = m;
            if (j.style.paddingLeft) {
                l -= parseInt(j.style.paddingLeft)
            }
            if (j.style.paddingRight) {
                l -= parseInt(j.style.paddingRight)
            }
            var b = g || Math.ceil(l / 9);
            var k = (d.text) ? d.text : d.innerHTML;
            if (Prototype.Browser.IE && navigator.appVersion.indexOf("MSIE 7.0") > -1) {
                m = true
            }
            if (k.length > b && m) {
                var i = k.substring(0, b);
                i += "..."
            } else {
                i = k
            }
            j.setAttribute("title", k);
            if (h.classList.contains("chevron-after-title")) {
                j.innerHTML = '<span id="device_input_title">' + i + "</span>";
                var e = document.getElementById("device_input_title").offsetWidth;
                var c = window.getComputedStyle(j, null).getPropertyValue("padding-left");
                var a = e + parseInt(c, 10) + 10;
                var f = document.getElementById(j.id).style;
                document.getElementById(j.id).style.setProperty("background-position", a + "px")
            } else {
                j.innerHTML = i
            }
        },
        filterOnBlur: function(c, a, b) {
            setTimeout("PTK.CustomForms.hideOnBlur('" + c + "','" + b + "');", 10)
        },
        selectOnRollOut: function(c, a, b) {
            setTimeout("PTK.CustomForms.hideOnRollOut('" + c + "','" + b + "');", 10)
        },
        containerOnRollOut: function(c, a, b) {
            PTK.CustomForms.outState = true;
            setTimeout("PTK.CustomForms.hideOnRollOut('" + c + "','" + b + "');", 10)
        },
        containerOnRollOover: function(c, b) {
            PTK.CustomForms.outState = false;
            var a = $(c + "_container");
            var d = a.select("li.focus");
            if (d.length) {
                d[0].removeClassName("focus");
                d[0].down("a").blur()
            }
        },
        checkViewportBottomPadding: function(c) {
            var b = 0;
            if (c) {
                var a = 0;
                if (typeof window.innerHeight != "undefined") {
                    a = window.innerHeight
                } else {
                    if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientHeight != "undefined" && document.documentElement.clientHeight != 0) {
                        a = document.documentElement.clientHeight
                    }
                }
                var d = c.viewportOffset();
                b = a - d.top
            }
            return b
        },
        selectOnClick: function(elm_id, maxElements, wrapperZindex, onShowCallback, onShowCallbackOnlyForShow) {
            var cont = $(elm_id + "_container");
            var wrap = $(elm_id + "_wrapper");
            var inp = $(elm_id + "_input");
            var sel = $(elm_id);
            if (sel.disabled) {
                return
            }
            if (cont.style.display == "none") {
                cont.setStyle({
                    top: inp.getHeight() + "px",
                    left: "0px"
                })
            }
            if (wrap.style.zIndex == 0 || wrap.style.zIndex == "") {
                wrap.setStyle({
                    zIndex: "5000"
                });
                cont.setStyle({
                    zIndex: "5000"
                })
            } else {
                wrap.setStyle({
                    zIndex: wrapperZindex
                });
                wrap.setStyle({
                    zIndex: wrapperZindex
                })
            }
            cont.toggle();
            cont.focus();
            cont.toggleClassName("open");
            inp.toggleClassName("open");
            if (sel.setMaxElements && !sel.maxHeightSet) {
                var h = cont.select("li a")[0].getHeight();
                if (!h) {
                    h = 19
                }
                cont.setStyle({
                    height: (maxElements * h) + "px",
                    overflowY: "scroll",
                    overflowX: "hidden"
                });
                sel.maxHeightSet = true
            }
            if (PTK.CustomForms.checkViewportBottomPadding(wrap) <= (cont.getHeight() + inp.getHeight())) {
                var contNewTop = -cont.getHeight();
                cont.addClassName("ptk-rollout-up");
                cont.setStyle({
                    top: contNewTop + "px",
                    left: "0px"
                })
            }
            if (onShowCallback && onShowCallback != "null") {
                eval(onShowCallback + "('" + elm_id + "'," + maxElements + "," + wrapperZindex + "," + cont.visible() + ")")
            }
        },
        toggleCheckbox: function(c) {
            var a = $(c);
            if (!a) {
                return (-1)
            }
            if (a.type == "radio") {
                var b = $$("input[name=" + a.readAttribute("name") + "]");
                b.each(function(e) {
                    if (e.readAttribute("type") == "radio" && e.readAttribute("name") == a.readAttribute("name")) {
                        e.writeAttribute({
                            checked: false
                        });
                        var d = $$("label[for=" + e.readAttribute("id") + "]")[0];
                        if (d) {
                            d.removeClassName("checked")
                        }
                    }
                })
            }
            a.up().toggleClassName("checked");
            if ((a.readAttribute("checked") == null)) {
                a.checked = true
            } else {
                a.checked = false
            }
        },
        selectAllCheckboxes: function(b, a) {
            b.each(function(c) {
                if (a) {
                    c.up().removeClassName("checked");
                    c.checked = false
                } else {
                    c.up().addClassName("checked");
                    c.checked = true
                }
            })
        },
        afterCreateSelect: {},
        browser: function() {
            var a = navigator.userAgent;
            var b = "generic";
            if (a.indexOf("MSIE 9") != -1) {
                b = "ie9"
            } else {
                if (a.indexOf("MSIE 8") != -1) {
                    b = "ie8"
                } else {
                    if (a.indexOf("MSIE 7") != -1) {
                        b = "ie7"
                    } else {
                        if (a.indexOf("MSIE 6") != -1) {
                            b = "ie6"
                        } else {
                            if (a.indexOf("Firefox/") != -1) {
                                b = "ff"
                            } else {
                                if (a.indexOf("Opera") != -1) {
                                    b = "opera"
                                } else {
                                    if (a.indexOf("WebKit")) {
                                        b = "sf"
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return b
        },
        insetShadow: function(c) {
            var b = PTK.CustomForms.browser();
            if (b == "ie6" || b == "ie7" || b == "ie8") {
                var a = 1;
                var c = c || $$('input[type="text"]');
                if (c.id) {
                    c = $$("#" + c.id)
                }
                c.each(function(g, e) {
                    var i = new Element("span", {
                        "class": "inset-shadow-wrapper"
                    });
                    g.wrap(i);
                    var f = new Element("span", {
                        "class": "inset-shadow-holder"
                    });
                    i.insert({
                        top: f
                    });
                    g.addClassName("inset-shadow-element");
                    var h = g.getWidth();
                    var d = g.getHeight();
                    i.setStyle({
                        width: (h + a * 2) + "px",
                        height: (d + a * 2) + "px",
                        overflow: "hidden"
                    });
                    f.setStyle({
                        width: h + "px",
                        height: d + "px"
                    });
                    g.setStyle({
                        marginTop: (-(d + a)) + "px",
                        marginLeft: a + "px"
                    });
                    if (i.cumulativeOffset().top != (g.cumulativeOffset().top - a)) {
                        g.setStyle({
                            marginTop: -(d + ((g.cumulativeOffset().top) - (i.cumulativeOffset().top + a))) + "px"
                        })
                    }
                    if (g.disabled) {
                        i.addClassName("inset-shadow-element-disabled")
                    }
                })
            } else {
                if (b == "opera") {
                    var c = c || $$('input[type="text"]');
                    if (c.id) {
                        c = $$("#" + c.id)
                    }
                    c.each(function(f, e) {
                        var h = new Element("span", {
                            "class": "inset-shadow-wrapper"
                        });
                        f.wrap(h);
                        f.addClassName("inset-shadow-element");
                        var g = f.getWidth();
                        var d = f.getHeight();
                        h.setStyle({
                            width: (g) + "px",
                            height: (d) + "px",
                            overflow: "hidden"
                        });
                        if (f.disabled) {
                            h.addClassName("inset-shadow-element-disabled")
                        }
                    })
                }
            }
        },
        spinButton: function(a) {
            var a = a || $$('input[type="text"]');
            if (a.id) {
                a = $$("#" + a.id)
            }
            a.each(function(f, e) {
                if (!f.disabled && (f.type).toLowerCase() === "text" && !f.hasClassName("spin-input")) {
                    f.addClassName("spin-input");
                    f.setAttribute("autocomplete", "off");
                    var d = new Element("span", {
                        id: "spin-" + f.identify() + "-" + Math.floor(Math.random() * (e + 1000000000000)),
                        style: "display:inline-block;vertical-align:middle;height:" + f.getHeight() + "px",
                        "class": "spin-control"
                    });
                    var h = f.up(".inset-shadow-wrapper");
                    if (h) {
                        h.insert({
                            after: d
                        })
                    } else {
                        f.insert({
                            after: d
                        })
                    }
                    var c = '<a class="up" style="display:block;text-decoration:none;" href="">&and;</a>';
                    c += '<a class="down" style="display:block;text-decoration:none;" href="">&or;</a>';
                    d.innerHTML = c;
                    var b = parseInt(f.getAttribute("maxlength"));
                    var j = "9999999999999999999999999999";
                    if (b > 0) {
                        j = "";
                        for (var g = 0; g < b; g++) {
                            j += "9"
                        }
                    }
                    j = parseInt(j);
                    (d.select("a")).each(function(i) {
                        i.observe("custom:click", function(l) {
                            var k = parseInt(f.value);
                            if (i.hasClassName("up")) {
                                if (k < j) {
                                    f.value = k + 1
                                }
                            } else {
                                if (i.hasClassName("down")) {
                                    if (k >= 1) {
                                        f.value = k - 1
                                    }
                                }
                            }
                        });
                        i.observe("mousedown", function(k) {
                            (Event.element(k)).fire("custom:click")
                        });
                        i.observe("keydown", function(k) {
                            if (k.keyCode == Event.KEY_RETURN) {
                                (Event.element(k)).fire("custom:click")
                            }
                        });
                        i.observe("click", function(k) {
                            Event.stop(k)
                        })
                    });
                    f.observe("keydown", function(k) {
                        var i = parseFloat(f.value);
                        if (k.keyCode == Event.KEY_UP) {
                            if (i < j) {
                                f.value = i + 1
                            }
                        } else {
                            if (k.keyCode == Event.KEY_DOWN) {
                                if (i >= 1) {
                                    f.value = i - 1
                                }
                            }
                        }
                    })
                }
            })
        },
        redraw: function(a) {
            a.hide();
            setTimeout(function() {
                a.show()
            }, 0)
        }
    }
}
Event.observe(window, "beforeunload", function() {
    for (var a in PTK.CustomForms.observers) {
        PTK.CustomForms.destroyObserver(a)
    }
});