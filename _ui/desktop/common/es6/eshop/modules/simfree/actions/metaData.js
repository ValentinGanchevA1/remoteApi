import * as ACTIONS from "../actionTypes";

export const registerOneTimePriceCMSConf = (cmsConf) => ({
    type: ACTIONS.REGISTER_ONE_TIME_PRICE_CMS_CONF,
    cmsConf
})

export const registerMaxMonthlyPriceCMSConf = (cmsConf) => ({
    type: ACTIONS.REGISTER_MAX_MONTHLY_PRICE_CMS_CONF,
    cmsConf
})