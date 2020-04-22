define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Modal", "../actions/data", "../selectors/root"], function(_exports, _react, _reactRedux, _Modal, _data, _root) {
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

    var OraFixCustomerSelectedModalComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraFixCustomerSelectedModalComponent, _Component);

        var _super = _createSuper(OraFixCustomerSelectedModalComponent);

        function OraFixCustomerSelectedModalComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, OraFixCustomerSelectedModalComponent);
            _this = _super.call(this, props);
            _this.handleShowModalCustomerSelected = _this.handleShowModalCustomerSelected.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(OraFixCustomerSelectedModalComponent, [{
            key: "handleShowModalCustomerSelected",
            value: function handleShowModalCustomerSelected(e) {
                e.preventDefault();
                this.props.openCustomerSelectedModal();
            }
        }, {
            key: "closeModal",
            value: function closeModal() {
                this.props.closeCustomerSelectedModal();
            }
        }, {
            key: "getMessageText",
            value: function getMessageText() {
                return {
                    __html: this.props.descriptions.messageText
                };
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    onClose: function onClose() {
                        return _this2.closeModal();
                    },
                    open: this.props.customerSelectedModalIsOpen,
                    id: "oraCustomerSelectedModalId",
                    showClose: false,
                    escapeClose: false,
                    clickClose: false,
                    size: "narrow"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: this.getMessageText()
                }))))));
            }
        }]);
        return OraFixCustomerSelectedModalComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            customerSelectedModalIsOpen: (0, _root.getCustomerSelectedModalIsShow)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            closeCustomerSelectedModal: function closeCustomerSelectedModal() {
                return dispatch((0, _data.closeCustomerSelectedModal)());
            },
            openCustomerSelectedModal: function openCustomerSelectedModal() {
                return dispatch((0, _data.showCustomerSelectedModal)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraFixCustomerSelectedModalComponent);

    _exports.default = _default;
});
//# sourceMappingURL=OraFixCustomerSelectedModalComponent.js.map