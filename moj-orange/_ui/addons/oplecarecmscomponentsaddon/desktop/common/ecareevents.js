function reloadPageIfPersisted() {
    window.onpageshow = function(e) {
        if (e.persisted) {
            window.location.reload();
        }
    };
}
reloadPageIfPersisted();

function isIE11() {
    var ua = window.navigator.userAgent;
    if (ua.indexOf("Trident/7.0") > 0) {
        return true;
    }
}

function isMobileiOS() {
    var iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ];

    if (!!navigator.platform) {
        while (iDevices.length) {
            if (navigator.platform === iDevices.pop()) {
                return true;
            }
        }
    }
    return false;
}

if (isIE11() || isMobileiOS()) {
    onFrameworkReady = function(callback) {
        if ("undefined" === typeof OPL || "undefined" === typeof OPL.UI) {
            document.addEventListener("framework.ready", callback);
        } else {
            callback();
        }
    }
} else {
    var EcareFramework = (function(EcareFramework) {
        var isOplReady = function() {
            return "undefined" !== typeof OPL && "undefined" !== typeof OPL.UI;
        };

        var ecareFrameworkReady = function(resolve) {
            if ("undefined" === typeof OPL || "undefined" === typeof OPL.UI) {
                document.addEventListener("framework.ready", function() {
                    resolve(OPL);
                });
            } else {
                resolve(OPL);
            }
        };

        // FIXME: quick workaround for using the jQuery from UX library
        // remove all instances of its uses after properly integrating the frontend with require
        var bind$ = function(handler) {
            return function(OPL) {
                handler(OPL, jQuery);
            };
        };

        var oplUiPromise = new Promise(ecareFrameworkReady);

        function isReady(OPL, jQuery) {
            if (OPL.UI.isReady.modules) handler(OPL, jQuery)
            else {
                var listener = function() {
                    handler(OPL, jQuery);
                    document.removeEventListener("modules.ready", listener);
                };
                document.addEventListener("modules.ready", listener);
            }
        }

        EcareFramework.useModules = function(handler) {
            return oplUiPromise.then(bind$(isReady(OPL, jQuery)));
        };

        EcareFramework.use = function(handler) {
            return oplUiPromise.then(bind$(handler));
        };

        EcareFramework.isReady = function() {
            return isOplReady();
        };

        return EcareFramework;
    })(EcareFramework || {});

    onFrameworkReady = function(callback) {
        EcareFramework.use(function(OPL) {
            callback();
        });
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