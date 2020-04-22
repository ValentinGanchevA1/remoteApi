(function(send) {

    XMLHttpRequest.prototype.send = function(data) {
        // in this case I'm injecting an access token (eg. accessToken) in the request headers before it gets sent
        this.setRequestHeader('X-Request-Id', guid());
        send.call(this, data);
    };

})(XMLHttpRequest.prototype.send);

var Node = Node || {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3
};

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function SelectText(element) {
    var doc = document,
        text = doc.getElementById(element),
        range, selection;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

function getPreviousRegistrationData() {
    $.ajax({
        url: "/konsola-konsultanta/account/getPreviousRegistationData",
        type: "GET",
        dataType: "json",
        async: false,
        headers: {
            'CSRFToken': $("#CSRFToken").val()
        },
        error: function(error) {
            console.log("Server error");
        },
        success: function(data) {
            if (data.status == "OK") {
                $("#portalAccountEmail").val(data.email);
                $("#portalAccountPhoneNumber").val(data.msisdn);
                if (data.registeredDate != null) {
                    var d = data.registeredDate;
                    var date = new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5]);
                    $("#previousRegistrationDate").html("Poprzedni link został wysłany: " + (new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString()).replace("T", " ").substring(0, 19));
                    $("#previousRegistrationDate").show();
                } else {
                    $("#previousRegistrationDate").hide();
                }
                $("#portalAccountEmail").addClass('is-not-empty');
                $("#portalAccountPhoneNumber").addClass('is-not-empty');


            } else {
                console.log("Not found");
            }
        }
    });
}

function changeSelectedAccount(changeType, crmCustomerId, accountId, fixCrmCustomerId, fixAccountId, fromConsole) {
    $.ajax({
        url: "changeSelectedAccount",
        type: 'POST',
        contentType: 'application/json; charset=UTF-8',
        headers: {
            'CSRFToken': $("#CSRFToken").val()
        },
        data: JSON.stringify({
            changeType: changeType,
            crmCustomerId: crmCustomerId,
            accountId: accountId,
            fixCustomerId: fixCrmCustomerId,
            fixAccountId: fixAccountId
        }),
        success: function(result) {
            if (fromConsole) {
                window.location.href = result + "&scrollToInvoices=true";
            } else {
                window.location.href = result;
            }

        },
    });
}

function changeSelectedAccountWithTab(changeType, crmCustomerId, accountId, fixCrmCustomerId, fixAccountId, currentTab) {
    $.ajax({
        url: "changeSelectedAccount",
        type: 'POST',
        contentType: 'application/json; charset=UTF-8',
        headers: {
            'CSRFToken': $("#CSRFToken").val()
        },
        data: JSON.stringify({
            changeType: changeType,
            crmCustomerId: crmCustomerId,
            accountId: accountId,
            fixCustomerId: fixCrmCustomerId,
            fixAccountId: fixAccountId
        }),
        success: function(result) {
            if (currentTab) {
                window.location.href = addQueryStringParameter(result, "sectionID", currentTab);
            } else {
                window.location.href = result;
            }
        },
    });
}

function addQueryStringParameter(url, paramName, paramValue) {
    var param = paramName + "=" + paramValue;
    if (url.includes("?")) {
        return url + "&" + param;
    } else {
        return url + "?" + param;
    }
}

function showMigrationVariants(redirectUrl, designationNumber) {
    $.ajax({
        url: "showMigrationVariants",
        type: 'GET',
        contentType: 'application/json; charset=UTF-8',
        headers: {
            'CSRFToken': $("#CSRFToken").val()
        },
        data: {
            redirectUrl: redirectUrl,
            designationNumber: designationNumber
        },
        success: function(result) {
            const win = window.open(result, '_blank');
            win.focus();
        }
    });
}

function copyToClipboard(data) {
    var supportedBrowsersList = new Array();
    supportedBrowsersList["chrome"] = "42";
    supportedBrowsersList["firefox"] = "41";
    supportedBrowsersList["msie"] = "9";
    supportedBrowsersList["opera"] = "29";

    for (var key in supportedBrowsersList) {
        if (bowser[key] && (bowser['version'] < supportedBrowsersList[key]))
            SelectText(data);
    }
}


function showHide(link, divObject) {
    var isDesktop = $(window).width() > 992;
    var desktopHeaderClick = $(link).hasClass("component-header") && isDesktop;

    if (!desktopHeaderClick) {
        $(divObject).slideToggle('slow', function() {
            var classTarget = isDesktop ? $('.component-header', $(link).parent().parent()) : $(link),
                textTarget = isDesktop ? $(link) : $('.button.show-hide', $(link).parent().parent()),
                text = $(this).is(':visible') ? 'Ukryj' : 'Pokaż';
            classTarget.toggleClass('arrow-down arrow-up');
            textTarget.text(text);
        });
    }
}

function show(divObject) {
    $(divObject).slideDown("slow");
}

function hide(divObject) {
    $(divObject).slideUp("slow");
}

function showNormal(divObject) {
    $(divObject).show();
}

function hideNormal(divObject) {
    $(divObject).hide();
}

function showElem(divObject, slide) {
    if (slide) {
        show(divObject);
    } else {
        showNormal(divObject);
    }
}

function hideElem(divObject, slide) {
    if (slide) {
        hide(divObject);
    } else {
        hideNormal(divObject);
    }
}

function toggle(divObject, condition) {
    if (condition) {
        show(divObject);
    } else {
        hide(divObject);
    }
}

function notImplemented() {
    $('.not-implemented').click(function() {
        if ($("#disabledMsg").length == 0) {
            $('body').append(
                '<div id="disabledMsg" style="z-index: 100; font-color:black;font-weight:bold;font-size:24px;display: none; border-style: solid; border-width: 1px 1px 1px 1px; background-color: rgba(255, 152, 2, 0.78);position: fixed;bottom: 0;width: 100%;text-align: center" >Upps, ten przycisk nie działa</div>'
            );
        }
        $("#disabledMsg").fadeIn();
        setTimeout(function() {
            $("#disabledMsg").fadeOut();
        }, 1500);
    });
}

function prepareJSON(form) {
    var json = false;
    var formArray = form.serializeArray();
    var result = {};

    for (var i = 0; i < formArray.length; i++) {
        var jsonData = formArray[i].value;
        if (typeof jsonData == 'string' && (/^[\[|\{](\s|.*|\w)*[\]|\}]$/.test(jsonData))) {
            try {
                result[formArray[i].name] = $.parseJSON(jsonData);
                json = true;
            } catch (e) {}
        } else {
            result[formArray[i].name] = $.trim(jsonData);
        }
    }

    if (json && Object.keys(result).length == 1) {
        var first = result[Object.keys(result)[0]];
        return JSON.stringify(first);
    }

    return JSON.stringify(result);
}

function copyTextToClipboard(text) {
    console.log("Text to copy: " + text);
    var textArea = document.createElement("textarea");
    //
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a flash,
    // so some of these are just precautions. However in IE the element
    // is visible whilst the popup box asking the user for permission for
    // the web page to copy to the clipboard.
    //

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;

    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';


    textArea.value = text;

    document.body.appendChild(textArea);

    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
}

function registerCopyToClipboard() {
    $(".copy-to-Clipboard").click(function() {
        copyTextToClipboard($("#" + $(this).data("for")).text())
    });
}

function loadTemplate(templateId, destinationId) {
    var $destination = $('#' + destinationId);
    OPL.UI.stopModules($destination[0]);
    try {
        $destination.html($('#' + templateId).html());
    } catch (err) {
        console.error("Error in template " + templateId, err);
        // ignored - allow modules initialization in case of js error in html content
    }
    OPL.UI.initModules($destination[0]);
}

function openModal(templateId, modalTriggerId, templateData, callback) {
    onFrameworkReady(function() {
        requirejs(['jquery-validate', './../common/lib/jquery-ui/jquery-ui'], function(validate, ui) {
            if (typeof templateData !== 'undefined' && templateData !== null) {
                _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
                var tempCompiled = _.template($("#" + templateId).text());
                template = tempCompiled(templateData);
            } else
                template = $.invoiceModalHtml = $("#" + templateId).html();

            if (document.getElementById('js-modal__content') == null) {
                OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, template, modalTriggerId);
                OPL.UI.initModules(document.getElementById('js-modal__content'));
                if (typeof callback == 'function') {
                    callback();
                }
            }
        });
    });
}


function loadPopup(destinationId, templateId) {
    var $destination = $('#' + destinationId);
    if (templateId != null) {
        $destination.html($('#' + templateId).html());
    }
    $destination.bPopup({
        follow: [true, false],
        position: ["auto", 30],
        onClose: templateId != null ? function() {
            $destination.html('');
        } : !1,
        contentContainer: $destination,
        positionStyle: 'absolute'
    });
    window.scrollTo(0, 0);
}

function closePopup(destinationId) {
    $('#' + destinationId).bPopup().close();
}

var EcareFramework = (function(EcareFramework) {
    var getProperties = function(properties) {
        if (typeof properties === "undefined") {
            properties = {};
        }

        var defaultProps = {
            isAnimated: false,
            checkValidation: false,
            componentToReloadId: undefined,
            elementIdToShowLoaderOn: undefined,
            errorModalMsg: undefined,
            successCallback: undefined,
            errorCallback: undefined,
            replacementValidation: undefined,
            beforeValidation: undefined,
            afterValidation: undefined,
            extraData: undefined,
            forceArrayProps: undefined,
            loaderId: undefined,
            fileInputId: undefined,
            url: undefined,
            beforeSubmit: undefined,
            renderEmptyView: true,
            whitespacesAsEmpty: false,
            initModules: true
        };

        $.extend(defaultProps, properties);

        return defaultProps;
    };

    var createEmptyModalHtml = function(moduleId) {
        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, '<div>\
                 <div>\
                 <form id="lazyAsyncFormContent">\
                      <div id ="loader-container" class="opl-loader--size-m opl-ecare-loader-section" style="height: 100px;">\
                           <div class="opl-loader__spinner" style="position: relative;">\
                                <div class="opl-loader__animation-element-1">\
                                     <div class="opl-loader__animation-element-2">\
                                     </div>\
                                </div>\
                           </div>\
                      </div>\
                 </form>\
                 </div>\
            </div>', moduleId);
    };

    EcareFramework.loadLazyAsyncModal = function(url, moduleId, properties) {
        var callback = function() {
            EcareFramework.loadAsyncForm('lazyAsyncFormContent',
                _.extend(properties || {}, {
                    url: url
                }));
            OPL.UI.off(OPL.UI.EVENTS.modules.modal.opened, callback, moduleId);

        };
        OPL.UI.on(OPL.UI.EVENTS.modules.modal.opened, callback, moduleId);
        createEmptyModalHtml(moduleId);
    };

    EcareFramework.loadAsyncFormModal = function(formId, moduleId, properties) {
        var prop = getProperties(properties);
        var form = $('#' + formId);
        if (!checkValidation(form, prop))
            return;
        var callback = function() {
            EcareFramework.loadAsyncForm(formId,
                _.extend(properties || {}, {
                    componentToReloadId: 'lazyAsyncFormContent',
                    elementIdToShowLoaderOn: 'lazyAsyncFormContent',
                    checkValidation: false,
                    beforeValidation: null,
                    afterValidation: null
                }));
            OPL.UI.off(OPL.UI.EVENTS.modules.modal.opened, callback, moduleId);

        };
        OPL.UI.on(OPL.UI.EVENTS.modules.modal.opened, callback, moduleId);
        createEmptyModalHtml(moduleId);
    };

    EcareFramework.compileKBTags = function(msg, data) {
        var sessionStorage = window.sessionStorage;
        var complete = false;
        if (typeof(Storage) !== undefined) {
            if (msg == "UXEvent.eCare.KBTags.payments") {
                //send payment data and event right away
                EcarePubSub.publish("UXEvent.ecare.KBSuggestions", data);
            } else if (msg == "UXEvent.eCare.KBTags.invoices") {
                //add data to storage, check for completeness
                sessionStorage.setItem("invoiceTags", JSON.stringify(data));
                if (sessionStorage.getItem("inactiveTag") != null) {
                    complete = true;
                }
            } else if (msg == "UXEvent.eCare.KBTags.inactive") {
                //add data to storage, check for completeness
                sessionStorage.setItem("inactiveTag", JSON.stringify(data));
                if (sessionStorage.getItem("invoiceTags") != null) {
                    complete = true;
                }
            }
            if (complete) {
                var completeTags = sessionStorage.getItem("invoiceTags");
                completeTags = JSON.parse(completeTags);
                var inactiveTag = sessionStorage.getItem("inactiveTag");
                inactiveTag = JSON.parse(inactiveTag);
                if (inactiveTag !== null) {
                    completeTags.params[0].value.push(inactiveTag);
                }
                sessionStorage.removeItem("inactiveTag");
                sessionStorage.removeItem("invoiceTags");
                EcarePubSub.publish("UXEvent.ecare.KBSuggestions", completeTags);
            }
        } else {
            //there is nothing we can do.
        }
    };
    EcareFramework.getSectionArticle = function(msg, data) {
        console.log("Started");
        $($('.opl-sliding-modal--wraper')[0]).empty();
        $.ajax({
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                cache: true,
                url: "/bw/sekcjaByFriendlyUrlName/" + data.friendlyUrlName

            })
            .done(function(resp) {
                var modalId;
                modalId = "bwmodal";
                var link = '/omnibook/' + resp.friendlyUrlName;
                var content = resp.content;
                OPL.UI.fire(OPL.UI.EVENTS.modules.slidingModal.open, content, modalId);
                OPL.UI.fire(OPL.UI.EVENTS.modules.slidingModal.newWindowLink, link, modalId);
                OPL.UI.initModules($('.opl-sliding-modal--wraper')[0]);
            });
    };

    EcareFramework.getSuggestionList = function(msg, data) {
        $.ajax({
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                cache: true,
                url: "/bw/sugestie",
                data: JSON.stringify({
                    topicId: data.topicId,
                    maxSuggestions: data.maxSuggestions,
                    params: data.params,
                    source: "ECARE"
                })
            })
            .done(function(resp) {
                $("#" + data.divId).html(resp.content);

                $("#" + data.divId + " .bw-suggestion-link").each(function(i, l) {
                    var sid = $(this).data("article-section-id");

                    $(this).click(function(event) {
                        event.preventDefault();
                        console.log($(this).data("article-section-id"));
                        $.ajax({
                                method: "POST",
                                dataType: "json",
                                contentType: "application/json",
                                url: "/bw/sekcja/" + sid
                            })
                            .done(function(resp) {
                                var link = '/omnibook/' + resp.friendlyUrlName;
                                var content = resp.content;
                                OPL.UI.fire(OPL.UI.EVENTS.modules.slidingModal.open, content, 'bwmodal');
                                OPL.UI.fire(OPL.UI.EVENTS.modules.slidingModal.newWindowLink, link, 'bwmodal');
                            });
                    });
                })
            });
    };

    var generateDrawer = function(url, bwmodalValue) {
        $.ajax({
                method: "GET",
                dataType: "json",
                contentType: "application/json",
                url: url
            })
            .done(function(resp) {
                var modalId = bwmodalValue;
                var link = '/omnibook/' + resp.friendlyUrlName;
                var content = resp.content;
                OPL.UI.fire(OPL.UI.EVENTS.modules.slidingModal.open, content, modalId);
                OPL.UI.fire(OPL.UI.EVENTS.modules.slidingModal.newWindowLink, link, modalId);
                OPL.UI.initModules(document.getElementById(modalId));
            });
    };

    var getDrawerUrl = function(data) {
        var baseUrl = "/szukaj/proxy/ecare?";
        var tags = data.params[0].tags;
        var cimId = data.params[0].cimId;
        var accountId = data.params[0].accountId;
        var contractId = data.params[0].contractId;
        var MSISDN = data.params[0].MSISDN;
        var socketId = data.params[0].socketId;
        var hits = data.params[0].hits;
        var usertype = data.params[0].usertype;
        var matchAllTags = data.params[0].matchAllTags;

        var tagsUrlPart = "";
        if (Array.isArray(tags)) {
            for (var i = 0; i < tags.length; i++) {
                tagsUrlPart = tagsUrlPart + "tags=" + tags[i] + "&";
            }
        } else {
            tagsUrlPart = "tags=" + tags + "&";
        }

        baseUrl += tagsUrlPart;

        if (typeof cimId !== "undefined")
            baseUrl += "cimId=" + cimId + "&";
        if (typeof accountId !== "undefined")
            baseUrl += "accountId=" + accountId + "&";
        if (typeof contractId !== "undefined")
            baseUrl += "contractId=" + contractId + "&";
        if (typeof MSISDN !== "undefined")
            baseUrl += "MSISDN=" + MSISDN + "&";
        if (typeof socketId !== "undefined")
            baseUrl += "socketId=" + socketId + "&";
        if (typeof matchAllTags !== "undefined")
            baseUrl += "matchAllTags=" + matchAllTags + "&";

        return baseUrl +
            "hits=" + hits + "&" +
            "userType=" + usertype;
    };

    EcareFramework.getArticlesList = function(msg, data) {
        var ajaxurl = getDrawerUrl(data);

        $.ajax({
                method: "GET",
                dataType: "json",
                contentType: "application/json",
                url: ajaxurl,
                cache: true
            })
            .done(function(resp) {
                var articlesList = resp.documentList.documents;
                var ul = $('#' + data.divId + ' ul');
                for (var i = 0; i < articlesList.length; i++) {
                    ul.append('<li><a href="#">' + articlesList[i].title + '</a></li>');
                }
                var links = $('#' + data.divId + ' li').children();
                $(links).each(function(index, element) {
                    $(element).click(function(event) {
                        event.preventDefault();
                        var sectionId = articlesList[index].journalarticleresourceprimkey;
                        generateDrawer("/bw/sekcja/" + sectionId, 'bwmodal');
                    })
                });
            });
    };

    var parseField = function(data) {
        var result = {
            json: false,
            data: undefined
        };

        if (typeof data == 'string' && (/^[\[|\{](\s|.*|\w)*[\]|\}]$/.test(data))) { //sprawdzamy czy json
            try {
                result.data = JSON.parse(data);
                result.json = true;
            } catch (e) {}
        } else {
            result.data = $.trim(data);
        }

        return result;
    };

    var prepareJSON = function(form, prop) {
        var array = false;
        var formArray = form.serializeArray();
        var result = {};
        var field = {
            json: false
        };

        for (var i = 0; i < formArray.length; i++) {
            var name = formArray[i].name;
            var val = formArray[i].value;
            field = parseField(val);

            if (typeof result[name] === 'undefined') { //jeszcze nic nie było
                if (prop.forceArrayProps !== 'undefined' && $.inArray(name, prop.forceArrayProps) > -1)
                    result[name] = new Array(field.data);
                else
                    result[name] = field.data;
            } else if ($.isArray(result[name])) { //tablica
                result[name].push(field.data);
                array = true;
            } else { //pojedynczy element
                var oldValue = result[name];
                result[name] = new Array(oldValue, field.data);
            }
        }

        if (field.json && !array && Object.keys(result).length == 1) {
            var first = result[Object.keys(result)[0]];
            return JSON.stringify(first);
        }

        if (typeof prop.extraData !== 'undefined') {
            $.extend(result, prop.extraData);
        }

        return JSON.stringify(result);
    };
    var getElementToReload = function(form, prop) {
        if (typeof prop.componentToReloadId !== "undefined")
            return $('#' + prop.componentToReloadId); //element wybrany
        else
            return form; //formularz
    };

    var getElementToShowLoader = function(form, prop) {
        if (typeof prop.elementIdToShowLoaderOn !== "undefined") {
            return $('#' + prop.elementIdToShowLoaderOn); //element wybrany
        } else {
            if ($('.o-modal-content').length > 0)
                return $('.o-modal-content'); //okno modalne
            else
                return form; //formularz
        }
    };

    var getErrorMessage = function(jqXHR, prop) {
        var errorDesc;
        if (typeof prop.errorModalMsg !== "undefined") {
            errorDesc = prop.errorModalMsg
        } else {
            errorDesc = jqXHR.responseText
        }

        return '<div class="opl opl-container">' +
            '<h3>Błąd</h3>' +
            '<div class="l-row">' +
            '<div class="l-col l-col-12 ">' +
            '<div class="opl-msg opl-msg--error opl-msg--context">' +
            '<p>' + errorDesc + '</p>' +
            '</div></div></div></div></div>';
    };

    var checkValidation = function(form, prop) {
        bValid = typeof prop.beforeValidation == 'function';
        aValid = typeof prop.afterValidation == 'function';

        var result = true;

        if (prop.checkValidation || bValid || aValid) {
            if (bValid)
                prop.beforeValidation(form);

            result = form.valid();

            if (aValid)
                prop.afterValidation(form);
        }

        return result;
    };

    var getLoaderModuleId = function(prop) {
        if (typeof prop.loaderId !== "undefined") {
            return prop.loaderId;
        }
        return $("[data-js-initialized='core/modules/loader']").attr('id');
    };

    EcareFramework.scrollTo = function(targetSelector) {
        var fixheaderHeight = parseInt($('#header').attr('data-fixed'));

        if (isNaN(fixheaderHeight) !== false) {
            fixheaderHeight = 0;
        }
        var offset = $(targetSelector).offset().top - fixheaderHeight;

        var container = $('html, body');
        container.animate({
            scrollTop: offset
        }, 1000);
    };

    EcareFramework.isLinkActive = function(targetSelector) {
        return !$(targetSelector).hasClass('opl-btn-disabled');
    };

    EcareFramework.disableLink = function(targetSelector) {
        $(targetSelector).attr("data-href", $(targetSelector).attr("href"))
            .attr("data-on-click", $(targetSelector).attr("onclick"))
            .addClass('opl-btn-disabled')
            .removeAttr("href")
            .removeAttr('onclick')
            .unbind('click')
            .click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
    };

    EcareFramework.enableLink = function(targetSelector) {
        if (!$(targetSelector).length)
            return;

        var parent = targetSelector.parent()[0];
        $(targetSelector).attr("href", $(targetSelector).attr("data-href"))
            .unbind('click')
            .attr('onclick', $(targetSelector).attr('data-on-click'))
            .removeAttr('data-href')
            .removeAttr('data-on-click')
            .removeAttr('data-js-initialized')
            .removeAttr('data-js-processed')
            .removeClass('opl-btn-disabled');

        OPL.UI.initModules(parent);
    };

    EcareFramework.clearLoaders = function(element, delayedByInMilliseconds) {
        setTimeout(function() {
            var loaders = element.find(".opl-loader");
            for (var i = 0; i < loaders.length; i++) {
                $(loaders[i]).fadeOut(200, function() {
                    $(this).remove();
                });
            }
        }, delayedByInMilliseconds);
    };

    EcareFramework.stopEventPropagation = function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    };

    /*
     * isAnimated - pokazuje animację na elemencie 'elementIdToShowLoaderOn' lub elemencie okna modalnego albo formularzu
     * checkValidation - wymusza sprawdzenie formularza przed dalszymi etapami
     * componentToReloadId - zastępuje element o tym id rezultatami przetwarzania
     * elementIdToShowLoaderOn - wymusza element na którym ma być pokazyny loader
     * errorModalMsg - wymusza treść komunikatu błędu, domyślnie jqXHR.responseText
     * successCallback - funkcja zwrotna w przypadku sukcesu
     * errorCallback - funkcja zwrotna w przypadku błędu
     * beforeValidation - funckcja wywołana przed walidacją formularza
     * extraData - object zawierający dodatkowe lub wszystkie dane do wywołania ajax
     * forceArrayProps - lista własności które powinny być tablicami
     * loaderId - id modułu loadera, pozwala na skorzystanie ze specyficznych parametrów danego loadera
     * fileInputId - id inputa pliku, wyklucza wysyłanie danych POST i zastępuje je zawartością pliku, wysyła żądanie multipart/form-data
     * url - nadpisuje url z formularza
     * renderEmptyView - ustawione na false powoduje, że nie zostanie podmieniona zawartość formularza w przypadku pustej odpowiedzi lub błędu
     * whitespacesAsEmpty - powiązane z parametrem renderEmptyView, jeśli ustawione na true to zwrócony widok składający się tylko z białych znaków traktowany jest jako pusta odpowiedź
     * beforeSubmit - funckcja wywołana przed wysłaniem formularza
     */
    EcareFramework.loadAsyncForm = function(formId, properties) {
        var prop = getProperties(properties);
        var form = $('#' + formId);
        form.submit(function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
        if (typeof(event) !== "undefined" && event.type == "submit") {
            event.preventDefault();
            event.stopPropagation();
        }
        onFrameworkReady(function() {
            if (!checkValidation(form, prop))
                return;

            bSubmit = typeof prop.beforeSubmit == 'function';

            if (bSubmit) {
                prop.beforeSubmit(form);
            }

            var result = prepareJSON(form, prop);
            var loaderElement = getElementToShowLoader(form, prop);
            var reloadElement = getElementToReload(form, prop);
            var loaderModuleId = getLoaderModuleId(prop);

            var isUpload = typeof prop.fileInputId !== "undefined";
            if (isUpload) {
                var file_data = $('#' + prop.fileInputId).prop('files')[0];
                result = new FormData();
                result.append('file', file_data);
                if (typeof prop.extraData !== 'undefined') {
                    $.each(prop.extraData, function(key, value) {
                        result.append(key, value);
                    });
                }
            }

            $.ajax({
                url: typeof prop.url !== "undefined" ? prop.url : form.attr('action'),
                contentType: isUpload ? false : 'application/json; charset=UTF-8',
                processData: !isUpload,
                dataType: 'html',
                data: result,
                headers: {
                    'CSRFToken': $("#CSRFToken").val()
                },
                type: "POST",
                beforeSend: function(jqXHR, settings) {
                    jqXHR.url = settings.url;
                    if (prop.isAnimated) {
                        $(form).contents().filter(function() {
                            return this.nodeType == 3; //Node.TEXT_NODE
                        }).remove();
                        OPL.UI.fire(OPL.UI.EVENTS.modules.loader.show, loaderElement, loaderModuleId);
                    }
                },
                success: function(html) {
                    reloadElement = getElementToReload($('#' + formId), prop);
                    var loaderElementRemoved = false;
                    var htmlLength = (prop.whitespacesAsEmpty) ? html.trim().length : html.length;
                    if ((prop.renderEmptyView || htmlLength > 0) && (typeof prop.replacementValidation !== 'function' || prop.replacementValidation(html))) {
                        loaderElementRemoved = (loaderElement[0] == reloadElement[0]);
                        replacedElement = document.getElementById(reloadElement.attr('id'));
                        if (replacedElement !== null)
                            OPL.UI.stopModules(replacedElement);

                        var element = $(html);
                        try {
                            reloadElement.replaceWith(element);
                        } catch (err) {
                            console.error("Error in form " + formId, err);
                            // ignored - allow modules initialization in case of js error in html content
                        }
                        if (prop.initModules) {
                            $.each(element, function(i, attribute) {
                                if (attribute !== null && attribute.nodeType !== Node.TEXT_NODE)
                                    OPL.UI.initModules(attribute);
                            });
                        }
                    }

                    if (prop.isAnimated) {
                        if (loaderElementRemoved) {
                            loaderElement = element;
                        }
                        OPL.UI.fire(OPL.UI.EVENTS.modules.loader.hide, loaderElement, loaderModuleId);
                    }
                    if (typeof prop.successCallback == 'function') {
                        prop.successCallback(html);
                    }
                },
                error: function(jqXHR, status, error) {
                    var loaderElementRemoved = false;
                    if (prop.renderEmptyView) {
                        loaderElementRemoved = (loaderElement[0] == reloadElement[0]);
                        replacedElement = document.getElementById(reloadElement.attr('id'));
                        if (replacedElement !== null)
                            OPL.UI.stopModules(replacedElement);

                        var element = $(getErrorMessage(jqXHR, prop));
                        reloadElement.replaceWith(element);
                    }
                    if (prop.isAnimated) {
                        if (loaderElementRemoved) {
                            loaderElement = element;
                        }
                        OPL.UI.fire(OPL.UI.EVENTS.modules.loader.hide, loaderElement, loaderModuleId);
                    }
                    if (typeof prop.errorCallback == 'function')
                        prop.errorCallback();
                }
            });
        });
    };

    var openAuthorizationModal = function(modalHeader, disableAdditionalAuthorizationCheckbox) {
        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, '<div class="l-row u-spacing u-spacing-top-s">\
            <div class="l-col l-col-small-12 l-col-medium-12 l-col-12 u-small-spacing-right-s">\
            <h3 style="padding-right: 95px;">' + (typeof modalHeader !== 'undefined' ? modalHeader : '') + '</h3>\
                <div class="o-separator o-separator--s o-separator--full-width u-spacing-top-l" ></div>\
                    <div id="authorizeContainer">\
                        <div class="opl-loader--size-m opl-ecare-loader-section" style="height: 100px;">\
                            <div class="opl-loader__spinner" style="position: relative;">\
                                <div class="opl-loader__animation-element-1">\
                                    <div class="opl-loader__animation-element-2">\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                 </div>\
            </div>', 'authorizeModal');
        EcarePubSub.publish('UXEvent.CAAP.AdditionalAuthorization.Init', {
            containerId: 'authorizeContainer',
            disableCheckboxShow: !disableAdditionalAuthorizationCheckbox
        });
    };

    var prepareAndOpenModal = function(modalHeader, disableAdditionalAuthorizationCheckbox) {
        if ($("#authorizeModal").length == 0) {
            $('body').append('<div id="authorizeModalContainer">\
                               <a href="#" id="authorizeModal" data-js-module="core/modules/modal" \
                               class="u-acc-hide" data-js-options=\'{"titleClass": "opl-modal-title-space", "modalClass":"o-modal o-modal--narrow current \
                               is-visible", "showCloseText": true, "closeText": "Zamknij"}\'></a>\
                             </div>');
            var listener = function(data) {
                if (data.element.id == 'authorizeModal') {
                    OPL.UI.off('module.started', listener);
                    openAuthorizationModal(modalHeader, disableAdditionalAuthorizationCheckbox);
                }
            };
            OPL.UI.on('module.started', listener);
            OPL.UI.initModules(document.getElementById('authorizeModalContainer'));
        } else {
            openAuthorizationModal(modalHeader, disableAdditionalAuthorizationCheckbox);
        }
    };

    var showErrorCredentials = function(message) {
        var credentialsContainer = $("#errorCredentialsContainer");
        var credentialsMessage = $("#errorMessageCredentials");
        credentialsMessage.text(message);
        credentialsContainer.removeClass("u-hide");
    };

    var clearErrorCredentials = function() {
        var credentialsContainer = $("#errorCredentialsContainer");
        var credentialsMessage = $("#errorMessageCredentials");
        credentialsMessage.text("");
        credentialsContainer.addClass("u-hide");
    };

    EcareFramework.unlockAccountStatus = function() {
        EcarePubSub.publish('UXEvent.CAAP.UnlockAccount.Init');
        EcarePubSub.unsubscribe('UXEvent.CAAP.UnlockAccount.Completed');
        EcarePubSub.subscribe('UXEvent.CAAP.UnlockAccount.Completed', function() {
            EcarePubSub.publish('UXEvent.Ecare.CredentialCustomerAccountComponent.Reload');
            EcareFramework.loadAsyncForm('customerservice_consoleSummary', {
                isAnimated: true
            });
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.UnlockAccount.Failure');
        EcarePubSub.subscribe('UXEvent.CAAP.UnlockAccount.Failure', function(eventName, data) {
            showErrorCredentials(data.message);
        });
    };

    EcareFramework.getAccountDetails = function(containerToUse) {
        $("#credentialsAccountDetails").prop("disabled", "true");
        EcarePubSub.publish('UXEvent.CAAP.GetAccountDetailsPage.Init', {
            containerId: containerToUse
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.GetAccountDetailsPage.Completed');
        EcarePubSub.subscribe('UXEvent.CAAP.GetAccountDetailsPage.Completed', function() {
            EcarePubSub.publish('UXEvent.Ecare.CredentialCustomerAccountComponent.Reload');
            EcareFramework.loadAsyncForm('customerservice_consoleSummary', {
                isAnimated: true
            });
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.GetAccountDetailsPage.Failure');
        EcarePubSub.subscribe('UXEvent.CAAP.GetAccountDetailsPage.Failure', function(eventName, data) {
            showErrorCredentials(data.message);
        });
        OPL.UI.on('modules.modal.opened', function() {
            $("#credentialsAccountDetails").prop("disabled", "");
        }, 'accountDetailsModal');
    };

    EcareFramework.changeEmail = function(containerToUse) {
        EcarePubSub.publish('UXEvent.CAAP.ChangeEmailByConsultant.Init', {
            containerId: containerToUse
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.ChangeEmailByConsultant.Completed');
        EcarePubSub.subscribe('UXEvent.CAAP.ChangeEmailByConsultant.Completed', function() {
            EcareFramework.loadAsyncForm('customerservice_consoleSummary', {
                isAnimated: true
            });
        });
    };

    EcareFramework.checkAuthorization = function(cmspageaction, link, modalHeader, afterAuthorize,
        disableAdditionalAuthorizationCheckbox) {
        $.ajax({
            url: cmspageaction + "/checkAuthorization?afterAuthorize=" + afterAuthorize,
            type: 'POST',
            data: '',
            contentType: 'application/json; charset=UTF-8',
            headers: {
                'CSRFToken': $("#CSRFToken").val()
            },
            dataType: "json",
            success: function(data) {
                if (data.authorized) {
                    window.location = link;
                } else {
                    EcarePubSub.unsubscribe('UXEvent.CAAP.AdditionalAuthorization.Completed');
                    EcarePubSub.subscribe('UXEvent.CAAP.AdditionalAuthorization.Completed', function() {
                        EcareFramework.checkAuthorization(cmspageaction, link, modalHeader, true);
                        EcarePubSub.publish('UXEvent.Ecare.CredentialComponent.Reload');
                    });
                    EcarePubSub.unsubscribe('UXEvent.CAAP.AdditionalAuthorization.Back');
                    EcarePubSub.subscribe('UXEvent.CAAP.AdditionalAuthorization.Back', function() {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, 'authorizeModal');
                    });
                    prepareAndOpenModal(modalHeader, disableAdditionalAuthorizationCheckbox);
                }
            }
        });
    };

    EcareFramework.scrollToCredentials = function(event) {
        event.preventDefault();
        if ($("#parent_customerCredentials").parent().parent().hasClass('is-expanded')) {
            EcareFramework.scrollTo('#parent_customerCredentials');
        } else {
            OPL.UI.on('modules.expander.expanded', function() {
                OPL.UI.off('modules.expander.expanded');
                EcareFramework.scrollTo('#parent_customerCredentials');
            });
            $("#parent_customerCredentials").parent().parent().find(".opl-section__expander-trigger-btn").click();
        }
    };

    EcareFramework.checkAuthorizationForRemoveAccount = function(cmspageaction, isDeleted, containerToUse, modalHeader,
        afterAuthorize, disableAdditionalAuthorizationCheckbox) {
        var eventInit;
        var eventCompleted;
        if (isDeleted) {
            eventInit = 'UXEvent.CAAP.ConfirmDeleteAccount.Init';
            eventCompleted = 'UXEvent.CAAP.DeleteAccount.Completed';
        } else {
            eventInit = 'UXEvent.CAAP.DeleteAccount.Init';
            eventCompleted = 'UXEvent.CAAP.DeleteAccount.Completed';
        }

        $.ajax({
            url: cmspageaction + "/checkAuthorization?afterAuthorize=" + afterAuthorize,
            type: 'POST',
            data: '',
            contentType: 'application/json; charset=UTF-8',
            headers: {
                'CSRFToken': $("#CSRFToken").val()
            },
            dataType: "json",
            success: function(data) {
                clearErrorCredentials();
                if (data.authorized) {
                    EcarePubSub.publish(eventInit, {
                        containerId: containerToUse
                    });
                    EcarePubSub.unsubscribe(eventCompleted);
                    EcarePubSub.subscribe(eventCompleted, function() {
                        EcarePubSub.publish('UXEvent.Ecare.CredentialCustomerAccountComponent.Reload');
                    });
                    EcarePubSub.unsubscribe('UXEvent.CAAP.DeleteAccount.Failure');
                    EcarePubSub.subscribe('UXEvent.CAAP.DeleteAccount.Failure', function(eventName, data) {
                        showErrorCredentials(data.message);
                    });
                } else {
                    EcarePubSub.unsubscribe('UXEvent.CAAP.AdditionalAuthorization.Completed');
                    EcarePubSub.subscribe('UXEvent.CAAP.AdditionalAuthorization.Completed', function() {
                        EcareFramework.checkAuthorizationForRemoveAccount(cmspageaction, isDeleted, containerToUse, true);
                        EcarePubSub.publish('UXEvent.Ecare.CredentialComponent.Reload');
                        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, 'authorizeModal');
                    });
                    EcarePubSub.unsubscribe('UXEvent.CAAP.AdditionalAuthorization.Back');
                    EcarePubSub.subscribe('UXEvent.CAAP.AdditionalAuthorization.Back', function() {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, 'authorizeModal');
                    });
                    prepareAndOpenModal(modalHeader, disableAdditionalAuthorizationCheckbox);
                }
            }
        });
    };

    EcareFramework.deletePortalAccountByConsultant = function(isDeleted, containerToUse) {
        var eventInit;
        var eventCompleted;
        if (isDeleted) {
            eventInit = 'UXEvent.CAAP.ConfirmDeleteAccountByConsultant.Init';
            eventCompleted = 'UXEvent.CAAP.DeleteAccountByConsultant.Completed';
        } else {
            eventInit = 'UXEvent.CAAP.DeleteAccountByConsultant.Init';
            eventCompleted = 'UXEvent.CAAP.DeleteAccountByConsultant.Completed';
        }

        EcarePubSub.publish(eventInit, {
            containerId: containerToUse
        });
        EcarePubSub.unsubscribe(eventCompleted);
        EcarePubSub.subscribe(eventCompleted, function() {
            EcareFramework.refreshClientSummary();
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.DeleteAccountByConsultant.Failure');
        EcarePubSub.subscribe('UXEvent.CAAP.DeleteAccountByConsultant.Failure', function(eventName, data) {
            showErrorCredentials(data.message);
        });
    };

    EcareFramework.blockPortalAccountByConsultant = function(isBlocked, containerToUse) {
        $("#credentialsBlockAccount").prop("disabled", "true");
        var eventInit;
        var eventCompleted;
        if (!isBlocked) {
            eventInit = 'UXEvent.CAAP.BlockPortalAccountByConsultantPage.Init';
            eventCompleted = 'UXEvent.CAAP.BlockPortalAccountByConsultant.Completed';
        } else {
            eventInit = 'UXEvent.CAAP.UnblockPortalAccountByConsultantPage.Init';
            eventCompleted = 'UXEvent.CAAP.BlockPortalAccountByConsultant.Completed';
        }
        EcarePubSub.publish(eventInit, {
            containerId: containerToUse
        });
        EcarePubSub.unsubscribe(eventCompleted);
        EcarePubSub.subscribe(eventCompleted, function() {
            EcareFramework.refreshClientSummary();
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.BlockPortalAccountByConsultant.Failure');
        EcarePubSub.subscribe('UXEvent.CAAP.BlockPortalAccountByConsultant.Failure', function(eventName, data) {
            showErrorCredentials("Coś poszło nie tak");
        });
        OPL.UI.on('modules.modal.opened', function() {
            $("#credentialsBlockAccount").prop("disabled", "");
        }, 'blockPortalAccountByConsultantModal');
    };


    EcareFramework.deletePortalAccountByConsultant = function(isDeleted, containerToUse) {
        $("#credentialsDeleteAccount").prop("disabled", "true");
        var eventInit;
        var eventCompleted;
        if (isDeleted) {
            eventInit = 'UXEvent.CAAP.ConfirmDeleteAccountByConsultant.Init';
            eventCompleted = 'UXEvent.CAAP.DeleteAccountByConsultant.Completed';
        } else {
            eventInit = 'UXEvent.CAAP.DeleteAccountByConsultant.Init';
            eventCompleted = 'UXEvent.CAAP.DeleteAccountByConsultant.Completed';
        }

        EcarePubSub.publish(eventInit, {
            containerId: containerToUse
        });
        EcarePubSub.unsubscribe(eventCompleted);
        EcarePubSub.subscribe(eventCompleted, function() {
            EcareFramework.refreshClientSummary();
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.DeleteAccountByConsultant.Failure');
        EcarePubSub.subscribe('UXEvent.CAAP.DeleteAccountByConsultant.Failure', function(eventName, data) {
            showErrorCredentials(data.message);
        });
        OPL.UI.on('modules.modal.opened', function() {
            $("#credentialsDeleteAccount").prop("disabled", "");
        }, 'confirmAccountDeletionByConsultantModal');
    };


    EcareFramework.deletePortalAccountByAdministrator = function(containerToUse) {
        var eventInit;
        var eventCompleted;
        eventInit = 'UXEvent.CAAP.ConfirmDeleteAccountByAdministrator.Init';
        eventCompleted = 'UXEvent.CAAP.DeleteAccountByAdministrator.Completed';

        EcarePubSub.publish(eventInit, {
            containerId: containerToUse
        });
        EcarePubSub.unsubscribe(eventCompleted);
        EcarePubSub.subscribe(eventCompleted, function() {
            EcareFramework.refreshClientSummary();
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.DeleteAccountByAdministrator.Failure');
        EcarePubSub.subscribe('UXEvent.CAAP.DeleteAccountByAdministrator.Failure', function(eventName, data) {
            showErrorCredentials(data.message);
        });
    };

    EcareFramework.blockPortalAccountByConsultant = function(isBlocked, containerToUse) {
        var eventInit;
        var eventCompleted;
        if (!isBlocked) {
            eventInit = 'UXEvent.CAAP.BlockPortalAccountByConsultantPage.Init';
            eventCompleted = 'UXEvent.CAAP.BlockPortalAccountByConsultant.Completed';
        } else {
            eventInit = 'UXEvent.CAAP.UnblockPortalAccountByConsultantPage.Init';
            eventCompleted = 'UXEvent.CAAP.BlockPortalAccountByConsultant.Completed';
        }
        EcarePubSub.publish(eventInit, {
            containerId: containerToUse
        });
        EcarePubSub.unsubscribe(eventCompleted);
        EcarePubSub.subscribe(eventCompleted, function() {
            EcareFramework.refreshClientSummary();
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.BlockPortalAccountByConsultant.Failure');
        EcarePubSub.subscribe('UXEvent.CAAP.BlockPortalAccountByConsultant.Failure', function(eventName, data) {
            showErrorCredentials("Coś poszło nie tak");
        });
    };


    EcareFramework.addFloatingLabel = function(elementId) {
        $('#' + elementId).change(function() {
            if (this.value) {
                this.classList.add("is-not-empty");
            } else {
                this.classList.remove("is-not-empty");
            }
        });
    };

    EcareFramework.openCreatePortalAccountModal = function() {
        $("#credentialsCreateAccount").prop("disabled", true);
        getPreviousRegistrationData();
        EcareFramework.addFloatingLabel('portalAccountEmail');
        EcareFramework.addFloatingLabel('portalAccountPhoneNumber');
        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, $('#createPortalAccountModal'), 'createPortalAccountModal');
        OPL.UI.on(OPL.UI.EVENTS.modules.modal.closed, function() {
            $("#credentialsCreateAccount").prop("disabled", false);
        });

    };

    EcareFramework.openDeletePortalAccountModal = function() {
        EcarePubSub.publish('UXEvent.CAAP.ConfirmDeleteAccount.Init', 'caapCredentialModalContainer');
        EcarePubSub.unsubscribe('UXEvent.CAAP.DeleteAccount.Completed');
        EcarePubSub.subscribe('', function() {
            EcarePubSub.publish('UXEvent.Ecare.CredentialCustomerAccountComponent.Reload');
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.DeleteAccount.Failure');
        EcarePubSub.subscribe('UXEvent.CAAP.DeleteAccount.Failure', function(eventName, data) {
            showErrorCredentials(data.message);
        });
    };

    EcareFramework.showOtherAccountAlreadyExistsForEmailMessage = function() {
        $('#otherAccountAlreadyExistsForEmailMessage').removeClass('u-acc-hide');
        var $accountAlreadyExistsMessage = $('#accountAlreadyExistsMessage');
        $accountAlreadyExistsMessage.addClass('u-acc-hide');
        if (!$accountAlreadyExistsMessage.hasClass('u-acc-hide')) {
            $accountAlreadyExistsMessage.addClass('u-acc-hide')
        }
        var $emailIsIncorrectMessage = $('#emailIsIncorrectMessage');
        if (!$emailIsIncorrectMessage.hasClass('u-acc-hide')) {
            $emailIsIncorrectMessage.addClass('u-acc-hide')
        }
        var $phoneNumberIsIncorrectMessage = $('#phoneNumberIsIncorrectMessage');
        if (!$phoneNumberIsIncorrectMessage.hasClass('u-acc-hide')) {
            $phoneNumberIsIncorrectMessage.addClass('u-acc-hide')
        }
    };

    EcareFramework.showAccountAlreadyExistsMessage = function() {
        $('#accountAlreadyExistsMessage').removeClass('u-acc-hide');
        var $otherAccountAlreadyExistsForEmailMessage = $('#otherAccountAlreadyExistsForEmailMessage');
        if (!$otherAccountAlreadyExistsForEmailMessage.hasClass('u-acc-hide')) {
            $otherAccountAlreadyExistsForEmailMessage.addClass('u-acc-hide')
        }
        var $emailIsIncorrectMessage = $('#emailIsIncorrectMessage');
        if (!$emailIsIncorrectMessage.hasClass('u-acc-hide')) {
            $emailIsIncorrectMessage.addClass('u-acc-hide')
        }
        var $phoneNumberIsIncorrectMessage = $('#phoneNumberIsIncorrectMessage');
        if (!$phoneNumberIsIncorrectMessage.hasClass('u-acc-hide')) {
            $phoneNumberIsIncorrectMessage.addClass('u-acc-hide')
        }
    };

    EcareFramework.createPortalAccount = function(ecareConsoleContextPath, cmspageaction) {
        var $createPortalAccountButton = $('#createPortalAccountButton');
        if ($createPortalAccountButton.attr('disabled') !== 'disabled') {
            $createPortalAccountButton.attr('disabled', 'disabled');
            $.ajax({
                url: ecareConsoleContextPath + "/account/createPortalAccountByConsultant",
                type: "POST",
                async: true,
                headers: {
                    'CSRFToken': $("#CSRFToken").val()
                },
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({
                    portalAccountEmail: $("#portalAccountEmail").val().replace(/ /g, ''),
                    portalAccountPhoneNumber: $("#portalAccountPhoneNumber").val().replace(/ /g, '').replace(/\_/g, '')
                }),
                error: function() {
                    console.log('Error during portal account creation.');
                    $("#createPortalAccountButton").removeAttr('disabled');
                },
                success: function(data) {
                    if (data.status === 'OK') {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, $('#createPortalAccountModal'));
                        EcareFramework.refreshClientSummary();
                    } else if (data.status === 'USER_ACCOUNT_ALREADY_CREATED') {
                        EcareFramework.showAccountAlreadyExistsMessage();
                    } else if (data.status === 'ACCOUNT_ALREADY_EXISTS') {
                        EcareFramework.showOtherAccountAlreadyExistsForEmailMessage();
                    } else {
                        $('#accountAlreadyExistsMessage').addClass('u-acc-hide');
                        var $emailIsIncorrectMessage = $('#emailIsIncorrectMessage');
                        var $phoneNumberIsIncorrectMessage = $('#phoneNumberIsIncorrectMessage');
                        if (data.status === 'EMAIL_VALUE_IS_INCORRECT') {
                            $emailIsIncorrectMessage.removeClass('u-acc-hide');
                            if (!$phoneNumberIsIncorrectMessage.hasClass('u-acc-hide')) {
                                $phoneNumberIsIncorrectMessage.addClass('u-acc-hide')
                            }
                        } else if (data.status === 'PHONE_VALUE_IS_INCORRECT') {
                            if (!$emailIsIncorrectMessage.hasClass('u-acc-hide')) {
                                $emailIsIncorrectMessage.addClass('u-acc-hide')
                            }
                            $phoneNumberIsIncorrectMessage.removeClass('u-acc-hide');
                        } else {
                            console.log('Error during portal account creation.');
                        }
                    }
                    $("#createPortalAccountButton").removeAttr('disabled');
                }
            });
        }
    };

    /*
     * Refreshing client summary component probably could be wiser than that.
     * I don't know which  publish/subscribe method to invoke in ecare
     * So CAAP is happy with this refreshing method.
     *
     * None of these worked:
     * EcareFramework.loadAsyncForm('customerservice_consoleSummary', {isAnimated: true});
     * EcarePubSub.publish('UXEvent.Ecare.CredentialCustomerAccountComponent.Reload');
     * EcarePubSub.publish('UXEvent.Ecare.CredentialComponent.Reload');
     */
    EcareFramework.refreshClientSummary = function() {
        location.reload();
    };

    EcareFramework.checkAuthorizationForPasswordChange = function(cmspageaction, event, containerToUse, modalHeader,
        afterAuthorize, disableAdditionalAuthorizationCheckbox) {
        $.ajax({
            url: cmspageaction + "/checkAuthorization?afterAuthorize=" + afterAuthorize,
            type: 'POST',
            data: '',
            contentType: 'application/json; charset=UTF-8',
            headers: {
                'CSRFToken': $("#CSRFToken").val()
            },
            dataType: "json",
            success: function(data) {
                if (data.authorized) {
                    EcarePubSub.publish(event, {
                        containerId: containerToUse
                    });
                } else {
                    EcarePubSub.unsubscribe('UXEvent.CAAP.AdditionalAuthorization.Completed');
                    EcarePubSub.subscribe('UXEvent.CAAP.AdditionalAuthorization.Completed', function() {
                        EcareFramework.checkAuthorizationForPasswordChange(cmspageaction, event, containerToUse, true);
                        EcarePubSub.publish('UXEvent.Ecare.CredentialComponent.Reload');
                    });
                    EcarePubSub.unsubscribe('UXEvent.CAAP.AdditionalAuthorization.Back');
                    EcarePubSub.subscribe('UXEvent.CAAP.AdditionalAuthorization.Back', function() {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, 'authorizeModal');
                    });
                    prepareAndOpenModal(modalHeader, disableAdditionalAuthorizationCheckbox);
                }
            }
        });
    };


    EcareFramework.loadAuthorizationForm = function(modal, containerId, completeCallback, backCallback, modalHeader,
        disableAdditionalAuthorizationCheckbox, autorizationMethod) {
        EcarePubSub.unsubscribe('UXEvent.CAAP.AdditionalAuthorization.Completed');
        EcarePubSub.subscribe('UXEvent.CAAP.AdditionalAuthorization.Completed', function() {
            completeCallback();
            if (modal) {
                OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, 'authorizeModal');
            }
            EcarePubSub.publish('UXEvent.Ecare.CredentialComponent.Reload');
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.AdditionalAuthorization.Back');
        EcarePubSub.subscribe('UXEvent.CAAP.AdditionalAuthorization.Back', function() {
            backCallback();
        });
        if (modal) {
            prepareAndOpenModal(modalHeader, disableAdditionalAuthorizationCheckbox);
        } else {
            if (autorizationMethod === 'SMS') {
                EcarePubSub.publish('UXEvent.CAAP.AdditionalAuthorization.Init', {
                    containerId: containerId,
                    disableCheckboxShow: !disableAdditionalAuthorizationCheckbox
                });
            } else if (autorizationMethod === 'EMAIL') {
                EcarePubSub.publish('UXEvent.CAAP.AdditionalAuthorization.Init', {
                    containerId: containerId,
                    authorizationType: "EMAIL",
                    disableCheckboxShow: !disableAdditionalAuthorizationCheckbox
                });
            } else {
                console.log("Authorization method not recognized " + autorizationMethod);
            }
        }
    };

    EcareFramework.phoneVerificationForm = function(containerId, pageVariant, completeCallback, backCallback) {
        EcarePubSub.unsubscribe('UXEvent.CAAP.PhoneVerification.Completed');
        EcarePubSub.subscribe('UXEvent.CAAP.PhoneVerification.Completed', function() {
            completeCallback();
        });
        EcarePubSub.unsubscribe('UXEvent.CAAP.PhoneVerification.Back');
        EcarePubSub.subscribe('UXEvent.CAAP.PhoneVerification.Back', function() {
            backCallback();
        });
        EcarePubSub.publish('UXEvent.CAAP.PhoneVerification.Init', {
            containerId: containerId,
            pageVariant: pageVariant
        });
    };


    EcareFramework.bpmsChangeSimForm = function(containerId, token, triggerId, modalDivId, completeCallback, closeCallback) {
        EcarePubSub.unsubscribe('UXEvent.BPMS.Modal.Cancel');
        EcarePubSub.subscribe('UXEvent.BPMS.Modal.Cancel', function() {
            EcarePubSub.publish('UXEvent.BPMS.Modal.Close');
            location.reload();
        });

        EcarePubSub.unsubscribe('UXEvent.BPMS.Modal.Complete');
        EcarePubSub.subscribe('UXEvent.BPMS.Modal.Complete', function() {
            completeCallback();
        });

        EcarePubSub.publish('UXEvent.BPMS.Modal.Init', {
            containerId: containerId,
            token: token,
            triggerId: triggerId,
            modalId: modalDivId
        });
    };


    EcareFramework.bpmsHandleCloseEvent = function(anchorId) {

        OPL.UI.off('modules.modal.closed', null, anchorId);

        OPL.UI.on('modules.modal.closed', function() {

            EcarePubSub.publish('UXEvent.BPMS.Modal.Close');
            location.reload();

        }, anchorId);


    };


    return EcareFramework;
})(EcareFramework || {});