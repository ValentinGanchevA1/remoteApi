define(["exports", "react", "prop-types", "../../core/components/ui/Modal", "../../../components/OraCommonComponents"], function(e, n, t, l, o) {
    "use strict";

    function a(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), l = babelHelpers.interopRequireDefault(l);
    var r = function(e) {
            babelHelpers.inherits(s, e);
            var r = a(s);

            function s(e) {
                var t;
                return babelHelpers.classCallCheck(this, s), (t = r.call(this, e)).state = {
                    ready: !1,
                    id: "UnsupportedMsisdsModalId"
                }, t
            }
            return babelHelpers.createClass(s, [{
                key: "componentDidMount",
                value: function() {
                    var t = this;
                    this.props.incorrectMsisdns && 0 < this.props.incorrectMsisdns.length && OPL.UI.on("module.started", function(e) {
                        e.element.id === "react-modal-" + t.state.id + "-trigger" && t.setState({
                            ready: !0
                        })
                    })
                }
            }, {
                key: "closeModal",
                value: function() {
                    this.setState({
                        ready: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return !!this.props.incorrectMsisdns && 0 < this.props.incorrectMsisdns.length && n.default.createElement(l.default, {
                        open: this.state.ready,
                        id: this.state.id,
                        showClose: !0,
                        size: "narrow"
                    }, n.default.createElement("div", {
                        className: "l-row u-letter-spacing-xs"
                    }, n.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, n.default.createElement("h3", null, this.props.descriptions.assignmentModalWarningTitle), n.default.createElement("p", null, this.props.descriptions.assignmentModalWarningMessage), n.default.createElement(i, {
                        props: this.props,
                        list: this.props.incorrectMsisdns
                    }), n.default.createElement("div", {
                        className: "l-col--opposite"
                    }, n.default.createElement(o.OraButton, {
                        onClick: function() {
                            return e.closeModal()
                        }
                    }, this.props.descriptions.assignmentModalButton)))))
                }
            }]), s
        }(n.Component),
        i = function(e) {
            var t = e.list;
            e.props;
            return n.default.createElement("ul", null, t.map(function(e) {
                return n.default.createElement("div", {
                    className: "u-padding-left-l u-padding-top-l"
                }, n.default.createElement("div", {
                    className: "opl-msg opl-msg--error opl-msg--context",
                    id: e.msisdn
                }, n.default.createElement("p", null, e.msisdn)), n.default.createElement("b", null, e.errorMessage))
            }))
        };
    r.propTypes = {
        incorrectMsisdn: t.PropTypes.arrayOf(t.PropTypes.string)
    };
    var s = r;
    e.default = s
});
//# sourceMappingURL=UnsupportedMsisdsModal.js.map