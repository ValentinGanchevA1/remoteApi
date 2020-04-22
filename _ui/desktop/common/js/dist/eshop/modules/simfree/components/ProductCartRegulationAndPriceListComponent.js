define(["exports", "react", "react-redux", "eshop/modules/configurator/selectors/filters"], function(_exports, _react, _reactRedux, _filters) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

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

    var ProductCartRegulationAndPriceListComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductCartRegulationAndPriceListComponent, _React$Component);

        var _super = _createSuper(ProductCartRegulationAndPriceListComponent);

        function ProductCartRegulationAndPriceListComponent(props) {
            babelHelpers.classCallCheck(this, ProductCartRegulationAndPriceListComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductCartRegulationAndPriceListComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this._loadModules();
            }
        }, {
            key: "toHTML",
            value: function toHTML(content) {
                return {
                    __html: content
                };
            }
        }, {
            key: "render",
            value: function render() {
                if (this.props.selectedOfferType !== "SIMFREE") {
                    return null;
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "regulation-price-list"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: this.toHTML(this.props.content)
                }));
            }
        }, {
            key: "_loadModules",
            value: function _loadModules() {
                if (document.getElementById("opl-expander-regulation-section")) OPL.UI.loadModules(document.getElementById("opl-expander-regulation-section"), [{
                    path: 'core/modules/expander',
                    options: {
                        triggerSelector: '.opl-section__expander-trigger',
                        contentSelector: '.opl-section__content',
                        parentClass: 'opl-section--togglable'
                    }
                }]);
            }
        }]);
        return ProductCartRegulationAndPriceListComponent;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedOfferType: (0, _filters.getSelectedOfferType)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductCartRegulationAndPriceListComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductCartRegulationAndPriceListComponent.js.map