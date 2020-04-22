ACC.rangeMap = {
    mapID: 'map2',
    currentQuery: '',
    defaultMessage: 'Przykro nam, w naszej bazie nie ma podanego adresu.',
    ftthMessage: 'Przykro nam, w naszej bazie nie ma podanego adresu.',
    wwtMessage: 'Przykro nam, w naszej bazie nie ma podanego adresu.',
    currentMapBounds: null,
    dummyQuery: '::type:dummy',
    lastInfoWindow: {},
    modulesReadyFired: false,

    bindAll: function() {

        if (typeof query !== 'undefined') {
            this.currentQuery = query;
        }
        if (typeof ftthNoMessage !== 'undefined') {
            this.ftthMessage = ftthNoMessage;
            this.ftthMessage = this.ftthMessage.replace(/"/g, '\\\"');
        }
        if (typeof wwtNoMessage !== 'undefined') {
            this.wwtMessage = wwtNoMessage;
            this.wwtMessage = this.wwtMessage.replace(/"/g, '\\\"');
        }

        document.addEventListener('framework.ready', function() {
            console.log("Services Map framework ready");

            /*
             * Dirty fix for race condition in Internet Explorer
             */
            setTimeout(function() {
                if (OPL.UI.isIE() && !ACC.rangeMap.modulesReadyFired) {
                    var evt = document.createEvent('Event');
                    evt.initEvent('modules.ready', true, true);
                    document.dispatchEvent(evt);
                }
            }, 3000);

            var mapID = ACC.rangeMap.mapID;

            $("input[facetvalue='poi']").prop("checked", true);

            OPL.UI.on('modules.gmap.infoWindowClosed', function() {
                OPL.UI.off('modules.gmap.allMarkersAdded');
            }, mapID);


            OPL.UI.on('modules.gmap.infoWindowOpened', function() {
                OPL.UI.on('modules.gmap.allMarkersAdded', ACC.rangeMap.showInfoWindowHandler);
            }, mapID);


            OPL.UI.on('modules.gmap.mapLocationChanged', function(map) {
                ACC.rangeMap.currentMapBounds = map.bounds;
                ACC.rangeMap.reloadPoi(mapID);
            }, mapID);


            OPL.UI.on('modules.togglerow.completed', function() {
                OPL.UI.fire(OPL.UI.EVENTS.modules.scrollbar.update, "relative", 'poscontainerscroll');
                OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.mapResize, mapID);
            }, 'range-slideColumn');




            OPL.UI.on('modules.gmap.searchResults', function(searchResult) {
                var facetQuery = ACC.rangeMap.currentQuery;
                if (searchResult.inputValue !== "") {
                    ACC.rangeMap.checkPointsOnAddress(searchResult, facetQuery);
                }
            }, mapID);

            OPL.UI.on(OPL.UI.EVENTS.modules.autocomplete.itemSelected, function(target) {
                var cityValue = target.item.value;
                OPL.UI.fire(OPL.UI.EVENTS.modules.autocomplete.querydata, {
                    "city_id": cityValue
                }, 'address-street');
                $("#address-cbsIdCity").val(cityValue);
                var streetInput = $("#address-street");
                streetInput.removeAttr("disabled");
                streetInput.focus();
                $("#address-emptyStreetCheckbox").removeAttr("disabled");
            }, 'address-city');

            OPL.UI.on(OPL.UI.EVENTS.modules.autocomplete.itemSelected, function(target) {
                $("#address-cbsIdStreet").val(target.item.value);
                var houseNumInput = $("#address-houseNum");
                houseNumInput.removeAttr("disabled");
                houseNumInput.focus();
                $("#address-apartmentNum").removeAttr("disabled");
            }, 'address-street');
        });


        document.addEventListener('modules.ready', function() {
            console.log("Services Map modules ready");
            ACC.rangeMap.modulesReadyFired = true;
            var mapID = ACC.rangeMap.mapID;
            $('.map-pointer-trigger').change(function() {
                var facetQuery = $(this).attr('data-facet-query');
                OPL.UI.off('modules.gmap.allMarkersAdded');
                if (!!facetQuery) {
                    ACC.rangeMap.currentQuery = facetQuery;
                } else {
                    ACC.rangeMap.currentQuery = ACC.rangeMap.dummyQuery;
                }
                ACC.rangeMap.reloadPoi(mapID);
            });


            $('input[name="orange-range"]').change(function() {
                OPL.UI.fire(OPL.UI.EVENTS.modules.message.hide, "address-not-found-msg");
                if ($(this).attr('type') == 'checkbox') {
                    var layerInfo = $.parseJSON($(this).val());
                    if ($(this).prop('checked')) {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.geoserverWmts.showLayer, layerInfo, mapID);
                    } else {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.geoserverWmts.clearLayer, layerInfo, mapID);
                    }
                } else {
                    try {
                        var layerInfo = $.parseJSON($(this).val());
                        OPL.UI.fire(OPL.UI.EVENTS.modules.geoserverWmts.clearAllLayers, null, mapID);
                        OPL.UI.fire(OPL.UI.EVENTS.modules.geoserverWmts.showLayer, layerInfo, mapID);
                    } catch (err) {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.geoserverWmts.clearAllLayers, null, mapID);
                    }
                }

                ACC.rangeMap.updateSlaveInput($(this).attr('mirroredValue'));

                //handle loose tooltip on map
                if (!!$(this).attr("mapTooltip")) {
                    OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.infoWindoClickedMapMarker, $("#onMapClickTooltip").html(), mapID);
                } else {
                    OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.infoWindoClickedMapMarker, null, mapID);
                }
                setTimeout(function() {
                    if (!!$("#findlocation").val()) {
                        $("#gsubform").click();
                    }
                }, 500);
            });


            $('input[name="orange-range-mirror"]').click(function() {
                var mirroringValue = $(this).attr('mirroringValue');
                ACC.rangeMap.updateMasterInput(mirroringValue);
            });


            OPL.UI.on('modules.gmap.mapClicked', function(marker) {
                ACC.rangeMap.buildErrorFormLink(ACC.rangeMap.getAddressParts(marker.location()));
            }, mapID);

            $('input[id="address-emptyStreetCheckbox"]').change(function(event) {
                var cityWithoutStreets = event.target.checked;
                var streetInput = $("#address-street");
                streetInput.val("");
                streetInput.prop("disabled", cityWithoutStreets);
                var houseNumInput = $("#address-houseNum");
                houseNumInput.removeAttr("disabled");
                var apartmentNumInput = $("#address-apartmentNum");
                apartmentNumInput.removeAttr("disabled");
                if (cityWithoutStreets) {
                    houseNumInput.focus();
                } else {
                    houseNumInput.prop("disabled", true);
                    apartmentNumInput.prop("disabled", true);
                    streetInput.focus();
                }
            });

            $('input[id="address-houseNum"]').on("input", function(event) {
                var houseNum = event.target.value;
                if (houseNum !== null && houseNum !== 'undefined' && houseNum !== '') {
                    $("#address-propertyNumber").val(houseNum);
                    $("#opl-address__submit").removeAttr("disabled");
                }
            });

            $('button[id="opl-address__submit"]').on("click", function() {
                $.ajax({
                    type: "GET",
                    url: "/telefonybezumowy/poi/szukaj/lokalizacja",
                    data: ACC.rangeMap.prepareLocalizeQuery(),
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    success: function(response) {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.message.hide, "mapmessage");
                        var locationData = JSON.parse(response);
                        if (locationData["code"] !== null && locationData["code"] !== "undefined" && locationData["code"] !== "") {
                            OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.setZoomCenter, {
                                "zoom": locationData["zoom"],
                                "lat": locationData["lat"],
                                "lng": locationData["lng"],
                                "displayTooltip": locationData["content"]
                            }, mapID);

                            ACC.rangeMap.lastInfoWindow["lat"] = locationData["lat"];
                            ACC.rangeMap.lastInfoWindow["lng"] = locationData["lng"];
                            ACC.rangeMap.lastInfoWindow["display"] = locationData["displayTooltip"];
                            if (locationData["content"] === "") {
                                ACC.rangeMap.onSearchError();
                            } else {
                                ACC.rangeMap.showInfoWindow();
                            }
                        } else {
                            ACC.rangeMap.onSearchError();
                        }
                    },
                    error: function() {
                        ACC.rangeMap.onSearchError();
                    },
                });
            });
        });

    },

    reloadPoi: function(mapID) {

        function isFixedInternet() {
            return $('input[facetvalue="poi"]').is(':checked') || $('input[facetvalue="wwt"]').is(':checked');
        }

        function getFilteredItems(poiItems, facetValue) {
            return poiItems.filter(function(poi) {
                return poi.variant === facetValue;
            });
        }

        $.ajax({
            type: "GET",
            url: "/telefonybezumowy/poi/szukaj/koordynaty",
            data: this.buildQuery(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            beforeSend: function() {
                if (isFixedInternet()) {
                    ACC.rangeMap.disableInputsAndShowLoader();
                }
            },

            success: function(response) {
                var items = JSON.parse(response);
                OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.deleteMarkers, 'ftth', mapID);
                OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.deleteMarkers, 'ftth-planing', mapID);
                OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.deleteMarkers, 'wwt', mapID);
                OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.setMarkers, items["poiArray"], mapID);
                var facetValue = $('.map-pointer-trigger:input:checked').attr("facetvalue");
                if (!items["poiArray"].length > 0 && isFixedInternet()) {
                    ACC.rangeMap.onSearchError();
                } else if (facetValue !== "undefined" && facetValue !== null || getFilteredItems(items["poiArray"], facetValue).length > 0) {
                    ACC.rangeMap.showInfoWindow();
                }
            },
            error: function(response) {
                console.log("Error poi not found. " + response.responseText);
            },
            complete: function() {
                ACC.rangeMap.hideLoader();
            }

        });
    },

    showInfoWindowHandler: function() {

        function isInfoWindowVisible(selectedPoint) {
            return selectedPoint.lat < ACC.rangeMap.currentMapBounds.getNorthEast().lat() &&
                selectedPoint.lat > ACC.rangeMap.currentMapBounds.getSouthWest().lat() &&
                selectedPoint.lng > ACC.rangeMap.currentMapBounds.getSouthWest().lng() &&
                selectedPoint.lng < ACC.rangeMap.currentMapBounds.getNorthEast().lng();
        }

        if (isInfoWindowVisible(ACC.rangeMap.lastInfoWindow)) {
            OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.showInfoWindowOnMarker, {
                "lat": ACC.rangeMap.lastInfoWindow["lat"],
                "lng": ACC.rangeMap.lastInfoWindow["lng"],
                "displayTooltip": ACC.rangeMap.lastInfoWindow["display"]
            }, ACC.rangeMap.mapID);
        }
    },

    showInfoWindow: function() {
        ACC.rangeMap.showInfoWindowHandler();
        OPL.UI.on('modules.gmap.allMarkersAdded', ACC.rangeMap.showInfoWindowHandler);
    },

    getAddressParts: function(searchResult) {
        var _tmp = {};
        searchResult.address_components.forEach(function(entry) {
            _tmp[entry.types[0]] = entry.long_name;
        });
        var result = {};
        result["streetNumber"] = _tmp["street_number"];
        if (result["streetNumber"] == null) {
            result["streetNumber"] = _tmp["premise"];
        }
        result["streetName"] = _tmp["route"];
        if (result["streetName"] == null) {
            result["streetName"] = _tmp["locality"];
        }
        result["town"] = _tmp["locality"];
        result["county"] = _tmp["administrative_area_level_2"];
        result["province"] = _tmp["administrative_area_level_1"];
        result["postCode"] = _tmp["postal_code"];
        result["lat"] = searchResult.geometry.location.lat();
        result["lng"] = searchResult.geometry.location.lng();
        return result;
    },

    checkPointsOnAddress: function(searchResult, facetQuery) {
        function isFullAddress(addressParts) {
            return addressParts["streetNumber"] != null;
        }

        function prepareAddressQuery(addressParts, facetQuery) {
            return "t=" + encodeURIComponent(addressParts["town"]) +
                "&s=" + encodeURIComponent(addressParts["streetName"]) +
                "&n=" + encodeURIComponent(addressParts["streetNumber"]) +
                "&lat=" + encodeURIComponent(addressParts["lat"]) +
                "&lng=" + encodeURIComponent(addressParts["lng"]) +
                "&q=" + encodeURIComponent(facetQuery);
        }

        var mapID = ACC.rangeMap.mapID;
        if (ACC.rangeMap.currentQuery !== ACC.rangeMap.dummyQuery) {
            var addressParts = ACC.rangeMap.getAddressParts(searchResult);
            OPL.UI.fire(OPL.UI.EVENTS.modules.message.hide, "mapmessage");
            if (isFullAddress(addressParts)) {
                $.ajax({
                    type: "GET",
                    url: "/telefonybezumowy/poi/szukaj/pelnyadres",
                    data: prepareAddressQuery(addressParts, facetQuery),
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    success: function(response) {
                        var locationData = JSON.parse(response);
                        ACC.rangeMap.lastInfoWindow["lat"] = locationData["lat"];
                        ACC.rangeMap.lastInfoWindow["lng"] = locationData["lng"];
                        ACC.rangeMap.lastInfoWindow["display"] = locationData["displayTooltip"];
                        ACC.rangeMap.showInfoWindow();
                        ACC.comscore.doComscore(locationData, $('#findlocation').val());
                    },
                    error: function() {
                        ACC.rangeMap.onSearchError();
                        var emptyResponse = {};
                        ACC.comscore.doComscore(emptyResponse, $('#findlocation').val());
                    },
                });
            }
        }
    },



    buildErrorFormLink: function(data) {
        var link = $('#reportAnErrorBtn').attr('link-prefix');

        if (typeof data["lat"] !== "undefined" && typeof data["lng"] !== "undefined") {
            var coordinates = '?lat=' + data["lat"] + '&lon=' + data["lng"];
            var address = "";
            if (typeof data["town"] !== "undefined") {
                address += "&city=" + data["town"];
            }
            if (typeof data["streetName"] !== "undefined" && data["streetName"] != "Unnamed Road") {
                address += "&street=" + data["streetName"];
            }
            if (typeof data["streetNumber"] !== "undefined") {
                address += "&number=" + data["streetNumber"];
            }
            if (typeof data["county"] !== "undefined") {
                address += "&county=" + data["county"];
            }
            if (typeof data["province"] !== "undefined") {
                address += "&province=" + data["province"];
            }

            $('#reportAnErrorBtn').attr('href', link + coordinates + address);
            $('#reportAnErrorBtn').attr('style', '');
        } else {
            console.log("latitude or longitude is missing");
        }

    },

    //got two inputs on rangemaps page. both should work as one.
    //change on master should change slave, but with no change event trigered on slave
    updateSlaveInput: function(value) {
        $('input[name="orange-range-mirror"][mirroringValue="' + value + '"]:first').each(function() {
            $(this).prop('checked', true);

        });
    },
    //got two inputs on rangemaps page. both should work as one.
    //change on slave should change master and trigger its change
    updateMasterInput: function(value) {
        $('input[name="orange-range"][mirroredValue="' + value + '"]:first').each(
            function() {
                $(this).prop('checked', true);
                $(this).trigger('change');
            });

    },

    buildQuery: function() {
        var query = "north=" + this.currentMapBounds.getNorthEast().lat() +
            "&east=" + this.currentMapBounds.getNorthEast().lng() +
            "&west=" + this.currentMapBounds.getSouthWest().lng() +
            "&south=" + this.currentMapBounds.getSouthWest().lat();
        if (!!this.currentQuery) {
            query = query + "&q=" + this.currentQuery;
        }
        var ms = $('#map-range-element-container').data('ms');
        if (ms) {
            query += "&ms=" + ms;
        }
        return query;
    },


    disableInputsAndShowLoader: function() {

        ACC.rangeMap.switchInputsDisableTo(true);

        OPL.UI.fire('modules.loader.show', $('#map2'));
    },

    hideLoader: function() {

        OPL.UI.fire('modules.loader.hide', $('#map2'));
        ACC.rangeMap.switchInputsDisableTo(false);
    },

    switchInputsDisableTo: function(newState) {
        $('input[name="orange-range"]').prop("disabled", newState);
        $('input[name="orange-range-mirror"]').prop("disabled", newState);
        $("#findlocation").prop("disabled", newState);
        $('#gsubform').prop("disabled", newState);
    },

    prepareLocalizeQuery: function() {
        return "&cbsIdCity=" + encodeURIComponent($('input[id="address-cbsIdCity"]').val()) +
            "&cbsIdStreet=" + encodeURIComponent($('input[id="address-cbsIdStreet"]').val()) +
            "&roadNo=" + encodeURIComponent($('input[id="address-houseNum"]').val()) +
            "&q=" + encodeURIComponent(this.currentQuery);
    },

    onSearchError: function() {
        console.log("POI not found.");

        if ($('input[facetvalue="poi"]').is(':checked')) {
            OPL.UI.fire(OPL.UI.EVENTS.modules.message.show, '{"type": "info","icon": {"icontype": "g-icon--localizator", "size":"s"},"text": {"desc": "' + ACC.rangeMap.ftthMessage + '"}}', "mapmessage");
        } else if ($('input[facetvalue="wwt"]').is(':checked')) {
            OPL.UI.fire(OPL.UI.EVENTS.modules.message.show, '{"type": "info","icon": {"icontype": "g-icon--localizator", "size":"s"},"text": {"desc": "' + ACC.rangeMap.wwtMessage + '"}}', "mapmessage");
        } else {
            OPL.UI.fire(OPL.UI.EVENTS.modules.message.show, '{"type": "info","icon": {"icontype": "g-icon--localizator", "size":"s"},"text": {"desc": "' + ACC.rangeMap.defaultMessage + '"}}', "mapmessage");
        }
    }
};



ACC.rangeMap.bindAll();