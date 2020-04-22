define(["exports", "redux", "./navigation", "./addresses", "./customer", "./representativeData", "./mnpData", "./consents", "./metadata", "./errors", "./delivery", "./installation", "./payment", "./conditions", "./cvDocuments", "./period", "./apu", "./telesales", "./pickup", "./reservation", "./assistMode", "./billingAccount", "./returnDocument", "./agreement", "./debtRepayment", "./fbbServices", "./idVerification", "./investment", "./summary"], function(_exports, _redux, navigation, addresses, customer, _representativeData, mnpData, consents, metadata, errors, delivery, installation, payment, conditions, cvDocuments, period, apu, _telesales, pickup, reservation, assistMode, billingAccount, returnDocument, agreement, debtRepayment, fbbServices, idVerification, investment, _summary) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    navigation = babelHelpers.interopRequireWildcard(navigation);
    addresses = babelHelpers.interopRequireWildcard(addresses);
    customer = babelHelpers.interopRequireWildcard(customer);
    mnpData = babelHelpers.interopRequireWildcard(mnpData);
    consents = babelHelpers.interopRequireWildcard(consents);
    metadata = babelHelpers.interopRequireWildcard(metadata);
    errors = babelHelpers.interopRequireWildcard(errors);
    delivery = babelHelpers.interopRequireWildcard(delivery);
    installation = babelHelpers.interopRequireWildcard(installation);
    payment = babelHelpers.interopRequireWildcard(payment);
    conditions = babelHelpers.interopRequireWildcard(conditions);
    cvDocuments = babelHelpers.interopRequireWildcard(cvDocuments);
    period = babelHelpers.interopRequireWildcard(period);
    apu = babelHelpers.interopRequireWildcard(apu);
    pickup = babelHelpers.interopRequireWildcard(pickup);
    reservation = babelHelpers.interopRequireWildcard(reservation);
    assistMode = babelHelpers.interopRequireWildcard(assistMode);
    billingAccount = babelHelpers.interopRequireWildcard(billingAccount);
    returnDocument = babelHelpers.interopRequireWildcard(returnDocument);
    agreement = babelHelpers.interopRequireWildcard(agreement);
    debtRepayment = babelHelpers.interopRequireWildcard(debtRepayment);
    fbbServices = babelHelpers.interopRequireWildcard(fbbServices);
    idVerification = babelHelpers.interopRequireWildcard(idVerification);
    investment = babelHelpers.interopRequireWildcard(investment);

    var _default = (0, _redux.combineReducers)({
        navigation: (0, _redux.combineReducers)(navigation),
        addresses: (0, _redux.combineReducers)(addresses),
        customer: (0, _redux.combineReducers)(customer),
        representativeData: _representativeData.representativeData,
        mnpData: (0, _redux.combineReducers)(mnpData),
        metadata: (0, _redux.combineReducers)(metadata),
        consents: (0, _redux.combineReducers)(consents),
        errors: (0, _redux.combineReducers)(errors),
        delivery: (0, _redux.combineReducers)(delivery),
        installation: (0, _redux.combineReducers)(installation),
        payment: (0, _redux.combineReducers)(payment),
        cvDocuments: (0, _redux.combineReducers)(cvDocuments),
        conditions: (0, _redux.combineReducers)(conditions),
        period: (0, _redux.combineReducers)(period),
        apu: (0, _redux.combineReducers)(apu),
        telesales: _telesales.Telesales,
        pickup: (0, _redux.combineReducers)(pickup),
        reservation: (0, _redux.combineReducers)(reservation),
        assistMode: (0, _redux.combineReducers)(assistMode),
        billingAccount: (0, _redux.combineReducers)(billingAccount),
        returnDocument: (0, _redux.combineReducers)(returnDocument),
        agreement: (0, _redux.combineReducers)(agreement),
        debtRepayment: (0, _redux.combineReducers)(debtRepayment),
        fbbServices: (0, _redux.combineReducers)(fbbServices),
        idVerification: (0, _redux.combineReducers)(idVerification),
        investment: (0, _redux.combineReducers)(investment),
        summary: _summary.summary
    });

    _exports.default = _default;
});
//# sourceMappingURL=root.js.map