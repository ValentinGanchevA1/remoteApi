define(["exports", "react", "react-redux", "eshop/utils/OnlineUtils", "eshop/modules/auth/selectors/authorization", "eshop/modules/auth/actions/authorization", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/metaData", "eshop/modules/simfree/selectors"], function(_exports, _react, _reactRedux, _OnlineUtils, _authorization, _authorization2, _filters, _metaData, _selectors) {
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

    var StayLoveMsisdnHeader = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(StayLoveMsisdnHeader, _Component);

        var _super = _createSuper(StayLoveMsisdnHeader);

        function StayLoveMsisdnHeader() {
            babelHelpers.classCallCheck(this, StayLoveMsisdnHeader);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(StayLoveMsisdnHeader, [{
            key: "render",
            value: function render() {
                if (this.props.selectedOfferType === "VOICE_LDF") {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-full-row " + this.props.bgColor
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-page-row " + this.props.bgColor
                    }, this.props.showHeader && /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, /*#__PURE__*/ _react.default.createElement("h2", null, "Wybierz ofert\u0119 abonamentu kom\xF3rkowego w Love dla Firm"))), this.props.msisdn && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-9"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__item"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__icon u-vertical-middle "
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "g-icon g-icon--only g-icon--sim"
                    })), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__text u-vertical-middle"
                    }, /*#__PURE__*/ _react.default.createElement("p", {
                        className: "h4 u-no-margin"
                    }, "Karta SIM z nr ", /*#__PURE__*/ _react.default.createElement("span", {
                        className: "g-brand2-c"
                    }, _OnlineUtils.default.formatMsisdn(this.props.msisdn)))))))), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list u-padding-m u-small-padding-top-m"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__item"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__text u-vertical-middle "
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: " u-padding-left-xl u-margin-left-s u-small-no-margin-left u-small-no-padding-left u-padding-right-xxl"
                    }, /*#__PURE__*/ _react.default.createElement("p", null, " Chcesz dokupi\u0107 nowy numer w Love dla Firm lub przed\u0142u\u017Cy\u0107 umow\u0119, ale dla innego numeru? Wybierz \"Zmie\u0144\" i wybierz jeszcze raz proces."))), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__icon u-vertical-middle u-right u-no-padding-right"
                    }, /*#__PURE__*/ _react.default.createElement("button", {
                        onClick: this.props.clearStayLoveRetentionMSISDN,
                        className: "opl-btn opl-btn--secondary opl-btn--small o-btn u-right"
                    }, "Zmie\u0144")))))));
                } else {
                    return null;
                }
            }
        }]);
        return StayLoveMsisdnHeader;
    }(_react.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            clearStayLoveRetentionMSISDN: function clearStayLoveRetentionMSISDN() {
                return dispatch((0, _authorization2.clearStayLoveRetentionMSISDN)());
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            msisdn: (0, _authorization.getStayLoveRetentionMSISDN)(state),
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            bgColor: (0, _metaData.bgColor)(state),
            showHeader: !((0, _selectors.isProductListPage)(state) || (0, _selectors.isProductDetailsPage)(state) || (0, _selectors.isAccessoryListPage)(state))
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StayLoveMsisdnHeader);

    _exports.default = _default;
});
//# sourceMappingURL=StayLoveMsisdnHeader.js.map