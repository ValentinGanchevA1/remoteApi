var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.FloatingSidebar == "undefined") {
    PTK.FloatingSidebar = {};
    PTK.FloatingSidebar = Class.create({
        initialize: function(b) {
            var a = this;
            this.defaults = {
                sidebarSelector: ".payback-floating-sidebar",
                sidebarContentSelector: ".payback-floating-sidebar__content",
                triggerSelector: ".payback-floating-sidebar__trigger",
                sidebarOffset: 5,
                position: "left"
            };
            this.options = Object.extend(this.defaults, b);
            this.floatingSidebar = $$(this.options.sidebarSelector);
            if (this.floatingSidebar.length > 0) {
                this.floatingSidebarCurrent = this.floatingSidebar[0];
                this.triggers = this.floatingSidebarCurrent.select(this.options.triggerSelector);
                this.triggers.each(function(d) {
                    var c = d.select("a");
                    if (c.length > 0) {
                        c[0].observe("click", a.handleClick.bind(a, d))
                    }
                });
                this.getSidebarDimentions();
                this.setPosition()
            }
            Event.observe(window, "resize", this.resizeEvent.bind(this));
            Event.observe($$(this.options.sidebarContentSelector)[0], "ptk:ajax:after", this.updatePosition.bind(this))
        },
        updatePosition: function() {
            this.getSidebarDimentions();
            this.floatingSidebarCurrent.setStyle({
                top: "50%",
                "margin-top": -(this.sidebarHeight / 2) + "px"
            })
        },
        setPosition: function() {
            if (this.options.position == "right") {
                this.floatingSidebarCurrent.addClassName("position_r");
                this.floatingSidebarCurrent.removeClassName("position_l");
                this.floatingSidebarCurrent.setStyle({
                    top: "50%",
                    "margin-top": -(this.sidebarHeight / 2) + "px"
                })
            } else {
                this.floatingSidebarCurrent.addClassName("position_l");
                this.floatingSidebarCurrent.removeClassName("position_r");
                this.floatingSidebarCurrent.setStyle({
                    left: -this.sidebarWidth + "px",
                    top: "50%",
                    "margin-top": -(this.sidebarHeight / 2) + "px"
                })
            }
        },
        resizeEvent: function(b) {
            var a = document.viewport.getDimensions();
            this.floatingSidebarCurrent.setStyle({
                left: a.width + "px"
            });
            this.floatingSidebarCurrent.removeClassName("expanded")
        },
        getSidebarDimentions: function() {
            this.sidebarWidth = this.floatingSidebarCurrent.getWidth();
            this.sidebarHeight = this.floatingSidebarCurrent.getHeight()
        },
        handleClick: function(a, b) {
            var e = a.up(),
                d, c;
            if (e.hasClassName("position_r")) {
                d = -(this.sidebarWidth - this.options.sidebarOffset);
                c = (this.sidebarWidth - this.options.sidebarOffset)
            } else {
                d = (this.sidebarWidth - this.options.sidebarOffset);
                c = -(this.sidebarWidth - this.options.sidebarOffset)
            }
            if (e.hasClassName("expanded")) {
                new Effect.Move(e, {
                    x: c,
                    y: "50%"
                })
            } else {
                new Effect.Move(e, {
                    x: d,
                    y: "50%"
                })
            }
            e.toggleClassName("expanded");
            if (b) {
                b.stop()
            }
        }
    })
};