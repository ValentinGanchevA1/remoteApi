define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.isApuSelected = void 0;

    var isApuSelected = function isApuSelected() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SELECT_APU:
                return true;

            default:
                return state;
        }
    };

    _exports.isApuSelected = isApuSelected;
});
//# sourceMappingURL=apu.js.map