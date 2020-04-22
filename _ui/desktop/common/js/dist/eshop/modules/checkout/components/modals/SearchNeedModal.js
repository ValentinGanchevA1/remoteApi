define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "../../selectors", "../../actions/app"], function(_exports, _reactRedux, _react, _Modal, _selectors, _app) {
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

    var SearchNeedModalView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SearchNeedModalView, _Component);

        var _super = _createSuper(SearchNeedModalView);

        function SearchNeedModalView() {
            babelHelpers.classCallCheck(this, SearchNeedModalView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(SearchNeedModalView, [{
            key: "onClose",
            value: function onClose() {
                this.props.dismiss();
            }
        }, {
            key: "getText",
            value: function getText() {
                if (this.props.isB2B !== undefined && !!this.props.descriptions.textInfoB2C && !!this.props.descriptions.textInfoB2B) {
                    return this.props.isB2B ? this.props.descriptions.textInfoB2B : this.props.descriptions.textInfoB2C;
                } else {
                    return this.props.textInfo;
                }
            }
        }, {
            key: "renderInfo",
            value: function renderInfo() {
                return /*#__PURE__*/ _react.default.createElement("span", null, this.getText());
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    showClose: true,
                    open: this.props.errors && this.props.errors.length > 0,
                    onClose: this.onClose.bind(this),
                    size: "medium",
                    id: 'search-need-customer-modal'
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.renderInfo()))));
            }
        }]);
        return SearchNeedModalView;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errors: (0, _selectors.getNeedSearchCheckoutErrors)(state),
            isB2B: (0, _selectors.isBusinessClient)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            dismiss: function dismiss() {
                return dispatch((0, _app.dismissBackendValidationErrors)());
            },
            action: function action() {
                return dispatch((0, _app.gotoCartSummary)());
            }
        };
    };

    var SearchNeedModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchNeedModalView);
    var _default = SearchNeedModal;
    _exports.default = _default;
});
//# sourceMappingURL=SearchNeedModal.js.map