define(["exports", "react-redux", "react", "prop-types", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/app", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/cart", "eshop/modules/auth/selectors/authorization", "eshop/modules/checkout/components/modals/customerVerification/TableErrorSection"], function(_exports, _reactRedux, _react, _propTypes, _selectors, _app, _OraCommonComponents, _Modal, _selectors2, _cart, _authorization, _TableErrorSection) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _TableErrorSection = babelHelpers.interopRequireDefault(_TableErrorSection);

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

    var MagnumCustomerVerificationModalView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MagnumCustomerVerificationModalView, _Component);

        var _super = _createSuper(MagnumCustomerVerificationModalView);

        function MagnumCustomerVerificationModalView(props) {
            var _this;

            babelHelpers.classCallCheck(this, MagnumCustomerVerificationModalView);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "renderMessagesForOffers", function() {
                var offers = _this.props.errors[0].details.bundles;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "messages-for-offers"
                }, offers.map(function(offer, i) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: i
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        key: i + "-title",
                        className: "u-padding-top"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-font-bold"
                    }, "Pakiet ", offer.title), /*#__PURE__*/ _react.default.createElement("div", null, _this.props.descriptions.loyaltyCaption || "Umowa na ", " ", offer.loyaltyDuration, " miesi\u0105ce")), /*#__PURE__*/ _react.default.createElement("div", {
                        key: i + "-reason"
                    }, offer.entries.map(function(reasonData, j) {
                        return this.renderMessage(reasonData, i + "_" + j);
                    }, babelHelpers.assertThisInitialized(_this))));
                }));
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "renderMessage", function(reasonData, idIndex) {
                var descriptions = _this.props.descriptions;
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_TableErrorSection.default, {
                    key: "reasonSection_" + idIndex,
                    reasonData: reasonData,
                    descriptions: descriptions
                }), renderSeparatorLine());
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "renderInfo", function(header, hearerLine2, descrition, depositDescription, tolltipContent) {
                var category = _this.props.errors && _this.props.errors.length ? _this.props.errors[0].category : null;
                var depositSum = _this.props.errors && _this.props.errors.length ? _this.props.errors[0].details.depositSum : null;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "sg sg-section-header kss-title g-gray2-bg u-padding-top-s u-padding-bottom-s u-padding-left-s u-padding-right-s"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    "data-js-module": "core/modules/tooltips",
                    "data-js-options": "{\"side\": \"top\", \"trigger\": \"hover\"}"
                }, /*#__PURE__*/ _react.default.createElement("h5", {
                    className: "u-margin-s "
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-padding-right-s"
                }, header), /*#__PURE__*/ _react.default.createElement("span", {
                    "data-js-module": "core/modules/tooltips",
                    id: "magnum-deposit-modal-help-tooltip"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger",
                    hidden: category !== "CV_MAGNUM_WITH_DEPOSIT"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--info g-icon--xs"
                })), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-tooltip__content",
                    hidden: "true"
                }, " ", tolltipContent, " "))), !!hearerLine2 && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-s"
                }, hearerLine2))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-top-m u-no-padding-left  u-no-margin-left u-no-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-9 u-left u-no-padding-left  u-no-margin-left"
                }, /*#__PURE__*/ _react.default.createElement("span", null, descrition || "Produkty do zamówienia")), !!depositSum && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 u-right u-no-padding-right u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("span", null, depositDescription || "Wysokość kaucji"))));
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "renderHeader", function() {
                var category = _this.props.errors && _this.props.errors.length ? _this.props.errors[0].category : "";
                var descriptions = _this.props.descriptions;
                var description = _this.props.description;
                var iconClass, title, header, headerLine2;

                switch (category) {
                    case "CV_MAGNUM":
                        iconClass = " g-icon--error g-redf-c ";
                        title = descriptions.negativeVerificationResultTitle || "Zamówienie nie może być zrealizowane";
                        description = descriptions.negativeVerification;
                        header = descriptions.negativeVerificationHeader || "Negatywnie zweryfikowane";
                        headerLine2 = descriptions.negativeVerificationHeaderLine2;
                        break;

                    case "CV_MAGNUM_WITH_DEPOSIT":
                        iconClass = " g-icon--warn g-yellowf-c ";
                        title = descriptions.verificationResultTitle || "Wynik weryfikacji technicznej";
                        header = descriptions.depositRequiredVerification || "Wymagana kaucja";
                        break;

                    default:
                        iconClass = "opl-msg opl-msg--error opl-msg--context";
                        title = descriptions.verificationResultTitle || "Wynik weryfikacji technicznej";
                        header = "Dokonano weryfikacji technicznej";
                        description = "Zweryfikowano";
                        break;
                }

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-standard u-margin-l opl-modal-title-space"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-hide o-icon-text g-icon  g-icon--before g-icon--m " + iconClass
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h3 u-padding-top-s"
                }, " ", title, " "))), _this.renderInfo(header, headerLine2, description, descriptions.depositValue, descriptions.tooltipDepositDefinition));
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "renderDepositSum", function() {
                var depositSum = _this.props.errors[0].details.depositSum;

                if (!!depositSum) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-page-row u-no-padding-right"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-12 u-large-right u-medium-right u-padding-top-m  u-no-padding-right"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-right u-font-bold u-text-right"
                    }, /*#__PURE__*/ _react.default.createElement("span", null, "Razem: "), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-right u-padding-left-s g-brand1-c"
                    }, depositSum, " ", _this.state.currency))));
                }
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "canAcceptVerification", function() {
                var category = _this.props.errors[0].category;
                var channel = _this.props.channels.sales;
                return category === "CV_MAGNUM_WITH_DEPOSIT" && (channel === "POS" || channel === "AKA");
            });
            _this.state = {
                currency: "zł",
                checkboxAccepted: false,
                showPaymentWarning: false
            };
            return _this;
        }

        babelHelpers.createClass(MagnumCustomerVerificationModalView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var $helpTooltip = document.getElementById("magnum-deposit-modal-help-tooltip");

                if (!$helpTooltip) {
                    console.warn("elem with id: \"magnum-deposit-modal-help-tooltip\" not found");
                } else {
                    OPL.UI.loadModules($helpTooltip, [{
                        path: 'core/modules/tooltips',
                        options: {
                            "mouseoverMinWidth": 0,
                            "triggerEvent": "mouseover"
                        }
                    }]);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var errors = this.props.errors;
                var hasReasonsData = errors && errors.length > 0 && errors[0].details.bundles.length > 0;
                /* always render header so tooltip is always present for activateHelpTooltip function  */

                var $element = /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    showClose: true,
                    open: hasReasonsData,
                    onClose: this.props.dismiss,
                    size: "medium"
                }, this.renderHeader(), hasReasonsData && /*#__PURE__*/ _react.default.createElement("div", null, renderSeparatorLine(), this.renderMessagesForOffers(), this.renderDepositSum(), this.renderPaytel(), this.renderFooterButtons()));

                return $element;
            }
        }, {
            key: "handleRepaymentButton",
            value: function handleRepaymentButton() {
                if (!this.state.checkboxAccepted) {
                    this.setState({
                        showPaymentWarning: true
                    });
                } else {
                    this.props.handleRepayment();
                }
            }
        }, {
            key: "gotoNextCheckoutStepButton",
            value: function gotoNextCheckoutStepButton() {
                if (this.isPaytelAcceptable() && !this.state.checkboxAccepted) {
                    this.setState({
                        showPaymentWarning: true
                    });
                } else {
                    this.props.gotoNextCheckoutStep();
                }
            }
        }, {
            key: "handleCheckboxChange",
            value: function handleCheckboxChange(event) {
                this.setState({
                    checkboxAccepted: event.target.checked
                });
                this.setState({
                    showPaymentWarning: !event.target.checked
                });
            }
        }, {
            key: "isPaytelAcceptable",
            value: function isPaytelAcceptable() {
                return (this.props.channels.sales == 'POS' || this.props.channels.sales == 'AKA') && this.props.errors.some(function(cvVer) {
                    return !!cvVer.paytelAcceptable;
                });
            }
        }, {
            key: "renderPaytel",
            value: function renderPaytel() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-s u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, this.isPaytelAcceptable() && /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "",
                    colSpan: "2"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox opl-checkbox--black"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    onChange: function onChange(event) {
                        _this2.handleCheckboxChange(event);
                    }
                }), " ", /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, /*#__PURE__*/ _react.default.createElement("strong", null, "Kontynuuj zamówienie ze spłatą zadłużenia", " "))))), this.isPaytelAcceptable() && /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: "2",
                    className: "u-padding-top-s"
                }, "Zaznacz powyższe i kontynuuj jeśli Klient zgadza się na dokonanie spłaty zadłużenia na miejscu przez terminal Paytel")), this.isPaytelAcceptable() && this.state.showPaymentWarning && /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-l",
                    colSpan: "2"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-text g-icon g-icon--error g-icon--before g-icon--xs-s g-redf-c "
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-icon-text__text u-font-bold opl-msg--error"
                }, "Akceptacja jest wymagana do realizacji zam\xF3wienia.")))))));
            }
        }, {
            key: "renderErrorInfo",
            value: function renderErrorInfo() {
                var descriptions = this.props.descriptions;
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-top-s u-no-padding-left  u-no-margin-left"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-large-left u-medium-left"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-left"
                }, /*#__PURE__*/ _react.default.createElement("span", null, "descriptions.negativeVerificationHeader")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-no-padding-left  u-no-margin-left"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-large-left u-medium-left"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-left"
                }, /*#__PURE__*/ _react.default.createElement("span", null, descriptions.negativeVerificationHeaderLine2)))));
            }
        }, {
            key: "renderFooterButtons",
            value: function renderFooterButtons() {
                var offsetClass = this.canAcceptVerification() || this.isPaytelAcceptable() ? "" : "large-offset-by-6";
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-margin-top-l"
                }, !this.props.goToCartSummary ? null : [ /*#__PURE__*/ _react.default.createElement("div", {
                    key: "back-to-cart",
                    className: "l-col l-col-small-3 l-col-medium-3 l-col-3 u-large-left u-medium-left"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.goToCartSummary.bind(this),
                    className: "u-w-100",
                    type: "secondary"
                }, this.props.descriptions.backToCartButton || "Wróć do koszyka")), /*#__PURE__*/ _react.default.createElement("div", {
                    key: "operations",
                    className: "large-offset-by-3 l-col l-col-small-6 l-col-medium-4 l-col-6 u-small-padding-l u-large-right u-medium-right"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: offsetClass + " l-col l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.removeFromCartAndRedirect.bind(this),
                    className: "u-w-100 u-medium-left",
                    type: "secondary"
                }, this.props.descriptions.cancelOrderButton || "Anuluj zamówienie")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 "
                }, this.canAcceptVerification() && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.gotoNextCheckoutStepButton.bind(this),
                    className: "u-w-100 u-medium-right",
                    type: "primary"
                }, this.props.descriptions.acceptDepositButton || "Akceptuję kaucję")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 "
                }, !this.canAcceptVerification() && this.isPaytelAcceptable() && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.handleRepaymentButton.bind(this),
                    className: "u-w-100 u-medium-right",
                    type: "primary"
                }, "Kontynuuj"))))]);
            }
        }]);
        return MagnumCustomerVerificationModalView;
    }(_react.Component);

    var renderSeparatorLine = function renderSeparatorLine() {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-separator u-padding-top"
        });
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errors: (0, _selectors.getCvMagnumCheckoutErrors)(state),
            noOfBundles: (0, _selectors2.getMaxBundleNo)(state),
            channel: (0, _authorization.getSalesChannel)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            gotoNextCheckoutStep: function gotoNextCheckoutStep() {
                return dispatch((0, _app.gotoNextCheckoutStep)());
            },
            dismiss: function dismiss() {
                return dispatch((0, _app.dismissCvErrors)());
            },
            goToCartSummary: function goToCartSummary() {
                return dispatch((0, _app.gotoPreviousCheckoutStep)());
            },
            removeFromCartAndRedirect: function removeFromCartAndRedirect() {
                return dispatch((0, _cart.removeFromCartAndRedirect)());
            },
            handleRepayment: function handleRepayment() {
                return dispatch((0, _cart.handleRepayment)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MagnumCustomerVerificationModalView);

    _exports.default = _default;
});
//# sourceMappingURL=MagnumCustomerVerificationModalView.js.map