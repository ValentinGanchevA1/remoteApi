function searchBasicCustomize(b) {
    var c = $("searchForm");
    var a = $("searchPhrase");
    if (c) {}
    if (typeof b != "undefined" && b) {
        new PTK.HeaderSearchAutocompleter(b)
    }
}

function articleListSortCustomize() {
    var a = $("list-sort");
    var b = $("article-list-sort-form");
    if (a && b) {
        if (!a.hasClassName("customized")) {
            a.addClassName("customized");
            PTK.CustomForms.replaceSelects(a, {
                width: a.hasClassName("list-sort-new") ? 124 : 114,
                onChange: function() {
                    b.submit()
                }
            })
        }
    }
}

function articleListElementsPerPageCustomize() {
    var a = $("list-epp");
    var b = $("article-list-epp-form");
    if (a && b) {
        if (!a.hasClassName("customized")) {
            a.addClassName("customized");
            PTK.CustomForms.replaceSelects(a, {
                width: a.hasClassName("list-epp-new") ? 124 : 114,
                onChange: function() {
                    b.submit()
                }
            })
        }
    }
}
if (typeof PTK == "undefined") {
    var PTK = {}
}
if (typeof PTK.SearchAutocompleter == "undefined") {
    PTK.SearchAutocompleters = {};
    PTK.SearchAutocompleter = {};
    PTK.SearchAutocompleter = Class.create({
        initialize: function(b, a) {
            this.defaults = {
                input_id: "searchPhrase",
                results_id: "search-result"
            };
            this.options = Object.extend(this.defaults, a);
            this.auto_completer = null;
            this.overwriteAutocompleterFunctions();
            if (b && b != "") {
                this.initAutocompleter(b)
            }
        },
        initAutocompleter: function(b) {
            var a = this;
            this.auto_completer = new Ajax.Autocompleter(this.options.input_id, this.options.results_id, b, {
                paramName: "q",
                minChars: 3,
                parameters: "output=json",
                method: "GET",
                jsonResult: true,
                frequency: 2
            });
            this.auto_completer.index = "undefined";
            this.auto_completer.options.onComplete = function(e, d) {
                if (e.responseText != "") {
                    var c = e.responseText.evalJSON(),
                        g = "<ul>";
                    for (var h = 0; h < c.length; h++) {
                        g += "<li>" + c[h] + "</li>"
                    }
                    g += "</ul>";
                    var j = e.request.url,
                        f = j;
                    if (j.indexOf("?") > -1) {
                        f = j.split("?")[0]
                    }
                    var k = PTK.SearchAutocompleters[f];
                    k.auto_completer.updateChoices(g)
                }
            };
            PTK.SearchAutocompleters[b] = this
        },
        overwriteAutocompleterFunctions: function() {
            Ajax.Autocompleter.prototype.updateChoices = function(c) {
                if (!this.changed && this.hasFocus) {
                    this.update.innerHTML = c;
                    Element.cleanWhitespace(this.update);
                    Element.cleanWhitespace(this.update.down());
                    if (this.update.firstChild && this.update.down().childNodes) {
                        this.entryCount = this.update.down().childNodes.length;
                        for (var a = 0; a < this.entryCount; a++) {
                            var b = this.getEntry(a);
                            b.autocompleteIndex = a;
                            this.addObservers(b)
                        }
                    } else {
                        this.entryCount = 0
                    }
                    this.stopIndicator();
                    this.update.scrollTop = 0;
                    if (this.entryCount == 1 && this.options.autoSelect) {
                        this.selectEntry();
                        this.hide()
                    } else {
                        this.render()
                    }
                }
            };
            Ajax.Autocompleter.prototype.onKeyPress = function(a) {
                if (this.active) {
                    switch (a.keyCode) {
                        case Event.KEY_TAB:
                        case Event.KEY_RETURN:
                            if (!!this.keynav) {
                                this.selectEntry();
                                this.keynav = false;
                                this.hide();
                                Event.stop(a)
                            }
                            return;
                        case Event.KEY_ESC:
                            this.hide();
                            this.active = false;
                            Event.stop(a);
                            return;
                        case Event.KEY_LEFT:
                        case Event.KEY_RIGHT:
                            return;
                        case Event.KEY_UP:
                            this.keynav = true;
                            this.markPrevious();
                            this.render();
                            Event.stop(a);
                            return;
                        case Event.KEY_DOWN:
                            this.keynav = true;
                            this.markNext();
                            this.render();
                            Event.stop(a);
                            return
                    }
                } else {
                    if (a.keyCode == Event.KEY_TAB || a.keyCode == Event.KEY_RETURN || (Prototype.Browser.WebKit > 0 && a.keyCode == 0)) {
                        return
                    }
                }
                this.changed = true;
                this.hasFocus = true;
                if (this.observer) {
                    clearTimeout(this.observer)
                }
                this.observer = setTimeout(this.onObserverEvent.bind(this), this.options.frequency * 1000)
            }
        }
    })
}
if (typeof PTK == "undefined") {
    var PTK = {}
}
if (typeof PTK.HeaderSearchAutocompleter == "undefined") {
    PTK.HeaderSearchAutocompleter = {};
    PTK.HeaderSearchAutocompleter = Class.create(PTK.SearchAutocompleter, {
        initialize: function(b, a) {
            this.defaults = {
                input_id: "searchPhrase",
                results_id: "search-result",
                auto_submit: true,
                auto_submit_max_res: 767
            };
            this.options = Object.extend(this.defaults, a);
            this.auto_completer = null;
            this.overwriteAutocompleterFunctions();
            this.overwriteOtherAutocompleterFunctions();
            if (b && b != "") {
                this.initAutocompleter(b)
            }
        },
        overwriteOtherAutocompleterFunctions: function() {
            var a = this;
            Ajax.Autocompleter.prototype.show = function(b) {
                if (this.update.style.display == "none") {
                    this.update.style.display = "block"
                }
            };
            Ajax.Autocompleter.prototype.onBlur = function(b) {};
            Ajax.Autocompleter.prototype.onClick = function(c) {
                var d = Event.findElement(c, "LI");
                this.index = d.autocompleteIndex;
                this.selectEntry();
                this.hide();
                if (a.options.auto_submit && (a.options.auto_submit_max_res == null || window.innerWidth <= a.options.auto_submit_max_res)) {
                    var e = this.element.up("form");
                    if (e) {
                        e.submit()
                    }
                }
            }
        }
    })
}

function getCookieValue(c) {
    var b;
    var a;
    c += "=";
    b = document.cookie.indexOf(c);
    if (b == -1) {
        return ""
    }
    b += c.length;
    if (document.cookie.indexOf(";", b) == -1) {
        a = document.cookie.length
    } else {
        a = document.cookie.indexOf(";", b)
    }
    cookieValue = document.cookie.substring(b, a);
    cookieValue = unescape(cookieValue);
    return cookieValue
}

function setCookieValue(b, a) {
    a = escape(a);
    document.cookie = b + "=" + a + "; path=/"
}

function hideBanner(a) {
    if ($("banner-popup")) {
        PTK.Ajax.popupClose("banner-popup")
    }
    setCookieValue(a, "closed")
};