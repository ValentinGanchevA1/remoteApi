define(['exports'], function(exports) {
    exports.ajaxPostWithData = function(url, data, done) {
        $.ajax({
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                url: url,
                headers: {
                    'CSRFToken': $("#CSRFToken").val()
                },
                data: data
            })
            .fail(function() {
                OPL.UI.fire('modules.loader.hide', $("#verificationLoader"), 'verificationLoader');
                exports.hideAndClearDivIfNeeded('otpError', "Błąd połączenia", true);
                exports.hideAndClearDivIfNeeded('portalLoginError', "Błąd połączenia", true);
            })
            .done(function(data) {
                done(data);
            });
    };
    exports.hideAndClearDivIfNeeded = function(divId, textMessage, isShow) {
        if (!isShow) {
            $("#" + divId).addClass("u-acc-hide");
            $("#" + divId).text("");
        } else {
            $("#" + divId).removeClass("u-acc-hide");
            $("#" + divId).text(textMessage);
        }
    };

});