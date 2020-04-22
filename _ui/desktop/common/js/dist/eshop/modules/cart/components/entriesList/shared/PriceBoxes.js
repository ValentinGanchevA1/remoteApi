define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.RwdPriceBox = _exports.MobilePriceBox = _exports.DesktopPriceBox = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

    var DesktopPriceBox = function DesktopPriceBox(props) {
        var _props$prices = babelHelpers.toArray(props.prices),
            head = _props$prices[0],
            tail = _props$prices.slice(1);

        var paddingClass = props.biggerPadding ? "u-padding-all-m " : "u-padding-all ";
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: paddingClass + "u-small-no-padding"
        }, /*#__PURE__*/ _react.default.createElement(DesktopHeadPrice, {
            head: head
        }), tail && tail.length > 0 ? /*#__PURE__*/ _react.default.createElement(PriceTiers, {
            prices: tail
        }) : null);
    };

    _exports.DesktopPriceBox = DesktopPriceBox;
    DesktopPriceBox.propTypes = {
        prices: _propTypes.PropTypes.array,
        biggerPadding: _propTypes.PropTypes.bool
    };
    DesktopPriceBox.defaultProps = {
        biggerPadding: true
    };

    var MobilePriceBox = function MobilePriceBox(props) {
        var _props$prices2 = babelHelpers.toArray(props.prices),
            head = _props$prices2[0],
            tail = _props$prices2.slice(1);

        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(MobileHeadPrice, {
            head: head
        }), tail && tail.length > 0 ? /*#__PURE__*/ _react.default.createElement(PriceTiers, {
            prices: tail
        }) : null);
    };

    _exports.MobilePriceBox = MobilePriceBox;

    var PriceTiers = function PriceTiers(props) {
        var _props$prices3 = babelHelpers.toArray(props.prices),
            head = _props$prices3[0],
            tail = _props$prices3.slice(1);

        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("span", null, head.integer, ",", head.fraction, " ", head.currency, " "), head.end ? /*#__PURE__*/ _react.default.createElement("span", null, head.start, "-", head.end, " mies.") : /*#__PURE__*/ _react.default.createElement("span", null, "od ", head.start, " mies.")), tail && tail.length > 0 ? /*#__PURE__*/ _react.default.createElement(PriceTiers, {
            prices: tail
        }) : null);
    };

    var RwdPriceBox = function RwdPriceBox(props) {
        function getQuantityInfo() {
            if (isNaN(props.quantity) || props.quantity < 2) {
                return null;
            }

            return /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-price-v2__whole u-small-font-standard"
            }, props.quantity), /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-price-v2__suffix u-small-font-standard"
            }, " razy "));
        }

        ;
        var monthly = true;

        var _props$prices4 = babelHelpers.toArray(props.prices),
            head = _props$prices4[0],
            tail = _props$prices4.slice(1);

        var hasTail = tail && tail.length > 0;

        if (!props.prices || props.prices.length === 0 || head.integer === "0" && head.fraction === "00" && !hasTail) {
            if (!head.start) {
                monthly = false;
            }

            head = props.oneTimePrice.integer !== "0" ? props.oneTimePrice : props.checkoutPrice;

            if (head.integer !== "0" || head.fraction !== "00") {
                monthly = false;
            }
        }

        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
            className: "opl-price-v2 opl-price-v2--s g-small-brand2-c"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__part u-small-font-standard"
        }, getQuantityInfo(), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__whole u-small-font-standard"
        }, head.integer)), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__part u-small-font-standard"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__separator u-small-font-standard"
        }, ","), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__decimal u-small-font-standard"
        }, head.fraction), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__suffix u-small-font-standard"
        }, head.currency, monthly ? "/mies." : ""))), hasTail && /*#__PURE__*/ _react.default.createElement(PriceTiers, {
            prices: tail
        }));
    };

    _exports.RwdPriceBox = RwdPriceBox;

    var DesktopHeadPrice = function DesktopHeadPrice(props) {
        function onlyFirstMonth(head) {
            return /*#__PURE__*/ _react.default.createElement("span", null, " w pierwszym mies.");
        }

        function moreThanFirstMonth(head) {
            return /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("span", null, "/mies. "), head.end ? /*#__PURE__*/ _react.default.createElement("span", null, head.start, " - ", head.end, " mies.") : null);
        }

        var head = props.head;
        return /*#__PURE__*/ _react.default.createElement("p", {
            className: "h5 u-no-spacing"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "h3 u-no-spacing u-inline-block"
        }, head.integer), /*#__PURE__*/ _react.default.createElement("span", null, ",", head.fraction, " ", head.currency), head.start == head.end ? onlyFirstMonth(head) : moreThanFirstMonth(head));
    };

    var MobileHeadPrice = function MobileHeadPrice(props) {
        function onlyFirstMonth(head) {
            return /*#__PURE__*/ _react.default.createElement("span", {
                className: "g-brand1-c"
            }, " w pierwszym mies.");
        }

        function moreThanFirstMonth(head) {
            return /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("span", {
                className: "g-brand1-c"
            }, "/mies. "), head.end ? /*#__PURE__*/ _react.default.createElement("span", {
                className: "g-brand1-c"
            }, head.start, " - ", head.end, " mies.") : null);
        }

        var head = props.head;
        return /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("span", {
            className: "g-brand1-c"
        }, head.integer, ",", head.fraction, " ", head.currency), head.start == head.end ? onlyFirstMonth(head) : moreThanFirstMonth(head));
    };
});
//# sourceMappingURL=PriceBoxes.js.map