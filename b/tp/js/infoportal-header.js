/* infoportal-header.js */

function searchBasicCustomize(url) {
    var form = $('searchForm');
    var input = $('searchPhrase');

    if (form) {
        //new PTK.InputHint(input);
        //var hint = form.down('.ptk-inputhint-label');

        /* 
         * wyjasnienie zakomentowania: ptk-inputhin.js ~ 16
         * w skrocie czytnik nie czytal elementu jezeli byl on 'display: none'
         * */

        /*form.observe('mouseenter', function(){
        	if(input.value==''){
        		hint.fade({ duration: 0.3 });
        	}
        });
		
        form.observe('mouseleave', function(){
        	if(input.value=='' && !input.hasClassName('ptk-inputhint-focused')){
        		hint.appear({ duration: 0.3, queue: 'end' });
        	}
        });*/
    }
    initializeSearchAutocompleter(url);

}
if (typeof PTK == "undefined") var PTK = {};
PTK.auto_completer;

function initializeSearchAutocompleter(url) {

    var parentBaseInitialize = Ajax.Autocompleter.prototype.baseInitialize;

    Ajax.Autocompleter.prototype.baseInitialize = function(element, update, options) {
        parentBaseInitialize.call(this, element, update, options);
        if (this.element.id == "city") {
            Event.observe(this.element, 'focus', this.onFocus.bindAsEventListener(this));
        }
    }

    Ajax.Autocompleter.prototype.onFocus = function(event) {
        this.changed = false;
        this.hasFocus = true;

        if (this.element.value != "") {
            this.changed = true;
        }

        if (this.observer) clearTimeout(this.observer);
        this.observer =
            setTimeout(this.getUpdatedChoices.bind(this), this.options.frequency * 1000);
    }

    /*zmina wprowadzone dla Szukacz
    zmiany działania autocompletera : zmiana dzialania na przycisniecie eneter zeby nie wypelanial inputa pierwsza z listy podpowiedzia
    Ajax.Autocompleter.prototype.updateChoices - usuniecie ustawiania index = 0
    Ajax.Autocompleter.prototype.onKeyPress - zmiana obslugi eneter*/

    Ajax.Autocompleter.prototype.onKeyPress = function(event) {
        if (this.active) {
            switch (event.keyCode) {

                case Event.KEY_TAB:
                case Event.KEY_RETURN:
                    /*usuniety zostal warunek sprawdzania czy wczesniej byl uzyty klawisz nawigacji
                      gdyz ma byc mozliwosc wybrania pierwszej opcji za pomoca klawisza enter zaraz po wyswietleniu listy*/
                    Event.stop(event);
                    var entry = this.getCurrentEntry();
                    if (entry.tagName != "INPUT" && entry.tagName != "LABEL") {

                        this.selectEntry();
                        this.keynav = false;
                        this.hide();
                    } else {
                        entry.click();
                    }
                    return;

                case Event.KEY_ESC:
                    this.hide();
                    this.active = false;
                    Event.stop(event);
                    return;
                case Event.KEY_LEFT:
                case Event.KEY_RIGHT:
                    return;
                case Event.KEY_UP:
                    Event.stop(event);
                    this.keynav = true;
                    this.markPrevious();
                    this.render();
                    return;
                case Event.KEY_DOWN:
                    Event.stop(event);
                    this.keynav = true;
                    this.markNext();
                    this.render();
                    return;
            }
        } else {
            if (event.keyCode == Event.KEY_TAB || event.keyCode == Event.KEY_RETURN || (Prototype.Browser.WebKit > 0 && event.keyCode == 0)) return;
        }
        this.changed = true;
        this.hasFocus = true;
        if (this.observer) clearTimeout(this.observer);
        this.observer =
            setTimeout(this.onObserverEvent.bind(this), this.options.frequency * 1000);
        var input = event.target,
            value = input.value,
            cbsId = input.identify() + "-id",
            cbsInputId = $(cbsId);
        if (cbsInputId) {
            cbsInputId.value = "";
        }

    }

    Ajax.Autocompleter.prototype.onClick = function(b) {
        var a = Event.findElement(b, "LI");
        this.index = a.autocompleteIndex;
        this.selectEntry();
        this.hide();
        if (window.innerWidth <= 767) {
            var form = this.element.up('form');
            if (form) {
                form.submit();
            }
        }
    }

    PTK.auto_completer = new Ajax.Autocompleter('searchPhrase', 'search-result', url, {
        paramName: 'q',
        minChars: 3,
        parameters: 'output=json',
        method: 'GET',
        jsonResult: true,
        frequency: 2

    });


    PTK.auto_completer.updateChoices = function(choices) {
        if (!this.changed && this.hasFocus) {
            this.update.innerHTML = choices;
            Element.cleanWhitespace(this.update);
            var list = this.update.down("ul");
            Element.cleanWhitespace(list);
            var listElements = list.childNodes;
            if (this.update.firstChild && listElements) {
                this.entryCount = listElements.length;
                for (var i = 0; i < this.entryCount; i++) {
                    var entry = this.getEntry(i);
                    entry.autocompleteIndex = i;
                    this.addObservers(entry);
                }
            } else {
                this.entryCount = 0;
            }
            this.stopIndicator();
            this.update.scrollTop = 0; /* poprawka http://www.gilluminate.com/2009/01/20/scriptaculous-autocomplete-page-jump-using-arrow-keys/ */

            if (this.entryCount == 1 && this.options.autoSelect) {
                this.selectEntry();
                this.hide();
            } else {
                this.render();

            }
        }
    }

    PTK.auto_completer.index = 'undefined';
    /**
     * nadpisanie funkcji wywolywanej po wykonaniu requestu - 
     *  funckcja porzebna do przeknowertowania json'a z response do formatu <ul></ul> jaki przyjmuje autocomplter z controls.js
     *  zmiana wprowadzona /szukacz
     */
    PTK.auto_completer.options.onComplete = function(response) {
        if (response.responseText.isJSON()) {
            var sug = response.responseText.evalJSON(),
                suggestionString = '<ul>';
            for (var i = 0; i < sug.length; i++) {
                suggestionString += '<li>' + sug[i] + '</li>';
            }
            suggestionString += '</ul>';
            PTK.auto_completer.updateChoices(suggestionString);
        }
    }
}