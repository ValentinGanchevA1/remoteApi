define(["exports", "react", "jquery", "eshop/components/OraCommonComponents", "eshop/flux/utils/OraModalService"], function(e, n, a, t, o) {
    "use strict";

    function c(t, e) {
        var l = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), l.push.apply(l, r)
        }
        return l
    }

    function i(r) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), a = babelHelpers.interopRequireDefault(a), o = babelHelpers.interopRequireDefault(o);
    var l = function(e) {
        babelHelpers.inherits(r, e);
        var l = i(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), (t = l.call(this, e)).desc = {}, t
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return n.default.createElement(t.OraModal, {
                    id: this.props.id,
                    showClose: !0,
                    narrow: !0,
                    fallback: this.props.onClickRemove
                }, n.default.createElement("div", {
                    className: "l-page-row"
                }, n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-12"
                }, n.default.createElement("h2", null, this.props.title))), n.default.createElement("div", {
                    className: "l-row u-spacing-l"
                }, n.default.createElement("div", {
                    className: "l-col l-col-12"
                }, n.default.createElement("p", null, this.props.content))), n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "u-medium-hide u-large-hide "
                }, n.default.createElement("div", {
                    className: "l-col l-col-small-12 u-margin-s"
                }, n.default.createElement(t.OraButton, {
                    onClick: this.props.onClickConfirm,
                    className: "u-w-100",
                    modal: !0,
                    type: "secondary"
                }, this.props.confirm)), n.default.createElement("div", {
                    className: "l-col l-col-small-12 "
                }, n.default.createElement(t.OraButton, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: !0
                }, this.props.decline))), n.default.createElement("div", {
                    className: "u-small-hide"
                }, n.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, n.default.createElement(t.OraButton, {
                    onClick: this.props.onClickConfirm,
                    className: "u-w-100",
                    modal: !0
                }, this.props.confirm)), n.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, n.default.createElement(t.OraButton, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: !0,
                    type: "secondary"
                }, this.props.decline))))))
            }
        }], [{
            key: "uniqId",
            value: function() {
                return "confirm-wwt-popup-sdhawmq-uniq"
            }
        }, {
            key: "initialize",
            value: function(e) {
                var t = this.uniqId();
                0 == (0, a.default)("[id*='" + t + "']").length && (this.desc = e || {}, o.default.add(function(e) {
                    return n.default.createElement(r, babelHelpers.extends({
                        id: t
                    }, e))
                }))
            }
        }, {
            key: "open",
            value: function(e) {
                o.default.open(this.uniqId(), function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var l = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(l), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, l[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : c(Object(l)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
                        })
                    }
                    return t
                }({}, this.desc, {}, e))
            }
        }]), r
    }(n.Component);
    l.defaultProps = {
        title: "Na podanym adresie już posiadasz usługę internetu domowego",
        content: "Czy jesteś pewien, że chcesz zainstalować kolejną usługę pod tym samym adresem?",
        confirm: "Tak",
        decline: "Nie",
        onClickDecline: function() {},
        onClickConfirm: function() {}
    };
    var r = l;
    e.default = r
});
//# sourceMappingURL=ConfirmWWTPopup.js.map