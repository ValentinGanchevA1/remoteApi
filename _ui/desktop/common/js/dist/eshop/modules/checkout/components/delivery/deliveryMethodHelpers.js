define(["exports", "../../../core/utils/ui", "../../constants/DeliveryMethodModeEnum", "../../remoteApi"], function(_exports, _ui, _DeliveryMethodModeEnum, _remoteApi) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.extractCourierDescriptions = extractCourierDescriptions;
    _exports.extractDeliveryModeSubTitle = extractDeliveryModeSubTitle;
    _exports.extractAGRDocuments = extractAGRDocuments;
    _exports.extractOSWDocumentsDescriptions = extractOSWDocumentsDescriptions;
    _exports.addOSWDocumentsToContents = addOSWDocumentsToContents;
    _exports.addPriceListAndRegulationsToDelivery = addPriceListAndRegulationsToDelivery;
    _exports.isDeliveryMethodRequired = isDeliveryMethodRequired;
    _exports.isDeliveryMethodSelected = isDeliveryMethodSelected;
    _exports.setSelectedParcelLockerIdInSession = setSelectedParcelLockerIdInSession;
    _DeliveryMethodModeEnum = babelHelpers.interopRequireDefault(_DeliveryMethodModeEnum);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);

    function extractCourierDescriptions(descriptions) {
        var keys = ["courierHeadline", "courierSameAddressLabel", "courierNewAddressLabel", "courierMessageLabel", "deliveryAddressTooltip"];
        return (0, _ui.pickProps)(descriptions, keys);
    }

    function extractDeliveryModeSubTitle(deliveryMode, isDeliveryModesEqual) {
        switch (deliveryMode) {
            case _DeliveryMethodModeEnum.default.DOCUMENTS_PACKAGE:
                if (isDeliveryModesEqual) {
                    return "Forma dostawy dla urządzeń i dokumentów";
                } else {
                    return "Forma dostawy umowy";
                }

                case _DeliveryMethodModeEnum.default.DEVICES_PACKAGE:
                    return "Forma dostawy dla urządzeń";

                case _DeliveryMethodModeEnum.default.FIX_DEVICES_PACKAGE:
                    return "Forma dostawy urządzenia FIX";

                case _DeliveryMethodModeEnum.default.MOBILE_DEVICES_PACKAGE:
                    return "Forma dostawy urządzenia Mobile";

                case '':
                    return "";
        }
    }

    function extractAGRDocuments(documents, deliveryMode) {
        var agrDocumentsArray = []; // extractAGRDocuments

        if (deliveryMode === _DeliveryMethodModeEnum.default.DOCUMENTS_PACKAGE) {
            for (var i = 0; i < documents.length; i++) {
                if (["AGR", "ANX"].includes(documents[i].documentType)) {
                    agrDocumentsArray.push(documents[i].documentDescription);
                }
            }

            if (agrDocumentsArray.length > 0) {
                return agrDocumentsArray.join(", ") + ".";
            } else {
                return "";
            }
        }

        return "";
    }

    function extractOSWDocumentsDescriptions(documents) {
        var agrDocumentsArrayDesc = [];

        for (var i = 0; i < documents.length; i++) {
            if (documents[i].documentType === "OSW") agrDocumentsArrayDesc.push(documents[i].documentDescription);
        }

        if (agrDocumentsArrayDesc.length > 0) {
            return agrDocumentsArrayDesc.join(", ");
        }

        return "";
    }

    function addOSWDocumentsToContents(contents, documents) {
        var documentDescriptions = extractOSWDocumentsDescriptions(documents);

        if (documentDescriptions !== "") {
            return (contents ? contents + ", " : "") + documentDescriptions + ".";
        }

        return contents;
    }

    function addPriceListAndRegulationsToDelivery(documents) {
        return documents.some(function(document) {
            return document.documentType === "REG";
        }) && documents.some(function(document) {
            return document.documentType === "PRICE_LIST";
        }) ? " Regulaminy i cenniki." : "";
    }

    function isDeliveryMethodRequired(selectedValue) {
        return selectedValue !== null;
    }

    function isDeliveryMethodSelected(selectedValue) {
        return selectedValue !== null && selectedValue !== "";
    }

    function setSelectedParcelLockerIdInSession(posId) {
        _remoteApi.default.setPosId(posId);
    }
});
//# sourceMappingURL=deliveryMethodHelpers.js.map