define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.createCMSDescriptionWithParams = void 0;

    var createCMSDescriptionWithParams = function createCMSDescriptionWithParams(description, params) {
        var result = description;
        description && params && params.map(function(param, i) {
            result = result.replace(new RegExp("\\{" + i + "\\}", "g"), param);
        });
        return result;
    };

    _exports.createCMSDescriptionWithParams = createCMSDescriptionWithParams;
});
//# sourceMappingURL=CmsUtils.js.map