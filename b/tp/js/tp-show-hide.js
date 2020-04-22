/**
 * TP.ShowHide odpowiada za zwijanie/rozwijanie elementow po kliknieciu w link
 * 
 * @autor Jan Jagoda
 * @version: $Id: $
 * @requires prototype.js
 */




var TP;
if (typeof TP == "undefined") TP = {};
if (typeof TP.ShowHide == "undefined") {

    TP.ShowHide = {};
    TP.ShowHide = Class.create({

        initialize: function(options) {
            var self = this;

            this.defaults = {
                triggerSelector: '.tp-show-hide-trigger',
                changeText: false,
                texts: ['rozwiń', 'zwiń'],
                changeClass: true,
                classes: ['link-show', 'link-hide'],
                onStartHide: false,
                callback: null
            }

            this.options = Object.extend(this.defaults, options);
            this.triggers = $$(this.options.triggerSelector);

            this.triggers.each(function(trigger, index) {

                trigger.observe('click', self.handleClick.bindAsEventListener(self, trigger));

                /* pozwala na klikniecie w link pokaz/ukryj za pomoca innego skryptu, np. $('.tp-show-hide-trigger).fire('tpShowHide:externalClick'); */
                trigger.observe('tpShowHide:externalClick', self.handleClick.bindAsEventListener(self, trigger));

                if (self.options.onStartHide) {
                    /*Tutaj nie odpalamy naszego eventu a wywolujemy handler, bo mzoe sie zdarzyc tak, 
                     * ze po stronie backendu beda ustawione juz w htmlu klasy do ukrycia elementow
                     * i bedzie ustawione onStartHide i wtedy taka sytuacja spowoduje ze elementy sie odkryja*/
                    self.handleClick(null, trigger);
                }

            });

        },

        handleClick: function(ev, trigger) {
            var elementId = trigger.className.split('tp-show-hide-el-')[1].split(' ')[0]
            var element = $(elementId);
            var hidden = element.hasClassName('tp-show-hide-hidden');
            if (!hidden) {

                this.positionScroll(element);
                this.hideElement(element);
                if (this.options.changeText) trigger.innerHTML = this.options.texts[0];
                if (this.options.changeClass) trigger.removeClassName(this.options.classes[1]).addClassName(this.options.classes[0]);
            } else {
                this.showElement(element);
                if (this.options.changeText) trigger.innerHTML = this.options.texts[1];
                if (this.options.changeClass) trigger.removeClassName(this.options.classes[0]).addClassName(this.options.classes[1]);
            }

            if (this.options.callback && Object.isFunction(this.options.callback)) this.options.callback(trigger, hidden, element, ev);

            trigger.fire('tpShowHide:stateChanged', {
                trigger: trigger
            });

            if (ev) ev.stop();
        },

        positionScroll: function(element) {
            if (element.up('li') && element.up('li').down('p')) {
                var offsetElem = element.up('li').down('p').viewportOffset().top;

                if (offsetElem < 35) {
                    var scrollPosition = element.offsetTop - 95;
                    window.scrollTo(0, scrollPosition);
                } else {}
            }

        },


        hideElement: function(element) {
            element.addClassName('tp-show-hide-hidden');

        },

        showElement: function(element) {
            element.removeClassName('tp-show-hide-hidden');
            /*if(element.tagName.toLowerCase()=='tr'){
            	element.up().setStyle({'position': 'relative'});
            }*/
        }
    });
}