define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/flux/utils/OraModalService"], function(e, a, t, n) {
    "use strict";

    function o(t, e) {
        var l = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), l.push.apply(l, r)
        }
        return l
    }

    function c(r) {
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
        var l = c(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), (t = l.call(this, e)).desc = {}, t
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return a.default.createElement(t.OraModal, {
                    id: this.props.id,
                    showClose: !0,
                    narrow: !0,
                    fallback: this.props.onClickRemove
                }, a.default.createElement("div", {
                    className: "l-page-row"
                }, a.default.createElement("div", {
                    className: "l-row"
                }, a.default.createElement("div", {
                    className: "l-col l-col-12"
                }, a.default.createElement("h2", null, this.props.title))), a.default.createElement("div", {
                    className: "l-row u-spacing-l"
                }, a.default.createElement("div", {
                    className: "l-col l-col-12"
                }, a.default.createElement("p", null, this.props.content))), a.default.createElement("div", {
                    className: "l-row"
                }, a.default.createElement("div", {
                    className: "u-medium-hide u-large-hide "
                }, a.default.createElement("div", {
                    className: "l-col l-col-small-12 u-margin-s"
                }, a.default.createElement(t.OraButton, {
                    onClick: this.props.onClickConfirm,
                    className: "u-w-100",
                    modal: !0
                }, this.props.confirm)), a.default.createElement("div", {
                    className: "l-col l-col-small-12 "
                }, a.default.createElement(t.OraButton, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: !0,
                    type: "secondary"
                }, this.props.decline))), a.default.createElement("div", {
                    className: "u-small-hide"
                }, a.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, a.default.createElement(t.OraButton, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: !0,
                    type: "secondary"
                }, this.props.decline)), a.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, a.default.createElement(t.OraButton, {
                    onClick: this.props.onClickConfirm,
                    className: "u-w-100",
                    modal: !0
                }, this.props.confirm))))))
            }
        }], [{
            key: "uniqId",
            value: function() {
                return "pick-device-popup-hfjfjeur-uniq"
            }
        }, {
            key: "initialize",
            value: function(e) {
                var t = this.uniqId();
                0 == $("[id*='" + t + "']").length && (this.desc = e || {}, n.default.add(function(e) {
                    return a.default.createElement(r, babelHelpers.extends({
                        id: t
                    }, e))
                }))
            }
        }, {
            key: "open",
            value: function(e) {
                n.default.open(this.uniqId(), function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var l = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? o(Object(l), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, l[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : o(Object(l)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
                        })
                    }
                    return t
                }({}, this.desc, {}, e))
            }
        }]), r
    }(a.Component);
    l.defaultProps = {
        title: "Czy chcesz dobrać teraz urządzenia?",
        content: "Czy chcesz teraz dobrać urządzenia? Możesz też dodać rzeczy do koszyka i przejść bezpośrednio do niego.",
        confirm: "Dobierz urządzenia",
        decline: "Dodaj tylko SIM do koszyka"
    };
    var r = l;
    e.default = r
});
//# sourceMappingURL=PickDevicePopup.js.map