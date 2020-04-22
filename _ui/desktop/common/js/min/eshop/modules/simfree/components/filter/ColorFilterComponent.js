define(["exports", "react", "react-redux", "../../selectors", "eshop/modules/simfree/actions/filter"], function(e, l, t, r, o) {
    "use strict";

    function n(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c = function(e) {
            babelHelpers.inherits(r, e);
            var t = n(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "render",
                value: function() {
                    return l.default.createElement("div", null, l.default.createElement("div", {
                        className: "o-separator u-spacing-l u-spacing-top"
                    }), l.default.createElement("p", {
                        className: "h4 u-spacing-l"
                    }, "Kolory"), l.default.createElement("div", {
                        className: "u-spacing-l"
                    }, l.default.createElement("div", {
                        className: "opl-color-chooser"
                    }, l.default.createElement("fieldset", null, l.default.createElement("legend", {
                        className: "u-acc-hide"
                    }, "Kolor telefonu"), this._renderColors()))), l.default.createElement("div", {
                        className: "u-clear-both"
                    }))
                }
            }, {
                key: "_renderColors",
                value: function() {
                    var t = this;
                    return this.props.filterConfiguration.colorFilter ? this.props.filterConfiguration.colorFilter.map(function(e) {
                        return l.default.createElement("label", {
                            className: "opl-color-chooser__item",
                            onClick: t.props.setSelectedColor.bind(t, e.code)
                        }, l.default.createElement("input", {
                            name: e.code,
                            type: "radio",
                            checked: e.code == t.props.selectedColor
                        }), l.default.createElement("span", {
                            style: {
                                background: e.cssCode
                            },
                            className: "opl-color-chooser__color opl-color-chooser__color--magnum"
                        }), l.default.createElement("span", {
                            className: "opl-color-chooser__label"
                        }, e.name))
                    }) : null
                }
            }]), r
        }((l = babelHelpers.interopRequireDefault(l)).default.Component),
        a = (0, t.connect)(function(e) {
            return {
                filterConfiguration: (0, r.getFilterConfiguration)(e),
                selectedColor: (0, r.getSelectedColor)(e)
            }
        }, function(t) {
            return {
                setSelectedColor: function(e) {
                    return t((0, o.setSelectedColor)(e))
                }
            }
        })(c);
    e.default = a
});
//# sourceMappingURL=ColorFilterComponent.js.map