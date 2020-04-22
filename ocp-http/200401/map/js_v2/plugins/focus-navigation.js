define("plugins/focus-navigation", ["require", "adapter/dom", "common/basePlugin", "adapter/jsClass", "jq", "adapter/enumerable"], function(e) {
    var t = e("adapter/dom"),
        n = e("common/basePlugin"),
        r = e("adapter/jsClass"),
        i = e("jq"),
        s = e("adapter/enumerable"),
        o = r.Class(n, {
            constructor: function(e, n, r, i) {
                var u = {
                    headerFixedClass: "opl-header--fixed",
                    liSelector: ".opl-navigation__li",
                    toggleSelector: ".opl-navigation__toggle",
                    focusCssClass: "opl-navigation__li--focus",
                    childSelector: ".opl-navigation__child",
                    searchTriggerSelector: ".opl-navigation__search-trigger",
                    searchWrapperSelector: ".opl-navigation__search-wrapper",
                    searchContentSelector: ".opl-navigation--search",
                    searchCloseSelector: ".opl-navigation__search-close",
                    searchInputSelector: "#searchPhrase",
                    searchResultSelector: "#search-result"
                };
                this.context = t.find("#" + e), this.body = t.find("body"), this.mainEl = t.find("#opl"), this.mainContentEl = t.find("#main-box"), this.settings = s.defaults(i, u), this.isFixed = !1, o.$super.call(this, e, n, r, i), this.init()
            },
            init: function() {
                this.contents = t.find(this.settings.liSelector, this.context), this.toggles = t.find(this.settings.toggleSelector, this.context), this.searchTrigger = t.find(this.settings.searchTriggerSelector, this.context), this.searchWrapper = t.find(this.settings.searchWrapperSelector, this.context), this.searchContent = t.find(this.settings.searchContentSelector, this.context), this.searchClose = t.find(this.settings.searchCloseSelector, this.context), this.searchPhraseInput = t.find(this.settings.searchInputSelector, this.context), this.searchResult = t.find(this.settings.searchResultSelector, this.context), t.on(this.searchTrigger, "click", null, null, this.onSearchClick.bind(this)), t.on(this.searchClose, "click", null, null, this.hideSearch.bind(this)), t.on(this.searchContent, "click", null, null, this.switchColor.bind(this)), t.on(window, "keypress", null, null, this.onSearchWrite.bind(this)), t.on(window, "keyup", null, null, this.onSearchEsc.bind(this)), t.on(window, "click", null, null, this.hideSearch.bind(this)), t.on(window, "scroll", null, null, this.hideSearch.bind(this)), t.on(this.searchContent, "click", null, null, function(e) {
                    e.stopPropagation()
                }), this.drawerMenu(), this.drawerLinks()
            },
            switchColor: function() {
                t.removeClass(this.settings.searchTriggerSelector, "active")
            },
            openSpecUrl: function(e) {
                setTimeout(function() {
                    location.href = e
                }, 400)
            },
            onSearchClick: function(e) {
                e.preventDefault();
                var n = t.find(this.settings.searchTriggerSelector, ".opl-navigation__mobile-visible");
                n.length && (t.hasClass(n, "active") ? t.removeClass(n, "active") : t.addClass(n, "active"));
                if (!t.hasClass(this.searchContent, "is-active")) {
                    e.stopPropagation();
                    if (this.menuActive) {
                        var r = this;
                        this.hideMenu(e, function() {
                            t.addClass(r.searchContent, "is-active")
                        })
                    } else t.addClass(this.searchContent, "is-active");
                    var i = this.searchPhraseInput[0];
                    setTimeout(function() {
                        i.focus()
                    }, 80)
                }
            },
            onSearchWrite: function(e) {
                var n = t.getProperty(document.activeElement, "tagName").toLowerCase();
                if ((n == "body" || n == "div") && e.which <= 122 && e.which >= 48 && !e.ctrlKey) {
                    if (this.menuActive) {
                        var r = this;
                        this.hideMenu(e, function() {
                            t.addClass(r.searchContent, "is-active")
                        })
                    } else t.addClass(this.searchContent, "is-active");
                    var i = this.searchPhraseInput[0];
                    setTimeout(function() {
                        i.focus(), i.value = i.value + e.key
                    }, 80)
                }
            },
            hideSearch: function(e) {
                if (this.searchContent && t.hasClass(this.searchContent, "is-active"))
                    if (e && t.hasClass(e.target, "opl-navigation__search-trigger")) {
                        var n = this.searchPhraseInput[0];
                        n.value = "", t.setAttribute(".opl-navigation__search-input", "value", "")
                    } else {
                        t.removeClass(this.searchContent, "is-active");
                        var n = this.searchPhraseInput[0];
                        n.value = "", t.setAttribute(".opl-navigation__search-input", "value", "");
                        var r = t.find(this.settings.searchTriggerSelector, ".opl-navigation__mobile-visible");
                        r.length && t.hasClass(r, "active") && t.removeClass(r, "active")
                    }
            },
            onSearchEsc: function(e) {
                e.which == 27 && this.hideSearch()
            },
            onToggleClick: function(e) {
                e.preventDefault();
                var n = t.parent(t.find(e.currentTarget), this.settings.liSelector);
                t.hasClass(n, this.settings.focusCssClass) ? (t.removeClass(n, this.settings.focusCssClass), t.off(this.body, "focusin click", null, null, this.onBody.bind(this))) : (t.siblings(n, "." + this.settings.focusCssClass).removeClass(this.settings.focusCssClass), t.addClass(n, this.settings.focusCssClass), t.on(this.body, "focusin click", null, null, this.onBody.bind(this)))
            },
            drawerMenu: function() {
                if (t.find(".opl-header__drawer", this.context).length) {
                    this.menuLists = t.find(".opl-navigation--second .opl-navigation__list:not(.opl-navigation__child) > .opl-navigation__li", this.context);
                    var e = t.find(".opl-navigation--second .opl-navigation__list:not(.opl-navigation__child) > .opl-navigation__li > .opl-navigation__item a", this.context);
                    t.on(window, "click scroll", this.hideMenu.bind(this)), t.on(e, "click", this.toggleMenu.bind(this))
                }
            },
            toggleMenu: function(e) {
                e.stopPropagation();
                var n = this,
                    r = t.parent(e.currentTarget, ".opl-navigation__li"),
                    i = t.find(".opl-navigation__drawer", r);
                t.hasClass(r, "opl-navigation__li--active") ? this.hideMenu(e) : i.length && (t.hasClass(this.menuLists, "opl-navigation__li--active") ? this.hideMenu(e, function() {
                    n.showMenu(e, r, i)
                }) : this.showMenu(e, r, i))
            },
            showMenu: function(e, n, r) {
                e.preventDefault(), this.hideSearch(), this.menuActive = !0, t.addClass(n, "opl-navigation__li--active"), $(r).slideDown(600)
            },
            hideMenu: function(e, n) {
                if (e.which == 3) return !1;
                var r = this;
                this.menuLists && s.each(this.menuLists, function(e) {
                    if (t.hasClass(e, "opl-navigation__li--active")) {
                        t.removeClass(e, "opl-navigation__li--active");
                        var i = t.find(".opl-navigation__drawer", e);
                        typeof n == "function" ? $(i).slideUp(600, n) : $(i).slideUp(600), r.menuActive = !1
                    }
                })
            },
            drawerLinks: function() {
                var e = t.find(".drawerLinks", this.context);
                this.drawerContent = t.find(".opl-navigation--drawer-content", this.context), e.length && t.on(e, "click", this.drawerLinkClick.bind(this))
            },
            drawerLinkClick: function(e) {
                e.stopPropagation();
                var n = e.currentTarget.id,
                    r = this,
                    i = t.find("." + n, this.context);
                i.length && (t.isVisible(i) ? this.hideLinkContent() : t.isVisible(this.drawerContent) ? this.hideLinkContent(function() {
                    r.showLinkContent(e, i)
                }) : this.showLinkContent(e, i))
            },
            showLinkContent: function(e, t) {
                e.preventDefault(), $(t).slideDown(600)
            },
            hideLinkContent: function(e) {
                this.drawerContent && s.each(this.drawerContent, function(n) {
                    t.isVisible(n) && (typeof e == "function" ? $(n).slideUp(600, e) : $(n).slideUp(600))
                })
            },
            calculateHeader: function() {
                var e = t.scrollTop(window),
                    n = t.outerHeight(this.context),
                    r = 0;
                e >= n ? this.isFixed || (t.css(this.mainContentEl, {
                    "padding-top": n + r
                }), t.addClass(this.context, this.settings.headerFixedClass), this.isFixed = !0) : this.isFixed ? (this.isFixed = !1, t.removeClass(this.context, this.settings.headerFixedClass), t.css(this.mainContentEl, "padding-top", 0)) : t.css(this.mainContentEl, "padding-top", 0)
            },
            debounceCalculateHeader: function() {
                setTimeout(this.calculateHeader.bind(this), 0)
            },
            onBody: function(e) {
                var n = t.filter(this.contents, "." + this.settings.focusCssClass);
                t.contains(this.context[0], e.target) || (t.removeClass(n, this.settings.focusCssClass), t.off(this.body, "focusin click", null, null, this.onBody.bind(this)));
                if (e.type !== "click") {
                    var r = 0,
                        i = this;
                    s.each(n, function(n) {
                        t.contains(t.find(i.settings.childSelector, n)[0], e.target) || (t.removeClass(n, i.settings.focusCssClass), r++)
                    }), n.length == r && t.off(this.body, "focusin click", null, null, this.onBody.bind(this))
                }
            }
        });
    return o
});