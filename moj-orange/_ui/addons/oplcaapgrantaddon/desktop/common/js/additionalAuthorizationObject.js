define(['exports', 'grants/pubsubevents', 'grants/utils'], function(exports, pubsubevents, utils) {
    function checkboxUseAndSetValue(nameDiv) {
        if (nameDiv.prop("checked")) {
            nameDiv.prop("checked", false);
            nameDiv.val();
        } else {
            nameDiv.prop("checked", true);
            nameDiv.val(false);
        }
    }

    function getCheckedValueIfExisted(documentElement) {
        if (documentElement !== null) {
            return !documentElement.checked;
        } else {
            return null;
        }
    }

    function clearMessage(utils) {
        utils.hideAndClearDivIfNeeded('otpError', '', false);
        utils.hideAndClearDivIfNeeded('otpInfo', '', false);
    }

    var additionalAuthorize = function() {

    };

    additionalAuthorize.prototype.chooseMethodSubmit = function(methodName) {
        var requestToken = $("#CAAP_REQUEST_TOKEN").val();
        var url = grantContextPath + "/grant/authorize";
        var data = JSON.stringify({
            "requestToken": requestToken,
            "methodName": methodName
        });
        var done = function(data) {
            if (data.status === 'ANOTHER_STEP_REQUIRED') {
                pubsubevents.runChooseMethodLoader(data.pageHtml);
            } else {
                utils.hideAndClearDivIfNeeded('generalError', data.statusMessage, true);
            }
        };
        utils.ajaxPostWithData(url, data, done);
    };

    additionalAuthorize.prototype.onClickDisableAuthorization = function() {
        checkboxUseAndSetValue($("#disableAuthorization"));
    };

    additionalAuthorize.prototype.onClickSubmitOtp = function() {
        var codeOtp = $("#OTP_CODE").val();
        var requestToken = $("#CAAP_REQUEST_TOKEN").val();
        var url = grantContextPath + "/grant/authorize";
        var data = JSON.stringify({
            "requestToken": requestToken,
            "authorizationParameters": {
                "OTP_CODE": codeOtp,
                "ADD_AUTHORIZATION_STATUS": getCheckedValueIfExisted(document.getElementById('disableAuthorization'))
            }
        });
        OPL.UI.fire('modules.loader.show', $("#additionalAuthorizationLoader"), 'additionalAuthorizationLoader');
        var done = function(data) {
            if (data.status === 'OK') {
                pubsubevents.runPublisher("additionalAuthorizationCompleted");
            } else if (data.status === 'BLOCKED_OTP') {
                utils.hideAndClearDivIfNeeded('otpError', data.statusMessage, true);
                $('#OTP_CODE').attr('disabled', 'disabled');
                $('#authorizeButton').attr('disabled', 'disabled');
                $('#sendAgainAuthorizationOtpLink').attr('disabled', 'disabled');
            } else {
                utils.hideAndClearDivIfNeeded('otpError', data.statusMessage, true);
            }
            OPL.UI.fire('modules.loader.hide', $("#additionalAuthorizationLoader"), 'additionalAuthorizationLoader');
        };
        clearMessage(utils);
        utils.ajaxPostWithData(url, data, done);
    };

    additionalAuthorize.prototype.onClickGoBack = function() {
        pubsubevents.runPublisher("additionalAuthorizationBack");
    };

    additionalAuthorize.prototype.onClickSendOtpAgain = function(pageVariant) {
        if ($('#sendAgainAuthorizationOtpLink').attr('disabled') !== 'disabled') {
            var requestToken = $("#CAAP_REQUEST_TOKEN").val();
            var url = grantContextPath + "/resendOtp";
            var data = JSON.stringify({
                "requestToken": requestToken,
                "pageVariant": pageVariant
            });
            var done = function(data) {
                if (data.status === 'OK') {
                    utils.hideAndClearDivIfNeeded('otpInfo', data.statusMessage, true);
                    $("#resendText").addClass("u-acc-hide");
                    if (data.otpCounterValue !== '') {
                        $("#otpCounterValue").text(data.otpCounterValue);
                    }
                    pubsubevents.runPublisher("blockResendAfterCountTimer");
                } else {
                    utils.hideAndClearDivIfNeeded('otpError', data.statusMessage, true);
                }
            };
            $("#OTP_CODE").val("");
            clearMessage(utils);
            utils.ajaxPostWithData(url, data, done);
            window.event.preventDefault();
        }
    };

    exports.createAuthorizationObject = function() {
        return new additionalAuthorize();
    };

});