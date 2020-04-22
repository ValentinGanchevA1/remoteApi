define(["exports", "react", "prop-types", "./propositionEntries/ConvergentPropositionEntry", "./productEntries/ConvergentProductEntries", "./typings", "../../../../magnum2/constants/ProcessTypeEnum", "../../../../magnum2/utils"], function(_exports, _react, _propTypes, _ConvergentPropositionEntry, _ConvergentProductEntries, _typings, _ProcessTypeEnum, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _ConvergentPropositionEntry = babelHelpers.interopRequireDefault(_ConvergentPropositionEntry);
    _ConvergentProductEntries = babelHelpers.interopRequireDefault(_ConvergentProductEntries);
    _ProcessTypeEnum = babelHelpers.interopRequireDefault(_ProcessTypeEnum);
    ConvergentMultiCartExpandedItemComponent.propTypes = {
        isSatTechnology: _propTypes.PropTypes.bool,
        isDslTechnology: _propTypes.PropTypes.bool,
        sectionConf: _propTypes.PropTypes.any,
        entry: _propTypes.PropTypes.any,
        descriptions: _propTypes.PropTypes.shape(_typings.ConvergentMultiCartExpandedItemDescriptionsType),
        onDeviceChange: _propTypes.PropTypes.func,
        onRemoveProduct: _propTypes.PropTypes.func,
        lowerInstallmentsClicked: _propTypes.PropTypes.func,
        onRemoveTerminal: _propTypes.PropTypes.func,
        onClickAddVas: _propTypes.PropTypes.func,
        onClickAddTvPackage: _propTypes.PropTypes.func,
        onClickAddFixBonus: _propTypes.PropTypes.func,
        areSecondaryChoiceBonusesAvailable: _propTypes.PropTypes.bool
    };

    function ConvergentMultiCartExpandedItemComponent(props) {
        var isSatTechnology = props.isSatTechnology,
            isDslTechnology = props.isDslTechnology,
            descriptions = props.descriptions,
            sectionConf = props.sectionConf,
            entry = props.entry,
            configurables = props.configurables,
            showNetPrices = props.showNetPrices;
        var onDeviceChange = props.onDeviceChange,
            onRemoveProduct = props.onRemoveProduct,
            onRemoveTerminal = props.onRemoveTerminal,
            onClickAddVas = props.onClickAddVas,
            onClickAddTvPackage = props.onClickAddTvPackage,
            onClickAddFixBonus = props.onClickAddFixBonus,
            areSecondaryChoiceBonusesAvailable = props.areSecondaryChoiceBonusesAvailable,
            lowerInstallmentsClicked = props.lowerInstallmentsClicked;
        var processType = (0, _utils.getProcessType)(entry.entries);
        return /*#__PURE__*/ _react.default.createElement("div", {
            "aria-hidden": "false",
            style: {
                display: 'block'
            },
            className: "opl-checkout__section__content",
            id: "mod-core/modules/expander-3-tab-0",
            role: "tabpanel",
            "aria-labelledby": "mod-core/modules/expander-3-control-0"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-full-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-no-padding"
        }, /*#__PURE__*/ _react.default.createElement(_ConvergentPropositionEntry.default, {
            descriptions: descriptions,
            sectionConf: sectionConf,
            entry: entry,
            openRemovePopup: props.openRemovePopup,
            configurables: configurables,
            openVasModal: onClickAddVas,
            showNetPrices: showNetPrices,
            onRemoveProduct: onRemoveProduct
        }), isSatTechnology && /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-m u-padding-top-s"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-font-small",
            dangerouslySetInnerHTML: {
                __html: descriptions.convergentMultiCartLegalSAT
            }
        })), processType === _ProcessTypeEnum.default._2U && isDslTechnology && /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-m u-padding-top-s"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-font-small",
            dangerouslySetInnerHTML: {
                __html: descriptions.convergentMultiCartLegalDSL
            }
        })))), /*#__PURE__*/ _react.default.createElement(_ConvergentProductEntries.default, {
            sectionConf: sectionConf,
            entry: entry,
            lowerInstallmentsClicked: lowerInstallmentsClicked,
            onDeviceChange: onDeviceChange,
            onRemoveProduct: onRemoveProduct,
            onRemoveTerminal: onRemoveTerminal,
            onClickAddVas: onClickAddVas,
            onClickAddTvPackage: onClickAddTvPackage,
            onClickAddFixBonus: onClickAddFixBonus,
            showNetPrices: showNetPrices,
            areSecondaryChoiceBonusesAvailable: areSecondaryChoiceBonusesAvailable
        })));
    }

    var _default = ConvergentMultiCartExpandedItemComponent;
    _exports.default = _default;
});
//# sourceMappingURL=ConvergentMultiCartExpandedItemComponent.js.map