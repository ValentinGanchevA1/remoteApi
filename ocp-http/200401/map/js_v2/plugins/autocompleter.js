define("plugins/autocompleter", ["require", "common/basePlugin", "adapter/jsClass", "adapter/enumerable"], function(require) {
    var BasePlugin = require("common/basePlugin"),
        jsClass = require("adapter/jsClass"),
        enumerable = require("adapter/enumerable"),
        Autocompleter = jsClass.Class(BasePlugin, {
            inputElement: null,
            dataElements: null,
            markedListElement: null,
            requestId: 0,
            constructor: function(e, t, n, r) {
                var i = {
                    listClass: "autocomplete-list",
                    decoyListClass: "",
                    selectedClass: "marked",
                    dataElementsArraySeparator: "-",
                    minChars: 3,
                    jsonPath: "list",
                    method: "POST",
                    dataType: "JSON",
                    checkRequestId: !1,
                    withAjaxValidation: !1,
                    appendSelector: null,
                    otherFields: null,
                    jsonData: null,
                    regCheckData: null,
                    formAutoSubmit: !1
                };
                if (!this.checkDataElements(r.dataElements)) {
                    this.setInitError(e, t, n, r, "something went wrong");
                    return
                }
                Autocompleter.$super.call(this, e, t, n, r), this.options = enumerable.defaults(r, i), this.inputElement = dom.find("#" + this.modId)[0], dom.setAttribute(this.inputElement, "autocomplete", "off"), this.initObservers()
            },
            initObservers: function() {
                dom.on(this.inputElement, "keyup", null, null, this.onKeyUp.bind(this)), dom.on(this.inputElement, "keydown", null, null, this.onKeyDown.bind(this)), dom.on(this.inputElement, "blur", null, null, this.onBlur.bind(this)), this.options.minChars == 0 && dom.on(this.inputElement, "focus", null, null, this.onFocus.bind(this))
            },
            checkDataElements: function(e) {
                e = e || (this.options && this.options.dataElements ? this.options.dataElements : {});
                var t = !0;
                return enumerable.each(e, function(e, n) {
                    if (typeof e == "object") enumerable.each(e, function(e, n) {
                        var r = dom.find("#" + e);
                        r.length == 0 && (t = !1)
                    }, this);
                    else {
                        var r = dom.find("#" + e);
                        r.length == 0 && (t = !1)
                    }
                }, this), t
            },
            serializeDataElements: function() {
                dataElements = this.options.dataElements;
                var e = {};
                return enumerable.each(dataElements, function(t, n) {
                    if (typeof t == "object") {
                        var r = "";
                        enumerable.each(t, function(e, t) {
                            var n = dom.find("#" + e)[0];
                            r += n.value + this.options.dataElementsArraySeparator
                        }, this), this.options.dataElementsArraySeparator != "" ? e[n] = r.slice(0, -this.options.dataElementsArraySeparator.length) : e[n] = r
                    } else {
                        var i = dom.find("#" + t)[0];
                        e[n] = i.value
                    }
                }, this), e
            },
            getListElement: function() {
                var e = dom.find("." + this.options.listClass);
                return e.length ? e[0] : !1
            },
            onFocus: function(e) {
                if (!this.options.jsonData) {
                    var t = this.createData();
                    dom.ajax(this.options.url, this.options.method, t, null, this.options.dataType, this.onAjaxResponse.bind(this), this.errorHandler.bind(this))
                } else this.onAjaxResponse(this.options.jsonData)
            },
            onKeyUp: function(e) {
                var t = this.inputElement.value;
                if (this.options.minChars && t.length < this.options.minChars) {
                    this.hideList();
                    return
                }
                var n = e.keyCode;
                e.preventDefault();
                if (n == 40) this.markNextOnList(), e.preventDefault();
                else if (n == 38) this.markPreviousOnList(), e.preventDefault();
                else if (n == 13) e.preventDefault();
                else {
                    this.options.regCheckData && (new RegExp(this.options.regCheckData.regPattern)).test(t) && (this.inputElement.value = t.replace(new RegExp(this.options.regCheckData.regReplace), this.options.regCheckData.stringReplace));
                    var r = this.createData();
                    dom.ajax(this.options.url, this.options.method, r, null, this.options.dataType, this.onAjaxResponse.bind(this), this.errorHandler.bind(this))
                }
            },
            onKeyDown: function(e) {
                var t = e.keyCode;
                t == 13 && this.markedListElement && (e.preventDefault(), val = dom.getHtml(this.markedListElement, !0), this.setValue(val), this.hideList())
            },
            onBlur: function(e) {
                var t = this.getListElement();
                t && setTimeout(function() {
                    dom.hide(t)
                }, 100)
            },
            onAjaxResponse: function(rawdata) {
                var data = this.checkDataSyntax(rawdata),
                    html = "";
                if (data.type == "html") html = data.data;
                else {
                    if (data.type != "json") return;
                    var data = eval("data.data"),
                        getJSON = !0;
                    this.options.checkRequestId && data.requestId && this.requestId.toString() != data["requestId"] && (getJSON = !1);
                    if (!getJSON) return;
                    var listClass = this.createClassForList();
                    html = '<ul class="' + listClass + '"></ul>';
                    if (this.options.jsonPath != "") {
                        var jsonList = this.createJsonList(data, this.options.jsonPath);
                        html = this.createHtmlList(jsonList)
                    } else html = this.createHtmlList(data);
                    if (this.options.otherFields) {
                        var otherFields = this.options.otherFields;
                        enumerable.each(otherFields, function(e, t) {
                            var n = this.createJsonList(data, t);
                            n && n.length == 1 ? dom.find("#" + e)[0].value = n[0] : dom.find("#" + e)[0].value = ""
                        }, this)
                    }
                }
                this.createList(html)
            },
            createJsonList: function(e, t) {
                var n = e,
                    r = t.split(".");
                return enumerable.each(r, function(e, t) {
                    if (e.indexOf("[") > -1) {
                        var r = e.split("[");
                        n = n[r[0]][r[1].match(/\d*/)]
                    } else n = n[e]
                }), n
            },
            createHtmlList: function(e) {
                var t = this.createClassForList(),
                    n = '<ul class="' + t + '">';
                return enumerable.each(e, function(t, r) {
                    var i = "";
                    r + 1 == e.length && (i = ' class="last"'), n += "<li" + i + ">" + this.markQuery(t, this.inputElement.value) + "</li>"
                }, this), n += "</ul>", n
            },
            createList: function(e) {
                var t = this.getListElement();
                t ? dom.append(t, e, "replace") : this.options.appendSelector ? dom.append(dom.find(this.options.appendSelector) || dom.find("body"), e, "bottom") : dom.append(dom.find("body"), e, "bottom"), t = dom.find("ul." + this.options.listClass), this.initList(t)
            },
            markQuery: function(e, t) {
                return e.replace(t, "<strong>" + t + "</strong>")
            },
            checkDataSyntax: function(e) {
                try {
                    return typeof e == "object" ? json = e : json = dom.parseJSON(e), json == null ? {
                        type: "invalid"
                    } : {
                        type: "json",
                        data: json
                    }
                } catch (t) {
                    var n = dom.trim(e);
                    return n.indexOf("<ul") == 0 ? {
                        type: "html",
                        data: n
                    } : {
                        type: "invalid"
                    }
                }
            },
            createData: function() {
                var e = {};
                enumerable.extend(e, this.serializeDataElements()), enumerable.extend(e, this.options.dataParams);
                var t = this.options.selfName || this.inputElement.name;
                return e[t] = this.inputElement.value, this.options.checkRequestId && (this.requestId++, e.requestId = this.requestId), this.options.withAjaxValidation && dom.setAttribute(this.inputElement, "data-ajax-valid", this.options.url + "?" + dom.param(e)), e
            },
            errorHandler: function(e) {
                this.log("error ", e)
            },
            initList: function(e, t) {
                var n = this.createClassForList();
                n && n != "" && dom.addClass(e, n);
                var r = dom.outerWidth(this.inputElement),
                    i = dom.outerHeight(this.inputElement),
                    s = dom.offset(this.inputElement),
                    o = dom.css(e, "position"),
                    u = s.top + i;
                o == "fixed" && (u -= dom.scrollTop(window)), dom.css(e, "top", u), dom.css(e, "left", s.left), dom.css(e, "width", r);
                var a = dom.find("li", e);
                enumerable.each(a, function(e, t) {
                    dom.on(e, "mousedown", null, null, this.onItemClick.bind(this)), dom.on(e, "mouseover", null, null, this.onItemHover.bind(this))
                }, this)
            },
            hideList: function() {
                var e = this.getListElement();
                e && dom.hide(e)
            },
            onItemClick: function(e) {
                var t = e.target;
                dom.isTag(t, "li") || (t = dom.parent(t, "li"));
                var n = dom.getHtml(t, !0);
                this.setValue(n), this.hideList(), this.options.withAjaxValidation && this.createData();
                if (this.options.formAutoSubmit) {
                    var r = dom.parent(this.inputElement, "form")[0];
                    r && r.submit()
                }
                e.preventDefault()
            },
            onItemHover: function(e) {
                var t = dom.find("li." + this.options.selectedClass);
                t.length && dom.removeClass(t, this.options.selectedClass);
                var n = e.target;
                dom.isTag(n, "li") || (n = dom.parent(n, "li")), this.markElement(n)
            },
            setValue: function(e) {
                this.inputElement.value = e
            },
            markElement: function(e) {
                dom.addClass(e, this.options.selectedClass), this.markedListElement = e
            },
            markNextOnList: function() {
                var e = this.getListElement(),
                    t;
                if (e) {
                    var n = dom.find("li." + this.options.selectedClass, e);
                    n.length ? (t = dom.next(n[0], "li"), dom.removeClass(n, this.options.selectedClass), t.length || (t = n)) : t = dom.find("li", e)[0], this.markElement(t)
                }
            },
            markPreviousOnList: function() {
                var e = this.getListElement(),
                    t;
                if (e) {
                    var n = dom.find("li." + this.options.selectedClass, e);
                    if (n.length) {
                        t = dom.prev(n[0], "li"), dom.removeClass(n, this.options.selectedClass);
                        if (!t.length) {
                            markedListElement = null;
                            return
                        }
                        this.markElement(t)
                    }
                }
            },
            createClassForList: function() {
                var e = this.options.listClass;
                return this.options.decoyListClass && this.options.decoyListClass != "" && (e += " " + this.options.decoyListClass), e
            }
        });
    return Autocompleter
});