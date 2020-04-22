define("plugins/dropdown-menu", ["require", "adapter/dom", "common/basePlugin", "adapter/jsClass", "adapter/enumerable", "pubsub"], function(e) {
    var t = e("adapter/dom"),
        n = e("common/basePlugin"),
        r = e("adapter/jsClass"),
        i = e("adapter/enumerable"),
        s = e("pubsub"),
        o = r.Class(n, {
            constructor: function(e, n, r, s) {
                var u = {
                    contentSelector: ".nav__li",
                    topSelector: ".top__li",
                    linkSelector: "a.nav__toggle",
                    childSelector: ".nav__child",
                    focusClass: "nav__li--focus",
                    collapseClass: ".menu-collapse",
                    menuColumn: ".nav__child-list",
                    menuArticleColumn: ".nav__child-list-article-box-outer",
                    menuContent: ".nav__child-content"
                };
                this.context = t.find("#" + e), this.settings = i.defaults(s, u), o.$super.call(this, e, n, r, s), this.context.length > 0 && this.init()
            },
            init: function() {
                this.links = t.find(this.settings.linkSelector, this.context), this.topLinks = t.find(this.settings.topSelector, this.context), this.childs = t.find(this.settings.childSelector, this.context), this.collapses = t.find(this.settings.collapseClass, this.context), t.on(this.links, "click", null, null, this.manageMenu.bind(this)), t.on(this.collapses, "click", null, null, this.collapseMenu.bind(this)), t.on($(document), "click", null, null, this.collapseMenu.bind(this));
                var e = t.find(this.settings.topSelector + ".expand-on-load", this.context);
                e.length > 0 && t.children(e[0], ".nav__toggle")[0].click()
            },
            manageMenu: function(e) {
                e.preventDefault();
                var n = e.currentTarget,
                    r = this.parentElement(n),
                    i = !1,
                    s = "";
                if (t.hasClass(r, this.settings.topSelector.slice(1))) {
                    var o = t.children(r, this.settings.childSelector);
                    o = o.length > 0 ? o[0].id : "", this.toggleClose(o)
                }
                if (t.hasClass(r, this.settings.topSelector.slice(1)) && t.hasClass(r, this.settings.focusClass)) {
                    this.removeClassElement(r);
                    var u = t.children(r, this.settings.childSelector);
                    u.length > 0 && (s = u[0].id);
                    var a = !1
                } else if (t.hasClass(r, this.settings.topSelector.slice(1))) {
                    this.addClassElement(r);
                    var a = !0,
                        u = t.children(r, this.settings.childSelector);
                    u.length > 0 && t.show(u[0], "slide")
                }
                if (a != undefined && a == 1 && this.isChecked(r) === !1) {
                    var f = t.find(this.settings.menuArticleColumn, r)[0];
                    f && t.addClass(t.parents(f, this.settings.contentSelector), this.settings.focusClass), this.heightMenu(r, toggleShowHide = !0)
                }
                this.removeSiblingsClassElements(r, i, s), t.hasClass(r, this.settings.topSelector.slice(1)) || this.addClassElement(r), t.hasClass(r, "has-child") && this.isChecked(r) === !1 && t.addClass(t.find(this.settings.contentSelector, r)[0], this.settings.focusClass), this.heightMenu(r)
            },
            parentElement: function(e) {
                return t.parent(e, this.settings.contentSelector)
            },
            isChecked: function(e) {
                return t.find("." + this.settings.focusClass, e).length === 0 ? !1 : !0
            },
            addClassElement: function(e) {
                t.addClass(e, this.settings.focusClass)
            },
            removeClassElement: function(e) {
                t.removeClass(e, this.settings.focusClass)
            },
            removeSiblingsClassElements: function(e, n, r) {
                t.removeClass(t.siblings(e, !1, this.settings.contentSelector), this.settings.focusClass)
            },
            toggleClose: function(e) {
                var n = this;
                this.childs.length > 0 && i.each(this.childs, function(n) {
                    e == n.id ? t.hide(n, "slide") : t.css(n, {
                        display: "none"
                    })
                })
            },
            heightMenu: function(e) {
                var n = t.find("." + this.settings.focusClass, e);
                n = n.length == 0 ? e[0] : n[n.length - 1];
                var r = t.parent(n, this.settings.menuContent)[0];
                i = t.parent(n, this.settings.menuColumn)[0], s = t.find(this.settings.menuArticleColumn, n)[0];
                if (r && i && s) {
                    var i = this.toggleHeight(i),
                        s = this.toggleHeight(s),
                        o = i > s ? i : s;
                    t.css(r, "height", o + "px")
                }
            },
            toggleHeight: function(e) {
                t.css(e, "height", "auto");
                var n = t.outerHeight(e);
                return t.css(e, "height", ""), n
            },
            collapseMenu: function(e) {
                var n = e.target;
                if (t.parent(n, this.context).length > 0) t.hasClass(n, this.settings.collapseClass.slice(1)) ? (e.preventDefault(), t.hide(t.parent(n, this.settings.childSelector), "slide"), this.removeClassElement(t.parent(n, this.settings.topSelector))) : e.stopPropagation();
                else {
                    var r = t.find(this.options.topSelector + "." + this.options.focusClass, this.context);
                    r.length > 0 && (r = t.children(t.find(r[0]), this.settings.childSelector)[0].id, this.toggleClose(r)), this.removeClassElement(t.find(this.settings.topSelector, this.context))
                }
            },
            stop: function() {}
        });
    return o
});