/**
 * Utility for using OPL.UI framework and RequireJS asynchronously in top-level and non-module code
 * Usage:
 *
 * UX.use((OPL) => {
 *     ...
 * });
 * to make sure OPL and OPL.UI objects are available in scope
 *
 * UX.require(['dependency1', 'dependency2'], function (dependency1, dependency2) {
 *      ...
 * });
 * to use modules in top-level code
 */

var UX = (function(UX) {
    var isOplReady = function() {
        return "undefined" !== typeof OPL && "undefined" !== typeof OPL.UI;
    };

    var uxFrameworkReady = function(resolve) {
        if ("undefined" === typeof OPL || "undefined" === typeof OPL.UI) {
            document.addEventListener("framework.ready", function() {
                resolve(OPL);
            });
        } else {
            resolve(OPL);
        }
    };

    var oplUiPromise = new Promise(uxFrameworkReady);

    UX.useModules = function(handler) {
        return oplUiPromise.then((OPL) => {
            if (OPL.UI.isReady.modules)
                handler(OPL);
            else {
                var listener = function() {
                    handler(OPL);
                    document.removeEventListener(OPL.UI.EVENTS.modules.ready, listener);
                };
                document.addEventListener(OPL.UI.EVENTS.modules.ready, listener);
            }
        });
    };

    UX.use = function(handler) {
        return oplUiPromise.then(handler);
    };

    UX.isReady = function() {
        return isOplReady();
    };

    function requireEs6Defaults(module) {
        return module && module.__esModule && module["default"] ? module["default"] : module;
    }

    UX.require = function(deps, callback) {
        return oplUiPromise.then(function() {
            require(deps, function(...deps) {
                callback(...deps.map(dep => requireEs6Defaults(dep)));
            });
        });
    };

    return UX;
})(UX || {});