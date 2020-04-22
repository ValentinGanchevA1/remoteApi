ACC.oplkbomnibookfootercomponent = {
    footerLoaded: false,

    bindAll: function() {
        if ("undefined" === typeof OPL || "undefined" === typeof OPL.UI) {
            document.addEventListener('modules.ready', function() {
                ACC.oplkbomnibookfootercomponent.footer();
            });
        } else {
            ACC.oplkbomnibookfootercomponent.footer();
        }
    },

    footer: function() {
        if (!ACC.oplkbomnibookfootercomponent.footerLoaded) {
            ACC.oplkbomnibookfootercomponent.footerLoaded = true;

            var articleName = '';

            if (window.location.pathname.indexOf("/omnibook/") !== -1) {
                articleName = window.location.pathname.substring("/omnibook/".length);
            }

            $.ajax({
                type: "GET",
                url: '/bw/footer',
                data: {
                    "friendlyUrlName": articleName
                },
                success: function(response) {
                    if (typeof response != 'undefined' && response["content"] !== "") {
                        $('#kb-omnibook-footer-content').append(response["content"]);
                    }
                }
            });
        }
    }
};

ACC.oplkbomnibookfootercomponent.bindAll();