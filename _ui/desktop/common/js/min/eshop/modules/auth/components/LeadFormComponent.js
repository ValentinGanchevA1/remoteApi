define(["exports", "react", "prop-types"], function(e, l, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), t = babelHelpers.interopRequireDefault(t);

    function a(e) {
        return l.default.createElement("div", null, l.default.createElement("div", {
            className: "u-table u-padding-top-l u-padding-l u-padding-all-l u-margin-auto u-small-hide"
        }, l.default.createElement("div", {
            className: "u-border u-border--l g-brand2-bdrc u-position-relative"
        }, l.default.createElement("div", {
            className: "u-position-absolute u-text-center u-w-100",
            style: {
                top: "-1em"
            }
        }, l.default.createElement("span", {
            className: "h4 g-white1-bg u-font-bold u-padding-left u-padding-right"
        }, "Love dla Firm")), l.default.createElement("div", {
            className: "u-padding-all-xl"
        }, l.default.createElement("div", {
            className: "u-table-cell u-vertical-middle u-text-center "
        }, l.default.createElement("span", {
            title: "device-laptop-computer-connected",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--xl g-icon--device-laptop-computer-connected"
        }), l.default.createElement("p", {
            className: "u-margin-top u-font-bold u-text-nowrap"
        }, "Internet ", l.default.createElement("br", null), "dla biura")), l.default.createElement("div", {
            className: "u-table-cell u-text-center u-padding-left-l u-padding-right u-padding-top-m"
        }, l.default.createElement("span", {
            title: "plus",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--s g-icon--plus g-brand2-c"
        })), l.default.createElement("div", {
            className: "u-table-cell u-vertical-middle u-text-center u-padding-left u-small-padding-left"
        }, l.default.createElement("span", {
            title: "sim",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--xl g-icon--sim u-padding-right"
        }), l.default.createElement("span", {
            title: "sim",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--xl g-icon--sim"
        }), l.default.createElement("p", {
            className: "u-margin-top u-font-bold u-text-nowrap"
        }, "Dwie karty SIM ", l.default.createElement("br", null), "w cenie jednej")))), l.default.createElement("div", {
            className: "u-table-cell u-text-center u-padding-left-xl u-padding-right-l u-padding-top-m"
        }, l.default.createElement("span", {
            title: "plus",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--s g-icon--plus g-brand2-c"
        })), l.default.createElement("div", {
            className: "u-table-cell u-vertical-middle u-text-center"
        }, l.default.createElement("span", {
            title: "device-laptop-computer-connected",
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--xl g-icon--device-smartphone"
        }), l.default.createElement("p", {
            className: "u-margin-top u-font-bold u-text-nowrap"
        }, "Wybrany przez ", l.default.createElement("br", null), "Ciebie smartfon"))), l.default.createElement("div", {
            className: "l-row g-gray2-bg u-padding-top u-padding"
        }, l.default.createElement("div", {
            className: "l-col l-col-8 l-col-small-12 u-small-padding"
        }, l.default.createElement("p", {
            className: "u-font-bold"
        }, "Możesz przejść do konfigurowania pakietu"), l.default.createElement("p", null, "i odebrać usługi dopasowane do Twojej firmy")), l.default.createElement("div", {
            className: "l-col l-col-4 l-col-small-12"
        }, l.default.createElement("button", {
            id: "redirect",
            onClick: function() {
                return i()
            },
            className: "o-btn opl-btn opl-btn--secondary u-w-100"
        }, "Skonfiguruj pakiet"))), l.default.createElement("div", {
            className: "l-row u-padding-top-l"
        }, l.default.createElement("div", {
            className: "l-col l-col-8 l-col-small-12"
        }, l.default.createElement("p", {
            className: "u-font-bold u-padding"
        }, "lub zostaw numer i oddzwonimy"), l.default.createElement("p", null, "Nasz Biznes Espert skontaktuje się z Tobą w ciągu 28 sekund", l.default.createElement("br", null), "lub we wskazanym przez Ciebie terminie."))), l.default.createElement("div", {
            className: "l-row u-padding-top-l"
        }, l.default.createElement("div", {
            className: "l-col l-col-4 l-col-small-12"
        }, l.default.createElement("button", {
            id: "callback",
            onClick: function() {
                return n(e)
            },
            className: "o-btn opl-btn opl-btn--primary u-w-100"
        }, "Zamów rozmowę"))))
    }
    var n = function(e) {
            var l = e.closeModal,
                t = e.msisdn,
                a = void 0 === t ? "" : t,
                n = e.selectedPropositionName,
                i = e.selectedDeviceName,
                d = e.selectedProcessName;
            l(), window._gt = window._gt || [];
            var c = {
                cmb_profile: "SALES_C_LOVE_CP_B2B_CALLBACK",
                cmbPhoneNumber: a,
                opis: ["Klient B2B w sklepie www wybrał:", n, i, d].map(function(e) {
                    return e
                }).join(" ")
            };
            window._gt.push(["event", "portalCmbStart", {
                data: c
            }])
        },
        i = function() {
            window.location.href = "https://lovedlafirm.pl/"
        };
    a.propTypes = {
        closeModal: t.default.func
    };
    var d = a;
    e.default = d
});
//# sourceMappingURL=LeadFormComponent.js.map