var config = {};
config.properties = {};
config.properties.timer = 60000;
var grantSubscribers = function(name) {
    var data = {
        additionalAuthorizationInit: {

            name: "UXEvent.CAAP.AdditionalAuthorization.Init",
            "ajax": {
                "url": grantContextPath + "/grant/additionalAuthorize",
                "type": "POST",
                "data": {
                    grant: "CONTRACT_CODE",
                    authorizationType: "",
                    disableCheckboxShow: true
                }
            },
            "subscribeToken": ""
        },
        phoneVerificationInit: {
            name: "UXEvent.CAAP.PhoneVerification.Init",
            "ajax": {
                "url": grantContextPath + "/verifyMSISDN/sendOtp",
                "type": "POST",
                "data": {
                    pageVariant: "DEFAULT_VERIFICATION_OTP_VARIANT"
                }
            },
            "subscribeToken": ""

        },
        emailVerificationInit: {
            name: "UXEvent.CAAP.EmailVerification.Init",
            "ajax": {
                "url": grantContextPath + "/verifyEmail/sendEmailOtpPage",
                "type": "POST",
                "data": {
                    pageVariant: "VERIFICATION_OTP_VARIANT_4_EMAIL"
                }
            },
            "subscribeToken": ""

        },
        portalLoginVerificationInit: {
            name: "UXEvent.CAAP.PortalLoginVerification.Init",
            "ajax": {
                "url": grantContextPath + "/hapi/verifyPortalLogin/sendPasswordVerificationTemplate",
                "type": "POST",
                "data": {
                    pageVariant: "VERIFICATION_PORTAL_PASSWORD"
                }
            },
            "subscribeToken": ""

        }
    };
    return data[name];
};

var grantPublishers = function(name) {
    var data = {
        additionalAuthorizationCompleted: {
            name: "UXEvent.CAAP.AdditionalAuthorization.Completed"
        },
        additionalAuthorizationBack: {
            name: "UXEvent.CAAP.AdditionalAuthorization.Back"
        },
        phoneVerificationCompleted: {
            name: "UXEvent.CAAP.PhoneVerification.Completed"
        },
        phoneVerificationBack: {
            name: "UXEvent.CAAP.PhoneVerification.Back"
        },
        emailVerificationCompleted: {
            name: "UXEvent.CAAP.EmailVerification.Completed"
        },
        blockResendAfterCountTimer: {
            name: "UXEvent.CAAP.Block.Resend"
        },
        portalLoginVerificationCompleted: {
            name: "UXEvent.CAAP.PortalLoginVerification.Completed"
        }
    };
    return data[name];
};

function blockResendAfterCountTimerInit() {
    PubSub.subscribe("UXEvent.CAAP.Block.Resend", function() {
        var timer = setInterval(function() {
            $("#resendText").removeClass("u-acc-hide");
            clearInterval(timer);
        }, config.properties.timer);
    });
}

function getDataFromHybrisById(subscribe, divId) {
    $.ajax({
        url: subscribe.ajax.url,
        type: "GET",
        headers: {
            'CSRFToken': $("#CSRFToken").val()
        },
        error: function() {
            $("#" + divId).html("Błąd pobrania danych z serwera");
        },
        success: function(data) {
            $("#" + divId).html(data.pageHtml);
        }
    });
};

function postDataToHybrisById(subscribe, divId, loaderSelector) {
    $.ajax({
        url: subscribe.ajax.url,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        headers: {
            'CSRFToken': $("#CSRFToken").val()
        },
        data: JSON.stringify(
            subscribe.ajax.data
        ),
        error: function() {
            $("#" + divId).html("Błąd pobrania danych z serwera");
        },
        success: function(data) {
            $("#" + divId).html(data.pageHtml);
            config.properties.timer = data.timerDelay * 1000;
            OPL.UI.initModules(document.getElementById(divId));
            blockResendAfterCountTimerInit();
            PubSub.publish('UXEvent.CAAP.Block.Resend');
        },
        complete: function() {
            if (loaderSelector !== null || loaderSelector !== undefined) {
                OPL.UI.fire('modules.loader.hide', $('#' + loaderSelector));
            }
        }
    });

};

function setPageVariantVerification(subscribe, pageVariant) {
    if (pageVariant) {
        subscribe.ajax.data.pageVariant = pageVariant;
    } else {
        subscribe.ajax.data.pageVariant = "DEFAULT_VERIFICATION_OTP_VARIANT";
    }
};

function setGrantToAuthorization(subscribe, grantName) {
    if (grantName) {
        subscribe.ajax.data.grant = grantName;
    } else {
        subscribe.ajax.data.grant = "CONTRACT_CODE";
    }
};

function setAuthorizationType(subscribe, authorizationType) {
    if (authorizationType) {
        subscribe.ajax.data.authorizationType = authorizationType;
    }
}

function setDisableCheckboxShowToAuthorization(subscribe, data) {
    if (data.disableCheckboxShow === false) {
        subscribe.ajax.data.disableCheckboxShow = false;
    } else {
        subscribe.ajax.data.disableCheckboxShow = true;
    }
};

define(['pubsub', 'exports'], function(pubsub, exports) {
    exports.initSubscriber = function(name) {
        var subscribe = grantSubscribers(name);
        subscribe.subscribeToken = PubSub.subscribe(subscribe.name, function(msg, data) {

            if (name === "phoneVerificationInit") {
                setPageVariantVerification(subscribe, data.pageVariant);
            }
            if (name === "additionalAuthorizationInit") {
                setDisableCheckboxShowToAuthorization(subscribe, data);
                setGrantToAuthorization(subscribe, data.grantName);
                setAuthorizationType(subscribe, data.authorizationType)
            }
            if (subscribe.ajax.type === "POST") {
                postDataToHybrisById(subscribe, data.containerId, data.loaderSelector);
            } else if (subscribe.ajax.type === "GET") {
                getDataFromHybrisById(subscribe, data.containerId);
            }
        });
    };
    exports.runPublisher = function(name) {
        var publisher = grantPublishers(name);
        PubSub.publish(publisher.name);
    };
    exports.runChooseMethodLoader = function(pageHtml) {
        var loaderData = {
            divId: 'chooseAuthorizationLoader',
            pageHtml: pageHtml
        };
        OPL.UI.fire(OPL.UI.EVENTS.modules.loader.show, loaderData, 'chooseAuthorizationLoader');
    };
    exports.blockResendAfterCountTimerInit = function() {
        blockResendAfterCountTimerInit();
    };

});