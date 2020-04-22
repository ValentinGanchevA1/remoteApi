define(["exports", "redux", "redux-thunk", "../auth/reducers/authorization", "../checkout/reducers/root", "../cart/reducers/root", "../cbs/reducers/root", "../configurator/reducers/root", "../documents/reducers/root", "../simfree/reducers/root", "../fix/reducers/root", "../magnum2/reducers/root", "../servicetransfer/reducers/root", "../dataLayer/reducers/root", "../dataLayer/middleware/dataLayerMiddleware", "../dataLayer/actionsToTrack"], function(_exports, _redux, _reduxThunk, _authorization, _root, _root2, _root3, _root4, _root5, _root6, _root7, _root8, _root9, _root10, _dataLayerMiddleware, _actionsToTrack) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.store = void 0;
    _reduxThunk = babelHelpers.interopRequireDefault(_reduxThunk);
    _authorization = babelHelpers.interopRequireDefault(_authorization);
    _root = babelHelpers.interopRequireDefault(_root);
    _root2 = babelHelpers.interopRequireDefault(_root2);
    _root3 = babelHelpers.interopRequireDefault(_root3);
    _root4 = babelHelpers.interopRequireDefault(_root4);
    _root5 = babelHelpers.interopRequireDefault(_root5);
    _root6 = babelHelpers.interopRequireDefault(_root6);
    _root7 = babelHelpers.interopRequireDefault(_root7);
    _root8 = babelHelpers.interopRequireDefault(_root8);
    _root9 = babelHelpers.interopRequireDefault(_root9);
    _root10 = babelHelpers.interopRequireDefault(_root10);
    _dataLayerMiddleware = babelHelpers.interopRequireDefault(_dataLayerMiddleware);
    _actionsToTrack = babelHelpers.interopRequireDefault(_actionsToTrack);
    var rootReducer = (0, _redux.combineReducers)({
        auth: _authorization.default,
        checkout: _root.default,
        cart: _root2.default,
        cbs: _root3.default,
        configurator: _root4.default,
        documents: _root5.default,
        simfree: _root6.default,
        fix: _root7.default,
        magnum: _root8.default,
        serviceTransfer: _root9.default,
        dataLayer: _root10.default
    }); //TODO: devTools activation should depends on environment

    var composeEnhancers = (typeof window === "undefined" ? "undefined" : babelHelpers.typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : _redux.compose;
    var analyticsMiddleware = (0, _dataLayerMiddleware.default)(window.dataLayer, _actionsToTrack.default); // Singleton store is created here to enable sharing between different root components within the module.

    var store = (0, _redux.createStore)(rootReducer, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk.default, analyticsMiddleware)));
    _exports.store = store;
    var _default = store;
    _exports.default = _default;
});
//# sourceMappingURL=store.js.map