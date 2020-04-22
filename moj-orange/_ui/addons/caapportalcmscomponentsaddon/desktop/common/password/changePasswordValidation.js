define(["exports"], function(exports) {


    var passwordErrors = {
        type: {
            empty: ['EMPTY_PASSWORD', "emptyNewPassword"],
            weak: ['PWORD_WAS_TOO_WEAK', "weakPasswordStrength"],
            blacklist: ['PWORD_WAS_ON_BLACKLIST', "passwordWasOnBlackList"],
            long: ['PWORD_TOO_LONG', "passwordTooLong"],
            forbiddenSymbols: ['PWORD_CONTAINS_FORBIDDEN_SYMBOLS', "passwordContainsForbiddenSymbols"],
            unknowError: ['ERROR', "changePasswordUnknownError"]
        }
    };

    var passwordGlobalErrors = {
        type: {
            userNotFound: ['USER_WAS_NOT_FOUND', "userNotFoundGlobalError"],
            oldPasswordRecently: ['PWORD_WAS_RECENTLY_USED', "oldPasswordWasRecentlyUsedGlobalError"],
            weak: ['PWORD_WAS_TOO_WEAK', "passwordWasTooWeakGlobalError"],
            blacklist: ['PWORD_WAS_ON_BLACKLIST', "passwordWasOnBlackListGlobalError"],
            containsLogin: ['PWORD_CONTAINS_LOGIN', "passwordContainsLoginGlobalError"],
            long: ['PWORD_TOO_LONG', "passwordTooLongGlobalError"],
            forbiddenSymbols: ['PWORD_CONTAINS_FORBIDDEN_SYMBOLS', "passwordContainsForbiddenSymbolsGlobalError"],
            notDifferentEnough: ['PWORD_IS_NOT_DIFFERENT_ENOUGH', "passwordIsNotDifferentEnoughGlobalError"],
            unknowError: ['ERROR', "changePasswordUnknownGlobalError"],
            invalidOldPassword: ['OLD_PASSWORD_INVALID', "oldPasswordIsInvalidGlobalError"]
        }
    };
    /**
     * @return {boolean} true if password input is empty
     */
    exports.isPasswordEmpty = function() {
        var password = $("#password-field").val();
        return password.length < 1;
    };

    /**
     * @return {boolean} true if password is valid by validator
     */
    exports.isPasswordValidByValidator = function() {
        var result = true;
        $('.opl-password-validator__conditions').children().each(function() {
            console.log($(this).hasClass('success'));
            if (!($(this).hasClass('success'))) {
                result = false;
            }
        });
        return result;
    };

    /**
     * @return {boolean} true if old password input is empty
     */
    exports.isOldPasswordEmpty = function() {
        var password = $("#oldPassword").val();
        return password.length < 1;
    };


    exports.isPasswordValid = function() {
        var isPasswordValidResponse;
        $.ajax({
            async: false,
            url: portalContextPath + '/checkPasswordStrength',
            type: 'POST',
            dataType: "json",
            headers: {
                'CSRFToken': $("#CSRFToken").val()
            },
            data: JSON.stringify({
                password: $("#password-field").val()
            }),
            contentType: "application/json",
            error: function() {
                isPasswordValidResponse = {
                    status: 'ERROR',
                    passwordValid: false
                };
                hideOrShowDiv($("#changePasswordUnknownError"), true);
            },
            success: function(passwordStrengthResponse) {
                isPasswordValidResponse = passwordStrengthResponse;
            }
        });
        return isPasswordValidResponse;
    };

    /**
     * @return {boolean} true if password input is empty
     */
    exports.isRepeatPasswordEmpty = function() {
        var password = $("#repeatNewPassword").val();
        return password.length < 1;
    };

    /**
     * @return {boolean} true fi repeated password is the same as new password
     */
    exports.isRepeatPasswordSameAsNewPassword = function() {
        var password = $("#password-field").val();
        var repeatNewPassword = $("#repeatNewPassword").val();
        return password === repeatNewPassword;
    };

    exports.clearOldPasswordValidation = function() {
        var emptyOldPassword = $("#emptyOldPassword");
        var incorrectOldPassword = $("#incorrectOldPassword");
        hideOrShowDiv(emptyOldPassword, false);
        hideOrShowDiv(incorrectOldPassword, false);
        if ($("#oldPassword").hasClass("error")) {
            $("#oldPassword").removeClass("error");
        }

    };

    exports.clearNewPasswordValidation = function() {
        var passwordInput = $("#password-field");
        var passwordIsValidResponse = {
            status: 'hide'
        };
        var errorMainDiv = $("#errorAfterWritePassword");
        hideOrShowAllError(passwordErrors, passwordIsValidResponse);
        hideOrShowDiv(errorMainDiv, false);
        if (passwordInput.hasClass("error")) {
            passwordInput.removeClass("error");
        }
    };

    exports.clearRepeatNewPasswordValidation = function() {
        var emptyRepeatNewPassword = $("#emptyRepeatNewPassword");
        var weakRepeatPasswordStrength = $("#weakRepeatPasswordStrength");
        var repeatPasswordDiffersFromNewPassword = $("#repeatPasswordDiffersFromNewPassword");

        hideOrShowDiv(emptyRepeatNewPassword, false);
        hideOrShowDiv(weakRepeatPasswordStrength, false);
        hideOrShowDiv(repeatPasswordDiffersFromNewPassword, false);
        if ($("#repeatNewPassword").hasClass("error")) {
            $("#repeatNewPassword").removeClass("error");
        }
    };

    exports.hideErrorBox = function() {
        hideOrShowDiv($("#validationErrorBox"), false);
    }



    exports.showOldPasswordValidationIfNeeded = function() {
        var emptyPasswordMessageDiv = $("#emptyOldPassword");
        var passwordInput = $("#oldPassword");
        var passwordIsNotEmpty = !exports.isOldPasswordEmpty();
        if (passwordIsNotEmpty) {
            hideOrShowDiv(emptyPasswordMessageDiv, false);
        } else {
            hideOrShowDiv(emptyPasswordMessageDiv, true);
            if (!passwordInput.hasClass("error")) {
                passwordInput.addClass("error");
            }
        }
        return passwordIsNotEmpty;
    };

    exports.showNewPasswordValidationIfNeeded = function() {
        var errorMainDiv = $("#errorAfterWritePassword");
        var emptyPasswordMessageDiv = $("#emptyNewPassword");
        var passwordInput = $("#password-field");
        var passwordIsNotEmpty = !exports.isPasswordEmpty();
        var passwordIsValidResponse;
        var isValidByValidator;
        if (passwordIsNotEmpty) {
            hideOrShowDiv(errorMainDiv, false);
            hideOrShowDiv(emptyPasswordMessageDiv, false);
            isValidByValidator = exports.isPasswordValidByValidator();

            if (isValidByValidator) {
                passwordIsValidResponse = exports.isPasswordValid();

                if (passwordIsValidResponse.passwordValid) {
                    exports.clearNewPasswordValidation();
                } else {
                    hideOrShowDiv(errorMainDiv, true);
                    hideOrShowAllError(passwordErrors, passwordIsValidResponse);

                    if (!passwordInput.hasClass("error")) {
                        passwordInput.addClass("error");
                    }
                }
            } else {
                hideOrShowDiv(errorMainDiv, true);
                hideOrShowDiv($('#weakPasswordStrength'), true);
            }
        } else {
            hideOrShowDiv(errorMainDiv, true);
            passwordIsValidResponse = {
                status: 'EMPTY_PASSWORD'
            };
            hideOrShowAllError(passwordErrors, passwordIsValidResponse);
            if (!passwordInput.hasClass("error")) {
                passwordInput.addClass("error");
            }
        }
        if (isValidByValidator != null) {
            return passwordIsNotEmpty && isValidByValidator;
        } else if (passwordIsValidResponse != null) {
            return passwordIsNotEmpty && passwordIsValidResponse.passwordValid;
        } else {
            return true;
        }
    };

    exports.showRepeatNewPasswordValidationIfNeeded = function() {
        var emptyPasswordMessageDiv = $("#emptyRepeatNewPassword");
        var passwordDifferentValueMessageDiv = $("#repeatPasswordDiffersFromNewPassword");
        var passwordInput = $("#repeatNewPassword");
        var passwordIsNotEmpty = !exports.isRepeatPasswordEmpty();
        var passwordIsValid = false;
        if (passwordIsNotEmpty) {
            hideOrShowDiv(emptyPasswordMessageDiv, false);
            passwordIsValid = exports.isRepeatPasswordSameAsNewPassword();
            if (passwordIsValid) {
                hideOrShowDiv(passwordDifferentValueMessageDiv, false);
                if (passwordInput.hasClass("error")) {
                    passwordInput.removeClass("error");
                }
            } else {
                hideOrShowDiv(passwordDifferentValueMessageDiv, true);
                if (!passwordInput.hasClass("error")) {
                    passwordInput.addClass("error");
                }
            }
        } else {
            hideOrShowDiv(emptyPasswordMessageDiv, true);
            hideOrShowDiv(passwordDifferentValueMessageDiv, false);
            if (!passwordInput.hasClass("error")) {
                passwordInput.addClass("error");
            }
        }
        return passwordIsNotEmpty && passwordIsValid;
    };

    exports.showValidationMessagesFromCaap = function(resetPasswordResponse) {
        var validationErrorBoxDiv = $("#validationErrorBox");
        if (resetPasswordResponse.status === 'OK') {
            hideOrShowDiv(validationErrorBoxDiv, false);
        } else {
            hideOrShowDiv(validationErrorBoxDiv, true);
            hideOrShowAllError(passwordGlobalErrors, resetPasswordResponse);
        }
    };

    function hideOrShowAllError(error, response) {
        $.each(error.type, function(i) {
            hideOrShowValidation(error.type[i][0], $("#" + error.type[i][1]), response);
            if ('PWORD_WAS_RECENTLY_USED' === error.type[i][0]) {
                $('#oldPasswordWasRecentlyUsedGlobalError').text(response.statusMessage);
            }
        });
    }

    function hideOrShowValidation(statusToCheck, div, response) {
        if (statusToCheck === response.status) {
            if (div.hasClass("u-acc-hide")) {
                div.removeClass("u-acc-hide");
            }
        } else {
            if (!div.hasClass("u-acc-hide")) {
                div.addClass("u-acc-hide");
            }
        }
    }

    function hideOrShowDiv(div, show) {
        if (show) {
            if (div.hasClass("u-acc-hide")) {
                div.removeClass("u-acc-hide");
            }
        } else {
            if (!div.hasClass("u-acc-hide")) {
                div.addClass("u-acc-hide");
            }
        }
    }

});