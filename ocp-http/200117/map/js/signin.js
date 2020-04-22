var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.SignIn == "undefined") {
    PTK.SignIn = {
        observeRememberForm: function() {
            if ($("remember-user")) {
                $("remember-user").observe("click", function(a) {
                    Event.stop(a);
                    $("rememberFormId").submit()
                })
            }
        }
    }
};