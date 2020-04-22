define(["exports", "react", "prop-types", "eshop/modules/cart/selectors", "react-redux"], function(_exports, _react, _propTypes, _selectors, _reactRedux) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.PresentBasedOnCartEmptiness = _exports.HideWhenCartContainsEmptyEntries = _exports.ShowWhenCartIsEmpty = _exports.HideWhenCartIsEmpty = _exports.loyaltyDuration = _exports.maleOrdinal = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var HideWhenCartIsEmptyView = function HideWhenCartIsEmptyView(props) {
        if (!props.hasMiniCart || props.numberOfEntries === 0) {
            return null;
        }

        return /*#__PURE__*/ _react.default.createElement("div", {
            className: props.className
        }, props.children);
    };

    var HideWhenCartContainsEmptyEntriesView = function HideWhenCartContainsEmptyEntriesView(props) {
        if (props.containsEmptySaleOfAddonsEntry) {
            return null;
        }

        return /*#__PURE__*/ _react.default.createElement("div", {
            className: props.className
        }, props.children);
    };

    var ShowWhenCartIsEmptyView = function ShowWhenCartIsEmptyView(props) {
        if (props.hasMiniCart && props.numberOfEntries > 0) {
            return null;
        }

        return /*#__PURE__*/ _react.default.createElement("div", {
            className: props.className
        }, props.children);
    };

    var PresentBasedOnCartEmptinessView = function PresentBasedOnCartEmptinessView(props) {
        if (props.numberOfEntries && props.numberOfEntries === 0) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: props.classNameIfEmpty
            }, props.ifEmpty);
        }

        return /*#__PURE__*/ _react.default.createElement("div", {
            className: props.classNameIfNotEmpty
        }, props.ifNotEmpty);
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            numberOfEntries: (0, _selectors.getNumberOfCartEntries)(state),
            hasMiniCart: (0, _selectors.getHasMiniCartData)(state),
            containsEmptySaleOfAddonsEntry: (0, _selectors.containsEmptySaleOfAddonsEntry)(state)
        };
    };
    /* Consider replacing this label map with cmsDescription based configuration */


    var monthlyLabels = {
        1: "pierwszym",
        2: "drugim",
        3: "trzecim",
        4: "czwartym",
        5: "piątym",
        6: "szóstym",
        7: "siódmym",
        8: "ósmym",
        9: "dziewiątym",
        10: "dziesiątym",
        11: "jedenastym",
        12: "dwunastym",
        13: "trzynastym",
        14: "czternastym",
        15: "piętnastym",
        16: "szesnastym",
        17: "siedemnastym",
        18: "osiemnastym",
        19: "dziewiętnastym",
        20: "dwudziestym",
        21: "dwudziestym pierwszym",
        22: "dwudziestym drugim",
        23: "dwudziestym trzecim",
        24: "dwudziestym czwartym",
        25: "dwudziestym piątym",
        26: "dwudziestym szóstym",
        27: "dwudziestym siódmym",
        28: "dwudziestym ósmym",
        29: "dwudziestym dziewiątym",
        30: "trzydziestym",
        31: "trzydziestym pierwszym",
        32: "trzydziestym drugim",
        33: "trzydziestym trzecim",
        34: "trzydziestym czwartym",
        35: "trzydziestym piątym",
        36: "trzydziestym szóstym"
    };

    var maleOrdinal = function maleOrdinal(number) {
        return monthlyLabels[number];
    };

    _exports.maleOrdinal = maleOrdinal;

    var loyaltyDuration = function loyaltyDuration(number) {
        if (number === 0) {
            return "Umowa w promocji na czas nieokreślony";
        }

        if (number === 1) {
            return "Umowa na " + number + " miesiąc";
        }

        if ((number < 10 || number > 20) && [2, 3, 4].includes(number % 10)) {
            return "Umowa na " + number + " miesiące";
        }

        if (number == null) {
            return "Umowa na dotychczasowy okres";
        }

        return "Umowa na " + number + " miesięcy";
    };

    _exports.loyaltyDuration = loyaltyDuration;
    var HideWhenCartIsEmpty = (0, _reactRedux.connect)(mapStateToProps, null)(HideWhenCartIsEmptyView);
    _exports.HideWhenCartIsEmpty = HideWhenCartIsEmpty;
    var ShowWhenCartIsEmpty = (0, _reactRedux.connect)(mapStateToProps, null)(ShowWhenCartIsEmptyView);
    _exports.ShowWhenCartIsEmpty = ShowWhenCartIsEmpty;
    var HideWhenCartContainsEmptyEntries = (0, _reactRedux.connect)(mapStateToProps, null)(HideWhenCartContainsEmptyEntriesView);
    _exports.HideWhenCartContainsEmptyEntries = HideWhenCartContainsEmptyEntries;
    var PresentBasedOnCartEmptiness = (0, _reactRedux.connect)(mapStateToProps, null)(PresentBasedOnCartEmptinessView);
    _exports.PresentBasedOnCartEmptiness = PresentBasedOnCartEmptiness;
});
//# sourceMappingURL=Utils.js.map