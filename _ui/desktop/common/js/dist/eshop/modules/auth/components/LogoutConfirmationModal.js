define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/auth/selectors/authorization", "eshop/modules/auth/actions/api", "eshop/modules/auth/actions/authorization"], function(_exports, _react, _reactRedux, _Modal, _authorization, _api, _authorization2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);

    function _createSuper(Derived) {
        return function() {
            var Super = babelHelpers.getPrototypeOf(Derived),
                result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = babelHelpers.getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return babelHelpers.possibleConstructorReturn(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    var LogoutConfirmationModal = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(LogoutConfirmationModal, _React$Component);

        var _super = _createSuper(LogoutConfirmationModal);

        function LogoutConfirmationModal() {
            babelHelpers.classCallCheck(this, LogoutConfirmationModal);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(LogoutConfirmationModal, [{
            key: "onSubmit",
            value: function onSubmit(event) {
                event.preventDefault();
                this.props.doLogOut();
            }
        }, {
            key: "onClose",
            value: function onClose() {
                this.props.hideLogoutConfirmationModal();
            }
        }, {
            key: "getModalProps",
            value: function getModalProps() {
                return {
                    size: "narrow",
                    escapeClose: false,
                    clickClose: false
                };
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, babelHelpers.extends({}, this.getModalProps(), {
                    showClose: true,
                    open: this.props.showLogoutConfirmationModal,
                    onClose: this.onClose.bind(this),
                    id: "logout-confirmation-modal"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h2", null, this.props.descriptions.logoutConfirmationTitle || "Uwaga"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.props.descriptions.logoutConfirmationBody || "Czy na pewno chcesz się wylogować? To spowoduje usunięcie wszystkich produktów i usług z koszyka.")), /*#__PURE__*/ _react.default.createElement("form", {
                    id: "msisdnForm",
                    onSubmit: this.onSubmit.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator o-separator--s u-spacing-top-l"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-small-12"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-small-12 u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    id: "doLogout",
                    type: "submit",
                    className: "o-btn opl-btn u-w-100"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-box"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), "Wyloguj")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-small-12 u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    id: "cancelLogout",
                    type: "button",
                    onClick: this.onClose.bind(this),
                    className: "o-btn opl-btn opl-btn--primary u-w-100"
                }, "Anuluj")))));
            }
        }]);
        return LogoutConfirmationModal;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showLogoutConfirmationModal: (0, _authorization.getShowLogoutConfirmationModal)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            hideLogoutConfirmationModal: function hideLogoutConfirmationModal() {
                return dispatch((0, _authorization2.hideLogoutConfirmationModal)());
            },
            doLogOut: function doLogOut() {
                return dispatch((0, _api.doLogOut)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LogoutConfirmationModal);

    _exports.default = _default;
});
//# sourceMappingURL=LogoutConfirmationModal.js.map