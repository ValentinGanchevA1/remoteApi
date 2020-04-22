define(["exports", "react", "prop-types", "lodash", "../FixSecondaryChoiceBonusModal", "../AnalyzerAdapter", "../../BoxFragments", "../../Utils", "../../../../../analyzer/DeviceUtils"], function(e, a, t, i, s, o, n, u, c) {
    "use strict";

    function d(l) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i), s = babelHelpers.interopRequireDefault(s);
    var r = function(e) {
        babelHelpers.inherits(l, e);
        var r = d(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), (t = r.call(this, e)).addButtonClicked = t.addButtonClicked.bind(babelHelpers.assertThisInitialized(t)), t.closeModalClicked = t.closeModalClicked.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(l, [{
            key: "addButtonClicked",
            value: function() {
                this.props.modalOpenAction()
            }
        }, {
            key: "closeModalClicked",
            value: function() {
                this.props.modalCloseAction()
            }
        }, {
            key: "removeButtonClicked",
            value: function(e) {
                this.adapter && this.adapter.removeProduct && this.adapter.removeProduct(e)
            }
        }, {
            key: "render",
            value: function() {
                var t, r = this,
                    e = i.default.flatMap(this.props.presentable);
                return a.default.createElement("div", null, a.default.createElement(n.FloatingBox, {
                    boxClassName: "u-padding-left-l u-padding-right-l u-box-shadow--s u-box-shadow-hover"
                }, a.default.createElement("a", {
                    id: "add-bonus-button-".concat(this.props.idx),
                    href: "#",
                    onClick: (t = this.addButtonClicked, function(e) {
                        e.preventDefault(), t(e)
                    })
                }, a.default.createElement("table", {
                    className: "u-table-fixed"
                }, a.default.createElement("tbody", null, a.default.createElement("tr", null, a.default.createElement(u.GraphicCell, {
                    icon: this.props.icon
                }), a.default.createElement(n.LabelCell, {
                    label: this.props.label
                }), a.default.createElement(n.ButtonCell, {
                    icon: "plus",
                    link: "#"
                })))))), a.default.createElement(o.FixAnalyzerAdapter, {
                    configurables: this.props.configurables,
                    entry: this.props.entry,
                    customRules: (0, c.createCustomRules)(e, this.props.migrated),
                    ref: function(e) {
                        return r.adapter = e
                    }
                }, a.default.createElement(s.default, {
                    uid: "FBM_".concat(this.props.uid),
                    label: this.props.header,
                    open: this.props.isModalOpen,
                    services: e,
                    bonus: this.props.bonus,
                    onClose: this.closeModalClicked,
                    descriptions: this.props.descriptions,
                    showNetPrices: this.props.showNetPrices,
                    isActivateSecondaryChoice: !1,
                    configurables: this.props.configurables,
                    migratedProducts: this.props.migrated
                })))
            }
        }]), l
    }(a.Component);
    (e.default = r).propTypes = {
        icon: t.default.string,
        label: t.default.string,
        configurables: t.default.object.isRequired,
        entry: t.default.object.isRequired,
        presentable: t.default.array,
        bonus: t.default.object.isRequired,
        migrated: t.default.array,
        uid: t.default.string,
        header: t.default.string
    }
});
//# sourceMappingURL=AddBonusButton.js.map