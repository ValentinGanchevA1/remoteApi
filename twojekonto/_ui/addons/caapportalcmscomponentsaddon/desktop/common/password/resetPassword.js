UX.require(["portal/password/resetPasswordValidation", "portal/inputUtil"], function(resetPasswordValidation, inputUtil) {

    UX.use(function() {

        $("#resetPasswordForm").focus();

        $('#resetPasswordButton').on('click', function() {
            var newPasswordIsValid = resetPasswordValidation.showNewPasswordValidationIfNeeded();
            var repeatNewPasswordIsValid = resetPasswordValidation.showRepeatNewPasswordValidationIfNeeded();
            var pass = newPasswordIsValid && repeatNewPasswordIsValid;
            if (pass) {
                var $resetPasswordForm = $("#resetPasswordForm");
                $resetPasswordForm.attr("disabled", true);
                $("#resetPasswordButton").attr("disabled", true);
                OPL.UI.fire('modules.loader.show', $('#loaderResetPasswordOTP'), 'loaderResetPasswordOTP');
                $.ajax({
                    url: "/twojekonto/resetPassword",
                    type: "POST",
                    dataType: "json",
                    data: JSON.stringify({
                        otp: $("#passwordResetOTP").val(),
                        newPassword: $("#password-field").val()
                    }),
                    contentType: "application/json",
                    error: function(jqXHR) {
                        var resetPasswordResponse = JSON.parse(jqXHR.responseText);
                        resetPasswordValidation.showValidationMessagesFromCaap(resetPasswordResponse);
                    },
                    success: function(resetPasswordResponse) {
                        if (resetPasswordResponse.status === 'OK') {
                            if ('' !== resetPasswordResponse.backUrl) {
                                window.location.href = resetPasswordResponse.backUrl;
                            }
                            $("#resetPasswordForm").attr("disabled", false);
                            $("#resetPasswordButton").attr("disabled", false);
                        } else {
                            resetPasswordValidation.showValidationMessagesFromCaap(resetPasswordResponse);
                        }
                    },
                    complete: function() {
                        OPL.UI.fire('modules.loader.hide', $('#loaderResetPasswordOTP'), 'loaderResetPasswordOTP');
                        $("#resetPasswordForm").attr("disabled", false);
                        $("#resetPasswordButton").attr("disabled", false);
                    }
                });
            }
        });

        inputUtil.inputEvent("#password-field", resetPasswordValidation.clearNewPasswordValidation, resetPasswordValidation.showNewPasswordValidationIfNeeded);
        inputUtil.inputEvent("#repeat-password-field", resetPasswordValidation.clearRepeatNewPasswordValidation,
            resetPasswordValidation.showRepeatNewPasswordValidationIfNeeded);
    });

});