var lead = {

    removeOldModalSummary: function() {
        if ($("#modal-summary").length > 0) {
            $("#modal-summary").remove();
        }
    },

    getStopModulesCallback: function(componentDiv) {
        return function() {
            lead.removeOldModalSummary();
            OPL.UI.stopModules(componentDiv[0]);
        };
    },

    getInitModulesCallback: function(componentDiv) {
        return function() {
            var innerComponentDiv = componentDiv.find('div[data-component-uid="' + componentDiv.attr('id') + '"]');
            OPL.UI.initModules(innerComponentDiv[0]);
            $('.components-count-container').text(innerComponentDiv.data('components-count'));
        };
    },

    getResponseCallback: function(element) {
        return function(response) {
            $(element).html(response);
        }
    },

    refreshComponent: function(refreshSequence) {
        var promises = [];
        for (var index = 0; index < refreshSequence.length; index++) {
            var innerComponentDiv = $('div[data-component-uid="' + refreshSequence[index] + '"]');
            var componentDiv = $('#' + refreshSequence[index]);
            var componentUrl = innerComponentDiv.attr('data-component-url');
            if (componentUrl !== undefined) {
                var promise = $.ajax({
                    cache: false,
                    url: componentUrl,
                    type: "GET",
                    contentType: "text/html",
                    context: componentDiv,
                    beforeSend: lead.getStopModulesCallback(innerComponentDiv),
                    success: lead.getResponseCallback(componentDiv),
                    complete: lead.getInitModulesCallback(componentDiv)
                });
                promises.push(promise);
            }
        }
        $.when.apply($, promises).then(function() {
            $.ajax({
                cache: false,
                url: "/view/MagnumConfiguratorComponentController/stepPositions",
                type: "GET",
                contentType: "application/json",
                success: function(data) {
                    var stepsSize = 0;
                    $.each(data, function(k, v) {
                        $('#step-count-' + k).text(v)
                        stepsSize += 1;
                    })
                    $('.components-count-container').text(stepsSize)
                },
                error: function() {
                    window.location.replace("/love/konfigurator");
                }
            });
        }, function() {
            window.location.replace("/love/konfigurator");
        });
    },

    changeInternetOffer: function(id) {
        var element = $("#" + id);
        var refreshSequence = element.data("refresh-sequence");
        var downloadSpeed = element.data("download-speed");
        var internetOfferCodeDataJSON = {
            "parameter": element.val()
        };
        $.ajax({
            url: "/love/konfigurator/zmienInternet",
            type: "POST",
            data: JSON.stringify(internetOfferCodeDataJSON), // Send the object.
            contentType: "application/json",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                lead.refreshComponent(refreshSequence);
            },
            error: function(data) {
                lead.handleAsyncError(data, element)
            }
        });

        //GTM
        dataLayer.push({
            'dostepnosc_po_weryfikacji': downloadSpeed
        });
    },

    changeTvSwitch: function(id) {
        var element = $("#" + id);
        var refreshSequence = element.data("refresh-sequence");
        var internetOfferCodeDataJSON = {
            "parameter": id
        };
        $.ajax({
            url: "/love/konfigurator/tv",
            type: "POST",
            data: JSON.stringify(internetOfferCodeDataJSON), // Send the object.
            contentType: "application/json",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                lead.refreshComponent(refreshSequence);
            },
            error: function(data) {
                lead.handleAsyncError(data, element)
            }
        });


        // GTM
        var gtmId = this.id;
        dataLayer.push({
            'offerType': (gtmId === 'radio-tv-1' ? 'z-telewizja' : 'bez-telewizji')
        });
    },

    changeTvOffer: function(id) {
        var element = $("#" + id);
        var refreshSequence = element.data("refresh-sequence");
        var tvDataJSON = {
            "parameter": element.val()
        };
        $.ajax({
            url: "/love/konfigurator/selectBundle",
            type: "POST",
            data: JSON.stringify(tvDataJSON), // Send the object.
            contentType: "application/json",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                lead.refreshComponent(refreshSequence);
            },
            error: function(data) {
                lead.handleAsyncError(data, element)
            }
        });
    },

    changeTvAdditional: function(id) {
        var element = $("#" + id);
        var isChecked = element.prop('checked');
        var refreshSequence = element.data("refresh-sequence");
        var dataJSON = {
            "code": element.data("tvoffer"),
            "selected": isChecked,
            "offer": element.val()
        };
        $.ajax({
            url: "/love/konfigurator/selectTvPack",
            type: "POST",
            data: JSON.stringify(dataJSON), // Send the object.
            contentType: "application/json",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                lead.refreshComponent(refreshSequence);
            },
            error: function(data) {
                lead.handleAsyncError(data, element)
            }
        });
    },
    selectGroupedAdditonal: function(id) {
        var element = $("#" + id);
        var isChecked = element.prop('checked');
        var selected = element.data("selected");

        if (selected) {
            isChecked = false;
            element.prop('checked', false);
        }
        var refreshSequence = element.data("refresh-sequence");
        var offer = element.data('offer')
        var dataJSON = {
            "code": element.data("additionalcode"),
            "selected": isChecked,
            "offer": offer
        };
        var group = element.data('group');
        var radios = $('input[name="' + offer + '-' + group + '-additional"]');
        radios.each(function() {
            var element = $('#' + this.id);
            var selected = element.data("selected");
            if (selected) {
                element.data("selected", false);
                element.change();
            }
        })
        $.ajax({
            url: "/love/konfigurator/selectAdditional",
            type: "POST",
            data: JSON.stringify(dataJSON), // Send the object.
            contentType: "application/json",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                lead.refreshComponent(refreshSequence);
            },
            error: function(data) {
                lead.handleAsyncError(data, element)
            }
        });
    },

    changeDeviceSwitch: function(id) {
        var element = $("#" + id);
        var refreshSequence = element.data("refresh-sequence");
        var withDevice = element.data('with-device');
        var dataJSON = {
            "parameter": withDevice
        };
        $.ajax({
            url: "/love/konfigurator/smartphone",
            type: "POST",
            data: JSON.stringify(dataJSON),
            contentType: "application/json",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                lead.refreshComponent(refreshSequence);
            },
            error: function(data) {
                lead.handleAsyncError(data, element)
            }
        });


        // GTM
        dataLayer.push({
            'offerType': (JSON.parse(withDevice) ? 'ze-smartfonem' : 'bez-smartfona')
        });
    },

    changeInteDeviceSwitch: function(id) {
        var element = $("#" + id);
        var refreshSequence = element.data("refresh-sequence");
        var withInetDevice = element.data('with-inet-device');
        var dataJSON = {
            "parameter": withInetDevice
        };
        $.ajax({
            url: "/love/konfigurator/selectInternetDevice",
            type: "POST",
            data: JSON.stringify(dataJSON),
            contentType: "application/json",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                lead.refreshComponent(refreshSequence);
            },
            error: function(data) {
                lead.handleAsyncError(data, element)
            }
        });


        // GTM
        dataLayer.push({
            'offerType': (JSON.parse(withInetDevice) ? 'ze-urzadzenie-lte' : 'bez-urzadzenia-lte')
        });
    },

    changeMobileOffer: function(id) {
        var element = $("#" + id);
        $("#" + element.data("button-id")).addClass("opl-btn-disabled");
        var refreshSequence = element.data("refresh-sequence");
        var listsOfVariants = $('.variant-list');
        var checkedValue = listsOfVariants.find("input[name=variant_" + element.data('device-code') + "]:checked").val();
        if (!checkedValue) {
            checkedValue = element.data('device-code');
        }
        var deviceDataJSON = {
            "parameter": checkedValue
        };
        $.ajax({
            url: "/love/konfigurator/selectSmartphone",
            type: "POST",
            data: JSON.stringify(deviceDataJSON), // Send the object.
            contentType: "application/json",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                lead.refreshComponentAfterMobileOfferChange(refreshSequence);
            },
            error: function(data) {
                lead.handleAsyncError(data, element)
            }
        });
    },

    refreshComponentAfterMobileOfferChange: function(refreshSequence) {
        var promises = [];
        for (var index = 0; index < refreshSequence.length; index++) {
            var innerComponentDiv = $('div[data-component-uid="' + refreshSequence[index] + '"]');
            var componentDiv = $('#' + refreshSequence[index]);
            var componentUrl = innerComponentDiv.attr('data-component-url');
            if (componentUrl !== undefined) {
                var promise = $.ajax({
                    cache: false,
                    url: componentUrl,
                    type: "GET",
                    contentType: "text/html",
                    context: componentDiv,
                    beforeSend: lead.getStopModulesCallback(innerComponentDiv),
                    success: lead.getResponseCallback(componentDiv),
                    complete: lead.getInitModulesCallback(componentDiv)
                });
                promises.push(promise);
            }
        }
        $.when.apply($, promises).then(function() {
            $.ajax({
                cache: false,
                url: "/view/MagnumConfiguratorComponentController/stepPositions",
                type: "GET",
                contentType: "application/json",
                success: function(data) {
                    var stepsSize = 0;
                    $.each(data, function(k, v) {
                        $('#step-count-' + k).text(v)
                        stepsSize += 1;
                    })
                    $('.components-count-container').text(stepsSize)
                },
                error: function() {
                    window.location.replace("/love/konfigurator");
                }
            });
        }, function() {
            window.location.replace("/love/konfigurator");
        });
    },

    changeMobileInternetOffer: function(id) {
        var element = $("#" + id);
        var refreshSequence = element.data("refresh-sequence");
        var listsOfVariants = $('.variant-list');
        var checkedValue = listsOfVariants.find("input[name=variant_" + element.data('device-code') + "]:checked").val();
        if (!checkedValue) {
            checkedValue = element.data('device-code');
        }
        var deviceDataJSON = {
            "parameter": checkedValue
        };
        $.ajax({
            url: "/love/konfigurator/selectInternetDevice",
            type: "POST",
            data: JSON.stringify(deviceDataJSON), // Send the object.
            contentType: "application/json",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                lead.refreshComponent(refreshSequence);
            },
            error: function(data) {
                lead.handleAsyncError(data, element)
            }
        });
    },

    selectAdditionalItem: function(id) {
        var element = $("#" + id);
        var refreshSequence = element.data("refresh-sequence");
        var itemDataJson = {
            "code": element.data('item-code'),
            selected: true
        };
        $.ajax({
            url: "/love/konfigurator/selectAdditionalDevice",
            type: "POST",
            data: JSON.stringify(itemDataJson),
            contentType: "application/json",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                lead.refreshComponent(refreshSequence);
            },
            error: function(data) {
                lead.handleAsyncError(data, element)
            }
        });
    },

    selectMobileAdditional: function(id) {

        var element = $("#" + id);
        var isChecked = element.prop('checked');
        element.prop('checked', isChecked);

        if (!isChecked) {
            var selected = element.data("selected");

            if (selected) {
                isChecked = false;
                element.prop('checked', false);
            }
            lead.executeSelectMobileAdditional(element, isChecked);
        } else {
            lead.processUpdateCheckboxes(element, isChecked);
        }
    },

    processUpdateCheckboxes: function(element, isChecked) {
        var myCheckbox = document.getElementsByName("mobile-additional-item");
        var otherElementChecked = false;
        Array.prototype.forEach.call(myCheckbox, function(el) {
            var isActualelElementChecked = $(el).prop('checked');
            if (element.attr('id') !== el.id && isActualelElementChecked) {
                otherElementChecked = true;
                el.checked = false;
                var dataJSON = {
                    "code": $(el).data("additionalcode"),
                    "selected": false,
                    "offer": $(el).data('mobileoffer')
                };
                $.ajax({
                    url: "/love/konfigurator/selectMobileAdditional",
                    type: "POST",
                    data: JSON.stringify(dataJSON), // Send the object.
                    contentType: "application/json",
                    headers: {
                        "CSRFToken": ACC.common.CSRFToken
                    },
                    success: function() {
                        lead.executeSelectMobileAdditional(element, isChecked);
                    },
                    error: function(data) {
                        lead.handleAsyncError(data, element)
                    }
                });
            }
        });

        if (!otherElementChecked) {
            var selected = element.data("selected");
            if (selected) {
                isChecked = false;
                element.prop('checked', false);
            }
            lead.executeSelectMobileAdditional(element, isChecked);
        }
    },


    executeSelectMobileAdditional: function(element, isChecked) {
        var refreshSequence = element.data("refresh-sequence");
        var dataJSON = {
            "code": element.data("additionalcode"),
            "selected": isChecked,
            "offer": element.data('mobileoffer')
        };
        $.ajax({
            url: "/love/konfigurator/selectMobileAdditional",
            type: "POST",
            data: JSON.stringify(dataJSON), // Send the object.
            contentType: "application/json",
            headers: {
                "CSRFToken": ACC.common.CSRFToken
            },
            success: function() {
                lead.refreshComponent(refreshSequence);
            },
            error: function(data) {
                lead.handleAsyncError(data, element)
            }
        });
    },

    handleAsyncError: function(data, element) {
        if (data.status === 400) {
            var elementUid = element.data("component-uid");
            var refreshSeq = [];
            refreshSeq.push(elementUid);
            lead.refreshComponent(refreshSeq);
        } else {
            window.location.replace("/love/oferta");
        }
    },

    submitForm: function(formid) {
        if ($("form[id='" + formid + "']")[0]) {
            $($("form[id='" + formid + "']")[0]).submit();
        }
    },

    proceedForm: function(formid) {
        if ($("form[id='" + formid + "']")[0]) {
            $($("form[id='" + formid + "']")[0]).trigger("prevalidationform");
        }
    }
}

document.addEventListener('modules.ready', function() {
    var modalTriggers = $(".magnum-configurator-error-modal");
    OPL.UI.on("module.started", function(data) {
        modalTriggers.each(function() {
            var element = $('#' + this.id);
            if (element.get(0).id === data.element.id && element.data('showModal')) {
                OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, '', element.get(0).id);
            }
        })
    });
});