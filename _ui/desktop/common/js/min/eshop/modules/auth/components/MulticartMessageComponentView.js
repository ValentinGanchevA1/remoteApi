define(["exports", "react", "react-redux", "../selectors/authorization", "../actions/authorization", "../../core/components/ui/Modal", "../../../components/OraCommonComponents", "../../configurator/utils"], function(e, r, t, s, n, o, l, a) {
    "use strict";

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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), o = babelHelpers.interopRequireDefault(o);
    var u = function(e) {
            babelHelpers.inherits(s, e);
            var t = i(s);

            function s(e) {
                return babelHelpers.classCallCheck(this, s), t.call(this, e)
            }
            return babelHelpers.createClass(s, [{
                key: "componentDidMount",
                value: function() {
                    this.props.setSalesChannel(this.props.channels.sales)
                }
            }, {
                key: "renderMessage",
                value: function() {
                    var e = this.props.msg.text,
                        t = this.props.msg.type,
                        s = this.props.msg.descriptionName;
                    if ("progress" == t && (t = "info"), this.props.descriptions && this.props.descriptions[s] && (e = this.props.descriptions[s]), null != this.props.msg && "undefined" != e && null != e && "" != e) return (0, a.isHtml)(e) ? r.default.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    }) : r.default.createElement("div", {
                        id: "multicartMessageSection"
                    }, r.default.createElement(l.OraMessage, {
                        text: e,
                        type: t
                    }))
                }
            }, {
                key: "onClose",
                value: function() {
                    this.props.showModal && this.props.clearMessage()
                }
            }, {
                key: "getModalProps",
                value: function() {
                    return {
                        size: "narrow",
                        escapeClose: !1,
                        clickClose: !1
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return r.default.createElement("div", {
                        id: "messageModalWrapper"
                    }, r.default.createElement(o.default, babelHelpers.extends({}, this.getModalProps(), {
                        showClose: !0,
                        open: this.props.showModal,
                        onClose: this.onClose.bind(this),
                        id: "message-modal"
                    }), this.renderMessage()))
                }
            }]), s
        }(r.Component),
        c = (0, t.connect)(function(e) {
            return {
                msg: (0, s.getAuthMessage)(e),
                showModal: "" != (0, s.getAuthMessage)(e) && null != (0, s.getAuthMessage)(e)
            }
        }, function(t) {
            return {
                clearMessage: function() {
                    return t((0, n.clearMessage)())
                },
                setSalesChannel: function(e) {
                    return t((0, n.setSalesChannel)(e))
                }
            }
        })(u);
    e.default = c
});
//# sourceMappingURL=MulticartMessageComponentView.js.map