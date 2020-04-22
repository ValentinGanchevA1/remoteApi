/**
 * PTK.MobileArticleNavigation
 *
 * @autor Kacper Kupczak
 * @version: $Id: $
 * @requires prototype.js
 */

var PTK;
if (typeof PTK == "undefined") PTK = {};
if (typeof PTK.MobileArticleNavigation == "undefined") {

    PTK.MobileArticleNavigation = {};
    PTK.MobileArticleNavigation = Class.create({

        defaults: {},
        options: {},

        /**
         * Initialize toggle observers.
         * @method init
         */
        initialize: function(elems, options) {
            var self = this;

            this.defaults = {
                headerId: 'header',
                mainElSelector: '#opl',
                mobileMenuWidth: '468px',
                overlapWidth: 45,
                mobileBreakPoint: 950
            };

            this.options = Object.extend(this.defaults, options);

            this.context = $(this.options.headerId);
            this.mainEl = $$(this.options.mainElSelector)[0];

            this.windowSize(); // Pobieramy szerokość okna.
            $$('.opl-mobile-contact').invoke('observe', 'click', this.initMobileMenu.bind(this)); // Wywołujemy artykuł.
            Event.observe(window, 'resize', this.initResizeMobileMenu.bind(this)); // Robimy resize artykułu w zależności od szerokości okna.
        },

        initMobileMenu: function(e) {
            e.preventDefault();
            var self = this;

            if (self.mainEl.hasClassName('opl--menu-article-visible')) {
                self.mainEl.removeClassName('opl--menu-article-visible');
                $$('.opl-navigation-mobile-article-menu--wrapper').each(function(el) {
                    el.setStyle({
                        width: 0
                    });
                });

                $$('.opl-navigation__li').each(function(el) {
                    el.show();
                });
            } else {
                $$('.opl-navigation-mobile-article-menu--wrapper').each(function(el) {
                    el.setStyle({
                        width: self.options.mobileMenuWidth
                    });
                });

                self.mainEl.addClassName('opl--menu-article-visible');
                $$('.opl-navigation__li:not(.opl-navigation__mobile-contact)').each(function(el) {
                    el.hide();
                });
            }
        },

        initResizeMobileMenu: function() {
            var self = this;
            this.windowSize();

            if (self.mainEl.hasClassName('opl--menu-article-visible')) {
                $$('.opl-navigation-mobile-article-menu--wrapper').each(function(el) {
                    el.setStyle({
                        width: self.options.mobileMenuWidth,
                        transitionProperty: 'none'
                    });
                });

                self.mainEl.addClassName('opl--menu-article-visible');
                $$('.opl-navigation__li:not(.opl-navigation__mobile-contact)').each(function(el) {
                    if (window.innerWidth > self.options.mobileBreakPoint) {
                        el.show();
                    } else {
                        el.hide();
                    }
                });
            }
        },

        windowSize: function() {
            var windowW = window.innerWidth;

            if (windowW > 480) {
                this.options.mobileMenuWidth = '468px';
            }

            if (windowW > 300 && windowW < 479) {
                this.options.mobileMenuWidth = (windowW - this.options.overlapWidth).toFixed(0) + 'px';
            }
        }

    });

}