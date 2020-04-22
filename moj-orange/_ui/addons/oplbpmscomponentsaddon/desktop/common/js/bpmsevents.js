define(['pubsub', 'exports'], function(pubsub, exports) {

    var bpmsContainerID = "";
    var bpmsToken = "";


    var bpmsPublishers = {
        bpmsCancel: {
            name: "UXEvent.BPMS.Modal.Cancel"
        },
        bpmsComplete: {
            name: "UXEvent.BPMS.Modal.Complete"
        },
        bpmsFormLoaded: {
            name: "BPMS.form.loaded"
        }
    };


    var bpmsSubscribers = {
        bpmsInit: {
            name: "UXEvent.BPMS.Modal.Init",
            "ajax": {
                "url": bsfContextPath + "/bpmsAction/ajax/getModalData/"
            },
            "subscribeToken": "",
            "data": {}
        },
        bpmsClose: {
            name: "UXEvent.BPMS.Modal.Close",
            "ajax": {
                "url": bsfContextPath + "/bpmsAction/ajax/getModalData/"
            },
            "subscribeToken": "",
            "data": {}
        },
        innerCancel: {
            name: "UXEvent.BPMS.Modal.Inner.Cancel",
            "subscribeToken": ""
        },
        innerComplete: {
            name: "UXEvent.BPMS.Modal.Inner.Complete",
            "subscribeToken": ""
        },
        innerNext: {
            name: "UXEvent.BPMS.Modal.Inner.Next",
            "subscribeToken": "",
            "ajax": {
                "url": bsfContextPath + "/bpmsAction/ajax/getModalData/"
            },
            "data": {}
        }
    };

    addParameterToUrl = function(url, paramName, paramValue) {
        url = url.replace(location.hash, '');
        if (url.indexOf(paramName + "=") >= 0) {
            var prefix = url.substring(0, url.indexOf(paramName));
            var suffix = url.substring(url.indexOf(paramName));
            suffix = suffix.substring(suffix.indexOf("=") + 1);
            suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
            url = prefix + paramName + "=" + paramValue + suffix;
        } else {
            if (url.indexOf("?") < 0)
                url += "?" + paramName + "=" + paramValue;
            else
                url += "&" + paramName + "=" + paramValue;
        }
        return url;
    };


    var getSubscriberByName = function(name) {
        var sub = bpmsSubscribers[name];
        return sub;
    };


    var bpmsCancel = getSubscriberByName("innerCancel");
    var bpmsComplete = getSubscriberByName("innerComplete");
    var initEvent = getSubscriberByName("bpmsInit");


    unsubscribeAllEvents = function() {

        $.each(bpmsSubscribers, function(index, value) {
            if (value.subscribeToken !== '' && value !== bpmsSubscribers["bpmsInit"]) {
                PubSub.unsubscribe(value.name);
            }
        });

    };

    publish = function(name) {
        var publisher = bpmsPublishers[name];
        PubSub.publish(publisher.name);
    };

    postDataToHybrisToId = function(subscribe, divId, token) {

        if (token === null || token === "") {
            $("#" + divId).html("Nie podano tokena");
            return;
        }

        var url = subscribe.ajax.url + token;
        $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType: "application/json",
            cache: false,
            headers: {
                'CSRFToken': $("#CSRFToken").val()
            },
            data: JSON.stringify(subscribe.ajax.data),
            error: function(data) {
                OPL.UI.fire('modules.loader.hide', $('.bpmspreloader'), 'bpmsModalLoader');

                var errorMsg = "";

                try {
                    var responseBean = data.responseBean;
                    if (responseBean) {
                        errorMsg = data.businessErrorMessage;
                    }
                } catch (e) {
                    errorMsg = "Coś poszło nie tak";
                }

                $("#" + divId).html('<div class="opl-msg opl-msg--box opl-msg--error"><div class="opl-msg__header">' + errorMsg + '</div></div>');
            },
            success: function(data) {

                var responseBean = data.responseBean;
                if (typeof responseBean !== 'undefined' && responseBean !== null && responseBean.resultCode === 0) {
                    var divSelector = document.getElementById(divId);
                    OPL.UI.stopModules(divSelector);
                    var newHtml = data.formHtml;
                    $("#" + divId).html(newHtml);
                    OPL.UI.initModules(divSelector);
                    OPL.UI.fire('modules.loader.hide', $('.bpmspreloader'), 'bpmsModalLoader');
                }
            },
            complete: function() {
                publish("bpmsFormLoaded");
            }
        });
    };

    showForm = function(subscriber, containerId, token) {
        postDataToHybrisToId(subscriber, containerId, token);
    };

    subscribeModalInnerEvents = function() {
        bpmsCancel.subscribeToken = PubSub.subscribe(bpmsCancel.name, function() {
            unsubscribeAllEvents();
            bpmsContainerID = "";
            bpmsToken = "";
            publish('bpmsCancel');
        });
        bpmsComplete.subscribeToken = PubSub.subscribe(bpmsComplete.name, function() {
            unsubscribeAllEvents();
            bpmsContainerID = "";
            bpmsToken = "";
            publish('bpmsComplete');
        });
    };

    exports.init = function() {
        unsubscribeAllEvents();
        subscribeModalInnerEvents();

        initEvent.subscribeToken = PubSub.subscribe(initEvent.name, function(msg, data) {

            bpmsContainerID = "";
            bpmsToken = "";

            bpmsContainerID = data.containerId;
            bpmsToken = data.token;

            unsubscribeAllEvents();
            subscribeModalInnerEvents();

            OPL.UI.fire('modules.loader.show', $('.bpmspreloader'), 'bpmsModalLoader');
            showForm(initEvent, bpmsContainerID, bpmsToken);
        });
    };

    exports.runPublisher = function(name) {
        publish(name);
    };

});