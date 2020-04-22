var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.DropDownMenu == "undefined") {
    PTK.DropDownMenu = {};
    PTK.DropDownMenu = Class.create({
        initialize: function(b) {
            var a = this;
            this.defaults = {
                menuSelector: "nav-menu",
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
            this.options = Object.extend(this.defaults, b);
            this.context = $(this.options.menuSelector);
            if (this.context) {
                this.childs = this.find(this.options.childSelector, this.context);
                this.context.on("click", this.options.linkSelector, this.manageMenu.bindAsEventListener(this));
                this.context.on("click", this.options.collapseClass, this.collapseMenu.bindAsEventListener(this));
                $(document).on("click", this.collapseMenu.bindAsEventListener(this))
            }
        },
        manageMenu: function(e) {
            e.preventDefault();
            var f = e.target,
                c = f.up(this.options.contentSelector),
                d = false,
                b = "";
            if (c.hasClassName(this.options.topSelector.slice(1))) {
                d = true
            }
            if (c.hasClassName(this.options.topSelector.slice(1)) && c.hasClassName(this.options.focusClass)) {
                this.removeClassElement(c);
                var h = c.down(".nav__child");
                if (h) {
                    h = c.down(".nav__child").identify();
                    b = $(h).id
                }
                var a = false
            } else {
                if (c.hasClassName(this.options.topSelector.slice(1))) {
                    this.addClassElement(c);
                    var a = true;
                    var h = c.down(".nav__child");
                    if (h) {
                        h = c.down(".nav__child").identify();
                        Effect.SlideDown($(h).id, {
                            duration: 0.3
                        })
                    }
                }
            }
            if (a != undefined && a == true && this.isChecked(c) === false) {
                var g = this.find(this.options.menuArticleColumn, c)[0];
                if (g) {
                    this.addClassParents(g, this.options.topSelector, this.options.contentSelector, this.options.focusClass)
                }
                this.heightMenu(c, toggleShowHide = true)
            }
            this.removeSiblingsClassElements(c, d, b);
            if (!c.hasClassName(this.options.topSelector.slice(1))) {
                this.addClassElement(c)
            }
            if (c.hasClassName("has-child") && this.isChecked(c) === false) {
                this.find(this.options.contentSelector, c)[0].addClassName(this.options.focusClass)
            }
            if (d == false) {
                this.heightMenu(c, d)
            }
        },
        find: function(b, a) {
            return a == undefined || b == undefined ? false : a.select(b)
        },
        isChecked: function(a) {
            return this.find("." + this.options.focusClass, a).length === 0 ? false : true
        },
        addClassElement: function(a) {
            a.addClassName(this.options.focusClass)
        },
        removeClassElement: function(a) {
            a.removeClassName(this.options.focusClass)
        },
        addClassParents: function(b, a, d, c) {
            for (i = 0; i < 999; i++) {
                b = b.up(d).addClassName(c);
                if (b.hasClassName(this.options.topSelector.slice(1))) {
                    break
                }
            }
        },
        removeSiblingsClassElements: function(c, d, b) {
            var a = this;
            c.siblings(this.options.contentSelector).invoke("removeClassName", this.options.focusClass);
            if (d == true) {
                this.hideAllChildrens(b)
            }
        },
        slideClose: function(a) {
            Effect.SlideUp(a, {
                duration: 0.3
            })
        },
        hideAllChildrens: function(b) {
            var a = this;
            if (this.childs.length > 0) {
                this.childs.each(function(c) {
                    c.identify();
                    if (b == c.id) {
                        a.slideClose(b)
                    } else {
                        c.setStyle({
                            display: "none"
                        })
                    }
                })
            }
        },
        heightMenu: function(e, d) {
            var f = this.find("." + this.options.focusClass, e);
            f = f.length == 0 ? e : f[f.length - 1];
            var a = f.up(this.options.menuContent),
                c = f.up(this.options.menuColumn),
                g = this.find(this.options.menuArticleColumn, f)[0];
            if (a && c && g) {
                var c = this.toggleHeight(c, d),
                    g = this.toggleHeight(g, d),
                    b = c > g ? c : g;
                a.setStyle({
                    height: b + "px"
                })
            }
        },
        toggleHeight: function(b, a) {
            b.setStyle({
                height: "auto"
            });
            if (a && a == true) {
                b.up(this.options.childSelector).setStyle({
                    display: "block"
                })
            }
            var c = b.getHeight();
            if (a && a == true) {
                b.up(this.options.childSelector).setStyle({
                    display: "none"
                })
            }
            b.setStyle({
                height: ""
            });
            return c
        },
        collapseMenu: function(c) {
            var b = c.target;
            if (b.up("#" + this.options.menuSelector)) {
                if (b.hasClassName(this.options.collapseClass.slice(1))) {
                    c.preventDefault();
                    this.slideClose(b.up(this.options.childSelector));
                    this.removeClassElement(b.up(this.options.topSelector))
                } else {
                    c.stopPropagation()
                }
            } else {
                var a = this.find(this.options.topSelector + "." + this.options.focusClass, this.context);
                if (a.length > 0) {
                    a = a[0].down(this.options.childSelector).id;
                    this.hideAllChildrens(a)
                }
                this.find(this.options.topSelector, this.context).invoke("removeClassName", this.options.focusClass)
            }
            this.find(this.options.childSelector, this.context).invoke("setStyle", {
                height: ""
            })
        }
    })
};