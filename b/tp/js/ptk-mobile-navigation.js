/**
 * PTK.MobileNavigation
 *
 * @autor Przemyslaw Lewandowski
 * @version: $Id: $
 * @requires prototype.js
 */

var PTK;
if (typeof PTK == "undefined") PTK = {};
if (typeof PTK.MobileNavigation == "undefined") {

    PTK.MobileNavigation = {};
    PTK.MobileNavigation = Class.create({

        defaults: {},
        options: {},

        /**
         * Initialize toggle observers
         * @method init
         */
        initialize: function(elems, options) {
            var self = this;
            this.defaults = {
                headerId: 'header',
                mainElSelector: '#opl',
                mainContentElSelector: '#main',
                headerFixedClass: 'opl-header--fixed',
                liSelector: '.opl-navigation__li',
                toggleSelector: '.opl-navigation__toggle',
                focusCssClass: 'opl-navigation__li--focus',
                childSelector: '.opl-navigation__child',
                searchTriggerSelector: '.opl-navigation__search-trigger',
                searchWrapperSelector: '.opl-navigation__search-wrapper',
                searchContentSelector: '.opl-navigation--search',
                overlapWidth: 45,
                mobileMenuWidth: '468px',
                mobileBreakPoint: 950,
            };
            this.options = Object.extend(this.defaults, options);

            this.isFixed = false;

            this.context = $(this.options.headerId);
            this.body = $$('body')[0];
            this.mainEl = $$(this.options.mainElSelector)[0];
            this.mainContentEl = $$(this.options.mainContentElSelector)[0];

            this.isFixed = false;
            this.initMenu = false;

            if (this.context && this.body && this.mainEl && this.mainContentEl) {

                this.contents = this.context.select(this.options.liSelector);
                this.toggles = this.context.select(this.options.toggleSelector);

                this.searchTrigger = this.context.select(this.options.searchTriggerSelector);
                this.searchWrapper = this.context.select(this.options.searchWrapperSelector);
                this.searchContent = this.context.select(this.options.searchContentSelector);

                this.setMobileMenuWidth();

                Event.observe(window, 'resize', this.setMobileMenuWidth.bind(this));
            }

        },

        initMobileMenu: function() {
            var self = this;

            this.initMenu = true;

            var nav = this.context.select('.opl-header__navigation')[1];
            var userSeachMenu = this.context.select('.opl-navigation--userSearch');

            if (userSeachMenu.length) {

                this.userSeachForm = userSeachMenu[0].select('.opl-search-form');
                this.userSeachinput = userSeachMenu[0].select('#search');

                userSeachMenu[0].on('touchstart', '#search', this.onSearchOpen.bind(this));
                userSeachMenu[0].on('click', '#search', this.onSearchOpen.bind(this));

                userSeachMenu[0].on('touchstart', '.opl-search-form--cancel', this.onSearchClose.bind(this));
                userSeachMenu[0].on('click', '.opl-search-form--cancel', this.onSearchClose.bind(this));

                this.context.observe('touchstart', this.onSearchClose.bind(this));
                this.context.observe('click', this.onSearchClose.bind(this));

                userSeachMenu[0].on('touchstart', '.opl-search-form--submit', this.onSearchSubmit);
                userSeachMenu[0].on('click', '.opl-search-form--submit', this.onSearchSubmit);

            }


            var firstmobileMenu = this.context.select('.opl-mobile-menu__title.first-menu');

            if (firstmobileMenu.length) {

                firstmobileMenu[0].on('touchstart', 'a', function(ev) {
                    if (ev.target.tagName.toLowerCase() == 'span') {
                        self.openSpecUrl(ev.target.parentElement.getAttribute('href'));
                    } else {
                        self.openSpecUrl(ev.target.getAttribute('href'));
                    }
                })

                firstmobileMenu[0].on('click', 'a', function(ev) {
                    if (ev.target.tagName.toLowerCase() == 'span') {
                        self.openSpecUrl(ev.target.parentElement.getAttribute('href'));
                    } else {
                        self.openSpecUrl(ev.target.getAttribute('href'));
                    }
                })

            }

            self.navSecond = this.context.select('.opl-navigation-mobile-menu--wrapper')[0];

            if (self.navSecond && nav) {

                jq(self.navSecond).multilevelpushmenu({
                    direction: 'rtl',
                    wrapperClass: 'opl-navigation__mobile--content',
                    mode: 'overlap',
                    groupIcon: 'arrow-right-2',
                    backText: 'Powrót',
                    backItemIcon: 'arrow-left-2',
                    menuHeight: jq(window).height(),
                    menuWidth: self.options.mobileMenuWidth,
                    overlapWidth: self.options.overlapWidth,
                    collapsed: true,
                    fullCollapse: true,
                    swipe: 'both',
                    onItemClick: function() {
                        var event = arguments[0],
                            $menuLevelHolder = arguments[1],
                            $item = arguments[2],
                            options = arguments[3];
                        var itemHref = $item.find('a:first').attr('href');
                        self.openSpecUrl(itemHref);
                    },
                    onExpandMenuStart: function() {
                        jq(self.navSecond).multilevelpushmenu('redraw');
                    },
                    onCollapseMenuEnd: function() {
                        if (jq(self.navSecond).multilevelpushmenu('activemenu').length === 0) {
                            jq('#opl').removeClass('opl--menu-visible');
                        }
                    }

                });


                this.context.select('.opl-mobile-menu')[0].observe('click', function(ev) {
                    ev.preventDefault();
                    if (self.mainEl.hasClassName('opl--menu-visible')) {
                        self.mainEl.removeClassName('opl--menu-visible');
                        jq(self.navSecond).multilevelpushmenu('collapse');
                        $$('.opl-navigation__mobile-contact').each(function(el) {
                            el.show();
                        });
                    } else {
                        self.mainEl.addClassName('opl--menu-visible');
                        jq(self.navSecond).multilevelpushmenu('expand');
                        $$('.opl-navigation__mobile-contact').each(function(el) {
                            el.hide();
                        });
                    }
                });

                nav.addClassName('opl-header__navigation--mobile-initialized');

            }

        },

        onSearchOpen: function(ev) {
            ev.stopPropagation();
            if (this.userSeachForm.length && this.userSeachinput.length) {
                this.userSeachForm[0].addClassName('opl-search-form--visible');
                this.userSeachinput[0].focus();
            }
        },

        onSearchClose: function() {
            if (this.userSeachForm.length && this.userSeachinput.length) {
                this.userSeachForm[0].removeClassName('opl-search-form--visible');
                this.userSeachinput[0].value = '';
                this.userSeachinput[0].blur();
            }
        },

        onSearchSubmit: function() {
            this.down('form').submit();
        },

        openSpecUrl: function(url) {
            setTimeout(function() {
                location.href = url;
            }, 400);
        },

        setMobileMenuWidth: function() {
            var windowW = window.innerWidth;
            if (windowW > 480) {
                this.options.mobileMenuWidth = '468px';
            }
            if (windowW > 300 && windowW < 479) {
                this.options.mobileMenuWidth = (windowW - this.options.overlapWidth).toFixed(0) + 'px';
            }

            var expanderContent = $$('.opl-footer__expander-content');
            var self = this;

            expanderContent.each(function(content) {
                if (windowW > self.options.mobileBreakPoint) {
                    if (content.hasClassName('ptk-show-hide-hidden')) {
                        content.removeClassName('ptk-show-hide-hidden');
                    }
                } else {
                    if (!content.hasClassName('ptk-show-hide-hidden')) {
                        content.addClassName('ptk-show-hide-hidden');
                    }
                }
            });

            this.isDrawer = this.context.select('.opl-header__drawer');

            if (this.isDrawer.length) {
                if (windowW > self.options.mobileBreakPoint) {
                    if (this.isDrawer[0].hasClassName('opl-header__drawer-mobile')) {
                        this.isDrawer[0].removeClassName('opl-header__drawer-mobile');
                    }
                } else {
                    if (!this.isDrawer[0].hasClassName('opl-header__drawer-mobile')) {
                        this.isDrawer[0].addClassName('opl-header__drawer-mobile');
                    }
                }
            }

            if (this.initMenu && this.navSecond) {
                jq(this.navSecond).multilevelpushmenu('option', 'menuWidth', this.options.mobileMenuWidth);
                jq(this.navSecond).multilevelpushmenu('redraw');
            }

            if (windowW <= self.options.mobileBreakPoint && !this.initMenu) {
                this.initMobileMenu();
            }
        },
    });

}