/**
 * Skrypt sluzacy do wyswietlenia popup-a po okreslonym  zadanym czasie lub po okreslonym czasie nieaktywnosci na stronie.
 * 
 * 
 * @autor bloba, asliwins
 * @version: $Id: $
 * @requires prototype.js scriptaculous.js
 */

var TP;
if (typeof TP == "undefined") TP = {};
if (typeof TP.OnTimePopup == "undefined") {

    /*Aby jednna zmienna jaka jest zamieniona wzgl skryptu w MAPie, to zamieniamy PTK na TP przy nazwie klasy, dla ajaxa nadpisujemy wartosc PTK.Ajax wartoscia TP.Ajax - zmniejszy */
    if (typeof PTK == "undefined") PTK = {};
    PTK.Ajax = TP.Ajax;

    TP.OnTimePopup = Class.create({

        initialize: function(options) {

            this.defaults = {
                timeToShow: 300, //czas po jakim ma zostac wyswietlony popup w sekundach
                pageDoNothingDelayTime: 0, //czas nieaktywnosci na stronie po ktorym ma się popup pojawić podany w sekundach
                popupUrl: '', //url pod ktory pukamy aby pobrac popup
                popupId: "on-time-popup", //id popupa
                popupClassName: "popup-js", //klasa dodawana do popupa
                curtainClassName: "",
                onlyOnePopup: true
            };
            this.options = Object.extend(this.defaults, options);


            var self = this;

            this.externalShowingPopupFlag = true; //flaga zewnetrzna pozwalajaca sterowac czy pokazac popup 


            this.startCountTimeToShow(); //obsluga czasu wejscia na strone
            this.startCountDoingNothing(); //obsluga czasu nieaktywnosci
            this.startObserveDelay(); //obsluga obserwowania body

        },

        /**
         * Funkcja uruchamiajaca zliczanie czasu od wejscia na strone jesli parametr this.options.timeToShow 
         * zostal zainicjonwany wartoscia wieksza od 0
         */
        startCountTimeToShow: function() {
            var self = this;
            if (this.options.timeToShow && this.options.timeToShow > 0) {
                this.popupTimeout = setTimeout(function() {
                    self.showPopup();
                }, this.options.timeToShow * 1000);
            }
        },

        /**
         * Funkcja uruchamiajaca zliczanie czasu nieaktywnosci jesli parametr this.options.pageDoNothingDelayTime
         * zostal zainicjonwany wartoscia wieksza od 0
         */
        startCountDoingNothing: function() {
            var self = this;
            if (this.options.pageDoNothingDelayTime && this.options.pageDoNothingDelayTime > 0) {
                this.popupDelayTimeout = setTimeout(function() {
                    self.showPopup();
                }, this.options.pageDoNothingDelayTime * 1000);
            }
        },

        /**
         * Funkcja zapinajaca observery na body aby weryfikowac czy ktos ruszyl myszka, kliknal myszka lub uzyl klawisza 
         * 
         */
        startObserveDelay: function() {
            if (this.options.pageDoNothingDelayTime && this.options.pageDoNothingDelayTime > 0) {
                this.body = $$('body')[0];

                this.bodyObserveHandler = this.handleUserAction.bind(this); //zapisujemy handler aby w odpowiednim czasie go odpiac

                this.body.observe("keydown", this.bodyObserveHandler);
                this.body.observe("mousemove", this.bodyObserveHandler);
                this.body.observe("mousedown", this.bodyObserveHandler);
            }
        },

        /**
         * Funkcja przy kazdej czynnosci uzytkownika czysci odliczanie czasu i zaczyna go liczyc na nowo
         */
        handleUserAction: function() {
            var self = this;
            this.clearDelayPopupTimeout();
            this.startCountDoingNothing();
        },

        /**
         * Funkcja pokazujaca popup
         */
        showPopup: function() {

            //usuwamy wszystkie observery i czyscimy wszystkie zliczane czasy
            this.stopObserveBody();
            this.clearPopupTimeout();
            this.clearDelayPopupTimeout();
            var self = this,
                showPopup = true;
            if (this.options.onlyOnePopup && $(this.options.popupId)) {
                //jesli mamy nie duplikowac popupa to weryfikujemy czy przypadkiem nie ma go na stronie
                showPopup = false;
            }

            //sprawdzamy tez flage externalShowingPopupFlag czy przypadkiem w miedzy czasie nie zostala ona ustawiona na false
            if (this.options.popupUrl && this.options.popupUrl != "" && showPopup && this.externalShowingPopupFlag) {
                new Ajax.Request(this.options.popupUrl, {
                    onSuccess: function(response) {
                        //sprawdzamy czy flaga externalShowingPopupFlag nie zostala ustawiona na false juz po tym jak poszedl request
                        if (self.externalShowingPopupFlag) {
                            var parts = response.responseText.split("<!--@@@@@@-->"),
                                html = '' + parts[0].stripScripts();
                            //usuwamy biale znaki
                            html = html.replace(/^\s*|\s*$/g, '');
                            //generujemy popup jesli jest jakas zawartosc
                            if (html != "") {
                                var popupId = self.options.popupId,
                                    popup = new Element('div', {
                                        id: popupId,
                                        'class': popupId + ' clr'
                                    }).update(response.responseText),
                                    popupContainer, curtain;

                                //wyswietlamy okienko popup-a i wrzucamy do niego nasza tresc
                                PTK.Ajax.popupOpen(popupId, self.options.curtainClassName, self.options.popupClassName);
                                popupContainer = $(popupId + '-popup');
                                curtain = $(popupId + '-popup-curtain');

                                popupContainer.insert(popup);
                                //popup.addClassName(self.options.popupClassName);

                                self.setPopupPosition(popup);

                                Event.observe(window, "resize", function() {
                                    self.setPopupPosition(popup);
                                });

                                //jezeli klik w 'zamknij' lub kurtyne - zamknij popup oraz usun kurtyne
                                popup.on('click', '.popup-close', self.closePopup.bindAsEventListener(self));
                                if (curtain) curtain.on("click", self.closePopup.bindAsEventListener(self));
                            }
                        }
                    }

                });
            }
        },
        /**
         * Funkcja zamykająca popupa
         */
        closePopup: function(event) {
            Event.stop(event);
            PTK.Ajax.popupClose(this.options.popupId + '-popup');
        },

        /**
         * Funkcja centrujaca popupa
         */
        setPopupPosition: function(popup) {
            var left = (document.viewport.getWidth() - popup.getWidth()) / 2,
                top = (document.viewport.getHeight() - popup.getHeight()) / 2;
            //wyliczamy srodkowa pozycje w poziomie i pionie 
            popup.setStyle({
                'left': left + 'px',
                'top': top + 'px'
            });
        },


        /**
         * Funkcja czyszczaca timeout dla wejscia na strone
         */
        clearPopupTimeout: function() {
            if (this.popupTimeout) clearTimeout(this.popupTimeout);
        },

        /**
         * Funkcja czyszczaca timeout dla bezczynnosci uzytkownika
         */
        clearDelayPopupTimeout: function() {
            if (this.popupDelayTimeout) clearTimeout(this.popupDelayTimeout);
        },

        /**
         * Funkcja odpinajaca observery z body
         */
        stopObserveBody: function() {
            if (this.bodyObserveHandler && this.body) {
                this.body.stopObserving("keydown", this.bodyObserveHandler);
                this.body.stopObserving("mousemove", this.bodyObserveHandler);
                this.body.stopObserving("mousedown", this.bodyObserveHandler);
            }
        }

    });
}