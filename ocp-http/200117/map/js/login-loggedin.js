function observeLogoutUser() {
    $("box-logout-link").observe("click", function(a) {
        $("login-button").click();
        a.stop()
    })
};