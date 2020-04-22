define(["exports", "react", "prop-types", "./propositionEntries/ConvergentPropositionEntry", "./productEntries/ConvergentProductEntries", "./typings", "../../../../magnum2/constants/ProcessTypeEnum", "../../../../magnum2/utils"], function(e, g, o, P, T, n, C, b) {
    "use strict";

    function a(e) {
        var o = e.isSatTechnology,
            n = e.isDslTechnology,
            a = e.descriptions,
            t = e.sectionConf,
            l = e.entry,
            s = e.configurables,
            r = e.showNetPrices,
            i = e.onDeviceChange,
            c = e.onRemoveProduct,
            d = e.onRemoveTerminal,
            p = e.onClickAddVas,
            u = e.onClickAddTvPackage,
            m = e.onClickAddFixBonus,
            f = e.areSecondaryChoiceBonusesAvailable,
            y = e.lowerInstallmentsClicked,
            v = (0, b.getProcessType)(l.entries);
        return g.default.createElement("div", {
            "aria-hidden": "false",
            style: {
                display: "block"
            },
            className: "opl-checkout__section__content",
            id: "mod-core/modules/expander-3-tab-0",
            role: "tabpanel",
            "aria-labelledby": "mod-core/modules/expander-3-control-0"
        }, g.default.createElement("div", {
            className: "l-full-row"
        }, g.default.createElement("div", {
            className: "l-page-row"
        }, g.default.createElement("div", {
            className: "u-no-padding"
        }, g.default.createElement(P.default, {
            descriptions: a,
            sectionConf: t,
            entry: l,
            openRemovePopup: e.openRemovePopup,
            configurables: s,
            openVasModal: p,
            showNetPrices: r,
            onRemoveProduct: c
        }), o && g.default.createElement("div", {
            className: "u-padding-m u-padding-top-s"
        }, g.default.createElement("p", {
            className: "u-font-small",
            dangerouslySetInnerHTML: {
                __html: a.convergentMultiCartLegalSAT
            }
        })), v === C.default._2U && n && g.default.createElement("div", {
            className: "u-padding-m u-padding-top-s"
        }, g.default.createElement("p", {
            className: "u-font-small",
            dangerouslySetInnerHTML: {
                __html: a.convergentMultiCartLegalDSL
            }
        })))), g.default.createElement(T.default, {
            sectionConf: t,
            entry: l,
            lowerInstallmentsClicked: y,
            onDeviceChange: i,
            onRemoveProduct: c,
            onRemoveTerminal: d,
            onClickAddVas: p,
            onClickAddTvPackage: u,
            onClickAddFixBonus: m,
            showNetPrices: r,
            areSecondaryChoiceBonusesAvailable: f
        })))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, g = babelHelpers.interopRequireDefault(g), P = babelHelpers.interopRequireDefault(P), T = babelHelpers.interopRequireDefault(T), C = babelHelpers.interopRequireDefault(C), a.propTypes = {
        isSatTechnology: o.PropTypes.bool,
        isDslTechnology: o.PropTypes.bool,
        sectionConf: o.PropTypes.any,
        entry: o.PropTypes.any,
        descriptions: o.PropTypes.shape(n.ConvergentMultiCartExpandedItemDescriptionsType),
        onDeviceChange: o.PropTypes.func,
        onRemoveProduct: o.PropTypes.func,
        lowerInstallmentsClicked: o.PropTypes.func,
        onRemoveTerminal: o.PropTypes.func,
        onClickAddVas: o.PropTypes.func,
        onClickAddTvPackage: o.PropTypes.func,
        onClickAddFixBonus: o.PropTypes.func,
        areSecondaryChoiceBonusesAvailable: o.PropTypes.bool
    };
    var t = a;
    e.default = t
});
//# sourceMappingURL=ConvergentMultiCartExpandedItemComponent.js.map