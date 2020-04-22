ACC.oplkslidingarticlecomponent = {

    listeners: function() {
        $('a[href="#knowledge-drawer"]').each(function() {
            var element = $($(this)[0]);
            element.off('click').on('click', function() {
                OPL.UI.fire(OPL.UI.EVENTS.modules.slidingModal.open);
                var sectionId = element.attr('data-article-id');
                var fullScrenLink = element.attr('data-new-window-url');
                if (sectionId) {
                    ACC.oplkslidingarticlecomponent.getDrawerContent(sectionId, fullScrenLink);
                }
            });
        });
    },

    init: function(callback) {
        if ("undefined" === typeof OPL || "undefined" === typeof OPL.UI) {
            document.addEventListener("modules.ready", callback);
        } else {
            callback();
        }
    },

    getDrawerContent: function(articleSectionId, fullScrenLink) {
        $.ajax({
            type: "GET",
            url: '/bw/sekcja/' + articleSectionId,
            beforeSend: function() {
                $($('.opl-sliding-modal--wraper')[0]).empty();
                OPL.UI.fire('modules.loader.show', $($('.opl-sliding-modal--wraper')[0]));
                OPL.UI.stopModules($('.opl-sliding-modal--wraper')[0]);
            },
            success: function(response) {
                $($('.opl-sliding-modal--wraper')[0]).html(response);
                OPL.UI.initModules($('.opl-sliding-modal--wraper')[0]);
                $($('.opl-sliding-modal--new-window')[0]).attr("href", fullScrenLink);
                OPL.UI.fire('modules.loader.hide', $($('.opl-sliding-modal--wraper')[0]));
            },
            error: function() {
                $($('.opl-sliding-modal--wraper')[0]).html('błąd');
                OPL.UI.fire('modules.loader.hide', $($('.opl-sliding-modal--wraper')[0]));
            }
        });
    }

};

$(document).ready(function() {
    ACC.oplkslidingarticlecomponent.init(ACC.oplkslidingarticlecomponent.listeners);
});