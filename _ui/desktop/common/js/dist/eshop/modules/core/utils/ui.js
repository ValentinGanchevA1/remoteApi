define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.styleVariant = styleVariant;
    _exports.loadModule = loadModule;
    _exports.loadModules = loadModules;
    _exports.pickProps = pickProps;
    _exports.pickPropsBy = pickPropsBy;
    _exports.excludeProps = excludeProps;
    _exports.ARIA_LIVE_OPTIONS = _exports.ARIA = void 0;
    var ARIA = {
        POLITE: "polite",
        ASSERTIVE: "assertive",
        RUDE: "rude"
    };
    _exports.ARIA = ARIA;
    var ARIA_LIVE_OPTIONS = [ARIA.POLITE, ARIA.ASSERTIVE, ARIA.RUDE];
    _exports.ARIA_LIVE_OPTIONS = ARIA_LIVE_OPTIONS;

    function styleVariant() {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        return variant ? prefix + variant + suffix : "";
    }

    function loadModule(node, module) {
        return new Promise(function(resolve, reject) {
            var listener = function listener(data) {
                if (data.module === module.path && data.element === node) {
                    OPL.UI.off("module.started", listener);
                    resolve();
                }
            };

            OPL.UI.on("module.started", listener);
            OPL.UI.loadModules(node, [module]);
        });
    }

    function loadModules(node) {
        var modules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var moduleDataArray = modules;
        return new Promise(function(resolve, reject) {
            var listener = function listener(data) {
                var moduleData = moduleDataArray.find(function(module) {
                    return data.module === module.path;
                });

                if (data.element === node && !!moduleData && data.module === moduleData.path) {
                    moduleDataArray.splice(moduleDataArray.indexOf(moduleData), 1);

                    if (moduleDataArray.length === 0) {
                        OPL.UI.off("module.started", listener);
                        resolve();
                    }
                }
            };

            OPL.UI.on("module.started", listener);
            OPL.UI.loadModules(node, modules);
        });
    }

    function pickProps(props, keys) {
        var target = {};
        keys.forEach(function(key) {
            if (props.hasOwnProperty(key) && props[key] !== null) target[key] = props[key];
        });
        return target;
    }

    function pickPropsBy(props, func) {
        var target = {};
        Object.keys(props).filter(func).forEach(function(key) {
            target[key] = props[key];
        });
        return target;
    }

    function excludeProps(props, keys) {
        var target = {};

        for (var key in props) {
            if (keys.indexOf(key) < 0 && props.hasOwnProperty(key)) target[key] = props[key];
        }

        return target;
    }
});
//# sourceMappingURL=ui.js.map