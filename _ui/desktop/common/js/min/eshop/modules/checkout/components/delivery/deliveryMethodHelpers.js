define(["exports", "../../../core/utils/ui", "../../constants/DeliveryMethodModeEnum", "../../remoteApi"], function(e, t, o, r) {
    "use strict";

    function n(e) {
        for (var t = [], r = 0; r < e.length; r++) "OSW" === e[r].documentType && t.push(e[r].documentDescription);
        return 0 < t.length ? t.join(", ") : ""
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.extractCourierDescriptions = function(e) {
        return (0, t.pickProps)(e, ["courierHeadline", "courierSameAddressLabel", "courierNewAddressLabel", "courierMessageLabel", "deliveryAddressTooltip"])
    }, e.extractDeliveryModeSubTitle = function(e, t) {
        switch (e) {
            case o.default.DOCUMENTS_PACKAGE:
                return t ? "Forma dostawy dla urządzeń i dokumentów" : "Forma dostawy umowy";
            case o.default.DEVICES_PACKAGE:
                return "Forma dostawy dla urządzeń";
            case o.default.FIX_DEVICES_PACKAGE:
                return "Forma dostawy urządzenia FIX";
            case o.default.MOBILE_DEVICES_PACKAGE:
                return "Forma dostawy urządzenia Mobile";
            case "":
                return ""
        }
    }, e.extractAGRDocuments = function(e, t) {
        var r = [];
        if (t !== o.default.DOCUMENTS_PACKAGE) return "";
        for (var n = 0; n < e.length; n++)["AGR", "ANX"].includes(e[n].documentType) && r.push(e[n].documentDescription);
        return 0 < r.length ? r.join(", ") + "." : ""
    }, e.extractOSWDocumentsDescriptions = n, e.addOSWDocumentsToContents = function(e, t) {
        var r = n(t);
        return "" === r ? e : (e ? e + ", " : "") + r + "."
    }, e.addPriceListAndRegulationsToDelivery = function(e) {
        return e.some(function(e) {
            return "REG" === e.documentType
        }) && e.some(function(e) {
            return "PRICE_LIST" === e.documentType
        }) ? " Regulaminy i cenniki." : ""
    }, e.isDeliveryMethodRequired = function(e) {
        return null !== e
    }, e.isDeliveryMethodSelected = function(e) {
        return null !== e && "" !== e
    }, e.setSelectedParcelLockerIdInSession = function(e) {
        r.default.setPosId(e)
    }, o = babelHelpers.interopRequireDefault(o), r = babelHelpers.interopRequireDefault(r)
});
//# sourceMappingURL=deliveryMethodHelpers.js.map