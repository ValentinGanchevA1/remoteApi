export const ARIA = {
    POLITE: "polite",
    ASSERTIVE: "assertive",
    RUDE: "rude"
};
export const ARIA_LIVE_OPTIONS = [ARIA.POLITE, ARIA.ASSERTIVE, ARIA.RUDE];

export function styleVariant(prefix = "", variant = "", suffix = "") {
    return variant ? prefix + variant + suffix : "";
}

export function loadModule(node, module) {
    return new Promise((resolve, reject) => {
        var listener = (data) => {
            if (data.module === module.path && data.element === node) {
                OPL.UI.off("module.started", listener);
                resolve();
            }
        };
        OPL.UI.on("module.started", listener);
        OPL.UI.loadModules(node, [module]);
    });
}

export function loadModules(node, modules = []) {
    var moduleDataArray = modules;
    return new Promise((resolve, reject) => {
        var listener = (data) => {
            var moduleData = moduleDataArray.find(module => data.module === module.path);
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

export function pickProps(props, keys) {
    var target = {};
    keys.forEach(key => {
        if (props.hasOwnProperty(key) && props[key] !== null)
            target[key] = props[key];
    });
    return target;
}

export function pickPropsBy(props, func) {
    var target = {};
    Object.keys(props).filter(func).forEach(key => {
        target[key] = props[key];
    });
    return target;
}

export function excludeProps(props, keys) {
    var target = {};
    for (var key in props) {
        if (keys.indexOf(key) < 0 && props.hasOwnProperty(key))
            target[key] = props[key];
    }
    return target;
}