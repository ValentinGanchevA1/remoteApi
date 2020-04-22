define(["exports", "react", "prop-types", "./Utils", "./FixProductDetails", "./modalFragments/FixInputFragments", "../../../../../core/components/ui/Expander", "eshop/modules/fix/components/fragments/FixTvFilteredExpander"], function(_exports, _react, _propTypes, _Utils, _FixProductDetails, _FixInputFragments, _Expander, _FixTvFilteredExpander) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _FixProductDetails = babelHelpers.interopRequireDefault(_FixProductDetails);
    _FixTvFilteredExpander = babelHelpers.interopRequireDefault(_FixTvFilteredExpander);

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

    var FixProductImmutableBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixProductImmutableBox, _Component);

        var _super = _createSuper(FixProductImmutableBox);

        function FixProductImmutableBox(props) {
            babelHelpers.classCallCheck(this, FixProductImmutableBox);
            return _super.call(this, props);
        }

        babelHelpers.createClass(FixProductImmutableBox, [{
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
            key: "getIncludedInThePackageTitle",
            value: function getIncludedInThePackageTitle() {
                if (this.props.includedInThePackageTitle && this.props.includedInThePackageTitle !== "") {
                    return this.props.includedInThePackageTitle;
                }

                return "W cenie pakietu";
            }
        }, {
            key: "isWww",
            value: function isWww() {
                return !!this.props.channels && this.props.channels.sales === "WWW";
            }
        }, {
            key: "render",
            value: function render() {
                var includedInThePackageTitle = this.getIncludedInThePackageTitle();
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
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
                }), this.props.showPrice ? /*#__PURE__*/ _react.default.createElement(_FixInputFragments.PriceCell, {
                    small: "12",
                    medium: "5",
                    big: "5",
                    vas: this.props.vas,
                    net: this.props.net
                }) : /*#__PURE__*/ _react.default.createElement(_Utils.LCol, {
                    small: "12",
                    medium: "5",
                    big: "5",
                    className: "u-large-text-left u-medium-text-left u-small-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "g-brand2-c h4",
                    dangerouslySetInnerHTML: {
                        __html: includedInThePackageTitle
                    }
                }))), /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__container__nested",
                    headerClassName: "u-position-relative u-small-text-right",
                    className: "l-row u-no-margin opl-section-outer--2",
                    expanded: this.isWww(),
                    styleObject: this.isWww() ? {
                        display: "block"
                    } : null
                }, /*#__PURE__*/ _react.default.createElement(_FixProductDetails.default, {
                    vas: this.props.vas
                }))), !!(this.props.vas && this.props.vas.addonType === "TVBASIC" && this.props.idx === 0) && /*#__PURE__*/ _react.default.createElement(_FixTvFilteredExpander.default, {
                    tvPackages: this.props.tvPackages
                }));
            }
        }]);
        return FixProductImmutableBox;
    }(_react.Component);

    _exports.default = FixProductImmutableBox;
    FixProductImmutableBox.propTypes = {
        vas: _propTypes.PropTypes.shape({
            title: _propTypes.PropTypes.string,
            id: _propTypes.PropTypes.string,
            paymentDescriptions: _propTypes.PropTypes.shape({
                monthlyPayments: _propTypes.PropTypes.array
            })
        }),
        idx: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
        onSelectionChanged: _propTypes.PropTypes.func,
        showPrice: _propTypes.PropTypes.bool,
        selected: _propTypes.PropTypes.bool,
        includedInThePackageTitle: _propTypes.PropTypes.string
    };
});
//# sourceMappingURL=FixProductImmutableBox.js.map