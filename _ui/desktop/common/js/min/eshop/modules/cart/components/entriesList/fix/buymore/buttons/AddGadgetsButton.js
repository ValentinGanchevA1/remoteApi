define(["exports", "react", "../FixGadgetModal", "../AnalyzerAdapter", "../../BoxFragments", "../../Utils"], function(e, a, n, i, o, s) {
    "use strict";

    function t(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), n = babelHelpers.interopRequireDefault(n);
    var l = function(e) {
        babelHelpers.inherits(r, e);
        var l = t(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), (t = l.call(this, e)).state = {
                modalVisible: !1
            }, t.addButtonClicked = t.addButtonClicked.bind(babelHelpers.assertThisInitialized(t)), t.closeModalClicked = t.closeModalClicked.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(r, [{
            key: "addButtonClicked",
            value: function() {
                this.setState({
                    modalVisible: !0
                }, function() {}.bind(this))
            }
        }, {
            key: "removeButtonClicked",
            value: function(e) {
                this.adapter && this.adapter.removeProduct && this.adapter.removeProduct(e)
            }
        }, {
            key: "closeModalClicked",
            value: function() {
                this.setState({
                    modalVisible: !1
                }, function() {}.bind(this))
            }
        }, {
            key: "createCustomValidationGroup",
            value: function(e) {
                return [{
                    sidCode: null,
                    min: 0,
                    max: 1,
                    targetProducts: e.map(function(e) {
                        return e.id
                    }),
                    conditionalProducts: e.map(function(e) {
                        return e.id
                    }),
                    type: null
                }]
            }
        }, {
            key: "render",
            value: function() {
                var t, l = this;
                return a.default.createElement("div", null, (!this.props.entry.gadgets || 0 === this.props.entry.gadgets.length) && a.default.createElement(o.FloatingBox, {
                    boxClassName: "u-padding-left-l u-padding-right-l u-box-shadow--s u-box-shadow-hover"
                }, a.default.createElement("a", {
                    href: "#",
                    onClick: (t = this.addButtonClicked, function(e) {
                        e.preventDefault(), t(e)
                    })
                }, a.default.createElement("table", {
                    className: "u-table-fixed"
                }, a.default.createElement("tbody", null, a.default.createElement("tr", null, a.default.createElement(s.GraphicCell, {
                    icon: this.props.icon
                }), a.default.createElement(o.LabelCell, {
                    label: this.props.label
                }), a.default.createElement(o.ButtonCell, {
                    icon: "plus",
                    link: "#"
                })))))), a.default.createElement(i.FixAnalyzerAdapter, {
                    configurables: this.props.configurables,
                    entry: this.props.entry,
                    customGroups: this.createCustomValidationGroup(this.props.presentable),
                    unselectable: !1,
                    ref: function(e) {
                        return l.adapter = e
                    }
                }, a.default.createElement(n.default, {
                    label: this.props.header,
                    open: this.state.modalVisible,
                    services: this.props.presentable,
                    onClose: this.closeModalClicked,
                    productList: this.props.inner
                })))
            }
        }]), r
    }(a.Component);
    e.default = l
});
//# sourceMappingURL=AddGadgetsButton.js.map