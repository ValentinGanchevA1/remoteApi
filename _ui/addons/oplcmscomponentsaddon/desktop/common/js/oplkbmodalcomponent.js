ACC.oplkbmodalcomponent = {

    loaderId: '',
    tutorialStepsCarouselHandled: false,
    stepsServiced: false,
    arrowsServiced: false,

    bindAll: function() {
        if ("undefined" === typeof OPL || "undefined" === typeof OPL.UI) {
            document.addEventListener('framework.ready', function() {
                ACC.oplkbmodalcomponent.init();
            });
        } else {
            ACC.oplkbmodalcomponent.init();
        }
    },

    init: function() {
        console.log('Init kb modal component');

        OPL.UI.on('modules.modal.opened', function(linkId) {
            if ($('#' + linkId).is('a[href="#knowledge-modal"]')) {
                console.log('Load tutorial for element id: ' + linkId);

                ACC.oplkbmodalcomponent.loadTutorial(linkId);
            }
        });

        OPL.UI.on('modules.modal.closed', function(linkId) {
            if ($('#' + linkId).is('a[href="#knowledge-modal"]')) {
                $("#modal-tutorial-content").html("");
            }
        });
    },

    // zaladowanie przy otwarciu modala
    loadTutorial: function(linkId) {
        var friendlyUrlName = $("#" + linkId).attr("data-friendly-url");
        var myMap = {};
        myMap["ACTIVE_STEP"] = $("#" + linkId).attr("data-step-number");
        myMap["ACTIVE_PAGE"] = $("#" + linkId).attr("data-step-page");
        myMap["INCLUDE_CONTROLS"] = true;
        myMap["CONTENT_VERSION"] = 'modal';

        ACC.oplkbmodalcomponent.getTutorialContent(friendlyUrlName, myMap,
            ACC.oplkbmodalcomponent.reloadBeforeSendCallback('modal-tutorial-content'),
            function(response) {
                ACC.oplkbmodalcomponent.reloadSuccessCallback(friendlyUrlName, 'modal-tutorial-content')(response);
                ACC.oplkbmodalcomponent.registerSteps(friendlyUrlName, "modal");
            },
            ACC.oplkbmodalcomponent.reloadCompleteCallback(friendlyUrlName, 'modal-tutorial-content', "modal"));

    },

    getTutorialContent: function(friendlyUrlName, paramsMap,
        reloadBeforeSendCallback, reloadSuccessCallback, reloadCompleteCallback) {
        $.ajax({
            type: "GET",
            url: '/bw/' + friendlyUrlName,
            data: {
                "params": JSON.stringify(paramsMap)
            },
            beforeSend: reloadBeforeSendCallback,
            success: reloadSuccessCallback,
            complete: reloadCompleteCallback
        });
    },

    reloadBeforeSendCallback: function(containerId) {
        return function() {
            var prevContentHeight = $("#reload-content").css('height');
            $("#" + containerId).css('height', prevContentHeight);
            $("#" + containerId).css('overflow', 'hidden');
            $("#" + containerId).html("");
            OPL.UI.fire('modules.loader.show', $("#" + containerId));
            ACC.oplkbmodalcomponent.loaderId = $("#" + containerId);
            OPL.UI.stopModules($('#' + containerId)[0]);

        };
    },

    reloadSuccessCallback: function(friendlyUrlName, containerId) {
        return function(response) {
            if (typeof response != 'undefined') {
                ACC.oplkbmodalcomponent.tutorialStepsCarouselHandled = false;

                $("#" + containerId).html(ACC.oplkbmodalcomponent.getParesdContentFromResponse(response["content"]));


            }
        };
    },

    getParesdContentFromResponse: function(content) {
        return content;
    },

    // rejestracja krokow tutoriala
    registerSteps: function(friendlyUrlName, contentVersion) {
        ACC.oplkbmodalcomponent.stepsServiced = false;
        ACC.oplkbmodalcomponent.arrowsServiced = false;
        if (!ACC.oplkbmodalcomponent.stepsServiced && $(".opl-knowledge-step-list__item").length > 0) {
            $(".opl-knowledge-step-list__item").off("click").on("click", function() {
                var activeStep = $(this).children().attr("data-number");
                ACC.oplkbmodalcomponent.reloadTutorial(friendlyUrlName, activeStep, contentVersion);
            });
            ACC.oplkbmodalcomponent.stepsServiced = true;
        }

    },

    reloadTutorial: function(friendlyUrlName, activeStep, contentVersion) {
        var myMap = {};
        myMap["ACTIVE_STEP"] = activeStep;
        myMap["CONTENT_VERSION"] = contentVersion;
        myMap["INCLUDE_CONTROLS"] = false;

        ACC.oplkbmodalcomponent.getTutorialContent(friendlyUrlName, myMap,
            ACC.oplkbmodalcomponent.reloadBeforeSendCallback('tutorial-steps-carousel'),
            function(response) {
                ACC.oplkbmodalcomponent.reloadSuccessCallback(friendlyUrlName, 'tutorial-steps-carousel')(response),
                    ACC.oplkbmodalcomponent.updateProgressBar(activeStep, contentVersion);
                ACC.oplkbmodalcomponent.selectStep(parseInt(activeStep) - 1);
                ACC.oplkbmodalcomponent.registerSteps(friendlyUrlName, contentVersion);
                ACC.oplkbmodalcomponent.callbackListeners(friendlyUrlName, activeStep);
            },
            ACC.oplkbmodalcomponent.reloadCompleteCallback(friendlyUrlName, 'tutorial-steps-carousel', contentVersion, activeStep));

    },

    updateProgressBar: function(activeStep, contentVersion) {
        var stepsNumber = $("li.opl-knowledge-step-list__item").children().length;
        var progressPercentage = (activeStep / stepsNumber) * 100 + '%';
        var containerId = 'kb-omnibook-article-content';
        if ('page' === contentVersion) {
            containerId = 'kb-omnibook-article-content';
        } else if ('modal' === contentVersion) {
            containerId = 'knowledge-modal';
        }
        $("#" + containerId).find('.opl-progress').attr('title', progressPercentage);
        $("#" + containerId).find('.opl-progress .o-progress__bar').css('width', progressPercentage);
    },

    selectStep: function(activeStep) {
        $('.opl-knowledge-step-list__item').removeClass('slick-current');
        $(".opl-knowledge-step-list__item[data-slick-index='" + activeStep + "']").addClass('slick-current');
    },

    reloadCompleteCallback: function(friendlyUrlName, containerId, contentVersion, activeStep) {
        return function() {
            $("#" + containerId).css('height', '');
            $("#" + containerId).css('overflow', '');
            OPL.UI.initModules(document.getElementById(containerId));
            ACC.oplkbmodalcomponent.hideArticleLoader(this, containerId);
            ACC.oplkbmodalcomponent.addListenersForSuccessCallback(friendlyUrlName, activeStep);
            ACC.oplkbmodalcomponent.registerSteps(friendlyUrlName, contentVersion);
        };
    },

    hideArticleLoader: function() {
        OPL.UI.fire('modules.loader.hide', ACC.oplkbmodalcomponent.loaderId);
        ACC.oplkbmodalcomponent.loaderId = '';
    },

    addListenersForSuccessCallback: function(friendlyUrlName, activeStep) {
        ACC.oplkbmodalcomponent.callbackListeners(friendlyUrlName, activeStep);
    },

    callbackListeners: function(friendlyUrlName) {
        // podpiecie paginacji
        var activeStepForPage = $(".opl-knowledge-step-list__item.slick-current a").attr("data-number");
        $("#main-pagination ul li:not(.opl-pagination__next, .opl-pagination__prev) a").off("click").on("click", function(event) {
            var activePage = event.target.innerHTML;
            ACC.oplkbmodalcomponent.reloadPaginationPage(friendlyUrlName, activeStepForPage, activePage);
        });
        $("#main-pagination ul li.opl-pagination__next a").off("click").on("click", function() {
            var activePage = parseInt($("#main-pagination ul li a.active").html()) + 1;
            ACC.oplkbmodalcomponent.reloadPaginationPage(friendlyUrlName, activeStepForPage, activePage);
        });
        $("#main-pagination ul li.opl-pagination__prev a").off("click").on("click", function() {
            var activePage = parseInt($("#main-pagination ul li a.active").html()) - 1;
            ACC.oplkbmodalcomponent.reloadPaginationPage(friendlyUrlName, activeStepForPage, activePage);
        });
        // podpiecie przyciskow wstecz/dalej
        $("#prevStepBtn").off("click").on("click", function() {
            $(document).scrollTop($("#tutorial-steps-top").scrollTop() + 50);
            $(".opl-knowledge-step-list__item.slick-current").prev().click();

        });
        $("#nextStepBtn").off("click").on("click", function() {
            $(document).scrollTop($("#tutorial-steps-top").scrollTop() + 50);
            $(".opl-knowledge-step-list__item.slick-current").next().click();
        });

        OPL.UI.fire('modules.loader.hide', ACC.oplkbmodalcomponent.loaderId);
        ACC.oplkbmodalcomponent.loaderId = '';
        ACC.oplkbmodalcomponent.tutorialStepsCarouselHandled = true;

        $('.opl-knowledge__fullscreen-close-trigger').click(function(event) {
            event.preventDefault();
            $('.opl-knowledge__fullscreen-zoom').hide();
        });
        $('.opl-knowledge__fullscreen-open-trigger').click(function(event) {
            event.preventDefault();
            $('.opl-knowledge__fullscreen-zoom').show();
        });
    },

    // klikniecie w paginacje
    reloadPaginationPage: function(friendlyUrlName, activeStep, activePage) {
        var paramsMap = {};
        paramsMap["ACTIVE_STEP"] = activeStep;
        paramsMap["ACTIVE_PAGE"] = activePage;
        paramsMap["INCLUDE_CONTROLS"] = false;

        var containerId = 'tutorial-steps-carousel';

        $.ajax({
            type: "GET",
            url: '/bw/' + friendlyUrlName,
            data: {
                "params": JSON.stringify(paramsMap)
            },
            beforeSend: function() {
                $("#" + containerId).css('height', '');
                $("#" + containerId).css('overflow', '');
                $("#" + containerId).html("");
                OPL.UI.fire('modules.loader.show', $("#" + containerId));
                ACC.oplkbmodalcomponent.loaderId = $("#" + containerId);
                OPL.UI.stopModules(document.getElementById(containerId));
            },
            success: function(response) {
                if (typeof response != 'undefined') {
                    ACC.oplkbmodalcomponent.tutorialStepsCarouselHandled = false;

                    $("#" + containerId).html(ACC.oplkbmodalcomponent.getParesdContentFromResponse(response["content"]));
                    OPL.UI.initModules(document.getElementById(containerId));

                    ACC.oplkbmodalcomponent.addListenersForSuccessCallback(friendlyUrlName, activeStep);
                }
            }
        });

    }
};

ACC.oplkbmodalcomponent.bindAll();