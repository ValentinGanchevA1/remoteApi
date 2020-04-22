define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/OraSwitcher"], function(e, i, t, s) {
    "use strict";

    function l(i) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(i);
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
    }), e.default = void 0, i = babelHelpers.interopRequireDefault(i), t = babelHelpers.interopRequireDefault(t), s = babelHelpers.interopRequireDefault(s);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = l(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "handleClick",
            value: function(e) {
                var t = e.currentTarget.dataset,
                    r = t.id,
                    i = t.value;
                this.props.onChange({
                    id: r,
                    value: i
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.ref && (OPL.UI.loadModules(this.ref, this.oplLayoutFixerModule()), this.updateDimensions())
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.ref && (OPL.UI.loadModules(this.ref, this.oplLayoutFixerModule()), this.updateDimensions())
            }
        }, {
            key: "oplLayoutFixerModule",
            value: function() {
                return {
                    path: "core/modules/layout-fixer",
                    options: {
                        selectors: [".js-layout-fixer-group-switcher-select" + this.props.id]
                    }
                }
            }
        }, {
            key: "updateDimensions",
            value: function() {
                this.ref && OPL.UI.fire(OPL.UI.EVENTS.modules.layoutFixer.recalculate, this.ref)
            }
        }, {
            key: "options",
            value: function() {
                var r = this;
                return this.props.options.map(function(e, t) {
                    return r.switcher(e, t)
                })
            }
        }, {
            key: "isDisabled",
            value: function(t) {
                return !(!this.props.disabledOptions || !this.props.disabledOptions.find(function(e) {
                    return e.value == t.value
                }))
            }
        }, {
            key: "switcher",
            value: function(e, t) {
                var r = this.isDisabled(e);
                return i.default.createElement(s.default, {
                    key: this.props.id + "_" + e.value + "_" + t,
                    className: "opl-flex-boxes__item",
                    dataId: this.props.id + e.value,
                    dataValue: e.value,
                    onChangeHandler: !r && this.handleClick.bind(this),
                    switcherClassName: "switcher u-position-relative u-margin-m u-large-no-margin",
                    isSelected: e.value === this.props.selected
                }, i.default.createElement("div", {
                    className: "opl-selection-layer",
                    "aria-hidden": "true"
                }, i.default.createElement("div", {
                    className: "opl-selection-layer__border"
                }), i.default.createElement("div", {
                    className: "opl-selection-layer__checkmark"
                })), i.default.createElement("div", {
                    className: "g-white1-bg u-padding-all-l    u-text-center " + (r ? " " : " u-box-shadow--s  u-cursor-pointer")
                }, i.default.createElement("div", {
                    className: "js-layout-fixer-group-switcher-select" + this.props.id + "  u-display__flex-center"
                }, i.default.createElement("div", {
                    className: "js-height-sensitive-element "
                }, i.default.createElement("p", {
                    className: "h5 u-no-margin" + (r ? " g-gray3-c " : "")
                }, " ", e.description || e.value)))))
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                if (void 0 === this.props.options || !this.props.options.length) return null;
                if (1 === this.props.options.length && this.props.singleOptionRenderer) return this.props.singleOptionRenderer(this.props.options[0].description);
                if (1 === this.props.options.length && this.props.renderSingleOption) return i.default.createElement("div", {
                    className: "u-padding-right-m  u-font-bold "
                }, i.default.createElement("p", {
                    className: "u-no-margin "
                }, this.props.options[0].description || this.props.options[0].value));
                return i.default.createElement("div", {
                    className: "u-margin-s u-large-margin-l",
                    ref: function(e) {
                        return t.ref = e
                    },
                    id: "switcher_select_" + this.props.id
                }, i.default.createElement("ul", {
                    className: "opl-switcher-list opl-flex-boxes__container"
                }, this.options()))
            }
        }]), r
    }(i.default.Component);
    (e.default = r).PropTypes = {
        renderSingleOption: t.default.bool
    }, r.defaultProps = {
        renderSingleOption: !1
    }
});
//# sourceMappingURL=OraSwitcherSelect.js.map