define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/RWDUtils", "eshop/modules/core/components/ui/OfferDetails"], function(_exports, _react, _propTypes, _OraCommonComponents, _RWDUtils, _OfferDetails) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var CartDetailsModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CartDetailsModal, _Component);

        var _super = _createSuper(CartDetailsModal);

        function CartDetailsModal(props) {
            babelHelpers.classCallCheck(this, CartDetailsModal);
            return _super.call(this, props);
        }

        babelHelpers.createClass(CartDetailsModal, [{
            key: "renderTables",
            value: function renderTables() {
                console.log("details for:");
                console.log(this.props);
                return /*#__PURE__*/ _react.default.createElement(_OfferDetails.DetailsRaw, {
                    data: this.props.details,
                    showNet: this.props.showNet,
                    proposition: this.props.proposition,
                    style: styles["large"]
                });
            }
        }, {
            key: "renderSimple",
            value: function renderSimple() {
                var detailsHTML = {
                    __html: this.props.details
                };
                return this.props.details && /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: detailsHTML
                });
            }
        }, {
            key: "render",
            value: function render() {
                var details = this.props.details && babelHelpers.typeof(this.props.details) === 'object' ? this.renderTables() : this.renderSimple();
                return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraModal, {
                    id: this.props.id,
                    showClose: true,
                    medium: true
                }, details);
            }
        }]);
        return CartDetailsModal;
    }(_react.Component);

    CartDetailsModal.defaultProps = {
        id: "",
        details: [],
        header: "default: Szczegóły oferty"
    };
    CartDetailsModal.propTypes = {
        id: _propTypes.PropTypes.string,
        details: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.arrayOf(_propTypes.PropTypes.object), _propTypes.PropTypes.string]),
        header: _propTypes.PropTypes.string
    };
    var styles = {
        "small": {
            "table": "u-block",
            "tbody": "u-block",
            "tr": "u-block u-border u-no-border-t u-no-border-l u-no-border-r",
            "th": {
                "first": "u-block u-text-left",
                "rest": "u-padding-top u-block u-text-left"
            },
            "td": {
                "first": "u-padding u-block u-font-bold",
                "rest": "u-padding u-block u-font-bold"
            }
        },
        "medium": {
            "table": "u-table-fixed u-w-100",
            "tbody": "",
            "tr": "u-border u-no-border-t u-no-border-l u-no-border-r",
            "th": {
                "first": "u-padding u-padding-right u-text-left",
                "rest": "u-padding u-padding-top u-padding-right u-text-left"
            },
            "td": {
                "first": "u-padding u-padding-left u-font-bold",
                "rest": "u-padding u-padding-top u-padding-left u-font-bold"
            }
        },
        "large": {
            "table": "u-table-fixed u-w-100",
            "tbody": "",
            "tr": "u-border u-no-border-t u-no-border-l u-no-border-r",
            "th": {
                "first": "u-padding u-padding-right u-text-left",
                "rest": "u-padding u-padding-top u-padding-right u-text-left"
            },
            "td": {
                "first": "u-padding u-padding-left u-font-bold",
                "rest": "u-padding u-padding-top u-padding-left u-font-bold"
            }
        }
    };
    var _default = CartDetailsModal;
    _exports.default = _default;
});
//# sourceMappingURL=CartDetailsModal.js.map