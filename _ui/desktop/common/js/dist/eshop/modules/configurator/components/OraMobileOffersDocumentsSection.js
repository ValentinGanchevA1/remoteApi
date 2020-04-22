define(["exports", "react", "react-redux", "./OraDocumentsSectionPart", "eshop/modules/cart/selectors", "eshop/modules/core/components/ui/Expander"], function(_exports, _react, _reactRedux, _OraDocumentsSectionPart, _selectors, _Expander) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OraDocumentsSectionPart = babelHelpers.interopRequireDefault(_OraDocumentsSectionPart);

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

    var OraMobileOffersDocumentsSection = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraMobileOffersDocumentsSection, _Component);

        var _super = _createSuper(OraMobileOffersDocumentsSection);

        function OraMobileOffersDocumentsSection(props) {
            babelHelpers.classCallCheck(this, OraMobileOffersDocumentsSection);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraMobileOffersDocumentsSection, [{
            key: "render",
            value: function render() {
                console.log(this.props.selectedOfferType);
                var regulationsList = this.props.regulationsList;
                var agreementsList = this.props.agreementsList;
                var pricesList = this.props.pricesList;
                var depositList = this.props.depositList;

                var toggleHeader = /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h4 opl-section__heading"
                }, "Umowy, cenniki, regulaminy");

                var sectionHeader = /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Toggle, {
                    variant: "arrow",
                    header: toggleHeader,
                    className: "l-col l-col-12 ",
                    triggerClassName: "opl-document__expander__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-show"
                }, "rozwi\u0144 sekcj\u0119 Umowy, cenniki, regulaminy"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, "zwi\u0144 sekcj\u0119 Umowy, cenniki, regulaminy")));

                return /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    scrollToSelected: false,
                    className: "l-page-row",
                    id: "doc_expander"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: sectionHeader,
                    variant: "section",
                    className: "opl-document__expander",
                    contentClassName: "opl-document__expander__content",
                    id: "document-component-section"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    scrollToSelected: false,
                    className: "u-padding-left-l",
                    id: "doc_section_expander"
                }, !!(this.props.selectedOfferType !== "SIMFREE" && agreementsList && agreementsList.length != 0) && /*#__PURE__*/ _react.default.createElement(_OraDocumentsSectionPart.default, {
                    documentList: agreementsList,
                    header: "Umowy"
                }), !!(this.props.selectedOfferType !== "SIMFREE") && !!(pricesList && pricesList.length != 0) && /*#__PURE__*/ _react.default.createElement(_OraDocumentsSectionPart.default, {
                    documentList: pricesList,
                    header: "Cenniki"
                }), !!(regulationsList && regulationsList.length != 0) && /*#__PURE__*/ _react.default.createElement(_OraDocumentsSectionPart.default, {
                    documentList: regulationsList,
                    header: "Regulaminy"
                }), !!(this.props.selectedOfferType !== "SIMFREE") && !!(depositList && depositList.length != 0 && this.props.getDepositCost) && /*#__PURE__*/ _react.default.createElement(_OraDocumentsSectionPart.default, {
                    documentList: depositList,
                    header: "Depozyty"
                }))));
            }
        }]);
        return OraMobileOffersDocumentsSection;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            getDepositCost: (0, _selectors.getDepositCost)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraMobileOffersDocumentsSection);

    _exports.default = _default;
});
//# sourceMappingURL=OraMobileOffersDocumentsSection.js.map