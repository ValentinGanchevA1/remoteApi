ACC.oplkbomnibookarticlecomponent = {
    modulesReadyFired: false,
    pageLoaded: false,
    stepsServiced: false,
    arrowsServiced: false,
    tutorialStepsCarouselHandled: false,
    tutorialFromLinkOpened: false,
    procesStartTime: null,
    loaderId: '',
    zoomTitle: '',

    bindAll: function() {
        this.start();
    },

    start: function() {

        document.addEventListener('modules.ready', function() {
            ACC.oplkbomnibookarticlecomponent.modulesReadyFired = true;

            var articleName = ACC.oplkbomnibookarticlecomponent.getArticleName();
            if (articleName == null || articleName.length < 1) {
                return;
            }
            if ($('#kb-omnibook-article-content').html().trim().length > 0) {
                return;
            }
            if (!ACC.oplkbomnibookarticlecomponent.pageLoaded) {
                ACC.oplkbomnibookarticlecomponent.pageLoaded = true;
                ACC.oplkbomnibookarticlecomponent.loadPageContent("", window.location.hash, "page");
            }

            OPL.UI.on('modules.tabs.openedTab', function(d) {
                if (d.dataAnchorHref !== undefined) {
                    var topMenuTabWithCategoryId = $('#knowledge2__topmenu a[data-categoryid]');
                    for (var i = 0; i < topMenuTabWithCategoryId.length; i++) {
                        ACC.oplkbomnibookarticlecomponent.loadPageContent(topMenuTabWithCategoryId[i].dataset.categoryid, "#" + d.dataAnchorHref, "page");
                    }
                }
                // automatyczne otwieranie pierwszej zakladki drugiego poziomu
                $('#' + d.currentTabHash + ' ul li:first a').click();

            }, 'knowledge2__topmenu');
        });
    },

    getArticleName: function() {
        var articleName = window.location.pathname.substring("/omnibook/".length);
        return articleName;
    },

    updateFavouriteArticle: function(articleId, removeFlag) {
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            data: JSON.parse('{ "articleId" : "' + articleId + '", "removeFlag" : ' + removeFlag + '}'),
            url: '/bw/' + 'updateFavourite',
            success: function(response) {
                if (response.responseCode === 200) {
                    if (removeFlag === "true") {
                        $($("#kb-omnibook-article-content").find(".g-icon--heart")[0]).removeClass("g-icon--heart").addClass("g-icon--heart-contour");
                        $("#updateFavorite").text(addToFavouritesLabel);
                        $("#updateFavorite").attr("data-favorite", false);
                    } else {
                        $($("#kb-omnibook-article-content").find(".g-icon--heart-contour")[0]).removeClass("g-icon--heart-contour").addClass("g-icon--heart");
                        $("#updateFavorite").text(removeFromFavouritesLabel);
                        $("#updateFavorite").attr("data-favorite", true);
                    }
                }
            }
        });
    },

    loadPageContent: function(categoryId, hashParam, contentVersion) {
        var showHasParam = "";

        if (hashParam !== "#") {
            showHasParam = hashParam;
            window.location.hash = showHasParam;
        }

        var paramsMap = {};
        paramsMap["CONTENT_VERSION"] = contentVersion;

        var articleContent = document.getElementById('kb-omnibook-article-content');

        if (articleContent === null) {
            return;
        }
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: '/bw/' + ACC.oplkbomnibookarticlecomponent.getArticleName(),
            data: {
                "source": articleSource,
                "navigationNode": navigationNode,
                "hashParam": showHasParam,
                "categoryId": categoryId,
                "params": JSON.stringify(paramsMap)
            },
            beforeSend: function() {
                articleContent.innerHTML = '';
                ACC.oplkbomnibookarticlecomponent.showArticleLoader();
                OPL.UI.stopModules(articleContent);
            },
            success: function(response) {
                if (!response || response === '{}') {
                    ACC.oplkbomnibookarticlecomponent.hideArticleLoader();
                    return;
                }

                var isTutorialPage = ACC.oplkbomnibookarticlecomponent.getParamValueFromArray(response["params"], "PAGE_CATEGORY", "page") === "tutorial";
                var loadMethod = isTutorialPage ? 'loadTutorialPage' : 'loadStandardPage';

                ACC.oplkbomnibookarticlecomponent[loadMethod](response);

                ACC.oplkbomnibookarticlecomponent.zoomTitle = ACC.oplkbomnibookarticlecomponent.getParamValueFromArray(response["params"], "TITLE", "Omnibook");
                document.title = ACC.oplkbomnibookarticlecomponent.zoomTitle + " | Orange Polska";

                var scroolElement = ACC.oplkbomnibookarticlecomponent.getParamValueFromArray(response["params"], "SECTION_ID", "");
                if (scroolElement.length > 0) {
                    ACC.oplkbomnibookarticlecomponent.scrollToElementId(scroolElement);
                }
                if (typeof ACC.oplkslidingarticlecomponent !== 'undefined') {
                    ACC.oplkslidingarticlecomponent.listeners();
                }

                var hash = window.location.hash;
                var hash_full = window.location.hash;
                //Niepusty href i href nie zaczyna się na "#tab_".
                if (!hash && $($('a[data-selected]')[0]).attr('href') !== undefined && $($('a[data-selected]')[0]).attr('href').indexOf("#tab_") !== 0) {
                    window.location.hash = $($('a[data-selected]')[0]).attr('href');
                    if (!window.location.hash && $($('a[data-selected]')[0]).attr('data-anchor-href') !== undefined) {
                        window.location.hash = $($('a[data-selected]')[0]).attr('data-anchor-href');
                    }
                }

                if (window.location.hash.split('#').length > 3) {
                    var n = hash.lastIndexOf('#');
                    hash = hash.substr(0, n);
                }

                if (hash && $.find("[href=" + hash + "]") && !($($.find("[href=" + hash + "]")[0]).hasClass('is-active'))) {
                    var link = $($.find("[href=" + hash + "]")[0]);
                    link.attr("href", hash_full);
                    link.click();
                }

            },
            complete: function() {
                OPL.UI.initModules(articleContent);

                ACC.oplkbomnibookarticlecomponent.hideArticleLoader();

                var feedback = $.cookie('feedbackCookie' + location.pathname);

                if (feedback) {
                    if (feedback.indexOf('&Rate') > -1) {
                        $('#feedbackTitle').remove();
                        $('#feedbackRates').replaceWith('<div id="feedbackRates" class="l-col l-col-small-12 l-col-12"><span class="u-font-bold">Dziękujemy za ocenę!</span></div>');
                    }
                    if (feedback.indexOf('&Comment') > -1) {
                        $('#feedbackTitle').remove();
                        $('#feedbackComment').replaceWith('<div id="feedbackComment" class="l-col l-col-small-12 l-col-12"><span class="u-font-bold">Dziękujemy za komentarz!</span></div>');
                    }
                }

                var pdfGenerator = $('#pdf-generator');
                if (pdfGenerator.length > 0) {
                    pdfGenerator.attr("disabled", "");
                }

                $('.g-icon--heart-contour').click(function() {
                    $("#updateFavorite").click();
                })
                $('.g-icon--heart').click(function() {
                    $("#updateFavorite").click();
                })

                $("#updateFavorite").click(function() {
                    var articleId = $(this).attr("data-articleid");
                    var removeFlag = $(this).attr("data-favorite");
                    ACC.oplkbomnibookarticlecomponent.updateFavouriteArticle(articleId, removeFlag);
                });

                document.addEventListener('modules.ready', function() {
                    if (!ACC.oplkbomnibookarticlecomponent.tutorialFromLinkOpened) {
                        ACC.oplkbomnibookarticlecomponent.openTutorialFromLink();
                        ACC.oplkbomnibookarticlecomponent.tutorialFromLinkOpened = true;
                    }
                });

            },
            error: function(response) {
                var loadData = response.responseJSON.content;
                if (loadData.length > 0) {
                    $('#kb-omnibook-article-content').html(loadData);
                    ACC.oplkbomnibookarticlecomponent.hideArticleLoader();
                }
            }
        });
    },

    openTutorialFromLink: function() {
        var linkHash = window.location.hash;
        if (linkHash) {
            var n = linkHash.lastIndexOf('#');
            if (n) {
                var lastHash = linkHash.substring(n + 1);
                if ($("a[data-friendly-url='" + lastHash + "']")) {
                    $($("a[data-friendly-url='" + lastHash + "']")[0]).click();
                }
            }
        }
    },

    scrollToElementId: function(id) {
        $('#' + id).velocity('scroll', {
            duration: 500,
            offset: -85,
            easing: 'ease-in-out'
        });
    },

    showArticleLoader: function() {
        var $loaderContainer = $('#loader-container');
        if ($loaderContainer.length === 0) {
            return;
        }
        OPL.UI.fire('modules.loader.show', $loaderContainer);
        ACC.oplkbomnibookarticlecomponent.loaderId = $loaderContainer;
    },

    hideArticleLoader: function() {
        OPL.UI.fire('modules.loader.hide', ACC.oplkbomnibookarticlecomponent.loaderId);
        ACC.oplkbomnibookarticlecomponent.loaderId = '';
    },

    loadTutorialPage: function(resp) {
        var friendlyUrlName = ACC.oplkbomnibookarticlecomponent.getArticleName();

        ACC.oplkbomnibookarticlecomponent.reloadSuccessCallback(friendlyUrlName, 'kb-omnibook-article-content')(resp);
        ACC.oplkbomnibookarticlecomponent.addListenersForSuccessCallback(friendlyUrlName, "page");
        ACC.oplkbomnibookarticlecomponent.registerSteps(friendlyUrlName, "page");
    },

    loadStandardPage: function(resp) {
        $('#kb-omnibook-article-content').html(ACC.oplkbomnibookarticlecomponent.getParesdContentFromResponse(resp["content"]));
        // sub menu
        $('.menu-component .opl-tabs--nested a[data-categoryid]').on('click', function() {
            if ($(this).attr("href")) {
                ACC.oplkbomnibookarticlecomponent.loadPageContent($(this).attr("data-categoryid"), $(this).attr("href"), "page");
            } else {
                ACC.oplkbomnibookarticlecomponent.loadPageContent($(this).attr("data-categoryid"), "#" + $(this).attr("data-anchor-href"), "page");
            }
        });

        $('a[href="#knowledge-modal"]').each(function() {
            OPL.UI.on('modules.modal.opened', function(data) {
                ACC.oplkbomnibookarticlecomponent.loadTutorial(data);
            }, $(this).attr("id"));

            OPL.UI.on('modules.modal.closed', function() {
                ACC.oplkbomnibookarticlecomponent.stepsServiced = false;
                $("#modal-tutorial-content").html("");
            }, $(this).attr("id"));
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

        ACC.oplkbomnibookarticlecomponent.getTutorialContent(friendlyUrlName, myMap,
            ACC.oplkbomnibookarticlecomponent.reloadBeforeSendCallback('modal-tutorial-content'),
            function(response) {
                ACC.oplkbomnibookarticlecomponent.reloadSuccessCallback(friendlyUrlName, 'modal-tutorial-content')(response);
                ACC.oplkbomnibookarticlecomponent.registerSteps(friendlyUrlName, "modal");
            },
            ACC.oplkbomnibookarticlecomponent.reloadCompleteCallback(friendlyUrlName, 'modal-tutorial-content', "modal"));

    },

    // rejestracja krokow tutoriala
    registerSteps: function(friendlyUrlName, contentVersion) {
        ACC.oplkbomnibookarticlecomponent.stepsServiced = false;
        ACC.oplkbomnibookarticlecomponent.arrowsServiced = false;
        if (!ACC.oplkbomnibookarticlecomponent.stepsServiced && $(".opl-knowledge-step-list__item").length > 0) {
            $(".opl-knowledge-step-list__item").off("click").on("click", function() {
                var activeStep = $(this).children().attr("data-number");
                ACC.oplkbomnibookarticlecomponent.reloadTutorial(friendlyUrlName, activeStep, contentVersion);
            });
            ACC.oplkbomnibookarticlecomponent.stepsServiced = true;
        }

    },

    refreshZoom: function() {
        var activeStep = $('.opl-knowledge-step-list__item.slick-current a').attr('data-number');
        if (activeStep != null) {
            $('#zoomStepTitle').html(activeStep);
        }
    },

    reloadTutorial: function(friendlyUrlName, activeStep, contentVersion) {
        var myMap = {};
        myMap["ACTIVE_STEP"] = activeStep;
        myMap["CONTENT_VERSION"] = contentVersion;
        myMap["INCLUDE_CONTROLS"] = false;

        ACC.oplkbomnibookarticlecomponent.getTutorialContent(friendlyUrlName, myMap,
            ACC.oplkbomnibookarticlecomponent.reloadBeforeSendCallback('tutorial-steps-carousel'),
            function(response) {
                ACC.oplkbomnibookarticlecomponent.reloadSuccessCallback(friendlyUrlName, 'tutorial-steps-carousel')(response);
                ACC.oplkbomnibookarticlecomponent.updateProgressBar(activeStep, contentVersion);
                ACC.oplkbomnibookarticlecomponent.selectStep(parseInt(activeStep) - 1);
                ACC.oplkbomnibookarticlecomponent.registerSteps(friendlyUrlName, contentVersion);
                ACC.oplkbomnibookarticlecomponent.callbackListeners(friendlyUrlName, contentVersion);
            },
            ACC.oplkbomnibookarticlecomponent.reloadCompleteCallback(friendlyUrlName, 'tutorial-steps-carousel', contentVersion, activeStep));

    },

    reloadBeforeSendCallback: function(containerId) {
        return function() {
            var prevContentHeight = $("#reload-content").css('height');
            $("#" + containerId).css('height', prevContentHeight);
            $("#" + containerId).css('overflow', 'hidden');
            $("#" + containerId).html("");
            OPL.UI.fire('modules.loader.show', $("#" + containerId));
            ACC.oplkbomnibookarticlecomponent.loaderId = $("#" + containerId);
            OPL.UI.stopModules($('#' + containerId)[0]);

        };
    },

    reloadSuccessCallback: function(friendlyUrlName, containerId) {
        return function(response) {
            if (typeof response != 'undefined') {
                ACC.oplkbomnibookarticlecomponent.tutorialStepsCarouselHandled = false;

                $("#" + containerId).html(ACC.oplkbomnibookarticlecomponent.getParesdContentFromResponse(response["content"]));


            }
        };
    },

    selectStep: function(activeStep) {
        $('.opl-knowledge-step-list__item').removeClass('slick-current');
        $(".opl-knowledge-step-list__item[data-slick-index='" + activeStep + "']").addClass('slick-current');
    },

    addListenersForSuccessCallback: function(friendlyUrlName, contentVersion) {
        ACC.oplkbomnibookarticlecomponent.callbackListeners(friendlyUrlName, contentVersion);
    },

    callbackListeners: function(friendlyUrlName, contentVersion) {
        // podpiecie paginacji
        var activeStepForPage = $(".opl-knowledge-step-list__item.slick-current a").attr("data-number");
        $("#main-pagination ul li:not(.opl-pagination__next, .opl-pagination__prev) a").off("click").on("click", function(event) {
            var activePage = event.target.innerHTML;
            ACC.oplkbomnibookarticlecomponent.reloadPaginationPage(friendlyUrlName, activeStepForPage, activePage, contentVersion);
        });
        $("#main-pagination ul li.opl-pagination__next a").off("click").on("click", function() {
            var activePage = parseInt($("#main-pagination ul li a.active").html()) + 1;
            ACC.oplkbomnibookarticlecomponent.reloadPaginationPage(friendlyUrlName, activeStepForPage, activePage, contentVersion);
        });
        $("#main-pagination ul li.opl-pagination__prev a").off("click").on("click", function() {
            var activePage = parseInt($("#main-pagination ul li a.active").html()) - 1;
            ACC.oplkbomnibookarticlecomponent.reloadPaginationPage(friendlyUrlName, activeStepForPage, activePage, contentVersion);
        });
        // podpiecie przyciskow wstecz/dalej
        $("#prevStepBtn").off("click").on("click", function() {
            var currentSlide = $($("#knowledge-carousel-top").find(".slick-current")[0]).attr("data-slick-index");
            OPL.UI.fire(OPL.UI.EVENTS.modules.carousel.goTo, parseInt(currentSlide) - 1, 'knowledge-carousel-top');
            $(".opl-knowledge-step-list__item.slick-current").click();

        });
        $("#nextStepBtn").off("click").on("click", function() {
            var currentSlide = $($("#knowledge-carousel-top").find(".slick-current")[0]).attr("data-slick-index");
            OPL.UI.fire(OPL.UI.EVENTS.modules.carousel.goTo, parseInt(currentSlide) + 1, 'knowledge-carousel-top');
            $(".opl-knowledge-step-list__item.slick-current").click();
        });
        OPL.UI.on("modules.carousel.ready", function() {
            $($("#knowledge-carousel-top .opl-carousel__nav--next")[0]).off("click").on("click", function() {
                $(document).scrollTop($("#knowledge-carousel-top").scrollTop() + 50);
                var currentSlide = $($("#knowledge-carousel-top").find(".slick-current")[0]).attr("data-slick-index");
                OPL.UI.fire(OPL.UI.EVENTS.modules.carousel.goTo, parseInt(currentSlide) + 1, 'knowledge-carousel-top');
                $(".opl-knowledge-step-list__item.slick-current").click();
            });
        }, "knowledge-carousel-top");

        OPL.UI.on("modules.carousel.ready", function() {
            $($("#knowledge-carousel-top .opl-carousel__nav--prev")[0]).off("click").on("click", function() {
                $(document).scrollTop($("#knowledge-carousel-top").scrollTop() + 50);
                var currentSlide = $($("#knowledge-carousel-top").find(".slick-current")[0]).attr("data-slick-index");
                OPL.UI.fire(OPL.UI.EVENTS.modules.carousel.goTo, parseInt(currentSlide) - 1, 'knowledge-carousel-top');
                $(".opl-knowledge-step-list__item.slick-current").click();
            });
        }, "knowledge-carousel-top");

        OPL.UI.fire('modules.loader.hide', ACC.oplkbomnibookarticlecomponent.loaderId);
        ACC.oplkbomnibookarticlecomponent.loaderId = '';
        ACC.oplkbomnibookarticlecomponent.tutorialStepsCarouselHandled = true;

        $('.opl-knowledge__fullscreen-close-trigger').click(function(event) {
            event.preventDefault();
            $('.opl-knowledge__fullscreen-zoom').hide();
        });
        $('.opl-knowledge__fullscreen-open-trigger').click(function(event) {
            event.preventDefault();

            var image = $('.opl-knowledge-carousel__item.slick-current img');
            var imageSource = image.attr('src');
            var imageAlt = image.attr('alt');
            var zoomImage = $('.opl-knowledge__fullscreen-zoom #omni-zoom-image');
            zoomImage.attr('src', imageSource);
            zoomImage.attr('alt', imageAlt);

            $('.opl-knowledge__fullscreen-zoom').show();
        });

        $('.opl-knowledge__zoom_img-open-trigger').click(function() {
            var activeStep = $('.opl-knowledge-step-list__item.slick-current a').attr('data-number');
            if (activeStep != null) {
                $('#zoomImgStepNumber').html(activeStep);
            }
            var tutorialTitle = $('#tutorialTitle').html();
            if (tutorialTitle != null) {
                $('#zoomImgTitle').html(tutorialTitle);
            }

            var image = $('.opl-knowledge-carousel__item.slick-current img');
            var imageSource = image.attr('src');
            var imageAlt = image.attr('alt');
            var zoomImage = $('#zoom-img-modal img');
            zoomImage.attr('src', imageSource);
            zoomImage.attr('alt', imageAlt);
        });



        if (typeof ACC.oplkslidingarticlecomponent !== 'undefined') {
            ACC.oplkslidingarticlecomponent.listeners();
        }



    },

    reloadCompleteCallback: function(friendlyUrlName, containerId, contentVersion, activeStep) {
        return function() {
            $("#" + containerId).css('height', '');
            $("#" + containerId).css('overflow', '');
            var modules = OPL.UI.initModules(document.getElementById(containerId));
            if (modules.length === 0 || modules.length === 1 && modules[0]) {
                ACC.oplkbomnibookarticlecomponent.hideArticleLoader(this, containerId);
                ACC.oplkbomnibookarticlecomponent.addListenersForSuccessCallback(friendlyUrlName, contentVersion);
                ACC.oplkbomnibookarticlecomponent.registerSteps(friendlyUrlName, contentVersion);
            } else {
                document.addEventListener('modules.ready', ACC.oplkbomnibookarticlecomponent.addListenersForSuccessCallback(friendlyUrlName, contentVersion));
                ACC.oplkbomnibookarticlecomponent.registerSteps(friendlyUrlName, contentVersion);
            }
        };
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

    // klikniecie w paginacje
    reloadPaginationPage: function(friendlyUrlName, activeStep, activePage, contentVersion) {
        var paramsMap = {};
        paramsMap["ACTIVE_STEP"] = activeStep;
        paramsMap["ACTIVE_PAGE"] = activePage;
        paramsMap["INCLUDE_CONTROLS"] = false;
        paramsMap["CONTENT_VERSION"] = contentVersion;

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
                ACC.oplkbomnibookarticlecomponent.loaderId = $("#" + containerId);
                OPL.UI.stopModules(document.getElementById(containerId));
            },
            success: function(response) {
                if (typeof response != 'undefined') {
                    ACC.oplkbomnibookarticlecomponent.tutorialStepsCarouselHandled = false;

                    $("#" + containerId).html(ACC.oplkbomnibookarticlecomponent.getParesdContentFromResponse(response["content"]));
                    OPL.UI.initModules(document.getElementById(containerId));

                    ACC.oplkbomnibookarticlecomponent.addListenersForSuccessCallback(friendlyUrlName, contentVersion);
                }
            }
        });

    },

    getParamValueFromArray: function(paramArray, paramKey, defaultVal) {
        if (typeof paramArray == 'undefined') {
            return defaultVal;
        }
        if (typeof paramKey == 'undefined' || paramKey === "") {
            return defaultVal;
        }
        for (var i = 0; i < paramArray.length; i++) {
            if (paramArray[i]["name"] === paramKey) {
                return paramArray[i]["value"][0];
            }
        }
        return defaultVal;
    },

    getParesdContentFromResponse: function(content) {
        return content;
    }
};

function generatePDF() {
    var paramsMap = {};
    paramsMap["CONTENT_VERSION"] = "PRINT";
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: '/bw/' + ACC.oplkbomnibookarticlecomponent.getArticleName(),
        data: {
            "source": "hybris",
            "hashParam": window.location.hash,
            "params": JSON.stringify(paramsMap)
        },
        beforeSend: function() {
            ACC.oplkbomnibookarticlecomponent.showArticleLoader();
        },
        success: function(response) {
            ACC.oplkbomnibookarticlecomponent.hideArticleLoader();
            var win = window.open(ACC.oplkbomnibookarticlecomponent.getParesdContentFromResponse(response["content"]), '_blank');
            win.focus();
        },
        error: function() {

        }
    });
}

function downloadFiles(tabId) {
    var docsTable = $('#' + tabId).closest('.opl-tabs');
    if (docsTable.find('.opl-download-documents').attr("disabled")) {
        return;
    }
    var checkboxValues = '';

    docsTable.find('input[type=checkbox][data-type=slave]').each(function() {
        if (this.checked) {
            var sThisVal = this.value;
            checkboxValues += (checkboxValues === '' ? '' + sThisVal + '' : ',' + '' + sThisVal + '');
        }
    });
    var paramsMap = {};
    paramsMap["CONTENT_VERSION"] = "ZIP";
    paramsMap["OBJECT_IDS"] = checkboxValues;

    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: '/bw/' + ACC.oplkbomnibookarticlecomponent.getArticleName(),
        data: {
            "source": "hybris",
            "hashParam": window.location.hash,
            "params": JSON.stringify(paramsMap)
        },
        beforeSend: function() {
            ACC.oplkbomnibookarticlecomponent.showArticleLoader();
        },
        success: function(response) {
            if (response["content"]) {
                ACC.oplkbomnibookarticlecomponent.hideArticleLoader();
                var win = window.open(ACC.oplkbomnibookarticlecomponent.getParesdContentFromResponse(response["content"]), '_blank');
                win.focus();
            } else {
                ACC.oplkbomnibookarticlecomponent.hideArticleLoader();
            }
        },
        error: function() {
            location.reload();
        }
    });
}

document.addEventListener('modules.ready', function() {
    ACC.oplkbomnibookarticlecomponent.refreshZoom();
});


ACC.oplkbomnibookarticlecomponent.bindAll();

document.addEventListener('framework.ready', function() {
    $(document).on('change', 'input[type="checkbox"]', function() {
        var tabs = $(this).closest('.opl-tabs');
        if (tabs.find('input[type="checkbox"]:checked').length > 0) {
            tabs.find('.opl-download-documents').removeAttr("disabled", "");
        } else {
            tabs.find('.opl-download-documents').attr("disabled", "");
        }
    });
});