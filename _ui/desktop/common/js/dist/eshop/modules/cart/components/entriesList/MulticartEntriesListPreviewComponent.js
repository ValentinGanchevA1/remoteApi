define(["exports", "react", "react-redux", "eshop/modules/checkout/actions/app", "../../selectors", "./mobile/CartEntryPreviewComponent", "./BundleTypeEnum", "eshop/modules/configurator/selectors/filters", "eshop/modules/cart/components/entriesList/mobile/SimCartIndexHeader", "eshop/components/InfoComponent", "eshop/modules/auth/selectors/authorization", "../../../core/constants/OfferTypeEnum"], function(_exports, _react, _reactRedux, _app, _selectors, _CartEntryPreviewComponent, _BundleTypeEnum, _filters, _SimCartIndexHeader, _InfoComponent, _authorization, _OfferTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _CartEntryPreviewComponent = babelHelpers.interopRequireDefault(_CartEntryPreviewComponent);
    _BundleTypeEnum = babelHelpers.interopRequireDefault(_BundleTypeEnum);
    _SimCartIndexHeader = babelHelpers.interopRequireDefault(_SimCartIndexHeader);
    _InfoComponent = babelHelpers.interopRequireDefault(_InfoComponent);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);

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

    var MulticartEntriesListPreviewComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartEntriesListPreviewComponent, _Component);

        var _super = _createSuper(MulticartEntriesListPreviewComponent);

        function MulticartEntriesListPreviewComponent() {
            babelHelpers.classCallCheck(this, MulticartEntriesListPreviewComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartEntriesListPreviewComponent, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate(prvProps) {
                if (this.props.entries && this.props.entries.length && prvProps.entries && this.props.entries.length !== prvProps.entries.length) {
                    var that = this;
                    setTimeout(function() {
                        that.scrollToArchon();
                    }, 500);
                }
            }
        }, {
            key: "scrollToArchon",
            value: function scrollToArchon() {
                if (document.getElementById("afterAddToCartScrollAnchor")) {
                    var headerHeigth = 0;
                    if ($('.opl-header__main').length) headerHeigth = $('.opl-header__main').outerHeight();
                    console.log("headerHeigth", headerHeigth);
                    console.log(parseInt($("#afterAddToCartScrollAnchor").offset().top - headerHeigth)); //      window.scrollTo({top: parseInt($("#afterAddToCartScrollAnchor").offset().top-headerHeigth),left: 0,behavior: 'smooth'});

                    window.scrollTo(0, parseInt($("#afterAddToCartScrollAnchor").offset().top - headerHeigth));
                } else {}
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                console.log("MulticartEntriesListPreviewComponent************************************* RENDER");
                var mobileEntries = this.props.entries && this.props.entries.filter(function(ent) {
                    return ent.bundleType === _BundleTypeEnum.default.VOICE || ent.bundleType === _BundleTypeEnum.default.DATA;
                });
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row g-gray1-bg"
                }, !!mobileEntries && mobileEntries.map(function(entry, idx) {
                    var bundleType = entry.bundleType;

                    var sectionConf = _this.props.entryTitle[bundleType.toString()];

                    var bundleProps = {
                        descriptions: _this.props.descriptions,
                        sectionConf: sectionConf,
                        entry: entry,
                        idx: idx,
                        channel: _this.props.channels.sales,
                        sapReservation: _this.props.reservationNumberSapPOS,
                        sapErrorMessage: _this.props.descriptions.sapReservationError,
                        isB2B: _this.props.isB2B
                    };

                    switch (bundleType) {
                        case _BundleTypeEnum.default.VOICE:
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                key: idx + "_" + _BundleTypeEnum.default.VOICE,
                                id: idx + 1 === mobileEntries.length && "afterAddToCartScrollAnchor"
                            }, /*#__PURE__*/ _react.default.createElement(_CartEntryPreviewComponent.default, bundleProps));

                        case _BundleTypeEnum.default.DATA:
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                key: idx + "_" + _BundleTypeEnum.default.DATA,
                                id: idx + 1 === mobileEntries.length && "afterAddToCartScrollAnchor"
                            }, /*#__PURE__*/ _react.default.createElement(_CartEntryPreviewComponent.default, bundleProps));

                        default:
                            return null;
                    }
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row "
                }, !!mobileEntries && mobileEntries.length > 0 && /*#__PURE__*/ _react.default.createElement("div", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement(_InfoComponent.default, {
                    color: "grey",
                    bgColor: "grey"
                }, "Karta zosta\u0142a dodana do koszyka, aby modyfikowa\u0107 zam\xF3wienie", /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "g-black1-c",
                    onClick: this.props.gotoCartSummary
                }, " przejd\u017A do koszyka"))), /*#__PURE__*/ _react.default.createElement("div", {
                    id: (!mobileEntries || mobileEntries.length === 0) && "afterAddToCartScrollAnchor"
                }, this.props.propositionListCount > 0 && !this.props.isPropositionListCountSetMode && this.props.selectedOfferType !== _OfferTypeEnum.default.DATA && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-border-top u-no-margin u-padding-s u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list u-padding-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__item"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__icon u-large-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--sim"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__text u-vertical-middle u-small-padding-top-s"
                }, !(this.props.selectedOfferType === _OfferTypeEnum.default.VOICE_LDF) && /*#__PURE__*/ _react.default.createElement(_SimCartIndexHeader.default, {
                    key: "simCountCartBundleIndex",
                    className: " u-small-no-margin",
                    simIndex: !!mobileEntries ? mobileEntries.length : 0
                }))))))));
            }
        }]);
        return MulticartEntriesListPreviewComponent;
    }(_react.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            gotoCartSummary: function gotoCartSummary() {
                return dispatch((0, _app.gotoCartSummary)());
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isPropositionListCountSetMode: (0, _filters.getPropositionListCountSetMode)(state),
            propositionListCount: (0, _filters.getPropositionListCount)(state),
            entries: (0, _selectors.getCartEntries)(state),
            selectedNumberVoip: (0, _selectors.getSelectedVoipNumber)(state),
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            stayLoveRetentionMSISDN: (0, _authorization.getStayLoveRetentionMSISDN)(state),
            isB2B: (0, _filters.isB2B)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartEntriesListPreviewComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartEntriesListPreviewComponent.js.map