var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.ShowHide == "undefined") {
    PTK.ShowHide = {};
    PTK.ShowHide = Class.create({
        initialize: function(b) {
            var a = this;
            this.defaults = {
                triggerSelector: ".ptk-show-hide-trigger",
                changeText: false,
                texts: ["rozwiń", "zwiń"],
                changeClass: true,
                classes: ["link-show", "link-hide"],
                typeOfHide: false,
                onStartHide: false,
                callback: null,
                groupCallback: null,
                containerId: null,
                dependingBuild: {
                    element: "",
                    direction: ""
                },
                exceptionOnStartHide: false
            };
            this.options = Object.extend(this.defaults, b);
            this.container = (this.options.containerId && $(this.options.containerId)) ? $(this.options.containerId) : $$("body")[0];
            this.triggers = this.container.select(this.options.triggerSelector);
            this.hiddenStates = {};
            this.triggerElements = {};
            this.dependencies = {};
            this.triggers.each(function(d, c) {
                if (!d.getStorage().toObject().prototype_event_registry && !d.hasClassName("ptk-show-hide-initialized")) {
                    a.saveElements(d);
                    d.observe("click", a.handleClick.bindAsEventListener(a, d));
                    d.observe("ptkShowHide:externalClick", a.handleClick.bindAsEventListener(a, d));
                    if (a.options.onStartHide) {
                        if (!d.hasClassName("exception-on-start-hide")) {
                            a.handleClick(null, d, false)
                        }
                    }
                    d.addClassName("ptk-show-hide-initialized")
                }
            })
        },
        saveElements: function(a) {
            var i = a.identify();
            this.triggerElements[i] = [];
            if (!a.hasClassName("ptk-show-hide-group")) {
                var c = a.className.split("ptk-show-hide-el-")[1].split(" ")[0],
                    b = $(c);
                if (this.options.dependingBuild.element && this.options.dependingBuild.direction && !b) {
                    var e;
                    switch (this.options.dependingBuild.direction) {
                        case "previous":
                            e = a.previous(this.options.dependingBuild.element);
                            break;
                        case "next":
                            e = a.next(this.options.dependingBuild.element);
                            break;
                        case "down":
                            e = a.down(this.options.dependingBuild.element);
                            break;
                        case "up":
                            e = a.up(this.options.dependingBuild.element);
                            break;
                        default:
                            console.log("")
                    }
                    if (e) {
                        e.setAttribute("id", c);
                        b = $(c)
                    }
                }
                this.triggerElements[i].push(b);
                this.hiddenStates[i] = b.hasClassName("ptk-show-hide-hidden")
            } else {
                var f = this.container.select(".ptk-show-hide-trigger-" + i),
                    g = this.container.select(".ptk-show-hide-dependency-" + i);
                if (f && f.length) {
                    var d = true,
                        h = this;
                    f.each(function(k, j) {
                        if (j == 0) {
                            h.hiddenStates[i] = k.hasClassName("ptk-show-hide-hidden")
                        }
                        h.triggerElements[i].push(k)
                    })
                }
                if (g && g.length) {
                    this.dependencies[i] = [];
                    g.each(function(j) {
                        h.dependencies[i].push(j.identify())
                    })
                }
            }
        },
        handleClick: function(d, c, f) {
            var g = c.id,
                e = (f != null) ? f : this.hiddenStates[g],
                b = this;
            this.triggerElements[g].each(function(h) {
                b.handleClickOfElement(c, h, e)
            });
            this.changeTrigger(c, e);
            this.handleDependencies(g, e);
            this.hiddenStates[g] = !e;
            var a = $(this.triggerElements[g][0].id + "-expanded");
            if (a) {
                a.setValue(!(a.getValue() == "true"))
            }
            if (this.options.groupCallback && Object.isFunction(this.options.groupCallback) && this.triggerElements[g].length > 0) {
                this.options.groupCallback(c, e, this.triggerElements[g])
            }
            c.fire("ptkShowHide:stateChanged", {
                trigger: c
            });
            if (d) {
                d.stop()
            }
        },
        handleDependencies: function(c, b) {
            var a = this;
            if (typeof this.dependencies[c] != "undefined") {
                this.dependencies[c].each(function(d) {
                    if (typeof a.dependencies[d] != "undefined" && a.dependencies[d].length > 0) {
                        a.handleDependencies(d)
                    } else {
                        if (typeof a.triggerElements[d] != "undefined") {
                            a.triggerElements[d].each(function(e) {
                                if (!b) {
                                    a.hideElement(e)
                                } else {
                                    var f = a.hiddenStates[d];
                                    if (!f) {
                                        a.showElement(e)
                                    }
                                }
                            })
                        }
                    }
                })
            }
        },
        buildDependencies: function() {
            var b = this;
            var a = trigger.className.split("ptk-show-hide-el-")[1].split(" ")[0],
                c = $(a);
            this.options.dependingBuild
        },
        handleClickOfElement: function(a, b, c) {
            if (!c) {
                this.hideElement(b)
            } else {
                this.showElement(b)
            }
            if (this.options.callback && Object.isFunction(this.options.callback)) {
                this.options.callback(a, c, b)
            }
        },
        changeTrigger: function(a, b) {
            if (!b) {
                if (this.options.changeText) {
                    a.innerHTML = this.options.texts[0]
                }
                if (this.options.changeClass) {
                    a.removeClassName(this.options.classes[1]).addClassName(this.options.classes[0])
                }
            } else {
                if (this.options.changeText) {
                    a.innerHTML = this.options.texts[1]
                }
                if (this.options.changeClass) {
                    a.removeClassName(this.options.classes[0]).addClassName(this.options.classes[1])
                }
            }
        },
        hideElement: function(a) {
            a.addClassName("ptk-show-hide-hidden")
        },
        showElement: function(a) {
            a.removeClassName("ptk-show-hide-hidden")
        }
    })
}
if (typeof PTK.ShowHideMouse == "undefined") {
    PTK.ShowHideMouse = {};
    PTK.ShowHideMouse = Class.create(PTK.ShowHide, {
        initialize: function($super, b) {
            this.defaults = {
                triggerSelector: ".ptk-show-hide-trigger",
                changeText: false,
                texts: [" ", " "],
                changeClass: true,
                classes: [" ", " "]
            };
            this.options = Object.extend(this.defaults, b);
            var a = this;
            this.triggers = $$(this.options.triggerSelector);
            this.triggers.each(function(d, c) {
                d.observe("mouseleave", a.handleLeave.bindAsEventListener(a, d));
                d.observe("mouseenter", a.handleEnter.bindAsEventListener(a, d))
            })
        },
        handleLeave: function(d, b) {
            var a = b.className.split("ptk-show-hide-el-")[1].split(" ")[0],
                c = $(a);
            if (c) {
                this.hideElement(c)
            }
        },
        handleEnter: function(d, b) {
            var a = b.className.split("ptk-show-hide-el-")[1].split(" ")[0],
                c = $(a);
            if (c) {
                this.showElement(c)
            }
        }
    })
};