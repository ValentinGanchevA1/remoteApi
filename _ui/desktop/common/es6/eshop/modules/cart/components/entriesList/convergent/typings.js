import {
    PropTypes
} from "prop-types";

/** descriptions **/

export const ConvergentMultiCartExpandedItemDescriptionsType = {
    convergentMultiCartLegalSAT: PropTypes.string,
    convergentMultiCartLegalDSL: PropTypes.string
};

export const ConvergentComponentDescriptionsType = {
    saveVasesButton: PropTypes.string,
    ...ConvergentMultiCartExpandedItemDescriptionsType
};