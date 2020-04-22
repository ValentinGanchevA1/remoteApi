define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/utils/OnlineUtils"], function(_exports, _react, _propTypes, _OraCommonComponents, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var MsisdnPickerComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MsisdnPickerComponent, _Component);

        var _super = _createSuper(MsisdnPickerComponent);

        function MsisdnPickerComponent(props) {
            babelHelpers.classCallCheck(this, MsisdnPickerComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MsisdnPickerComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.fetch) {
                    this.props.fetchMsisdns();
                }
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.fetch && !this.props.fetch) {
                    this.props.fetchMsisdns();
                }
            }
        }, {
            key: "renderList",
            value: function renderList() {
                var _this = this;

                var name;
                var transformedMsisdns = [].concat(babelHelpers.toConsumableArray(this.props.msisdns.filter(function(it) {
                    return it.number === _this.props.entry.msisdn;
                })), babelHelpers.toConsumableArray(this.props.msisdns.filter(function(it) {
                    return it.number !== _this.props.entry.msisdn;
                }).sort(function(a, b) {
                    return a.status < b.status ? -1 : a.status > b.status ? 1 : 0;
                })));
                return transformedMsisdns.map(function(el, k) {
                    name = "msisdn";
                    return /*#__PURE__*/ _react.default.createElement("li", {
                        className: "l-col l-col-small-6 l-col-medium-6 l-col-6 u-padding-l",
                        key: el.number
                    }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, {
                        name: name,
                        className: "o-radio opl-radio",
                        value: el.number,
                        onChange: this.props.changeMsisdn.bind(this, el.number),
                        checked: this.props.msisdn == el.number,
                        text: _OnlineUtils.default.transformMsisdn(el.number),
                        readOnly: el.status === "LOCAL" && el.number !== this.props.entry.msisdn
                    }));
                }.bind(this));
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-margin-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h4 u-margin-l"
                }, "Zmie\u0144 numer"), /*#__PURE__*/ _react.default.createElement("fieldset", null, /*#__PURE__*/ _react.default.createElement("legend", {
                    className: "u-acc-hide"
                }, "wybierz numer z listy"), /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "l-row"
                }, this.renderList()))));
            }
        }]);
        return MsisdnPickerComponent;
    }(_react.Component);

    MsisdnPickerComponent.defaultProps = {
        msisdns: []
    };
    MsisdnPickerComponent.propTypes = {
        msisdn: _propTypes.PropTypes.string,
        msisdns: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
            number: _propTypes.PropTypes.string,
            status: _propTypes.PropTypes.string
        })),
        fetchMsisdns: _propTypes.PropTypes.func,
        changeMsisdn: _propTypes.PropTypes.func,
        fetch: _propTypes.PropTypes.bool
    };
    var _default = MsisdnPickerComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MsisdnPickerComponent.js.map