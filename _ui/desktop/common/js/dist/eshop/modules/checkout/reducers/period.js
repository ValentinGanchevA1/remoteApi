define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.durationsList = void 0;
    var emptyPeriodData = {
        propositions: "",
        stateCode: ""
    };
    var emptyPeriodState = {
        propositions: "",
        stateCode: ""
    };

    var durationsList = function durationsList() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.GET_PERIOD_DONE:
                return action.data.durations;

            default:
                return state;
        }
    };

    _exports.durationsList = durationsList;
});
//# sourceMappingURL=period.js.map