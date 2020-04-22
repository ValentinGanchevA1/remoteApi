import {
    applyMiddleware,
    combineReducers,
    createStore,
    compose
} from "redux";
import thunk from "redux-thunk";

import auth from "../auth/reducers/authorization";
import checkout from "../checkout/reducers/root";
import cart from "../cart/reducers/root";
import cbs from "../cbs/reducers/root";
import configurator from "../configurator/reducers/root";
import documents from "../documents/reducers/root";
import simfree from "../simfree/reducers/root";
import fix from "../fix/reducers/root";
import magnum from "../magnum2/reducers/root";
import serviceTransfer from "../servicetransfer/reducers/root";
import dataLayer from "../dataLayer/reducers/root";
import dataLayerMiddleware from "../dataLayer/middleware/dataLayerMiddleware";
import actionsToTrack from "../dataLayer/actionsToTrack";

const rootReducer = combineReducers({
    auth,
    checkout,
    cart,
    cbs,
    configurator,
    documents,
    simfree,
    fix,
    magnum,
    serviceTransfer,
    dataLayer
});

//TODO: devTools activation should depends on environment
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const analyticsMiddleware = dataLayerMiddleware(window.dataLayer, actionsToTrack);

// Singleton store is created here to enable sharing between different root components within the module.
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, analyticsMiddleware))
);

export default store;