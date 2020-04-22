define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/auth/actions/authorization", "eshop/modules/auth/selectors/authorization"], function(_exports, _react, _reactRedux, _Modal, _authorization, _authorization2) {
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

    var ProcessAlertModalComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProcessAlertModalComponent, _React$Component);

        var _super = _createSuper(ProcessAlertModalComponent);

        function ProcessAlertModalComponent(props) {
            babelHelpers.classCallCheck(this, ProcessAlertModalComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProcessAlertModalComponent, [{
            key: "onSubmit",
            value: function onSubmit(event) {
                event.preventDefault();
            }
        }, {
            key: "onClose",
            value: function onClose() {
                this.props.hideProcessAlertModal();
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
            key: "getTitle",
            value: function getTitle() {
                if (this.props.showRetentionAlertModal) return this.props.descriptions && this.props.descriptions.retentionAlertTitle || "Komunikat";
                return "Komunikat";
            }
        }, {
            key: "getInfo",
            value: function getInfo() {
                if (this.props.showRetentionAlertModal) return this.props.descriptions && this.props.descriptions.retentionAlertBody || "W koszyku znajduje się usługa utrzymania. Nie można zmienić konta bilingowego! ";
                return "Nie można zmienić konta bilingowego dla tego procesu!";
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, babelHelpers.extends({}, this.getModalProps(), {
                    showClose: true,
                    open: this.props.showProcessAlertModal,
                    onClose: this.onClose.bind(this),
                    id: "process-alert-modal"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h2", null, this.getTitle()))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.getInfo())), /*#__PURE__*/ _react.default.createElement("form", {
                    id: "processAlertForm",
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
                    className: "l-col l-col-8 l-col-small-12"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-small-12 u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    id: "cancelLogout",
                    type: "button",
                    onClick: this.onClose.bind(this),
                    className: "o-btn opl-btn opl-btn--primary u-w-100"
                }, this.props.descriptions.processAlertCancel || "Zamknij")))));
            }
        }]);
        return ProcessAlertModalComponent;
    }(_react.default.Component);

    ;

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showRetentionAlertModal: (0, _authorization2.getRetentionAlertModalVisibility)(state),
            showProcessAlertModal: (0, _authorization2.getRetentionAlertModalVisibility)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            hideProcessAlertModal: function hideProcessAlertModal() {
                return dispatch((0, _authorization.hideProcessAlertModal)());
            }
        };
    };

    var ProcessAlertModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProcessAlertModalComponent);
    var _default = ProcessAlertModal;
    _exports.default = _default;
});
//# sourceMappingURL=ProcessAlertModal.js.map