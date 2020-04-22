define(["exports"], function(exports) {

    exports.show = function(selector) {
        selector = ensureValidSelector(selector);
        selector.removeClass("display-none");
        selector.removeClass("u-acc-hide");
    };

    exports.hide = function(selector) {
        selector = ensureValidSelector(selector);
        selector.addClass("u-acc-hide");
    };

    exports.addInputError = function(selector) {
        selector = ensureValidSelector(selector);
        selector.addClass("error");
    };

    exports.removeInputError = function(selector) {
        selector = ensureValidSelector(selector);
        selector.removeClass("error");
    };

    exports.isFieldEmpty = function(selector) {
        var field = selector.val();
        return field.length < 1;
    };

    /**
     * Warning: This method must be executed synchronously.
     * Otherwise email regexp parametrisation in hybris config is not possible.
     *
     * @param emailSelector
     * @return {boolean}
     */
    exports.isEmailValid = function(emailSelector) {
        var email = emailSelector.val();
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

    // TODO should not be needed at the end!
    function ensureValidSelector(selector) {
        if (typeof selector === 'string') {
            selector = $(selector);
        }
        return selector;
    }
});