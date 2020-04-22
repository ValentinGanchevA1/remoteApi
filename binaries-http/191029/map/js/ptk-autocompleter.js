var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Autocompleter == "undefined") {
    PTK.Autocompleter = {
        observers: {},
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
            delete this.observers[a]
        },
        replaceSelects: function(b, a) {
            if (!b) {
                return
            }
            if (b.id) {
                b = $$("#" + b.id)
            }
            if (b.length <= 0) {
                return
            }
            b.each(function(d, h) {
                if (d.nodeName == "SELECT") {
                    var f = true;
                    var c = a || {};
                    c.onChange = c.onChange || function() {};
                    c.onWrongSubmit = c.onWrongSubmit || null;
                    c.width = c.width || null;
                    c.prompt = c.prompt || true;
                    var k = new Array();
                    d.select("option").each(function(m, l) {
                        k.push(m.text)
                    });
                    c.defaultInputValue = c.defaultInputValue || k[d.selectedIndex];
                    d.identify();
                    if (!$(d.id + "-input")) {
                        var e = new Element("div", {
                            "class": "autocompleter-list",
                            style: "overflow: auto",
                            id: d.id + "-list"
                        });
                        e.hide();
                        var g = new Element("input", {
                            type: "text",
                            id: d.id + "-input",
                            "class": "autocompleter-input" + (d.disabled ? " autocompleter-input-disabled" : "")
                        });
                        if (d.disabled) {
                            g.disabled = true
                        }
                        if (c.width) {
                            g.setStyle({
                                width: c.width
                            })
                        }
                        if (Prototype.Browser.IE) {
                            setTimeout(function() {
                                g.setStyle({
                                    visibility: "visible"
                                })
                            }, 1)
                        }
                        d.hide();
                        d.insert({
                            after: g
                        });
                        d.insert({
                            after: e
                        });
                        var j = new Autocompleter.Local(g.id, e.id, k, {
                            choices: 999,
                            fullSearch: true,
                            minChars: -1,
                            afterUpdateElement: function(m, l) {
                                var n = k.indexOf(m.value);
                                if (n >= 0) {
                                    d.selectedIndex = n;
                                    f = true;
                                    c.onChange()
                                }
                            }
                        });
                        g.value = c.defaultInputValue;
                        c.defaultInputValue = null;
                        Event.observe(g, "click", function() {
                            if (!d.disabled) {
                                g.addClassName("autocompleter-input-active");
                                if (c.prompt && d.selectedIndex == 0) {
                                    g.value = ""
                                }
                                if (f) {
                                    var l = g.value;
                                    g.value = ""
                                }
                                j.onObserverEvent();
                                j.activate();
                                if (f) {
                                    g.value = l
                                }
                            }
                        });
                        if (c.prompt) {
                            Event.observe(g, "blur", function() {
                                if (g.value == "") {
                                    g.value = k[0];
                                    d.selectedIndex = 0
                                }
                                g.removeClassName("autocompleter-input-active")
                            })
                        }
                        Event.observe(g, "change", function(m) {
                            var l = Event.element(m);
                            var n = k.indexOf(l.value);
                            if (n >= 0) {
                                d.selectedIndex = n;
                                f = true;
                                c.onChange()
                            } else {
                                f = false
                            }
                            g.removeClassName("autocompleter-input-active")
                        });
                        if (c.onWrongSubmit) {
                            var i = d.up("form");
                            Event.observe(i, "submit", function(l) {
                                var m = k.indexOf(g.value);
                                if (m < 0) {
                                    Event.stop(l);
                                    c.onWrongSubmit()
                                }
                                g.removeClassName("autocompleter-input-active")
                            })
                        }
                    }
                }
            })
        }
    }
}
Event.observe(window, "beforeunload", function() {
    for (var a in PTK.Autocompleter.observers) {
        PTK.Autocompleter.destroyObserver(a)
    }
});