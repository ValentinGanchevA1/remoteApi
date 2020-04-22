UX.require(["portal/password/changePasswordValidation", "portal/inputUtil", 'portal/portalevents'],
    function(changePasswordValidation, inputUtil, portalEvents) {

        UX.use(function() {
            portalEvents.initSubscriber("changePasswordInit", clearModalsIfExited);
            $("#changePasswordForm").focus();

            OPL.UI.on('module.started', function(data) {
                var changePasswordModal = $('#changePasswordModal');
                if (changePasswordModal.attr('id') === data.element.id) {
                    attachEventValidation();
                    changePasswordSubmit();
                    OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, "", 'changePasswordModal');
                }
            });

            OPL.UI.on(OPL.UI.EVENTS.modules.modal.closed, function(data) {
                $("#oldPassword").val("");
                $("#password-field").val("");
                $("#repeatNewPassword").val("");
                changePasswordValidation.clearOldPasswordValidation();
                changePasswordValidation.clearNewPasswordValidation();
                changePasswordValidation.clearRepeatNewPasswordValidation();
                changePasswordValidation.hideErrorBox();
                OPL.UI.fire(OPL.UI.EVENTS.modules.passwdindicator.clearIndicator, 'passwordIndicator');
            });

        });

        function clearModalsIfExited() {
            var $changePasswordModal = $("#changePasswordModal");
            if ($changePasswordModal.length !== 0) {
                OPL.UI.stopModules(document.getElementById('changePasswordModal'));
                OPL.UI.stopModules('core/modules/modal', document.getElementById('changePasswordModal'));
                $changePasswordModal.remove();
            }
            var $successPasswordModal = $("#successPasswordModal");
            if ($successPasswordModal.length !== 0) {
                OPL.UI.stopModules(document.getElementById('successPasswordModal'));
                OPL.UI.stopModules('core/modules/modal', document.getElementById('successPasswordModal'));
                $successPasswordModal.remove();
            }
        }

        /**
         * Closes modal with change password form
         */
        function closeChangePasswordModal() {
            OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, 'closeModalButton');

        }

        function attachEventValidation() {
            inputUtil.inputEvent("#oldPassword",
                changePasswordValidation.clearOldPasswordValidation, changePasswordValidation.showOldPasswordValidationIfNeeded);
            inputUtil.inputEvent("#password-field", changePasswordValidation.clearNewPasswordValidation,
                changePasswordValidation.showNewPasswordValidationIfNeeded);
            inputUtil.inputEvent("#repeatNewPassword", changePasswordValidation.clearRepeatNewPasswordValidation,
                changePasswordValidation.showRepeatNewPasswordValidationIfNeeded);
        }

        function changePasswordSubmit() {
            $('#changePasswordButton').on('click', function() {
                var oldPasswordIsValid = changePasswordValidation.showOldPasswordValidationIfNeeded();
                var newPasswordIsValid = changePasswordValidation.showNewPasswordValidationIfNeeded();
                var repeatNewPasswordIsValid = changePasswordValidation.showRepeatNewPasswordValidationIfNeeded();
                var pass = oldPasswordIsValid && newPasswordIsValid && repeatNewPasswordIsValid;
                if (pass) {
                    var $changePasswordForm = $("#changePasswordForm");
                    $changePasswordForm.attr("disabled", true);
                    $("#changePasswordButton").attr("disabled", true);
                    OPL.UI.fire('modules.loader.show', $('#loaderChangePassword'), 'loaderChangePassword');
                    $.ajax({
                        url: $changePasswordForm.attr("action"),
                        type: $changePasswordForm.attr("method"),
                        dataType: "json",
                        headers: {
                            'CSRFToken': $("#CSRFToken").val()
                        },
                        data: JSON.stringify({
                            oldPassword: $("#oldPassword").val(),
                            newPassword: $("#password-field").val(),
                            caapId: $("#caapIdForChangePassword").val(),
                            token: ""
                        }),
                        contentType: "application/json",
                        error: function(jqXHR) {
                            var changePasswordResponse = JSON.parse(jqXHR.responseText);
                            changePasswordValidation.showValidationMessagesFromCaap(changePasswordResponse);
                        },
                        success: function(jqXHR) {
                            if (jqXHR.status === 'OK') {
                                closeChangePasswordModal();
                                OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, $('#successPasswordModal'), 'successPasswordModal');
                            } else {
                                changePasswordValidation.showValidationMessagesFromCaap(jqXHR);
                            }
                        },
                        complete: function() {
                            OPL.UI.fire('modules.loader.hide', $('#loaderChangePassword'), 'loaderChangePassword');
                            $("#changePasswordForm").attr("disabled", false);
                            $("#changePasswordButton").attr("disabled", false);
                        }
                    });
                }
            });
        }
    });