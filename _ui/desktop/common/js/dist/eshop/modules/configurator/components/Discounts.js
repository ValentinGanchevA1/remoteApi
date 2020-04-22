define(["exports", "react", "react-redux", "prop-types", "./stateless/Discount", "../selectors/filters"], function(_exports, _react, _reactRedux, _propTypes, _Discount, _filters) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _Discount = babelHelpers.interopRequireDefault(_Discount);

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

    /**
     * Renders an attribute box
     */
    var DiscountsView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(DiscountsView, _React$Component);

        var _super = _createSuper(DiscountsView);

        function DiscountsView() {
            babelHelpers.classCallCheck(this, DiscountsView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(DiscountsView, [{
            key: "render",
            value: function render() {
                var _this = this;

                var count = 0; //Last element should not have border below
                //this.props.attributes

                var discounts = this.props.fixerClasses ? preprocessForFixer(this.props.attributes, this.props.fixerClasses) : this.props.attributes;
                var lengthOfVisibleDiscounts = discounts.map(function(a) {
                    return a.hide || a.dummy ? 0 : 1;
                }).reduce(function(a, b) {
                    return a + b;
                }, 0);

                var ifApplyPadding = function ifApplyPadding() {
                    if (lengthOfVisibleDiscounts > 0) {
                        return true;
                    } else if (_this.props.fixerClasses && _this.props.fixerClasses.map(function(f) {
                            return f.visible;
                        }).reduce(function(a, b) {
                            return a || b;
                        }, false)) {
                        return true;
                    } else {
                        return false;
                    }
                }; //return (
                //<p>discounts</p>
                //)


                return /*#__PURE__*/ _react.default.createElement("div", null, discounts.map(addKeyForReact).map(function(attr) {
                    return applyFixerClass(attr, _this.props.fixerClasses);
                }).map(function(attr) {
                    return /*#__PURE__*/ _react.default.createElement(_Discount.default, babelHelpers.extends({}, attr, _this.props, {
                        config: _this.props.config
                    }));
                }));
            }
        }]);
        return DiscountsView;
    }(_react.default.Component);

    DiscountsView.propTypes = {
        attributes: _propTypes.default.array.isRequired,
        separate: _propTypes.default.bool,
        box: _propTypes.default.bool,
        paddingFixer: _propTypes.default.string,
        paddingIfNotEmpty: _propTypes.default.bool,
        table: _propTypes.default.bool
    };
    DiscountsView.defaultProps = {
        separate: true,
        box: true,
        paddingIfNotEmpty: false,
        table: false
    };

    function renderFixedPadding(render) {
        if (render) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "u-padding-l"
            });
        } else {
            return null;
        }
    }

    function preprocessForFixer(features, fixerClasses) {
        var ret = [];
        fixerClasses.forEach(function(fixer) {
            var toAdd = features.find(function(f) {
                return f.attribute === fixer.attribute;
            });
            toAdd = toAdd || {
                attribute: fixer.attribute,
                value: '<div></div>',
                dummy: true,
                hide: !fixer.visible
            };
            ret.push(toAdd);
        });
        return ret;
    }

    function distributeProp(attr, prop, value) {
        attr[prop] = value;
        return attr;
    }

    function applyFixerClass(attr, fixerClasses) {
        if (fixerClasses) {
            attr.fixer = fixerClasses.filter(function(f) {
                return f.attribute === attr.attribute;
            })[0].fixer;
        }

        return attr;
    }

    function addKeyForReact(attr) {
        attr.key = attr.attribute;
        return attr;
    }

    function extractTechnicalValueIfExists(attr) {
        return [attr].map(dummyExtractor).map(extractTechnicalValueFromDataDesc)[0];
    }

    function dummyExtractor(attr) {
        return attr;
    }

    function extractTechnicalValueFromDataDesc(attr) {
        if (attr.attribute === "data_desc") {
            var splitIndex = attr.value.indexOf("/");
            var token1 = attr.value.substring(0, splitIndex);
            var token2 = attr.value.substring(splitIndex + 1);

            if (token1.search("^\\d+$") == 0 && token2) {
                var val = parseInt(token1);
                return _objectSpread({}, attr, {
                    value: token2,
                    technicalValue: val
                });
            } else {
                console.error("data_desc format error: " + attr.value);
            }
        }

        return attr;
    }

    var mapStateToProps = function mapStateToProps(state) {
        return {
            clientContext: (0, _filters.getClientContext)(state),
            process: (0, _filters.getSelectedProcessTypeValue)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return { //    setClientContext: (event) => dispatch(setClientContext(event.target.checked))
        };
    };

    var Discounts = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DiscountsView);
    var _default = Discounts;
    _exports.default = _default;
});
//# sourceMappingURL=Discounts.js.map