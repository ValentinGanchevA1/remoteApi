import ORA_ACTIONS from "./OraActionKeys";
import OraDispatcher from "eshop/flux/dispatcher/OraDispatcher";
/**
 * Actions used to configure apps behaviour
 * TODO: maybe gather configuration in one dedicated config store?
 */
let OraConfigActions = (function(OraConfigActions) {

    OraConfigActions.checkMsisdnReservation = function(active = true) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CONFIG_CHECK_MSISDN_RESERVATIONS,
            active: active
        });
    };

    return OraConfigActions;
})({});
export default OraConfigActions;