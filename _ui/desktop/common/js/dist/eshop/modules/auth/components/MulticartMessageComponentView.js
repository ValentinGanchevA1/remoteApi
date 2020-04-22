define(["exports", "react", "react-redux", "../selectors/authorization", "../actions/authorization", "../../core/components/ui/Modal", "../../../components/OraCommonComponents", "../../configurator/utils"], function(_exports, _react, _reactRedux, _authorization, _authorization2, _Modal, _OraCommonComponents, _utils) {
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

    var MulticartMessageComponentView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartMessageComponentView, _Component);

        var _super = _createSuper(MulticartMessageComponentView);

        function MulticartMessageComponentView(props) {
            babelHelpers.classCallCheck(this, MulticartMessageComponentView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartMessageComponentView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.setSalesChannel(this.props.channels.sales);
            }
        }, {
            key: "renderMessage",
            value: function renderMessage() {
                var text = this.props.msg.text;
                var messageType = this.props.msg.type;
                var descriptionName = this.props.msg.descriptionName;

                if (messageType == "progress") {
                    messageType = "info";
                }

                if (!!this.props.descriptions && !!this.props.descriptions[descriptionName]) {
                    text = this.props.descriptions[descriptionName];
                }

                if (this.props.msg != null && text != 'undefined' && text != null && text != "") {
                    if ((0, _utils.isHtml)(text)) {
                        return /*#__PURE__*/ _react.default.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: text
                            }
                        });
                    }

                    return /*#__PURE__*/ _react.default.createElement("div", {
                        id: "multicartMessageSection"
                    }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraMessage, {
                        text: text,
                        type: messageType
                    }));
                }
            }
        }, {
            key: "onClose",
            value: function onClose() {
                if (this.props.showModal) {
                    this.props.clearMessage();
                }
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
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "messageModalWrapper"
                }, /*#__PURE__*/ _react.default.createElement(_Modal.default, babelHelpers.extends({}, this.getModalProps(), {
                    showClose: true,
                    open: this.props.showModal,
                    onClose: this.onClose.bind(this),
                    id: "message-modal"
                }), this.renderMessage()));
            }
        }]);
        return MulticartMessageComponentView;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            msg: (0, _authorization.getAuthMessage)(state),
            showModal: (0, _authorization.getAuthMessage)(state) != '' && (0, _authorization.getAuthMessage)(state) != null
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            clearMessage: function clearMessage() {
                return dispatch((0, _authorization2.clearMessage)());
            },
            setSalesChannel: function setSalesChannel(channel) {
                return dispatch((0, _authorization2.setSalesChannel)(channel));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartMessageComponentView);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartMessageComponentView.js.map