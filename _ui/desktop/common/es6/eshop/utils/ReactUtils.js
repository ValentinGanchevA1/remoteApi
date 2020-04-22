import {
    createElement
} from "react";
import {
    render
} from "react-dom";

let renamed = name => Component => {
    class RenamedComponent extends Component {}

    RenamedComponent.displayName = name;
    return RenamedComponent;
};

function mountElement(element, node) {
    render(element, node);
    OPL.UI.initModules(node);
}

export function mount({
    node,
    Component,
    props,
    name,
    storePath
}) {
    if (!storePath) {
        mountElement(createElement(Component, props), node);
    } else {
        // another require, so that we can dynamically get redux and store only for redux-connected components
        UX.require(["react-redux", storePath], function(ReactRedux, store) {
            mountElement(
                createElement(
                    renamed(name || `Provider(${Component.displayName || Component.name})`)(ReactRedux.Provider), {
                        store
                    },
                    createElement(Component, {
                        ...props
                    })
                ), node);
        });
    }
}