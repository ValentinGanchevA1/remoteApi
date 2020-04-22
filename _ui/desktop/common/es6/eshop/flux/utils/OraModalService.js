import ReactDOM from "react-dom";

//TODO scheduling popups
window.oraModalService = window.oraModalService || {
    modals: {},
    showing: null
}
// earlier versions of React go crazy when components are moved around in DOM
var reactLegacyVersion = ReactDOM.version.startsWith('0.');

function modalClose() {
    let showing = window.oraModalService.showing
    if (showing.onClose)
        setTimeout(showing.onClose, 0);
    window.oraModalService.showing = null;
}

function createModalRoot(id) {
    var modalRoot = document.getElementById("modal-" + id);
    if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = "modal-" + id;
        modalRoot.className = "u-hide";
        document.body.appendChild(modalRoot);
    }

    return modalRoot;
}

/**
 * Register a new modal component.
 * @param component A component definition for the modal. Should be a stateless function that returns an OraModalComponent as its root
 * element. Avoid accessing another component's state in inline component definitions (i.e. when using arrow syntax) - it might work, but
 * the modal component will not be updated and it can possibly lead to invariant violations. Another component's methods can be used as
 * callbacks, but for modals that can be opened from outside that component, binding a flux action is preferred.
 */
function add(component) {
    let modals = window.oraModalService.modals

    if (typeof component !== "function")
        console.log("Modal component should be a stateless function.");
    let element = component({});
    let id = element.props.id;
    let modalRoot = createModalRoot(id);
    /*
     * FIXME!
     * onClose and fallback aren't registered for components that are not stateless functions with OraModal as root, because those are the
     * props of OraModal itself and not the wrapping component. It might be necessary to find another way of passing those 'meta props'.
     */
    modals[id] = {
        id: id,
        component: component,
        root: modalRoot,
        onClose: element.props.onClose,
        fallback: typeof element.props.fallback === "function"
    };
    OPL.UI.on(OPL.UI.EVENTS.modules.modal.closed, modalClose, id + '-trigger');
    ReactDOM.render(element, modalRoot, function() {
        OPL.UI.initModules(modalRoot);
    });
}

/**
 * Opens a modal with a given id.
 * @param id Identifier of the modal (used in ModalService.add)
 * @param data Data that will be passed to the component as props. Keep in mind that the modal's content is static and will only display
 * the data that was passed to it when opening.
 */
function open(id, data = {}) {
    let modals = window.oraModalService.modals
    let showing = window.oraModalService.showing
    if (showing !== null) {
        console.log("Trying to open a modal when another one is showing!");
        return;
    }
    var modal = modals[id];
    if (modal) {
        if (reactLegacyVersion && modal.fallback) {
            modal.component(data).props.fallback();
        } else {
            viewModal(modal, data);
        }
    } else {
        console.log("Modal with id " + id + " has not been registered.");
    }
}

function viewModal(modal, data) {
    window.oraModalService.showing = modal;
    ReactDOM.render(modal.component(data), modal.root, function() {
        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, '', modal.id + "-trigger");
    });
}

function close() {
    let showing = window.oraModalService.showing
    if (showing === null) return Promise.resolve();

    return new Promise(function(resolve, reject) {
        OPL.UI.on(OPL.UI.EVENTS.modules.modal.closed, function x(id) {
            OPL.UI.off(OPL.UI.EVENTS.modules.modal.closed, x, id);
            resolve();
        }, showing.id + "-trigger");
        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, '', showing.id + "-trigger");
    });
}

export default {
    add: add,
    open: open,
    close: close
};