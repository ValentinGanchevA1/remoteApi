var portalAccountsSubscribers = function(name) {
    var data = {
        confirmDeleteAccountInit: {
            "name": "UXEvent.CAAP.ConfirmDeleteAccount.Init",
            "isModal": true,
            "modalContainer": "confirmAccountDeletionModal",
            "ajax": {
                "url": portalAccountPath + "/account/getDeleteAccountPage",
                "type": "GET",
                "async": true
            },
            "subscribeToken": ""
        },
        deleteAccountInit: {
            "name": "UXEvent.CAAP.DeleteAccount.Init",
            "ajax": {
                "url": portalAccountPath + "/account/deleteAccount",
                "type": "POST",
                "data": {
                    deleted: false
                }
            },
            "subscribeToken": ""
        },

        unlockAccountInit: {
            "name": "UXEvent.CAAP.UnlockAccount.Init",
            "ajax": {
                "url": portalAccountPath + "/account/unlockAccount",
                "type": "POST"
            },
            "subscribeToken": ""
        },
        getAccountDetailsPageInit: {
            "name": "UXEvent.CAAP.GetAccountDetailsPage.Init",
            "isModal": true,
            "modalContainer": "accountDetailsModal",
            "ajax": {
                "url": portalAccountPath + "/account/getDetailsPage",
                "type": "GET",
                "async": true
            },
            "subscribeToken": ""
        },
        confirmDeleteAccountByConsultantInit: {
            "name": "UXEvent.CAAP.ConfirmDeleteAccountByConsultant.Init",
            "isModal": true,
            "modalContainer": "confirmAccountDeletionByConsultantModal",
            "ajax": {
                "url": portalAccountPath + "/account/getDeleteAccountByConsultantPage",
                "type": "GET",
                "async": true
            },
            "subscribeToken": ""
        },
        deleteAccountByConsultantInit: {
            "name": "UXEvent.CAAP.DeleteAccountByConsultant.Init",
            "ajax": {
                "url": portalAccountPath + "/account/deleteAccountByConsultant",
                "type": "POST",
                "data": {
                    deleted: false
                }
            },
            "subscribeToken": ""
        },
        confirmDeleteAccountByAdministratorInit: {
            "name": "UXEvent.CAAP.ConfirmDeleteAccountByAdministrator.Init",
            "isModal": true,
            "modalContainer": "confirmAccountDeletionByAdministratorModal",
            "ajax": {
                "url": portalAccountPath + "/account/getDeleteAccountByAdministratorPage",
                "type": "GET",
                "async": true
            },
            "subscribeToken": ""
        },
        deleteAccountByAdministratorInit: {
            "name": "UXEvent.CAAP.DeleteAccountByAdministrator.Init",
            "ajax": {
                "url": portalAccountPath + "/account/deleteAccountByAdministrator",
                "type": "POST",
                "data": {
                    deleted: false
                }
            },
            "subscribeToken": ""
        },
        blockPortalAccountByConsultantInit: {
            "name": "UXEvent.CAAP.BlockPortalAccountByConsultantPage.Init",
            "isModal": true,
            "modalContainer": "blockPortalAccountByConsultantModal",
            "ajax": {
                "url": portalAccountPath + "/account/getBlockPortalAccountByConsultantPage",
                "type": "GET",
                "async": true
            },
            "subscribeToken": ""
        },
        unblockPortalAccountByConsultantInit: {
            "name": "UXEvent.CAAP.UnblockPortalAccountByConsultantPage.Init",
            "isModal": true,
            "modalContainer": "unblockPortalAccountByConsultantModal",
            "ajax": {
                "url": portalAccountPath + "/account/getBlockPortalAccountByConsultantPage",
                "type": "GET",
                "async": true
            },
            "subscribeToken": ""
        }
    };
    return data[name];
};

var portalAccountPublishers = function(name) {
    var data = {
        deleteAccountCompleted: {
            name: "UXEvent.CAAP.DeleteAccount.Completed"
        },
        deleteAccountByConsultantCompleted: {
            name: "UXEvent.CAAP.DeleteAccountByConsultant.Completed"
        },
        deleteAccountByAdministratorCompleted: {
            name: "UXEvent.CAAP.DeleteAccountByAdministrator.Completed"
        },
        blockPortalAccountByConsultantCompleted: {
            name: "UXEvent.CAAP.BlockPortalAccountByConsultant.Completed"
        },
        deleteAccountFailure: {
            name: "UXEvent.CAAP.DeleteAccount.Failure"
        },
        deleteAccountByConsultantFailure: {
            name: "UXEvent.CAAP.DeleteAccountByConsultant.Failure"
        },
        deleteAccountByAdministratorFailure: {
            name: "UXEvent.CAAP.DeleteAccountByAdministrator.Failure"
        },
        blockPortalAccountByConsultantFailure: {
            name: "UXEvent.CAAP.BlockPortalAccountByConsultant.Failure"
        }
    };
    return data[name];
};

function getDataPortalFromHybrisById(subscribe, divId) {
    $.ajax({
        url: subscribe.ajax.url,
        headers: {
            'CSRFToken': $("#CSRFToken").val()
        },
        type: "GET",
        async: subscribe.ajax.async,
        error: function() {
            $("#" + divId).html("Błąd pobrania danych z serwera");
        },
        success: function(data) {
            $("#" + divId).html(data.pageHtml);
            OPL.UI.initModules(document.getElementById(divId));
        }
    });

}

function executeDataPortalAndRunEvent(subscribe, eventName) {
    $.ajax({
        url: subscribe.ajax.url,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        headers: {
            'CSRFToken': $("#CSRFToken").val()
        },
        async: subscribe.ajax.async,
        data: JSON.stringify(
            subscribe.ajax.data
        ),
        error: function(jqXHR) {
            var message = jqXHR.responseJSON.statusMessage;
            var data = {};
            if (message == null) {
                data.message = "Coś poszło nie tak";
            } else {
                data.message = message;
            }
            PubSub.publish(eventName + '.Failure', data);
        },
        success: function(data) {
            PubSub.publish(eventName + '.Completed');
        }
    });
}

function postDataPortalToHybrisById(subscribe, divId) {
    $.ajax({
        url: subscribe.ajax.url,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        headers: {
            'CSRFToken': $("#CSRFToken").val()
        },
        async: subscribe.ajax.async,
        data: JSON.stringify(
            subscribe.ajax.data
        ),
        error: function() {
            $("#" + divId).html("Błąd pobrania danych z serwera");
        },
        success: function(data) {
            $("#" + divId).html(data.pageHtml);
        }
    });

}

function loadDataFromBackend(subscribe, data, parentEventName) {
    if (subscribe.ajax.type === "POST") {
        if (parentEventName !== null) {
            executeDataPortalAndRunEvent(subscribe, parentEventName);
        } else {
            postDataPortalToHybrisById(subscribe, data.containerId);
        }
    } else if (subscribe.ajax.type === "GET") {
        getDataPortalFromHybrisById(subscribe, data.containerId);
    }
};

define(['pubsub', 'exports'], function(pubSub, exports) {

    exports.initSubscriber = function(name, parentEventName) {
        var subscribe = portalAccountsSubscribers(name);
        subscribe.subscribeToken = PubSub.subscribe(subscribe.name, function(msg, data) {
            if (subscribe.isModal && $("#" + subscribe.modalContainer).length !== 0) {
                OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, "", subscribe.modalContainer);
            } else {
                loadDataFromBackend(subscribe, data, parentEventName);
            }
        });
    };

    exports.runPublisher = function(name) {
        var publisher = portalAccountPublishers(name);
        PubSub.publish(publisher.name);
    };

    exports.runPublisherWithMessage = function(name, message) {
        var publisher = portalAccountPublishers(name);
        PubSub.publish(publisher.name, {
            message: message
        });
    };
});