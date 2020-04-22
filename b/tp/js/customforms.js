/* ---------------------------------------------------------------------------------------
    customforms
--------------------------------------------------------------------------------------- */

/*
 *TP.CustomForms - gracefully degrading custom forms
 *odpowiada za podmiane elementow formularzy wybranymi grafikami, z zalozeniem ze strona ma dzialac po wylaczeniu javascript'u
 *author: j.jagoda <a href="mailto:j.jagoda@tp.net.pl">jjagoda</a>
 *ver: 0.6
 *
 * 0.6     -    aktualizacja pod katem zmiany wygladu selectow i zaprzestanie wsparcia dla IE6 (tnowakow)
 *              dodalem zabezpieczenie przez podwojna inicjalizacja selectow
 *
 * 0.3     -    skrypt zoptymalizowany, dodana klawiaturowa obsluga zastepowanych elementow
 *
 * 0.4     -    dodana obsluga eventu "custom:click" dla TP.CustomForms.replaceCheckboxes
 * 
 * 0.5     -    dodanie obsługi metody onClickSatart dla radio, gdy metoda zwraca false event kliknięcia jest blokowany
 *
 ****************
 *    TP.CustomForms.replaceCheckboxes - zamienia input type="checkbox" i input typr="radio"
 *
 *@param    elements    elementy do zastapienia, wybrane za pomoca $$ albo $
 *@param    settings{
 *    className            klasa jaka zostanie nadana zastapionym elementom (pomaga w uzyskaniu elementow tego samego typu o roznym wygladzie na jednej stronie) || 'tp-checkbox'
 *    display            typ wyswietlania ('inline' (elementy rzedzie) lub 'list')(elementy w kolumnie) , ten sam efekt mozna uzyskac za pomoc css'a || inline
 *    checkboxWidth        szerokosc elementow checkbox/radio (zostawione dla wstecznej kompatybilnosci, rozmiarem teraz steruje css)
 *    checkboxHeight        wysokosc elementow (a nie samego obrazka)  (zostawione dla wstecznej kompatybilnosci, rozmiarem teraz steruje css)
 *    onChange:function(sourceElement, el)        funkcja callback wykonywana po zmianie stanu elementu - po wybraniu elementu z listy.
 *                        sourceElement - element <input>
 *                        el - wybierany element <label>
 *    onClickStart:function(sourceElement, el)    funcja wywoływana na początku obsługi kliknięcia w radio,
 *                                                gdy zwraca false kliknięcie jest blokowane
 *    }
 *
 *
 ****************
 *    TP.CustomForms.replaceSelects - zamienia elementy select
 *
 *@param    elements    elementy do zastapienia, wybrane za pomoca $$ albo $
 *@param    settings{
 *    width                szerokosc utworzonego dropdowna || domyslnie: szerokosc pobierana z elementu select, z ktorego tworzony jest dropdown
 *   widthOffset         procentowe powiększenie szerokości
 *    wrapperClass        nazwa klasy elementu ktory zawiera cala strukture || 'tp-selectbox-wrapper'
 *    containerClass        nazwa klasy elementu zawierajacego liste UL z wszystkimi elementami LI || 'tp-selectbox-container'
 *    inputClass            klasa elementu aktywnego, ktory rozwija liste jezeli na nigo kliknieto || 'tp-selectbox-clickable';
 *    hoverClass            klasa elementu podswietlonego || 'tp-selectbox-hovered-option';
 *    currentClass        klasa elementu wybranego  || 'tp-selectbox-selected-option'
 *    debug                tryb debugowania || false
 *    onChange:function(sourceElement, el)        funkcja callback wykonywana po zmianie stanu elementu - po wybraniu elementu z listy.
 *                        sourceElement - element <select>
 *                        el - element <div id="..._wrapper">
 *    }
 */

var TP;
if (typeof TP == "undefined") TP = {};
if (typeof TP.CustomForms == "undefined") {

    TP.CustomForms = {

        ie6: (navigator.appVersion.indexOf('MSIE 6.') == -1) ? false : true,
        ie7: (navigator.appVersion.indexOf('MSIE 7.') == -1) ? false : true,
        observers: {},
        sourceElements: {},
        newElements: {},
        IE: Prototype.Browser.IE,

        //zastepuje wszystkie checkboxy i radiobuttons wybrane selektorem && lub $
        replaceCheckboxes: function(elements, settings) {

            if (!elements) return;

            var self = this;
            var elements = elements;

            //jezeli uzyto selektora $, to przeksztalcany na $$ zeby zadzialalo each
            if (elements.id) {
                elements = $$('#' + elements.id);
            }
            //jak nie ma opcji to ustawia te
            var opt = settings || {};
            opt.className = opt.className || self.Namespace.checkboxPrefix + '-checkbox';
            opt.display = opt.display || 'inline';

            var onChangeSet;
            (opt.onChange) ? onChangeSet = true: onChangeSet = false;

            this.replaceCheckboxes.eachF = elements.each(function(el, index) {
                if (!el.hasClassName('tp-checkbox-hidden') && (el.type == "radio" || el.type == "checkbox")) {
                    // znajdz label odpowiadajacy elementowi
                    var label;
                    var elemId = el.id;

                    if (onChangeSet) {
                        opt.onChange = opt.onChange
                    } else if (el.getAttribute('onchange') != null) {
                        //w IE8 readAttribute nie zadziala poprawnie!!!
                        opt.onChange = el.getAttribute('onchange');
                    } else if (el.getAttribute('onclick') != null) {
                        //w IE8 readAttribute nie zadziala poprawnie!!!
                        opt.onChange = el.getAttribute('onclick');
                    } else {
                        opt.onChange = function() {};
                    }

                    if (opt.onClickStart) {
                        opt.onClickStart = opt.onClickStart;
                    } else {
                        opt.onClickStart = function() {};
                    }

                    //el.up() naprawia brak wsparcia dla selektora label[for=xxx] w ie8, zadziala tylko pod warunkiem zagniezdzenia inputa w label'u
                    label = $$('label[for=' + el.id + ']')[0] || el.up();

                    label.writeAttribute({
                        'id': self.Namespace.checkboxClass + '-label-' + elemId
                    });
                    //                label.writeAttribute({'onclick':''});

                    var labelId = label.id;

                    self.sourceElements[elemId] = {};
                    self.sourceElements[elemId].el = el;
                    self.sourceElements[elemId].newElement = label;
                    self.sourceElements[elemId].newElementId = labelId;
                    self.sourceElements[elemId].onChange = opt.onChange;
                    self.sourceElements[elemId].onClickStart = opt.onClickStart;

                    self.newElements[labelId] = {};
                    self.newElements[labelId].el = label;
                    self.newElements[labelId].sourceElement = el;
                    self.newElements[labelId].sourceElementId = elemId;
                    self.newElements[labelId].onChange = opt.onChange;
                    self.newElements[labelId].onClickStart = opt.onClickStart;

                    // dodaje klasy
                    label.addClassName(opt.className + ' ' + self.Namespace.checkboxPrefix + '-' + el.type + ' ' + opt.display);
                    /* safari wybieral za duzo elementow i wstawial po kilka razy tp-checkbox-wrapper*/
                    if (Prototype.Browser.WebKit && label.down('span.' + self.Namespace.checkboxClass + '-wrapper')) return;

                    // do labela dodaje kontener z checkboxem i ustawia jego wymiary
                    label.insert({
                        'top': '<span class="tp-checkbox-wrapper"><span class="tp-checkbox-holder" onclick=""></span></span>'
                    });

                    if (el.disabled) {
                        if (el.checked) {
                            label.addClassName(self.Namespace.checkboxClass + '-disabled-checked');
                        } else {
                            label.addClassName(self.Namespace.checkboxClass + '-disabled-not-checked');
                        }
                    } else {
                        if (el.hasClassName('readonly')) {
                            if (el.checked) {
                                label.addClassName(self.Namespace.checkboxClass + '-readonly-checked');
                            } else {
                                label.addClassName(self.Namespace.checkboxClass + '-readonly-not-checked');
                            }
                        }

                        // jezeli ktorys z pierwotnych checkboxow byl zaznaczony to nowy tez zaznacz
                        if (el.checked) {
                            label.addClassName(self.Namespace.checkboxClass + '-checked');
                            self.replaceCheckboxes.selected = el;
                        } else if (!el.checked) {
                            label.addClassName(self.Namespace.checkboxClass + '-not-checked');
                        }
                    }

                    //ukrywa elementy
                    el.addClassName(self.Namespace.checkboxClass + '-hidden');

                    self.observers[labelId] = {};
                    self.observers[el.id] = {};

                    self.observers[labelId].click = checkboxOnClick.bindAsEventListener(label, labelId);
                    self.observers[el.id].focus = checkboxOnFocus.bindAsEventListener(el, label);
                    self.observers[el.id].blur = checkboxOnBlur.bindAsEventListener(el, label);

                    var links = label.select("a");

                    links.each(function(link) {
                        link.observe("click", function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            var href = this.readAttribute("href"),
                                attrTarget = this.readAttribute("target");


                            if (typeof href != 'undefined' && href != null && href != "" && href != "#") {
                                if (typeof attrTarget != 'undefined' && attrTarget != null) {
                                    window.open(href, attrTarget)
                                } else {
                                    window.location.href = href;
                                }

                            }

                        });
                    });

                    /*label.on("click", "a", function(e){
                        e.preventDefault();
                        var link = e.findElement("a"),
                            href,
                            attrTarget;
                        if(link) {
                            attrTarget = link.readAttribute("target");
                            href = link.readAttribute("href");
                            if(typeof href != 'undefined' && href != null && href != "" && href != "#" ) {
                                if(typeof attrTarget != 'undefined' && attrTarget != null) {
                                    window.open(href, attrTarget)
                                } else {
                                    window.location.href = href;
                                }

                            }
                        }
                    });*/

                    //dodaje eventy
                    Event.observe(label, 'click', self.observers[labelId].click);
                    Event.observe(label, 'custom:click', self.observers[labelId].click);
                    Event.observe(el, 'focus', self.observers[el.id].focus);
                    Event.observe(el, 'blur', self.observers[el.id].blur);



                }
            });

            function checkboxOnFocus(event, label) {
                label.addClassName(self.Namespace.checkboxClass + '-focused');
            }

            function checkboxOnBlur(event, label) {
                label.removeClassName(self.Namespace.checkboxClass + '-focused');
            }


            function checkboxOnClick(event) {
                var element = this;
                var input = TP.CustomForms.newElements[element.id].sourceElement;

                var onClickStart = TP.CustomForms.newElements[element.id].onClickStart;

                var onClickStartResult;
                if (Object.isFunction(onClickStart)) {
                    onClickStartResult = onClickStart(input, element);
                } else {
                    onClickStartResult = eval(onClickStart);
                }

                /* jezeli disabled to nie klikamy*/
                if (input.disabled || input.hasClassName('readonly') || onClickStartResult == false) {
                    Event.stop(event);
                    return;
                }

                var onChange = TP.CustomForms.newElements[element.id].onChange;

                /* w razie koniecznosci odkomentowania prosze o kontakt na p.palubski@amg.net.pl */
                /* input.focus(); */

                var radioWasChecked = false;
                if (input.type == 'radio') {
                    /*sprawdza czy radio juz zaznaczony i jezeli tak, to pozniej nie wywoluje onChange*/
                    radioWasChecked = element.hasClassName(TP.CustomForms.Namespace.checkboxClass + '-checked');
                    //odznacza pozostale radiobuttony o tej samej nazwie (name attribute)                
                    elements.each(function(el) {
                        if (el.type == 'radio' && el.name == input.name) {

                            var label = TP.CustomForms.sourceElements[el.id].newElement;

                            el.checked = false;
                            if (label) {
                                label.removeClassName(TP.CustomForms.Namespace.checkboxClass + '-checked');
                                label.addClassName(TP.CustomForms.Namespace.checkboxClass + '-not-checked');
                            }
                        }
                    });
                };

                //zaznacza wybrany element
                element.toggleClassName(TP.CustomForms.Namespace.checkboxClass + '-checked');
                element.toggleClassName(TP.CustomForms.Namespace.checkboxClass + '-not-checked');
                if (Event.element(event) != input) {
                    if ((input.checked == false)) {
                        input.checked = true;
                    } else {
                        input.checked = false;
                    }
                    Event.stop(event)
                }

                if (input.type == 'radio') {
                    if (!radioWasChecked) {
                        if (Object.isFunction(onChange)) {
                            onChange(input, element);
                        } else {
                            eval(onChange);
                        }
                    }
                } else {
                    if (Object.isFunction(onChange)) {
                        onChange(input, element);
                    } else {
                        eval(onChange);
                    }
                }
                input.fire('tp:customforms:change', {
                    input: input,
                    checked: input.checked,
                    element: element
                });

            };
        },

        /**
         * Metoda odpowiada za zastapienie klasycznego elementu SELECT elementami umozliwiajacymi
         * inny sposb prezentacji SELECT'a.
         * 
         * @param elements - zestaw elementow SELECT, ktore maja zostac zastapione.
         * @param settings - zestaw ustawien wykorzystywanych do podmiany SELECT'a
         */
        replaceSelects: function(elements, settings) {

            if (!elements)
                return;

            var self = this;

            /* zmienna publiczna zwraca odwolanie do obecnie zaznaczonego elementu */
            this.replaceSelects.selected = {};

            /* jezeli uzyto selektora $, to przeksztalcany na $$ zeby zadzialalo each */
            if (elements.id) {
                elements = $$('#' + elements.id);
            }

            if (elements.length <= 0) {
                return;
            }

            for (var i = 0; i < elements.length; i++) {
                var el = elements[i];
                var index = i;

                if (el.nodeName == 'SELECT' && !el.hasClassName('tp-selectbox-hidden')) {

                    var opt = settings || {};

                    opt.wrapperClass = opt.wrapperClass || self.Namespace.selectboxClass + '-wrapper';
                    opt.containerClass = opt.containerClass || self.Namespace.selectboxClass + '-container';
                    opt.inputClass = opt.inputClass || self.Namespace.selectboxClass + '-clickable';
                    opt.inputFilterClass = opt.inputFilterClass || self.Namespace.selectboxClass + '-filter-input';
                    opt.hoverClass = opt.hoverClass || self.Namespace.selectboxClass + '-hovered-option';
                    opt.currentClass = opt.selectedClass || self.Namespace.selectboxClass + '-selected-option'
                    opt.debug = opt.debug || false;
                    opt.maxElements = opt.maxElements || 10;
                    opt.onChange = el.getAttribute('onchange') || opt.onChange || function() {};
                    opt.width = opt.width || null;
                    opt.widthOffset = opt.widthOffset || 0;
                    opt.letterWidth = opt.letterWidth || 7;
                    opt.visibilityCount = opt.visibilityCount || 1;
                    opt.showEmpty = opt.showEmpty || true;
                    opt.isFilteredSelect = opt.isFilteredSelect || false;

                    /* element select */
                    var sourceElement = el;
                    var sourceElementId = (el.id != '') ? el.id : el.identify();

                    /* for opera */
                    var usedEnter = false;

                    if (!opt.isFilteredSelect) {
                        sourceElement
                            .insert({
                                'before': new Template(
                                        '<div id="#{id}-selectbox-wrapper" class="#{wrapperClass}">' +
                                        '<a id="#{id}-selectbox-clickbar" class="#{clickClass}" tabIndex="-1"></a>' +
                                        '<div id="#{id}-selectbox-container" class="#{containerClass}" tabIndex="2" data-keycount="0"></div>' +
                                        '</div>'
                                    )
                                    .evaluate({
                                        id: sourceElementId,
                                        wrapperClass: opt.wrapperClass,
                                        clickClass: opt.inputClass,
                                        containerClass: opt.containerClass
                                    })
                            });

                        /* element zawierajacy cala nowa strukture */
                        var wrapper = $(sourceElementId + '-selectbox-wrapper');;
                        /* element na ktory klikamy */
                        var clickBar = $(sourceElementId + '-selectbox-clickbar');
                        /* kontener z lista opcji */
                        var container = $(sourceElementId + '-selectbox-container');
                    } else {
                        sourceElement
                            .insert({
                                'before': new Template(
                                        '<div id="#{id}-selectbox-wrapper" class="#{wrapperClass}">' +
                                        '<a id="#{id}-selectbox-clickbar" class="#{clickClass}" tabIndex="-1"></a>' +
                                        '<input id="#{id}-selectbox-input" autocomplete="off" class="#{inputFilterClass}" value="" style="display: none;" tabIndex="0"/>' +
                                        '<div id="#{id}-selectbox-container" class="#{containerClass}" tabIndex="2" data-keycount="0"></div>' +
                                        '</div>'
                                    )
                                    .evaluate({
                                        id: sourceElementId,
                                        wrapperClass: opt.wrapperClass,
                                        clickClass: opt.inputClass,
                                        containerClass: opt.containerClass,
                                        inputFilterClass: opt.inputFilterClass
                                    })
                            });

                        /* element zawierajacy cala nowa strukture */
                        var wrapper = $(sourceElementId + '-selectbox-wrapper');;
                        /* element na ktory klikamy */
                        var clickBar = $(sourceElementId + '-selectbox-clickbar');
                        /* kontener z lista opcji */
                        var container = $(sourceElementId + '-selectbox-container');

                        var input = $(sourceElementId + '-selectbox-input');
                    }

                    /* index aktywnego (hovered) elementu */
                    container.active = -1;

                    self.sourceElements[sourceElementId] = {};
                    self.sourceElements[sourceElementId].el = el;
                    self.sourceElements[sourceElementId].newElement = wrapper;
                    self.sourceElements[sourceElementId].container = container;
                    self.sourceElements[sourceElementId].clickBar = clickBar;
                    if (opt.isFilteredSelect) {
                        self.sourceElements[sourceElementId].input = input;
                    }
                    self.sourceElements[sourceElementId].currentClass = opt.currentClass;
                    self.sourceElements[sourceElementId].hoverClass = opt.hoverClass;
                    self.sourceElements[sourceElementId].newElementId = wrapper.id;
                    self.sourceElements[sourceElementId].newElementZindex = wrapper.style.zIndex;
                    /* jezeli juz istnieja to nie nadpisujemy */
                    self.sourceElements[sourceElementId].onChange = self.sourceElements[sourceElementId].onChange ||
                        opt.onChange;
                    self.sourceElements[sourceElementId].maxElements = self.sourceElements[sourceElementId].maxElements ||
                        opt.maxElements;
                    self.sourceElements[sourceElementId].longestElement = 0;
                    self.sourceElements[sourceElementId].letterWidth = opt.letterWidth;

                    self.newElements[wrapper.id] = {}
                    self.newElements[wrapper.id].el = wrapper;
                    self.newElements[wrapper.id].sourceElement = el;
                    self.newElements[wrapper.id].sourceElementId = sourceElementId;

                    /* inicjalizacja listy opcji */
                    self.initContainer(opt, sourceElementId);

                    /* ukrywanie selecta poprzez wpisanie do diva z overflow (naprawia bug scrollowania podczas lapania
                       focusa przez select) */
                    var hideDiv = new Element('div');
                    hideDiv.addClassName(TP.CustomForms.Namespace.selectboxClass + '-hidden-wrapper');
                    sourceElement.addClassName(TP.CustomForms.Namespace.selectboxClass + '-hidden');
                    wrapper.insert({
                        'after': hideDiv
                    });
                    hideDiv.insert(sourceElement);

                    if (sourceElement.disabled) {
                        //opt.showEmpty = false;
                        wrapper.addClassName(self.Namespace.selectboxClass + '-disabled-not-checked');
                    }

                    if (sourceElement.length === 1) {
                        opt.showEmpty = false;
                        wrapper.addClassName(self.Namespace.selectboxClass + '-notclickable');
                    }

                    if (sourceElement.hasClassName('readonly')) {
                        opt.showEmpty = false;
                        wrapper.addClassName(self.Namespace.selectboxClass + '-readonly-not-checked');
                    }

                    if (sourceElement.hasClassName('hidden')) {
                        wrapper.addClassName('hidden');
                    }

                    /* observers */
                    self.observers[sourceElementId] = {};
                    self.observers[clickBar.id] = {};
                    self.observers[wrapper.id] = {};
                    self.observers[container.id] = {};
                    if (opt.isFilteredSelect) {
                        self.observers[input.id] = {};
                    }
                    self.observers[sourceElementId].keydown = self.selectOnKeydown.bindAsEventListener(sourceElement,
                        sourceElementId,
                        container);
                    self.observers[sourceElementId].focus = self.selectOnFocus.bindAsEventListener(sourceElement,
                        clickBar);
                    self.observers[sourceElementId].blur = self.selectOnBlur.bindAsEventListener(sourceElement,
                        clickBar);

                    /* jezeli ilosc elementow jest mniejsza niz wskazana w ustawieniach to dropdown nie bedzie
                     * rozwijalny (nie bedzie mozliwosci wybrania opcji) */
                    if ((sourceElement.length >= opt.visibilityCount) && opt.showEmpty) {
                        if (!opt.isFilteredSelect) {
                            self.observers[clickBar.id].click = self.clickBarOnClick.bindAsEventListener(sourceElement,
                                sourceElement);
                        } else {
                            self.observers[clickBar.id].click = self.clickBarFilterOnClick.bindAsEventListener(sourceElement,
                                sourceElement);
                        }
                        Event.observe(clickBar, 'click', TP.CustomForms.observers[clickBar.id].click);
                    }

                    if (!opt.isFilteredSelect) {
                        self.observers[container.id].keydown = self.navigateOnKeyDown.bindAsEventListener(container, sourceElement);

                        Event.observe(container, 'keydown', TP.CustomForms.observers[container.id].keydown);
                    } else {
                        self.observers[input.id].input = self.filterOnInput.bindAsEventListener(input, sourceElementId);

                        Event.observe(input, 'input', TP.CustomForms.observers[input.id].input);
                    }

                    Event.observe(sourceElement, 'keydown', TP.CustomForms.observers[sourceElementId].keydown);
                    Event.observe(sourceElement, 'focus', TP.CustomForms.observers[sourceElementId].focus);
                    Event.observe(sourceElement, 'blur', TP.CustomForms.observers[sourceElementId].blur);

                    if (Prototype.Browser.Opera) {
                        $(sourceElement).writeAttribute({
                            'onchange': ''
                        });
                    }

                    if (!opt.isFilteredSelect) {
                        self.observers[wrapper.id].mouseout = self.containerMouseOut.bindAsEventListener(wrapper, wrapper.id, sourceElementId);

                        Event.observe(wrapper, 'mouseout', TP.CustomForms.observers[wrapper.id].mouseout);
                    } else {
                        self.observers[container.id].mousedown = self.preventBlurEvent.bindAsEventListener(container, sourceElementId);

                        Event.on(container, 'mousedown', 'li', TP.CustomForms.observers[container.id].mousedown);

                        self.observers[input.id].keypress = self.blockEnterKey.bindAsEventListener(input, input.id, sourceElementId);

                        Event.observe(input, 'keypress', TP.CustomForms.observers[input.id].keypress);

                        self.observers[input.id].blur = self.inputBlur.bindAsEventListener(input, input.id, sourceElementId);

                        Event.observe(input, 'blur', TP.CustomForms.observers[input.id].blur);
                    }

                }
            }
        },

        //tworzy do kontenera liste z opcjami i ustawia wymiary takie jak select
        initContainer: function(options, sourceElId) {

            var self = TP.CustomForms;
            var sourceElement = self.sourceElements[sourceElId].el;
            var container = self.sourceElements[sourceElId].container;
            var clickBar = self.sourceElements[sourceElId].clickBar;
            var newElement = self.sourceElements[sourceElId].newElement;
            var input = self.sourceElements[sourceElId].input;

            var width = options.width;
            if (width == null) width = sourceElement.offsetWidth + parseInt(sourceElement.offsetWidth * options.widthOffset / 100);
            if (width == 0) width = parseFloat(sourceElement.getStyle('width'));
            if (width == 0) width = 100;

            // -1 bo w css dodany jest border-left:1px
            //clickBar.style.width = width - 1 + 'px';

            newElement.style.width = width + 'px';
            if (input) input.style.width = width - parseInt(clickBar.style.marginRight) - parseInt(newElement.style.borderLeft + newElement.style.borderRight) + 'px';
            self.populateOptions(sourceElId, options);
            container.hide();

            /*if(self.ie6){
                if(container.getDimensions().width < width){
                    container.style.width = width + 'px';
                }else{
                    //ustawiamy szerokosc tego kontenera dla IE6
                    container.style.width = container.getDimensions().width + 20 + 'px';
                    //container.style.width = 'auto';
                }
            }else */
            if (self.ie7) {
                if (self.sourceElements[sourceElId].longestElement > width) {
                    container.style.width = self.sourceElements[sourceElId].longestElement + 20 + 'px';
                } else {
                    container.style.width = width - 2 + 'px';
                }
            } else {
                container.style.minWidth = width - 2 + 'px';
            }

        },

        //przepisuje list option do ul>li i ustawia na nich eventy
        populateOptions: function(parentId, options) {

            var self = TP.CustomForms;
            var container = self.sourceElements[parentId].container;
            var select = self.sourceElements[parentId].el;
            var clickBar = self.sourceElements[parentId].clickBar;
            var maxElements = self.sourceElements[parentId].maxElements;


            var optionElements = select.childElements();
            var liElementId;

            var len = optionElements.length;
            var tmp = [];

            tmp[0] = '<ul>';
            for (var i = 1; i <= len; i += 1) {
                var optionEl = optionElements[i - 1];
                var index = i - 1;

                //dla elementu aktualnie wybranego
                var isSelected;
                (optionEl.selected) ? isSelected = true: isSelected = false;
                if (isSelected) {
                    //currentSelectedOption = optionEl;
                    self.sourceElements[parentId].selectedNum = index;
                    self.setValue(clickBar, optionEl);
                }
                if (index == options.maxElements) {
                    self.sourceElements[parentId].setMaxElements = true;
                }

                liElementId = parentId + '-option-' + index;
                tmp[i] = '<li id="' + liElementId + '" class="' + optionEl.className + ' ' + (isSelected ? options.currentClass : '') + '"><a onclick="return false;">' + optionEl.text + '</a></li>';

            }
            tmp[tmp.length] = '</ul>';

            container.insert(tmp.join(''));

            //dodanie observerow do kazdego elementu li        
            var lis = container.select('ul li');
            for (var i = 0; i < lis.length; i++) {
                var li = lis[i];
                var liElementId = li.id;

                if (self.ie7) {
                    var liWidth = li.getWidth();
                    if (liWidth > self.sourceElements[parentId].longestElement) self.sourceElements[parentId].longestElement = liWidth;
                }

                self.observers[liElementId] = {};
                self.observers[liElementId].click = self.selectLiOption.bindAsEventListener(li, parentId, i);
                Event.observe(li, 'click', self.observers[liElementId].click);
            }

            //ustawia maksymalna wysokosc listy
            if (maxElements && optionElements.length > maxElements) {
                var h = container.select('li a')[0].getHeight() || 14;
                container.setStyle({
                    'height': (maxElements * h) + 'px',
                    'overflowY': 'scroll',
                    'overflowX': 'hidden'
                });
            }
        },

        blockEnterKey: function(event) {
            if (event.keyCode == 13) event.preventDefault();
        },

        filterOnInput: function(event, parentId, options) {

            var self = TP.CustomForms;
            var container = self.sourceElements[parentId].container;
            var maxElements = self.sourceElements[parentId].maxElements;

            var phrase,
                items;

            phrase = event.target.getValue().toLowerCase();

            items = container.select('li');
            if (phrase === '') {
                items.invoke('show');
            } else {
                items.each(function(el, index) {
                    if (el.down('a').innerHTML.strip().toLowerCase().indexOf(phrase) !== 0) {
                        if (el.visible()) el.hide();
                    } else {
                        if (!el.visible()) el.show();
                    }
                });
            }
            var visible = items.findAll(function(el) {
                return el.visible();
            });

            var h = container.select('li a')[0].getHeight() || 14;

            if (visible.length > maxElements) {
                cont.setStyle({
                    'height': (maxElements * h) + 'px',
                    'overflowY': 'scroll',
                    'overflowX': 'hidden'
                });
            } else {
                cont.setStyle({
                    'height': '',
                    'overflowY': '',
                    'overflowX': ''
                });
            }
        },

        //wybranie opcji po kliknieciu, wybraniu enterem
        selectLiOption: function(el, sourceElementId, index) {

            var alredySelected = false;
            var optionDisabled = false;

            var selectElement = TP.CustomForms.sourceElements[sourceElementId].el;
            if (selectElement.childElements()[index].selected == true) {
                alredySelected = true;
            }
            if (selectElement.childElements()[index].disabled == true ||
                selectElement.childElements()[index].hasClassName('readonly')) {
                optionDisabled = true;
            }

            var input = TP.CustomForms.sourceElements[sourceElementId].input;
            if (input) {
                Event.observe(input, 'blur', TP.CustomForms.observers[input.id].blur);
            }

            if (!alredySelected && !optionDisabled) {

                var container = TP.CustomForms.sourceElements[sourceElementId].container;
                var newElement = TP.CustomForms.sourceElements[sourceElementId].newElement;
                var clickBar = TP.CustomForms.sourceElements[sourceElementId].clickBar;
                var currentClass = TP.CustomForms.sourceElements[sourceElementId].currentClass;
                var hoverClass = TP.CustomForms.sourceElements[sourceElementId].hoverClass;
                var onChange = TP.CustomForms.sourceElements[sourceElementId].onChange;
                if (el.id == undefined) el = this;

                if (TP.CustomForms.sourceElements[sourceElementId].selectedNum >= 0) {
                    container.select('li.' + currentClass)[0].removeClassName(currentClass);
                }

                //container.select('li.' + hoverClass)[0].removeClassName(hoverClass);
                el.writeAttribute({
                    'class': false
                }).addClassName(currentClass);
                selectElement.selectedIndex = index;
                selectElement.value = selectElement.childElements()[index].value;
                selectElement.childElements()[index].selected = true;
                TP.CustomForms.sourceElements[sourceElementId].selectedNum = index;

                //ustawienie wartosci pokazywanej w elemencie na ktory uzytkownik klika
                TP.CustomForms.setValue(clickBar, el.select('a')[0]);

                container.active = -1;
                TP.CustomForms.hideDropdown(sourceElementId);
                if (input) {
                    TP.CustomForms.hideInput(sourceElementId);
                }


                if (Object.isFunction(onChange)) {
                    onChange(selectElement, newElement);
                } else {
                    eval(onChange);
                }

            } else {

                TP.CustomForms.hideDropdown(sourceElementId);
                if (input) {
                    TP.CustomForms.hideInput(sourceElementId);
                }

            }

        },

        preventBlurEvent: function(event, sourceElementId) {
            var input = TP.CustomForms.sourceElements[sourceElementId].input;
            Event.stopObserving(input, 'blur', TP.CustomForms.observers[input.id].blur);
            //event.preventDefault();
        },

        //ukrywa dropdown o id==sourceElementId
        hideDropdown: function(sourceElementId) {
            var wrapper = TP.CustomForms.sourceElements[sourceElementId].newElement;
            var container = TP.CustomForms.sourceElements[sourceElementId].container;
            var wrapperZindex = TP.CustomForms.sourceElements[sourceElementId].newElementZindex;
            wrapper.setStyle({
                'zIndex': wrapperZindex
            });
            container.hide();
            container.dropdownActive = false;
        },

        hideInput: function(sourceElementId) {
            var container = TP.CustomForms.sourceElements[sourceElementId].container;
            var input = TP.CustomForms.sourceElements[sourceElementId].input;
            var inputZindex = TP.CustomForms.sourceElements[sourceElementId].newElementZindex;
            if (input) {
                input.setStyle({
                    'zIndex': inputZindex
                });
                input.setValue('');
                input.hide();
                var items = container.select('li');
                items.invoke('show');
            }
        },

        /**
         * Metoda odpowiada za zaprezentowanie zawartości dropdownu.
         * 
         * @param sourceElementId - ID dropdownu, ktorego zawartosc ma zostac zaprezentowana
         */
        showDropdown: function(sourceElementId) {

            var self = TP.CustomForms;
            var container = TP.CustomForms.sourceElements[sourceElementId].container;
            var wrapper = TP.CustomForms.sourceElements[sourceElementId].newElement;
            var clickBar = TP.CustomForms.sourceElements[sourceElementId].clickBar;

            if (container.dropdownActive)
                return;

            if (container.active != -1) {
                container.select('li')[container.active]
                    .removeClassName(self.Namespace.selectboxClass + '-hovered-option');
                container.active = -1;
            }
            if (container.style.display == 'none') {
                container.setStyle({
                    'top': clickBar.getHeight() + 'px'
                })
            }

            wrapper.setStyle({
                'zIndex': '5000'
            });

            container.toggle();

            TP.CustomForms.setPotition(container);

            container.dropdownActive = true;
            container.focus();

            //        if (Prototype.Browser.Opera) {
            //            var form = $(sourceElementId).form;
            //            var formId = form.identify();
            //            TP.CustomForms.observers[formId] = {};
            //            TP.CustomForms.observers[formId].submit = TP.CustomForms.stopSubmit.bindAsEventListener();
            //            form.observe('submit', TP.CustomForms.observers[formId].submit);
            //        }

            var selectedLi = container.select('ul li.' + TP.CustomForms.Namespace.selectboxClass + '-selected-option')[0];
            TP.CustomForms.scrollToOption(selectedLi, container);

        },

        showInput: function(sourceElementId) {
            var self = TP.CustomForms;
            var input = TP.CustomForms.sourceElements[sourceElementId].input;

            input.setStyle({
                'zIndex': '5001'
            });

            input.toggle();
            input.focus();
        },

        setPotition: function(container) {
            var containerHeight = container.offsetHeight;
            var below = ((containerHeight + container.viewportOffset().top) > document.viewport.getHeight()) ? true : false;
            if (below) container.setStyle({
                'top': '-' + containerHeight + 'px'
            });
        },

        //zwraca index zaznaczonego elementu 
        getSelectedOption: function(id) {
            var selectEl = $(id);
            if (!selectEl) return (-1);
            return selectEl.selectedIndex;
        },

        navigateOption: function(sourceElementId, step) {

            var self = TP.CustomForms;
            var wrapper = self.sourceElements[sourceElementId].newElement;
            var container = self.sourceElements[sourceElementId].container;
            var hoverClass = self.sourceElements[sourceElementId].hoverClass;
            var lis = container.select('ul li');
            if (!lis) return false;

            if (container.active == -1) {
                container.active = parseInt(lis[0].up().select('.' + self.Namespace.selectboxClass + '-selected-option')[0].id.split('-option-')[1]);
            } else {
                container.active += step;
            }

            if (container.active < 0) {
                container.active = 0;
            } else if (container.active >= lis.length) {
                container.active = lis.length - 1;
            }

            //podmienia klase odpowiedzialana za hover
            lis.each(function(el, index) {
                el.removeClassName(hoverClass);
            });

            if (container.active != -1) {

                var activeLi = lis[container.active];
                activeLi.addClassName(hoverClass);

                var liHeight = activeLi.getHeight();
                var containerHeight = container.getHeight();

                var offsetTop = activeLi.positionedOffset().top;

                if (step == 1) {
                    if (container.active < lis.length && (offsetTop - container.scrollTop >= (containerHeight - liHeight))) {
                        container.scrollTop += liHeight;
                    }
                } else if (step == -1) {
                    if (container.active > 0 && (offsetTop - container.scrollTop <= (0 - liHeight))) {
                        container.scrollTop -= liHeight;
                    }
                }
            }
        },

        navigateOnKeyDown: function(event, sourceElement) {
            var sourceElementId = sourceElement.id;
            var self = TP.CustomForms;
            var container = self.sourceElements[sourceElementId].container;

            var items,
                keyIndex = [],
                count,
                curIndex,
                prevKey = '',
                focusedOption,
                keyCodeMap = {
                    48: '0',
                    49: '1',
                    50: '2',
                    51: '3',
                    52: '4',
                    53: '5',
                    54: '6',
                    55: '7',
                    56: '8',
                    57: '9',
                    59: ';',
                    65: 'a',
                    66: 'b',
                    67: 'c',
                    68: 'd',
                    69: 'e',
                    70: 'f',
                    71: 'g',
                    72: 'h',
                    73: 'i',
                    74: 'j',
                    75: 'k',
                    76: 'l',
                    77: 'm',
                    78: 'n',
                    79: 'o',
                    80: 'p',
                    81: 'q',
                    82: 'r',
                    83: 's',
                    84: 't',
                    85: 'u',
                    86: 'v',
                    87: 'w',
                    88: 'x',
                    89: 'y',
                    90: 'z',
                    96: '0',
                    97: '1',
                    98: '2',
                    99: '3',
                    100: '4',
                    101: '5',
                    102: '6',
                    103: '7',
                    104: '8',
                    105: '9'
                };

            if (!container.dropdownActive) {
                return
            }

            items = container.select('li');

            if (event.keyCode in keyCodeMap) {
                items.each(function(el, index) {
                    if (el.down('a').innerHTML.strip().toLowerCase().substring(0, 1) == keyCodeMap[event.keyCode]) {
                        keyIndex.push(index);
                    }
                });

                if (keyIndex.length) {
                    count = container.getAttribute('data-keycount');
                    count++;
                    container.setAttribute('data-keycount', count);

                    focusedOption = container.select('li a.focus');

                    if (focusedOption.length) {
                        prevKey = focusedOption[0].innerHTML.strip().toLowerCase().substring(0, 1);
                        focusedOption[0].removeClassName('focus');
                    }

                    if (prevKey != keyCodeMap[event.keyCode]) {
                        count = 1;
                        container.setAttribute('data-keycount', count);
                    } else if (count >= keyIndex.length) {
                        container.setAttribute('data-keycount', 0);
                        if (count > keyIndex.length) count = 1;
                    }

                    curIndex = keyIndex[count - 1];
                    items[curIndex].down('a').focus();
                    items[curIndex].down('a').addClassName('focus');
                }
            }
        },

        scrollToOption: function(li, container) {
            if (li) {
                var offset = li.positionedOffset().top;
                if (Prototype.Browser.IE) {
                    //todo: po keydown w IE przestawiany jest scrollTop nie wiadomo w jaki sposob dlatego setTimeout
                    setTimeout("$('" + container.id + "').scrollTop = " + offset + ";", 20);
                } else {
                    container.scrollTop = offset;
                }

            }
        },

        selectOnKeydown: function(event, sourceElementId, container) {

            //var el = Event.element(event);
            var self = TP.CustomForms;

            switch (event.keyCode) {
                case 38: // up
                    Event.stop(event);
                    self.showDropdown(sourceElementId);
                    self.navigateOption(sourceElementId, -1);
                    break;
                case 40: // down
                    Event.stop(event);
                    self.showDropdown(sourceElementId);
                    self.navigateOption(sourceElementId, 1);
                    break;
                case 13: // return
                    Event.stop(event);

                    var liEl = container.select('.' + self.Namespace.selectboxClass + '-hovered-option')[0]
                    var ind = parseInt(liEl.id.split('-option-')[1]);
                    if (container.dropdownActive) self.selectLiOption(liEl, sourceElementId, ind);
                    break;
                case 9: //tab
                    if (container.dropdownActive) {
                        var liEl = container.select('.' + self.Namespace.selectboxClass + '-hovered-option')[0]
                        var ind = parseInt(liEl.id.split('-option-')[1]);
                        self.selectLiOption(liEl, sourceElementId, ind);
                    }
                    break;
                case 27: //escape
                    Event.stop(event);
                    if (container.dropdownActive) {
                        var liEl = container.select('.' + self.Namespace.selectboxClass + '-hovered-option')[0]
                        var ind = parseInt(liEl.id.split('-option-')[1]);
                        self.selectLiOption(liEl, sourceElementId, ind);
                    }
                    break;
                default:
                    Event.stop(event);
                    var lis = container.select('ul li');
                    var keychar = String.fromCharCode(event.keyCode).toLowerCase();
                    for (var i = 0; i < lis.length; i++) {
                        var firstChar = lis[i].select('a')[0].innerHTML.split('')[0].toLowerCase();
                        if (firstChar == keychar) {
                            if (lis[container.active]) lis[container.active].removeClassName(self.Namespace.selectboxClass + '-hovered-option');
                            lis[i].addClassName(self.Namespace.selectboxClass + '-hovered-option');
                            self.scrollToOption(lis[i], container);
                            container.active = i;
                            break;
                        }
                    }
            }
        },

        selectOnFocus: function(event, clickBar) {
            var self = TP.CustomForms;
            clickBar.addClassName(self.Namespace.selectboxClass + '-clickable-focused');
        },

        selectOnBlur: function(event, clickBar) {
            var self = TP.CustomForms;
            clickBar.removeClassName(self.Namespace.selectboxClass + '-clickable-focused');
        },

        clickBarOnClick: function(event, sourceElement) {
            if (sourceElement.disabled) return;
            TP.CustomForms.showDropdown(sourceElement.id);
            Event.stop(event);
        },

        clickBarFilterOnClick: function(event, sourceElement) {
            if (sourceElement.disabled) return;
            TP.CustomForms.showDropdown(sourceElement.id);
            TP.CustomForms.showInput(sourceElement.id);
            Event.stop(event);
        },

        //ustawia wartosc elementu '.tp-selectbox-clickable'
        setValue: function(linkEl, elToSelect) {
            var sourceElementId = linkEl.id.split('-selectbox-clickbar')[0];
            var maxLength = Math.ceil(linkEl.offsetWidth / TP.CustomForms.sourceElements[sourceElementId].letterWidth);
            var text = '';
            (elToSelect.text) ? text = elToSelect.text: text = elToSelect.innerHTML;
            if (linkEl.offsetWidth != 0 && text.length > maxLength) {
                var value = text.substring(0, maxLength)
                value += '...';
            } else {
                value = text;
            }
            linkEl.innerHTML = '<span>' + value + '</span>';
        },

        destroyObserver: function(elementId) {
            if (!$(elementId)) return;
            var handler = this.observers[elementId];
            for (var handlerType in handler) {
                if (handler[handlerType]) Event.stopObserving(elementId, handlerType, handler[handlerType]);
            }
            delete this.observers[elementId];
        },

        //stopuje submit formularza (stosowane tylko w operze)
        stopSubmit: function(ev) {
            Event.stop(ev);
            return false;
        },

        inputBlur: function(event, containerId, sourceElementId) {
            TP.CustomForms.hideDropdown(sourceElementId);
            TP.CustomForms.hideInput(sourceElementId);
        },

        containerMouseOut: function(event, containerId, sourceElementId) {
            /* okreslenie elementu nad ktorym znajduje sie myszka w momencie wywolania eventu */
            //var relatedElement = Element.extend(event.relatedTarget || event.toElement);
            var relatedElement = event.relatedTarget || event.toElement;

            try {
                /* ustalenie czy element zawiera sie w portlecie, jezeli nie to znaczy ze zjechalismy z el */
                if (relatedElement && !relatedElement.up('div#' + containerId)) {
                    TP.CustomForms.hideDropdown(sourceElementId);
                }

            } catch (ex) {
                // bo relatedElement jest XULElement || xpconnect wrapped native prototype - http://www.yui-ext.com/forum/showthread.php?t=74765&page=9
                var container = TP.CustomForms.sourceElements[sourceElementId].container;
                var pointerX = Event.pointerX(event);
                var pointerY = Event.pointerY(event);
                var maxX = container.cumulativeOffset().left + container.getDimensions().width;
                var maxY = container.cumulativeOffset().top + container.getDimensions().height;

                //console.log('x: ' + pointerX + ', ' + maxX);
                //console.log('y: ' + pointerY + ', ' + maxY);

                // jezeli jestesmy poza kontenerem, to zapewne najechalismy na inputa albo textarea
                if (pointerX >= maxX || pointerY >= maxY) {
                    TP.CustomForms.hideDropdown(sourceElementId);
                }
            }
        },

        clear: function() {
            for (var id in TP.CustomForms.observers) {
                TP.CustomForms.destroyObserver(id);
            }
            TP.CustomForms.sourceElements = TP.CustomForms.newElements = null;
            delete TP.CustomForms.sourceElements;
            delete TP.CustomForms.newElements;
        }
    }
};

//usuwanie observerow przed wyjsciem ze strony
Event.observe(window, 'beforeunload', function() {
    //TP.CustomForms.clear();
});

//obiekt z prefixami nazw klas/id elementow (ewentualne zmiany wymagaja zmian w css-ie)
if (typeof TP.CustomForms.Namespace == "undefined") {
    TP.CustomForms.Namespace = {
        checkboxPrefix: 'tp',
        checkboxClass: 'tp-checkbox',
        selectboxClass: 'tp-selectbox'
    }
}

//pomocnicze metody do 'sterowania' graficznymi kontrolkami z zewnetrznych skryptow
if (typeof TP.CustomForms.Controls == "undefined") {
    TP.CustomForms.Controls = {
        // zaznacza/odznacza checkboxa o podanym id, w przypadku radiobuttona odznacza tez wszystkie inne o tej samej nazwie co zaznaczany
        toggleCheckbox: function(sourceElementId, triggerOnChange) {
            //var checkboxInput = TP.CustomForms.sourceElements[sourceElementId];

            var input = TP.CustomForms.sourceElements[sourceElementId].el;
            var element = TP.CustomForms.sourceElements[sourceElementId].newElement;
            var onChange = TP.CustomForms.sourceElements[sourceElementId].onChange;

            /* jezeli disabled to nie klikamy*/
            if (input.disabled) return;

            var radioWasChecked = false;
            if (input.type == 'radio') {
                /*sprawdza czy radio juz zaznaczony i jezeli tak, to pozniej nie wywoluje onChange*/
                radioWasChecked = element.hasClassName(TP.CustomForms.Namespace.checkboxClass + '-checked');
                //odznacza pozostale radiobuttony o tej samej nazwie (name attribute)
                var elements = $$('input[type=radio]');
                elements.each(function(el) {
                    if (el.type == 'radio' && el.name == input.name) {

                        var label = TP.CustomForms.sourceElements[el.id].newElement;

                        el.checked = false;
                        if (label) label.removeClassName(TP.CustomForms.Namespace.checkboxClass + '-checked').addClassName(TP.CustomForms.Namespace.checkboxClass + '-not-checked');
                    }
                });
            };

            //zaznacza wybrany element
            element.toggleClassName(TP.CustomForms.Namespace.checkboxClass + '-checked');
            element.toggleClassName(TP.CustomForms.Namespace.checkboxClass + '-not-checked');
            if (element != input) {
                if ((input.checked == false)) {
                    input.checked = true;
                } else {
                    input.checked = false;
                }
            }
            if (input.type == 'radio') {
                if (!radioWasChecked && triggerOnChange) onChange(input, element);
            } else {
                if (triggerOnChange) onChange(input, element);
            }
        },

        // zaznaczy wszystkie checkboxy (nie radiobuttony), jezeli deselect=true to checkboxy zostana odznaczone
        selectAllCheckboxes: function(checkboxes, deselect) {
            checkboxes.each(function(el) {
                if (el.type == 'checkbox') {
                    //odznaczanie
                    if (deselect) {
                        el.up().removeClassName(TP.CustomForms.Namespace.checkboxClass + '-checked').addClassName(TP.CustomForms.Namespace.checkboxClass + '-not-checked');
                        el.checked = false;
                    } else {
                        //zaznaczanie
                        el.up().addClassName(TP.CustomForms.Namespace.checkboxClass + '-checked').removeClassName(TP.CustomForms.Namespace.checkboxClass + '-not-checked');
                        el.checked = true;
                    }

                    //TODO: do sprawdzenia, w ten sposob moze tylko zadzialac dla list (tylko gdy onclick jest inline'owy)
                    //console.log(TP.CustomForms.sourceElements[el.id].onChange);

                }
            });
        },

        //zaznaczy opcje optIndex w select-cie o id==sourceElementId i wywola onChange selecta jezeli triggerOnChange==true
        selectOption: function(sourceElementId, optIndex, triggerOnChange) {

            var selectElement = TP.CustomForms.sourceElements[sourceElementId].el;
            var container = TP.CustomForms.sourceElements[sourceElementId].container;
            var newElement = TP.CustomForms.sourceElements[sourceElementId].newElement;
            var clickBar = TP.CustomForms.sourceElements[sourceElementId].clickBar;
            var currentClass = TP.CustomForms.sourceElements[sourceElementId].currentClass;
            var hoverClass = TP.CustomForms.sourceElements[sourceElementId].hoverClass;
            var onChange = TP.CustomForms.sourceElements[sourceElementId].onChange;

            var el = container.select('li')[optIndex];

            if (el.id == undefined) el = this;

            if (TP.CustomForms.sourceElements[sourceElementId].selectedNum >= 0) {
                container.select('li.' + currentClass)[0].removeClassName(currentClass);
            }

            el.writeAttribute({
                'class': false
            }).addClassName(currentClass);
            selectElement.selectedIndex = optIndex;
            selectElement.childElements()[optIndex].selected = true;
            TP.CustomForms.sourceElements[sourceElementId].selectedNum = optIndex;

            //ustawienie wartosci pokazywanej w elemencie na ktory uzytkownik klika
            TP.CustomForms.setValue(clickBar, el.select('a')[0]);

            container.active = -1;
            TP.CustomForms.hideDropdown(sourceElementId);
            if (triggerOnChange) onChange(selectElement, newElement);

            selectElement.fire('ptk:customforms:change', {
                input: selectElement,
                checked: selectElement.selectedIndex,
                element: container
            });
        },

        //removes only the custom select, leaves the source element
        removeSelect: function(sourceElementId) {

            var select = TP.CustomForms.sourceElements[sourceElementId].el;
            var wrapper = $(sourceElementId + '-selectbox-wrapper');
            TP.CustomForms.destroyObserver(sourceElementId);

            var hiddenWrapper = select.up();
            hiddenWrapper.insert({
                'after': select
            });

            wrapper.remove();
            hiddenWrapper.remove();

            //TODO: ma usuwac czy zostawiac a pozniej nadpisac?
            //this.sourceElements[sourceElementId] = null;
            //delete this.sourceElements[sourceElementId];

            //this.newElements[sourceElementId + '-selectbox-wrapper'] = null;
            //delete this.newElements[sourceElementId + '-selectbox-wrapper'];

        },

        addOption: function(sourceElementId, text, value, selected) {

            var maxEl = TP.CustomForms.sourceElements[sourceElementId].maxElements;

            this.removeSelect(sourceElementId);

            var state = selected ? 'selected' : '';
            var select = $(sourceElementId);

            select.removeClassName(TP.CustomForms.Namespace.selectboxClass + '-hidden');

            var option = new Element('option', {
                value: value,
                selected: state
            }).update(text);

            select.insert(option);
            TP.CustomForms.replaceSelects($(select.id), {
                maxElements: maxEl
            });

        },

        removeOption: function(sourceElementId, optionIndex) {

            var select = TP.CustomForms.sourceElements[sourceElementId].el;
            var container = TP.CustomForms.sourceElements[sourceElementId].container;

            select.select('option')[optionIndex].remove();

            var li = container.select('li')[optionIndex];
            TP.CustomForms.destroyObserver(li.id);
            li.remove();
        },

        clearOptions: function(sourceElementId) {
            var select = TP.CustomForms.sourceElements[sourceElementId].el;
            var numElem = select.select('option').length;
            for (var i = 0; i < numElem; i++) {
                this.removeOption(sourceElementId, 0);
            }
        },

        setCheckboxState: function(sourceElementId, checked, disabled) {
            var input = TP.CustomForms.sourceElements[sourceElementId].el;
            var element = TP.CustomForms.sourceElements[sourceElementId].newElement;
            input.disabled = disabled;
            input.checked = checked;

            element.removeClassName(TP.CustomForms.Namespace.checkboxClass + '-checked');
            element.removeClassName(TP.CustomForms.Namespace.checkboxClass + '-not-checked');
            element.removeClassName(TP.CustomForms.Namespace.checkboxClass + '-disabled-not-checked');
            element.removeClassName(TP.CustomForms.Namespace.checkboxClass + '-disabled-checked');

            element.addClassName(TP.CustomForms.Namespace.checkboxClass + ((disabled) ? '-disabled' : '') + ((checked) ? '-checked' : '-not-checked'));
            if (input.type == 'radio' && checked) {
                var radios = $$('input[type=radio][name=' + input.name + ']');
                radios.each(function(el) {
                    if (el.type == 'radio' && el.name == input.name) {
                        var label = TP.CustomForms.sourceElements[el.id].newElement;
                        if (el != input) {
                            el.checked = false;
                            if (label != null) {

                                label.removeClassName(TP.CustomForms.Namespace.checkboxClass + '-checked');
                                label.removeClassName(TP.CustomForms.Namespace.checkboxClass + '-not-checked');
                            }
                        }
                    }
                });
            }
        },

        setSelectState: function(sourceElementId, selectedValue, disabled) {
            var select = TP.CustomForms.sourceElements[sourceElementId].el;
            var element = TP.CustomForms.sourceElements[sourceElementId].newElement;
            var clickBar = TP.CustomForms.sourceElements[sourceElementId].clickBar;

            select.disabled = disabled;
            select.value = selectedValue;

            if (select.selectedIndex >= 0) {
                TP.CustomForms.setValue(clickBar, select.options[select.selectedIndex]);
            }

            element.removeClassName(TP.CustomForms.Namespace.selectboxClass + '-checked');
            element.removeClassName(TP.CustomForms.Namespace.selectboxClass + '-not-checked');
            element.removeClassName(TP.CustomForms.Namespace.selectboxClass + '-disabled-not-checked');
            element.removeClassName(TP.CustomForms.Namespace.selectboxClass + '-disabled-checked');

            element.addClassName(TP.CustomForms.Namespace.selectboxClass + ((disabled) ? '-disabled-not-checked' : ''));

        }
    }
}