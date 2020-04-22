/**
 * TP.FocusNavigation is a plugin for keyboard (on focus) support for main navigation element
 *
 * @autor marcin.krasowski
 * @version: $Id: $
 * @requires prototype.js
 */

var TP;
if (typeof TP == "undefined") TP = {};
if (typeof TP.FocusNavigation == "undefined") {

    TP.FocusNavigation = {};
    TP.FocusNavigation = Class.create({

        defaults: {
            liSelector: '.opl-navigation__li',
            toggleSelector: '.opl-navigation__toggle',
            focusCssClass: 'opl-navigation__li--focus',
            childSelector: '.opl-navigation__child',
            searchTriggerSelector: '.opl-navigation__search-trigger',
            searchWrapperSelector: '.opl-navigation__search-wrapper',
            searchContentSelector: '.opl-navigation__search'
        },
        options: {},

        /**
         * Initialize toggle observers
         * @method init
         */
        initialize: function(elems, options) {
            var self = this;
            this.defaults = {
                headerId: 'header',
                mainContentElId: 'main-box',
                headerFixedClass: 'opl-header--fixed',
                liSelector: '.opl-navigation__li',
                toggleSelector: '.opl-navigation__toggle',
                focusCssClass: 'opl-navigation__li--focus',
                childSelector: '.opl-navigation__child',
                searchTriggerSelector: '.opl-navigation__search-trigger',
                searchWrapperSelector: '.opl-navigation__search-wrapper',
                searchContentSelector: '.opl-navigation--search',
                searchCloseSelector: '.opl-navigation__search-close'
            };
            this.options = Object.extend(this.defaults, options);

            this.isFixed = false;

            this.context = $(this.options.headerId);
            this.body = $$('body')[0];
            this.contents = this.context.select(this.options.liSelector);
            this.toggles = this.context.select(this.options.toggleSelector);
            this.mainContentEl = $(this.options.mainContentElId);
            this.searchTrigger = this.context.select(this.options.searchTriggerSelector);
            this.searchWrapper = this.context.select(this.options.searchWrapperSelector)[0];
            this.searchContent = this.context.select(this.options.searchContentSelector)[0];
            this.searchClose = this.context.select(this.options.searchCloseSelector)[0];
            this.searchResult = $("search-result");

            if (this.searchTrigger.length > 0) {
                this.searchTrigger.each(function(trigger) {
                    trigger.observe('click', self.onSearchClick.bind(self));
                });

                if (this.searchClose) {
                    this.searchClose.observe('click', this.closeSearch.bind(this));
                }

                // Scroll menu
                //document.observe('scroll', this.debounceCalculateHeader.bind(this));

                document.observe('keypress', this.onSearchWrite.bind(this));
                document.observe('keyup', this.onSearchEsc.bind(this));
                document.observe('click', this.closeSearch.bind(this));
                document.observe('scroll', this.closeSearch.bind(this));

                if (this.searchContent) {
                    var self = this;

                    this.searchContent.observe('click', function(ev) {
                        ev.stopPropagation();
                    });

                    self.searchContent.observe('click', self.switchColor.bind(self));
                }
            }

            this.drawerMenu();

            this.drawerLinks();

        },

        switchColor: function() {
            $$(this.options.searchTriggerSelector).each(function(elem) {
                elem.removeClassName('active');
            });
        },

        /**
         * Toggles active class on the search wrapper element
         * @method onSearchClick
         */
        onSearchClick: function(ev) {
            ev.preventDefault();

            var self = this;

            var mobileTrigger;

            $$('.opl-navigation__mobile-visible').each(function(elem) {
                mobileTrigger = elem.select(self.options.searchTriggerSelector);
                if (mobileTrigger.length) throw $break;
            });

            if (mobileTrigger.length) {
                if (mobileTrigger[0].hasClassName('active')) {
                    // mobileTrigger[0].removeClassName('active');
                } else {
                    mobileTrigger[0].addClassName('active');
                    $$(this.searchTrigger).each(function(elem) {
                        elem.setStyle({
                            backgroundPosition: '100% 100%'
                        });
                    });
                }
            }

            if (this.searchContent.hasClassName('is-active')) {
                // this.searchContent.removeClassName('is-active');
                var searchPhraseInput = $("searchPhrase");
                searchPhraseInput.setValue('');
                var searchResult = $("search-result");
                searchResult.hide();
            } else {
                ev.stopPropagation();

                if (this.activeMenuElement) {
                    this.hideMenu(ev,
                        function() {
                            self.searchContent.addClassName('is-active');
                            self.isAnimated = false;
                        }
                    );
                } else {
                    self.searchContent.addClassName('is-active');
                }
                setTimeout(function() {
                    var searchPhraseInput = $("searchPhrase");
                    searchPhraseInput.focus();
                }, 80);
            }
        },

        onSearchWrite: function(ev) {
            var r = document.activeElement.tagName.toLowerCase();
            var self = this;
            if ((r == 'body' || r == 'div') && ev.which <= 122 && ev.which >= 48 && !ev.ctrlKey) {
                if (this.activeMenuElement) {
                    this.hideMenu(ev,
                        function() {
                            self.searchContent.addClassName('is-active');
                            self.isAnimated = false;
                        }
                    );
                } else {
                    self.searchContent.addClassName('is-active');
                }
                setTimeout(function() {
                    var searchPhraseInput = $("searchPhrase");
                    searchPhraseInput.focus();
                    searchPhraseInput.setValue(searchPhraseInput.getValue() + ev.key);
                }, 80);
            }
        },

        onSearchEsc: function(ev) {
            if (ev.which == 27) {
                this.closeSearch();
            }
        },

        closeSearch: function(e) {
            if (this.searchContent.hasClassName('is-active')) {
                if ((e && e.target.nodeName.toLowerCase() == 'a') && (e.target.hasClassName('opl-navigation__search-trigger'))) {
                    // this.searchContent.removeClassName('is-active');
                    var searchPhraseInput = $("searchPhrase");
                    searchPhraseInput.setValue('');
                    var searchResult = $("search-result");
                    searchResult.hide();
                } else {
                    var self = this;
                    var mobileTrigger;

                    $$('.opl-navigation__mobile-visible').each(function(elem) {
                        mobileTrigger = elem.select(self.options.searchTriggerSelector);
                        if (mobileTrigger.length) throw $break;
                    });

                    this.searchContent.removeClassName('is-active');
                    var searchPhraseInput = $("searchPhrase");
                    searchPhraseInput.setValue('');
                    var searchResult = $("search-result");
                    searchResult.hide();

                    if (mobileTrigger.length) {
                        if (mobileTrigger[0].hasClassName('active')) {
                            mobileTrigger[0].removeClassName('active');
                        } else {
                            mobileTrigger[0].addClassName('active');
                        }
                    }
                }
            }
        },

        drawerMenu: function() {
            //window.a = this.context.select('.opl-header__drawer');
            if (this.context.select('.opl-header__drawer').length) {

                this.menuLists = this.context.select('.opl-navigation--second .opl-navigation__list:not(.opl-navigation__child) > .opl-navigation__li');
                var links = this.context.select('.opl-navigation--second .opl-navigation__list:not(.opl-navigation__child) > .opl-navigation__li > .opl-navigation__item a');

                var self = this;

                this.menuLists.each(function(li) {
                    var drawer = li.select('.opl-navigation__drawer');

                    if (drawer && drawer.length) {
                        drawer[0].setStyle({
                            display: 'none'
                        });

                        drawer[0].addClassName('opl-navigation--drawer-show');
                    }
                });

                links.each(function(link) {
                    link.observe('click', self.toggleMenu.bind(self));
                });

                document.observe('click', this.hideMenu.bind(this));
                document.observe('scroll', this.hideMenu.bind(this));
            }
        },

        toggleMenu: function(ev) {
            ev.stopPropagation();

            var self = this;

            var parent = ev.currentTarget.up('.opl-navigation__li');
            var drawer = parent.select('.opl-navigation__drawer');

            if (!this.isAnimated) {

                this.isAnimated = true;

                if (parent.hasClassName('opl-navigation__li--active')) {
                    this.hideMenu(ev);
                } else {
                    if (drawer.length) {
                        if (this.activeMenuElement) {
                            this.hideMenu(ev, function() {
                                self.showMenu(ev, parent, drawer);
                            });
                        } else {
                            this.showMenu(ev, parent, drawer);
                        }
                    }
                }
            }
        },

        showMenu: function(ev, parent, drawer) {
            ev.preventDefault();

            var self = this;

            this.closeSearch();

            this.activeMenuElement = parent;

            parent.addClassName('opl-navigation__li--active');

            Effect.SlideDown(drawer[0], {
                duration: 0.6,
                afterFinish: function() {
                    self.isAnimated = false;
                }
            });
        },

        hideMenu: function(ev, onComplete) {
            if (ev.which == 3) {
                return false;
            } else {
                var self = this;
                if (this.activeMenuElement) {
                    this.activeMenuElement.removeClassName('opl-navigation__li--active');
                    var d = this.activeMenuElement.select('.opl-navigation__drawer');
                    if (onComplete) {
                        Effect.SlideUp(d[0], {
                            duration: 0.6,
                            afterFinish: onComplete
                        });
                    } else {
                        Effect.SlideUp(d[0], {
                            duration: 0.6,
                            afterFinish: function() {
                                self.isAnimated = false;
                            }
                        });
                    }
                    this.activeMenuElement = '';
                }
            }
        },

        drawerLinks: function() {

            var drawerLinks = this.context.select('.drawerLinks');

            this.drawerContent = this.context.select('.opl-navigation--drawer-content');

            this.drawerContent.each(function(cont) {
                cont.setStyle({
                    display: 'none'
                });

                cont.addClassName('opl-navigation--drawer-content-show');
            });

            if (drawerLinks.length) {

                var self = this;

                drawerLinks.each(function(link) {
                    link.observe('click', self.drawerLinkClick.bind(self));
                });
            }
        },

        drawerLinkClick: function(ev) {
            ev.stopPropagation();

            var self = this;

            var id = ev.currentTarget.id;

            var content = this.context.select('.' + id);

            if (!this.isAnimated) {

                if (content.length) {

                    this.isAnimated = true;

                    if (this.activeContentElement) {
                        if (this.activeContentElement == content[0]) {
                            this.hideLinkContent();
                        } else {
                            this.hideLinkContent(function() {
                                self.showLinkContent(ev, content);
                            });
                        }
                    } else {
                        this.showLinkContent(ev, content);
                    }

                }
            }

        },

        showLinkContent: function(ev, content) {
            ev.preventDefault();

            var self = this;

            this.activeContentElement = content[0];

            Effect.SlideDown(this.activeContentElement, {
                duration: 0.6,
                afterFinish: function() {
                    self.isAnimated = false;
                }
            });
        },

        hideLinkContent: function(onComplete) {
            var self = this;
            if (this.activeContentElement) {
                if (onComplete) {
                    Effect.SlideUp(this.activeContentElement, {
                        duration: 0.6,
                        afterFinish: onComplete
                    });
                } else {
                    Effect.SlideUp(this.activeContentElement, {
                        duration: 0.6,
                        afterFinish: function() {
                            self.isAnimated = false;
                        }
                    });
                }
                this.activeContentElement = '';
            }
        },

        calculateHeader: function() {
            var scrollTop = document.viewport.getScrollOffsets()['top'];
            var layout = this.context.getLayout();
            var headerHeight = layout.get('border-box-height');
            var breadCrumbsHeight = 0;

            if (scrollTop >= (headerHeight)) {
                if (!this.isFixed) {
                    this.mainContentEl.setStyle({
                        'padding-top': headerHeight + breadCrumbsHeight
                    });
                    this.context.addClassName(this.options.headerFixedClass);
                    this.isFixed = true;
                }
            } else {
                if (this.isFixed) {
                    this.isFixed = false;
                    this.context.removeClassName(this.options.headerFixedClass);
                    this.mainContentEl.setStyle({
                        'padding-top': 0
                    });
                } else {
                    this.mainContentEl.setStyle({
                        'padding-top': 0
                    });
                }
            }
        },

        debounceCalculateHeader: function() {
            setTimeout(this.calculateHeader.bind(this), 0);
        },

        /**
         * Hides search box either if:
         * - the event target is located outside of search box
         * - the focus has been moved to the next navigation item
         * @method hideSearch
         */
        hideSearch: function(ev) {
            var contains = false;
            this.searchContent.descendants().each(function(elem) {
                if (elem === ev.target) {
                    contains = true;
                }
            });

            if (!contains) {
                this.searchWrapper.removeClassName('is-active');
                this.context.removeClassName('is-search-active');
                this.body.stopObserving('focusin', this.hideSearch.bind(this));
                this.body.stopObserving('click', this.hideSearch.bind(this));
                this.body.setStyle({
                    overflow: ''
                });
            }
        },

        /**
         * Adds or removes focus class on parent list element and either starts or stops listening on body events
         * @method onToggleClick
         */
        onToggleClick: function(ev) {
            ev.preventDefault();

            var element = $(ev.target).up(this.options.liSelector);
            if (element.hasClassName(this.options.focusCssClass)) {
                element.removeClassName(this.options.focusCssClass);
                this.body.stopObserving('focusin', this.onBody.bind(this));
                this.body.stopObserving('click', this.onBody.bind(this));
            } else {
                var self = this;
                element.siblings('.' + this.options.focusCssClass).each(function(elem) {
                    elem.removeClassName(self.options.focusCssClass);
                });

                element.addClassName(this.options.focusCssClass);
                this.body.observe('focusin', this.onBody.bind(this));
                this.body.observe('click', this.onBody.bind(this));
            }
        },

        /**
         * Listener for body events; it closes navigation child either if:
         * - the event target is located outside of navigation
         * - the focus has been moved to the next navigation item
         * @method onBody
         */
        onBody: function(ev) {
            var self = this;

            var focusEl = [];
            this.contents.each(function(elem) {
                if (elem.hasClassName(self.options.focusCssClass)) {
                    focusEl.push(elem);
                }
            });

            var contains = false;
            this.context.descendants().each(function(elem) {
                if (elem === ev.target) {
                    contains = true;
                }
            });

            if (!contains) {
                focusEl.each(function(elem) {
                    elem.removeClassName(self.options.focusCssClass);
                });
                this.body.stopObserving('focusin', this.onBody.bind(this));
                this.body.stopObserving('click', this.onBody.bind(this));
            }

            if (ev.type !== 'click') {
                var countFocus = 0;

                focusEl.each(function(fel) {
                    var contains = false;

                    fel.select(self.options.childSelector)[0].descendants().each(function(elem) {
                        if (elem === ev.target) {
                            contains = true;
                        }
                    });

                    if (!contains) {
                        fel.removeClassName(self.options.focusCssClass);
                        countFocus++;
                    }
                });

                if (focusEl.length == countFocus) {
                    this.body.stopObserving('focusin', this.onBody.bind(this));
                    this.body.stopObserving('click', this.onBody.bind(this));
                }
            }
        }
    });
}