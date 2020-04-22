var verifyPortalLoginController;

UX.require(['grants/pubsubevents', 'grants/utils'], function(pubsubevents, utils) {
    var verifyLogin = function() {};

    verifyLogin.prototype.onClickForgottenPassword = function() {
        const win = window.open("/twojekonto/odzyskaj_haslo", '_blank');
        win.focus();
    };

    verifyLogin.prototype.onClickSubmitPortalLoginData = function() {
        var password = $("#password").val();
        var url = grantContextPath + "/hapi/verifyPortalLogin/login";
        var data = JSON.stringify({
            "password": password
        });
        OPL.UI.fire('modules.loader.show', $("#verificationLoader"), 'verificationLoader');
        var done = function(data) {
            if (data.status === 'OK') {
                pubsubevents.runPublisher('portalLoginVerificationCompleted');
            } else {
                utils.hideAndClearDivIfNeeded('portalLoginError', data.statusMessage, true);
            }
            OPL.UI.fire('modules.loader.hide', $("#verificationLoader"), 'verificationLoader');
        };
        clearMessage(utils);
        utils.ajaxPostWithData(url, data, done);
    };

    UX.use(function() {
        pubsubevents.initSubscriber("portalLoginVerificationInit");
        verifyPortalLoginController = new verifyLogin();
    });
});

function clearMessage(utils) {
    utils.hideAndClearDivIfNeeded('portalLoginError', '', false);
};