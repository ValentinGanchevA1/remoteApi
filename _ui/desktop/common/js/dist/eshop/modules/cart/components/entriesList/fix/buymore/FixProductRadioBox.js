define(["exports", "react", "prop-types", "eshop/modules/cart/components/entriesList/shared/PriceBoxes", "eshop/modules/core/components/ui/Expander", "./Utils", "./FixProductDetails", "./modalFragments/FixInputFragments", "../../../../../core/enum/Outline"], function(_exports, _react, _propTypes, _PriceBoxes, _Expander, _Utils, _FixProductDetails, _FixInputFragments, _Outline) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _FixProductDetails = babelHelpers.interopRequireDefault(_FixProductDetails);
    _Outline = babelHelpers.interopRequireDefault(_Outline);

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

    var FixProductRadioBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixProductRadioBox, _Component);

        var _super = _createSuper(FixProductRadioBox);

        function FixProductRadioBox(props) {
            babelHelpers.classCallCheck(this, FixProductRadioBox);
            return _super.call(this, props);
        }

        babelHelpers.createClass(FixProductRadioBox, [{
            key: "getSectionHeader",
            value: function getSectionHeader(selected, callback) {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    className: "js-expander__trigger__nested u-inline-block large-offset-by-3 medium-offset-by-3 u-padding-all-l u-no-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwi\u0144\xA0szczeg\xF3\u0142y"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, 'Szczegóły')), selected && /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block u-padding-right-l",
                    onClick: callback
                }, "Usu\u0144"));
            }
        }, {
            key: "render",
            value: function render() {
                var icon = this.props.vas.thumbnailIcon ? this.props.vas.thumbnailIcon : "air-drop";
                var outlineStyle = this.props.vas.selected ? {
                    outline: _Outline.default.SELECTED
                } : {};
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative g-white1-bg is-selected"
                }, this.props.vas.selected && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer",
                    "aria-hidden": "true"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__border"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__checkmark"
                })), /*#__PURE__*/ _react.default.createElement(_Utils.LRow, {
                    className: "u-no-margin u-padding-all-l u-no-padding-bottom u-small-padding-all u-small-padding-top-l",
                    onClick: this.props.onSelectionChanged
                }, /*#__PURE__*/ _react.default.createElement(_FixInputFragments.GraphicCell, {
                    vas: this.props.vas
                }), /*#__PURE__*/ _react.default.createElement(_FixInputFragments.NameCell, {
                    vas: this.props.vas
                }), /*#__PURE__*/ _react.default.createElement(_FixInputFragments.PriceCell, {
                    vas: this.props.vas,
                    net: this.props.net
                }), /*#__PURE__*/ _react.default.createElement(_FixInputFragments.InputCell, {
                    vas: this.props.vas
                })), /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: this.getSectionHeader(this.props.vas.selected, this.props.onSelectionChanged),
                    contentClassName: "js-expander__container__nested",
                    headerClassName: "u-position-relative u-small-text-right",
                    className: "l-row u-no-margin opl-section-outer--2"
                }, /*#__PURE__*/ _react.default.createElement(_FixProductDetails.default, {
                    vas: this.props.vas
                })));
            }
        }]);
        return FixProductRadioBox;
    }(_react.Component);

    _exports.default = FixProductRadioBox;
    FixProductRadioBox.propTypes = {
        vas: _propTypes.PropTypes.shape({
            title: _propTypes.PropTypes.string,
            id: _propTypes.PropTypes.string,
            paymentDescriptions: _propTypes.PropTypes.shape({
                monthlyPayments: _propTypes.PropTypes.array
            })
        }),
        idx: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
        onSelectionChanged: _propTypes.PropTypes.func
    };
    FixProductRadioBox.defaultProps = {
        inputType: "radio"
    };
});
//# sourceMappingURL=FixProductRadioBox.js.map