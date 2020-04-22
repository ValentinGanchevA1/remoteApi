define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Expander", "./Utils", "./FixProductDetails", "./modalFragments/FixInputFragments", "../../../../../core/enum/Outline"], function(_exports, _react, _propTypes, _Expander, _Utils, _FixProductDetails, _FixInputFragments, _Outline) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _FixProductDetails = babelHelpers.interopRequireDefault(_FixProductDetails);
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

    var FixProductCheckBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixProductCheckBox, _Component);

        var _super = _createSuper(FixProductCheckBox);

        function FixProductCheckBox(props) {
            babelHelpers.classCallCheck(this, FixProductCheckBox);
            return _super.call(this, props);
        }

        babelHelpers.createClass(FixProductCheckBox, [{
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
            key: "render",
            value: function render() {
                var outlineStyle = {};

                if (!!this.props.vas.warningMessage) {
                    outlineStyle = {
                        outline: _Outline.default.WARN
                    };
                } else if (this.props.vas.borderDescription) {
                    outlineStyle = {
                        outline: _Outline.default.INFO
                    };
                }

                var onClick = {};

                if (this.props.vas.selected && !!this.props.vas.onRemoveWarning) {
                    onClick = this.props.onClickWrapped(this.props.vas.id, this.props.vas.propositionId, this.props.vas.onRemoveWarning);
                } else {
                    onClick = this.props.onSelectionChanged(this.props.vas.id, this.props.vas.propositionId);
                }

                var borderDescriptionHtml = {
                    __html: this.props.vas.borderDescription
                };
                var hasBorder = this.props.vas.warningMessage || this.props.vas.borderDescription;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative u-margin-top-m ".concat(!hasBorder ? 'u-position-relative g-white1-bg is-selected' : ''),
                    style: _objectSpread({}, outlineStyle, {
                        marginTop: '2px'
                    })
                }, this.props.vas.warningMessage && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-yellowf-bg u-padding-m u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin l-row"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--warn g-icon--xs-s u-padding u-padding-right-s",
                    "aria-hidden": "true"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-strong h5"
                }, "Uwaga!"), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-no-margin"
                }, this.props.vas.warningMessage)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-yellowf-b-bg",
                    style: {
                        marginTop: "-5px",
                        zIndex: "-1"
                    }
                })))), this.props.vas.borderDescription && !this.props.vas.selected && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-bluef-bg u-padding-m u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin l-row"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-no-margin g-white1-c",
                    dangerouslySetInnerHTML: borderDescriptionHtml
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-bluef-b-bg",
                    style: {
                        marginTop: "-10px",
                        zIndex: "-1"
                    }
                })))), !hasBorder && this.props.vas.selected && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer",
                    "aria-hidden": "true"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__border"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__checkmark"
                })), /*#__PURE__*/ _react.default.createElement(_Utils.LRow, {
                    id: "product-checkbox-row-".concat(this.props.vas.id, "-").concat(this.props.idx),
                    className: "u-no-margin u-padding-all-l u-no-padding-bottom u-small-padding-all u-small-padding-top-l",
                    onClick: onClick
                }, /*#__PURE__*/ _react.default.createElement(_FixInputFragments.GraphicCell, {
                    vas: this.props.vas
                }), /*#__PURE__*/ _react.default.createElement(_FixInputFragments.NameCell, {
                    vas: this.props.vas
                }), /*#__PURE__*/ _react.default.createElement(_FixInputFragments.PriceCell, {
                    vas: this.props.vas,
                    net: this.props.net
                }), /*#__PURE__*/ _react.default.createElement(_Utils.LCol, {
                    small: "12",
                    medium: "2",
                    big: "2",
                    className: "u-small-position-absolute u-small-position-right u-small-w-auto u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "opl-switch u-right"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    className: "u-acc-hide",
                    disabled: this.props.vas.mandatory,
                    checked: this.props.vas.selected,
                    onChange: function onChange() {
                        return null;
                    }
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-txt--show"
                }, "Wybieram"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-txt--hide"
                }, "Wybrane"))))), /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__container__nested",
                    headerClassName: "u-position-relative u-small-text-right",
                    className: "l-row u-no-margin opl-section-outer--2"
                }, /*#__PURE__*/ _react.default.createElement(_FixProductDetails.default, {
                    vas: this.props.vas
                })));
            }
        }]);
        return FixProductCheckBox;
    }(_react.Component);

    _exports.default = FixProductCheckBox;
    FixProductCheckBox.propTypes = {
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
        onClickWrapped: _propTypes.PropTypes.func
    };
});
//# sourceMappingURL=FixProductCheckBox.js.map