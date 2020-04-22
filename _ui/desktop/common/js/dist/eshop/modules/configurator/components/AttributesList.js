define(["exports", "react", "react-redux", "prop-types", "./stateless/Attribute", "../selectors/filters"], function(_exports, _react, _reactRedux, _propTypes, _Attribute, _filters) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _Attribute = babelHelpers.interopRequireDefault(_Attribute);

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
    var AttributesListView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(AttributesListView, _React$Component);

        var _super = _createSuper(AttributesListView);

        function AttributesListView() {
            babelHelpers.classCallCheck(this, AttributesListView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(AttributesListView, [{
            key: "render",
            value: function render() {
                var _this = this;

                var count = 0; //Last element should not have border below

                var markForSeparation = function markForSeparation(attr, length) {
                    if (_this.props.separate) {
                        if (!attr.hide) {
                            count++;
                            attr.border = count != length;
                        }
                    }

                    return attr;
                }; //this.props.attributes


                var attributes = this.props.fixerClasses ? preprocessForFixer(this.props.attributes, this.props.fixerClasses) : this.props.attributes;
                var lengthOfVisibleAttributes = attributes.map(function(a) {
                    return a.hide || a.dummy ? 0 : 1;
                }).reduce(function(a, b) {
                    return a + b;
                }, 0);

                var ifApplyPadding = function ifApplyPadding() {
                    if (_this.props.paddingIfNotEmpty && lengthOfVisibleAttributes > 0) {
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
                };

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-box__icon-list opl-box__icon-list--break-medium "
                }, attributes.map(addKeyForReact).map(function(attr) {
                    return applyFixerClass(attr, _this.props.fixerClasses);
                }).map(function(attr) {
                    return distributeProp(attr, "box", _this.props.box);
                }).map(function(attr) {
                    return distributeProp(attr, "table", _this.props.table && !attr.hide);
                }).map(extractTechnicalValueIfExists).map(function(attr) {
                    return markForSeparation(attr, lengthOfVisibleAttributes);
                }).map(function(attr) {
                    return /*#__PURE__*/ _react.default.createElement(_Attribute.default, babelHelpers.extends({}, attr, {
                        config: _this.props.config
                    }));
                })), renderFixedPadding(ifApplyPadding()));
            }
        }]);
        return AttributesListView;
    }(_react.default.Component);

    AttributesListView.propTypes = {
        attributes: _propTypes.default.array.isRequired,
        separate: _propTypes.default.bool,
        box: _propTypes.default.bool,
        paddingFixer: _propTypes.default.string,
        paddingIfNotEmpty: _propTypes.default.bool,
        table: _propTypes.default.bool
    };
    AttributesListView.defaultProps = {
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
                type: 'static',
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
            //format x/y GB
            // x/y - procent wypełnienia bara
            // x   - wartość prezentowana
            var value = attr.value.trim();
            var tokens1 = value.split(' ');

            if (tokens1.length != 2) {
                console.error("data_desc format error: " + attr.value);
                return attr;
            }

            var suffix = tokens1[1];
            var tokens2 = tokens1[0].split('/');
            var x = parseInt(tokens2[0] || "");
            var y = parseInt(tokens2[1] || "");

            if (tokens2.length != 2 || !x || !y) {
                console.error("data_desc format error: " + attr.value);
                return attr;
            }

            var technicalValue = x / y * 100;
            var label = x + " " + suffix;
            return _objectSpread({}, attr, {
                value: label,
                technicalValue: technicalValue
            });
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

    var AttributesList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AttributesListView);
    var _default = AttributesList;
    _exports.default = _default;
});
//# sourceMappingURL=AttributesList.js.map