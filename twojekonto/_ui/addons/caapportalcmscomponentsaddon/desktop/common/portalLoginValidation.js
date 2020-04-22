define(["exports", "portal/validationUtil"], function(exports, validationUtil) {

    var globalErrorMessagesDiv = $("#errorMessages");
    var emailErrorsDiv = $("#emailErrors");
    var passwordErrorsDiv = $("#passwordErrors");
    var loginErrorsDiv = $("#loginErrors");
    var floatingEmail = $("#floatingEmail");

    var emailInput = $("input[name='email']");
    var passwordInput = $("input[name='password']");
    var customerLoginInput = $('#customer_login');

    var handleEmptyLoginField = function() {
        var emptyLoginMessageDiv = $("#loginCannotBeEmpty");
        validationUtil.hide(globalErrorMessagesDiv);
        validationUtil.hide(loginErrorsDiv.find(".opl-msg"));
        validationUtil.show(emptyLoginMessageDiv);
        validationUtil.addInputError(customerLoginInput);
        return false;
    };

    var handleEmailLoginField = function() {
        var emailIncorrectFormatMessageDiv = $("#emailIncorrectFormat");
        if (!validationUtil.isEmailValid(customerLoginInput)) {
            validationUtil.hide(globalErrorMessagesDiv);
            validationUtil.hide(loginErrorsDiv.find(".opl-msg"));
            validationUtil.show(emailIncorrectFormatMessageDiv);
            validationUtil.addInputError(customerLoginInput);
            return false;
        }
        return true;
    };

    var handleOtherLoginField = function() {
        var loginIncorrectFormatMessageDiv = $("#loginIncorrectFormat");
        validationUtil.hide(globalErrorMessagesDiv);
        validationUtil.hide(loginErrorsDiv.find(".opl-msg"));
        validationUtil.show(loginIncorrectFormatMessageDiv);
        validationUtil.addInputError(customerLoginInput);
        return false;
    };

    exports.validateEmailField = function() {
        var emptyEmailMessageDiv = $("#emailCannotBeEmpty");
        var emailIncorrectFormatMessageDiv = $("#emailIncorrectFormat");
        var isEmailValid = false;

        var isEmailEmpty = validationUtil.isFieldEmpty(emailInput);
        if (isEmailEmpty) {
            validationUtil.hide(globalErrorMessagesDiv);
            validationUtil.hide(emailErrorsDiv.find(".opl-msg"));
            validationUtil.show(emptyEmailMessageDiv);
            validationUtil.addInputError(emailInput);
            validationUtil.addInputError(floatingEmail);
        } else {
            emailInput.val(emailInput.val().trim());
            isEmailValid = validationUtil.isEmailValid(emailInput);
            if (!isEmailValid) {
                validationUtil.hide(globalErrorMessagesDiv);
                validationUtil.hide(emailErrorsDiv.find(".opl-msg"));
                validationUtil.show(emailIncorrectFormatMessageDiv);
                validationUtil.addInputError(emailInput);
                validationUtil.addInputError(floatingEmail);
            }
        }
        return !isEmailEmpty && isEmailValid;
    };

    exports.validatePasswordField = function() {
        var emptyPasswordMessageDiv = $("#passwordCannotBeEmpty");

        var isPasswordEmpty = validationUtil.isFieldEmpty(passwordInput);

        if (isPasswordEmpty) {
            validationUtil.hide(globalErrorMessagesDiv);
            validationUtil.hide(passwordErrorsDiv.find(".opl-msg"));
            validationUtil.show(emptyPasswordMessageDiv);
            validationUtil.addInputError(passwordInput);
        }
        return !isPasswordEmpty;
    };

    exports.validateLoginField = function() {
        var loginValidator = new RegExp("^[a-zA-Z0-9 ]{5,}$");
        customerLoginInput.val(customerLoginInput.val().toLowerCase().trim());
        if (validationUtil.isFieldEmpty(customerLoginInput)) {
            return handleEmptyLoginField();
        } else if (customerLoginInput.val().includes('@')) {
            return handleEmailLoginField();
        } else if (loginValidator.test(customerLoginInput.val())) {
            return true;
        } else {
            return handleOtherLoginField();
        }
    };

    exports.clearEmailValidation = function() {
        validationUtil.hide($('#emailErrors').find('.opl-msg'));
        validationUtil.removeInputError(emailInput);
        validationUtil.removeInputError(floatingEmail);
    };

    exports.clearPasswordValidation = function() {
        validationUtil.hide($('#passwordErrors').find('.opl-msg'));
        validationUtil.removeInputError(passwordInput);
    };

    exports.addGlobalError = function(errorMessage) {
        validationUtil.hide($('#loginErrors').find('.opl-msg'));
        globalErrorMessagesDiv.text(errorMessage);
        validationUtil.show(globalErrorMessagesDiv);
        validationUtil.addInputError(customerLoginInput);
    };

    exports.clearLoginValidation = function() {
        validationUtil.hide($('#loginErrors').find('.opl-msg'));
        validationUtil.hide(globalErrorMessagesDiv);
        globalErrorMessagesDiv.val("");
        validationUtil.removeInputError(customerLoginInput);
    };

});