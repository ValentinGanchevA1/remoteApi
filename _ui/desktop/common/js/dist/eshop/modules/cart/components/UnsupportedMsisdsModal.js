define(["exports", "react", "prop-types", "../../core/components/ui/Modal", "../../../components/OraCommonComponents"], function(_exports, _react, _propTypes, _Modal, _OraCommonComponents) {
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

    var UnsupportedMsisdsModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(UnsupportedMsisdsModal, _Component);

        var _super = _createSuper(UnsupportedMsisdsModal);

        function UnsupportedMsisdsModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, UnsupportedMsisdsModal);
            _this = _super.call(this, props);
            _this.state = {
                ready: false,
                id: "UnsupportedMsisdsModalId"
            };
            return _this;
        }

        babelHelpers.createClass(UnsupportedMsisdsModal, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                if (this.props.incorrectMsisdns && this.props.incorrectMsisdns.length > 0) {
                    OPL.UI.on('module.started', function(data) {
                        if (data.element.id === "react-modal-" + _this2.state.id + "-trigger") {
                            _this2.setState({
                                ready: true
                            });
                        }
                    });
                }
            }
        }, {
            key: "closeModal",
            value: function closeModal() {
                this.setState({
                    ready: false
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                return !!this.props.incorrectMsisdns && this.props.incorrectMsisdns.length > 0 && /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    open: this.state.ready,
                    id: this.state.id,
                    showClose: true,
                    size: "narrow"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-letter-spacing-xs"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h3", null, this.props.descriptions.assignmentModalWarningTitle), /*#__PURE__*/ _react.default.createElement("p", null, this.props.descriptions.assignmentModalWarningMessage), /*#__PURE__*/ _react.default.createElement(SimpleList, {
                    props: this.props,
                    list: this.props.incorrectMsisdns
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col--opposite"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: function onClick() {
                        return _this3.closeModal();
                    }
                }, this.props.descriptions.assignmentModalButton)))));
            }
        }]);
        return UnsupportedMsisdsModal;
    }(_react.Component);

    var SimpleList = function SimpleList(_ref) {
        var list = _ref.list,
            props = _ref.props;
        return /*#__PURE__*/ _react.default.createElement("ul", null, list.map(function(item) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "u-padding-left-l u-padding-top-l"
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: "opl-msg opl-msg--error opl-msg--context",
                id: item.msisdn
            }, /*#__PURE__*/ _react.default.createElement("p", null, item.msisdn)), /*#__PURE__*/ _react.default.createElement("b", null, item.errorMessage));
        }));
    };

    UnsupportedMsisdsModal.propTypes = {
        incorrectMsisdn: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string)
    };
    var _default = UnsupportedMsisdsModal;
    _exports.default = _default;
});
//# sourceMappingURL=UnsupportedMsisdsModal.js.map