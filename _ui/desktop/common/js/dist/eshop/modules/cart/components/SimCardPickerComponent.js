define(["exports", "react", "prop-types", "eshop/components/OraFloatingLabelSelect"], function(_exports, _react, _propTypes, _OraFloatingLabelSelect) {
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

    var SimCardPickerComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SimCardPickerComponent, _Component);

        var _super = _createSuper(SimCardPickerComponent);

        function SimCardPickerComponent(props) {
            babelHelpers.classCallCheck(this, SimCardPickerComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(SimCardPickerComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.fetch) {
                    this.props.fetchSimCards();
                }
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.fetch && !this.props.fetch) {
                    this.props.fetchSimCards();
                }
            }
        }, {
            key: "setSimCard",
            value: function setSimCard(simCard) {
                this.props.changeSimCard(this.props.simCards.find(function(it) {
                    return it.id === simCard.value;
                }));
            }
        }, {
            key: "defaultSimList",
            value: function defaultSimList() {
                var list = [{
                    description: 'Bez wymiany karty SIM',
                    businessDescription: null,
                    id: '',
                    isDefault: null,
                    stockLevel: 9999
                }];
                return list;
            }
        }, {
            key: "getBusinessDescription",
            value: function getBusinessDescription() {
                var _this = this;

                var simCard = this.props.simCards.find(function(simCard) {
                    return simCard.id === _this.props.simCard.id;
                });

                if (simCard) {
                    return simCard.businessDescription;
                }

                return null;
            }
        }, {
            key: "render",
            value: function render() {
                var simCards = this.props.channel === 'POS' || this.props.channel === 'AKA' ? this.defaultSimList() : this.props.simCards;
                var businessDescription = this.getBusinessDescription.apply(this);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-margin-top-s l-col"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h4 u-margin-l"
                }, "Twoja karta"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 l-col-small-12 l-col-medium-6  u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
                    id: "simCardListSelectFloating",
                    options: simCards.map(function(o) {
                        return {
                            value: o.id,
                            description: o.description
                        };
                    }),
                    onChange: this.setSimCard.bind(this),
                    selected: this.props.simCard.id,
                    disabled: simCards.length === 1,
                    className: "opl-input--size-m g-grey-bg",
                    singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                    label: "Wybierz rodzaj karty SIM",
                    isPrimary: false
                }))), businessDescription && /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: businessDescription
                    }
                })));
            }
        }]);
        return SimCardPickerComponent;
    }(_react.Component);

    SimCardPickerComponent.defaultProps = {
        simCards: [],
        fetch: true
    };
    SimCardPickerComponent.propTypes = {
        simCard: _propTypes.PropTypes.shape({
            isDefault: _propTypes.PropTypes.bool,
            description: _propTypes.PropTypes.string,
            id: _propTypes.PropTypes.string,
            stockLevel: _propTypes.PropTypes.number
        }),
        simCards: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
            isDefault: _propTypes.PropTypes.bool,
            description: _propTypes.PropTypes.string,
            id: _propTypes.PropTypes.string,
            stockLevel: _propTypes.PropTypes.number
        })),
        fetchSimCards: _propTypes.PropTypes.func,
        changeSimCard: _propTypes.PropTypes.func,
        fetch: _propTypes.PropTypes.bool,
        channel: _propTypes.PropTypes.string
    };
    var _default = SimCardPickerComponent;
    _exports.default = _default;
});
//# sourceMappingURL=SimCardPickerComponent.js.map