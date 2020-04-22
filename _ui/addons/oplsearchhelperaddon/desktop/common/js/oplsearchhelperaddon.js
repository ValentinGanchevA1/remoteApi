ACC.searchhelper = {
    bindAll: function() {
        document.addEventListener('framework.ready', function() {
            $("#main-form").on("submit", function(event) {
                event.preventDefault();
                var formElems = $(this).serializeArray().filter(function(elem) {
                    return elem.value !== 'none' && elem.value !== "";
                }).map(function(elem) {
                    var dictionaryId = $("[name='" + elem.name + "']").data("dictionary-id");
                    return dictionaryId ? {
                        "name": dictionaryId,
                        "value": elem.value
                    } : elem;
                });
                var formElementsMap = ACC.searchhelper.toFormElementsMap(formElems);
                var stringToEncode = ACC.searchhelper.getDecodedString(formElementsMap);
                var encodedString = ACC.searchhelper.b64EncodeUnicode(stringToEncode);
                $("#encoded-output").val(encodedString);
            });
            $("#output-form").on("submit", function(event) {
                event.preventDefault();
                document.getElementById("encoded-output").select();
                document.execCommand("copy");
            });

            $("#decode-button").on("click", function(event) {
                event.preventDefault();

                try {
                    $("#encoded-output").val($("#decode-content").val());
                    ACC.searchhelper.decodedStringToInputForm();
                    OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, 'static-modal-1');
                } catch (err) {
                    $('#errorMsg').html('<p>' + err.message + '</p>');
                    $('#errorMsg').css('display', 'block');
                }
            });

            OPL.UI.on('modules.modal.closed', function() {
                $('#errorMsg').css('display', 'none');
                $("#decode-content").val('');
            }, $(this).attr("id"));

        });
    },

    toFormElementsMap: function(elemArray) {
        var result = {};
        $.each(elemArray, function(idx, elem) {
            if (result[elem.name]) {
                result[elem.name] = result[elem.name] + "," + elem.value;
            } else {
                result[elem.name] = elem.value;
            }
        });
        return result;
    },

    getDecodedString: function(elemMap) {
        var result = "";
        $.each(elemMap, function(key, val) {
            result += (result === "" ? "" : ";") + key + "=" + val;
        });
        return result;
    },

    decodedStringToInputForm: function() {
        var decodedStr = ACC.searchhelper.b64DecodeUnicode($("#decode-content").val());
        var decodedArr = decodedStr.split(';');
        var allFormElem = $("#main-form").find('input[type="radio"],input[type="checkbox"],input[type="text"],select,textarea');

        ACC.searchhelper.clearAllFields();

        $.each(decodedArr, function(idx, decodedArrElem) {
            var fieldArr = decodedArrElem.split('=');

            for (var i = 0; i < allFormElem.length; i++) {
                var filterIdName = allFormElem[i]['name'];
                var dictionaryIdDataTag = $(allFormElem[i]).data('dictionary-id').toString();

                if (filterIdName === fieldArr[0] || dictionaryIdDataTag === fieldArr[0]) {
                    var formFields = $("[name='" + allFormElem[i]['name'] + "']");
                    var radioOrCheckbox = formFields.get(0).type;

                    switch (radioOrCheckbox) {
                        case "radio":
                            ACC.searchhelper.handleRadioCase(formFields, fieldArr);
                            break;

                        case "checkbox":
                            ACC.searchhelper.handleCheckboxCase(formFields, fieldArr);
                            break;

                        default:
                            $("[name='" + allFormElem[i]['name'] + "']").val(fieldArr[1]);
                            break;
                    }
                }
            };
        });
    },

    handleRadioCase: function(formFields, fieldArr) {
        for (var j = 0; j < formFields.length; j++) {
            if (formFields[j].value === fieldArr[1]) {
                formFields[j].checked = true;
            }
        };
    },

    handleCheckboxCase: function(formFields, fieldArr) {
        var checkboxSelectedValues = fieldArr[1].split('/');
        for (var k = 0; k < formFields.length; k++) {
            for (var l = 0; l < checkboxSelectedValues.length; l++) {
                if (formFields[k].value === checkboxSelectedValues[l]) {
                    formFields[k].checked = true;
                }
            }
        };
    },

    clearAllFields: function() {
        $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
        $(':checkbox, :radio').prop('checked', false);
        $('select').prop('selectedIndex', 0);
    },

    b64EncodeUnicode: function(str) {
        return btoa(encodeURIComponent(str));
    },

    b64DecodeUnicode: function(str) {
        return decodeURIComponent(atob(str));
    }
};

ACC.searchhelper.bindAll();

var search = {

    filterChange: false,

    setQuery: function(event, id, cmpId, query, isSelected) {
        event.preventDefault();
        if (Boolean(isSelected)) {
            return;
        }
        var queryJSON = {
            "query": query
        };
        OPL.UI.fire('modules.loader.show', null, cmpId);
        $.ajax({
            url: "/view/searchresult/setQuery",
            type: "POST",
            data: JSON.stringify(queryJSON),
            contentType: "application/json; charset=utf-8",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                search.refreshComponent(cmpId, query);
                window.history.pushState(null, null, "/view/searchresult?" + query);
            },
            error: function(request, status, error) {
                search.handleError(request, status, error, "/view/searchresult?" + query);
            }
        });

    },

    refreshComponent: function(cmpId, query) {
        var innerComponentDiv = $('div[data-component-uid="' + cmpId + '"]');
        var componentDiv = $('#' + cmpId);
        var componentUrl = innerComponentDiv.attr('data-component-url');
        if (componentUrl !== undefined) {
            $.ajax({
                cache: false,
                url: componentUrl + "&" + query,
                type: "GET",
                contentType: "text/html; charset=utf-8",
                context: componentDiv,
                beforeSend: search.getStopModulesCallback(innerComponentDiv),
                success: search.getResponseCallback(componentDiv),
                complete: search.getInitModulesCallback(componentDiv, cmpId),
                error: function(request, status, error) {
                    search.handleError(request, status, error);
                }
            });

        }

    },
    getStopModulesCallback: function(componentDiv) {
        return function() {
            OPL.UI.stopModules(componentDiv[0]);
        };
    },

    getInitModulesCallback: function(componentDiv, cmpId) {
        return function() {
            var innerComponentDiv = componentDiv.find('div[data-component-uid="' + componentDiv.attr('id') + '"]');
            OPL.UI.initModules(innerComponentDiv[0]);
            $('.components-count-container').text(innerComponentDiv.data('components-count'));
            OPL.UI.fire('modules.loader.hide', null, cmpId);
            $(window).scrollTop($('#opl').offset().top);
            document.addEventListener('modules.ready', function() {
                if (search.filterChange) {
                    OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, '', 'filtersModal');
                    search.filterChange = false;
                }
            });
        };
    },

    getResponseCallback: function(element) {
        return function(response) {
            if ($(response).find("[data-has-no-result='true']").length > 0) {
                window.location.replace("/view/searchzerohits?q=" + $(response).find("[data-query]").attr("data-query"));
            } else {
                $(element).html(response);
            }
        };
    },

    showMoreListener: function() {
        $(document).on("click", "#showMore", function(event) {
            event.preventDefault();
            var showMore = this;
            var nextPageQuery = $("#nextPageInfo").attr("data-query");
            $("#nextPageInfo").remove();
            var mobile_info = $("#mobile_info");
            var url = "" + $(mobile_info).attr('cmp_url') + "/more_results";
            var moreResultsData = {
                'query': nextPageQuery,
                "componentId": $(mobile_info).attr('cmpId')
            };
            var cmpId = $(this).attr("cmpId");
            $.ajax({
                url: url,
                type: "POST",
                data: JSON.stringify(moreResultsData),
                contentType: "application/json; charset=utf-8",
                headers: {
                    "CSRFToken": ACC.common.CSRFToken
                },
                success: function(response) {
                    $("#nextPageInfo").remove();
                    var search_results = document.getElementById(cmpId);
                    var documentList = document.getElementById("mobile_info");
                    OPL.UI.stopModules(search_results);
                    $(documentList).before(response);
                    OPL.UI.initModules(search_results);
                },
                complete: function() {
                    if ($("#nextPageInfo").attr("data-is-last-page") === "true") {
                        showMore.style.visibility = "hidden";
                    }
                },
                error: function(request, status, error) {
                    search.handleError(request, status, error);
                }
            });
        });
    },
    filtersListener: function() {
        $(document).on("click", 'label[class*="o-checkbox opl-checkbox"],label[class*="o-radio opl-radio"]', function(event) {
            if ($(this).parent().attr('data-id')) {
                var element = $(this).parent();
                var query = $(element).attr('data-id');
                var cmpId = $("#filters-cmp").attr('cmp-id');

                if ($('#filters-modal').parent().hasClass('jquery-modal blocker is-visible') || $('#filters-modal').hasClass('o-modal')) {
                    search.filterChange = true;
                    OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, '', 'filtersModal');

                    $("filters-modal").remove();
                    search.setQuery(event, null, cmpId, query, false);

                } else {
                    search.setQuery(event, null, cmpId, query, false);
                }
            };
        });
    },
    filtersClear: function() {
        $(document).on("click", "#filtersClear", function() {
            var cmpId = $(this).attr('cmp-id');
            var sectionId = $(this).attr('section-id');
            OPL.UI.fire('modules.loader.show', null, cmpId);
            var url = "/view/searchresult/clearSection";
            var dataJSON = {
                "clearSectionId": sectionId
            };
            $.ajax({
                url: url,
                data: JSON.stringify(dataJSON),
                contentType: "application/json; charset=utf-8",
                type: "POST",
                headers: {
                    "CSRFToken": ACC.common.CSRFToken
                },
                success: function(response) {
                    search.refreshAfterFiltersClear(cmpId, response.query);
                },
                error: function(request, status, error) {
                    search.handleError(request, status, error);
                    search.refreshAfterFiltersClear(cmpId, response.query);
                }
            });
        });
    },
    refreshAfterFiltersClear: function(cmpId, responseQuery) {

        if ($('#filters-modal').parent().hasClass('jquery-modal blocker is-visible') || $('#filters-modal').hasClass('o-modal')) {
            search.filterChange = true;
            OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, '', 'filtersModal');

            $("filters-modal").remove();
            search.refreshComponent(cmpId, responseQuery);
        } else {
            search.refreshComponent(cmpId, responseQuery);
        }

    },
    deleteTags: function() {
        $(document).on("click", ".opl-tags__delete", function(event) {
            var query = $(this).attr("data-tagtarget");
            var cmpId = $("#filters-cmp").attr("cmp-id");
            search.setQuery(event, null, cmpId, query, false);
        });
    },
    deleteAllTags: function() {
        $(document).on("click", ".opl-tags__deleteAll", function(event) {
            var query = $("#filtersTagData").attr("query");
            var cmpId = $("#filters-cmp").attr("cmp-id");
            search.setQuery(event, null, cmpId, query, false);
        });
    },

    switchProfile: function(isClient, event) {
        var dataJSON = {
            "isClient": isClient
        };

        var query = $('#OplFWProfileSwitchComponent').attr("data-other-query-string");

        $.ajax({
            url: "/view/searchresult/setClientProfile",
            type: "POST",
            data: JSON.stringify(dataJSON),
            contentType: "application/json; charset=utf-8",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                var cmpId = $("#filters-cmp").attr('cmp-id');
                search.setQuery(event, null, cmpId, query, false);
            }
        });
    },

    documentClick: function() {
        $(document).on("click", "[data-id=doc_title]", function(event) {
            event.preventDefault();
            var url = $(this).attr("data-url");
            var clickUrl = {
                "clickUrl": $(this).attr("data-click-url")
            };
            $.ajax({
                url: "/view/searchresult/registerClick",
                type: "POST",
                data: JSON.stringify(clickUrl),
                contentType: "application/json",
                headers: {
                    "CSRFToken": ACC.common.CSRFToken
                },
                error: function(request, status, error) {
                    search.handleError(request, status, error);
                }
            });

            window.location.href = url;
        });
    },

    profileSwitchListener: function() {
        $(document).on("change", "input.fw-profile-switch", function(event) {
            if ($(this).is(":checked")) {
                search.switchProfile(false, event);
            } else {
                search.switchProfile(true, event);
            }
        });
    },

    handleError: function(request, status, error, url) {
        if (url) {
            $(location).attr('href', url);
        } else {
            location.reload();
        }
    },

    addListeners: function() {
        search.showMoreListener();
        search.filtersListener();
        search.filtersClear();
        search.deleteTags();
        search.deleteAllTags();
        search.documentClick();
        search.profileSwitchListener();
    }
};

$(document).ready(function() {
    if ($('#OplSearchTabsComponent').length > 0) {
        search.addListeners();
    }
});