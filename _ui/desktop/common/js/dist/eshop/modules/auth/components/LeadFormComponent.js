define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var LeadFormComponent = function LeadFormComponent(props) {
        var borderTitleStyle = {
            top: "-1em"
        };
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table u-padding-top-l u-padding-l u-padding-all-l u-margin-auto u-small-hide"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-border u-border--l g-brand2-bdrc u-position-relative"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-position-absolute u-text-center u-w-100",
            style: borderTitleStyle
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "h4 g-white1-bg u-font-bold u-padding-left u-padding-right"
        }, "Love dla Firm")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-all-xl"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table-cell u-vertical-middle u-text-center "
        }, /*#__PURE__*/ _react.default.createElement("span", {
            title: "device-laptop-computer-connected",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--xl g-icon--device-laptop-computer-connected"
        }), /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin-top u-font-bold u-text-nowrap"
        }, "Internet ", /*#__PURE__*/ _react.default.createElement("br", null), "dla biura")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table-cell u-text-center u-padding-left-l u-padding-right u-padding-top-m"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            title: "plus",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--s g-icon--plus g-brand2-c"
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table-cell u-vertical-middle u-text-center u-padding-left u-small-padding-left"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            title: "sim",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--xl g-icon--sim u-padding-right"
        }), /*#__PURE__*/ _react.default.createElement("span", {
            title: "sim",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--xl g-icon--sim"
        }), /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin-top u-font-bold u-text-nowrap"
        }, "Dwie karty SIM ", /*#__PURE__*/ _react.default.createElement("br", null), "w cenie jednej")))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table-cell u-text-center u-padding-left-xl u-padding-right-l u-padding-top-m"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            title: "plus",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--s g-icon--plus g-brand2-c"
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table-cell u-vertical-middle u-text-center"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            title: "device-laptop-computer-connected",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--xl g-icon--device-smartphone"
        }), /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin-top u-font-bold u-text-nowrap"
        }, "Wybrany przez ", /*#__PURE__*/ _react.default.createElement("br", null), "Ciebie smartfon"))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row g-gray2-bg u-padding-top u-padding"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-8 l-col-small-12 u-small-padding"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-font-bold"
        }, "Mo\u017Cesz przej\u015B\u0107 do konfigurowania pakietu"), /*#__PURE__*/ _react.default.createElement("p", null, "i odebra\u0107 us\u0142ugi dopasowane do Twojej firmy")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-4 l-col-small-12"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            id: "redirect",
            onClick: function onClick() {
                return redirect();
            },
            className: "o-btn opl-btn opl-btn--secondary u-w-100"
        }, "Skonfiguruj pakiet"))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-padding-top-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-8 l-col-small-12"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-font-bold u-padding"
        }, "lub zostaw numer i oddzwonimy"), /*#__PURE__*/ _react.default.createElement("p", null, "Nasz Biznes Espert skontaktuje si\u0119 z Tob\u0105 w ci\u0105gu 28 sekund", /*#__PURE__*/ _react.default.createElement("br", null), "lub we wskazanym przez Ciebie terminie."))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-padding-top-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-4 l-col-small-12"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            id: "callback",
            onClick: function onClick() {
                return callForm(props);
            },
            className: "o-btn opl-btn opl-btn--primary u-w-100"
        }, "Zam\xF3w rozmow\u0119"))));
    };

    var callForm = function callForm(_ref) {
        var closeModal = _ref.closeModal,
            _ref$msisdn = _ref.msisdn,
            msisdn = _ref$msisdn === void 0 ? "" : _ref$msisdn,
            selectedPropositionName = _ref.selectedPropositionName,
            selectedDeviceName = _ref.selectedDeviceName,
            selectedProcessName = _ref.selectedProcessName;
        console.log("Calling callback modal");
        closeModal();
        window._gt = window._gt || [];
        var data = {
            "cmb_profile": "SALES_C_LOVE_CP_B2B_CALLBACK",
            "cmbPhoneNumber": msisdn,
            "opis": ["Klient B2B w sklepie www wybrał:", selectedPropositionName, selectedDeviceName, selectedProcessName].map(function(value) {
                return value;
            }).join(" ")
        };

        window._gt.push(["event", "portalCmbStart", {
            data: data
        }]);
    };

    var redirect = function redirect() {
        window.location.href = "https://lovedlafirm.pl/";
    };

    LeadFormComponent.propTypes = {
        closeModal: _propTypes.default.func
    };
    var _default = LeadFormComponent;
    _exports.default = _default;
});
//# sourceMappingURL=LeadFormComponent.js.map