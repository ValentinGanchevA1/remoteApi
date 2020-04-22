define(["exports", "react", "prop-types", "eshop/modules/cart/components/entriesList/shared/PriceBoxes", "eshop/modules/core/components/ui/RWDUtils", "eshop/modules/core/components/ui/Expander", "eshop/utils/OnlineUtils"], function(_exports, _react, _propTypes, _PriceBoxes, _RWDUtils, _Expander, _OnlineUtils) {
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

    var LRow = function LRow(props) {
        var selectedClassName = props.selected ? "g-brand2-bdrc" : "g-white1-bdrc";
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-spacing-s u-small-padding-top-m u-small-padding-m u-border u-border--l " + selectedClassName
        }, props.children);
    };

    var LCol = function LCol(props) {
        var bigColumnWidth = props.big ? " l-col-" + props.big : "";
        var mediumColumnWidth = props.medium ? " l-col-medium-" + props.medium : "";
        var smallColumnWidth = props.small ? " l-col-small-" + props.small : "";
        var className = props.className ? props.className : "";
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col " + bigColumnWidth + mediumColumnWidth + smallColumnWidth + " " + className
        }, props.children);
    };

    LCol.propTypes = {
        big: _propTypes.PropTypes.string,
        medium: _propTypes.PropTypes.string,
        small: _propTypes.PropTypes.string,
        className: _propTypes.PropTypes.string
    };

    var VASBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(VASBox, _Component);

        var _super = _createSuper(VASBox);

        function VASBox(props) {
            babelHelpers.classCallCheck(this, VASBox);
            return _super.call(this, props);
        }

        babelHelpers.createClass(VASBox, [{
            key: "transformPriceInfo",
            value: function transformPriceInfo(prices) {
                var monthlyPrices = prices.map(function(charge) {
                    var priceStr = _OnlineUtils.default.formatPrice(charge.price);

                    return {
                        integer: priceStr.split(',')[0],
                        fraction: priceStr.split(',')[1],
                        currency: charge.currency,
                        start: charge.monthFrom,
                        end: charge.monthTo
                    };
                });
                return monthlyPrices;
            }
        }, {
            key: "getSectionHeader",
            value: function getSectionHeader() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    className: "js-expander__trigger__nested u-inline u-text-nowrap"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwi\u0144\xA0szczeg\xF3\u0142y"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, 'Szczegóły')));
            }
        }, {
            key: "changeSelectionForRadio",
            value: function changeSelectionForRadio() {
                console.log("VAS changeSelectionForRadio");
                this.props.onSelectionChanged(this.props.vas);
            }
        }, {
            key: "render",
            value: function render() {
                var icon = this.props.vas.thumbnailIcon ? this.props.vas.thumbnailIcon : "air-drop";
                return /*#__PURE__*/ _react.default.createElement(LRow, {
                    selected: this.props.vas.selected
                }, /*#__PURE__*/ _react.default.createElement(LCol, {
                    big: "1",
                    medium: "1",
                    small: "2",
                    className: "u-large-padding-top-s u-medium-padding-top-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-large-padding-all-m u-large-padding-top-l u-medium-padding-top-l u-medium-padding-all-m u-small-padding-top"
                }, this.props.multiChoice ? /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    className: "switcher-trigger",
                    checked: this.props.vas.selected,
                    onChange: this.props.onSelectionChanged,
                    disabled: this.props.vas.disabled
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                })) : /*#__PURE__*/ _react.default.createElement(OraVasRadio, this.props))), /*#__PURE__*/ _react.default.createElement(LCol, {
                    small: "3",
                    medium: "2",
                    big: "2"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-text-center u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--" + icon
                }))), /*#__PURE__*/ _react.default.createElement(LCol, {
                    small: "7",
                    medium: "6",
                    big: "6",
                    className: "u-small-no-padding-b"
                }, /*#__PURE__*/ _react.default.createElement(_RWDUtils.ResponsiveVisibility, {
                    desktop: false,
                    mobile: true
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold"
                }, this.props.vas.title), this.props.vas.slogan && /*#__PURE__*/ _react.default.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.vas.slogan
                    }
                }), /*#__PURE__*/ _react.default.createElement(_PriceBoxes.MobilePriceBox, {
                    prices: this.transformPriceInfo(this.props.vas.paymentDescriptions.monthlyPayments)
                })))), /*#__PURE__*/ _react.default.createElement(LCol, {
                    small: "12",
                    medium: "5",
                    big: "5",
                    className: "u-small-no-padding-t"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold u-small-hide"
                }, this.props.vas.title), this.props.vas.slogan && /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-small-hide",
                    dangerouslySetInnerHTML: {
                        __html: this.props.vas.slogan
                    }
                }), /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__content__nested u-hide--soft",
                    headerBelow: true,
                    className: "opl-section-outer"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    "aria-hidden": "false",
                    className: "u-padding u-padding-top",
                    dangerouslySetInnerHTML: {
                        __html: this.props.vas.detailsDescription || this.props.vas.longDescription
                    }
                })))), /*#__PURE__*/ _react.default.createElement(LCol, {
                    big: "4",
                    medium: "4",
                    className: "u-small-no-padding-t"
                }, /*#__PURE__*/ _react.default.createElement(_RWDUtils.ResponsiveVisibility, {
                    mobile: false
                }, /*#__PURE__*/ _react.default.createElement(_PriceBoxes.DesktopPriceBox, {
                    prices: this.transformPriceInfo(this.props.vas.paymentDescriptions.monthlyPayments),
                    biggerPadding: false
                }))));
            }
        }]);
        return VASBox;
    }(_react.Component);

    _exports.default = VASBox;
    VASBox.propTypes = {
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
    VASBox.defaultProps = {
        multiChoice: true
    };

    var OraVasRadio = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(OraVasRadio, _Component2);

        var _super2 = _createSuper(OraVasRadio);

        function OraVasRadio(props) {
            babelHelpers.classCallCheck(this, OraVasRadio);
            return _super2.call(this, props);
        }

        babelHelpers.createClass(OraVasRadio, [{
            key: "getPropsForRadio",
            value: function getPropsForRadio(text, value) {
                return {
                    name: "retentionBonuses",
                    text: text,
                    value: value,
                    labelClassName: "o-radio opl-radio",
                    readOnly: false,
                    checked: !!(value == this.props.vas.selected),
                    onChange: this.changeSelectionForRadio.bind(this)
                };
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    className: "switcher-trigger",
                    name: "retentionBonuses",
                    checked: !!this.props.vas.selected,
                    onClick: this.props.onSelectionChanged
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }));
            }
        }]);
        return OraVasRadio;
    }(_react.Component);

    var Checkbox = /*#__PURE__*/ function(_Component3) {
        babelHelpers.inherits(Checkbox, _Component3);

        var _super3 = _createSuper(Checkbox);

        function Checkbox(props) {
            babelHelpers.classCallCheck(this, Checkbox);
            return _super3.call(this, props);
        }

        babelHelpers.createClass(Checkbox, [{
            key: "render",
            value: function render() {
                /*#__PURE__*/
                _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    className: "switcher-trigger",
                    checked: this.props.vas.selected,
                    onClick: this.props.onSelectionChanged
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }));
            }
        }]);
        return Checkbox;
    }(_react.Component);
});
//# sourceMappingURL=VasBox.js.map