define(["exports", "react", "prop-types", "./Portal", "eshop/modules/core/utils/ui"], function(e, o, t, s, i) {
    "use strict";

    function n(l) {
        return function() {
            var e, o = babelHelpers.getPrototypeOf(l);
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
                var t = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(o, arguments, t)
            } else e = o.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireDefault(t), s = babelHelpers.interopRequireDefault(s), window.modalId = null != window.modalId ? window.modalId + 1 : 1;
    window.modalStack = window.modalStack || [];
    var l = function(e) {
        babelHelpers.inherits(l, e);
        var t = n(l);

        function l(e) {
            var o;
            return babelHelpers.classCallCheck(this, l), (o = t.call(this, e)).onClose = o.onClose.bind(babelHelpers.assertThisInitialized(o)), o.show = o.show.bind(babelHelpers.assertThisInitialized(o)), o.overrideShowClose = o.overrideShowClose.bind(babelHelpers.assertThisInitialized(o)), o.close = o.close.bind(babelHelpers.assertThisInitialized(o)), o.state = {
                open: !1
            }, o.setContainerRef = function(e) {
                o.container = e
            }, o
        }
        return babelHelpers.createClass(l, [{
            key: "componentWillMount",
            value: function() {
                var e = this.props.id || window.modalId++;
                this.modalId = "react-modal-" + e, this.triggerId = "react-modal-" + e + "-trigger", this.contentClass = "react-modal-" + e + "-content"
            }
        }, {
            key: "componentDidMount",
            value: function() {
                OPL.UI.on(OPL.UI.EVENTS.modules.modal.closed, this.onClose, this.triggerId), OPL.UI.on("module.started", function(e) {
                    1 == window.modalStack.length && window.modalStack[0] === e.element.id && OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, "", e.element.id)
                }), OPL.UI.initModules(this.container)
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                this.overrideShowClose(), (e.open && !this.props.open || e.open && !this.state.open) && this.show(), !e.open && this.props.open && this.close()
            }
        }, {
            key: "show",
            value: function() {
                -1 === window.modalStack.indexOf(this.triggerId) && (0 < window.modalStack.length ? (OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, "", window.modalStack[0]), setTimeout(this.doOpen.bind(this), 600)) : this.doOpen(), window.modalStack.push(this.triggerId))
            }
        }, {
            key: "doOpen",
            value: function() {
                OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, "", this.triggerId), this.setState({
                    open: !0
                })
            }
        }, {
            key: "close",
            value: function() {
                var e = window.modalStack.indexOf(this.triggerId); - 1 < e && window.modalStack.splice(e, 1), OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, "", this.triggerId)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                OPL.UI.off(OPL.UI.EVENTS.modules.modal.closed, this.onClose, this.triggerId), OPL.UI.stopModules(this.container)
            }
        }, {
            key: "onClose",
            value: function() {
                this.props.onClose && this.props.onClose(), 0 === window.modalStack.length && window.document.body.classList.remove("toplayer__open"), this.setState({
                    open: !1
                });
                var e = window.modalStack.indexOf(this.triggerId); - 1 < e && window.modalStack.splice(e, 1)
            }
        }, {
            key: "getModalOptions",
            value: function() {
                var e = (0, i.pickProps)(this.props, ["showClose", "escapeClose", "clickClose", "contentHeight", "closeText", "openOnStart"]);
                return e.modalClass = "o-modal" + (this.props.size ? " o-modal--" + this.props.size : ""), e.additionalClass = this.contentClass, null !== this.props.closeText && (e.showCloseText = !0), e
            }
        }, {
            key: "overrideShowClose",
            value: function() {
                this.props.showClose ? $("#" + this.modalId).find(".close-modal").removeClass("u-hide") : $("#" + this.modalId).find(".close-modal").addClass("u-hide")
            }
        }, {
            key: "portalClassName",
            value: function() {
                return "u-hide--soft" + (this.props.noPadding ? " o-modal__no-padding" : "") + (this.props.fullscreenMobile ? " o-modal--fullscreen-mobile" : "")
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return o.default.createElement("div", {
                    ref: this.setContainerRef
                }, o.default.createElement("a", {
                    href: "#" + this.modalId,
                    id: this.triggerId,
                    className: "o-modal__trigger u-hide",
                    "data-type": "modal:custom",
                    "data-js-module": "core/modules/modal",
                    "data-js-options": JSON.stringify(this.getModalOptions())
                }), o.default.createElement(s.default, {
                    portalId: this.modalId,
                    portalClassName: this.portalClassName(),
                    getDestinationNode: function() {
                        return document.getElementsByClassName(e.contentClass)[0]
                    }
                }, this.props.children))
            }
        }]), l
    }(o.Component);
    l.propTypes = {
        id: t.default.string,
        open: t.default.bool.isRequired,
        showClose: t.default.bool,
        noPadding: t.default.bool,
        fullscreenMobile: t.default.bool,
        closeText: t.default.string,
        escapeClose: t.default.bool,
        clickClose: t.default.bool,
        contentHeight: t.default.number,
        onClose: t.default.func,
        size: t.default.oneOf(["small", "narrow", "medium", "fullscreen", ""])
    }, l.defaultProps = {
        showClose: !0,
        noPadding: !1,
        fullscreenMobile: !1,
        closeText: null,
        contentHeight: null,
        escapeClose: null,
        clickClose: null,
        size: ""
    };
    var a = l;
    e.default = a
});
//# sourceMappingURL=Modal.js.map