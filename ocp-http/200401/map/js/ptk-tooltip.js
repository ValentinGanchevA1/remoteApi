var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Tooltip == "undefined") {
    PTK.Tooltip = Class.create({
        options: {},
        initialize: function(a, c) {
            this.options = {
                tooltipWidth: c.width,
                additionalClass: c.additionalClass || "",
                observerUsed: c.observerUsed || false,
                tooltipOrientation: c.tooltipOrientation || "bottom-right",
                idTriggered: c.idTriggered || false,
                relativePosition: c.relativePosition || false,
                tooltipRelativePosition: c.tooltipRelativePosition || false,
                conectWithInput: c.conectWithInput || false,
                conectedInputSelector: c.conectedInputSelector || "",
                containerSelector: c.containerSelector || ""
            };
            var b = this;
            this.selector = a;
            if (this.options.idTriggered) {
                var d = $(a);
                var e = $(b.getTooltipId(d));
                if (e) {
                    if (!e.hasClassName("reader-only")) {
                        e.hide()
                    }
                    if (!c.observerUsed) {
                        d.observe("mouseenter", function(f) {
                            b.showTooltip(f, d)
                        });
                        d.observe("mouseleave", function(f) {
                            b.hideTooltip(f, d)
                        })
                    }
                }
            } else {
                $$(a).each(function(g, f) {
                    var h = $(b.getTooltipId(g));
                    if (h) {
                        if (!h.hasClassName("reader-only")) {
                            h.hide()
                        }
                        if (!c.observerUsed) {
                            g.observe("mouseenter", function(i) {
                                b.showTooltip(i, g)
                            });
                            g.observe("mouseleave", function(i) {
                                b.hideTooltip(i, g)
                            })
                        }
                    }
                })
            }
            if (c.conectWithInput) {
                var b = this;
                $$(c.conectedInputSelector).each(function(f) {
                    Event.observe(f, "focus", function() {
                        b.inputTooltip(this, c.containerSelector, "show")
                    });
                    Event.observe(f, "mouseenter", function() {
                        b.inputTooltip(this, c.containerSelector, "show")
                    });
                    Event.observe(f, "blur", function() {
                        b.inputTooltip(this, c.containerSelector, "hide")
                    });
                    Event.observe(f, "mouseout", function() {
                        b.inputTooltip(this, c.containerSelector, "hide")
                    })
                })
            }
        },
        getTooltipId: function(c) {
            var b;
            if (this.options.idTriggered) {
                b = c.id + "-cloudContent"
            } else {
                var d = c.className.split(" ");
                for (var a = 0; a < d.length; a++) {
                    if (d[a].indexOf("tooltipText_id") != -1) {
                        b = d[a].substring(15)
                    }
                }
            }
            return (b)
        },
        setPosition: function(b, c, a) {
            tooltipPosition = (this.options.relativePosition) ? c.positionedOffset() : c.cumulativeOffset();
            tooltipDimensions = b.getDimensions();
            targetDimensions = c.getDimensions();
            if (a == "top-left") {} else {
                if (a == "right-center") {
                    tooltipPosition.top = tooltipPosition.top - parseInt((tooltipDimensions.height / 2) - (targetDimensions.height / 2)) + parseInt((parseInt(c.getStyle("padding-top"))) / 2);
                    tooltipPosition.left -= 6
                } else {
                    tooltipPosition.top -= tooltipDimensions.height + 2;
                    tooltipPosition.left -= tooltipDimensions.width;
                    tooltipPosition.left += targetDimensions.width / 2
                }
            }
            b.setStyle({
                position: "absolute",
                top: tooltipPosition.top + "px",
                left: tooltipPosition.left + targetDimensions.width + 4 + "px",
                display: "inline",
                zIndex: 100
            })
        },
        setPositionRelative: function(k, i, b) {
            var d = i.getDimensions();
            var f = i.height;
            var e = i.width;
            var g = k.getDimensions();
            var h = k.select(".tooltip-arrow");
            var c = i.positionedOffset();
            if (b === "bottom") {
                var j = 0;
                if (h.length > 0) {
                    k.addClassName("arrow-up");
                    var a = h[0].getDimensions();
                    h[0].setStyle({
                        left: g.width / 2 - a.width / 2 + "px",
                        position: "absolute",
                        top: (-1 * a.height + 1) + "px",
                        zIndex: 101
                    });
                    j = a.height
                }
                j = 0;
                k.setStyle({
                    position: "absolute",
                    top: (c.top + d.height + j) + "px",
                    left: (c.left - (g.width - d.width) / 2) + "px",
                    display: "inline",
                    zIndex: 100
                })
            } else {
                if (b === "top") {
                    var j = 0;
                    if (h.length > 0) {
                        k.addClassName("arrow-down");
                        var a = h[0].getDimensions();
                        h[0].setStyle({
                            left: g.width / 2 - a.width / 2 + "px",
                            position: "absolute",
                            top: g.height + "px",
                            zIndex: 101
                        });
                        j = a.height
                    }
                    k.setStyle({
                        position: "absolute",
                        top: (c.top - g.height - j) + "px",
                        left: (c.left - (g.width - d.width) / 2) + "px",
                        display: "inline",
                        zIndex: 100
                    })
                } else {
                    if (b === "left") {
                        var j = 0;
                        if (h.length > 0) {
                            k.addClassName("arrow-left");
                            var a = h[0].getDimensions();
                            h[0].setStyle({
                                left: g.width - 2 + "px",
                                position: "absolute",
                                top: g.height / 2 - a.height / 2 + "px",
                                zIndex: 101
                            });
                            j = a.width
                        }
                        k.setStyle({
                            position: "absolute",
                            top: (c.top + f / 2 - g.height / 2) + "px",
                            left: c.left - d.width + "px",
                            display: "inline",
                            zIndex: 100
                        })
                    } else {
                        if (b === "right") {
                            var j = 0;
                            if (h.length > 0) {
                                k.addClassName("arrow-right");
                                var a = h[0].getDimensions();
                                h[0].setStyle({
                                    left: -a.width + 1 + "px",
                                    position: "absolute",
                                    top: g.height / 2 - a.width + "px",
                                    zIndex: 101
                                });
                                j = a.width
                            }
                            k.setStyle({
                                position: "absolute",
                                top: (c.top + d.height / 2 - g.height / 2) + "px",
                                left: (c.left + d.width) + "px",
                                display: "inline",
                                zIndex: 100
                            })
                        }
                    }
                }
            }
        },
        showTooltip: function(d, c) {
            var a = this;
            var e = c || Event.element(d);
            var b = this.getTooltipId(e);
            if (!b) {
                return
            }
            tooltipSource = $(b);
            var f = this.trim(tooltipSource.innerHTML);
            if (f != "") {
                $$(".ptk-tooltip-container").each(function(g) {
                    g.remove()
                });
                if (this.options.relativePosition) {
                    insertTo = e;
                    insertTo.insert({
                        after: new Template('<div id="#{id}" class="ptk-tooltip-container #{additionalClass}" style="width:#{holderWidth};position:absolute;"><div class="ptk-tooltip" style="width:#{width};">' + ((this.options.tooltipOrientation == "right-center") ? ('<div class="ptk-tooltip-content clr"><div class="t"></div><div>#{text}</div></div>') : ('<div class="ptk-tooltip-content clr"><div>#{text}</div></div><div class="b"><div></div></div>')) + "</div></div>").evaluate({
                            id: "tooltip-container-" + b,
                            additionalClass: this.options.additionalClass,
                            text: f,
                            holderWidth: this.options.tooltipWidth + "px"
                        })
                    })
                } else {
                    insertTo = $$("body")[0];
                    insertTo.insert({
                        bottom: new Template('<div id="#{id}" class="ptk-tooltip-container #{additionalClass}" style="width:#{holderWidth};position:absolute;"><div class="ptk-tooltip" style="width:#{width};">' + ((this.options.tooltipOrientation == "right-center") ? ('<div class="ptk-tooltip-content clr"><div class="t"></div><div>#{text}</div></div>') : ('<div class="ptk-tooltip-content clr"><div>#{text}</div></div><div class="b"><div></div></div>')) + "</div></div>").evaluate({
                            id: "tooltip-container-" + b,
                            additionalClass: this.options.additionalClass,
                            text: f,
                            holderWidth: this.options.tooltipWidth + "px"
                        })
                    })
                }
                tooltip = $("tooltip-container-" + b);
                if (this.options.tooltipWidth > 380) {
                    this.options.tooltipWidth = 380
                }
                if (this.options.tooltipWidth) {
                    tooltip.setStyle({
                        width: this.options.tooltipWidth + "px"
                    })
                }
                if (a.options.tooltipRelativePosition) {
                    this.setPositionRelative(tooltip, e, a.options.tooltipRelativePosition)
                } else {
                    this.setPosition(tooltip, e, a.options.tooltipOrientation)
                }
            }
        },
        hideTooltip: function(d, b) {
            var c = b || Event.element(d);
            var a = this.getTooltipId(c);
            if (!a) {
                return
            }
            var e = $("tooltip-container-" + a);
            if (e) {
                e.remove()
            }
        },
        toggleTooltip: function(c) {
            var b = Event.element(c);
            var d = $("tooltip-container-" + this.getTooltipId(b));
            var a = this;
            if (!d) {
                tooltipSource = $(this.getTooltipId(b));
                tooltipSource = $(tooltipSourceId);
                var e = this.trim(tooltipSource.innerHTML);
                if (e != "") {
                    $$("body")[0].insert({
                        bottom: new Template('<div id="#{id}" style="width:#{holderWidth};position:absolute;"><div class="ptk-tooltip" style="width:#{width};"><div class="ptk-tooltip-content"><div class="t"></div><div>#{text}</div></div><div class="b"><div></div></div></div></div>').evaluate({
                            id: "tooltip-container-" + this.getTooltipId(b),
                            text: e,
                            holderWidth: this.options.tooltipWidth + "px"
                        })
                    });
                    d = $("tooltip-container-" + this.getTooltipId(b));
                    if (a.options.tooltipRelativePosition) {
                        this.setPositionRelative(d, b, a.options.tooltipRelativePosition)
                    } else {
                        this.setPosition(d, b)
                    }
                    return
                }
            }
            $("tooltip-container-" + this.getTooltipId(b)).toggle()
        },
        trim: function(b) {
            var a = "" + b;
            a = a.replace(/^\s*|\s*$/g, "");
            return a
        },
        inputTooltip: function(d, a, e) {
            var b = this,
                c = d.up(a) || null,
                f = null;
            if (c) {
                f = c.select(b.selector);
                if (f.length) {
                    var g = b.getTooltipId(f[0]);
                    switch (e) {
                        case "show":
                            b.showTooltip(null, $$(".tooltipText_id-" + g).first());
                            break;
                        case "hide":
                            b.hideTooltip(null, $$(".tooltipText_id-" + g).first());
                            break
                    }
                }
            }
        }
    })
};