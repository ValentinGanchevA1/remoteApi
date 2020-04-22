/*
 * 	TP.Ajax
 *	odpowiada za operacje ajaxowe w ramach portalu TP
 *	autor: lpawliko
 *  dodana opcja wysyłania tylko klikniętego submita 
 *  dodana opcja wyłączenia puszczania ajaxa na kliknięcie na submita o klasie 'no-ajax'
 */

var TP;
if (typeof TP == "undefined") TP = {};
if (typeof TP.Ajax == "undefined") {

    TP.Ajax = {
        ajaxed: {},
        refreshes: {},
        popups: {},
        offs: {}, // blokowanie updejtu elementow o id klucza
        sessionId: '',

        setCookies: function(sessionId) {
            if (document.cookie.length == 0) {
                TP.Ajax.sessionId = ';jsessionid=' + sessionId + ';NSID=' + sessionId;
            }
        },

        // dynamizuje formularze, klikniecie wysle request ajaxowy
        ajaxifyForms: function(json) {
            this.ajaxify(json, true);
        },

        // dynamizuje linki, klikniecie wysle request ajaxowy
        ajaxifyLinks: function(json) {
            this.ajaxify(json, false);
        },

        ajaxify: function(json, forms) {
            var toAdd = eval("({" + json.replace(/,$/, '') + "})");

            for (var elemId in toAdd) {

                this.deactivate(elemId); // deaktywujmy w razie co

                this.ajaxed[elemId] = toAdd[elemId];
                if (toAdd[elemId].e != false) { // true takze jesli nie zdefiniowano

                    if (!$(elemId)) {
                        this.log('[not a problem if TP.Ajax.Fire() used] element with id [' + elemId + '] not found for ajaxify ' + (forms ? 'forms' : 'links')); // TODO: devel only

                    } else {

                        if (forms) {
                            // zapamietanie funkcji dla przyszlego ewentualnego stopObserving
                            this.ajaxed[elemId].observer = this.eventedSubmitForm.bindAsEventListener(this);
                            Event.observe(elemId, 'submit', this.ajaxed[elemId].observer);
                            //ustawiamy observer na elementach submitujacych formularz w sytuacji gdy jest ich wiecej niz 1 w formie, to chcemy zeby byl wyslany tylko klikniety
                            var formSubmits = $(elemId).select('[type="submit"], [type="image"]');
                            if (formSubmits.length) {
                                if (formSubmits.length == 1) {
                                    formSubmits[0].addClassName('submit-to-send');
                                } else {
                                    $(elemId).on('click', '[type="submit"], [type="image"]', this.clickedSubmitInputHandler.bindAsEventListener(this));
                                }
                            }
                            //TODO - obsluzenie sytuacji kiedy uzytkownik klika enter bedac focusem na jakims elemencie - powiazac elementy forma z submitem

                        } else {
                            // zapamietanie funkcji dla przyszlego ewentualnego stopObserving
                            this.ajaxed[elemId].observer = this.eventedClickLink.bindAsEventListener(this);
                            Event.observe(elemId, 'click', this.ajaxed[elemId].observer);
                        }

                    }
                }
            }
        },


        // deaktywuje dzialanie na elemencie o podanym identyfikatorze
        deactivate: function(id) {
            if (this.ajaxed[id] && this.ajaxed[id].observer) {
                Event.stopObserving(id, 'click', this.ajaxed[id].observer);
                Event.stopObserving(id, 'submit', this.ajaxed[id].observer);
                this.ajaxed[id] = null;
            }
        },

        eventedSubmitForm: function(event) {
            var form = Event.element(event),
                submit = form.select('.submit-to-send');

            if (!submit.length || (submit.length && !submit[0].hasClassName('no-ajax'))) {
                var process = (form.enctype == "multipart/form-data") ? this.submitIframeForm(form) : this.submitForm(form);
                if (!process) {
                    Event.stop(event);
                }
            }

        },

        eventedClickLink: function(event) { // this -> TP
            var link = event.findElement('a');
            var process = this.clickLink(link);
            if (!process) {
                Event.stop(event);
            }
        },

        // obsluguje ajaxowa wysylke formularza, bazuje na metadanych dostarczonych metoda ajaxifyForms
        submitForm: function(form) {
            form = $(form);
            var meta = this.ajaxed[form.id];

            if (meta) {

                if (meta.l) {
                    $(meta.l).show();
                    $(meta.l).fire('cover:show');
                }

                if (meta.v) {
                    TP.Ajax.createCover(meta.v);
                }

                var params = meta.p ? meta.p + '&' : '';
                var formElements = form.elements;
                for (i = 0; i < formElements.length; i++) {
                    var type = formElements[i].type;
                    var name = formElements[i].name;

                    switch (formElements[i].type) {
                        case "radio":
                            if (formElements[i].checked)
                                params += formElements[i].name + "=" + encodeURIComponent(formElements[i].value) + "&";
                            break;

                        case "checkbox":
                            if (formElements[i].checked)
                                params += formElements[i].name + "=" + encodeURIComponent(formElements[i].value) + "&";
                            else
                                params += formElements[i].name + "=&"; // invalid behavior, empty checkbox shouldn't be sent (?)
                            break;
                        case "submit":
                            if (formElements[i].hasClassName("submit-to-send")) {
                                params += formElements[i].name + "=" + encodeURIComponent(formElements[i].value) + "&";
                            }
                            break;
                        case "image":
                            if (formElements[i].hasClassName("submit-to-send")) {
                                params += formElements[i].name + "=" + encodeURIComponent(formElements[i].value) + "&";
                            }
                            break;

                        default:
                            params += formElements[i].name + "=" + encodeURIComponent(formElements[i].value) + "&";
                    }
                }

                var q = form.action.indexOf('?');
                params += q == -1 ? '' : form.action.substring(q + 1);
                TP.Ajax.httpRequestStatus = 200;
                var myAjax = new Ajax.Request(
                    meta.a + TP.Ajax.sessionId, {
                        parameters: params,
                        method: form.method,
                        requestHeaders: ['Cache-Control', 'no-cache', 'Pragma', 'no-cache'],
                        on302: function() {
                            TP.Ajax.httpRequestStatus = 302;
                        },
                        onComplete: function(response) {
                            meta.c ? meta.c(response, form.id) : TP.Ajax.defaultCallback(response, form.id);
                        }
                    });
            }

            return false;
        },
        /*
         * Oznacza tylko jeden element submitujacy, ktory ma zostac wyslany
         */
        markSubmitToSend: function(submit) {
            var form = submit.up('form'),
                submits = form.select('.submit-to-send');
            submits.each(function(input) {
                input.removeClassName("submit-to-send");
            });
            submit.addClassName('submit-to-send');


        },
        /*
         * Handler dla klikania w elementy submitujace formularz
         */
        clickedSubmitInputHandler: function(event) {
            var input = event.findElement();
            this.markSubmitToSend(input);
        },

        /*
         obsluguje klikniecie linka (wyslanie requestu ajaxowego)
         @param link - identyfikator/element kliknietego linka
         */
        clickLink: function(link, method) {
            link = $(link);

            if (!link) {
                return false;
            }

            if (!method) {
                method = 'get';
            }

            link.fire("tp:ajax:clicklink");

            var meta = this.ajaxed[link.id];

            if (meta) {

                if (meta.b) {
                    var process = eval(meta.b);
                    if (!process) {
                        return false;
                    }
                }

                var progress = $(meta.l || (link.id + '-progress'));
                if (progress) {
                    progress.show();
                    if (typeof meta.l != 'undefined') {
                        if ($(meta.l)) {
                            $(meta.l).fire('cover:show');
                        }
                    }
                }

                if (meta.v) {
                    TP.Ajax.createCover(meta.v);
                }

                var params = meta.p || "";

                // effect
                if (meta.fx) {
                    params = 'effect=' + meta.fx + '&' + params;
                }

                var q = link.href.indexOf('?');
                if (q != -1) {
                    params = link.href.substring(q + 1) + "&" + params;
                }
                TP.Ajax.httpRequestStatus = 200;
                var myAjax = new Ajax.Request(
                    meta.a + TP.Ajax.sessionId, {
                        parameters: params,
                        method: method,
                        requestHeaders: ['Cache-Control', 'no-cache', 'Pragma', 'no-cache'],
                        onComplete: function(response) {
                            meta.c ? meta.c(response, link.id) : TP.Ajax.defaultCallback(response, link.id);
                        }
                    });
            }
            return false;

        },

        /*
         obsluguje odpalenia reczne, np ze skryptu, do obslugi wszelkiej masci on blurow itp, zalozenie jest takie,
         ze developer sobie definiuje <tp:ajaxify a pozniej moze skorzystac z tego mechanizmu wywolujac fire w jakims
         skrypcie

         metoda bazuje na clickLink wiec posiada wiekszosc jej funkcjonalnosci

         @param id - identyfikator odpalacza, nie wiaze sie z formem/linkiem na stronie
         @param p - parametry dodatkowe dodawane do wywolania, cos jak parametry hrefa z normalnego linku
         */
        fire: function(id, p) {

            var meta = this.ajaxed[id];

            if (!meta) {
                return false;
            }

            if (meta.b) {
                var process = eval(meta.b);
                if (!process) {
                    return false;
                }
            }

            var progress = $(meta.l || (id + '-progress'));
            if (progress) {
                progress.show();
            }

            if (meta.v) {
                if (!meta.cc) {
                    meta.cc = '';
                }
                TP.Ajax.createCover(meta.v, false, meta.cc);
            }

            var params = meta.p || "";

            // effect
            if (meta.fx) {
                params = 'effect=' + meta.fx + '&' + params;
            }

            //IE potrafi cacheowac get-y, pomimo requestHeaders: ['Cache-Control','no-cache','Pragma','no-cache'] (MAP-12004, MAP-12122)
            if (Prototype.Browser.IE) {
                params = 'noCache=' + new Date().getTime() + '&' + params;
            }

            // dynamiczne parametry z wywolania metody
            if (p) {
                params = p + "&" + params;
            }

            var myAjax = new Ajax.Request(
                meta.a, {
                    parameters: params,
                    method: 'get',
                    requestHeaders: ['Cache-Control', 'no-cache', 'Pragma', 'no-cache'],
                    onComplete: function(response) {
                        if ((!meta.reg && response.responseText.indexOf('<body>') != -1) || response.responseText == "" || (meta.reg && response.responseText.indexOf('id="' + meta.reg + '"') == -1)) {
                            return;
                        }
                        meta.c ? meta.c(response, id) : TP.Ajax.defaultCallback(response, id);
                    }
                });

        },

        /*
         W przypadku wystąpienia komunikatu o błędzie "konflikt" (kod 409) następuje przekierowanie na adres
         zdefiniowany w parametrze redirectOnConflictUrl o ile taki został zdefiniowany.
         */
        checkForConflict: function(serverResponse, meta) {
            if ((serverResponse.status == "409" || serverResponse.responseText.indexOf('@@@SessionExpired@@@') != -1) && meta.redirectOnConflictUrl) {
                window.location.assign(meta.redirectOnConflictUrl);
                return true;
            }
            return false
        },

        /*
         callback dla warstwowego popupu, dodaje diva popupu na koncu strony
         */
        popupCallback: function(serverResponse, eid) {

            var meta = TP.Ajax.ajaxed[eid];

            if (TP.Ajax.checkForConflict(serverResponse, meta)) {
                return;
            }

            if (meta.i) {
                TP.Ajax.ajaxed[meta.i] = TP.Ajax.ajaxed[eid];
                eid = meta.i;
            }
            var popup = $(eid + '-popup');
            var curtain = $(eid + '-popup-curtain');
            var box = $('portal-box');

            // kurtyna jako iframe zeby przykrywala dropdown
            if (!curtain) {
                curtain = new Element('div', {
                    id: eid + '-popup-curtain'
                });
                curtain.addClassName('curtain ' + (meta.cc ? meta.cc : ''))
                document.body.appendChild(curtain);

            } else {
                curtain.show();
            }

            var self = this;
            curtain.observe('click', function() {
                if (popup.hasClassName('popup-above-section')) {
                    //Wywołuje skrypt który zescrolluje stronę do sekcji z której popup został wywołany
                    TP.Ajax.scrollToSection('', '0');
                }
                TP.Ajax.popupClose(eid + '-popup');
            });

            // zmiana sposobu wyliczania wysokosci na potrzeby FF, w ktorej wartwa nie byla pelna
            var height = document.viewport.getHeight() > document.documentElement.scrollHeight ? document.viewport.getHeight() : document.documentElement.scrollHeight;
            //curtain.setStyle({ height: height + 'px', position: 'absolute' });


            if (meta.pc == undefined) {
                meta.pc = '';
            }

            if (!popup) {
                popup = new Element('div', {
                    id: eid + '-popup'
                });
                popup.addClassName('popup ' + meta.pc);
                ($$("body")[0]).appendChild(popup);

                if (meta.r == 'true') {
                    var activator = $(eid);
                    var position = Element.cumulativeOffset(activator);
                    popup.setStyle({
                        left: position[0] + 'px',
                        top: position[1] + 'px'
                    });
                }

            } else {
                popup.update('');
                popup.show();
            }

            var newResult = {};
            newResult.update = eid + '-popup';

            TP.Ajax.defaultCallback(serverResponse, eid, newResult);

            /* popup align center */
            TP.Ajax.popupSetPositionHorizontal(eid + '-popup');
            /* popup vetical-align middle */
            TP.Ajax.popupSetPositionVerical(eid + '-popup');

            // jesli znajdziemy element o id={eid}-popup-close to przypiszmy mu funkcje zamkniecia popupu
            // bez js bedzie to normalne przeladowanie strony
            TP.Ajax.popupRegisterClose(eid + '-popup-close');

            // Niektore strony moga miec dwa przyciski zamykajace, wiec rejestrujemy tez
            // listener dla drugoiego przycisku.
            TP.Ajax.popupRegisterClose(eid + '-popup-close-button');

            // var closeButton = $();
            // if (closeButton) {
            // 	Event.observe(closeButton, 'click', TP.Ajax.eventedPopupClose);
            // }

            // przesuniecie okna w gore jesli popup nie ma klasy 'fixed-popup'
            /*if(meta.pc.search('fixed') < 0) {
             document.documentElement.scrollTop = 0;
             document.body.scrollTop = 0; // dla chrome
             }
             */
            // przesuniecie okna w gore jesli popup ma klasę 'fixed-popup' oraz klasę 'popup-above-section'
            if (meta.pc.search('popup-above-section') > 0) {
                TP.Ajax.popupSetAboveSection(eid);
            }

            $(eid + '-popup').observe("popupChangeSize:tp-ajax", function(e, data) {
                TP.Ajax.popupSetPositionVerical(eid + '-popup', false, e);
            });


        },

        /*
         Centruje pozioma pozycje popupu
         @param elementId - identyfikator elementu
         */
        popupSetPositionHorizontal: function(elementId) {
            var left = (document.viewport.getWidth() - $(elementId).getWidth()) / 2;
            $(elementId).setStyle({
                'left': left + 'px'
            });
        },
        /*
         * Centruje w pionie popup
         * @param elementId - identyfikator elementu
         */
        popupSetPositionVerical: function(elementId, animation, event) {
            var popup = $(elementId),
                defaultTop = 0,
                top = 0,
                popupHeight = 0,
                windowHeight = 0,
                position = "absolute",
                topPos = 0,
                margin = 20;

            if (popup) {
                windowHeight = document.viewport.getHeight(),
                    popupHeight = popup.getHeight(),
                    defaultTop = parseInt(popup.getStyle('top')),
                    top = (windowHeight - popupHeight) / 2,
                    documentScrollOffset = document.viewport.getScrollOffsets().top;
                //tu pozycjonujemy na fixed, gdyz popup miesci sie w obrebie okna
                if (popupHeight < windowHeight) {
                    position = "fixed";
                    topPos = top;
                    //window.scrollTo(0,documentScrollOffset);
                } else {
                    position = "absolute";
                    topPos = documentScrollOffset + margin;
                    if (event && popup.getStyle("position") == "absolute") topPos = popup.offsetTop;
                }
                //popup.setStyle({'top': topPos+'px', 'position':position});

                popup.setStyle({
                    'position': position
                });
                if (animation) {
                    popup.setStyle({
                        'top': '-1000px'
                    });
                    new Effect.Morph(popup, {
                        style: 'top:' + topPos + 'px;', // CSS Properties
                        duration: 0.8 // Core Effect properties
                    });
                } else {
                    popup.setStyle({
                        'top': topPos + 'px'
                    });
                }
                //popup.setStyle({'position':position});

                /*new Effect.Morph(popup, {
                 style: 'top:'+topPos+'px;', // CSS Properties
                 duration: 0.8 // Core Effect properties
                 });*/

                return position;
            }
        },

        /*
         Przenosi popup nad sekcję z której został wywołany (FORMULARZ CFC)
         */
        popupSetAboveSection: function(el) {
            //Dodaję klasy do głównych sekcji abym mógł scrollować względem nich (nie można tego zrobic z poziomu backendu ponieważ dodają się ona także na niższych poziomach)
            var wasAddClass = ''; //flaga aby nie dodawać klas ponownie przy kolejnym wywołaniu

            // TPAS-37034 Jeśli nie ma elementu process-form-body, to szukam elementu grupującego sekcje
            var groupElement = $("process-form-body");
            var baseElement = $(el);

            if (!groupElement && baseElement) {
                groupElement = baseElement.parentElement;
                var groupElementFound = false;

                while (!groupElementFound) {
                    if (!groupElement) {
                        break;
                    } else {
                        if (groupElement.id.substring(0, 2) == ('s-') && groupElement.hasClassName("section")) {
                            groupElementFound = true;
                        }
                        groupElement = groupElement.parentElement;
                    }
                }
            }

            if (wasAddClass != true) {
                groupElement.childElements().each(function(i) {
                    if (i.id.substring(0, 2) == ('s-')) {
                        i.addClassName("scroll-section");
                    }
                });
                wasAddClass = true;
            }

            var popup = $(el + '-popup'),
                elSection = $(el).up('.scroll-section');

            //Sprawdzam czy jest rodzic z klasą scroll-section
            if (elSection != undefined) {
                var popupInner = popup.down('.popup-inner'),
                    popupContent = popup.down('.popup-content');
                margin = 20;
                //ustawiam popup-owi pozycję fixed + wymuszam aby był zawsze na samej górze odsunięty o zmienną margin (20px)
                //popup.setStyle({ position: 'fixed', top: margin+'px' });
                //ustawiam dla contentu popup-a maksymalną wysokość równą wysokości strony + zmniejsza go dodatko aby zmiescił się na stronie wraz z cieniem
                /*if(popupContent)
                 popupContent.setStyle({'maxHeight': document.viewport.getDimensions().height - (parseInt(popupInner.getStyle('paddingTop')) + parseInt(popupInner.getStyle('paddingBottom')) + margin +100) +'px'});*/
                //wyliczamy wysokość popup-a dopiero po narzuceniu mu max-height

                var images = $$('#' + el + '-popup img'),
                    imagesCounter = images.length;
                if (imagesCounter) {
                    popup.setStyle({
                        visibility: "hidden"
                    });
                    var imagesCompletedCounter = 0;
                    images.each(function(img, index) {
                        var src = img.src;
                        var counter = 1;
                        if (src) {
                            objImg = new Image();
                            objImg.src = src;
                            var imgInterval = setInterval(function() {
                                //console.log("Obrazek nr ",index, "po raz ",counter);
                                counter++;
                                if (objImg.complete) {
                                    clearInterval(imgInterval);
                                    //console.log(onjImg , " ", objImg.getHeight());

                                    imagesCompletedCounter++;
                                    if (imagesCounter == imagesCompletedCounter) {

                                        TP.Ajax.popupSetPositionHorizontal(el + '-popup');
                                        var position = TP.Ajax.popupSetPositionVerical(el + '-popup', true);
                                        popup.setStyle({
                                            visibility: "visible"
                                        });
                                        saveSection = elSection;
                                    }
                                }
                            }, 50);
                        }
                    });
                } else {
                    var position = TP.Ajax.popupSetPositionVerical(el + '-popup');
                    var elHeight = popup.getHeight();
                    var scrollMargin = (position == "fixed") ? elHeight + margin : margin;
                    //usuwamy scroll na body
                    saveSection = elSection;
                    TP.Ajax.scrollToSection(elSection, scrollMargin, 'open');
                }



            }
        },

        //Scrolluje do sekcji
        scrollToSection: function(elSection, elHeight) {
            /*
             * Zapisujemy elSection przy wywołaniu popu-a dzięki czemu przy zamykaniu jego nie musimy ponownie
             * przekazywać elementu elSection którego nie znamy przy wywołaniu z funkcji parentPopupClose
             */
            elSection != '' ? saveSection = elSection : saveSection;
            Effect.ScrollTo(saveSection, {
                duration: '0.5',
                offset: -elHeight
            });
        },


        /*
         Zamyka popup, w ktorym klikniety element sie znajduje, popup rozpoznawany jest jako element o klasie 'popup'
         @param event - obslugiwane zdarzenie
         */
        eventedPopupClose: function(event) {
            var clicked = Event.element(event);
            TP.Ajax.parentPopupClose(clicked);
            Event.stop(event);
        },

        /*
         Zamyka tooltip-popup, w ktorym klikniety element sie znajduje, popup rozpoznawany jest jako element o klasie 'popup'
         @param event - obslugiwane zdarzenie
         */
        eventedTooltipPopupClose: function(event) {
            var clicked = Event.element(event);
            TP.Ajax.parentTooltipPopupClose(clicked);
            Event.stop(event);
        },


        /*
         Zamyka popup, w ktorym znajduje sie podany element, popup rozpoznawany jest jako element o klasie 'popup'
         */
        parentPopupClose: function(element) {
            var popup = element.ancestors().find(function(elem) {
                return elem.hasClassName('popup')
            });
            //Jeżeli popup ma klasę 'popup-above-section' wtedy po zamknięciu jego zescorlluj do sekcji z której był wywołany
            if (popup.hasClassName('popup-above-section')) {
                //przywracamy normalną wartość na body
                $$('body')[0].setStyle({
                    overflow: ''
                });
                //Wywołuje skrypt który zescrolluje stronę do sekcji z której popup został wywołany
                TP.Ajax.scrollToSection('', '0');
            }
            TP.Ajax.popupClose(popup);
            return true;
        },


        /*
         Zamyka tooltip-popup, w ktorym znajduje sie podany element, popup rozpoznawany jest jako element o klasie 'popup'
         */
        parentTooltipPopupClose: function(element) {
            var popup = element.ancestors().find(function(elem) {
                return elem.hasClassName('tooltip-popup')
            });
            TP.Ajax.tooltipPpopupClose(popup);
            return true;
        },

        /*
         Zamyka tooltip-popup o podanym id
         @param popup - identyfikator elementu popupu lub sam element popupu
         */
        tooltipPpopupClose: function(popup) {
            popup = $(popup);
            if (popup) {

                popup.hide();

            }
        },

        /* poprawka dla koloru tla kurtyny pod ie */
        adjustCurtainBackground: function(curtain) {
            if (Prototype.Browser.IE) {
                var styleProxy = new Element('span', {
                    id: curtain.id + '-style-proxy'
                });
                styleProxy.addClassName(curtain.className);
                styleProxy.style.display = 'none';
                document.body.appendChild(styleProxy);
                var bgColor = styleProxy.getStyle('backgroundColor');
                styleProxy.remove();
                /* wymuszenie generowania dokumentu wewnatrz iframe'a */
                curtain.contentWindow.document.open();
                curtain.contentWindow.document.write(' ');
                curtain.contentWindow.document.close();
                curtain.contentWindow.document.body.style.backgroundColor = bgColor;
            }
        },

        /*
         Otwiera popup o podanym id
         @param popupId - identyfikator elementu popup do utworzenia
         @param curtainClass - klasa dodana do tworzonego elementu kurtyny, opcja
         @param popupClass - klasa dodana do tworzonego elementu popup, opcja
         @param relative - urelatywnienie polozenia okna, opcja
         */

        popupOpen: function(popupId, curtainClass, popupClass, relative, extended) {
            var popup = $(popupId + '-popup');
            var curtain = $(popupId + '-popup-curtain');

            // kurtyna jako iframe zeby przykrywala dropdown
            if (!curtain) {
                curtain = new Element('iframe', {
                    id: popupId + '-popup-curtain',
                    'class': 'curtain' + (curtainClass ? ' ' + curtainClass : '')
                });
                document.body.appendChild(curtain);
            } else {
                curtain.show();
            }

            /* todo test */
            this.adjustCurtainBackground(curtain);
            // zmiana sposobu wyliczania wysokosci na potrzeby FF, w ktorej wartwa nie byla pelna
            var height = document.viewport.getHeight() > document.documentElement.scrollHeight ? document.viewport.getHeight() : document.documentElement.scrollHeight;
            curtain.setStyle({
                height: height + 'px',
                position: 'absolute'
            });

            if (!popup) {


                popup = new Element('div', {
                    id: popupId + '-popup',
                    'class': 'popup' + (extended ? ' popup-extended' : '') + (popupClass ? ' ' + popupClass : '')
                });
                if (extended) {
                    var extendedPopup = new Array();
                    extendedPopup.push('<div class="popup-top">');
                    extendedPopup.push('<div class="popup-top-left"></div>');
                    extendedPopup.push('<div class="popup-top-middle"></div>');
                    extendedPopup.push('<div class="popup-top-right"></div>');
                    extendedPopup.push('</div>');
                    extendedPopup.push('<div class="popup-middle">');
                    extendedPopup.push('<div class="popup-middle-left"></div>');
                    extendedPopup.push('<div class="popup-middle-middle" id="' + popupId + '-popup-content"></div>');
                    extendedPopup.push('<div class="popup-middle-right"></div>');
                    extendedPopup.push('</div>');
                    extendedPopup.push('<div class="popup-bottom">');
                    extendedPopup.push('<div class="popup-bottom-left"></div>');
                    extendedPopup.push('<div class="popup-bottom-middle"></div>');
                    extendedPopup.push('<div class="popup-bottom-right"></div>');
                    extendedPopup.push('</div>');
                    popup.innerHTML = extendedPopup.join('');
                }

                ($$("body")[0]).appendChild(popup);

                if (relative === 'true') {
                    var activator = $(popupId);
                    var position = Element.cumulativeOffset(activator);
                    popup.setStyle({
                        left: position[0] + 'px',
                        top: position[1] + 'px'
                    });
                }

            } else {
                if (extended) {
                    popup.down('.popup-middle-middle').update('');
                } else {
                    popup.update('');
                }

                popup.show();
            }
            return popup;
        },



        /*
         Zamyka popup o podanym id
         @param popup - identyfikator elementu popupu lub sam element popupu
         */
        popupClose: function(popup) {
            popup = $(popup);
            if (popup) {
                var curtain = $(popup.id + '-curtain');

                popup.remove();
                if (curtain) curtain.remove();
            }
        },

        /*
         Zamyka popup o podanym id po uplywie zadanego czasu
         @param popup - identyfikator elementu popupu lub sam element popupu
         @param delayInSec - opoznienie wyrazone w sekundach
         */
        popupCloseWithTimeout: function(popupToClose, delayInSec) {
            var functionToCall = "TP.Ajax.popupClose('" + popupToClose + "')";
            var timeout = setTimeout(functionToCall, delayInSec * 1000);
        },

        /*
         rejestruje zamykacza popupu w ktorym znajduje sie dany element
         @param closeButtonId - aktywator zamkniecia popupu
         */
        popupRegisterClose: function(closeButtonId) {
            var closeButton = $(closeButtonId);
            if (closeButton) {
                Event.observe(closeButton, 'click', TP.Ajax.eventedPopupClose);
            }
        },

        /*
         rejestruje zamykacza tooltip-popupu w ktorym znajduje sie dany element
         @param closeButtonId - aktywator zamkniecia popupu
         */
        tooltipPopupRegisterClose: function(closeButtonId) {
            var closeButton = $(closeButtonId);
            if (closeButton) {
                Event.observe(closeButton, 'click', TP.Ajax.eventedTooltipPopupClose);
            }
        },


        /*
         callback dla warstwowego popupu (wersja tooltip), dodaje diva popupu za elementem aktywatora
         */
        tooltipPopupCallback: function(serverResponse, eid) {
            var popup = $(eid + '-popup');

            var clicked = $(eid);
            if (!popup) {
                Element.insert(clicked, {
                    after: '<div id="' + eid + '-popup" class="tooltip-popup"></div>'
                });

            } else {
                popup.update('');
                popup.show();
            }

            TP.Ajax.defaultCallback(serverResponse, eid);

            // jesli znajdziemy element o id={eid}-popup-close to przypiszmy mu funkcje zamkniecia popupu
            // bez js bedzie to normalne przeladowanie strony

            TP.Ajax.tooltipPopupRegisterClose(eid + '-popup-close');

            // var closeButton = $(eid + '-popup-close');
            // if (closeButton) {
            // 	Event.observe(closeButton, 'click', TP.Ajax.eventedPopupClose);
            // }
        },

        httpRequestStatus: 200,

        /*
         Domyslna funkcja dla obslugi respons'ow ajaksowych
         @param serverResponse - tresc odpowiedzi od serwera
         @param id - identyfikator elementu, ktory wywolal request ajaksowy
         @return (breakResponseService) - <code>true</code> jesli powinna zostac przerwana obsluga response, <code>false</code> w przeciwnym wypadku
         */
        defaultCallback: function(serverResponse, id, updateResult) {
            try {
                var scripts, response;
                var afterCallbacks = [];
                var meta = TP.Ajax.ajaxed[id];

                if (TP.Ajax.checkForConflict(serverResponse, meta)) {
                    return;
                }

                var parts = serverResponse.responseText.split('<!--@@@@@@-->');
                for (var i = 0; i < parts.length; i++) {
                    var result = {};
                    if (!parts[i].blank()) {
                        scripts = parts[i].extractScripts();
                        response = parts[i].stripScripts();
                        eval(scripts.pop()); // zacznijmy od ostatniego, czyli pobranie wytycznych -> result

                        if (updateResult) { // modyfikacje resultu jesli podano
                            var hash = new Hash(result);
                            hash.update(updateResult);
                            result = hash.toObject();
                        }

                        if (result.redirect) {
                            window.location = result.redirect;
                            return true;

                        } else if (result.action == "refresh") {
                            if (result.update && TP.Ajax.offs[result.update]) {
                                // alert('refresh request for element [' + result.update + '], but this element is blocked for refreshes');
                                return true; // update zablokowany, wychodzimy
                            }
                        }

                        if (result.update) {
                            var meta = this.ajaxed[id],
                                updateMethod = "inside";
                            if (meta && meta.updateMethod) updateMethod = meta.updateMethod;

                            TP.Ajax.update(result.update, response, result.effect, updateMethod);
                            var u = $(result.update);
                            if (u) u.fire('tp:ajax:after', {
                                meta: meta
                            });

                        }

                        /* callback po updatcie elementu */
                        if (typeof meta != 'undefined' && meta.after) {
                            afterCallbacks.push(meta.after);
                        }

                        /* je�li w eval poleci ex, to ostatni wylogowany skrypt jest winowajca */
                        scripts.each(function(s, index) {
                            TP.Logger.log('defaultCallback script[' + index + ']: ' + s);
                            eval(s);
                        });

                        afterCallbacks.each(function(s) {
                            TP.Logger.log('defaultCallback afterCallbacks: ' + s);
                            eval(s);
                        });
                    }
                }


                if (meta) { // refreshe nie dadza mety
                    var progress = $(meta.l || (id + '-progress'));
                    if (progress) {
                        if (typeof meta.l != 'undefined') {
                            if ($(meta.l)) {
                                /* jeśli customowa kurtyna ( np na formularzach CFC )
                                 * to nie ukrywaj, ale rzuć nań event który może zostać obsłużony.
                                 */

                                progress.hide();
                                $(meta.l).fire('cover:hide');

                            }
                        }
                    }

                    var cover = $(meta.v + '-cover');
                    if (cover != null) {
                        cover.remove();
                    }
                }


            } catch (ex) {
                if (Prototype.Browser.IE) {
                    setTimeout(function() {
                        $('order-cover').hide();
                    }, 1000);
                }
                TP.Logger.log('ERROR >> the last logged "defaultCallback script" trow defaultCallback exception: ' + ex);
                if (!TP.Logger.debug) {
                    //alert('defaultCallback exception: ' + ex);
                }
            }

            return false;
        },


        /*
         Update elementu o podanym id podanym responsem z opcjonalnym efektem scriptaculusa
         @param eid - identyfikator elementu do podmiany
         @param response - tresc podmiany
         @param effectName - nazwa efektu uzywanego przy podmianie (klucz z effectsPressets)
         */
        update: function(eid, response, effectName, updateMethod) {
            var element = $(eid);
            if (element) {
                var fx = false;
                var before = false;

                if (effectName) {
                    var q = effectName.indexOf("-");
                    fx = q != -1 ? effectName.substring(0, q) : effectName;
                    before = effectName.endsWith("-before");
                }

                if (fx && before) {
                    this.effect(fx, element, response);

                } else {
                    if (fx && !before) {
                        element.hide();
                    }

                    switch (updateMethod) {
                        case 'inside':
                            element.update(response);
                            break;
                        case 'replace':
                            element.replace(response);
                            break;
                        case 'after':
                            element.insert({
                                after: response
                            });
                            break;
                        case 'before':
                            element.insert({
                                before: response
                            });
                            break;
                        case 'top':
                            element.insert({
                                top: response
                            });
                            break;
                        case 'bottom':
                            element.insert({
                                bottom: response
                            });
                            break;
                        default:
                            element.update(response);
                    }

                }

                if (fx && !before) {
                    this.effect(fx, element);
                }
            }
        },

        generateRefreshes: function(json) {
            try {
                // generating refreshes
                var upgrades = eval("([" + json.replace(/,$/, '') + "])");
                for (var i = 0; i < upgrades.length; i++) {
                    var u = upgrades[i];
                    var group = u.g;

                    if (this.refreshes[group]) {
                        // update group
                        if (this.refreshes[group].e.indexOf(u.e) == -1) {
                            this.refreshes[group].e.push(u.e);
                        }

                        // update tries count (fix#1371620)
                        if (this.refreshes[group].t < u.t) {
                            this.refreshes[group].t = u.t;
                        }

                    } else {
                        // create new refresh group
                        this.refreshes[group] = {
                            d: (u.d !== undefined) ? u.d : 5, // seconds
                            t: (u.t !== undefined) ? u.t : 3, // tries
                            c: u.c, // calback
                            e: [u.e], // group elements
                            a: u.a, // action
                            p: u.p, // additional parameters
                            s: u.s, // dest
                            n: u.n, // next delay
                            firstDelay: u.firstDelay, // first delay
                            firstRun: true, // is refresher run for the first time
                            ex: u.ex
                        };
                    }

                    // show refresh marker
                    var refreshMarker = $(u.e + '-rs');
                    if (refreshMarker) {
                        refreshMarker.show();
                    }
                }

                // register executors
                if (upgrades.length > 0) {
                    for (var group in this.refreshes) {
                        if (this.refreshes[group].pe) {
                            this.refreshes[group].pe.stop();
                        }
                        var refreshesGroup = this.refreshes[group],
                            firstDelay = refreshesGroup.firstDelay || refreshesGroup.d;

                        var pe = new PeriodicalExecuter(
                            function(pe) {
                                var group = this.refreshGroup;
                                var meta = TP.Ajax.refreshes[group];

                                // operate timeincrement option
                                if (meta.n) {
                                    if (this.nextDelay == -1) {

                                        if (this.executionsPassed < this.executionsToPass) {
                                            this.executionsPassed++;
                                            return;
                                        } else {
                                            this.executionsToPass *= 2;
                                            this.executionsPassed = 1;
                                        }

                                    } else {

                                        this.executionsToPass = this.nextDelay / meta.d;
                                        this.executionsPassed = 1;
                                        this.nextDelay = -1;

                                    }

                                    if (meta.t == 1) {

                                        this.executionsToPass = 1;
                                        this.executionsPassed = 1;

                                    }

                                }

                                var expired = '';
                                var get = meta.e.join(',');
                                if (meta.t <= 0) {
                                    pe.stop();
                                    if (meta.ex) {
                                        if (meta.ex.match(/^\w/)) {
                                            get = meta.ex;

                                        } else {
                                            expired = meta.ex.replace(/^./, '&');
                                        }

                                    } else {
                                        return; // if no 'onexpire' attribute then do NOT send expiration request
                                    }
                                }

                                if (!Object.isUndefined(meta.s) && meta.s != null && !$(meta.s)) {
                                    pe.stop();
                                    return;
                                }
                                TP.Ajax.httpRequestStatus = 200;
                                var myAjax = new Ajax.Request(
                                    meta.a + TP.Ajax.sessionId, {
                                        parameters: 'group=' + group + '&toGet=' + get + '&' + meta.p + expired,
                                        method: 'get',
                                        requestHeaders: ['Cache-Control', 'no-cache', 'Pragma', 'no-cache'],
                                        onComplete: function(response) {
                                            meta.c ? meta.c(response) : TP.Ajax.defaultCallback(response);
                                        }
                                    });

                                meta.t = meta.t - 1;
                                // todo: remove data?

                                if (meta.firstRun && meta.firstDelay) {
                                    pe.stop();
                                    pe.frequency = meta.d;
                                    pe.registerCallback();
                                }
                                meta.firstRun = false;
                            }, (firstDelay));
                        pe.refreshGroup = group;
                        this.refreshes[group].pe = pe; // rememeber periodical executor
                        if (Object.isNumber(this.refreshes[group].n)) { // remeber in periodical executor all attributes for timeincrement option
                            this.refreshes[group].pe.nextDelay = this.refreshes[group].n;
                            this.refreshes[group].pe.executionsToPass = 1;
                            this.refreshes[group].pe.executionsPassed = 1;
                        }

                    } // for
                } // if


            } catch (ex) {
                alert('generateRefreshes exception:' + ex);
            }

        },

        // todo: secure pe?
        refreshOff: function(group, element) {
            if (!Object.isUndefined(this.refreshes[group])) {
                var es = this.refreshes[group].e.without(element);
                this.offs[element] = true;

                if (es.length == 0) {
                    this.refreshes[group].pe.stop();
                    delete this.refreshes[group];

                } else {
                    this.refreshes[group].e = es;
                }
            }
        },

        // predefiniowane wywolania dla efektow
        effectPresets: {
            SlideDown: 'new Effect.SlideDown	(element, { duration: 0.5 });',
            SlideUp: 'new Effect.SlideUp		(element, { duration: 0.5, afterFinish: function() { element.update(response); }});',
            ConfigDown: 'new Effect.BlindDown	(element, { duration: 0.5, afterFinish: function() { TP.Portlets.hidePortletProgress(element); }});',
            ConfigUp: 'new Effect.BlindUp		(element, { duration: 0.5, afterFinish: function() { TP.Portlets.hidePortletProgress(element); element.update(response); }});',
            AllDown: 'new Effect.BlindDown	(element, { duration: 0.7, afterFinish: function() { TP.Portlets.hidePortletProgress(element); } });',
            AllDownSlowed: 'setTimeout(function(){new Effect.BlindDown   (element, { duration: 0.7, afterFinish: function() { TP.Portlets.hidePortletProgress(element); } });},1000)',
            AllDownSlowedSimple: 'setTimeout(function(){new Effect.BlindDown(element, { duration: 0.7})},1000)',
            AllUp: 'new Effect.BlindUp		(element, { duration: 0.7, afterFinish: function() { TP.Portlets.hidePortletProgress(element); element.update(response); }});',
            ShowPortlet: 'new Effect.Appear		(element, { duration: 0.2, afterFinish: function() { TP.Portlets.hidePortletProgress(element); }});',
            ClosePortlet: 'new Effect.Fade		(element, { duration: 0.2, afterFinish: function() { TP.Portlets.hidePortletProgress(element); element.update(response);TP.Portlets.removePortlet(element); }});'
        },

        // wykonanie predefiniowanego efektu
        effect: function(effectName, element, response) {
            try {
                var call = this.effectPresets[effectName];
                if (call) {
                    /*
                     if (!response) {
                     call = call.gsub(/,\s*afterFinish:\s*function.+?\}/, '');
                     }
                     */
                    eval(call);
                } else {
                    alert('no preset for [' + effectName + ']');
                }
            } catch (ex) {
                alert('effect call with params [' + effectName + '/' + element + '] exception: ' + ex);
            }
        },

        // metoda tworzaca cover podanego elementu
        createCover: function(elementId) {

            var coveredElement = $(elementId);

            if (coveredElement != null) {

                var cover = document.createElement('div');
                cover.id = coveredElement.id + '-cover';
                cover.style.position = 'absolute';
                cover.style.overflow = 'hidden';
                cover.className = 'content-cover';
                cover.style.zIndex = '100';

                var background = document.createElement('div');
                background.style.width = coveredElement.scrollWidth + 'px';
                background.style.height = coveredElement.scrollHeight + 'px';
                background.style.background = '#fff url(/b/tp/static/icon/progress_bialy.gif) no-repeat center';

                background.style.opacity = '0.7';
                background.style.filter = 'alpha(opacity=70)';

                /*var image = document.createElement('img');
                 image.alt = '';
                 image.src = '/b/tp/static/icon/progress_bialy.gif';
                 image.style.position = 'absolute';*/
                cover.appendChild(background);
                /*cover.appendChild(image);*/
                coveredElement.appendChild(cover);

                try {
                    Position.clone(coveredElement, cover);
                } catch (e) {
                    Position.clone(coveredElement, cover);
                }

            }

        },

        submitIframeForm: function(form) {
            form = $(form);
            var iframe = $(form.id + '-iframe');

            if (!iframe) {
                iframe = document.createElement('DIV');
                iframe.innerHTML = '<iframe style="display:none" src="about:blank" id="' + form.id + '-iframe" name="' + form.id + '-iframe" onload="TP.Ajax.iframeLoaded(\'' + form.id + '-iframe\')"></iframe>';
                document.body.appendChild(iframe);
            }

            form.target = form.id + '-iframe';

            // set iframe-only fields to true
            $$("#" + form.id + " input.iframe-only").each(function(el) {
                el.value = true;
            });


            return true;
        },

        iframeLoaded: function(iframeId) {
            var iframe = document.getElementById(iframeId);

            if (iframe.contentDocument) { // TODO: prosciej?
                var doc = iframe.contentDocument;

            } else if (iframe.contentWindow) {
                var doc = iframe.contentWindow.document;

            } else {
                var doc = window.frames[iframeId].document;
            }

            if (doc.location.href == "about:blank") {
                return;
            }

            // set iframe-only back to false
            var formId = iframeId.replace(/-iframe$/, '');
            $$("#" + formId + " input.iframe-only").each(function(el) {
                el.value = '';
            });

            TP.Ajax.submitForm(formId);
            // Element.remove(iframe);
        },

        //loguje do konsoli, komunikat + exception
        log: function(msg, e) {
            if (e === null) e = '';
            if (window.console) console.log(msg, e);
        }

    };

}

/* Logger - to run call just add #debug to url */

if (typeof TP == "undefined") TP = {};
if (typeof TP.Logger == "undefined") {
    TP.Logger = {

        debug: ((document.location.hash == "#debug" || document.location.hash == "debug") ? true : false),

        log: function(string) {
            //TP.Logger.debug = 1;
            if (TP.Logger.debug) {
                if (typeof window.console != 'undefined') {
                    console.log(string);
                } else {
                    TP.Logger.consoleWrite(string);
                }
            }
        },

        consoleWrite: function(string) {
            var consoleLogBox = $('console-log-box');
            var body = $$('body')[0];
            if (!consoleLogBox) {
                if (body) {
                    body.insert({
                        top: '<div id="console-log-box" style="width:950px;height:60px;overflow-x:hidden;overflow-y:scroll;text-align:left;border:2px solid #888;color: #000; background: #fff; position:relative; padding:0 10px; margin: 0 auto;z-index:10000;"><p style="margin:0;">' + string + '</p></div>'
                    });
                }
            } else {
                consoleLogBox.insert({
                    bottom: '<p style="margin:0;">' + string + '</p>'
                });
                consoleLogBox.scrollTop = (consoleLogBox.scrollTop + consoleLogBox.getHeight());
            }
        }

    };

}