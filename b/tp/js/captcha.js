/**
 * Captcha - klasa odpowiadająca za odtwarzanie dziwięków
 * author: jjagoda, tnowakow
 * Date: 29.10.13
 * Require: sound-player lib/soundmanager2
 * @module common
 * @class PTK.Captcha
 */

var PTK;
if (typeof PTK == "undefined") PTK = {};
if (typeof PTK.Captcha == "undefined") {

    PTK.Captcha = Class.create({
        initialize: function(options) {

            this.settings = Object.extend({
                captchaElem: '#captcha-main',
                inputSelector: 'input.captcha-input',
                questionSelector: '.captcha-question',
                playLinkSelector: '.captcha-read',
                refreshLinkSelector: '.captcha-refresh',
                focusableSelector: '.captcha-input, .captcha-refresh, .captcha-read',
                playIconClass: 'icon-read',
                stopIconClass: 'icon-stop',
                playLinkText: ['czytaj', 'zatrzymaj'],
                keyCodes: []
            }, options || {});

            this.active = false;
            this.isPlaying = false;
            this.observers = false;
            this.captchaElem = $$(this.settings.captchaElem)[0];
            this.captchaElem.addClassName('js-captcha');

            this.init();
        },

        /**
         * Inicjalizacja funkcjonalności captchy
         * @method init
         */
        init: function() {


            this.inputs = this.getInputs();

            //for ipad2
            this.inputLabels = this.getInputLabels();
            this.inputLabels.invoke('observe', 'click', this.onLabelClick.bind(this));

            this.playLink = this.captchaElem.select(this.settings.playLinkSelector)[0];
            this.question = this.captchaElem.select(this.settings.questionSelector)[0];
            this.refreshLink = this.captchaElem.select(this.settings.refreshLinkSelector)[0];
            this.body = $$('body')[0];

            this.focusable = this.captchaElem.select(this.settings.focusableSelector); //dom.find(this.settings.focusableSelector, this.captchaElem);        

            this.sounds = this.getSounds();

            //jezeli sprawdzenie nastapilo juz wczesniej to nie czekamy na event (przypadek odswiezania za pomoca ajaxify)
            var onReady;
            if (!this.body.hasClassName('soundmanager-support')) {
                // gdy istnieje mozliwosc odtwarzania dzwiekow startujemy i podmieniamy tresc linka
                onReady = this.isSoundSupported.bind(this);
            } else {
                onReady = function() {};
                this.isSoundSupported();
            }
            $LAB.setOptions({
                AlwaysPreserveOrder: true,
                AppendTo: 'body'
            }).script(
                '/b/tp/js/sound-player.js'
            ).wait(function() {
                this.player = new PTK.SoundPlayer(this.sounds, {
                    playerId: 'captcha',
                    onReady: onReady,
                    onStopAll: this.handleAllSoundsFinished.bind(this),
                    onTimeout: this.handleSoundTimeout.bind(this)
                });
            }.bind(this));
        },

        isSoundSupported: function() {
            //klasa dodawana jednak po zaladowaniu wszystkich dzwięków
            this.body.addClassName('soundmanager-support');
            this.initObservers();
        },

        initObservers: function() {
            if (!this.observers) {
                this.playLink.observe('click', this.handlePlay.bind(this));
                this.refreshLink.observe('click', this.stopSounds.bind(this));
                this.focusable.invoke('observe', 'focus', this.handleContainerFocus.bind(this));
                this.focusable.invoke('observe', 'blur', this.handleContainerBlur.bind(this));
                this.captchaElem.observe('keyup', this.handleKeyup.bind(this));
                this.observers = true;
            }
        },

        handleContainerFocus: function(e) {
            this.active = true;
        },

        handleContainerBlur: function() {
            this.active = false;
        },

        handleKeyup: function(e) {
            if (this.active) {
                var num = (e.keyCode ? e.keyCode : e.which) - 48; //od keyCode odejmujemy 48, dostajemy wcisnieta cyfre
                if (num > 48 && num < 58) {
                    num = num - 48; //ponownie -48 - klawiatura numeryczna
                }

                // wg. SF obsługujemy tylko klawisze od 1-9
                if (num > 0 && num <= 9) {
                    this.selectAnswer(num);
                }

            }
        },

        handlePlay: function(e) {
            e.preventDefault();
            if (!this.isPlaying) {
                this.playSounds();
            } else {
                this.stopSounds();
            }
            return false;
        },

        handleAllSoundsFinished: function() {
            this.onStop();
        },

        handleSoundTimeout: function() {
            this.onStop();
        },

        playSounds: function() {
            this.player.play();
            this.playLink.addClassName(this.settings.stopIconClass);
            this.playLink.removeClassName(this.settings.playIconClass);
            this.setPlayLinkText(this.settings.playLinkText[1]);
            this.isPlaying = true;
        },

        stopSounds: function() {
            this.player.stop();
            this.onStop();
        },

        onStop: function() {
            this.playLink.addClassName(this.settings.playIconClass);
            this.playLink.removeClassName(this.settings.stopIconClass);
            this.setPlayLinkText(this.settings.playLinkText[0]);
            this.isPlaying = false;
        },

        setPlayLinkText: function(text) {
            this.playLink.innerHTML = text;
        },

        getInputs: function() {
            return this.captchaElem.select(this.settings.inputSelector);
        },

        getInputLabels: function() {
            var labels = [];
            this.inputs.each(function(elem) {
                labels.push(elem.up('label'));
            });
            return labels;
        },

        getSounds: function() {
            var questionSound = this.question.readAttribute('data-sound');
            sounds = [];
            sounds.push(questionSound);

            this.inputs.each(function(elem) {
                var n = elem.readAttribute('data-sound-number');
                var s = elem.readAttribute('data-sound');
                if (n) {
                    sounds.push(n);
                }
                if (s) {
                    sounds.push(s);
                }
            });

            return sounds;
        },

        selectAnswer: function(num) {
            var inp = this.inputs[num - 1];
            if (inp) {
                //inp.checked = true;
                TP.CustomForms.Controls.toggleCheckbox(inp.id);
            }
        },

        stop: function() {
            this.player.reset();
        },

        onLabelClick: function(event) {
            if (event.target.tagName.toLocaleLowerCase() === 'label' || event.target.tagName.toLocaleLowerCase() === 'span') {
                event.preventDefault();
                var lfor = event.currentTarget.readAttribute('for');
                // TODO: przetestować to na iPad 2 czy to dobry zamiennik tego: dom.find('#'+lfor)[0].click();
                TP.CustomForms.Controls.toggleCheckbox(lfor);
            }
        }
    })

}