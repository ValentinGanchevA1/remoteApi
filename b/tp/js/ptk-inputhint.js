/**
 * PTK.InputHint odpowiada za obsluge podpowiedzi do pol input
 * 
 * podpowiedz kopiowana jest z atrybutu title inputa do dynamicznie tworzonego labela,
 * ktory jest pozycjonowany absolutnie nad inputem
 * 
 * przyklad:
 * html: <input class="textfield hint" title="podaj e-mail" type="text" />
 * js: new PTK.InputHint(); //domyslnie wybierze input.hint
 * 
 * @autor Jan Jagoda
 * @version: $Id: $
 * @requires prototype.js
 */

/* 
 * delikatnie zostala przerobiona  funkcjonalnosc
 * zamiast ukrywac 'label' przez 'display: none' dostaje on klase 'accessible-hide'
 * przy 'display: none' czytniki nie czytaly tresci elementu
 */

var PTK;
if (typeof PTK == "undefined") PTK = {};
if (typeof PTK.InputHint == "undefined") {

    PTK.InputHint = {};
    PTK.InputHint = Class.create({

        defaults: {
            offsetLeft: 0,
            offsetTop: 0,
            italics: false
        },
        options: {},

        initialize: function(elems, options) {
            var self = this;
            this.defaults = {
                offsetLeft: 0,
                offsetTop: 0
            };
            this.options = Object.extend(this.defaults, options);

            //jesli nie zostaly podane zadne elementy, to wyszukaj wszystkie z klasa .hint
            if (!elems) {
                elems = $$('input.hint');
            } else {
                //jesli zostaly podane elementy, to jesli nie sa tablica, ale pojedynczym elementem to wrzuc w tablice
                if (!elems.length) elems = [elems];
            }

            elems.each(function(input, id) {

                input.identify();
                var label = self.createLabel(input);
                // label pokazywane jezeli input nie ma focus i jest pusty
                if (input.getValue() === '' && input !== document.activeElement) {
                    label.removeClassName('accessible-hide');
                }

                //blur pokazuje label-a jezeli nic nie wpisano
                input.observe('blur', self.blurHandler.bindAsEventListener(self));

                //focus ukrywa label-a
                input.observe('focus', self.onFocusHandler.bindAsEventListener(self));

                //input, wywolywany na autocomplete zapamietanej wartosci pola przez przegladarke
                input.observe('input', self.onFocusHandler.bindAsEventListener(self));

                //zanim odpala sie skrypty user moze wstawic kursor w pole i wpisywac po odpalenia skryptu, nalezy wtedy ukryc label
                input.observe('keydown', self.onFocusHandler.bindAsEventListener(self));

            });
        },

        getLabel: function(id) {
            return $('label-' + id);
        },

        blurHandler: function(event) {
            var self = this;
            if (this.options.blurCallbackDeley > 0) {
                setTimeout(function() {
                    self.onInputBlur(event);
                }, this.options.blurCallbackDeley);
            } else {
                this.onInputBlur(event);
            }
        },

        onInputBlur: function(event) {
            if (event.target.getValue() === '') {
                this.getLabel(event.target.id).removeClassName('accessible-hide');
                event.target.removeClassName('ptk-inputhint-notempty');
            } else {
                event.target.addClassName('ptk-inputhint-notempty');
            }
            event.target.removeClassName('ptk-inputhint-focused');
        },

        onFocusHandler: function(event) {
            this.getLabel(event.target.id).addClassName('accessible-hide');
            event.target.addClassName('ptk-inputhint-focused');
        },

        //tworzy label i pozycjonuje go nad inputem
        createLabel: function(input) {
            var label = new Element('label', {
                'for': input.id,
                'id': 'label-' + input.id,
                'class': 'ptk-inputhint-label'
            }).update(input.readAttribute('title'));
            input.insert({
                'after': label
            });

            //kopiowanie pozycji z input-a do label-a (dla poprawnego działania input (lub jego kontener) powinien byc zfloatowany!) 
            label.clonePosition(input, {
                offsetLeft: this.options.offsetLeft,
                offsetTop: this.options.offsetTop
            });

            var padding = input.getStyle("paddingLeft").slice(0, -2);

            if (padding > 0) {
                var labelLeft = label.getStyle("left").slice(0, -2);
                var labelWidth = label.getStyle("width").slice(0, -2);

                var l = Math.max(0, (parseInt(labelLeft) + parseInt(padding)));
                var w = Math.max(0, (parseInt(labelWidth) - parseInt(padding)));

                label.setStyle({
                    left: l + 'px',
                    width: w + 'px'
                });
            }

            //centrowanie tekstu w pionie
            var h = label.getHeight();
            label.setStyle({
                'lineHeight': h + 'px'
            });

            if (this.options.italics) label.setStyle({
                'fontStyle': 'italic'
            });

            label.addClassName('accessible-hide');
            return label;
        }
    });
};