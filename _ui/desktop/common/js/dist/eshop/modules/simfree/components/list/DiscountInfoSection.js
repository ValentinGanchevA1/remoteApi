define(["exports", "react", "react-redux", "prop-types", "eshop/modules/configurator/selectors/filters"], function(_exports, _react, _reactRedux, _propTypes, _filters) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

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

    var DiscountInfoSection = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(DiscountInfoSection, _Component);

        var _super = _createSuper(DiscountInfoSection);

        function DiscountInfoSection() {
            babelHelpers.classCallCheck(this, DiscountInfoSection);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(DiscountInfoSection, [{
            key: "render",
            value: function render() {
                if (this.props.isB2B) return null;
                var description = this.getDescription(this.props.content, this.props.offerType);

                if (description && !this.props.isB2B) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 u-spacing-top-l u-spacing-l"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        dangerouslySetInnerHTML: this.toHTML(description)
                    })));
                } else {
                    return null;
                }
            }
        }, {
            key: "getDescription",
            value: function getDescription(content, offerType) {
                var fieldName = Object.keys(content).find(function(fieldName) {
                    return fieldName.indexOf(offerType) !== -1;
                });
                return content[fieldName];
            }
        }, {
            key: "toHTML",
            value: function toHTML(value) {
                return {
                    __html: value
                };
            }
        }]);
        return DiscountInfoSection;
    }(_react.Component);

    DiscountInfoSection.propTypes = {
        offerType: _propTypes.default.string,
        content: _propTypes.default.object
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            offerType: (0, _filters.getSelectedOfferType)(state),
            isB2B: (0, _filters.getMarketContext)(state) === 'B2B' ? true : false
        };
    };

    var _default = DiscountInfoSection = (0, _reactRedux.connect)(mapStateToProps, null)(DiscountInfoSection);

    _exports.default = _default;
});
//# sourceMappingURL=DiscountInfoSection.js.map