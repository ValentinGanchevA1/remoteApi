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

            //domyslnie wyszukaj wszystkie z klasa .hint
            if (!elems) elems = $$('input.hint');
            if (!elems.length && !Object.isArray(elems)) elems = [elems];

            elems.each(function(input, id) {
                if (input) {
                    input.identify();
                    var label = self.createLabel(input);
                    if (input.getValue() == '') {
                        label.show();
                    }

                    //focus ukrywa label-a
                    input.observe('focus', function(event) {
                        $('label-' + this.id).hide();
                        this.addClassName('ptk-inputhint-focused');
                    });

                    //blur pokazuje label-a jezeli nic nie wpisano
                    input.observe('blur', function(event) {
                        if (self.options.blurCallbackDeley > 0) {
                            setTimeout(function() {
                                self.onInputBlur(event);
                            }, self.options.blurCallbackDeley);
                        } else {
                            self.onInputBlur(event);
                        }
                    });
                }
            });
        },

        onInputBlur: function(event) {
            if (event.target.getValue() == '') {
                $('label-' + event.target.id).show();
                event.target.removeClassName('ptk-inputhint-notempty');
            } else {
                event.target.addClassName('ptk-inputhint-notempty');
            }
            event.target.removeClassName('ptk-inputhint-focused');
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

            label.hide();
            return label;
        }
    });
};