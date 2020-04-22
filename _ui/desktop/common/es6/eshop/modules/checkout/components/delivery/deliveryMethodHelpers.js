import {
    pickProps
} from "../../../core/utils/ui";
import DeliveryMethodMode from "../../constants/DeliveryMethodModeEnum";
import RemoteApi from "../../remoteApi";

export function extractCourierDescriptions(descriptions) {
    const keys = ["courierHeadline", "courierSameAddressLabel", "courierNewAddressLabel", "courierMessageLabel", "deliveryAddressTooltip"];

    return pickProps(descriptions, keys);
}

export function extractDeliveryModeSubTitle(deliveryMode, isDeliveryModesEqual) {
    switch (deliveryMode) {
        case DeliveryMethodMode.DOCUMENTS_PACKAGE:
            if (isDeliveryModesEqual) {
                return "Forma dostawy dla urządzeń i dokumentów";
            } else {
                return "Forma dostawy umowy";
            }
            case DeliveryMethodMode.DEVICES_PACKAGE:
                return "Forma dostawy dla urządzeń";
            case DeliveryMethodMode.FIX_DEVICES_PACKAGE:
                return "Forma dostawy urządzenia FIX";
            case DeliveryMethodMode.MOBILE_DEVICES_PACKAGE:
                return "Forma dostawy urządzenia Mobile";
            case '':
                return "";
    }
}

export function extractAGRDocuments(documents, deliveryMode) {
    const agrDocumentsArray = [];
    // extractAGRDocuments
    if (deliveryMode === DeliveryMethodMode.DOCUMENTS_PACKAGE) {
        for (let i = 0; i < documents.length; i++) {
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

export function extractOSWDocumentsDescriptions(documents) {
    const agrDocumentsArrayDesc = [];
    for (let i = 0; i < documents.length; i++) {
        if (documents[i].documentType === "OSW")
            agrDocumentsArrayDesc.push(documents[i].documentDescription);
    }
    if (agrDocumentsArrayDesc.length > 0) {
        return agrDocumentsArrayDesc.join(", ");
    }
    return "";
}

export function addOSWDocumentsToContents(contents, documents) {
    const documentDescriptions = extractOSWDocumentsDescriptions(documents);
    if (documentDescriptions !== "") {
        return ((contents) ? contents + ", " : "") + documentDescriptions + ".";
    }
    return contents;
}

export function addPriceListAndRegulationsToDelivery(documents) {
    return (documents.some(document => document.documentType === "REG") &&
        documents.some(document => document.documentType === "PRICE_LIST")) ? " Regulaminy i cenniki." : "";
}

export function isDeliveryMethodRequired(selectedValue) {
    return selectedValue !== null;
}

export function isDeliveryMethodSelected(selectedValue) {
    return selectedValue !== null && selectedValue !== "";
}

export function setSelectedParcelLockerIdInSession(posId) {
    RemoteApi.setPosId(posId);
}