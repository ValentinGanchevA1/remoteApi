function reloadPageIfPersisted() {
    window.onpageshow = function(e) {
        if (e.persisted) {
            window.location.reload();
        }
    };
}
reloadPageIfPersisted();

function onFrameworkReady(callback) {
    if ("undefined" === typeof OPL || "undefined" === typeof OPL.UI) {
        document.addEventListener("framework.ready", callback);
    } else {
        callback();
    }
}

function onPubsubReady(callback) {
    if ("undefined" === typeof EcarePubSub) {
        $(document).on("pubsub.ready", callback);
    } else {
        callback();
    }
}

function onCreateDocumentReady(callback) {
    if ("undefined" === typeof CreateDocument) {
        $(document).on("cratedocument.ready", callback);
    } else {
        callback();
    }
}