define(["exports", "react", "eshop/modules/core/components/ui/Expander", "react-redux", "eshop/components/OraCommonComponents", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/app"], function(_exports, _react, _Expander, _reactRedux, _OraCommonComponents, _selectors, _app) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartGoodsOrdersDocumentsView = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

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

    var MulticartGoodsOrdersDocumentsView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MulticartGoodsOrdersDocumentsView, _React$Component);

        var _super = _createSuper(MulticartGoodsOrdersDocumentsView);

        function MulticartGoodsOrdersDocumentsView(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartGoodsOrdersDocumentsView);
            _this = _super.call(this, props);
            _this.state = {
                document: {
                    title: "Faktura",
                    description: "Wydrukuj fakturę"
                },
                sectionId: "expander-content-invoice",
                printInvoiceError: false
            };
            return _this;
        }

        babelHelpers.createClass(MulticartGoodsOrdersDocumentsView, [{
            key: "handleClick",
            value: function handleClick(event) {
                event.preventDefault();
                this.props.printInvoiceNumber();
            }
        }, {
            key: "renderDocumentLink",
            value: function renderDocumentLink() {
                return /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.handleClick.bind(this)
                }, this.state.document.description);
            }
        }, {
            key: "render",
            value: function render() {
                var toggleHeader = /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h4 opl-section__heading"
                }, this.state.document.title);

                var sectionHeader = /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Toggle, {
                    variant: "arrow",
                    header: toggleHeader,
                    className: "l-col l-col-12 ",
                    triggerClassName: "opl-document__section__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-show"
                }, "rozwi\u0144 sekcj\u0119 Umowy"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, "zwi\u0144 sekcj\u0119 Umowy")));

                return /*#__PURE__*/ _react.default.createElement("div", {
                    hidden: !this.showInvoice()
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: sectionHeader,
                    id: "document-component-subsection-expander-content-invoice",
                    variant: "section",
                    className: "opl-document__section",
                    contentClassName: "opl-document__section__content"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l-xl u-small-no-padding-l u-padding-m"
                }, /*#__PURE__*/ _react.default.createElement("ul", null, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    loading: false,
                    id: "print-documents-loader-invoice-1"
                }, this.renderDocumentLink())))));
            }
        }, {
            key: "showInvoice",
            value: function showInvoice() {
                return this.props.reservation.paymentAndFiscalization && !!this.props.reservation.paymentAndFiscalization.isInvoicePresent && !!this.props.reservation.paymentStatus;
            }
        }]);
        return MulticartGoodsOrdersDocumentsView;
    }(_react.default.Component);

    _exports.MulticartGoodsOrdersDocumentsView = MulticartGoodsOrdersDocumentsView;

    var mapStateToProps = function mapStateToProps(state) {
        return {
            reservation: (0, _selectors.reservationData)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            printInvoiceNumber: function printInvoiceNumber() {
                return dispatch((0, _app.printInvoiceNumber)());
            }
        };
    };

    var MulticartGoodsOrdersDocuments = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartGoodsOrdersDocumentsView);
    var _default = MulticartGoodsOrdersDocuments;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartGoodsOrdersDocuments.js.map