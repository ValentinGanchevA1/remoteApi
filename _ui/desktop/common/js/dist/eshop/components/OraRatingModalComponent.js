define(["exports", "react-redux", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "../modules/simfree/selectors", "../modules/simfree/actions/app"], function(_exports, _reactRedux, _react, _OraCommonComponents, _Modal, _selectors, _app) {
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

    var OraRatingModalComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraRatingModalComponent, _Component);

        var _super = _createSuper(OraRatingModalComponent);

        function OraRatingModalComponent(props) {
            babelHelpers.classCallCheck(this, OraRatingModalComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraRatingModalComponent, [{
            key: "popupMessage",
            value: function popupMessage() {
                if (!this.props.rating && !this.props.message && !this.props.login) {
                    return this.props.descriptions.allFieldsEmptyMessage;
                } else if (!this.props.rating && this.props.message && this.props.login) {
                    return this.props.descriptions.ratingMessage;
                } else if (!this.props.login && this.props.rating && this.props.message) {
                    return this.props.descriptions.emptyLoginMessage;
                } else if (!this.props.message && this.props.rating && this.props.login) {
                    return this.props.descriptions.emptyOpinionMessage;
                } else if (!this.props.rating && !this.props.login && this.props.message) {
                    return this.props.descriptions.emptyRatingAndLoginMessage;
                } else if (!this.props.rating && !this.props.message && this.props.login) {
                    return this.props.descriptions.emptyRatingAndOpinionMessage;
                } else if (!this.props.login && !this.props.message && this.props.rating) {
                    return this.props.descriptions.emptyLoginAndOpinionMessage;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "rating-message-error",
                    showClose: true,
                    open: this.props.showRatingErrorModal,
                    onClose: function onClose() {
                        return _this.props.setShowRatingErrorModal(false);
                    },
                    size: "narrow",
                    clickClose: false
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-letter-spacing-xs"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, this.popupMessage())), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 medium-offset-by-8 large-offset-by-8 u-text-right"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: function onClick() {
                        return _this.props.setShowRatingErrorModal(false);
                    },
                    className: "u-w-100 "
                }, "OK")))));
            }
        }]);
        return OraRatingModalComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            rating: (0, _selectors.getRating)(state),
            message: (0, _selectors.getMessage)(state),
            login: (0, _selectors.getLogin)(state),
            showRatingErrorModal: (0, _selectors.getShowRatingErrorModal)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setRating: function setRating(rating) {
                return dispatch((0, _app.setRating)(rating));
            },
            setLogin: function setLogin(login) {
                return dispatch((0, _app.setLogin)(login));
            },
            setMessage: function setMessage(message) {
                return dispatch((0, _app.setMessage)(message));
            },
            setShowRatingErrorModal: function setShowRatingErrorModal(showRatingErrorModal) {
                return dispatch((0, _app.setShowRatingErrorModal)(showRatingErrorModal));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraRatingModalComponent);

    _exports.default = _default;
});
//# sourceMappingURL=OraRatingModalComponent.js.map