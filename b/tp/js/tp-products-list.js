/**
 * Skrypt do obslugi listy urzadzen
 * author: asliwins
 * Date: 27.10.2014
 */

var TP;
if (typeof TP == "undefined") TP = {};
if (typeof TP.ProductsList == "undefined") {
    TP.ProductsList = {};
}

TP.ProductsList = {
    /**
     * Funkcja inicjujaca
     */
    init: function(options) {
        this.defaults = {
            filtersContainerId: "products-filters-container", //kontener dla filtrow
            fixedContainerId: "fixed-filters-container", //kontener dla elementu ktory ma byc fixed przy scrollowaniu strony - ten do ktorego filtry "wskakauja" jak wracaja na swoje miejsce
            fixedFiltersId: "fixed-filters", //filtry ktore robia sie fixed przy scrollowaniu
            productFormSubmitId: "addProdSubmit", //przy klikaniu wybieram przy produkcie id submita  wktory trzeba kliknac
            productIdInputId: "addProdId", //id inputa do ktorego wstawiamy id produktu ktory trzeba wyslac jak klikamy wybieram
            productSkuInputId: "addProdSku", ////id inputa do ktorego przepisujemy model produktu przy klikaniu wybieram
            laptopFormSubmitId: "addLaptopSubmit", //przy klikaniu wybieram przy laptopie id submita  wktory trzeba klikna
            laptopIdInputId: "addLaptopId" //id inputa do ktorego wstawiamy id laptopa ktory trzeba wyslac jak klikamy wybieram
        }

        this.options = Object.extend(this.defaults, options);

        this.container = $(this.options.filtersContainerId);
        if (!this.container) throw ("[TP.ProductsList] Brak kontenera filtersContainer");

        this.setCustomForms();
        this.handleBasket();
        this.setFixedFilters();
        this.ieFlexboxFallback();
    },

    /**
     * Funkcja zamieniajaca customowe formatki oraz dodajaca odpowiednie onchange
     */
    setCustomForms: function() {
        if (TP.CustomForms) {
            //zamieniamy radiobuttony dosortowania a na change-u klikamy w element bo na onclick dodane sa w jspie odpowiednie funkcje
            TP.CustomForms.replaceCheckboxes(this.container.select('.radio-filters input[type=radio]'), {
                checkboxWidth: 16,
                checkboxHeight: 16,
                onChange: function(sourceElement) {
                    sourceElement.onclick();
                }
            });
            //zamieniamy dropdowny w filtrach a na change przekierowywujemy na strony, do ktorych linki znajduja sie w value
            TP.CustomForms.replaceSelects(this.container.select('.dropdown-filters select'), {
                onChange: this.onChangeDropdownHandler
            });
        }
    },

    /**
     * Funkcja przy zmianie wartosci dropdowna tworzy odpowiedni link i przekierowuje strone
     * Fragment linka znajduje sie w value poszczegolnych optionow w select-cie
     * W zaleznosci od klasy przekeirowuje na podanego linka, badz go odpowiednio obrabia i przekierowuje strone
     */
    onChangeDropdownHandler: function(srcEl, el) {
        var select = srcEl,
            selectValue = srcEl.value;
        if (select.hasClassName("prepare-link")) {
            var uri = window.location.pathname.replace(/\/$/, ''),
                replace = uri.substr(uri.lastIndexOf('/') + 1);
            window.location.href = uri.replace(replace, selectValue);
        }
        if (select.hasClassName("go-to-link")) {
            window.location.href = selectValue;
        }


    },

    /**
     * Funkcja pobierajaca elementy potrzebne do zafixowanych filtrow oraz ustawiajaca observery
     */
    setFixedFilters: function() {
        this.fixedContainer = $(this.options.fixedContainerId);
        if (!this.fixedContainer) throw ("[TP.ProductsList] Brak kontenera fixedContainer");

        this.fixedFilters = $(this.options.fixedFiltersId);
        if (!this.fixedFilters) throw ("[TP.ProductsList] Brak fixed filtrow");

        this.isFixed = false; //zmienna przechowujaca wartosc czy fiktry sa w postaci fixed czy static

        this.setStaticFixedPos();

        this.initFixedFiltersObservers();
    },

    /**
     * Funkcja ustawiajaca pozycje wzgl okna kontenera fixedContainer do ktorego zafixowane elemnty "wskakuja". Jest ona weryfikowana wielokrotnie - musi byc ona werfyikowana kiedy pojawia sie artykul z ciastkami
     */
    setStaticFixedPos: function() {
        this.filtersStaticPos = this.fixedContainer.cumulativeOffset().top;
    },

    /**
     * Funkcja inicjujaca observery przy ktorych filtry moga zmieniac pozycje
     */
    initFixedFiltersObservers: function() {
        //juz na starcie weryfikujemy czy przypadkiem scroll strony nie jest nisko aby ustawic filtry na fixed
        this.changeFiltersPosition();

        //zapinamy observer na scrolla
        Event.observe(window, 'scroll', this.changeFiltersPosition.bind(this));

        //zapinamy observery na eventy odpalane dla ciastek
        document.observe("cookies:appendTop", this.setStaticFixedPos.bind(this));
        document.observe("cookies:remove", this.setStaticFixedPos.bind(this));
    },

    /**
     * Funkcja modyfikujaca pozycje elementow jezdzacych poprzez dodanie/ususniecie klasy fixed
     */
    changeFiltersPosition: function() {
        var documentTopPos = document.viewport.getScrollOffsets()[1];
        if (documentTopPos <= this.filtersStaticPos) {
            if (this.isFixed) {
                this.fixedFilters.removeClassName("fixed");
                this.isFixed = false;
            }
        } else {
            if (!this.isFixed) {
                this.fixedFilters.addClassName("fixed");
                this.isFixed = true;
            }
        }
    },

    /**
     * Funkcja obslugujaca odpalanie strony z koszykiem poprzez ustawianie odpowiednich wartosci w inputach oraz zasuubmitowanie ukrytego formularza
     */
    handleBasket: function() {
        this.productFormExist = false;
        this.productFormSubmit = $(this.options.productFormSubmitId);
        this.productProdIdInput = $(this.options.productIdInputId);
        this.productProdSkuInput = $(this.options.productSkuInputId);
        if (this.productFormSubmit && this.productProdIdInput && this.productProdSkuInput) this.productFormExist = true;

        this.laptopFormExist = false;
        this.laptopFormSubmit = $(this.options.laptopFormSubmitId);
        this.laptopIdInput = $(this.options.laptopIdInputId);
        if (this.laptopFormSubmit && this.laptopIdInput) this.productFormExist = true;

    },

    /**
     * Funkcja odpalana pod kazdym przyciskiem wybieram w jspie, aby otrzymać potrzebne wartosci
     */
    addButtonObserver: function(id, laptop, prodId, skuId) {
        if (this.productFormExist || laptop && this.laptopFormExist) {
            var button = $(id);
            if (button) {
                button.observe("click", this.addButtonHandler.bind(this, laptop, prodId, skuId));
            }
        }

    },

    /**
     * Funkcja w zaleznosci od typu produktu wyzwala odpowiednia funkcje obslugujaca przejscie do koszyka
     */
    addButtonHandler: function(laptop, prodId, skuId, event) {
        event.preventDefault();
        if (laptop) this.addLaptopToBasket(prodId);
        else this.addProductToBasket(prodId, skuId);
    },

    /**
     * Funkcja przepisuje podane jako parametr wartosci do inputow oraz submitujaca wlasciwy formularz
     */
    addProductToBasket: function(prodId, skuId) {
        this.productProdIdInput.value = prodId;
        this.productProdSkuInput.value = skuId;
        this.productFormSubmit.click();
    },

    /**
     * Funkcja przepisuje podane jako parametr wartosci do inputow oraz submitujaca wlasciwy formularz
     */
    addLaptopToBasket: function(prodId) {
        this.laptopIdInput.value = prodId;
        this.laptopFormSubmit.click();
    },

    /**
     * Funkcja wyrównująca wysokości boxów z poszczególnymi elementami - jest to fallback dla przeglądarek niewspierających flexbox
     */
    ieFlexboxFallback: function() {

        var s = document.body || document.documentElement,
            s = s.style;
        if (s.webkitFlexWrap == '' || s.msFlexWrap == '' || s.flexWrap == '') return true;

        var list = $$('.terminal-products');

        if (!list) {
            return;
        } else {
            var listEl = list[0];
        }

        if (listEl) {
            var items = listEl.select('.single-product');

            this.setHeights(items, listEl);
            window.observe('resize', this.setHeights(items, listEl));
        }
    },

    setHeights: function(items, listEl) {
        if (items) {

            items.each(function(item) {
                item.setStyle({
                    height: 'auto'
                });
            });

            var perRow = Math.floor(listEl.getWidth() / items[0].getWidth());
            if (perRow == null || perRow < 2) return true;

            for (var i = 0, j = items.length; i < j; i += perRow) {
                var maxHeight = 0;
                var row = items.slice(i, i + perRow);

                row.each(function(rowEl) {
                    var itemHeight = rowEl.getHeight();
                    if (itemHeight > maxHeight) maxHeight = itemHeight;
                });

                row.each(function(rowEl) {
                    rowEl.setStyle({
                        height: maxHeight
                    });
                });
            }
        }
    }

};