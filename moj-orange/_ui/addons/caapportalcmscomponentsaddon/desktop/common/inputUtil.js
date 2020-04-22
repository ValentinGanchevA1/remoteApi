define(["exports"], function(exports) {

    exports.inputEvent = function(nameDiv, validationFuncClear, validationFunc, onlyWhenFieldNotEmpty) {

        $(nameDiv).on('focusin', function() {
            validationFuncClear();
        });

        $(nameDiv).on('focusout', function() {
            if (onlyWhenFieldNotEmpty) {
                if ($(nameDiv).val()) {
                    validationFunc();
                }
            } else {
                validationFunc();
            }
        });

    };

});