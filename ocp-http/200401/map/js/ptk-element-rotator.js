var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.ElementRotator == "undefined") {
    PTK.ElementRotator = {};
    PTK.ElementRotator = Class.create({
        initialize: function(b) {
            var a = this;
            this.isProcessing = false;
            this.isPaused = false;
            this.currentElement = null;
            this.nextElement = null;
            this.pe = null;
            this.defaults = {
                elementsContainerSelector: "#ptk-element-rotator-container",
                elementSelector: ".ptk-element-rotator-element",
                duration: 0.5,
                delay: 5,
                showEffect: "Appear",
                hideEffect: "Fade",
                autoStart: true,
                onElementShow: null,
                startWithElem: 0,
                autoRotate: true,
                elementPP: ".ptk-element-pp"
            };
            this.options = Object.extend(this.defaults, b);
            this.container = $$(this.options.elementsContainerSelector)[0];
            this.elements = $$(this.options.elementsContainerSelector + " " + this.options.elementSelector);
            this.elementPP = $$(this.options.elementsContainerSelector + " " + this.options.elementPP)[0];
            this.elementsTotal = this.elements.length;
            this.currentElementNum = this.options.startWithElem;
            this.elements.each(function(e, d) {
                if (!(d == this.currentElementNum && e.hasClassName("active"))) {
                    e.hide()
                }
                e.identify()
            }.bind(this));
            if (!this.elements[this.currentElementNum].hasClassName("active")) {
                this.showElement(this.elements[this.currentElementNum])
            }
            if (this.options.autoStart) {
                this.start()
            }
            if (this.options.autoRotate) {
                var c = "noPP";
                if (this.elementPP) {
                    this.elementPP.observe("keyup", function(d) {
                        if ((d.keyCode == 13) || (d.which == 13)) {
                            this.click()
                        }
                    });
                    this.elementPP.observe("click", function() {
                        this.toggleClassName("stop");
                        if (this.hasClassName("stop")) {
                            c = true;
                            a.stop()
                        } else {
                            c = false;
                            a.start()
                        }
                    })
                }
                this.container.observe("mouseenter", function() {
                    if (c == "noPP" || c == false) {
                        try {
                            a.stop()
                        } catch (d) {
                            if (window.console) {
                                console.log(d)
                            }
                        }
                    }
                });
                this.container.observe("mouseleave", function() {
                    if (c == "noPP" || c == false) {
                        a.start()
                    }
                })
            }
        },
        start: function() {
            if (this.elementsTotal > 1) {
                if (this.pe != null) {
                    clearInterval(this.pe.timer)
                }
                this.pe = new PeriodicalExecuter(this.autoRotate.bindAsEventListener(this), this.options.delay)
            }
        },
        autoRotate: function() {
            if (!this.isPaused) {
                this.next()
            }
        },
        stop: function() {
            if (this.elementsTotal > 1) {
                if (this.pe != null) {
                    this.pe.stop()
                }
            }
        },
        pause: function() {
            this.isPaused = true
        },
        resume: function() {
            this.isPaused = false
        },
        setNextElement: function(b, a) {
            if (b != -1) {
                if (this.currentElement.next()) {
                    this.nextElement = this.currentElement.next()
                } else {
                    this.nextElement = this.elements[0]
                }
            } else {
                if (this.currentElement.previous()) {
                    this.nextElement = this.currentElement.previous()
                } else {
                    this.nextElement = this.elements[this.elementsTotal - 1]
                }
            }
        },
        hideElement: function(c) {
            if (this.options.duration > 0) {
                if (c) {
                    var b = {
                        duration: this.options.duration
                    };
                    if (this.options.hideEffect == "Opacity") {
                        b = {
                            duration: this.options.duration,
                            from: 1,
                            to: 0
                        }
                    }
                    new Effect[this.options.hideEffect](c, b)
                }
            } else {
                if (c) {
                    c.hide()
                }
            }
            c.removeClassName("active").addClassName("hide-slide");
            var a = c.select("a");
            if (a.length) {
                a.invoke("writeAttribute", "tabindex", -1)
            }
            this.container.fire("ptkElementRotator:elementHide", {
                element: c,
                elementNum: this.currentElementNum
            })
        },
        showElement: function(d) {
            var c = d.select("a");
            if (c.length) {
                c.invoke("writeAttribute", "tabindex", "")
            }
            d.removeClassName("hide-slide");
            if (this.options.duration > 0) {
                this.isProcessing = true;
                if (d) {
                    var b = this;
                    var a = {
                        duration: this.options.duration,
                        afterFinish: function() {
                            d.addClassName("active");
                            b.onShowElement(d);
                            b.container.fire("ptkElementRotator:afterElementShow", {
                                element: d,
                                elementNum: b.currentElementNum
                            })
                        }
                    };
                    if (this.options.showEffect == "Opacity") {
                        a = {
                            duration: this.options.duration,
                            from: 0,
                            to: 1,
                            afterFinish: function() {
                                d.addClassName("active");
                                b.onShowElement(d);
                                b.container.fire("ptkElementRotator:afterElementShow", {
                                    element: d,
                                    elementNum: b.currentElementNum
                                })
                            }
                        }
                    }
                    new Effect[this.options.showEffect](d, a)
                }
            } else {
                if (d) {
                    d.show();
                    d.addClassName("active")
                }
            }
            this.container.fire("ptkElementRotator:elementShow", {
                element: d,
                elementNum: this.currentElementNum
            })
        },
        onShowElement: function(a) {
            this.isProcessing = false;
            this.currentElement = a;
            if (Object.isFunction(this.onElementShow)) {
                this.onElementShow().bindAsEventListener(this)
            }
        },
        next: function() {
            if (this.isProcessing) {
                return
            }
            this.hideElement(this.elements[this.currentElementNum]);
            this.currentElementNum++;
            if (this.currentElementNum >= this.elementsTotal) {
                this.currentElementNum = 0
            }
            this.showElement(this.elements[this.currentElementNum])
        },
        prev: function() {
            if (this.isProcessing) {
                return
            }
            this.hideElement(this.elements[this.currentElementNum]);
            this.currentElementNum--;
            if (this.currentElementNum < 0) {
                this.currentElementNum = this.elementsTotal - 1
            }
            this.showElement(this.elements[this.currentElementNum])
        },
        showElementByNum: function(a) {
            var b = parseInt(a, 10);
            if (a >= this.elementsTotal) {
                b = this.elementsTotal - 1
            }
            if (a < 0) {
                b = 0
            }
            if (b == this.currentElementNum) {
                return
            }
            this.hideElement(this.elements[this.currentElementNum]);
            this.currentElementNum = b;
            this.showElement(this.elements[this.currentElementNum])
        },
        getDuration: function(a, c) {
            if (navigator.appVersion.indexOf("MSIE") > 0) {
                return c
            }
            var b = a.innerHTML;
            if (b.indexOf('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"') >= 0) {
                return 0
            } else {
                return c
            }
        }
    });
    PTK.ElementRotator.Controls = {};
    PTK.ElementRotator.Controls = Class.create({
        initialize: function(d, b) {
            var a = this;
            this.defaults = {
                controlNextSelector: ".ptk-element-rotator-control-next",
                controlPrevSelector: ".ptk-element-rotator-control-prev",
                controlPagerSelector: ".ptk-element-rotator-control-number"
            };
            this.options = Object.extend(this.defaults, b);
            this.controlNext = $$(d.options.elementsContainerSelector + " " + this.options.controlNextSelector)[0];
            this.controlPrev = $$(d.options.elementsContainerSelector + " " + this.options.controlPrevSelector)[0];
            this.controlPager = $$(d.options.elementsContainerSelector + " " + this.options.controlPagerSelector);
            this.controlPager[d.currentElementNum].addClassName("selected");

            function c(g, h, f) {
                if ((g.keyCode == 13) || (g.which == 13)) {
                    if (!d.isProcessing) {
                        h(f + "")
                    }
                    g.stop()
                }
            }
            if (this.controlNext) {
                this.controlNext.observe("click", function(f) {
                    if (!d.isProcessing) {
                        d.next()
                    }
                    f.stop()
                });
                this.controlNext.observe("keypress", function(f) {
                    c(f, d.next.bindAsEventListener(d))
                });
                this.controlNext.writeAttribute("tabindex", "0");
                this.controlNext.select("a").invoke("writeAttribute", "tabindex", "-1")
            }
            if (this.controlPrev) {
                this.controlPrev.observe("click", function(f) {
                    if (!d.isProcessing) {
                        d.prev()
                    }
                    f.stop()
                });
                this.controlPrev.observe("keypress", function(f) {
                    c(f, d.prev.bindAsEventListener(d))
                });
                this.controlPrev.writeAttribute("tabindex", "0");
                this.controlPrev.select("a").invoke("writeAttribute", "tabindex", "-1")
            }
            this.controlPager.each(function(f, e) {
                f.observe("click", function(g) {
                    if (!d.isProcessing) {
                        d.showElementByNum(e)
                    }
                    f.removeClassName("kb-focus-bg");
                    g.stop()
                });
                f.observe("keypress", function(g) {
                    c(g, d.showElementByNum.bindAsEventListener(d), e)
                });
                f.observe("focus", function(g) {
                    this.addClassName("kb-focus-bg")
                });
                f.addClassName("kb-focus-bg");
                f.writeAttribute("tabindex", "0");
                f.select("a").invoke("writeAttribute", "tabindex", "-1")
            });
            d.container.observe("ptkElementRotator:elementHide", function(f) {
                var e = a.controlPager[f.memo.elementNum];
                e.removeClassName("selected")
            });
            d.container.observe("ptkElementRotator:elementShow", function(f) {
                var e = a.controlPager[f.memo.elementNum];
                e.addClassName("selected")
            })
        }
    })
};