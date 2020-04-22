define(["exports", "react", "prop-types", "../../../../core/components/ui/Tooltip"], function(_exports, _react, _propTypes, _Tooltip) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.Price = _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _Tooltip = babelHelpers.interopRequireDefault(_Tooltip);

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

    var PriceRow = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(PriceRow, _Component);

        var _super = _createSuper(PriceRow);

        function PriceRow(props) {
            babelHelpers.classCallCheck(this, PriceRow);
            return _super.call(this, props);
        }

        babelHelpers.createClass(PriceRow, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                OPL.UI.loadModules(document.getElementById(this.props.id), [{
                    path: 'core/modules/tooltips',
                    options: {
                        side: "top",
                        maxWidth: 300,
                        mouseoverMinWidth: 0,
                        triggerEvent: "mouseover"
                    }
                }]);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.id,
                    className: "l-row u-animate-height js-layout-fixer-group-1 js-height-sensitive-element opl-messages--notifications-image u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, this.props.price.oneTimeCost && /*#__PURE__*/ _react.default.createElement(Price, {
                    price: this.props.price.oneTimeCost,
                    net: this.props.net
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, this.props.price.monthlyCosts && this.props.price.monthlyCosts.length > 0 && this.props.price.monthlyCosts[0] && /*#__PURE__*/ _react.default.createElement(Price, {
                    price: this.props.price.monthlyCosts[0],
                    tooltip: this.props.tooltip,
                    net: this.props.net,
                    priceSteps: this.props.price.monthlyCosts.length && this.props.price.monthlyCosts.length > 1
                })));
            }
        }]);
        return PriceRow;
    }(_react.Component);

    _exports.default = PriceRow;
    PriceRow.propTypes = {
        price: _propTypes.default.shape({
            oneTimeCost: _propTypes.default.shape({
                gross: _propTypes.default.string,
                net: _propTypes.default.string,
                currency: _propTypes.default.string
            }),
            monthlyCosts: _propTypes.default.arrayOf(_propTypes.default.shape({
                gross: _propTypes.default.string,
                net: _propTypes.default.string,
                currency: _propTypes.default.string,
                monthFrom: _propTypes.default.number,
                monthTo: _propTypes.default.number
            }))
        }),
        id: _propTypes.default.string.isRequired,
        tooltip: _propTypes.default.string
    };
    PriceRow.defaultProps = {
        tooltip: "Abonament zawiera rabaty za e-fakturę 5,01 zł i zgodę marketingową 5,01 zł. Zgody te możesz wyrazić na kolejnym kroku zamówienia. Jeśli ich nie wyrazisz rabaty nie będą naliczone."
    };

    var Price = function Price(props) {
        var price = props.net ? props.price.net.split(',') : props.price.gross.split(',');
        var integerPricePart = price[0];
        var fractionPricePart = price[1] ? price[1].split(' ')[0] : "00";
        var monthly = !!props.price.monthFrom || !!props.price.monthTo;
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-xlarge u-font-bold u-no-spacing"
        }, integerPricePart), /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-large u-font-bold u-no-spacing"
        }, ",", fractionPricePart), /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-large u-font-bold u-spacing-left-s"
        }, "".concat(props.price.currency).concat(props.net ? ' + VAT' : '')), props.price.installments && props.price.monthTo && props.priceSteps && /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-large u-font-bold u-no-spacing u-small-hide"
        }, " x ", props.price.monthTo, " raty"), monthly && /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-large-hide u-medium-hide u-font-large u-font-bold u-no-spacing"
        }, "/mies."), props.tooltip && /*#__PURE__*/ _react.default.createElement(_Tooltip.default, null, props.tooltip));
    };

    _exports.Price = Price;
    Price.propTypes = {
        price: _propTypes.default.shape({
            gross: _propTypes.default.string.isRequired,
            currency: _propTypes.default.string.isRequired,
            monthFrom: _propTypes.default.number,
            monthTo: _propTypes.default.number,
            installments: _propTypes.default.bool
        }),
        tooltip: _propTypes.default.string
    };
});
//# sourceMappingURL=PriceRow.js.map