define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Modal", "../actions/data", "../selectors/root"], function(e, t, l, r, o, n) {
    "use strict";

    function s(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
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
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), r = babelHelpers.interopRequireDefault(r);
    var a = function(e) {
            babelHelpers.inherits(o, e);
            var l = s(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = l.call(this, e)).handleShowModalCustomerSelected = t.handleShowModalCustomerSelected.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(o, [{
                key: "handleShowModalCustomerSelected",
                value: function(e) {
                    e.preventDefault(), this.props.openCustomerSelectedModal()
                }
            }, {
                key: "closeModal",
                value: function() {
                    this.props.closeCustomerSelectedModal()
                }
            }, {
                key: "getMessageText",
                value: function() {
                    return {
                        __html: this.props.descriptions.messageText
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return t.default.createElement("div", null, t.default.createElement(r.default, {
                        onClose: function() {
                            return e.closeModal()
                        },
                        open: this.props.customerSelectedModalIsOpen,
                        id: "oraCustomerSelectedModalId",
                        showClose: !1,
                        escapeClose: !1,
                        clickClose: !1,
                        size: "narrow"
                    }, t.default.createElement("div", {
                        className: "l-page-row u-font-bold"
                    }, t.default.createElement("div", {
                        className: "l-row"
                    }, t.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, t.default.createElement("div", {
                        dangerouslySetInnerHTML: this.getMessageText()
                    }))))))
                }
            }]), o
        }(t.Component),
        c = (0, l.connect)(function(e) {
            return {
                customerSelectedModalIsOpen: (0, n.getCustomerSelectedModalIsShow)(e)
            }
        }, function(e) {
            return {
                closeCustomerSelectedModal: function() {
                    return e((0, o.closeCustomerSelectedModal)())
                },
                openCustomerSelectedModal: function() {
                    return e((0, o.showCustomerSelectedModal)())
                }
            }
        })(a);
    e.default = c
});
//# sourceMappingURL=OraFixCustomerSelectedModalComponent.js.map