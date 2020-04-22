var EcareRelatedAccounts = (function(EcareRelatedAccounts) {
    var customerData = [];

    EcareRelatedAccounts.deleteAccount = function(relatedAccountCimId) {
        var data = {
            relatedAccountCimId: relatedAccountCimId
        };

        EcareFramework.loadAsyncForm('deleteRelatedAccountForm', {
            componentToReloadId: 'changeAccountContent',
            elementIdToShowLoaderOn: 'changeAccountContent',
            extraData: data,
            isAnimated: true
        });
    };

    EcareRelatedAccounts.pushCustomerData = function(key, value) {
        customerData[key] = value;
    };

    EcareRelatedAccounts.deleteRelatedAccountStep1 = function(key) {
        $.ajax({
            url: "deleteRelatedAccountStep1",
            contentType: 'application/json; charset=UTF-8',
            dataType: 'json',
            headers: {
                'CSRFToken': $("#CSRFToken").val()
            },
            type: "POST",
            data: customerData[key],
            complete: function(data) {
                console.log(data);
                if (data.status === 200) {
                    $('#changeAccountContent').html(data.responseText);
                    OPL.UI.initModules(document.getElementById('changeAccountContent'));
                } else {
                    showErrorMessage();
                }
            }
        });
    };

    return EcareRelatedAccounts;
}(EcareRelatedAccounts || {}));