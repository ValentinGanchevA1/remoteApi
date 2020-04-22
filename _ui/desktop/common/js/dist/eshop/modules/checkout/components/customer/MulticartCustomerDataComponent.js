define(["exports", "react", "prop-types", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "eshop/modules/checkout/components/customer/MulticartCustomerBusinessDetailsDataComponent", "eshop/modules/checkout/components/customer/MulticartCustomerPersonalDetailsDataComponent", "eshop/modules/documents/selectors", "../../../core/enum/SalesChannel", "../../utils/utils"], function(_exports, _react, _propTypes, _reactRedux, _selectors, _app, _data, _MulticartCustomerBusinessDetailsDataComponent, _MulticartCustomerPersonalDetailsDataComponent, _selectors2, _SalesChannel, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartCustomerDataView = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _MulticartCustomerBusinessDetailsDataComponent = babelHelpers.interopRequireDefault(_MulticartCustomerBusinessDetailsDataComponent);
    _MulticartCustomerPersonalDetailsDataComponent = babelHelpers.interopRequireDefault(_MulticartCustomerPersonalDetailsDataComponent);
    _SalesChannel = babelHelpers.interopRequireDefault(_SalesChannel);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    var dataComponentId = 0;

    var MulticartCustomerDataView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartCustomerDataView, _Component);

        var _super = _createSuper(MulticartCustomerDataView);

        function MulticartCustomerDataView() {
            babelHelpers.classCallCheck(this, MulticartCustomerDataView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartCustomerDataView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.requestCartCustomerData();
                this.props.registerNextStepCondition('customerData');
                this.componentId = "react-data-" + dataComponentId++;

                if (!!this.props.initialNationality) {
                    this.props.setInitialNationality(this.props.initialNationality);
                }

                if (!!this.props.foreginerIsAvailable) {
                    this.props.setForeignerAvailable(this.props.foreginerIsAvailable);
                }
            } //Prevent re-construct subcomponent.

        }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps, nextState) {
                if (!this.props || this.props.show !== nextProps.shown || this.props.isBusinessClient !== nextProps.isBusinessClient || this.props.isSalesOfGoodsOnly !== nextProps.isSalesOfGoodsOnly) {
                    return true;
                }

                return false;
            }
        }, {
            key: "getTitle",
            value: function getTitle() {
                if (this.props.isBusinessClient) {
                    return this.props.descriptions.businessTitle || this.props.defaultBusinessTitle || "";
                } else {
                    return this.props.descriptions.title || "";
                }
            }
        }, {
            key: "toggleForeigner",
            value: function toggleForeigner() {
                var foreignerEnabled = !this.props.foreigner;
                this.props.changeCustomerDataFormFieldNoValidations({
                    name: 'foreigner',
                    value: foreignerEnabled
                });

                if (this.props.noPesel) {
                    this.props.requestRecalculateConsentsForForeigner(foreignerEnabled);
                } //Temporary solution for NOR-174842


                if (foreignerEnabled) {
                    var defaultValue = (0, _utils.prepareForeignerIdentificationTypes)(this.props.foreignerIdentificationMap).find(function(t) {
                        return "RESIDENCE_CARD" === t.value;
                    });
                    this.props.changeCustomerDataFormFieldNoValidations({
                        name: 'identification',
                        value: defaultValue.value
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                var title = this.getTitle(); //TODO:remove when component controller logic is complete

                var bProps = _objectSpread({}, this.props);

                if (this.props.legalFormArray && this.props.legalFormArray.length === 0) {
                    bProps.legalFormArray = undefined;
                }

                return this.props.show ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form l-table-row__wrapper",
                    id: this.componentId,
                    key: this.componentId
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-table-row__wrapper"
                }, this.props.isSalesOfGoodsOnly ? this.renderBusinessHeader(title) : this.renderPersonalHeader(title), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin-top u-spacing-top-xs u-spacing-l l-col l-col-12",
                    hidden: !this.props.foreginerIsAvailable || this.props.isBusinessClient || this.props.isB2B
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    onChange: this.toggleForeigner.bind(this),
                    disabled: this.props.existing && this.props.initialNationality !== "POL" || this.props.isBzuOnlyAvailableOptionForFix && (this.props.channels.sales === _SalesChannel.default.TLS || this.props.channels.sales === _SalesChannel.default.IDG),
                    checked: this.props.foreigner
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.descriptions.foreigner))), this.props.isBusinessClient || this.props.isB2B ? /*#__PURE__*/ _react.default.createElement(_MulticartCustomerBusinessDetailsDataComponent.default, babelHelpers.extends({
                    key: "businessDataCmp"
                }, bProps)) : /*#__PURE__*/ _react.default.createElement(_MulticartCustomerPersonalDetailsDataComponent.default, babelHelpers.extends({
                    key: "personalDataCmp"
                }, this.props)))) : /*#__PURE__*/ _react.default.createElement("div", null);
            }
        }, {
            key: "renderPersonalHeader",
            value: function renderPersonalHeader(title) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-l u-large-spacing-xs u-medium-spacing-s u-small-spacing-s l-row l-table-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    key: "personalHeader",
                    className: "u-spacing-top-l l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3",
                    dangerouslySetInnerHTML: {
                        __html: title
                    }
                })));
            }
        }, {
            key: "renderBusinessHeader",
            value: function renderBusinessHeader(title) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    key: "businessHeader",
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 l-col-medium-6 l-col-small-12 u-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3",
                    dangerouslySetInnerHTML: {
                        __html: title
                    }
                })));
            }
        }]);
        return MulticartCustomerDataView;
    }(_react.Component);

    _exports.MulticartCustomerDataView = MulticartCustomerDataView;
    MulticartCustomerDataView.propTypes = {
        firstName: _propTypes.default.string,
        lastName: _propTypes.default.string,
        readOnly: _propTypes.default.bool,
        companyName: _propTypes.default.string,
        nip: _propTypes.default.string,
        regon: _propTypes.default.string,
        isBusinessClient: _propTypes.default.bool,
        locked: _propTypes.default.bool,
        requestCartCustomerData: _propTypes.default.func,
        changeCustomerDataFormField: _propTypes.default.func,
        reloadSummaryOnCart: _propTypes.default.func,
        switchForeignerMode: _propTypes.default.func,
        foreignerIdentificationMap: _propTypes.default.oneOfType([_propTypes.default.shape({
            value: _propTypes.default.string,
            description: _propTypes.default.string
        }), _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.string,
            description: _propTypes.default.string
        }))])
    };
    MulticartCustomerDataView.defaultProps = {
        defaultBusinessTitle: "Dane firmy"
    };
    var MulticartCustomerDataComponent = (0, _reactRedux.connect)(_selectors.getCustomerDataForm, {
        changeCustomerDataFormField: _app.changeCustomerDataFormField,
        changeCustomerDataFormFieldNoValidations: _app.changeCustomerDataFormFieldNoValidations,
        requestCartCustomerData: _data.requestCartCustomerData,
        reloadSummaryOnCart: _app.reloadSummaryOnCart,
        registerNextStepCondition: _data.registerNextStepCondition,
        setInitialNationality: _data.setInitialNationality,
        setForeignerAvailable: _data.setForeignerAvailable
    })(MulticartCustomerDataView);
    var _default = MulticartCustomerDataComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartCustomerDataComponent.js.map