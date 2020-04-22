UX.require(['accountPortal/portalAccountEvents'],
    function(portalAccountEvents) {

        UX.use(function() {
            portalAccountEvents.initSubscriber("confirmDeleteAccountInit");
            portalAccountEvents.initSubscriber("deleteAccountInit", "UXEvent.CAAP.DeleteAccount");

            OPL.UI.on('module.started', function(data) {
                var accountDeletionModal = $('#confirmAccountDeletionModal');
                if (accountDeletionModal.attr('id') === data.element.id) {
                    attachEvent();
                    OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, "", 'confirmAccountDeletionModal');
                }
            });

        });

        function closeDeleteAccountModal() {
            OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, 'confirmAccountDeletionModal');
        }

        function attachEvent() {
            $('#confirmAccountDeleteOk').on('click', function() {
                $.ajax({
                    url: $("#confirmAccountDelete").attr("action"),
                    type: $("#confirmAccountDelete").attr("method"),
                    dataType: "json",
                    headers: {
                        'CSRFToken': $("#CSRFToken").val()
                    },
                    data: JSON.stringify({
                        actionDone: true
                    }),
                    contentType: "application/json",
                    error: function() {
                        portalAccountEvents.runPublisher("deleteAccountFailure", "Coś poszło nie tak");
                    },
                    success: function() {
                        closeDeleteAccountModal();
                        portalAccountEvents.runPublisher("deleteAccountCompleted");
                    }
                });
            });
            $('#confirmAccountDeleteCancel').on('click', function() {
                closeDeleteAccountModal();
            });

        };

    });