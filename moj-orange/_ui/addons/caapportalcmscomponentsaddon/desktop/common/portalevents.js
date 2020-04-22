var portalSubscribers = function(name) {
    var data = {
        changePasswordInit: {
            "name": "UXEvent.CAAP.ChangePassword.Init",
            "ajax": {
                "url": portalContextPath + "/changePasswordPage",
                "type": "GET",
                "async": true
            },
            "subscribeToken": ""
        },
        resetPasswordByConsultantInit: {
            "name": "UXEvent.CAAP.ResetPasswordByConsultant.Init",
            "ajax": {
                "url": portalContextPath + "/resetPasswordByConsultantPage",
                "type": "GET",
                "async": true
            },
            "subscribeToken": ""
        },
        changeEmailByConsultantInit: {
            "name": "UXEvent.CAAP.ChangeEmailByConsultant.Init",
            "ajax": {
                "url": portalContextPath + "/changeEmailPage",
                "type": "GET",
                "async": true
            },
            "subscribeToken": ""
        }
    };
    return data[name];
};

var portalPublishers = function(name) {
    var data = {
        changeEmailComplete: {
            name: "UXEvent.CAAP.ChangeEmailByConsultant.Completed"
        }
    };
    return data[name];
};


function getDataPortalFromHybrisById(subscribe, divId, methodAfterGet) {
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
            if (methodAfterGet !== null && methodAfterGet !== undefined) {
                methodAfterGet();
            }
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

var initSubscriberWithAjax = function(subscribe, data, methodAfterGet) {
    if (subscribe.ajax.type === "POST") {
        postDataPortalToHybrisById(subscribe, data.containerId);
    } else if (subscribe.ajax.type === "GET") {
        getDataPortalFromHybrisById(subscribe, data.containerId, methodAfterGet);
    }
};



define(['pubsub', 'exports'], function(pubsub, exports) {

    exports.initSubscriber = function(name, clearDataFunc, methodAfterGet) {
        var subscribe = portalSubscribers(name);
        subscribe.subscribeToken = PubSub.subscribe(subscribe.name, function(msg, data) {
            if (clearDataFunc !== null && clearDataFunc !== undefined) {
                clearDataFunc();
            }
            if (subscribe.ajax !== null) {
                initSubscriberWithAjax(subscribe, data, methodAfterGet);
            }

        });
    };

    exports.runPublisher = function(name) {
        var publisher = portalPublishers(name);
        PubSub.publish(publisher.name);
    };



});