define(["exports", "react", "react-redux", "./MulticartBillingAccountContractComponent", "../../actions/app"], function(_exports, _react, _reactRedux, _MulticartBillingAccountContractComponent, _app) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MulticartBillingAccountContractComponent = babelHelpers.interopRequireDefault(_MulticartBillingAccountContractComponent);

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

    var MulticartBillingAccountContractsComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartBillingAccountContractsComponent, _Component);

        var _super = _createSuper(MulticartBillingAccountContractsComponent);

        function MulticartBillingAccountContractsComponent(props) {
            babelHelpers.classCallCheck(this, MulticartBillingAccountContractsComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartBillingAccountContractsComponent, [{
            key: "closeForm",
            value: function closeForm() {
                this.props.setBillingAccountContractsVisibility(false);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-tree opl-tree__light-grey"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top-l u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-right",
                    onClick: this.closeForm.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    title: "close",
                    "aria-hidden": "true",
                    className: "kss-icon-preview g-icon g-icon--only g-icon--xs-s g-icon--close"
                })))))), /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-tree__list"
                }, /*#__PURE__*/ _react.default.createElement("li", {
                    className: "opl-tree__li opl-tree__li--last"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3 opl-tree__branch"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-tree__square-list"
                }), "Us\u0142ugi kom\xF3rkowe ", this.props.account.type === "MAGNUM" ? "(z aktywnym Orange Love)" : "")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement("h6", null, this.props.account.addressStreetLine), /*#__PURE__*/ _react.default.createElement("h6", null, this.props.account.addressCityLine))), /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-tree__list"
                }, this.props.accountContracts.map(function(contract) {
                    return /*#__PURE__*/ _react.default.createElement(_MulticartBillingAccountContractComponent.default, {
                        key: contract.msisdn,
                        msisdn: contract.msisdn,
                        dateTo: contract.dateTo
                    });
                })))));
            }
        }]);
        return MulticartBillingAccountContractsComponent;
    }(_react.Component);

    var _default = (0, _reactRedux.connect)(null, {
        setBillingAccountContractsVisibility: _app.setBillingAccountContractsVisibility
    })(MulticartBillingAccountContractsComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartBillingAccountContractsComponent.js.map