define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "eshop/modules/core/components/ui/Modal"], function(_exports, _react, _reactRedux, _comparator, _selectors, _Modal) {
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

    var ComparatorErrorModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ComparatorErrorModal, _Component);

        var _super = _createSuper(ComparatorErrorModal);

        function ComparatorErrorModal(props) {
            babelHelpers.classCallCheck(this, ComparatorErrorModal);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ComparatorErrorModal, [{
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "comparator-error-modal",
                    open: this.props.errorCode > 0,
                    onClose: this.props.clearErrorCode,
                    showClose: true,
                    escapeClose: true,
                    clickClose: true,
                    size: "medium"
                }, this.props.errorCode === 1 && /*#__PURE__*/ _react.default.createElement("h5", {
                    className: "u-small-margin-right-m"
                }, this.props.modalCategoryErrorMessage), this.props.errorCode === 2 && /*#__PURE__*/ _react.default.createElement("h5", {
                    className: "u-small-margin-right-m"
                }, this.props.modalDevicesLimitErrorMessage), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-right u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "opl-btn o-btn",
                    onClick: function onClick() {
                        return _this.props.clearDevicesList();
                    }
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-box"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), this.props.modalLeftButtonText), /*#__PURE__*/ _react.default.createElement("button", {
                    className: "opl-btn opl-btn--primary o-btn u-margin-left u-small-margin-top u-small-no-margin-l",
                    disabled: this.props.comparatorDevices.length < 2,
                    onClick: function onClick() {
                        return _this.props.redirectToComparator(_this.props.comparatorPageUrl);
                    }
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-box"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), this.props.modalRightButtonText)))));
            }
        }]);
        return ComparatorErrorModal;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            comparatorDevices: (0, _selectors.getComparatorDevices)(state),
            errorCode: (0, _selectors.getErrorCode)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            clearDevicesList: function clearDevicesList() {
                return dispatch((0, _comparator.clearDevicesList)());
            },
            redirectToComparator: function redirectToComparator(url) {
                return dispatch((0, _comparator.redirectToComparator)(url));
            },
            clearErrorCode: function clearErrorCode() {
                return dispatch((0, _comparator.clearErrorCode)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ComparatorErrorModal);

    _exports.default = _default;
});
//# sourceMappingURL=ComparatorErrorModal.js.map