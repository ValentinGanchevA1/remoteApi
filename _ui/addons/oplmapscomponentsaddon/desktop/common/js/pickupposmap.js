ACC.posmap = {
    mapID: 'posMap',
    currentQuery: '',
    currentMapBounds: null,
    currentMapCenter: null,
    expandPosId: 0,
    activePos: {
        id: "",
        lat: "",
        lng: ""
    },

    bindAll: function() {
        if (typeof query !== 'undefined') {
            this.currentQuery = query;
        }
        this.showPosMap();
    },

    reloadPosWithList: function(mapID) {
        var query = this.buildQuery();
        $.ajax({
            type: "GET",
            url: "/telefonybezumowy/mappickuppos/szukaj",
            data: query,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                var posList = ACC.posmap.getTooltipsForPos(response);
                OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.deleteMarkers, 'ftth', mapID);
                OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.setMarkers, posList, mapID);
                ACC.posmap.addParamsForMobile(posList, ACC.posmap.buildMobileQuery());
                if (response.length > 0 && response[0].aggregationType === 'POS') {
                    ACC.posmap.getPosList();
                    OPL.UI.initModules($('#loadPosList').get(0));
                }
                OPL.UI.fire(OPL.UI.EVENTS.modules.scrollbar.update, 'relative', 'poscontainerscroll');
            }
        });
    },

    reloadPos: function(mapID) {
        var query = this.buildQuery();
        $.ajax({
            type: "GET",
            url: "/telefonybezumowy/mappickuppos/szukaj",
            data: query,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                var posList = ACC.posmap.getTooltipsForPos(response);
                OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.deleteMarkers, 'ftth', mapID);
                OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.setMarkers, posList, mapID);
                ACC.posmap.addParamsForMobile(posList, ACC.posmap.buildMobileQuery());
            }
        });
    },

    addParamsForMobile: function(poses, query) {
        $('#showPosListLinkContainer').addClass('u-small-hide');
        var link = $('#showPosListOnMobile').attr('data-link-prefix');
        poses.forEach(function(entry) {
            if (entry["aggregationType"] === "POS") {
                $('#showPosListOnMobile').attr('href', link + '?' + query);
                $('#showPosListLinkContainer').removeClass('u-small-hide');
                return false;
            }
        });
    },

    getTooltipsForPos: function(posList) {
        var resultList = [];
        for (var i = 0; i < posList.length; i++) {
            var pos = posList[i];
            if (pos.aggregationType === 'POS') {
                $.ajax({
                    type: "GET",
                    async: false,
                    url: "/view/OraPickupPosMapsComponentController/getPosTooltip?pos=" + pos.id,
                    contentType: "application/json; charset=utf-8",
                    success: function(response) {
                        pos['content'] = response;
                    }
                });
            }
            resultList.push(pos);
        }
        return resultList;
    },

    infoWindowOpenedHandler: function(pos) {
        var location = pos.getLocation();
        var locationLat = location.lat();
        var locationLon = location.lng();
        ACC.posmap.activePos.id = pos.id;
        ACC.posmap.activePos.lat = locationLat;
        ACC.posmap.activePos.lng = locationLon;
        ACC.posmap.allMarkersAdded();
        var isMobileVersion = $('#showPosListLinkContainer').is(":visible");

        if ($("#opl-pos-lists").hasClass("l-col-0") && !isMobileVersion) {
            // open pos list
            OPL.UI.fire(OPL.UI.EVENTS.modules.togglerow.fire, null, 'slideColumn');
        }
        $.ajax({
            type: "GET",
            url: "/telefonybezumowy/mappickuppos/szukaj",
            data: ACC.posmap.buildQuery(),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                ACC.posmap.getPosList();
                ACC.posmap.addParamsForMobile(response, ACC.posmap.buildMobileQuery());
                OPL.UI.initModules($('#loadPosList').get(0));
                OPL.UI.fire(OPL.UI.EVENTS.modules.scrollbar.update, 'relative', 'poscontainerscroll');
            }
        });
    },

    allMarkersAddedHandler: function() {
        function isPointVisible(selectedPos) {
            return selectedPos.lat < ACC.posmap.currentMapBounds.getNorthEast().lat() &&
                selectedPos.lat > ACC.posmap.currentMapBounds.getSouthWest().lat() &&
                selectedPos.lng > ACC.posmap.currentMapBounds.getSouthWest().lng() &&
                selectedPos.lng < ACC.posmap.currentMapBounds.getNorthEast().lng();
        }
        var selectedPos = {
            'id': ACC.posmap.activePos.id,
            'lat': ACC.posmap.activePos.lat,
            'lng': ACC.posmap.activePos.lng,
            'displayTooltip': true,
            'broadcastEvent': false
        };
        if (isPointVisible(selectedPos)) {
            OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.showInfoWindowOnMarker, selectedPos, ACC.posmap.mapID);
        }
    },

    allMarkersAdded: function() {
        ACC.posmap.allMarkersAddedHandler();
        OPL.UI.on('modules.gmap.allMarkersAdded', ACC.posmap.allMarkersAddedHandler, 'posMap');
    },

    showPosMap: function() {
        var mapID = 'posMap';
        var broadcastReloadPos = true;

        document.addEventListener('framework.ready', function() {
            //Reload list when pos was set on react component.
            OPL.UI.on('modules.gmap.allMarkersAdded', function() {
                ACC.posmap.getPosList();
            }, mapID);

            OPL.UI.on('modules.gmap.mapLocationChanged', function(map) {
                ACC.posmap.currentMapBounds = map.bounds;
                ACC.posmap.currentMapCenter = map.center;
                window.history.replaceState('', '', ACC.posmap.updateURLParameter(window.location.href, "lat", map.center.lat()));
                window.history.replaceState('', '', ACC.posmap.updateURLParameter(window.location.href, "lng", map.center.lng()));
                window.history.replaceState('', '', ACC.posmap.updateURLParameter(window.location.href, "zoom", map.zoom));
                if (broadcastReloadPos || broadcastReloadPos === 'undefined') {
                    ACC.posmap.reloadPos(mapID);
                }
                broadcastReloadPos = true;
            }, mapID);
            OPL.UI.on('modules.gmap.locationWasSet', function(data) {
                console.log(data);
            }, mapID);

            OPL.UI.on('modules.gmap.infoWindowOpened', ACC.posmap.infoWindowOpenedHandler, 'posMap');

            OPL.UI.on('modules.gmap.infoWindowClosed', function() {
                OPL.UI.off('modules.gmap.allMarkersAdded');
            }, mapID);

            OPL.UI.on('modules.togglerow.completed', function() {
                if ($("#opl-pos-lists").hasClass("l-col-0")) {
                    // mapResize call mapLocationChanged by default
                    broadcastReloadPos = false;
                    OPL.UI.off('modules.gmap.allMarkersAdded');
                    OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.mapResize, mapID);
                } else {
                    broadcastReloadPos = false;
                    OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.setZoomCenter, {
                        "lat": ACC.posmap.activePos.lat,
                        "lng": ACC.posmap.activePos.lng
                    }, mapID);
                    OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.mapResize, mapID);
                    OPL.UI.on('modules.gmap.mapLocationChanged', ACC.posmap.locationChangeHandler(ACC.posmap.activePos.id), mapID);
                }
            }, 'slideColumn');

            OPL.UI.on('modules.gmap.searchResults', function() {
                $("#loadPosList").html = "";
                // hide pos list
                OPL.UI.fire(OPL.UI.EVENTS.modules.togglerow.firstState, '', 'slideColumn');
            }, 'posMap');
        });

        document.addEventListener('framework.ready', function() {
            $('.pos-map-pointer-trigger').change(function() {
                $('.pos-map-pointer-trigger').each(function() {
                    if ($(this).prop("checked")) {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.showMarkers, $(this).attr('name'), mapID);
                    } else {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.clearMarkers, $(this).attr('name'), mapID);
                    }
                });
                var facetQuery = $(this).attr('data-facet-query');
                if (!!facetQuery) {
                    ACC.posmap.currentQuery = facetQuery;
                }
                ACC.posmap.reloadPosWithList(mapID);
            });
        });

        document.addEventListener('modules.ready', function() {
            $('#selectedDeviceName').html($('#models-mobile').find(":selected").text());
            $('#selectedDeviceColor').html($('#colorChooserMobile').find(":checked").attr('title'));
            $('.opl-section__expander-trigger').click(function() {
                var currentElement = this;
                if (currentElement.hasAttribute('posId') && currentElement.hasAttribute('posLat') && currentElement.hasAttribute('posLng')) {
                    var pos = {
                        'id': currentElement.getAttribute('posId'),
                        'lat': currentElement.getAttribute('posLat').replace(",", "."),
                        'lng': currentElement.getAttribute('posLng').replace(",", "."),
                        'displayTooltip': true,
                        'broadcastEvent': false
                    };
                    OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.showInfoWindowOnMarker, pos, mapID);
                    ACC.posmap.expandPosId = pos["id"];
                }
            });
            $('#producer-desktop').unbind('change').change(function() {
                var producer = $('#producer-desktop').val();
                $.ajax({
                    type: "GET",
                    url: "/telefonybezumowy/mappickuppos/getPhoneModelsForProducer?" + createGetPhoneModelsQueryString(producer),
                    async: false,
                    contentType: "application/json; charset=utf-8",
                    success: function(response) {
                        changeOptionsInSelect($('#models-mobile'), response);
                        changeOptionsInSelect($('#models-desktop'), response);
                        changeColors($('#models-desktop').val(), 'DESKTOP');
                    }
                });
                $('#producer-mobile').val(producer);
                $('#selectedDeviceName').html($('#models-mobile').find(":selected").text());
                $('#selectedDeviceColor').html($('#colorChooserMobile').find(":checked").attr('title'));
            });


            $('#producer-mobile').unbind('change').change(function() {
                var producer = $('#producer-mobile').val();
                $.ajax({
                    type: "GET",
                    url: "/telefonybezumowy/mappickuppos/getPhoneModelsForProducer?" + createGetPhoneModelsQueryString(producer),
                    async: false,
                    contentType: "application/json; charset=utf-8",
                    success: function(response) {
                        changeOptionsInSelect($('#models-mobile'), response);
                        changeOptionsInSelect($('#models-desktop'), response);
                        changeColors($('#models-mobile').val(), 'MOBILE');
                    }
                });
                $('#producer-desktop').val(producer);
            });

            function createGetPhoneModelsQueryString(producer) {
                var queryParams = [];
                if (producer) {
                    queryParams.push('producer=' + encodeURIComponent(producer));
                }
                if (sessionStorage.processType) {
                    queryParams.push('processType=' + encodeURIComponent(sessionStorage.processType));
                }
                if (sessionStorage.selectedPropositionId) {
                    queryParams.push('selectedPropositionId=' + encodeURIComponent(sessionStorage.selectedPropositionId));
                }
                return queryParams.join("&");
            }

            $('#selectDeviceMobile').unbind('click').click(function() {
                $('#selectedDeviceName').html($('#models-mobile').find(":selected").text());
                $('#selectedDeviceColor').html($('#colorChooserMobile').find(":checked").attr('title'));
                ACC.posmap.reloadPosWithList('posMap');
                OPL.UI.fire(OPL.UI.EVENTS.modules.expander.close, 'mobileSetPhoneExpander');
            });

            function changeOptionsInSelect(selectObject, newElements) {
                selectObject.empty();
                $.each(newElements, function() {
                    selectObject.append($("<option></option>")
                        .attr("value", this.code).text(this.name));
                });
            };
            $('#models-desktop').unbind('change').change(function() {
                changeColors($('#models-desktop').val());
                $('#models-mobile').val(this.value);
                $('#selectedDeviceName').html($('#models-mobile').find(":selected").text());
                $('#selectedDeviceColor').html($('#colorChooserMobile').find(":checked").attr('title'));
                ACC.posmap.reloadPosWithList('posMap');
            });
            $('#models-mobile').unbind('change').change(function() {
                $('#models-desktop').val(this.value);
                changeColors($('#models-mobile').val());
            });


            function changeColors(selectedModel, version) {
                $.ajax({
                    type: "GET",
                    url: "/telefonybezumowy/mappickuppos/getColorsForModel?model=" + encodeURIComponent(selectedModel) + '&version=Desktop',
                    contentType: "application/json; charset=utf-8",
                    success: function(response) {
                        var $el = $('#colorChooserDesktop');
                        $el.html(response);
                    }
                });
                $.ajax({
                    type: "GET",
                    url: "/telefonybezumowy/mappickuppos/getColorsForModel?model=" + encodeURIComponent(selectedModel) + '&version=Mobile',
                    contentType: "application/json; charset=utf-8",
                    success: function(response) {
                        var $el = $('#colorChooserMobile');
                        $el.html(response);
                    }
                });
                if (version === 'DESKTOP') {
                    ACC.posmap.reloadPosWithList('posMap');
                }

            }

        });

    },

    locationChangeHandler: function(posId) {
        return function() {
            $.ajax({
                type: "GET",
                url: "/telefonybezumowy/mappickuppos/szukaj",
                data: ACC.posmap.buildQuery(),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function(response) {
                    var posList = ACC.posmap.getTooltipsForPos(response);
                    OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.deleteMarkers, 'ftth', 'posMap');
                    OPL.UI.fire(OPL.UI.EVENTS.modules.gmap.setMarkers, posList, 'posMap');
                    ACC.posmap.addParamsForMobile(posList, ACC.posmap.buildMobileQuery());
                    OPL.UI.initModules($('#loadPosList').get(0));
                    OPL.UI.fire(OPL.UI.EVENTS.modules.scrollbar.update, 'relative', 'poscontainerscroll');
                    OPL.UI.off('modules.gmap.mapLocationChanged', ACC.posmap.locationChangeHandler(posId), 'posMap');
                },
                error: function() {
                    OPL.UI.off('modules.gmap.mapLocationChanged', ACC.posmap.locationChangeHandler(posId), 'posMap');
                }
            });
        };
    },

    buildQuery: function() {
        var query = "north=" + this.currentMapBounds.getNorthEast().lat() +
            "&east=" + this.currentMapBounds.getNorthEast().lng() +
            "&west=" + this.currentMapBounds.getSouthWest().lng() +
            "&south=" + this.currentMapBounds.getSouthWest().lat();
        query = query + "&pos=" + ACC.posmap.activePos.id;
        return query;
    },
    buildMobileQuery: function() {
        var query = ACC.posmap.buildQuery();
        query = query + "&lat=" + this.currentMapCenter.lat() +
            "&lng" + this.currentMapCenter.lng();
        return query;
    },

    getPosList: function() {
        $.ajax({
            type: "GET",
            url: "/view/OraPickupPosMapsComponentController/getStoreList",
            data: this.buildQuery(),
            async: false,
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                $("#loadPosList").html(response);

            }
        });
    },
    getUrlVars: function() {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(name) {
        return ACC.posmap.getUrlVars()[name];
    },
    updateURLParameter: function(url, param, paramVal) {
        var newAdditionalURL = "";
        var tempArray = url.split("?");
        var baseURL = tempArray[0];
        var additionalURL = tempArray[1];
        var temp = "";
        if (additionalURL) {
            tempArray = additionalURL.split("&");
            for (var i = 0; i < tempArray.length; i++) {
                if (tempArray[i].split('=')[0] !== param) {
                    newAdditionalURL += temp + tempArray[i];
                    temp = "&";
                }
            }
        }
        var rows_txt = temp + "" + param + "=" + paramVal;
        return baseURL + "?" + newAdditionalURL + rows_txt;
    }
};


ACC.posmap.bindAll();

function show(arg) {
    $.ajax({
        type: "POST",
        url: "/view/OraPickupPosMapsComponentController/setPosId",
        headers: {
            "CSRFToken": ACC.common.CSRFToken
        },
        data: {
            pos: arg
        },
        async: false,
        success: function() {
            var selectedPOS = "[value =" + arg + "]";
            $("#save" + selectedPOS).parent().html('<div class="class="active-pos""><span title="tick_ok" aria-hidden="true" class="kss-icon-preview g-icon g-icon--only g-icon--tick_ok g-icon--s g-greenf-c"></span></span>Salon wybrany do odbioru zamówienia</div>');
            $("#saveTooltip" + selectedPOS).parent().html('<div class="class="active-pos""><span title="tick_ok" aria-hidden="true" class="kss-icon-preview g-icon g-icon--only g-icon--tick_ok g-icon--s g-greenf-c"></span></span>Salon wybrany do odbioru zamówienia</div>');
            ACC.posmap.reloadPosWithList(ACC.posmap.mapID);
            ACC.posmap.reloadPos(ACC.posmap.mapID);
        },
        error: function() {
            console.log("Error with selecting POS");
        }
    });
}