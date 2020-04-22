define(["exports", "react", "react-redux", "prop-types", "lodash", "../../../../../flux/utils/OraModalService", "../../../actions/cart", "../../../../fix/actions/data", "../../Utils", "../fix/productDetails/FixDetailsModal", "../../../../../utils/OnlineUtils", "../fix/PriceRow", "../fix/PriceBox", "../fix/ProductRow", "../fix/FullProductRow"], function(_exports, _react, _reactRedux, _propTypes, _lodash, _OraModalService, _cart, _data, _Utils, _FixDetailsModal, _OnlineUtils, _PriceRow, _PriceBox, _ProductRow, _FullProductRow) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _FixDetailsModal = babelHelpers.interopRequireDefault(_FixDetailsModal);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _PriceRow = babelHelpers.interopRequireDefault(_PriceRow);
    _PriceBox = babelHelpers.interopRequireDefault(_PriceBox);
    _ProductRow = babelHelpers.interopRequireDefault(_ProductRow);
    _FullProductRow = babelHelpers.interopRequireDefault(_FullProductRow);

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

    var CommonPropositionEntry = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CommonPropositionEntry, _Component);

        var _super = _createSuper(CommonPropositionEntry);

        function CommonPropositionEntry(props) {
            var _this;

            babelHelpers.classCallCheck(this, CommonPropositionEntry);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "getChangeDescriptionForProduct", function(product, descriptions) {
                if (!!product.deviceType) {
                    return descriptions.changeDeviceLabel;
                } else {
                    return descriptions.detailsLabel;
                }
            });

            _this.props.redirectOnCustomerSearch();

            _this.name = _this.props.bundleNo + "_" + _this.props.entryNo;
            _this.actionPrefix = 'productDetails-main';
            return _this;
        }

        babelHelpers.createClass(CommonPropositionEntry, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                OPL.UI.loadModules(document.getElementById("common-proposition-entry-".concat(this.name)), jsModules());
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                var _this2 = this;

                OPL.UI.fire(OPL.UI.EVENTS.modules.layoutFixer.recalculate, "common-proposition-entry-".concat(this.name));
                this.props.subEntries && this.props.subEntries.forEach(function(subEntry) {
                    subEntry && _OraModalService.default.add(function(data) {
                        return /*#__PURE__*/ _react.default.createElement(_FixDetailsModal.default, {
                            id: "".concat(_this2.actionPrefix, "-").concat(subEntry.code),
                            header: "Szczegóły urządzenia",
                            details: subEntry.details,
                            icon: subEntry.thumbnailIcon,
                            productName: subEntry.name,
                            net: _this2.props.showNetPrices
                        });
                    });
                });
            }
        }, {
            key: "changeProduct",
            value: function changeProduct(bundleNo) {
                this.props.clearCartAndRedirect(bundleNo, _OnlineUtils.default.getLastViewedOfferPage());
            }
        }, {
            key: "renderRejectionReasons",
            value: function renderRejectionReasons() {
                if (this.props.rejectionReason && this.props.rejectionReason.length > 0) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row u-padding-l u-padding-top-l u-padding-left-s u-border-top"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-msg opl-msg--box opl-msg--error"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__item"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__icon u-vertical-middle"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        "aria-hidden": "true",
                        className: "g-icon g-icon--error g-icon--before g-icon--s"
                    })), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__text u-vertical-middle"
                    }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.rejectionReason.map(function(reason, i) {
                        return /*#__PURE__*/ _react.default.createElement("b", null, reason, /*#__PURE__*/ _react.default.createElement("br", null));
                    }), /*#__PURE__*/ _react.default.createElement("b", null, "Usu\u0144 produkt z koszyka.")))))));
                } else {
                    return null;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var entriesLen = this.props.mainEntries.length;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "common-proposition-entry-".concat(this.name),
                    className: "g-white1-bg u-box-shadow u-spacing"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l-xl u-padding-right-l-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-medium-hide u-large-hide u-padding-left-s u-padding-right-s u-padding-top-l u-padding-m"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: function onClick() {
                        return _this3.props.onRemove();
                    },
                    className: "opl-checkout__item__remove"
                }), /*#__PURE__*/ _react.default.createElement(_PriceBox.default, {
                    price: this.props.offerPrice,
                    net: this.props.showNetPrices
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-8 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height js-layout-fixer-group-1"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    },
                    /*No bottom border for last entry*/
                    this.props.mainEntries.map(function(entry, i) {
                        return /*#__PURE__*/ _react.default.createElement(_ProductRow.default, {
                            key: "main-entry-".concat(i),
                            product: entry,
                            borderBottom: entriesLen !== i + 1,
                            installationAddress: _this3.props.descriptions.installationAddress,
                            potsNumber: _this3.props.descriptions.potsNumber
                        });
                    })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement(_PriceRow.default, {
                    id: "price-row-".concat(this.name),
                    price: this.props.offerPrice,
                    net: this.props.showNetPrices
                }))), this.renderRejectionReasons(), this.props.subEntries.map(function(subEntry, i) {
                    return /*#__PURE__*/ _react.default.createElement(_FullProductRow.default, {
                        key: "sub-entry-".concat(i),
                        product: subEntry,
                        detailsLabel: _this3.props.descriptions.detailsLabel,
                        forFreeLabel: _this3.props.descriptions.forFreeLabel,
                        onChange: function onChange() {
                            return _this3.props.onChange({
                                selectedSection: subEntry.section
                            });
                        },
                        onDetails: function onDetails() {
                            return _OraModalService.default.open("".concat(_this3.actionPrefix, "-").concat(subEntry.code));
                        },
                        changeLabel: _this3.getChangeDescriptionForProduct(subEntry, _this3.props.descriptions),
                        net: _this3.props.showNetPrices,
                        onRemove: function onRemove() {
                            return _this3.props.onVasRemove(subEntry.code);
                        },
                        serviceFreeLabel: _this3.props.descriptions.serviceFreeLabel
                    });
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-l u-padding-top-l u-padding-left-s u-border-top"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold"
                }, (0, _Utils.loyaltyDuration)(this.props.loyaltyLength))), this.props.showButtons ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-border-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col--auto l-col-small-6 u-spacing-right-l u-padding-l u-padding-top-l u-padding-left-s u-small-border-right u-small-no-spacing-r u-small-text-center"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-spacing-right-l u-small-no-spacing",
                    onClick: function onClick() {
                        return _this3.changeProduct(_this3.props.bundleNo);
                    }
                }, this.props.descriptions.changeLabel)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col--auto l-col-small-6 u-spacing-right-l u-padding-l u-padding-top-l u-padding-left-s u-small-no-spacing-r u-small-text-center"
                }, this.props.overrideDefaultDetailsPartBy ? this.props.overrideDefaultDetailsPartBy : /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-spacing-right-l u-small-no-spacing",
                    onClick: function onClick() {
                        return _this3.props.onDetails();
                    }
                }, this.props.descriptions.detailsLabel)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col--auto u-small-hide u-spacing-right-l u-padding-l u-padding-top-l u-padding-left-s"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: function onClick() {
                        return _this3.props.onRemove();
                    }
                }, this.props.descriptions.deleteLabel))) : null)));
            }
        }]);
        return CommonPropositionEntry;
    }(_react.Component);

    var oplLayoutFixerModule = function oplLayoutFixerModule() {
        return {
            path: "core/modules/layout-fixer",
            conditions: "element:{was seen}",
            options: {
                selectors: [".js-layout-fixer-group-1"]
            }
        };
    };

    var jsModules = function jsModules() {
        return [oplLayoutFixerModule()];
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            redirectOnCustomerSearch: function redirectOnCustomerSearch() {
                return dispatch((0, _data.redirectOnCustomerSearch)());
            },
            clearCartAndRedirect: function clearCartAndRedirect(id, url) {
                return dispatch((0, _cart.clearCartAndRedirect)(id, url));
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {};
    };

    CommonPropositionEntry.propTypes = {
        mainEntries: _propTypes.default.array,
        subEntries: _propTypes.default.array,
        offerPrice: _propTypes.default.object,
        loyaltyLength: _propTypes.default.number,
        bundleNo: _propTypes.default.number,
        entryNo: _propTypes.default.number,
        onRemove: _propTypes.default.func,
        onDetails: _propTypes.default.func,
        onChange: _propTypes.default.func,
        descriptions: _propTypes.default.object,
        overrideDetailsPartBy: _propTypes.default.object,
        showButtons: _propTypes.default.bool
    };
    CommonPropositionEntry.defaultProps = {
        showButtons: true,
        subEntries: []
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CommonPropositionEntry);

    _exports.default = _default;
});
//# sourceMappingURL=CommonPropositionEntry.js.map