define(["exports", "react", "prop-types", "../FixVasModal", "../AnalyzerAdapter", "../../BoxFragments", "../../Utils", "../../../../../analyzer/DeviceUtils"], function(e, l, t, n, s, a, o, c) {
    "use strict";

    function u(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, i)
        }
        return r
    }

    function d(i) {
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
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), t = babelHelpers.interopRequireDefault(t), n = babelHelpers.interopRequireDefault(n);
    var r = function(e) {
        babelHelpers.inherits(i, e);
        var r = d(i);

        function i(e) {
            var t;
            return babelHelpers.classCallCheck(this, i), (t = r.call(this, e)).addButtonClicked = t.addButtonClicked.bind(babelHelpers.assertThisInitialized(t)), t.closeModalClicked = t.closeModalClicked.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(i, [{
            key: "addButtonClicked",
            value: function() {
                this.props.modalOpenAction()
            }
        }, {
            key: "removeButtonClicked",
            value: function(e) {
                this.adapter && this.adapter.removeProduct && this.adapter.removeProduct(e)
            }
        }, {
            key: "closeModalClicked",
            value: function() {
                this.props.modalCloseAction()
            }
        }, {
            key: "filterMigratedDevices",
            value: function() {
                return this.props.migrated ? this.props.migrated.filter(function(e) {
                    return !!e.deviceType
                }) : []
            }
        }, {
            key: "migratedPresentable",
            value: function() {
                var t = this,
                    e = this.props.presentable,
                    r = this.props.migrated;
                return r && e ? e.map(function(e) {
                    return function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? u(Object(r), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, r[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            })
                        }
                        return t
                    }({}, e, {
                        migrated: t.isMigrated(e, r)
                    })
                }) : e
            }
        }, {
            key: "isMigrated",
            value: function(t, e) {
                return !(!e || !t) && 0 < e.filter(function(e) {
                    return e.base === t.base && e.productCode === t.id
                }).length
            }
        }, {
            key: "render",
            value: function() {
                var t, r = this;
                return this.migratedDevices = this.filterMigratedDevices(), this.migratedServicesAndDevices = this.migratedPresentable(), l.default.createElement("div", null, l.default.createElement(a.FloatingBox, {
                    boxClassName: "u-padding-left-l u-padding-right-l u-box-shadow--s u-box-shadow-hover"
                }, l.default.createElement("a", {
                    id: "add-vases-button",
                    href: "#",
                    onClick: (t = this.addButtonClicked, function(e) {
                        e.preventDefault(), t(e)
                    })
                }, l.default.createElement("table", {
                    className: "u-table-fixed"
                }, l.default.createElement("tbody", null, l.default.createElement("tr", null, l.default.createElement(o.GraphicCell, {
                    icon: this.props.icon
                }), l.default.createElement(a.LabelCell, {
                    label: this.props.label
                }), l.default.createElement(a.ButtonCell, {
                    icon: "plus",
                    link: "#"
                })))))), l.default.createElement(s.FixAnalyzerAdapter, {
                    configurables: this.props.configurables,
                    entry: this.props.entry,
                    customRules: (0, c.createCustomRules)(this.migratedServicesAndDevices, this.migratedDevices),
                    ref: function(e) {
                        return r.adapter = e
                    }
                }, l.default.createElement(n.default, {
                    uid: "FVM_".concat(this.props.uid),
                    label: this.props.header,
                    open: this.props.isModalOpen,
                    services: this.migratedServicesAndDevices,
                    onClose: this.closeModalClicked,
                    productList: this.props.inner,
                    descriptions: this.props.descriptions,
                    selectedSection: this.props.selectedSection,
                    showNetPrices: this.props.showNetPrices,
                    configurables: this.props.configurables,
                    migratedProducts: this.props.migrated
                })))
            }
        }]), i
    }(l.Component);
    (e.default = r).propTypes = {
        icon: t.default.string,
        label: t.default.string,
        configurables: t.default.object.isRequired,
        entry: t.default.object.isRequired,
        presentable: t.default.array,
        migrated: t.default.array,
        uid: t.default.string,
        header: t.default.string,
        inner: t.default.object,
        selectedSection: t.default.string
    }
});
//# sourceMappingURL=AddVasesButton.js.map