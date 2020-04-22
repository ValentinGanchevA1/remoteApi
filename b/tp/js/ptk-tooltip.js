//PTK.Tooltip
//odpowiada za tworzenie tooltipa po najechaniu na elementy wybrane odpowiednim selektorem
// @param selector:	selektor do elementu po najechaniu na ktory tooltip jest pokazywany (np. new PTK.Tooltip('.tt', {'width':200}) utworzy tooltipy dla elementow o klasie .tt)
// @param options:	obiekt opcji
//					width: szerokosc tooltipa (max=380px)
//					tooltipOrientation: polozenie tooltipa wzgledem elemntu wywolujacego ('bottom-right':ponizej i po prawej stronie elementu wywolujacego, domyslnie u gory po lewej)
// powiazanie elementu wywolujacego z elementem zawierajacym tresc do tooltipa nastepuje poprzez nadanie 
// klasy 'tooltipText_id-'+(id elementu z tresca) elementowi wywolujacemu
// przyklad:
// w przypadku wywolania: new PTK.Tooltip('.tt', {'width':200}) element wywolujacy musi miec dwie klasy,
// np. <div class="tt tooltipText_id-idElementuZtrescia">[?]</div> <div id="idElementuZtrescia">to zostanie pokazane w chmurce</div>
// wtedy innerHTML elementu o id 'idElementuZtrescia' jest kopiowany do tooltipa i wyswietlany po najechaniu na el o klasie 'tt'
// autor: <a href="mailto:jjagoda@amg.net.pl">jan jagoda</a>
// ver 0.2

// 0.2	dodano mozliwosc wywolywania tooltipa dla elementu o okreslonym id(idElementuWywolujacego) i tresci w elemencie o id='idElementuWywolujacego-cloudContent'
// 		funkcjonalnosc uzywana w tagu ptk:tooltip w przypadku ustawienia parametru canvas na false

var PTK;
if (typeof PTK == "undefined") PTK = {};
if (typeof PTK.Tooltip == "undefined") {

    PTK.Tooltip = Class.create({

        options: {},

        initialize: function(selector, options) {

            this.options = {
                tooltipWidth: options.width,
                additionalClass: options.additionalClass || '',
                observerUsed: options.observerUsed || false,
                tooltipOrientation: options.tooltipOrientation || 'bottom-right',
                idTriggered: options.idTriggered || false,
                relativePosition: options.relativePosition || false
            };

            var self = this;
            if (this.options.idTriggered) {
                var element = $(selector);
                var tooltipSource = $(self.getTooltipId(element));
                if (tooltipSource) {
                    tooltipSource.hide();

                    if (!options.observerUsed) {
                        element.observe('mouseenter', function(event) {
                            self.showTooltip(event, element);
                        });
                        element.observe('mouseleave', function(event) {
                            self.hideTooltip(event, element);
                        });
                    }
                }
            } else {
                $$(selector).each(function(element, index) {
                    var tooltipSource = $(self.getTooltipId(element));
                    if (tooltipSource) {
                        tooltipSource.hide();

                        if (!options.observerUsed) {
                            element.observe('mouseenter', function(event) {
                                self.showTooltip(event, element);
                            });
                            element.observe('mouseleave', function(event) {
                                self.hideTooltip(event, element);
                            });
                        }
                    }
                });
            }
        },

        /* zwraca id diva, w ktorym znajduje sie zawartosc do tooltipa */
        getTooltipId: function(target) {
            var sourceId;
            if (this.options.idTriggered) {
                sourceId = target.id + '-cloudContent';
            } else {
                var classNames = target.className.split(' ');
                for (var i = 0; i < classNames.length; i++) {
                    if (classNames[i].indexOf('tooltipText_id') != -1) {
                        sourceId = classNames[i].substring(15);
                    }
                }
            }
            return (sourceId);
        },

        /* ustawia polozenie tooltipa*/
        setPosition: function(tooltip, tooltipTarget, orientation) {

            tooltipPosition = (this.options.relativePosition) ? tooltipTarget.positionedOffset() : tooltipTarget.cumulativeOffset();
            tooltipDimensions = tooltip.getDimensions();
            targetDimensions = tooltipTarget.getDimensions();

            if (orientation == 'top-left') {
                /* po prawej stronie elementu wywolujacego tt*/
            } else if (orientation == 'right-center') {
                /* po prawej stronie elementu wywolujacego tt - wysrodkowane w pionie */
                tooltipPosition.top = tooltipPosition.top - parseInt((tooltipDimensions.height / 2) - (targetDimensions.height / 2)) + parseInt((parseInt(tooltipTarget.getStyle('padding-top'))) / 2);
                tooltipPosition.left -= 6;
            } else {
                /* nad i po lewej stronie elementu wywolujacego tt*/
                tooltipPosition.top -= tooltipDimensions.height + 2;
                tooltipPosition.left -= tooltipDimensions.width;
                tooltipPosition.left += targetDimensions.width / 2;
            }

            tooltip.setStyle({
                position: 'absolute',
                top: tooltipPosition.top + "px",
                left: tooltipPosition.left + 22 + "px",
                display: "inline",
                zIndex: 100
            });
        },

        /* pokazuje tooltipa, pierwsze wywoleanie dodaje tt do body*/
        showTooltip: function(event, element) {
            var self = this;
            var tooltipTarget = element || Event.element(event);
            var tooltipSourceId = this.getTooltipId(tooltipTarget)
            if (!tooltipSourceId) {
                return;
            }
            tooltipSource = $(tooltipSourceId);

            var tooltipText = this.trim(tooltipSource.innerHTML);

            if (tooltipText != '') {

                /*usun wszystkie inne gdyby cos zostalo, np. po requescie ajaxowym*/
                $$('.ptk-tooltip-container').each(function(el) {
                    el.remove();
                });

                if (this.options.relativePosition) {
                    insertTo = tooltipTarget;
                    insertTo.insert({
                        'after': new Template('<div id="#{id}" class="ptk-tooltip-container #{additionalClass}" style="width:#{holderWidth};position:absolute;"><div class="ptk-tooltip" style="width:#{width};">' + ((this.options.tooltipOrientation == 'right-center') ? ('<div class="ptk-tooltip-content clr"><div class="t"></div><div>#{text}</div></div>') : ('<div class="ptk-tooltip-content clr"><div>#{text}</div></div><div class="b"><div></div></div>')) + '</div></div>')
                            .evaluate({
                                id: 'tooltip-container-' + tooltipSourceId,
                                additionalClass: this.options.additionalClass,
                                text: tooltipText,
                                holderWidth: this.options.tooltipWidth + 'px'
                            })
                    });
                } else {
                    insertTo = $$('body')[0];
                    insertTo.insert({
                        'bottom': new Template('<div id="#{id}" class="ptk-tooltip-container #{additionalClass}" style="width:#{holderWidth};position:absolute;"><div class="ptk-tooltip" style="width:#{width};">' + ((this.options.tooltipOrientation == 'right-center') ? ('<div class="ptk-tooltip-content clr"><div class="t"></div><div>#{text}</div></div>') : ('<div class="ptk-tooltip-content clr"><div>#{text}</div></div><div class="b"><div></div></div>')) + '</div></div>')
                            .evaluate({
                                id: 'tooltip-container-' + tooltipSourceId,
                                additionalClass: this.options.additionalClass,
                                text: tooltipText,
                                holderWidth: this.options.tooltipWidth + 'px'
                            })
                    });
                }


                tooltip = $('tooltip-container-' + tooltipSourceId);

                /* bo max-width=380*/
                if (this.options.tooltipWidth > 380) this.options.tooltipWidth = 380;
                /* jezeli podano w opcjach to ustawia szerokosc, jezeli nie to brane min-width/max-width z css'a*/
                if (this.options.tooltipWidth) tooltip.setStyle({
                    width: this.options.tooltipWidth + 'px'
                });

                this.setPosition(tooltip, tooltipTarget, self.options.tooltipOrientation);
            }

        },

        /* ukrywa tt*/
        hideTooltip: function(event, element) {
            var el = element || Event.element(event);
            var tooltipSourceId = this.getTooltipId(el);
            if (!tooltipSourceId) {
                return;
            }
            var tooltip = $('tooltip-container-' + tooltipSourceId);

            if (tooltip) tooltip.remove();
        },

        /* na zmiane pokazuje/ukrywa tt, pierwsze wywolanie dodaje do body*/
        toggleTooltip: function(event) {
            var el = Event.element(event);
            var tooltip = $('tooltip-container-' + this.getTooltipId(el));

            if (!tooltip) {
                tooltipSource = $(this.getTooltipId(el));
                tooltipSource = $(tooltipSourceId);

                var tooltipText = this.trim(tooltipSource.innerHTML);
                if (tooltipText != '') {
                    $$('body')[0].insert({
                        'bottom': new Template('<div id="#{id}" style="width:#{holderWidth};position:absolute;"><div class="ptk-tooltip" style="width:#{width};"><div class="ptk-tooltip-content"><div class="t"></div><div>#{text}</div></div><div class="b"><div></div></div></div></div>')
                            .evaluate({
                                id: 'tooltip-container-' + this.getTooltipId(el),
                                text: tooltipText,
                                holderWidth: this.options.tooltipWidth + 'px'
                            })
                    });
                    tooltip = $('tooltip-container-' + this.getTooltipId(el))
                    this.setPosition(tooltip, el);
                    return;
                }
            }
            $('tooltip-container-' + this.getTooltipId(el)).toggle();
        },

        trim: function(val) {
            var string = '' + val;
            string = string.replace(/^\s*|\s*$/g, '');
            return string;
        }
    });

}