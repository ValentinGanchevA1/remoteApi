define(["exports", "react", "lodash", "prop-types", "eshop/modules/core/components/ui/Expander", "./FixProductCheckBox", "../../../../../core/enum/Outline"], function(_exports, _react, _lodash, _propTypes, _Expander, _FixProductCheckBox, _Outline) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _FixProductCheckBox = babelHelpers.interopRequireDefault(_FixProductCheckBox);
    _Outline = babelHelpers.interopRequireDefault(_Outline);

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

    var FixProductMigratedFirstCheckBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixProductMigratedFirstCheckBox, _Component);

        var _super = _createSuper(FixProductMigratedFirstCheckBox);

        function FixProductMigratedFirstCheckBox(props) {
            var _this;

            babelHelpers.classCallCheck(this, FixProductMigratedFirstCheckBox);
            _this = _super.call(this, props);
            var productStates = [];

            var checkboxState = _this.calculateCheckboxStateAndPopulateProductStates(_this.props.products, productStates);

            _this.state = {
                selected: checkboxState,
                stateChange: productStates
            };
            return _this;
        }

        babelHelpers.createClass(FixProductMigratedFirstCheckBox, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                var productStates = [];
                var checkboxState = this.calculateCheckboxStateAndPopulateProductStates(this.props.products, productStates);

                if (!_lodash.default.isEqual(productStates, this.state.stateChange)) {
                    this.setState({
                        selected: checkboxState,
                        stateChange: productStates
                    });
                }
            }
        }, {
            key: "calculateCheckboxStateAndPopulateProductStates",
            value: function calculateCheckboxStateAndPopulateProductStates(products, productStates) {
                var isSelected = true;
                products.forEach(function(p) {
                    if (!p.selected) {
                        isSelected = false;
                    }

                    productStates.push(p.selected);
                });
                return isSelected;
            }
        }, {
            key: "onClick",
            value: function onClick(event) {
                event.preventDefault();
                var handler = this.props.onClickMigratedCheckBox;
                var isSelected = true;
                var productCodes = [];
                var mainCheckBoxSelected = this.state.selected;
                this.props.products.forEach(function(p) {
                    if (mainCheckBoxSelected === p.selected) {
                        productCodes.push(p.id);
                    }
                });
                var onClick = handler(productCodes);
                onClick(event);
                this.props.products.forEach(function(p) {
                    if (!p.selected) {
                        isSelected = false;
                    }
                });
                this.setState({
                    selected: isSelected
                });
            }
        }, {
            key: "getSectionHeader",
            value: function getSectionHeader() {
                return /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    className: "js-expander__trigger__nested u-inline-block large-offset-by-3 medium-offset-by-3 u-padding-all-l u-no-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwi\u0144\xA0szczeg\xF3\u0142y"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, 'Szczegóły'));
            }
        }, {
            key: "getProductsToMigrateBorderHtml",
            value: function getProductsToMigrateBorderHtml() {
                var borderProductsToMigrate = "Żeby zachować obecne kanały wybierz";
                var productsSize = this.props.products.length;
                this.props.products.forEach(function(p, index) {
                    borderProductsToMigrate += " " + p.title;

                    if (productsSize > 1) {
                        if (productsSize - 2 > index) {
                            borderProductsToMigrate += ",";
                        } else if (productsSize - 1 > index) {
                            borderProductsToMigrate += " i";
                        }
                    }
                });
                return {
                    __html: borderProductsToMigrate
                };
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var outlineStyle = {};

                if (this.props.borderDescription) {
                    outlineStyle = {
                        outline: _Outline.default.INFO
                    };
                } //let onClick = this.props.onTestWrapped(this.props.products);


                var borderDescriptionHtml = {
                    __html: this.props.borderDescription
                };
                var hasBorder = this.props.borderDescription;
                var borderProductsToMigrateHtml = this.getProductsToMigrateBorderHtml();
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative u-margin-top-m ".concat(!hasBorder ? 'u-position-relative g-white1-bg is-selected' : ''),
                    style: _objectSpread({}, outlineStyle, {
                        marginTop: '2px'
                    })
                }, hasBorder && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-bluef-bg u-padding-m u-padding-top-m u-padding-all"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin container",
                    onClick: function onClick(e) {
                        return _this2.onClick(e);
                    }
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-1"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--info g-icon--m u-font-bold g-white1-c"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-11"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-no-margin g-white1-c",
                    dangerouslySetInnerHTML: borderDescriptionHtml
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-padding-left l-col l-col-10"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h6 u-margin-top g-white1-c",
                    dangerouslySetInnerHTML: borderProductsToMigrateHtml
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "opl-switch u-right"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    className: "u-acc-hide",
                    onChange: function onChange() {
                        return null;
                    },
                    checked: this.state.selected
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-txt--show"
                }, "Wybieram"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-txt--hide"
                }, "Wybrane")))))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-bluef-b-bg",
                    style: {
                        marginTop: "-10px",
                        zIndex: "-1"
                    }
                })))), this.props.products.map(function(v, idx) {
                    var vas = _objectSpread({}, v);

                    return /*#__PURE__*/ _react.default.createElement(DisableWrapper, {
                        hidden: vas.presentation === "hidden",
                        key: "WRAPPER" + vas.id
                    }, /*#__PURE__*/ _react.default.createElement(_FixProductCheckBox.default, {
                        key: vas.id,
                        vas: vas,
                        idx: idx,
                        onSelectionChanged: _this2.props.onSelectionChanged,
                        onClickWrapped: _this2.props.onClickWrapped,
                        net: _this2.props.net
                    }));
                }));
            }
        }]);
        return FixProductMigratedFirstCheckBox;
    }(_react.Component);

    _exports.default = FixProductMigratedFirstCheckBox;

    var DisableWrapper = function DisableWrapper(props) {
        if (props.hidden) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "u-hide"
            });
        }

        if (props.disable) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                style: {
                    opacity: "0.5",
                    pointerEvents: "none"
                }
            }, props.children);
        }

        return /*#__PURE__*/ _react.default.createElement("div", null, props.children);
    };

    FixProductMigratedFirstCheckBox.propTypes = {
        vas: _propTypes.PropTypes.shape({
            title: _propTypes.PropTypes.string,
            id: _propTypes.PropTypes.string,
            paymentDescriptions: _propTypes.PropTypes.shape({
                monthlyPayments: _propTypes.PropTypes.array
            }),
            warningMessage: _propTypes.PropTypes.string,
            onRemoveWarning: _propTypes.PropTypes.string
        }),
        idx: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
        onSelectionChanged: _propTypes.PropTypes.func,
        onClickWrapped: _propTypes.PropTypes.func,
        onTestWrapped: _propTypes.PropTypes.func
    };
});
//# sourceMappingURL=FixProductMigratedFirstCheckBox.js.map