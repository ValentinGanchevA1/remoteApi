define(["exports", "react", "react-redux", "prop-types", "../actions/filters", "../selectors/filters", "eshop/modules/core/components/ui/Tooltip", "eshop/modules/auth/selectors/authorization", "eshop/modules/cart/selectors", "../../core/enum/SalesChannel", "eshop/modules/simfree/selectors"], function(_exports, _react, _reactRedux, _propTypes, _filters, _filters2, _Tooltip, _authorization, _selectors, _SalesChannel, _selectors2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _Tooltip = babelHelpers.interopRequireDefault(_Tooltip);
    _SalesChannel = babelHelpers.interopRequireDefault(_SalesChannel);

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

    var ClientContextCheckboxView = /*#__PURE__*/ function(_React$PureComponent) {
        babelHelpers.inherits(ClientContextCheckboxView, _React$PureComponent);

        var _super = _createSuper(ClientContextCheckboxView);

        function ClientContextCheckboxView() {
            babelHelpers.classCallCheck(this, ClientContextCheckboxView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(ClientContextCheckboxView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                console.log("Client Context component Did mount");
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                console.log("Client Context component will unmount");
            }
        }, {
            key: "renderSwitch",
            value: function renderSwitch() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table-cell u-vertical-middle  " + (this.props.position === "left" ? "u-padding-right-s" : "u-padding-left-s")
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "opl-switch u-block"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    name: "nope",
                    className: "is-not-empty",
                    onChange: this.props.setClientContext,
                    checked: this.props.clientContext
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-txt--show"
                }, "Wybieram"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-txt--hide"
                }, "Wybrany"))));
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var willRender = function willRender() {
                    return !_this.props.addTerminalToOfferBundleNo && _this.props.channels.sales === _SalesChannel.default.WWW && !_this.props.isLogged && !_this.props.isCartMobile;
                };

                if (willRender()) return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table u-left u-large-" + this.props.position + " u-medium-" + this.props.position
                }, this.props.position === "left" && this.renderSwitch(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table-cell u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-small-font-small"
                }, this.props.filterCmsDescriptions && this.props.filterCmsDescriptions.clientContextLabel || this.props.label)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table-cell u-vertical-middle u-padding-right-s"
                }, /*#__PURE__*/ _react.default.createElement(_Tooltip.default, null, /*#__PURE__*/ _react.default.createElement(HtmlText, null, this.props.filterCmsDescriptions && this.props.filterCmsDescriptions.clientContextTooltip || this.props.tooltip))), this.props.position === "right" && this.renderSwitch());
                else return null;
            }
        }]);
        return ClientContextCheckboxView;
    }(_react.default.PureComponent);

    var HtmlText = function HtmlText(props) {
        var htmlContent = {
            __html: props.children
        };
        return /*#__PURE__*/ _react.default.createElement("div", {
            dangerouslySetInnerHTML: htmlContent
        });
    };

    ClientContextCheckboxView.propTypes = {
        label: _propTypes.default.string,
        tooltip: _propTypes.default.string,
        setClientContext: _propTypes.default.func.isRequired,
        clientContext: _propTypes.default.bool.isRequired,
        position: _propTypes.default.oneOf(["left", "right"]),
        descriptions: _propTypes.default.objectOf(_propTypes.default.string)
    };
    ClientContextCheckboxView.defaultProps = {
        label: "Pokaż rabaty na kolejne karty SIM",
        tooltip: "Opłata abonamentowa uwzględnia rabaty: za łączenie usług w Orange - 20 zł, za wyrażenie zgody na e-fakturę i terminowe płatności – 5 zł oraz zgody marketingowej – 5 zł.",
        position: "right"
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            clientContext: (0, _filters2.getClientContext)(state),
            isLogged: (0, _authorization.isLogged)(state),
            isCartMobile: (0, _selectors.isCartMobile)(state),
            filterCmsDescriptions: (0, _selectors2.getSelectedOfferTypeDescriptions)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setClientContext: function setClientContext(event) {
                return dispatch((0, _filters.setClientContext)(event.target.checked));
            }
        };
    };

    var ClientContextCheckbox = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ClientContextCheckboxView);
    var _default = ClientContextCheckbox;
    _exports.default = _default;
});
//# sourceMappingURL=ClientContextCheckbox.js.map