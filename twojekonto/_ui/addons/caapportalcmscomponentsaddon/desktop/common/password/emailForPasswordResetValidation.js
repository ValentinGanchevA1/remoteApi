define(["exports"], function(exports) {

    /**
     * @return {boolean} true if email input is empty
     */
    exports.isEmailEmpty = function() {
        var email = $("input[name='email']").val();
        return email.length < 1;
    };

    /**
     * Warning: This method must be executed synchronously.
     * Otherwise email regexp parametrisation in hybris config is not possible.
     *
     * @return {boolean} true if email is valid otherwise false
     */
    exports.isEmailValid = function() {
        var email = $("input[name='email']").val();
        var emailIsValid = false;
        $.ajax({
            url: bsfContextPath + '/emailValidation?emailValue=' + encodeURIComponent(email),
            type: "GET",
            async: false,
            dataType: "json",
            contentType: "application/json",
            error: function() {
                emailIsValid = false;
            },
            success: function(data) {
                emailIsValid = (data.status === 'EMAIL_IS_VALID');
            }
        });
        return emailIsValid;
    };

    exports.clearEmailValidation = function() {
        if (!$("#emailIncorrectFormat").hasClass("display-none")) {
            $("#emailIncorrectFormat").addClass("display-none");
            $("#email").removeClass("error");
        }
        if (!$("#emptyEmail").hasClass("display-none")) {
            $("#emptyEmail").addClass("display-none");
            $("#email").removeClass("error");
        }
        if (!$("#noAccountForThisEmail").hasClass("display-none")) {
            $("#noAccountForThisEmail").addClass("display-none");
            $("#email").removeClass("error");
        }
        if (!$("#submitResetPasswordForm").is('[disabled=disabled]')) {
            $("#submitResetPasswordForm").addClass("o-modal__trigger");
        }
    };

    exports.showEmailValidationIfNeeded = function() {
        var emptyEmailMessageDiv = $("#emptyEmail");
        var emailIncorrectFormatMessageDiv = $("#emailIncorrectFormat");
        var emailInput = $("input[name='email']");
        var emailIsNotEmpty = !exports.isEmailEmpty();
        var emailIsValid = false;

        if (emailIsNotEmpty) {
            if (!emptyEmailMessageDiv.hasClass("display-none")) {
                emptyEmailMessageDiv.addClass("display-none");
            }
            emailIsValid = exports.isEmailValid();
            if (emailIsValid) {
                if (!emailIncorrectFormatMessageDiv.hasClass("display-none")) {
                    emailIncorrectFormatMessageDiv.addClass("display-none");
                }
                if (emailInput.hasClass("error")) {
                    emailInput.removeClass("error");
                }
            } else {
                if (emailIncorrectFormatMessageDiv.hasClass("display-none")) {
                    emailIncorrectFormatMessageDiv.removeClass("display-none");
                }
                if (!emailInput.hasClass("error")) {
                    emailInput.addClass("error");
                }
            }
        } else {
            if (emptyEmailMessageDiv.hasClass("display-none")) {
                emptyEmailMessageDiv.removeClass("display-none");
            }
            if (!emailIncorrectFormatMessageDiv.hasClass("display-none")) {
                emailIncorrectFormatMessageDiv.addClass("display-none");
            }
            if (!emailInput.hasClass("error")) {
                emailInput.addClass("error");
            }
        }
        if (!emailIsNotEmpty || !emailIsValid) {
            $("#submitResetPasswordForm").removeClass("o-modal__trigger");
        }
        exports.hideNoAccountForThisEmail();

        return emailIsNotEmpty && emailIsValid;
    };

    exports.showNoAccountForThisEmail = function() {
        var noAccountForThisEmailDiv = $("#noAccountForThisEmail");
        var registerAccountLink = $("#registerAccountLink");
        if (noAccountForThisEmailDiv.hasClass("display-none")) {
            noAccountForThisEmailDiv.removeClass("display-none");
        }
        registerAccountLink.attr("href", window.location.origin + "/twojekonto/rejestracja");
    };
    exports.hideNoAccountForThisEmail = function() {
        var noAccountForThisEmailDiv = $("#noAccountForThisEmail");
        if (!noAccountForThisEmailDiv.hasClass("display-none")) {
            noAccountForThisEmailDiv.addClass("display-none");
        }
    };

    exports.hideOrShowValidation = function(div, show) {
        if (show) {
            if (div.hasClass("display-none")) {
                div.removeClass("display-none");
            }
        } else {
            if (!div.hasClass("display-none")) {
                div.addClass("display-none");
            }
        }
    }

});