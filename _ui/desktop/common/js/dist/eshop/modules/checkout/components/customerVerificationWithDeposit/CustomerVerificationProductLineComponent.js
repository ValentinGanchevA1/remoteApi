define(["exports", "react", "react-redux"], function(_exports, _react, _reactRedux) {
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

    var CustomerVerificationProductLineComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CustomerVerificationProductLineComponent, _Component);

        var _super = _createSuper(CustomerVerificationProductLineComponent);

        function CustomerVerificationProductLineComponent(props) {
            babelHelpers.classCallCheck(this, CustomerVerificationProductLineComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(CustomerVerificationProductLineComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("table", {
                    role: "presentation",
                    class: "opl-checkout-header u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    colspan: "4",
                    class: "u-small-no-padding-b"
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("b", null, this.props.entry.monthlyPrices && this.props.entry.monthlyPrices[0] ? this.props.entry.monthlyPrices[0].gross : ""), " ", /*#__PURE__*/ _react.default.createElement("b", null, this.props.entry.planName), " (Nr telefonu ", this.props.entry.msisdn, ", ", this.props.entry.loyaltyLengthDescription, ")", this._renderTerminalInfo(), this._renderEuroSetInfo())), this.props.deposit ? /*#__PURE__*/ _react.default.createElement("td", null, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-right"
                }, this.props.deposit, " z\u0142")) : null))), this.props.deposit ? /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-padding-all-m u-no-padding-r u-no-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 u-left u-no-padding-left u-text-left"
                }, /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("b", null, "Pow\xF3d: "))), /*#__PURE__*/ _react.default.createElement("span", null, this._renderReasonSection())) : null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-padding-all-m u-no-padding-r u-no-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-no-padding-all"
                })));
            }
        }, {
            key: "_renderReasonSection",
            value: function _renderReasonSection() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-padding-all-m u-no-padding-r u-no-padding-l"
                }, this.props.reasons ? this.props.reasons.map(function(reason, index) {
                    if (_this.props.entry.bundleNo === reason.bundleNo) {
                        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("span", null, reason.code));
                    }
                }) : null);
            }
        }, {
            key: "_renderTerminalInfo",
            value: function _renderTerminalInfo() {
                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.entry && this.props.entry.terminals ? this.props.entry.terminals.filter(function(t) {
                    return !!t;
                }).map(function(terminal, index) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: index
                    }, /*#__PURE__*/ _react.default.createElement("b", null, "".concat(terminal.name).concat(!!terminal.colorDefinition ? ', ' + terminal.colorDefinition.name : '')));
                }) : null);
            }
        }, {
            key: "_renderEuroSetInfo",
            value: function _renderEuroSetInfo() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.entry && this.props.entry.euroSets ? this.props.entry.euroSets.filter(function(t) {
                    return !!t;
                }).map(function(euroSet, index) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: index
                    }, /*#__PURE__*/ _react.default.createElement("b", null, euroSet.name, " (", _this2.euroSetColors(euroSet), ")"));
                }) : null);
            }
        }, {
            key: "euroSetColors",
            value: function euroSetColors(euroSet) {
                var colors = "";
                var count = 0;

                if (euroSet && euroSet.setElements) {
                    euroSet.setElements.map(function(euroSetElement) {
                        count = count + 1;
                        colors = colors + euroSetElement.color + (count !== euroSet.setElements.length ? "," : "");
                    });
                }

                return colors;
            }
        }]);
        return CustomerVerificationProductLineComponent;
    }(_react.Component);

    _exports.default = CustomerVerificationProductLineComponent;
});
//# sourceMappingURL=CustomerVerificationProductLineComponent.js.map