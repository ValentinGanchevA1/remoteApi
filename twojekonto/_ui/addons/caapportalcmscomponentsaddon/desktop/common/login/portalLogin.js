document.addEventListener("framework.ready", function() {
    UX.require(["portal/portalLoginValidation", "portal/inputUtil"],
        function(portalLoginValidation, inputUtil) {
            var loginUserForm = $("#loginUserForm");
            var emailInput = $("#email");
            var remindPasswordLink = $("#remindPasswordLink");

            loginUserForm.on('submit', function(e) {
                var isEmailFieldValid = portalLoginValidation.validateEmailField();
                var isPasswordFieldValid = portalLoginValidation.validatePasswordField();
                var span = $(this).parent().find('.o-validation-mark');

                if (isEmailFieldValid && isPasswordFieldValid) {
                    $("#submitLoginForm").attr("disabled", true);
                    span.removeClass("o-validation-mark--error");

                } else {
                    e.preventDefault();
                    span.addClass("o-validation-mark--error");
                    span.removeClass("o-validation-mark--success");
                }
            });

            inputUtil.inputEvent("input[name='email']",
                portalLoginValidation.clearEmailValidation,
                portalLoginValidation.validateEmailField,
                true
            );

            inputUtil.inputEvent("input[name='password']",
                portalLoginValidation.clearPasswordValidation,
                portalLoginValidation.validatePasswordField,
                true
            );

            remindPasswordLink.on('click', function(e) {
                var email = emailInput.val();
                var portalResetPasswordUrl = $("#portalResetPasswordUrl").val();
                if (email !== null && email !== '') {
                    window.location.href = portalResetPasswordUrl + "?email=" + email;
                } else {
                    window.location.href = portalResetPasswordUrl;
                }
            });
        });
});