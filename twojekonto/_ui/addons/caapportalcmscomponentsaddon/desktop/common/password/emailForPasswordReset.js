UX.require(["portal/password/emailForPasswordResetValidation", "portal/inputUtil"], function(emailForPasswordResetValidation, inputUtil) {

    UX.use(function() {

        $("#email").focus();

        $("#submitResetPasswordForm,#sendEmailAgain").on("click", function(event) {
            var $this = this;
            var emailIsValid = emailToResetIsValid();
            if (emailIsValid) {
                $.ajax({
                    url: $("#resetPasswordForm").attr("action"),
                    type: $("#resetPasswordForm").attr("method"),
                    dataType: "json",
                    data: $("#resetPasswordForm").serialize(),
                    error: function(jqXHR) {
                        if ($this.id == "submitResetPasswordForm") emailForPasswordResetValidation.hideOrShowValidation($("#unknowError"), true);
                        if ($this.id == "sendEmailAgain") emailForPasswordResetValidation.hideOrShowValidation($("#sendEmailAgainErrorMessage"), true);
                    },
                    success: function(data) {
                        if ($this.id == "submitResetPasswordForm") {
                            emailForPasswordResetValidation.hideOrShowValidation($("#unknowError"), false);
                            var resetPasswordResponse = data.status;
                            $("#resetPassword").addClass("display-none");
                            var email = $("#email").val();
                            sendEmailAgainDisableButton();
                            if (resetPasswordResponse === 'NEW_USER_RESEND_MAIL') {
                                $("#resendEmailNewUser").removeClass("display-none");
                                $("#resendEmail").text(email);
                            } else {
                                $("#successSendResetPasswordEmail").removeClass("display-none");
                                var emailCurrentValue = $("#emailValue");
                                emailCurrentValue.html(email);
                            }
                        }
                        if ($this.id == "sendEmailAgain") {
                            event.preventDefault();
                            emailForPasswordResetValidation.hideOrShowValidation($("#sendEmailAgainErrorMessage"), false);
                            $("#sendEmailAgainMessage").addClass("display-none");
                            $("#emailWasSend").removeClass("display-none");
                            sendEmailAgainClick();
                        }
                    }
                });
            }
        });

        function sendEmailAgainDisableButton() {
            $("#sendEmailAgain").css({
                'color': '#ddd',
                'text-decoration': 'none',
                'cursor': 'default',
                'pointer-events': 'none'
            });
            setTimeout(function() {
                $("#sendEmailAgain").css({
                    'color': 'inherit',
                    'text-decoration': 'underline',
                    'cursor': 'pointer',
                    'pointer-events': 'auto'
                });
            }, 1000 * 60);
        }

        function sendEmailAgainClick() {
            $("#emailWasSend span").css({
                "opacity": "1"
            });
            $("#emailWasSend span").animate({
                opacity: 0
            }, 1000 * 60);
            setTimeout(function() {
                $("#sendEmailAgainMessage").removeClass("display-none");
                $("#emailWasSend").addClass("display-none");
            }, 1000 * 60);
        }

        function emailToResetIsValid() {
            var emailIsValid = emailForPasswordResetValidation.showEmailValidationIfNeeded();
            if (emailIsValid) {
                return validatePortalAccountExistance();
            } else {
                return emailIsValid;
            }
        }

        function validatePortalAccountExistance() {
            emailForPasswordResetValidation.clearEmailValidation();
            var email = $("input[name='email']").val();
            var accountExist = false;
            $.ajax({
                url: bsfContextPath + "/account/verifyLogin?email=" + email,
                type: "GET",
                async: false,
                dataType: "json",
                contentType: "application/json",
                error: function() {
                    console.log('Error during verification portal login');
                },
                success: function(data) {
                    if (data.loginStatus === 'NEW_ACCOUNT') {
                        enableErrorStyleOnEmailInput();
                        emailForPasswordResetValidation.showNoAccountForThisEmail();
                    } else {
                        disableErrorStyleOnEmailInput();
                        emailForPasswordResetValidation.hideNoAccountForThisEmail();
                        accountExist = true;
                    }
                }
            });

            return accountExist;
        }

        function enableErrorStyleOnEmailInput() {
            var emailInput = $("input[name='email']");
            if (!emailInput.hasClass("error")) {
                emailInput.addClass("error");
            }
        }

        function disableErrorStyleOnEmailInput() {
            var emailInput = $("input[name='email']");
            if (emailInput.hasClass("error")) {
                emailInput.removeClass("error");
            }
        }

        function enableErrorStyleOnEmailInput() {
            var emailInput = $("input[name='email']");
            if (!emailInput.hasClass("error")) {
                emailInput.addClass("error");
            }
        }



        inputUtil.inputEvent("input[name='email']", emailForPasswordResetValidation.clearEmailValidation, emailForPasswordResetValidation.showEmailValidationIfNeeded);
    });

});