var omni = {

    initialized: false,
    //    filtersQuery:""    ,

    refreshSearchArea: function() {
        var query = $('#floating-label').val();
        var qurl = $('#OplKbNewsSearchComponent').attr('data-component-url');
        $.ajax({
            url: qurl,
            type: "POST",
            data: "q=" + query,
            contentType: "text/plain; charset=utf-8",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            beforeSend: omni.getStopModulesCallback($('#OplKbNewsSearchComponent'), true),
            success: function(response) {
                omni.getResponseCallback(response, '#OplKbNewsSearchComponent', true);
                omni.refreshNewsArea();
            },
            error: function() {
                location.reload();
            }
        });
    },

    refreshFiltersAreaWithQuery: function(query, commit) {
        var qurl = $('#OplKbNewsFilteringComponent').attr('data-component-url');
        $.ajax({
            url: qurl,
            type: "POST",
            data: commit ? "commit:q=" + query : query,
            contentType: "text/plain; charset=utf-8",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            beforeSend: omni.getStopModulesCallback($('#filters-modal'), true),
            success: function(response) {
                omni.getResponseCallback(response, '#filters-modal', true);
                omni.refreshTagsArea();
                omni.refreshNewsArea();
            },
            error: function() {
                location.reload();
            }
        });

    },

    refreshFilterArea: function() {
        $.ajax({
            type: "POST",
            contentType: "text/plain; charset=utf-8",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            beforeSend: omni.getStopModulesCallback($('#filters-modal'), true),
            success: function(response) {
                omni.getResponseCallback(response, '#filters-modal', true);
            },
            error: function() {
                location.reload();
            }
        });
    },

    refreshFilterAreaWithQuery: function(query) {
        var qurl = $('#OplKbNewsFilteringComponent').attr('data-component-url');
        $.ajax({
            url: qurl,
            type: "POST",
            data: query,
            contentType: "text/plain; charset=utf-8",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function(response) {

                $(response).find('[data-js-module="common/modules/opl-category-tree"]').each(function() {
                    OPL.UI.fire(OPL.UI.EVENTS.modules.categorytree.loadNewData, jQuery.parseJSON($(this).attr('data-js-options')).category, $(this).attr('id'));
                });
                var replacement = $(response).find('#data-nr-of-hits').attr('data-nr-of-hits');
                $('#data-nr-of-hits').html(replacement);
                var replacementMobile = $(response).find('#data-nr-of-hits-mobile').attr('data-nr-of-hits');
                $('#data-nr-of-hits-mobile').html(replacementMobile);
                var results = $(response).find('#no-results-message').attr('data-results');
                if (results < 1) {
                    $('#no-results-message').show();
                } else {
                    $('#no-results-message').hide();
                }
            },
            error: function() {
                location.reload();
            }
        });
    },

    refreshTagsArea: function() {
        $.ajax({
            url: $('#OplKbNewsTagsComponent').attr('data-component-url'),
            type: "POST",
            contentType: "text/plain; charset=utf-8",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            beforeSend: omni.getStopModulesCallback($('#OplKbNewsTagsComponent'), true),
            success: function(response) {
                omni.getResponseCallback(response, '#OplKbNewsTagsComponent', true);
            },
            error: function() {
                location.reload();
            }
        });
    },

    refreshNewsArea: function() {
        $.ajax({
            url: $('#OplKbNewsComponent').attr('data-component-url'),
            type: "POST",
            contentType: "text/plain; charset=utf-8",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            beforeSend: omni.getStopModulesCallback($('#OplKbNewsComponent')),
            success: function(response) {
                omni.getResponseCallback(response, '#OplKbNewsComponent');
                $($('.data-news-url-href')[0]).trigger("click");
            },
            error: function() {
                location.reload();
            }
        });
    },

    appendToNewsArea: function() {
        if ($($('.opl-omnibook-dashboard__message-list').last()).attr("data-more-query")) {
            $.ajax({
                url: ($('#OplKbNewsComponent').attr('data-component-url')) +
                    "&more=1",
                type: "POST",
                data: $($('.opl-omnibook-dashboard__message-list').last()).attr(
                    "data-more-query"),
                contentType: "text/plain; charset=utf-8",
                headers: {
                    "CSRFToken": ACC.common.CSRFToken
                },
                beforeSend: omni.getStopModulesCallback($('#OplKbNewsComponent')),
                success: function(response) {
                    $(".opl-omnibook-dashboard__message-box").append(response);
                    omni.getInitModulesCallback($('#OplKbNewsComponent'));
                }
            });
        }
    },

    getArticle: function(el) {
        var paramsMap = {};
        paramsMap["CONTENT_VERSION"] = "page";

        $(".opl-omnibook-dashboard__message").each(function() {
            $(this).removeClass("active");

        });

        $(el).closest("li").addClass("active");
        $(el).closest("li").addClass("read");
        $(el).closest("li").find('.g-icon--star').remove();


        OPL.UI.fire('modules.loader.show', $('.opl-omnibook-dashboard__content-box'));
        $.ajax({
            url: $(el).attr('data-news-url-href'),
            type: "GET",
            data: {
                "source": "hybris",
                "navigationNode": "",
                "hashParam": "",
                "categoryId": "",
                "params": JSON.stringify(paramsMap)
            },
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            beforeSend: omni.getStopModulesCallback($('#OplKbNewsComponent')),
            success: function(response) {
                omni.getResponseJsonCallback(response, '#omnibook-article');
                omni.getInitModulesCallback($('#OplKbNewsComponent'));
                if (typeof ACC.oplkslidingarticlecomponent !== 'undefined') {
                    ACC.oplkslidingarticlecomponent.listeners();
                }
                $($('.opl-omnibook-dashboard__content-box')[0]).scrollTop(0);
                OPL.UI.fire('modules.loader.hide', $('.opl-omnibook-dashboard__content-box'));
                $.ajax({
                    url: '/view/searchresult/registerDashboardClick' + $(el).attr('data-click-url'),
                    type: "GET"
                });
                $.ajax({
                    url: '/view/readnews/' + $(el).attr('data-news-url-href'),
                    type: "GET"
                });
            },
            error: function(response) {
                $($('#omnibook-article')[0]).html('');
                if (response && response.responseJSON) {
                    omni.getResponseCallback(response.responseJSON.content, '#omnibook-article');
                    omni.getInitModulesCallback($('#OplKbNewsComponent'));
                }
                OPL.UI.fire('modules.loader.hide', $('.opl-omnibook-dashboard__content-box'));
            }
        });
    },

    selectFilter: function(el) {
        if ($(el).parent().attr('data-id')) {
            var element = $(el).parent();
            var query = $(element).attr('data-id');
            omni.refreshFilterAreaWithQuery(query);
        }
    },

    scrollListener: function() {
        $('.opl-omnibook-dashboard__message-box').one('scroll', function() {
            $('.opl-omnibook-dashboard__message-box').off();
            if ($(this).scrollTop() + $(this).innerHeight() + 50 >= $(this)[0].scrollHeight) {
                omni.appendToNewsArea();
            } else {
                $('.opl-omnibook-dashboard__message-box').one('scroll', omni.scrollListener());
            }
        });
        $('#news-list-more-button').off('click').on('click', function() {
            $('html, body').animate({
                scrollTop: $("#news-list-more").offset().top
            }, 2000);
            $('#news-list-more').remove();
            omni.appendToNewsArea();
            omni.scrollListener();
        });
    },

    filtersListener: function() {
        $('label[class*="o-checkbox opl-checkbox"],label[class*="o-radio opl-radio"]').off("click").on("click", function(e) {
            if (e.target.nodeName === "INPUT") {
                omni.selectFilter(this);
            }
        });
    },

    tagsListener: function() {
        $(".opl-tags__deleteAll").off("click").on("click", function(e) {
            e.preventDefault();
            var query = $("#filtersTagData").attr("data-initial-query");
            omni.refreshFiltersAreaWithQuery("commit:" + query);
        });

        $(".opl-tags__delete").off("click").on("click", function(e) {
            e.preventDefault();
            var query = $(this).attr("data-tagtarget");
            omni.refreshFiltersAreaWithQuery("commit:" + query);
        });
    },

    addListeners: function() {
        var defaultQuery = $('#current-query').attr('data-q-query');

        $('#floating-label').next().off("click").on('click', function(e) {
            omni.refreshSearchArea(this);
            e.preventDefault();
        });
        $('#floating-label').off("keypress").on('keypress', function(e) {
            if (e.which === 13) {
                omni.refreshSearchArea(this);
            }
        });
        omni.scrollListener("l: " + $('.data-news-url-href').length);
        $('.data-news-url-href').off('click').on('click', function(e) {
            e.preventDefault();
            omni.getArticle(this);
        });

        $('#filters-modal').on("DOMSubtreeModified", function() {
            omni.filtersListener();
        });

        omni.filtersListener();

        $('#OplKbNewsTagsComponent').on("DOMSubtreeModified", function() {
            omni.tagsListener();
        });

        omni.tagsListener();

        $(".opl-category-tree__clear--all").off("click").on("click", function(e) {
            e.preventDefault();
            omni.refreshFilterAreaWithQuery(defaultQuery);
        });

        $('.fake-js-expander').off("click").on("click", function(e) {
            e.preventDefault();
            $('.js-expander__trigger').trigger("click");
            $('.o-modal__close').trigger("click");
        });

        $('.fake-js-expander__trigger').off("click").on("click", function(e) {
            OPL.UI.on("modules.expander.collapsed", function(e) {
                if ("undefined" !== $($(e)[0]).find('#OplKbNewsTagsComponent1').get(0)) {
                    $("#OplKbNewsTagsComponent").get(0).scrollIntoView();
                }
            });
            e.preventDefault();
            $('.js-expander__trigger').trigger("click");
            $('.o-modal__close').trigger("click");
            omni.refreshFiltersAreaWithQuery("commit");
        });

        $('a[href="#knowledge-modal"][data-click-url]').off("click").one("click", function() {
            $.ajax({
                url: '/view/searchresult/registerDashboardClick' + $(this).attr('data-click-url'),
                type: "GET"
            });
        });


    },
    getStopModulesCallback: function(componentDiv, showCover) {
        return function() {
            if (showCover) {
                OPL.UI.fire('modules.loader.show', componentDiv);
            }
        };
    },

    getInitModulesCallback: function(componentDiv, showCover) {
        OPL.UI.initModules(componentDiv[0]);
        omni.addListeners();
        if (showCover) {
            OPL.UI.fire('modules.loader.hide', componentDiv);
        }
    },

    getResponseCallback: function(response, element, showCover) {
        var div = $(element)[0];
        OPL.UI.stopModules(div);
        $(element).replaceWith(response);
        OPL.UI.initModules($(element)[0]);
        omni.addListeners();
        if (showCover) {
            OPL.UI.fire('modules.loader.hide', $($(element)[0]));
        }

    },

    getResponseJsonCallback: function(response, element) {
        if (!response || response === '{}') {
            return;
        } else {
            $(element).html(response.content);
        }
    },

    init: function() {
        if (omni.initialized === false && $('#OplKbNewsSearchComponent').length > 0) {
            omni.addListeners();
            OPL.UI.on("modules.expander.expanded", function() {
                omni.refreshFilterAreaWithQuery();
            });

            $($('.data-news-url-href')[0]).trigger("click");
            omni.initialized = true;
        }
    },

    listenerInit: function() {
        document.addEventListener("modules.ready", function() {
            omni.init();
        });
    }

};

$(document).ready(function() {

    if ("undefined" === typeof OPL || "undefined" === typeof OPL.UI) {
        omni.listenerInit();
    } else {
        omni.init();
    }
});

$(document).ready(
    function() {
        $("a[data-categoryid]").on("click", function() {
            var catId = $("a[data-categoryid]").data("categoryid");
            var current_url = window.location.pathname;
            if (current_url !== '/view/omniarticles') {
                window.location.href = "/view/omniarticles?catId=" + catId;
            }
        });
    });

$(document).on('click', 'header[data-type="omnibook"] .opl-navigation__mobilemenu--menucontent a, header[data-type="omnibook"] .opl-navigation--second a',
    function() {
        if ($(this).is('[href^="#"]')) {
            var categoryId = $(this).attr("href").substr(1);
            if (categoryId !== '') {
                window.location.href = "/view/omniarticles?catId=" + categoryId;
            }
        }
    }
);