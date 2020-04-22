var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.CustomForms == "undefined") {
    PTK.CustomForms = {
        observers: {},
        replaceCheckboxes: function(a, e) {
            if (!a) {
                return
            }
            var k = this;
            var a = a;
            this.replaceCheckboxes.selected = new Object();
            if (a.id) {
                a = $$("#" + a.id)
            }
            var b = e || {};
            b.className = b.className || "ptk-checkbox";
            b.display = b.display || "inline";
            b.onChange = b.onChange || function() {};
            a.each(function(n, m) {
                if (n.type == "radio" || n.type == "checkbox") {
                    var l = $$("label[for=" + n.id + "]")[0];
                    l.writeAttribute({
                        id: "ptk-checkbox-label-" + n.id
                    });
                    var o = l.id;
                    l.addClassName(b.className + " ptk-" + n.type + " " + b.display);
                    if (l.down("span.ptk-checkbox-wrapper")) {
                        return
                    }
                    l.insert({
                        top: '<span class="ptk-checkbox-wrapper"><span class="ptk-checkbox-holder"></span></span>'
                    });
                    if (n.checked) {
                        l.addClassName("checked");
                        k.replaceCheckboxes.selected = n
                    }
                    n.addClassName("ptk-hidden-checkbox");
                    if (n.disabled) {
                        if (n.checked) {
                            l.addClassName("ptk-checkbox-checked-disabled")
                        } else {
                            l.addClassName("ptk-checkbox-disabled")
                        }
                        return
                    }
                    k.observers[o] = new Object();
                    k.observers[n.id] = new Object();
                    k.observers[o].click = f.bindAsEventListener(l);
                    k.observers[n.id].keyup = j.bindAsEventListener(l);
                    k.observers[n.id].keypress = c.bindAsEventListener(l);
                    k.observers[n.id].focus = g.bindAsEventListener(n, l);
                    k.observers[n.id].blur = h.bindAsEventListener(n, l);
                    Event.observe(l, "click", k.observers[o].click);
                    Event.observe(l, "custom:click", k.observers[o].click);
                    Event.observe(n, "keyup", k.observers[n.id].keyup);
                    Event.observe(n, "keypress", k.observers[n.id].keypress);
                    Event.observe(n, "focus", k.observers[n.id].focus);
                    Event.observe(n, "blur", k.observers[n.id].blur)
                }
            });

            function g(m, l) {
                l.addClassName("ptk-el-focused")
            }

            function h(m, l) {
                l.removeClassName("ptk-el-focused");
                d = false
            }
            var d = false;

            function c(l) {
                d = true
            }

            function j(l) {
                if ((l.keyCode || l.which) === 32) {
                    f.bindAsEventListener(this)(l)
                }
            }

            function f(o) {
                if (!(o.findElement().tagName.toLowerCase() == "input" && o.type == "click")) {
                    var n = this;
                    (o.type == "click") ? n.addClassName("ptk-checkbox-clicked"): n.removeClassName("ptk-checkbox-clicked");
                    if (Event.element(o).tagName.toLowerCase() != "a") {
                        Event.stop(o)
                    }
                    var l = $(n.readAttribute("for"));
                    if (l.disabled) {
                        return
                    }
                    l.focus();
                    if (!d) {
                        n.removeClassName("ptk-el-focused")
                    }
                    d = false;
                    var m = false;
                    if (l.type == "radio") {
                        m = n.hasClassName("checked");
                        a.each(function(q) {
                            if (q.type == "radio" && q.name == l.name) {
                                q.checked = false;
                                var p = $$("label[for=" + q.id + "]")[0];
                                if (p) {
                                    p.removeClassName("checked")
                                }
                            }
                        })
                    }
                    if (o.target.nodeName !== "a".toUpperCase()) {
                        n.toggleClassName("checked");
                        if ((l.checked == false)) {
                            l.checked = true
                        } else {
                            l.checked = false
                        }
                        k.replaceCheckboxes.selected = l;
                        if (l.type == "radio") {
                            if (!m) {
                                b.onChange(k.replaceCheckboxes, n, l)
                            }
                        } else {
                            b.onChange(k.replaceCheckboxes, n, l)
                        }
                        l.fire("ptk:customforms:change", {
                            input: l,
                            checked: l.checked,
                            element: n
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
            this.replaceSelects.eachF = d.each(function(f, n) {
                if (f.nodeName == "SELECT" && !f.hasClassName("reader-only")) {
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
                    e.cutValue = e.cutValue != null ? e.cutValue : true;
                    e.allowSelectedClick = e.allowSelectedClick != null ? e.allowSelectedClick : false;
                    e.maxTextLength = e.maxTextLength ? e.maxTextLength : null;
                    e.afterCreateSelect = e.afterCreateSelect || function() {};
                    e.disableRolloutUp = e.disableRolloutUp || false;
                    if (f.disabled) {
                        e.inputClass += " ptk-selectbox-disabled"
                    }
                    var u = f.identify();
                    if (f.hasClassName("none")) {
                        if (window.console) {
                            console.warn("PTK.CustomForms - select nie moze byc ukryty")
                        }
                        return
                    }
                    c.afterCreateSelect[u] = e.afterCreateSelect;
                    var o;
                    var g = -1;
                    var j = 0;
                    b = null;
                    var q = false;
                    var h = f;
                    var k = "";
                    for (i = 0; i < f.length; i++) {
                        if (f[i].getAttribute("selected")) {
                            k = f[i].textContent ? f[i].textContent : f[i].innerText
                        }
                    }
                    h.insert({
                        before: new Template('<div id="#{id}_wrapper" class="#{wrapperClass}"><a id="#{id}_input" onmouseout="#{outEv}" onclick="#{clickEv}" class="#{clickClass}" tabIndex="0">' + k + '</a><div tabindex="1" onkeydown="#{containerKeyDown}" onmouseover="#{containerOver}" onmouseout="#{containerOut}" id="#{id}_container" class="#{containerClass}" data-keycount="0"></div></div>').evaluate({
                            id: u,
                            wrapperClass: e.wrapperClass,
                            clickClass: e.inputClass,
                            containerClass: e.containerClass,
                            clickEv: "PTK.CustomForms.selectOnClick('" + u + "', " + e.maxElements + ", " + 0 + ", " + e.disableRolloutUp + ");",
                            outEv: "PTK.CustomForms.selectOnRollOut('" + u + "');",
                            containerOut: "PTK.CustomForms.containerOnRollOut('" + u + "');",
                            containerOver: "PTK.CustomForms.containerOnRollOover('" + u + "');",
                            containerKeyDown: "PTK.CustomForms.focusOnKeyDown(event,'" + u + "_container');"
                        })
                    });
                    var m = $(u + "_wrapper");
                    var p = $(u + "_input");
                    var t = $(u + "_container");
                    o = m.style.zIndex;
                    s(e, o);
                    h.addClassName("reader-only");
                    (function() {
                        c.afterCreateSelect[u]()
                    }).defer()
                }

                function l() {
                    j = 0;
                    m.setStyle({
                        zIndex: o
                    });
                    t.hide()
                }

                function s(x, w) {
                    w = w || 0;
                    var y = x.width;
                    if (y == null) {
                        y = h.offsetWidth
                    }
                    p.setStyle({
                        width: y - 1 + "px"
                    });
                    t.insert(r(u, x, w, y)).hide();
                    var v = (navigator.appVersion.indexOf("MSIE 6.") == -1) ? false : true;
                    if (v) {
                        if (t.getDimensions().width < y) {
                            t.setStyle({
                                width: y - 2 + "px"
                            })
                        } else {
                            t.setStyle({
                                width: "auto"
                            })
                        }
                    } else {
                        t.setStyle({
                            minWidth: p.offsetWidth - 2 + "px"
                        })
                    }
                }

                function r(z, x, w, y) {
                    var v = "";
                    h.childElements().each(function(A, B) {
                        if (B == 0) {
                            $(z + "_wrapper").ptkOnChange = x.onChange
                        }
                        v += '<li id="' + z + "_input_" + B + '" onclick="PTK.CustomForms.selectOption(\'' + z + "', " + B + ", " + null + ", " + w + ", " + e.cutValue + ", " + e.maxTextLength + ", " + e.allowSelectedClick + ')" ';
                        var C = A.readAttribute("selected");
                        if (C == "selected" || C == "") {
                            b = A;
                            PTK.CustomForms.setValue(p, A, e.cutValue, e.maxTextLength);
                            v += 'class="' + e.currentClass + '" '
                        }
                        v += '><a href="#" onclick="return false;">' + A.text + "</a></li>";
                        if (B == x.maxElements) {
                            $(z).setMaxElements = true
                        }
                    });
                    return "<ul>" + v + "</ul>"
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
        focusOnKeyDown: function(h, b) {
            var l = $(b),
                h = h || window.event,
                j, d = [],
                g, a, k = "",
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
            if (!l.hasClassName("open")) {
                return
            }
            j = l.select("li");
            if (h.keyCode in f) {
                j.each(function(m, e) {
                    if (m.down("a").innerHTML.strip().toLowerCase().substring(0, 1) == f[h.keyCode]) {
                        d.push(e)
                    }
                });
                if (d.length) {
                    g = l.getAttribute("data-keycount");
                    g++;
                    l.setAttribute("data-keycount", g);
                    c = l.select("li.focus");
                    if (c.length) {
                        k = l.select("li.focus a")[0].innerHTML.strip().toLowerCase().substring(0, 1);
                        c[0].removeClassName("focus")
                    }
                    if (k != f[h.keyCode]) {
                        g = 1;
                        l.setAttribute("data-keycount", g)
                    } else {
                        if (g >= d.length) {
                            l.setAttribute("data-keycount", 0);
                            if (g > d.length) {
                                g = 1
                            }
                        }
                    }
                    a = d[g - 1];
                    j[a].down("a").focus();
                    j[a].addClassName("focus")
                }
            }
        },
        selectOption: function(c, e, a, l, o, m, d) {
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
            var j = g.select("option")[n];
            var k = g.select("option")[e];
            var h = f.select("li")[e];
            if (j) {
                j.selected = false;
                b.writeAttribute({
                    "class": false
                })
            }
            k.selected = true;
            h.addClassName(a);
            g.value = h.innerHTML;
            g.selectedIndex = parseInt(e);
            PTK.CustomForms.setValue(f.select("a.ptk-selectbox-clickable")[0], h.select("a")[0], o, m);
            f.setStyle({
                zIndex: l
            });
            f.select(".ptk-selectbox-container")[0].hide();
            f.select(".ptk-selectbox-container")[0].setStyle({
                zIndex: l
            });
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
        hideOnRollOut: function(c) {
            if (PTK.CustomForms.outState) {
                var a = $(c + "_container");
                var b = $(c + "_wrapper");
                b.setStyle({
                    zIndex: 0
                });
                b.setStyle({
                    zIndex: 0
                });
                a.removeClassName("ptk-rollout-up");
                a.hide();
                a.removeClassName("open")
            }
        },
        setValue: function(e, d, f, c) {
            var b = e.offsetWidth;
            if (e.style.paddingLeft) {
                b -= parseInt(e.style.paddingLeft)
            }
            if (e.style.paddingRight) {
                b -= parseInt(e.style.paddingRight)
            }
            var a = c || Math.ceil(b / 9);
            var h = (d.text) ? d.text : d.innerHTML;
            if (h.length > a && f) {
                var g = h.substring(0, a);
                g += "..."
            } else {
                g = h
            }
            e.innerHTML = g
        },
        selectOnRollOut: function(b, a) {
            setTimeout("PTK.CustomForms.hideOnRollOut('" + b + "');", 10)
        },
        containerOnRollOut: function(b, a) {
            PTK.CustomForms.outState = true;
            setTimeout("PTK.CustomForms.hideOnRollOut('" + b + "');", 10)
        },
        containerOnRollOover: function(b, a) {
            PTK.CustomForms.outState = false
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
        selectOnClick: function(k, a, f, d) {
            var l = $(k + "_container");
            var b = $(k + "_wrapper");
            var j = $(k + "_input");
            var c = $(k);
            if (c.disabled) {
                return
            }
            if (l.style.display == "none") {
                l.setStyle({
                    top: j.getHeight() + "px",
                    left: "0px"
                })
            }
            if (b.style.zIndex == 0 || b.style.zIndex == "") {
                b.setStyle({
                    zIndex: "5000"
                });
                l.setStyle({
                    zIndex: "5000"
                })
            } else {
                b.setStyle({
                    zIndex: f
                });
                b.setStyle({
                    zIndex: f
                })
            }
            l.toggle();
            l.focus();
            l.addClassName("open");
            if (c.setMaxElements && !c.maxHeightSet) {
                var e = l.select("li a")[0].getHeight();
                if (!e) {
                    e = 19
                }
                l.setStyle({
                    height: (a * e) + "px",
                    overflowY: "scroll",
                    overflowX: "hidden"
                });
                c.maxHeightSet = true
            }
            if (!d) {
                if (PTK.CustomForms.checkViewportBottomPadding(b) <= (l.getHeight() + j.getHeight())) {
                    var g = -l.getHeight();
                    l.addClassName("ptk-rollout-up");
                    l.setStyle({
                        top: g + "px",
                        left: "0px"
                    })
                }
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
            a.up("label").toggleClassName("checked");
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
                    var j = new Element("span", {
                        "class": "inset-shadow-wrapper"
                    });
                    g.wrap(j);
                    var f = new Element("span", {
                        "class": "inset-shadow-holder"
                    });
                    j.insert({
                        top: f
                    });
                    g.addClassName("inset-shadow-element");
                    var h = g.getWidth();
                    var d = g.getHeight();
                    j.setStyle({
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
                    if (j.cumulativeOffset().top != (g.cumulativeOffset().top - a)) {
                        g.setStyle({
                            marginTop: -(d + ((g.cumulativeOffset().top) - (j.cumulativeOffset().top + a))) + "px"
                        })
                    }
                    if (g.disabled) {
                        j.addClassName("inset-shadow-element-disabled")
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
                    (d.select("a")).each(function(k) {
                        k.observe("custom:click", function(m) {
                            var l = parseInt(f.value);
                            if (k.hasClassName("up")) {
                                if (l < j) {
                                    f.value = l + 1
                                }
                            } else {
                                if (k.hasClassName("down")) {
                                    if (l >= 1) {
                                        f.value = l - 1
                                    }
                                }
                            }
                        });
                        k.observe("mousedown", function(l) {
                            (Event.element(l)).fire("custom:click")
                        });
                        k.observe("keydown", function(l) {
                            if (l.keyCode == Event.KEY_RETURN) {
                                (Event.element(l)).fire("custom:click")
                            }
                        });
                        k.observe("click", function(l) {
                            Event.stop(l)
                        })
                    });
                    f.observe("keydown", function(l) {
                        var k = parseFloat(f.value);
                        if (l.keyCode == Event.KEY_UP) {
                            if (k < j) {
                                f.value = k + 1
                            }
                        } else {
                            if (l.keyCode == Event.KEY_DOWN) {
                                if (k >= 1) {
                                    f.value = k - 1
                                }
                            }
                        }
                    })
                }
            })
        }
    }
}
Event.observe(window, "beforeunload", function() {
    for (var a in PTK.CustomForms.observers) {
        PTK.CustomForms.destroyObserver(a)
    }
});