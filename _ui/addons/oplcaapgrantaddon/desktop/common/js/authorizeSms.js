var verifyController;

var validateInputForAuthorize = function(enteredNumber) {
    var numberValidator = new RegExp('^[0-9]{9}$');
    return numberValidator.test(enteredNumber);
};

UX.require(['grants/pubsubevents', 'grants/utils'], function(pubsubevents, utils) {
    var verifySms = function() {};
    var authorizationDefaultNumber;
    var clearMessage = function(utils) {
        utils.hideAndClearDivIfNeeded('numberPhoneError', '', false);
        utils.hideAndClearDivIfNeeded('otpError', '', false);
        utils.hideAndClearDivIfNeeded('otpInfo', '', false);
    };

    var sendOtpAgain = function(utils, getDataJson, url, pubsubevents) {
        return function(pageVariant) {
            var done = function(data) {
                if (data.status === 'OK') {
                    utils.hideAndClearDivIfNeeded('otpInfo', data.statusMessage, true);
                    $("#resendText").addClass("u-acc-hide");
                    if (data.otpCounterValue !== '') {
                        $("#otpCounterValue").text(data.otpCounterValue);
                    }
                    utils.hideAndClearDivIfNeeded('numberPhoneError', data.statusMessage, false);
                    authorizationDefaultNumber = $("#PHONE_NUMBER").val();
                    pubsubevents.blockResendAfterCountTimerInit();
                    pubsubevents.runPublisher('blockResendAfterCountTimer');
                } else {
                    utils.hideAndClearDivIfNeeded('numberPhoneError', data.statusMessage, true);
                    if (pageVariant === "VERIFICATION_OTP_VARIANT_5_MIGRATION_PHONE" && data.status === "BLOCKED_OTP") {
                        $("#resendText").addClass("u-acc-hide");
                    }
                }
            };
            $("#OTP_CODE").val("");
            clearMessage(utils);
            utils.ajaxPostWithData(url, getDataJson(pageVariant), done);
            window.event.preventDefault();
        };
    };

    verifySms.prototype.onKeyupCheckInput = function() {
        if ($("#OTP_CODE").val() === "") {
            $('#submitSmsCodeButton').attr("disabled", true);
        } else {
            $('#submitSmsCodeButton').attr("disabled", false);
        }
    };

    verifySms.prototype.onClickSubmitOtp = function(processStep) {
        var codeOtp = $("#OTP_CODE").val();
        var requestToken = $("#CAAP_REQUEST_TOKEN").val();
        var url = grantContextPath + "/verifyMSISDN/verify";
        $('#submitSmsCodeButton').attr("disabled", true);
        var data = JSON.stringify({
            "verificationToken": requestToken,
            "verificationParameters": {
                "OTP_CODE": codeOtp,
                "PROCESS_STEP": processStep,
                "PHONE_NUMBER": authorizationDefaultNumber
            }
        });
        OPL.UI.fire('modules.loader.show', $("#verificationLoader"), 'verificationLoader');
        var done = function(data) {
            if (data.status === 'OK') {
                pubsubevents.runPublisher('phoneVerificationCompleted');
            } else if (data.status === 'caap.additional.authorization.otp.blocked') {
                utils.hideAndClearDivIfNeeded('otpError', data.statusMessage, true);
                $("#fillOtpMessage").remove();
                $("#otpResendOtpRow").remove();
                $("#otpInputRow").remove();
                utils.hideAndClearDivIfNeeded('blockedOtpMessage', data.statusMessage, true);
            } else {
                utils.hideAndClearDivIfNeeded('otpError', data.statusMessage, true);
                $("#submitSmsCodeButton").removeClass("opl-btn-disabled");
            }
            OPL.UI.fire('modules.loader.hide', $("#verificationLoader"), 'verificationLoader');
        };
        clearMessage(utils);
        utils.ajaxPostWithData(url, data, done);
    };

    verifySms.prototype.onClickGoBack = function() {
        pubsubevents.runPublisher("phoneVerificationBack");
    };

    verifySms.prototype.onClickGoBackToMsisdnLogin = function() {
        window.location.href = "/twojekonto/zaloguj";
    };

    verifySms.prototype.onClickSubmitMsisdnLoginOtp = function(processStep) {
        var codeOtp = $("#OTP_CODE").val();
        if (!codeOtp) {
            utils.hideAndClearDivIfNeeded('otpError', "Wpisz kod, żeby przejść dalej", true);
            return;
        }
        var caapId = $("#CAAP_ID").val();
        var requestToken = $("#CAAP_REQUEST_TOKEN").val();
        var url = grantContextPath + "/verifyMSISDN/verify";
        var loginUrl = grantContextPath + "/login";
        $('#submitSmsCodeButton').attr("disabled", true);
        var data = JSON.stringify({
            "verificationToken": requestToken,
            "caapId": caapId,
            "verificationParameters": {
                "OTP_CODE": codeOtp,
                "PROCESS_STEP": processStep,
                "PHONE_NUMBER": authorizationDefaultNumber
            }
        });
        OPL.UI.fire('modules.loader.show', $("#verificationLoader"), 'verificationLoader');
        var done = function(data) {
            $("#resendText").removeClass("u-acc-hide");
            if (data.status === 'OK') {
                performLogin();
            } else if (data.status === 'caap.msisdn.login.blocked.otp.message') {
                $('#msisdnLoginDiv').addClass("u-acc-hide");
                $('#blockedUserDiv').removeClass("u-acc-hide");
            } else {
                $('#otpError').empty();
                $('#otpError').append(data.statusMessage);
                $('#otpError').removeClass("u-acc-hide");
            }
            OPL.UI.fire('modules.loader.hide', $("#verificationLoader"), 'verificationLoader');
        };
        clearMessage(utils);
        utils.ajaxPostWithData(url, data, done);
    };

    function performLogin() {
        var msisdn = $("#PHONE_NUMBER").val().replace(/\s/g, '');
        $.ajax({
            url: "/twojekonto/login/msisdn?msisdn=" + msisdn,
            method: "POST",
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            error: function() {
                utils.hideAndClearDivIfNeeded('otpError', "Błąd połączenia", true);
            },
            success: function(data) {
                window.location.href = data.redirectUrl;
            }
        })
    }

    verifySms.prototype.onClickGoBack = function() {
        pubsubevents.runPublisher("phoneVerificationBack");
    };

    verifySms.prototype.onKeyUpPhoneNumber = function() {
        if (validateInputForAuthorize($("#PHONE_NUMBER").val().replace(/ /g, ''))) {
            $("#resendOTPLink").removeClass("u-text-decoration-none g-black1-c");
        } else {
            utils.hideAndClearDivIfNeeded('numberPhoneError', '', false);
            $("#resendOTPLink").addClass("u-text-decoration-none g-black1-c");
        }
    };

    verifySms.prototype.onClickSendOtpAgain = sendOtpAgain(utils,
        (function(pageVariant) {
            return JSON.stringify({
                "requestToken": $("#CAAP_REQUEST_TOKEN").val(),
                "pageVariant": pageVariant
            });
        }), grantContextPath + "/resendOtp", pubsubevents
    );

    verifySms.prototype.onClickSendMsisdnLoginOtpAgain = sendOtpAgain(utils,
        (function(pageVariant) {
            return JSON.stringify({
                "requestToken": $("#CAAP_REQUEST_TOKEN").val(),
                "caapId": $("#CAAP_ID").val(),
                "pageVariant": pageVariant
            });
        }), grantContextPath + "/resendOtp", pubsubevents
    );

    verifySms.prototype.onClickSendOtpWithPhoneAgain = function(pageVariant) {
        if (validateInputForAuthorize($("#PHONE_NUMBER").val().replace(/ /g, ''))) {
            var sendFunction = sendOtpAgain(utils,
                (function(pageVariant) {
                    return JSON.stringify({
                        "requestToken": $("#CAAP_REQUEST_TOKEN").val(),
                        "newPhoneNumber": $("#PHONE_NUMBER").val(),
                        "pageVariant": pageVariant
                    });
                }), grantContextPath + "/resendMigrationPhoneVerification", pubsubevents);
            sendFunction(pageVariant);
        }
    };

    UX.use(function() {
        pubsubevents.initSubscriber("phoneVerificationInit");
        verifyController = new verifySms();
    });
});