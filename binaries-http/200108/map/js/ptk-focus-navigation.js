var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.FocusNavigation == "undefined") {
    PTK.FocusNavigation = {};
    PTK.FocusNavigation = Class.create({
        defaults: {
            liSelector: ".opl-navigation__li",
            toggleSelector: ".opl-navigation__toggle",
            focusCssClass: "opl-navigation__li--focus",
            childSelector: ".opl-navigation__child",
            searchTriggerSelector: ".opl-navigation__search-trigger",
            searchWrapperSelector: ".opl-navigation__search-wrapper",
            searchContentSelector: ".opl-navigation__search"
        },
        options: {},
        initialize: function(b, c) {
            var a = this;
            this.defaults = {
                headerId: "header",
                mainContentElId: "main-box",
                headerFixedClass: "opl-header--fixed",
                liSelector: ".opl-navigation__li",
                toggleSelector: ".opl-navigation__toggle",
                focusCssClass: "opl-navigation__li--focus",
                childSelector: ".opl-navigation__child",
                searchTriggerSelector: ".opl-navigation__search-trigger",
                searchWrapperSelector: ".opl-navigation__search-wrapper",
                searchContentSelector: ".opl-navigation--search",
                searchCloseSelector: ".opl-navigation__search-close"
            };
            this.options = Object.extend(this.defaults, c);
            this.isFixed = false;
            this.context = $(this.options.headerId);
            this.body = $$("body")[0];
            this.contents = this.context.select(this.options.liSelector);
            this.toggles = this.context.select(this.options.toggleSelector);
            this.mainContentEl = $(this.options.mainContentElId);
            this.searchTrigger = this.context.select(this.options.searchTriggerSelector);
            this.searchWrapper = this.context.select(this.options.searchWrapperSelector)[0];
            this.searchContent = this.context.select(this.options.searchContentSelector)[0];
            this.searchClose = this.context.select(this.options.searchCloseSelector)[0];
            this.searchResult = $("search-result");
            if (this.searchResult) {
                this.searchResult.hide()
            }
            if (this.searchTrigger.length > 0) {
                this.searchTrigger.each(function(d) {
                    d.observe("click", a.onSearchClick.bind(a))
                });
                if (this.searchClose) {
                    this.searchClose.observe("click", this.closeSearch.bind(this))
                }
                document.observe("keypress", this.onSearchWrite.bind(this));
                document.observe("keyup", this.onSearchEsc.bind(this));
                document.observe("click", this.closeSearch.bind(this));
                document.observe("scroll", this.closeSearch.bind(this));
                if (this.searchContent) {
                    var a = this;
                    this.searchContent.observe("click", function(d) {
                        d.stopPropagation()
                    });
                    a.searchContent.observe("click", a.switchColor.bind(a))
                }
            }
            this.drawerMenu();
            this.drawerLinks()
        },
        switchColor: function() {
            $$(this.options.searchTriggerSelector).each(function(a) {
                a.removeClassName("active")
            })
        },
        onSearchClick: function(c) {
            c.preventDefault();
            var a = this;
            var b;
            $$(".opl-navigation__mobile-visible").each(function(e) {
                b = e.select(a.options.searchTriggerSelector);
                if (b.length) {
                    throw $break
                }
            });
            if (b.length) {
                if (b[0].hasClassName("active")) {} else {
                    b[0].addClassName("active");
                    $$(this.searchTrigger).each(function(e) {
                        e.setStyle({
                            backgroundPosition: "100% 100%"
                        })
                    })
                }
            }
            if (this.searchContent.hasClassName("is-active")) {
                var d = $("searchPhrase");
                d.setValue("");
                this.searchResult.hide()
            } else {
                c.stopPropagation();
                if (this.activeMenuElement) {
                    this.hideMenu(c, function() {
                        a.searchContent.addClassName("is-active");
                        a.isAnimated = false
                    })
                } else {
                    a.searchContent.addClassName("is-active")
                }
                setTimeout(function() {
                    var e = $("searchPhrase");
                    e.focus()
                }, 80)
            }
        },
        onSearchWrite: function(c) {
            var b = document.activeElement.tagName.toLowerCase();
            var a = this;
            if ((b == "body" || b == "div") && c.which <= 122 && c.which >= 48 && !c.ctrlKey) {
                if (this.activeMenuElement) {
                    this.hideMenu(c, function() {
                        a.searchContent.addClassName("is-active");
                        a.isAnimated = false
                    })
                } else {
                    a.searchContent.addClassName("is-active")
                }
                setTimeout(function() {
                    var d = $("searchPhrase");
                    d.focus();
                    d.setValue(d.getValue() + c.key)
                }, 80)
            }
        },
        onSearchEsc: function(a) {
            if (a.which == 27) {
                this.closeSearch()
            }
        },
        closeSearch: function(c) {
            if (this.searchContent.hasClassName("is-active")) {
                if ((c && c.target.nodeName.toLowerCase() == "a") && (c.target.hasClassName("opl-navigation__search-trigger"))) {
                    var d = $("searchPhrase");
                    d.setValue("");
                    this.searchResult.hide()
                } else {
                    var a = this;
                    var b;
                    $$(".opl-navigation__mobile-visible").each(function(e) {
                        b = e.select(a.options.searchTriggerSelector);
                        if (b.length) {
                            throw $break
                        }
                    });
                    this.searchContent.removeClassName("is-active");
                    var d = $("searchPhrase");
                    d.setValue("");
                    this.searchResult.hide();
                    if (b.length) {
                        if (b[0].hasClassName("active")) {
                            b[0].removeClassName("active")
                        } else {
                            b[0].addClassName("active")
                        }
                    }
                }
            }
        },
        drawerMenu: function() {
            if (this.context.select(".opl-header__drawer").length) {
                this.menuLists = this.context.select(".opl-navigation--second .opl-navigation__list:not(.opl-navigation__child) > .opl-navigation__li");
                var b = this.context.select(".opl-navigation--second .opl-navigation__list:not(.opl-navigation__child) > .opl-navigation__li > .opl-navigation__item a");
                var a = this;
                this.menuLists.each(function(c) {
                    var d = c.select(".opl-navigation__drawer");
                    if (d && d.length) {
                        d[0].setStyle({
                            display: "none"
                        });
                        d[0].addClassName("opl-navigation--drawer-show")
                    }
                });
                b.each(function(c) {
                    c.observe("click", a.toggleMenu.bind(a))
                });
                document.observe("click", this.hideMenu.bind(this));
                document.observe("scroll", this.hideMenu.bind(this))
            }
        },
        toggleMenu: function(d) {
            d.stopPropagation();
            var a = this;
            var c = d.currentTarget.up(".opl-navigation__li");
            var b = c.select(".opl-navigation__drawer");
            if (!this.isAnimated) {
                this.isAnimated = true;
                if (c.hasClassName("opl-navigation__li--active")) {
                    this.hideMenu(d)
                } else {
                    if (b.length) {
                        if (this.activeMenuElement) {
                            this.hideMenu(d, function() {
                                a.showMenu(d, c, b)
                            })
                        } else {
                            this.showMenu(d, c, b)
                        }
                    }
                }
            }
        },
        showMenu: function(d, c, b) {
            d.preventDefault();
            var a = this;
            this.closeSearch();
            this.activeMenuElement = c;
            c.addClassName("opl-navigation__li--active");
            Effect.SlideDown(b[0], {
                duration: 0.6,
                afterFinish: function() {
                    a.isAnimated = false
                }
            })
        },
        hideMenu: function(b, c) {
            if (b.which == 3) {
                return false
            } else {
                var a = this;
                if (this.activeMenuElement) {
                    this.activeMenuElement.removeClassName("opl-navigation__li--active");
                    var e = this.activeMenuElement.select(".opl-navigation__drawer");
                    if (c) {
                        Effect.SlideUp(e[0], {
                            duration: 0.6,
                            afterFinish: c
                        })
                    } else {
                        Effect.SlideUp(e[0], {
                            duration: 0.6,
                            afterFinish: function() {
                                a.isAnimated = false
                            }
                        })
                    }
                    this.activeMenuElement = ""
                }
            }
        },
        drawerLinks: function() {
            var b = this.context.select(".drawerLinks");
            this.drawerContent = this.context.select(".opl-navigation--drawer-content");
            this.drawerContent.each(function(c) {
                c.setStyle({
                    display: "none"
                });
                c.addClassName("opl-navigation--drawer-content-show")
            });
            if (b.length) {
                var a = this;
                b.each(function(c) {
                    c.observe("click", a.drawerLinkClick.bind(a))
                })
            }
        },
        drawerLinkClick: function(c) {
            c.stopPropagation();
            var a = this;
            var d = c.currentTarget.id;
            var b = this.context.select("." + d);
            if (!this.isAnimated) {
                if (b.length) {
                    this.isAnimated = true;
                    if (this.activeContentElement) {
                        if (this.activeContentElement == b[0]) {
                            this.hideLinkContent()
                        } else {
                            this.hideLinkContent(function() {
                                a.showLinkContent(c, b)
                            })
                        }
                    } else {
                        this.showLinkContent(c, b)
                    }
                }
            }
        },
        showLinkContent: function(c, b) {
            c.preventDefault();
            var a = this;
            this.activeContentElement = b[0];
            Effect.SlideDown(this.activeContentElement, {
                duration: 0.6,
                afterFinish: function() {
                    a.isAnimated = false
                }
            })
        },
        hideLinkContent: function(b) {
            var a = this;
            if (this.activeContentElement) {
                if (b) {
                    Effect.SlideUp(this.activeContentElement, {
                        duration: 0.6,
                        afterFinish: b
                    })
                } else {
                    Effect.SlideUp(this.activeContentElement, {
                        duration: 0.6,
                        afterFinish: function() {
                            a.isAnimated = false
                        }
                    })
                }
                this.activeContentElement = ""
            }
        },
        calculateHeader: function() {
            var d = document.viewport.getScrollOffsets()["top"];
            var b = this.context.getLayout();
            var a = b.get("border-box-height");
            var c = 0;
            if (d >= (a)) {
                if (!this.isFixed) {
                    this.mainContentEl.setStyle({
                        "padding-top": a + c
                    });
                    this.context.addClassName(this.options.headerFixedClass);
                    this.isFixed = true
                }
            } else {
                if (this.isFixed) {
                    this.isFixed = false;
                    this.context.removeClassName(this.options.headerFixedClass);
                    this.mainContentEl.setStyle({
                        "padding-top": 0
                    })
                } else {
                    this.mainContentEl.setStyle({
                        "padding-top": 0
                    })
                }
            }
        },
        debounceCalculateHeader: function() {
            setTimeout(this.calculateHeader.bind(this), 0)
        },
        initTopMenu: function() {
            var b = this;
            var c = b.context.select(".opl-header__navigation")[1];
            b.myTopMenu = c.select(".opl-navigation--second .opl-navigation__list")[0];
            b.myTopMenu.select("ul").each(function(e, d) {
                e.writeAttribute("data-index", d)
            });
            var a = b.myTopMenu.select("li > .opl-navigation__item > a");
            b.state = {};
            a.each(function(d) {
                d.observe("click", function(k) {
                    k.stopPropagation();
                    var j = this.up().next();
                    var g = false;
                    var h = this.readAttribute("href");
                    g = h === undefined || h === "" || h === "#";
                    j = j !== undefined ? j : false;
                    if (j && g) {
                        k.preventDefault();
                        b.topMenuToggle(j, j.getStyle("display") == "none" ? true : false)
                    } else {
                        b.allowed = b.state = b._parents($(this));
                        b.myTopMenu.select("ul").each(function(m) {
                            if (m.getStyle("display") != "none") {
                                var l = m,
                                    e = l.readAttribute("data-index");
                                if (!b.allowed.hasOwnProperty(e)) {
                                    b.topMenuToggle(l, false)
                                }
                            }
                        })
                    }
                    k.preventDefault();
                    b.myTopMenu.select("li").each(function(e) {
                        e.removeClassName("active")
                    });
                    var f = this.up();
                    var i = b.parents(f, "li");
                    f.addClassName("active");
                    i.each(function(e) {
                        e.addClassName("active")
                    })
                })
            });
            b.myTopMenu.select("li > .opl-navigation__item > a").each(function(d) {
                d.observe("click", function(h) {
                    h.preventDefault();
                    var g = this.tagName === "A" ? true : false;
                    var f = g ? this.readAttribute("href") : "";
                    if (g && f !== "#") {
                        location.href = f
                    } else {
                        if (g) {}
                    }
                })
            });
            document.observe("click", function(g) {
                var d, f;
                d = b.myTopMenu.select("li");
                f = b.myTopMenu.select("ul");
                d.each(function(e) {
                    e.removeClassName("active");
                    e.removeClassName("open")
                });
                f.each(function(e) {
                    e.writeAttribute("style", false)
                })
            })
        },
        topMenuToggle: function(e, c) {
            var b = this,
                a = e.readAttribute("data-index"),
                d = e.up();
            if (c) {
                d.addClassName("open");
                e.setStyle({
                    display: "block"
                });
                b.state[a] = 1;
                b.allowed = b.state = b._parents(e);
                b.allowed[a] = b.state[a] = 1;
                b.myTopMenu.select("ul").each(function(h) {
                    if (h.getStyle("display") != "none") {
                        var g = h,
                            f = g.readAttribute("data-index");
                        if (!b.allowed.hasOwnProperty(f)) {
                            b.topMenuToggle(g, false)
                        }
                    }
                })
            } else {
                d.removeClassName("open");
                e.setStyle({
                    display: "none"
                });
                b.state[a] = 0
            }
        },
        parents: function(c, d) {
            var b = c.up(d),
                a = [];
            while (b !== undefined) {
                a.push(b);
                b = b.up(d)
            }
            return a
        },
        _parents: function(d, e) {
            var a = {},
                c = d.up(),
                b = this.parents(c, "ul");
            b.each(function(h) {
                var g = h,
                    f = g.readAttribute("data-index");
                if (!f) {
                    return false
                }
                a[f] = e ? g : 1
            });
            return a
        },
        hideSearch: function(b) {
            var a = false;
            this.searchContent.descendants().each(function(c) {
                if (c === b.target) {
                    a = true
                }
            });
            if (!a) {
                this.searchWrapper.removeClassName("is-active");
                this.context.removeClassName("is-search-active");
                this.body.stopObserving("focusin", this.hideSearch.bind(this));
                this.body.stopObserving("click", this.hideSearch.bind(this));
                this.body.setStyle({
                    overflow: ""
                })
            }
        },
        onToggleClick: function(c) {
            c.preventDefault();
            var b = $(c.target).up(this.options.liSelector);
            if (b.hasClassName(this.options.focusCssClass)) {
                b.removeClassName(this.options.focusCssClass);
                this.body.stopObserving("focusin", this.onBody.bind(this));
                this.body.stopObserving("click", this.onBody.bind(this))
            } else {
                var a = this;
                b.siblings("." + this.options.focusCssClass).each(function(d) {
                    d.removeClassName(a.options.focusCssClass)
                });
                b.addClassName(this.options.focusCssClass);
                this.body.observe("focusin", this.onBody.bind(this));
                this.body.observe("click", this.onBody.bind(this))
            }
        },
        onBody: function(e) {
            var c = this;
            var b = [];
            this.contents.each(function(f) {
                if (f.hasClassName(c.options.focusCssClass)) {
                    b.push(f)
                }
            });
            var d = false;
            this.context.descendants().each(function(f) {
                if (f === e.target) {
                    d = true
                }
            });
            if (!d) {
                b.each(function(f) {
                    f.removeClassName(c.options.focusCssClass)
                });
                this.body.stopObserving("focusin", this.onBody.bind(this));
                this.body.stopObserving("click", this.onBody.bind(this))
            }
            if (e.type !== "click") {
                var a = 0;
                b.each(function(g) {
                    var f = false;
                    g.select(c.options.childSelector)[0].descendants().each(function(h) {
                        if (h === e.target) {
                            f = true
                        }
                    });
                    if (!f) {
                        g.removeClassName(c.options.focusCssClass);
                        a++
                    }
                });
                if (b.length == a) {
                    this.body.stopObserving("focusin", this.onBody.bind(this));
                    this.body.stopObserving("click", this.onBody.bind(this))
                }
            }
        }
    })
};