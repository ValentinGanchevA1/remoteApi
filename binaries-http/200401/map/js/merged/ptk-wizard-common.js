var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.ModuleManager == "undefined") {
    PTK.ModuleManager = {
        loadedDependanciesRegistry: new Hash(),
        initModules: function(a, g) {
            var d = this;
            try {
                var c = new Hash(),
                    b = [];
                this.getModuleViews(a).each(function(h, i) {
                    var e = h[0];
                    var k = h[1];
                    if (k === null) {
                        return
                    }
                    var j = c.get(e.id);
                    if (j && j.length) {
                        j.each(function(m, l) {
                            k.push(m)
                        })
                    }
                    c.set(e.identify(), k);
                    k.each(function(m) {
                        var l = a.moduleDefinitions[m];
                        if (!Object.isUndefined(l)) {
                            if (l.dependancy) {
                                b.push(d.modifyDependaciesRegistry(l.dependancy, a, g))
                            }
                        }
                    })
                });
                PTK.AssetLoader.script(b, this.onModulesLoaded.bindAsEventListener(this, a, c, b))
            } catch (f) {}
            return this
        },
        onModulesLoaded: function() {
            var d = this,
                a = arguments[1],
                c = arguments[2],
                b = arguments[3];
            b.each(function(e) {
                d.loadedDependanciesRegistry.set(e, true)
            });
            try {
                c.each(function(e) {
                    var g = e[1];
                    var h = e[0];
                    g.each(function(k) {
                        var j = a.moduleDefinitions[k];
                        var i = $(h);
                        if (Object.isUndefined(j)) {} else {
                            if (Object.isArray(j.params)) {
                                j.params.splice(0, 0, i);
                                j.m.apply(a, j.params)
                            } else {
                                j.m.apply(a, [i])
                            }
                        }
                    })
                })
            } catch (f) {}
        },
        getModuleIds: function(b, a) {
            var c = this.dataAttr(b, a.moduleHtml5DataAttribute) || this.dataAttr(b, a.globalModuleHtml5DataAttribute) || null;
            return c !== null ? c.split(" ") : c
        },
        getModuleViews: function(a) {
            var d = this,
                c = [];
            var f = $$(a.options.globalModuleSelector).first();
            if (f) {
                var e = this.getModuleIds(f, a.options);
                c.push([a.moduleContainer, e])
            }
            var b = a.moduleContainer.select(a.options.moduleSelector);
            if (a.moduleContainer.hasClassName(a.options.moduleSelector.replace(".", ""))) {
                b.unshift(a.moduleContainer)
            }
            b.each(function(g, h) {
                if (g !== f) {
                    var i = d.getModuleIds(g, a.options);
                    if (i !== null) {
                        c.push([g, i])
                    }
                    g.removeClassName(a.options.moduleSelector.replace(".", ""))
                }
            });
            return c
        },
        addDefinition: function(a, b) {
            this.moduleDefinitions.set(a, b)
        },
        setModuleParams: function(b) {
            var a = arguments;
            if (a.length > 1) {
                a.shift()
            }
        },
        dataAttr: function(b, a) {
            return b.readAttribute("data-" + a) || false
        },
        modifyDependaciesRegistry: function(b, c, e) {
            var d = this,
                a = [];
            if (b) {
                b.each(function(g, l) {
                    var i = "";
                    var h = null;
                    if (Object.isArray(g)) {
                        i = g[0];
                        if (g[1] !== undefined && Object.isFunction(g[1])) {
                            h = g[1].call(c, [])
                        }
                    } else {
                        i = g
                    }
                    var i = i.strip();
                    var n = (e && e != "") ? (e + i) : ("/binaries-http/200401/map/js/" + i);
                    var k = false;
                    if (typeof h == "boolean" && !h) {
                        if (d.loadedDependanciesRegistry.get(n) === undefined) {
                            k = true
                        }
                    } else {
                        if (d.loadedDependanciesRegistry.get(n) === undefined) {
                            var m = /^ptk-/;
                            if (m.test(i)) {
                                if (PTK === undefined) {
                                    PTK = {}
                                } else {
                                    var f = i.substring(3, i.length - 3);
                                    var j = f.replace(/-([a-z])/g, function(o, p) {
                                        return p.toUpperCase()
                                    });
                                    if (PTK[j] === undefined) {
                                        k = true
                                    }
                                }
                            } else {
                                k = true
                            }
                        }
                    }
                    if (k) {
                        d.loadedDependanciesRegistry.set(n, false);
                        a.push(n)
                    }
                })
            }
            return a
        },
        isLoaded: function(b) {
            var a = (b.loaded === false || b.loaded === undefined) ? false : true;
            return a
        },
        loaded: function(a) {
            this.moduleDefinitions.get(a).loaded = true
        },
        log: function() {},
        warn: function() {
            if (window.console) {
                console.warn.apply(window, arguments)
            }
        }
    }
}
if (typeof PTK.ModuleController == "undefined") {
    PTK.ModuleController = {};
    PTK.ModuleController = Class.create({
        defaults: {
            moduleSelector: ".js-mod",
            globalModuleSelector: ".js-global-mod",
            globalModuleHtml5DataAttribute: "js-global-modules",
            moduleHtml5DataAttribute: "js-modules",
            moduleContainerSelector: "module-controler",
            isMobile: false,
            binariesPath: "/binaries-http/200401/map/js/"
        },
        options: {},
        moduleContainer: null,
        moduleDefinitions: {},
        initialize: function(a) {
            if (!PTK.ModuleManager) {
                throw ("Brak PTK.ModuleManager-a.")
            }
            var b = this;
            this.options = Object.extend(Object.clone(this.defaults), a);
            this.moduleContainer = $(this.options.moduleContainerSelector);
            this.setModuleDefinitions();
            PTK.ModuleManager.initModules(this, this.options.binariesPath);
            this.moduleContainer.observe("ptk:ajax:after", this.handleAjaxReload.bindAsEventListener(this))
        },
        handleAjaxReload: function(a) {
            a.stop();
            PTK.ModuleManager.initModules(this)
        },
        setModuleDefinitions: function() {},
        moduleDefinitions: {
            tooltips: {
                m: function(a) {
                    this.initTooltips(a)
                },
                dependancy: ["ptk-tooltip.js"]
            },
            "custom-radio": {
                m: function(a) {
                    this.initCustomRadios(a)
                },
                dependancy: [
                    ["ptk-customform.js", function() {
                        return this.isCustomFormsExist()
                    }]
                ]
            },
            "custom-checkbox": {
                m: function(a) {
                    this.initCustomCheckboxes(a)
                },
                dependancy: [
                    ["ptk-customform.js", function() {
                        return this.isCustomFormsExist()
                    }]
                ]
            },
            "custom-select": {
                m: function(a) {
                    this.initCustomSelects(a)
                },
                dependancy: [
                    ["ptk-customform.js", function() {
                        return this.isCustomFormsExist()
                    }]
                ]
            },
            "focused-input": {
                m: function(a) {
                    this.initFocusedInput()
                },
                dependancy: [
                    ["ptk-customform.js", function() {
                        return this.isCustomFormsExist()
                    }]
                ]
            },
            popup: {
                m: function(a) {
                    this.initPopup(a)
                },
                dependancy: ["ptk-ajax.js"]
            },
            "datepicker-without-holidays": {
                m: function(a) {
                    this.initDatePicker()
                },
                dependancy: ["datepicker.js", "ptk-eshop.js"]
            }
        },
        initTooltips: function(a) {
            new PTK.Tooltip(".tt-trigger", {
                width: 170,
                tooltipOrientation: "right-center"
            })
        },
        initCustomRadios: function(a) {
            var b = a.select("input.custom-radio");
            if (!b.length) {
                return
            }
            PTK.CustomForms.replaceCheckboxes(b, {
                onChange: function(e, c, d) {
                    if (d.hasClassName("submitter")) {
                        var f = d.up("form");
                        if (f) {
                            PTK.Ajax.submitForm(f)
                        }
                    }
                }
            });
            return b
        },
        initCustomCheckboxes: function(a) {
            var b = a.select("input.custom-checkbox");
            if (!b.length) {
                return
            }
            PTK.CustomForms.replaceCheckboxes(b, {
                onChange: function(e, c, d) {
                    if (d.hasClassName("submitter")) {
                        var f = d.up("form");
                        if (f) {
                            PTK.Ajax.submitForm(f)
                        }
                    }
                }
            });
            return b
        },
        initCustomSelects: function(b) {
            var c = [],
                e = [],
                d = [],
                a = [];
            c = b.select("select.custom-select:not(.not-cut-value):not(.custom-select-filtered)");
            e = b.select("select.custom-select.not-cut-value:not(.custom-select-filtered)");
            d = b.select("select.custom-select.custom-select-filtered:not(.not-cut-value)");
            a = b.select("select.custom-select.not-cut-value.custom-select-filtered");
            if (!c.length && !e.length && !d.length && !a.length) {
                return
            }
            if (c.length) {
                PTK.CustomForms.replaceSelects(c, this.setCustomSelectOptions())
            }
            if (d.length) {
                PTK.CustomForms.replaceSelects(d, {
                    isMobile: this.options.isMobile,
                    onChange: this.customSelectsChange,
                    isFilteredSelect: true
                })
            }
            if (e.length) {
                PTK.CustomForms.replaceSelects(e, {
                    isMobile: this.options.isMobile,
                    cutValue: false,
                    wrapperClass: "ptk-selectbox-wrapper not-cut-value-wrapper",
                    onChange: this.customSelectsChange
                })
            }
            if (a.length) {
                PTK.CustomForms.replaceSelects(a, {
                    isMobile: this.options.isMobile,
                    cutValue: false,
                    wrapperClass: "ptk-selectbox-wrapper not-cut-value-wrapper",
                    onChange: this.customSelectsChange,
                    isFilteredSelect: true
                })
            }
            return c.concat(e).concat(d).concat(a)
        },
        setCustomSelectOptions: function() {
            var a = {
                isMobile: this.options.isMobile,
                onChange: this.customSelectsChange
            };
            return a
        },
        customSelectsChange: function(c, a, b) {
            if (b.hasClassName("submitter")) {
                var d = b.up("form");
                if (d) {
                    PTK.Ajax.submitForm(d)
                }
            }
        },
        initFocusedInput: function() {
            var a = this.moduleContainer.select("input.js-input-focus").first();
            if (a) {
                a.focus();
                var b = a.getValue();
                a.setValue("").setValue(b)
            }
        },
        initPopup: function(a) {
            a.select("a.popup-close-link").each(function(b) {
                PTK.Ajax.popupRegisterClose(b)
            })
        },
        isCustomFormsExist: function() {
            if (typeof PTK == "undefined") {
                return false
            } else {
                if (typeof PTK.CustomForms == "undefined") {
                    return false
                } else {
                    return true
                }
            }
        },
        isAjaxifyExist: function() {
            if (typeof PTK == "undefined") {
                return false
            } else {
                if (typeof PTK.Ajax == "undefined") {
                    return false
                } else {
                    return true
                }
            }
        },
        initDatePicker: function() {
            var d = this.moduleContainer.select("input.from-date").first(),
                c = this.moduleContainer.select("input.to-date").first(),
                b = this.moduleContainer.select("input.insert-date").first(),
                a = $(b.identify() + "-img");
            if (d && c && b) {
                PTK.DatepickerHolidays.initialize({
                    dateInputId: b.id,
                    from: d.value,
                    to: c.value,
                    externalControl: a
                })
            }
        }
    })
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.WizardStatic == "undefined") {
    PTK.WizardStatic = {
        refreshSteps: function() {
            var a = $("b2c-steps-refresh-link");
            if (a) {
                PTK.Ajax.clickLink(a)
            }
        },
        customSelectShowListCallback: function(a) {
            var b = $(a + "_wrapper");
            if (b) {
                b.removeClassName("ptk-selectbox-wrapper--chosen")
            }
        },
        customSelectHideListCallback: function(a) {
            var b = $(a.id + "_wrapper");
            if (b) {
                b.addClassName("ptk-selectbox-wrapper--chosen")
            }
        },
        multipackCustomSelectOnlyForShowListCallback: function(e) {
            var c = $(e),
                f = $(e + "_wrapper"),
                d = $(e + "_input"),
                b = c.select(".hide-in-dropdown");
            if (b.length) {
                if (f) {
                    f.addClassName("without-option")
                }
                if (d) {
                    var a = c.readAttribute("data-first-option-text");
                    if (a) {
                        d.innerHTML = a
                    }
                }
            }
        },
        multipackCustomSelectShowListCallback: function(i, a, f, c) {
            var h = $(i),
                b = $(i + "_wrapper"),
                e = $(i + "_input"),
                d = h.select(".hide-in-dropdown");
            if (b) {
                b.removeClassName("ptk-selectbox-wrapper--chosen")
            }
            if (d.length) {
                if (c) {
                    if (b) {
                        b.addClassName("without-option")
                    }
                    var g = h.readAttribute("data-first-option-text");
                    this.changeMultipackDropdownText(e, g)
                } else {
                    this.multipackDropdownChageForHidden(h, b, e)
                }
            }
        },
        multipackCustomSelectHideListCallback: function(d) {
            var b = $(d.id),
                e = $(d.id + "_wrapper"),
                c = $(d.id + "_input"),
                a = b.select(".hide-in-dropdown");
            if (e) {
                e.addClassName("ptk-selectbox-wrapper--chosen")
            }
            if (a.length) {
                this.multipackDropdownChageForHidden(b, e, c)
            }
        },
        multipackDropdownChageForHidden: function(b, d, c) {
            if (d) {
                d.removeClassName("without-first-option")
            }
            var a = b.select("option")[0].innerHTML;
            this.changeMultipackDropdownText(c, a)
        },
        changeMultipackDropdownText: function(a, b) {
            if (a && b && b != "") {
                a.innerHTML = b
            }
        }
    }
}
if (typeof PTK.Wizard == "undefined") {
    PTK.Wizard = {};
    if (!PTK.ModuleController) {
        throw ("Brak PTK.ModuleController-a.")
    }
    PTK.Wizard = Class.create(PTK.ModuleController, {
        initialize: function($super, a) {
            $super(a);
            var b = this;
            this.refreshedViews = $$(".js-refreshed-view");
            this.refreshedViews.each(function(c) {
                c.observe("ptk:ajax:after", b.handleAjaxReload.bindAsEventListener(b))
            });
            b.initAgreementsObservers();
            b.initSubmitOnChange();
            this.cityInputsFocus = ""
        },
        setModuleDefinitions: function($super) {
            $super();
            this.moduleDefinitions["steps-tooltip"] = {
                m: function(a) {
                    this.initStepsTooltips(a)
                },
                dependancy: ["ptk-tooltip.js"]
            };
            this.moduleDefinitions["current-step-tooltip"] = {
                m: function(a) {
                    this.initCurrentStepTooltip(a)
                },
                dependancy: ["ptk-tooltip.js"]
            };
            this.moduleDefinitions["offers-tooltip"] = {
                m: function(a) {
                    this.initOffersTooltip(a)
                },
                dependancy: ["ptk-tooltip.js"]
            };
            this.moduleDefinitions["proposition-section"] = {
                m: function(a) {
                    this.initPropositionSection(a)
                },
                dependancy: ["ptk-input-checker.js", "event-simulate.js"]
            };
            this.moduleDefinitions["table-section"] = {
                m: function(a) {
                    this.initTableSection(a)
                },
                dependancy: ["ptk-column-highlighter.js", "ptk-column-checker.js", "event-simulate.js"]
            };
            this.moduleDefinitions["custom-radio"] = {
                m: function(a) {
                    this.initCustomRadios(a)
                },
                dependancy: ["ptk-custom-checkbox-ie8.js"]
            };
            this.moduleDefinitions.flexbox = {
                m: function(a) {
                    this.initFlexbox(a)
                },
                dependancy: ["ptk-box.js"]
            };
            this.moduleDefinitions["custom-checkbox"] = {
                m: function(a) {
                    this.initCustomCheckboxes(a)
                },
                dependancy: ["ptk-custom-checkbox-ie8.js"]
            };
            this.moduleDefinitions["servicepack-table-section"] = {
                m: function(a) {
                    this.initServicePackTableSection(a)
                },
                dependancy: ["ptk-column-highlighter.js", "ptk-column-checker.js", "event-simulate.js"]
            };
            this.moduleDefinitions["safarii-table-section"] = {
                m: function(a) {
                    this.initSafariiTableSection(a)
                },
                dependancy: ["ptk-column-highlighter.js", "ptk-column-checker.js", "event-simulate.js"]
            };
            this.moduleDefinitions["color-chooser"] = {
                m: function(a) {
                    this.initColorChooser()
                },
                dependancy: ["ptk-input-checker.js", "event-simulate.js"]
            };
            this.moduleDefinitions["cart-details"] = {
                m: function(a) {
                    this.initCartDetails()
                },
                dependancy: ["ptk-position-fixed-element.js"]
            };
            this.moduleDefinitions["static-popups"] = {
                m: function(a) {
                    this.initDescriptionPopups(a)
                },
                dependancy: ["ptk-ajax.js"]
            };
            this.moduleDefinitions["color-carousel"] = {
                m: function(a) {
                    this.initColorCarousel(a)
                },
                dependancy: ["carousel.js", "infoportal-glorious.js", "ptk-input-checker.js", "event-simulate.js"]
            };
            this.moduleDefinitions["gift-color-chooser"] = {
                m: function(a) {
                    this.initColorGiftChooser(a)
                },
                dependancy: ["ptk-input-checker.js", "event-simulate.js"]
            };
            this.moduleDefinitions["add-gift-checkbox"] = {
                m: function(a) {
                    this.initAddGiftCheckboxes()
                },
                dependancy: [
                    ["ptk-customform.js", function() {
                        return this.isCustomFormsExist()
                    }]
                ]
            };
            this.moduleDefinitions["msisdn-section"] = {
                m: function(a) {
                    this.initMsisdnSection(a)
                },
                dependancy: ["ptk-ajax.js", "ptk-show-hide.js"]
            };
            this.moduleDefinitions["input-email-validation"] = {
                m: function(a) {
                    this.initInputValidation(a, "blur")
                },
                dependancy: ["ptk-ajax.js", "ptk-form-validation.js"]
            };
            this.moduleDefinitions["input-phone-validation"] = {
                m: function(a) {
                    this.initInputValidation(a, "keyup")
                },
                dependancy: ["ptk-ajax.js", "ptk-form-validation.js"]
            };
            this.moduleDefinitions["next-page-block"] = {
                m: function(a) {
                    this.initNextPage(true)
                }
            };
            this.moduleDefinitions["next-page-unblock"] = {
                m: function(a) {
                    this.initNextPage(false)
                }
            };
            this.moduleDefinitions.autocompleter = {
                m: function(a) {
                    this.initAutocompleter(a)
                },
                dependancy: ["ptk-autocompleter.js"]
            };
            this.moduleDefinitions["city-autocompleter"] = {
                m: function(a) {
                    this.initCityAutocompleter(a)
                },
                dependancy: ["ptk-autocompleter.js"]
            };
            this.moduleDefinitions["street-autocompleter"] = {
                m: function(a) {
                    this.initStreetAutocompleter(a)
                },
                dependancy: ["ptk-autocompleter.js"]
            };
            this.moduleDefinitions["base-gratis"] = {
                m: function(a) {
                    this.initBaseGratis(a)
                },
                dependancy: ["ptk-ajax.js", "ptk-form-validation.js"]
            };
            this.moduleDefinitions["post-code-submit"] = {
                m: function(a) {
                    this.initPostCodeSubmit(a)
                }
            };
            this.moduleDefinitions["shipping-invoice"] = {
                m: function(a) {
                    this.initShippingInvoiceValidation(a)
                },
                dependancy: ["ptk-form-validation.js", "ptk-on-time-popup.js"]
            };
            this.moduleDefinitions["contract-draft"] = {
                m: function(a) {
                    this.initContractDraft(a)
                },
                dependancy: ["ptk-ajax.js", "ptk-form-validation.js"]
            };
            this.moduleDefinitions["process-form-submitter"] = {
                m: function(a) {
                    this.submitShipingInvoiceForm(a)
                }
            };
            this.moduleDefinitions["block-send-sms-code"] = {
                m: function(a) {
                    this.initBlockSendSmsCode(a)
                },
                dependancy: ["ptk-block-send-sms-code.js"]
            };
            this.moduleDefinitions["cells-height-align"] = {
                m: function(a) {
                    this.initCellsHeightAlign(a)
                }
            };
            this.moduleDefinitions["scroll-to-error"] = {
                m: function(a) {
                    this.initScrollToError(a)
                }
            };
            this.moduleDefinitions["count-valid"] = {
                m: function(a) {
                    this.initCountValid(a)
                }
            };
            this.moduleDefinitions["rewrite-captcha-value"] = {
                m: function(a) {
                    this.initCaptchaRewriter(a)
                }
            };
            this.moduleDefinitions["init-agreements-observers"] = {
                m: function(a) {
                    this.initAgreementsObservers(a)
                }
            };
            this.moduleDefinitions["submit-number-chooser"] = {
                m: function(a) {
                    this.initSubmitNumberChooser(a)
                }
            };
            this.moduleDefinitions["agreement-length"] = {
                m: function(a) {
                    this.initAgreementLength(a)
                },
                dependancy: [
                    ["ptk-customform.js", function() {
                        return this.isCustomFormsExist()
                    }]
                ]
            };
            this.moduleDefinitions["multipack-dropdown"] = {
                m: function(a) {
                    this.initMultipackDropdown(a)
                },
                dependancy: [
                    ["ptk-customform.js", function() {
                        return this.isCustomFormsExist()
                    }]
                ]
            };
            this.moduleDefinitions["print-form-popup-content"] = {
                m: function(a) {
                    this.initPrintFormPopupObserver(a)
                },
                dependancy: ["ptk-invoices.js"]
            };
            this.moduleDefinitions["wizard-regulations"] = {
                m: function(a) {
                    this.initWizardRegulations(a)
                }
            };
            this.moduleDefinitions["summary-section"] = {
                m: function(a) {
                    this.initSummarySection(a)
                },
                dependancy: ["ptk-show-hide.js"]
            };
            this.moduleDefinitions["show-hide"] = {
                m: function(a) {
                    this.initShowHide(a)
                },
                dependancy: ["ptk-show-hide.js"]
            };
            this.moduleDefinitions["agreement-group-show-hide"] = {
                m: function(a) {
                    this.initAgreementGroupHide(a);
                    this.initAgreementGroupShow(a)
                },
                dependancy: ["ptk-show-hide.js"]
            };
            this.moduleDefinitions["agreement-group-check"] = {
                m: function(a) {
                    this.initAgreementGroupCheck(a)
                }
            };
            this.moduleDefinitions["floating-summary"] = {
                m: function(a) {
                    this.initFloatingSummary(a)
                },
                dependancy: ["ptk-floating-summary.js"]
            };
            this.moduleDefinitions["scroll-to-element"] = {
                m: function(b) {
                    var a = b.readAttribute("data-scroll-to-selector");
                    b.observe("click", function(c) {
                        c.preventDefault();
                        this.scrollToElement(a, "1", -50)
                    }.bind(this))
                }
            }
        },
        handleAjaxReload: function($super, a) {
            $super(a);
            this.resetFlags(a.element());
            this.focusIfCityInputWasFocused()
        },
        focusIfCityInputWasFocused: function() {
            if (this.cityInputsFocus && this.cityInputsFocus != "") {
                var a = $(this.cityInputsFocus);
                if (a) {
                    a.focus()
                }
            }
        },
        resetFlags: function(a) {
            this.ajaxIsGoing = false;
            if (a.id === "wizard-box") {
                this.validateOnBlurActive = false
            }
        },
        ajaxIsGoing: false,
        ajaxReload: function(a) {
            if (Object.isUndefined(PTK.Ajax.ajaxed[a])) {
                if (window.console) {
                    console.warn("Formularz o id", a, " nie jest zajaxowany")
                }
            } else {
                this.ajaxIsGoing = true;
                PTK.Ajax.submitForm(a)
            }
        },
        initAgreementGroupCheck: function(a) {
            $("opl-undefined").on("change", ".checkAll", function(c, b) {
                console.log(b)
            })
        },
        initFloatingSummary: function(a) {
            PTK.FloatingSummary.initialize({
                staticSummaryId: "summary-section"
            })
        },
        initShowHide: function(b) {
            var a = b.identify();
            new PTK.ShowHide({
                triggerSelector: ".global-show-hide-trigger",
                classes: ["opl-link-arrow-left-bottom", "opl-link-arrow-left-top"],
                containerId: a
            })
        },
        initAgreementGroupHide: function(b) {
            var a = b.identify();
            new PTK.ShowHide({
                triggerSelector: ".agreement-group-show-hide-trigger-hide",
                classes: ["opl-link-arrow-big-left-bottom", "opl-link-arrow-big-left-top"],
                containerId: a,
                onStartHide: true
            })
        },
        initAgreementGroupShow: function(b) {
            var a = b.identify();
            new PTK.ShowHide({
                triggerSelector: ".agreement-group-show-hide-trigger-show",
                classes: ["opl-link-arrow-big-left-bottom", "opl-link-arrow-big-left-top"],
                containerId: a,
                onStartHide: false
            })
        },
        handleCustomChange: function(b) {
            var i = b.findElement(),
                c = i.form;
            if (!this.ajaxIsGoing) {
                var d = true;
                if (c.hasClassName("no-auto-submit") || (c.hasClassName("dedicated-submit") && !i.hasClassName("dedicated-submitting-element"))) {
                    d = false
                }
                if (d) {
                    var f = true;
                    if (c.hasClassName("validating-form")) {
                        validatingInputs = c.select(".js-validation");
                        validatingInputs.each(function(k) {
                            PTK.FormValidation.removeError(k);
                            value = k.getValue();
                            if (k.hasClassName("email-validation")) {
                                validation = PTK.FormValidation.validateEmail(value)
                            } else {
                                if (k.hasClassName("phone-validation")) {
                                    validation = PTK.FormValidation.validateMobilePhoneNumber(value)
                                }
                            }
                            if (!validation.validationFlag) {
                                PTK.FormValidation.showError(k, validation.validationText);
                                f = false
                            }
                        })
                    }
                    if (f) {
                        if (i.hasClassName("process-submitter")) {
                            var g = i.className,
                                e = "",
                                j = this;
                            if (g.indexOf("process-submit-class-") > -1) {
                                g.split(" ").each(function(l, k) {
                                    if (l.indexOf("process-submit-class-") > -1) {
                                        e = l.substring(21);
                                        return
                                    }
                                });
                                this.sendProcessComponent("." + e, "#" + i.up("form").identify())
                            }
                        } else {
                            if (c.hasClassName("chain-form-process-form-part")) {
                                this.sendChainForms(c)
                            } else {
                                this.ajaxReload(c.id)
                            }
                        }
                    } else {
                        if (i.type == "radio" || i.type == "checkbox") {
                            var a = !i.checked;
                            i.checked = a;
                            var h = i.up();
                            if (h) {
                                if (h.hasClassName("ptk-checkbox")) {
                                    if (a) {
                                        h.addClassName("checked")
                                    } else {
                                        h.removeClassName("checked")
                                    }
                                }
                            }
                        } else {
                            i.setValue(inputValue)
                        }
                    }
                }
            }
        },
        sendChainForms: function(b) {
            if (b && b.hasClassName("chain-form-process-form-part")) {
                var a = $$(".chain-form-process-form-part");
                if (a && a.length) {
                    this.sendProcessComponent(".chain-form-process-form-part", "#" + a.last().identify())
                }
            }
        },
        handleMsisdnSectionChange: function(e) {
            var b = e.findElement();
            var d = b.form;
            var c = parseInt(e.keyCode ? e.keyCode : e.which);
            if (c != 37 && c != 39) {
                if (c) {
                    if (this.msisdnTimeout) {
                        clearTimeout(this.msisdnTimeout)
                    }
                    var a = this;
                    this.msisdnTimeout = setTimeout(function() {
                        a.handleCustomChange(e)
                    }, 600)
                } else {
                    this.handleCustomChange(e)
                }
            }
        },
        handleInputValidationEvent: function(c) {
            var b = c.findElement();
            PTK.FormValidation.removeError(b);
            var e = b.getValue();
            var a = false;
            var d = true;
            if (b.hasClassName("email-validation")) {
                a = PTK.FormValidation.validateEmail(e)
            } else {
                if ("phone-validation") {
                    a = PTK.FormValidation.validateMobilePhoneNumber(e);
                    if (e.length < 9) {
                        d = false
                    }
                }
            }
            if (a.validationFlag) {
                this.handleCustomChange(c)
            } else {
                if (d) {
                    PTK.FormValidation.showError(b, a.validationText)
                }
            }
        },
        hookInputCheckerRadios: function(a) {
            new PTK.InputChecker(a);
            var b = a.select("input:radio");
            this.initDefaultAjaxReloadObservers(b, "change")
        },
        initInputValidationObservers: function(a, b) {
            var c = this;
            a.each(function(d) {
                d.observe(b, c.handleInputValidationEvent.bindAsEventListener(c))
            })
        },
        initDefaultAjaxReloadObservers: function(a, b) {
            var c = this;
            if (a) {
                a.each(function(d, e) {
                    if (d.hasClassName("disable-submit")) {
                        return
                    }
                    if (d.hasClassName("checkGroup")) {
                        d.observe(b, function() {
                            var h = false;
                            var r;
                            var l = d.up(".agreement-group__check-all");
                            if (l) {
                                var g = l.className.split(" ");
                                for (var m = 0; m < g.length; m++) {
                                    if (g[m].indexOf("check-all-el-") != -1) {
                                        r = g[m].substring(13)
                                    }
                                }
                                var q = r.substring(16);
                                if (q) {
                                    var s = $("aggrement-check-group-" + q);
                                    if (s) {
                                        s.setValue()
                                    }
                                }
                                if (d.type == "radio") {
                                    var o = d.getValue();
                                    if (s) {
                                        s.setValue(o)
                                    }
                                }
                                if (d.type == "checkbox") {
                                    var j = d.getValue();
                                    if (s) {
                                        if (j == null) {
                                            s.setValue("no")
                                        } else {
                                            s.setValue(j)
                                        }
                                    }
                                }
                                var f = $(r);
                                if (f) {
                                    var n = f.select("input.custom-checkbox");
                                    var k = f.select("input.custom-radio");
                                    if (o == "yes" || j == "yes") {
                                        if (n.length) {
                                            n.each(function(i) {
                                                if (i.hasClassName("process-submitter")) {
                                                    h = i
                                                }
                                                i.writeAttribute("checked", "checked");
                                                i.checked = true
                                            })
                                        }
                                        if (k.length) {
                                            k.each(function(i) {
                                                if (i.hasClassName("process-submitter")) {
                                                    h = i
                                                }
                                                if (i.id.indexOf("-yes") != -1) {
                                                    i.writeAttribute("checked", "checked");
                                                    i.checked = true
                                                }
                                                if (i.id.indexOf("-no") != -1) {
                                                    i.writeAttribute("checked", false);
                                                    i.checked = false
                                                }
                                            })
                                        }
                                    }
                                    if (o == "no") {
                                        if (n.length) {
                                            n.each(function(i) {
                                                if (i.hasClassName("process-submitter")) {
                                                    h = i
                                                }
                                                i.writeAttribute("checked", false);
                                                i.checked = false
                                            })
                                        }
                                        if (k.length) {
                                            k.each(function(i) {
                                                if (i.hasClassName("process-submitter")) {
                                                    h = i
                                                }
                                                if (i.id.indexOf("-yes") != -1) {
                                                    i.writeAttribute("checked", false);
                                                    i.checked = false
                                                }
                                                if (i.id.indexOf("-no") != -1) {
                                                    i.writeAttribute("checked", "checked");
                                                    i.checked = true
                                                }
                                            })
                                        }
                                    }
                                    if (d.type == "checkbox" && j == null) {
                                        if (n.length) {
                                            n.each(function(i) {
                                                if (i.hasClassName("process-submitter")) {
                                                    h = i
                                                }
                                                i.writeAttribute("checked", false);
                                                i.checked = false
                                            })
                                        }
                                        if (k.length) {
                                            k.each(function(i) {
                                                if (i.hasClassName("process-submitter")) {
                                                    h = i
                                                }
                                                i.writeAttribute("checked", false);
                                                i.checked = false
                                            })
                                        }
                                    }
                                    if (h) {
                                        try {
                                            h.simulate("change")
                                        } catch (p) {
                                            if (window.console) {
                                                console.log("No simulate method")
                                            }
                                        }
                                    }
                                    return false
                                }
                            }
                        });
                        return
                    }
                    d.observe(b, c.handleCustomChange.bindAsEventListener(c))
                })
            }
        },
        findKeyupSubmitInputs: function(b) {
            if (typeof b == "string") {
                container = $$(b)[0]
            } else {
                container = b
            }
            var a = [];
            if (container) {
                a = container.select("input.keyup-submit")
            }
            return a
        },
        initStepsTooltips: function(a) {
            new PTK.Tooltip("#" + a.identify() + " .step-tt-trigger", {
                width: 180,
                tooltipOrientation: "bottom-center",
                additionalClass: "ptk-tooltip-square-gray"
            })
        },
        initCurrentStepTooltip: function(a) {
            new PTK.Tooltip("#" + a.identify() + " .current-step-tt-trigger", {
                width: 180,
                tooltipOrientation: "bottom-center",
                additionalClass: "ptk-tooltip-square-gray current-step-tooltip"
            })
        },
        initOffersTooltip: function(a) {
            new PTK.Tooltip("#" + a.identify() + " .offers-tt-trigger", {
                width: 180,
                tooltipOrientation: "top-center",
                additionalClass: "offer-tooltip"
            })
        },
        initCustomRadios: function($super, a) {
            var b = a.select("input.custom-radio");
            if (!b.length) {
                return
            }
            PTK.CustomCheckboxIe8.init("radio", {
                containerSelector: "#" + a.identify()
            });
            this.initDefaultAjaxReloadObservers(b, this.detectChangeEvent())
        },
        initCustomCheckboxes: function($super, a) {
            var b = a.select("input.custom-checkbox");
            if (!b.length) {
                return
            }
            PTK.CustomCheckboxIe8.init("checkbox", {
                containerSelector: "#" + a.identify()
            });
            if (b) {
                this.initDefaultAjaxReloadObservers(b, this.detectChangeEvent())
            }
        },
        initFlexbox: function($super, a) {
            PTK.Box.init(".opl-box__wrapper")
        },
        initCustomSelects: function($super, a) {
            var b = $super(a);
            if (b) {
                this.initDefaultAjaxReloadObservers(b, "ptk:customforms:change")
            }
        },
        setCustomSelectOptions: function() {
            var a = {
                isMobile: this.options.isMobile,
                onChange: this.customSelectsChange,
                addWidthValue: 20
            };
            return a
        },
        initAgreementLength: function(a) {
            var b = a.select("select");
            if (b && b.length) {
                PTK.CustomForms.replaceSelects(b, {
                    wrapperClass: "ptk-selectbox-wrapper ptk-selectbox-wrapper--chosen",
                    addWidthValue: 20,
                    isMobile: this.options.isMobile,
                    onChange: this.customSelectsChange,
                    onListHideCallback: "PTK.WizardStatic.customSelectHideListCallback",
                    onListShowCallback: "PTK.WizardStatic.customSelectShowListCallback"
                });
                this.initDefaultAjaxReloadObservers(b, "ptk:customforms:change")
            }
        },
        initMultipackDropdown: function(a) {
            var b = a.select("select");
            if (b && b.length) {
                PTK.CustomForms.replaceSelects(b, {
                    wrapperClass: "ptk-selectbox-wrapper ptk-selectbox-wrapper--chosen",
                    addWidthValue: 20,
                    isMobile: this.options.isMobile,
                    onChange: this.customSelectsChange,
                    onListHideCallback: "PTK.WizardStatic.multipackCustomSelectHideListCallback",
                    onListShowCallback: "PTK.WizardStatic.multipackCustomSelectShowListCallback",
                    onShowCallbackOnlyForShow: "PTK.WizardStatic.multipackCustomSelectOnlyForShowListCallback"
                });
                this.initDefaultAjaxReloadObservers(b, "ptk:customforms:change")
            }
        },
        initTableSection: function(a) {
            new PTK.ColumnHighlighter(a, {
                elemToHighlight: "td:not(.spacer), th:not(.spacer)",
                excludedColumnIndexes: [0]
            });
            new PTK.ColumnChecker(a);
            var b = a.select("input:radio");
            this.initDefaultAjaxReloadObservers(b, "change")
        },
        initServicePackTableSection: function(a) {
            new PTK.ColumnServicePackChecker(a, {
                inputs: "input:checkbox"
            });
            var b = a.select("input:checkbox");
            this.initDefaultAjaxReloadObservers(b, "change")
        },
        initSafariiTableSection: function(a) {
            a.setStyle({
                marginTop: "42px",
                marginBottom: "8px"
            });
            new PTK.ColumnHighlighter(a, {
                excludedColumnIndexes: [0]
            });
            new PTK.ColumnCheckerInSafariiTable(a)
        },
        initColorChooser: function() {
            var a = $("color-chooser");
            this.hookInputCheckerRadios(a)
        },
        initPropositionSection: function(b) {
            var a = $("tariff-plan");
            new PTK.ColumnChecker(b, {
                elemToCheck: ".b-column",
                selectedClass: "opl-tariff-plan--selected",
                tableSelector: ".opl-tariff-plan__wrapper",
                rowSelector: ".opl-tariff-plan"
            });
            new PTK.ColumnHighlighter(b, {
                elemToHighlight: ".opl-tariff-plan__column",
                tableSelector: ".opl-tariff-plan__wrapper",
                rowSelector: ".opl-tariff-plan",
                highlightClass: "opl-tariff-plan--highlight"
            });
            var c = a.select("input:radio");
            this.initDefaultAjaxReloadObservers(c, "change")
        },
        initCartDetails: function() {
            var b = $("wizard-content-group");
            if (!b) {
                b = $("shipping-invoice-group")
            }
            var a = b.cumulativeOffset().top;
            PTK.PositionFixedElement.init($("cart-details-group"), {
                maxDistance: function() {
                    return b.getHeight() + a
                },
                topDistance: a
            })
        },
        isPtkDropDownExist: function() {
            if (typeof PTK == "undefined") {
                return false
            } else {
                if (typeof PTK.DropDown == "undefined") {
                    return false
                } else {
                    return true
                }
            }
        },
        initDescriptionPopups: function(a) {
            var b = a.select(".static-popup-trigger");
            this.initStaticPopups(b)
        },
        initStaticPopups: function(a) {
            a.each(function(b) {
                b.observe("click", function(d) {
                    d.stop();
                    var c = d.findElement();
                    PTK.Ajax.popupOpenStatic(c, "", "popup-fixed popup-l popup-js")
                })
            })
        },
        initColorCarousel: function(a) {
            new PTK.Infoportal.carousel(a, {
                delay: 0,
                scrollInc: 1,
                visibleElements: 4
            });
            this.hookInputCheckerRadios(a)
        },
        initColorGiftChooser: function(a) {
            this.hookInputCheckerRadios(a)
        },
        initMsisdnSection: function(b) {
            var a = this.findKeyupSubmitInputs($("opl-s2-select-number"));
            var d = this;
            a.each(function(f, g) {
                f.observe("keyup", d.handleMsisdnSectionChange.bindAsEventListener(d))
            });
            var e = b.up(".section");
            if (e) {
                var c = e.select(".ptk-show-hide-trigger");
                if (c && c.length && c[0]) {
                    if (c[0].hasClassName("on-start-hide")) {
                        new PTK.ShowHide({
                            changeText: true,
                            onStartHide: true
                        })
                    } else {
                        new PTK.ShowHide({
                            changeText: true
                        })
                    }
                }
            }
        },
        initAddGiftCheckboxes: function() {
            var a = this.moduleContainer.select("input.add-gift-checkbox");
            PTK.CustomForms.replaceCheckboxes(a);
            this.initDefaultAjaxReloadObservers(a, this.detectChangeEvent())
        },
        initInputValidation: function(b, c) {
            var a = b.select("input.js-validation");
            this.initInputValidationObservers(a, c)
        },
        initNextPage: function(a) {
            var b = $$(".wizard-next-page");
            b.each(function(c) {
                c.disabled = a
            })
        },
        initAutocompleter: function(a) {
            var b = a.select(".autocomplete-select");
            PTK.Autocompleter.replaceSelects(b)
        },
        initCityAutocompleter: function(d) {
            var b = d.select(".autocomplete-city");
            var e = d.select(".autocomplete-city-wrapper");
            var c = d.select(".post-code-1");
            var a = d.select(".post-code-2");
            if (c && a && b && e) {
                new Ajax.Autocompleter(b[0].id, e[0].id, "/gear/commerce/ajax-address-validation", {
                    minChars: 0,
                    callback: function(f) {
                        params = {};
                        params.action = "city";
                        params.zipCode = c[0].value + "-" + a[0].value;
                        params.cpt_city = b[0].value;
                        return params
                    }
                })
            }
        },
        initStreetAutocompleter: function(d) {
            var b = d.select(".autocomplete-city");
            var e = d.select(".autocomplete-street");
            var f = d.select(".autocomplete-street-wrapper");
            var c = d.select(".post-code-1");
            var a = d.select(".post-code-2");
            if (c && a && b && e && f) {
                new Ajax.Autocompleter(e[0].id, f[0].id, "/gear/commerce/ajax-address-validation", {
                    minChars: 0,
                    callback: function(g) {
                        params = {};
                        params.action = "street";
                        params.zipCode = c[0].value + "-" + a[0].value;
                        params.cpt_city = b[0].value;
                        params.cpt_street = e[0].value;
                        return params
                    }
                })
            }
        },
        initContractDraft: function(a) {
            a.on("click", "input.contract-draft-submit", this.inputContractDraftHandler.bindAsEventListener(this))
        },
        inputContractDraftHandler: function(b) {
            b.preventDefault();
            var a = b.findElement();
            this.sendProcessComponent(".agreement-process-form-part", "." + a.up("form").readAttribute("class"))
        },
        initShippingInvoiceValidation: function(a) {
            var b = this;
            this.validatedForms = [a];
            this.initValidator(a);
            this.handleShippingInvoicePartFormRefresh()
        },
        replaceSigns: function(d) {
            var b = [/\u0104/g, /\u0105/g, /\u0118/g, /\u0119/g, /\u00d3/g, /\u00f3/g, /\u0141/g, /\u0142/g, /\u0143/g, /\u0144/g, /\u0106/g, /\u0107/g, /\u015a/g, /\u015b/g, /\u0179/g, /\u017a/g, /\u017b/g, /\u017c/g, /\s/g, /[\\,/]/g, ];
            var a = ["A", "a", "E", "e", "O", "o", "L", "l", "N", "n", "C", "c", "S", "s", "Z", "z", "Z", "z", "_", "."];
            for (var c = 0; c < b.length; c++) {
                d = d.replace(b[c], a[c])
            }
            return d
        },
        initValidator: function(a) {
            var b = this;
            this.formErrors;
            this.invoiceValidation = new PTK.Validation(a, {
                container: a,
                onBlur: true,
                focusOnError: true,
                onElementValidate: function(e, d) {
                    var g = d.up(".f-row");
                    if (d.hasClassName("agreement-input")) {
                        g = d.up(".opl-table-row__wrapper")
                    }
                    if (e) {
                        g.removeClassName("f-error").addClassName("validation-passed");
                        d.removeClassName("error")
                    } else {
                        var c = g.down(".msg.error");
                        var f = $$(".comScoreParams")[0].readAttribute("data-com-score");
                        if (c) {
                            f += "&opl_ev_ac=" + d.id + "&opl_ev_as=" + b.replaceSigns(c.innerHTML.trim());
                            PTK.Comscore.comScore_makeClick(f)
                        }
                        g.addClassName("f-error").removeClassName("validation-passed");
                        d.addClassName("error")
                    }
                },
                onFormValidate: function(c, d) {
                    if (!c) {
                        PTK.Ajax.fire("parametrized-popup");
                        this.container.fire("ptk:" + a.identify() + ":validation:error")
                    }
                }
            })
        },
        handleShippingInvoicePartFormRefresh: function() {
            var a = this;
            this.moduleContainer.observe("ptk:ajax:after", function(b) {
                if (a.invoiceValidation) {
                    a.invoiceValidation.reinitialize()
                }
            })
        },
        invoiceValidation: null,
        validateOnBlurActive: false,
        submitShipingInvoiceForm: function(a) {
            var b = this;
            a.observe("click", function(d) {
                d.stop();
                var c = b.invoiceValidation.formValidation.validate();
                if (c) {
                    if (b.showAgreementsMessages()) {
                        b.sendProcessComponent()
                    }
                }
                if (!b.validateOnBlurActive) {
                    b.invoiceValidation.formValidation.validateOnBlur();
                    b.validateOnBlurActive = true
                }
                return false
            })
        },
        showAgreementsMessages: function() {
            var d = this,
                b = $$('[data-id*="agreement-"]'),
                f = b.filter(function(i) {
                    return !i.hasClassName("g-hide")
                }),
                c = $("submit-buttons-section-form-link"),
                h = $$(".no-agreement-messages");
            if (c) {
                var e = c.readAttribute("data-was-seen");
                if (e == 1 || b.length == 0) {
                    return true
                } else {
                    f.each(function(l) {
                        var j = l.readAttribute("data-id"),
                            k = $$('[data-id="' + j + '"]'),
                            i = $$('[data-id="' + j + '-validated"]');
                        if (i.length > 0) {
                            i[0].removeClassName("g-hide")
                        }
                        if (k.length > 0) {
                            k[0].addClassName("g-hide")
                        }
                    });
                    h.each(function(o) {
                        var k = o.readAttribute("name");
                        var l = (o.type).toLowerCase();
                        var j = $$('[data-id="' + k + '-yes-validated"]');
                        var n = $$('[data-id="' + k + '-no-validated"]');
                        var m = $$('[data-id*="' + k + '"]');
                        if (l === "checkbox") {
                            if (o.checked) {
                                if (j.length > 0) {
                                    j[0].removeClassName("g-hide")
                                }
                            } else {
                                if (n.length > 0) {
                                    n[0].removeClassName("g-hide")
                                }
                            }
                        } else {
                            var i = o.up(".input-group").select('[name="' + k + '"]');
                            i.each(function(r) {
                                if (r.checked) {
                                    var q = r.readAttribute("id");
                                    var p = $$('[data-id="' + q + '-validated"]');
                                    m.each(function(s) {
                                        s.addClassName("g-hide")
                                    });
                                    if (p.length > 0) {
                                        p[0].removeClassName("g-hide")
                                    }
                                    throw $break
                                } else {
                                    m.each(function(s) {
                                        s.addClassName("g-hide")
                                    });
                                    if (n.length > 0) {
                                        n[0].removeClassName("g-hide")
                                    }
                                }
                            })
                        }
                    });
                    var a = $$('[data-id*="agreement-"]:not(.g-hide)');
                    if (a.length > 0) {
                        var g = $(a[0]).identify();
                        Effect.ScrollTo(g, {
                            duration: "1",
                            offset: -50
                        })
                    } else {
                        return true
                    }
                    c.writeAttribute("data-was-seen", 1);
                    return false
                }
            }
        },
        sendProcessComponent: function(e, b) {
            var f = this;
            var d = this.getProcessComponent(e),
                c = [],
                a = d[0];
            if (d.length && d[0]) {
                if (b && $$(b)[0]) {
                    var g = d.indexOf($$(b)[0]);
                    if (g > -1) {
                        d.splice(g, 1)
                    }
                } else {
                    d.pop()
                }
                d.each(function(h, i) {
                    if (PTK.Ajax.ajaxed[h.id].v) {
                        c.push(PTK.Ajax.ajaxed[h.id].v)
                    }
                    PTK.Ajax.ajaxed[h.id].c = function(n, m, l) {
                        var k = b ? b : ".process-form-submit";
                        if (i !== d.length - 1) {
                            PTK.Ajax.submitForm(d[i + 1].id)
                        } else {
                            if (c.length) {
                                c.each(function(q, p) {
                                    var o = q.split(",");
                                    o.each(function(r) {
                                        var s = $(r + "-cover");
                                        if (s != null) {
                                            s.remove()
                                        }
                                    })
                                })
                            }
                            var j = f.moduleContainer.select(k).first();
                            if (PTK.Ajax.ajaxed[j.id]) {
                                PTK.Ajax.submitForm(j.id)
                            } else {
                                j.submit();
                                PTK.Ajax.createCover("portal-box")
                            }
                        }
                    }
                });
                this.ajaxReload(a.id)
            }
        },
        getProcessComponent: function(a) {
            return this.moduleContainer.select(a ? a : ".process-form-part")
        },
        initBaseGratis: function(a) {
            inputs = a.select("input.js-validation");
            var b = this;
            inputs.each(function(c) {
                c.observe("keyup", b.handleBaseGratisValidation.bindAsEventListener(b, a))
            })
        },
        handleBaseGratisValidation: function(d, a) {
            if (!this.ajaxIsGoing) {
                var b = d.findElement();
                PTK.FormValidation.removeError(b);
                var g = b.getValue();
                var f = false;
                if (b.hasClassName("phone-validation")) {
                    validation = PTK.FormValidation.validateMobilePhoneNumber(g);
                    if (g.length == 9) {
                        f = true
                    }
                }
                if (validation.validationFlag || g.length == 0) {
                    var e = a.select(".base-gratis-hidden")[0];
                    var c = b.form;
                    if (g.length == 0) {
                        e.setValue(false)
                    } else {
                        e.setValue(true)
                    }
                    this.ajaxReload(c.id)
                } else {
                    if (f) {
                        PTK.FormValidation.showError(b, validation.validationText)
                    }
                }
            }
        },
        initPostCodeSubmit: function(b) {
            var c = b.select(".post-code-2");
            if (c && c.length) {
                c = c.first();
                c.observe("blur", this.handlePostCodeChange.bindAsEventListener(this));
                if (this.postCodeInputId && this.postCodeInputId != "" && c.id != this.postCodeInputId) {
                    var d = $(this.postCodeInputId).up().next().select("input:text");
                    if (d && d.length) {
                        d.first().focus()
                    }
                }
                this.postCodeInputId = "";
                var a = b.select(".autocomplete-city");
                if (a && a.length && a[0]) {
                    a[0].observe("focus", function(e) {
                        this.cityInputsFocus = e.findElement().identify()
                    }.bind(this));
                    a[0].observe("blur", function(e) {
                        this.cityInputsFocus = ""
                    }.bind(this))
                }
            }
        },
        handlePostCodeChange: function(d) {
            var b = d.findElement();
            var a = b.previous(".post-code-1");
            var c = b.form;
            if (!c.hasClassName("no-auto-submit")) {
                if (c.hasClassName("chain-form-process-form-part")) {
                    this.sendChainForms(c)
                } else {
                    this.ajaxReload(c.id)
                }
                this.postCodeInputId = b.id
            } else {
                c.removeClassName("no-auto-submit")
            }
        },
        validateZipCode: function(zipCode) {
            var result = false;
            var jsondata = '{"zipCode": "' + zipCode + '"}';
            var url = "/gear/commerce/ajax?c=MapShoppingCartModifier&m=validateZipCode&p=" + jsondata;
            var myAjax = new Ajax.Request(url, {
                asynchronous: false,
                method: "get",
                onComplete: function(response) {
                    var data = "";
                    try {
                        var json_data = response.responseText;
                        eval("data = (" + json_data + ")");
                        result = data.validZipCode == "true"
                    } catch (err) {
                        result = false
                    }
                }
            });
            return result
        },
        initBlockSendSmsCode: function() {
            PTK.BlockSendSmsCode.init()
        },
        initCellsHeightAlign: function(a) {
            var g = 0,
                f = 0,
                d = null,
                e = 0,
                c = 0,
                b = a.select(".auto");
            b.each(function(j, i) {
                var k = j.getLayout(),
                    h = j.getHeight();
                if (h > g) {
                    g = h;
                    d = k
                }
            });
            e = d.get("padding-right");
            c = d.get("padding-bottom");
            b.each(function(h) {
                h.setStyle({
                    height: g + "px",
                    position: "relative"
                });
                h.select(".section-options .ptk-checkbox")[0].setStyle({
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    marginRight: e + "px",
                    marginBottom: c + "px"
                })
            })
        },
        initScrollToError: function(a) {
            this.scrollToElement(".scroll-to-error:not(.hidden)", "1", -50)
        },
        scrollToElement: function(a, b, d) {
            var c = $$(a),
                e = "";
            if (c.length > 0) {
                e = c[0].identify();
                Effect.ScrollTo(e, {
                    duration: b,
                    offset: d
                })
            }
        },
        initCountValid: function(c) {
            var a = "0";
            var b = $$(".validate-count"),
                d = this;
            if (b.length && b[0]) {
                b.each(function(f) {
                    var g = f.up("label.ptk-checkbox"),
                        e = f.readAttribute("data-validate-count");
                    if (g && e > 0 && !g.down("input.validate.validate-required")) {
                        g.down("input").addClassName("validate-required");
                        g.down("input").addClassName("validate");
                        f.up(".agreement").down("div.err").remove()
                    }
                });
                $("submit-buttons-section-form-link").observe("click", function(e) {
                    a++;
                    this.writeAttribute({
                        "data-click": a
                    });
                    b.each(function(g) {
                        var h = g.up("label.ptk-checkbox"),
                            f = g.readAttribute("data-validate-count");
                        g.writeAttribute("data-validate-count", f - 1);
                        if (a == "1") {
                            if (g.up(".ptk-checkbox") && !g.up(".ptk-checkbox").hasClassName("checked")) {
                                g.removeClassName("hidden");
                                d.scrollToElement(".validate-count:not(.hidden)", "1", -50)
                            }
                            a--
                        }
                        if (f <= 0) {
                            h.down("input").removeClassName("validate");
                            h.down("input").removeClassName("validate-required")
                        }
                    })
                })
            }
        },
        initCaptchaRewriter: function(a) {
            var c = $("hidden-captcha"),
                b = $("captcha-form");
            if (c && b) {
                b.on(this.detectChangeEvent(), "input:radio", function(e, d) {
                    if (d && d.checked) {
                        c.setValue(d.value)
                    }
                })
            }
        },
        initAgreementsObservers: function() {
            var a = $$("input.check-agreement-message"),
                b = this;
            a.each(function(f) {
                var c = f.readAttribute("name");
                var d = $$('[data-id="' + c + '-yes"]');
                var e = $$('[data-id="' + c + '-no"]');
                if (d.length == 0 || e.length == 0) {
                    f.addClassName("no-agreement-messages")
                }
                f.on(b.detectChangeEvent(), function(n, i) {
                    var h = $("submit-buttons-section-form-link");
                    if (h) {
                        h.writeAttribute("data-was-seen", 0)
                    }
                    var j = i.readAttribute("name");
                    var l = (i.type).toLowerCase();
                    var k = $$('[data-id="' + j + '-yes"]');
                    var m = $$('[data-id="' + j + '-no"]');
                    var g = $$('[data-id*="' + j + '"]');
                    g.each(function(o) {
                        o.addClassName("g-hide")
                    });
                    if (l === "checkbox") {
                        if (i.checked) {
                            if (k.length > 0 && k[0]) {
                                k[0].removeClassName("g-hide")
                            }
                        } else {
                            if (m.length > 0 && m[0]) {
                                m[0].removeClassName("g-hide")
                            }
                        }
                    } else {
                        if (l === "radio") {
                            if (i.value == 1) {
                                if (k.length > 0 && k[0]) {
                                    k[0].removeClassName("g-hide")
                                }
                            } else {
                                if (m.length > 0 && m[0]) {
                                    m[0].removeClassName("g-hide")
                                }
                            }
                        }
                    }
                })
            })
        },
        initSubmitNumberChooser: function() {
            var a = $("number-chooser-section");
            if (a) {
                a.on("click", 'form[id*="msisdn-section-form-"] .trigger', function(d, c) {
                    var b = c.next('input[type="submit"]');
                    if (b) {
                        b.click()
                    } else {
                        throw ("[PTK.Wizard - initSubmitNumberChooser] Brak elementu do kliknięcia za span.trigger")
                    }
                })
            }
        },
        initSubmitOnChange: function() {
            var a = $$("input.submit-on-change");
            var b = this;
            a.each(function(d) {
                var c = d.up("form");
                var e = c.readAttribute("id");
                d.observe(b.detectChangeEvent(), function() {
                    if (PTK.Ajax.ajaxed[e]) {
                        PTK.Ajax.submitForm(e)
                    } else {
                        c.submit();
                        PTK.Ajax.createCover("portal-box")
                    }
                })
            })
        },
        detectChangeEvent: function() {
            var a = "change";
            return a
        },
        initWizardRegulations: function(b) {
            var c = $$("#wizard-box > .l-row"),
                a = document.viewport.getDimensions().width,
                d = 0;
            if (c.length && c[0]) {
                d = -(a - c[0].getWidth()) / 2 + "px";
                b.setStyle({
                    "margin-left": d,
                    "margin-right": d
                })
            }
        },
        initPrintFormPopupObserver: function(a) {
            a.observe("click", function() {
                if (PTK.printValue != "") {
                    PTK.Invoices.printFormPopup("Umowa", 710, 880, "", PTK.printValue)
                }
                return false
            })
        },
        initSummarySection: function(a) {
            var b = $("chosen-services-amount");
            new PTK.ShowHide({
                triggerSelector: ".collapse-summary-section",
                classes: ["b-icon-before-arr-black-down", "b-icon-before-arr-black-up"],
                containerId: a.identify(),
                callback: function(e, f) {
                    if (b) {
                        if (f) {
                            b.addClassName("g-hide")
                        } else {
                            b.removeClassName("g-hide")
                        }
                    }
                }
            });
            var c = a.select(".opl-summary-collapse-cover"),
                d = a.select(".collapse-summary-section");
            if (c.length && c[0] && d.length && d[0]) {
                c[0].observe("click", function(e) {
                    d[0].fire("ptkShowHide:externalClick")
                })
            }
        }
    })
}
if (typeof PTK.WizardPopups == "undefined") {
    PTK.WizardPopups = {};
    PTK.WizardPopups = Class.create(PTK.Wizard, {
        initialize: function($super, a) {
            $super(a)
        },
        setModuleDefinitions: function($super) {
            $super();
            this.moduleDefinitions["observe-popupclose"] = {
                m: function(a) {
                    this.initObservingPopupClose(a)
                },
                dependancy: ["ptk-ajax.js"]
            }
        },
        initObservingPopupClose: function(b) {
            var a = b.up(".popup"),
                c = b.readAttribute("data-refresh-wizard-id");
            if (a) {
                a.observe("ptk:ajax:popupclose", function(e) {
                    if (a) {
                        a.stopObserving()
                    }
                    if (c && c != "") {
                        var d = c.length;
                        if (d > 16 && c.slice(d - 16, d) == "--simulate-click") {
                            $(c.slice(0, -16)).click();
                            PTK.Ajax.createCover("portal-box", false, "o-cover cover-popup")
                        } else {
                            PTK.Ajax.fire(c)
                        }
                    }
                })
            }
        }
    })
}
if (typeof PTK.Offer4you == "undefined") {
    PTK.Offer4you = {};
    PTK.elementValid = {};
    PTK.Offer4you = Class.create(PTK.Wizard, {
        initialize: function($super, a) {
            $super(a)
        },
        setModuleDefinitions: function($super) {
            $super();
            this.moduleDefinitions["active-tabs"] = {
                m: function(a) {
                    this.initActiveTabs(a)
                }
            };
            this.moduleDefinitions["validate-form"] = {
                m: function(a) {
                    this.initFormValidation(a)
                },
                dependancy: ["ptk-form-validation.js"]
            };
            this.moduleDefinitions["observe-popupclose"] = {
                m: function(a) {
                    this.initObservingPopupClose(a)
                },
                dependancy: ["ptk-ajax.js"]
            }
        },
        initFormValidation: function(a) {
            var c = this;
            var b = a.select(".validate-form");
            b.each(function(d) {
                var e = true;
                if (d.hasClassName("no-submit-validate")) {
                    e = false
                }
                PTK.elementValid[d.id] = new Validation(d, {
                    onSubmit: e,
                    onElementValidate: function(h, g) {
                        var j = g.up(".f-row");
                        if (!h) {
                            var f = j.down(".msg.error");
                            var i = "";
                            if ($$(".comScoreParams").length) {
                                i = $$(".comScoreParams")[0].readAttribute("data-com-score")
                            }
                            if (f) {
                                i += "&opl_ev_ac=" + g.id + "&opl_ev_as=" + c.replaceSigns(f.innerHTML.trim());
                                PTK.Comscore.comScore_makeClick(i)
                            }
                        }
                    }
                })
            })
        },
        initObservingPopupClose: function(c) {
            var b = c.up(".popup"),
                a = c.readAttribute("data-refresh-wizard-id");
            if (b) {
                b.observe("ptk:ajax:popupclose", function(d) {
                    if (b) {
                        b.stopObserving()
                    }
                    if (a && a != "") {
                        $(a).click()
                    }
                })
            }
        },
        initTooltips: function(a) {
            new PTK.Tooltip(".phone-box-tooltip", {
                tooltipOrientation: "top",
                relativePosition: false,
                containerOverflowH: false
            })
        },
        handleCustomChange: function(c) {
            var a = c.findElement(),
                b = a.form;
            PTK.Ajax.submitForm(b)
        },
        initActiveTabs: function(a) {
            this.tabs = a.select(".opl-tabs__tab");
            this.tabContentToShow = {};
            this.tabContentToHide = {};
            this.tabActiveClassName = "opl-tabs__tab--active";
            this.activeTab = a.select("." + this.tabActiveClassName);
            if (this.activeTab.length && this.activeTab[0]) {
                this.activeTab = this.activeTab[0]
            }
            if (this.tabs.length) {
                this.tabs.each(function(d) {
                    var e = d.identify(),
                        c = d.readAttribute("data-to-hide"),
                        b = d.readAttribute("data-to-show");
                    this.tabContentToHide[e] = this.findTabsContent(c);
                    this.tabContentToShow[e] = this.findTabsContent(b);
                    d.observe("click", this.activeTabHandler.bind(this))
                }.bind(this))
            }
        },
        activeTabHandler: function(b) {
            b.preventDefault();
            var a = b.findElement("li"),
                c = a.identify();
            if (this.activeTab) {
                this.activeTab.removeClassName(this.tabActiveClassName)
            }
            this.activeTab = a;
            this.activeTab.addClassName(this.tabActiveClassName);
            this.tabContentToHide[c].invoke("addClassName", "g-hide");
            this.tabContentToShow[c].invoke("removeClassName", "g-hide")
        },
        findTabsContent: function(c) {
            var a = c.split(","),
                b = [];
            a.each(function(d) {
                var e = $$(d);
                e.each(function(f) {
                    if (f) {
                        b.push(f)
                    }
                })
            });
            return b
        },
        initCustomRadios: function($super, a) {
            var b = a.select("input.custom-radio");
            if (!b.length) {
                return
            }
            PTK.CustomCheckboxIe8.init("radio", {
                containerSelector: "#" + a.identify()
            });
            this.initRadioAjaxReloadObservers(b, this.detectChangeEvent())
        },
        initRadioAjaxReloadObservers: function(a, b) {
            var c = this;
            if (a) {
                a.each(function(d, e) {
                    if (d.hasClassName("disable-submit")) {
                        return
                    }
                    if (!d.hasClassName("initialize")) {
                        d.addClassName("initialize");
                        d.observe(b, c.handleCustomChange.bindAsEventListener(c))
                    }
                })
            }
        },
    })
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.ColumnChecker == "undefined") {
    PTK.ColumnChecker = {};
    PTK.ColumnChecker = Class.create({
        initialize: function(d, c) {
            var b = this;
            var a;
            if (typeof d == "string") {
                a = $$(d)[0]
            } else {
                a = d
            }
            if (!a) {
                throw ("Nie ma contenera takiego kontenera")
            }
            this.container = a;
            this.tablesId = [];
            this.selectedIndex = -1;
            this.popup = null;
            this.options = {};
            this.defaults = {
                elemToCheck: "td, th",
                inputs: "input:radio",
                callback: null,
                onlySelectColumn: true,
                selectedClass: "selected",
                tableSelector: "table",
                rowSelector: "tr"
            };
            this.options = Object.extend(this.defaults, c);
            this.cachedRows = this.findRowsInContainer();
            this.indexOfInputs = {};
            this.container.on("click", this.options.elemToCheck, this.selectInput.bindAsEventListener(this));
            this.container.on("change", this.options.inputs, this.inputChangingHandler.bindAsEventListener(this));
            this.handleNestedTables();
            this.setHeight();
            this.initCheckedInputs()
        },
        setHeight: function() {
            var b = 0,
                a = $$('#wizard-content-grouped-services table[id^="services-pack-table-"] tr.table-row:not(.delete-footer, .top-row)');
            if (a) {
                a.each(function(c) {
                    var d = c.childElements("td");
                    d.each(function(f) {
                        var e = f.getHeight();
                        b = e > b ? e : b
                    });
                    d.each(function(e) {
                        e.setStyle({
                            height: b + "px"
                        })
                    })
                })
            }
        },
        handleNestedTables: function() {
            var a = this,
                c = [],
                d = [],
                b = [];
            this.tablesId.each(function(e) {
                a.cachedRows[e].each(function(h, g) {
                    var f = h.select("> td[data-rowspan]");
                    f.each(function(k) {
                        var n = parseInt(k.readAttribute("data-rowspan")),
                            q = k.select(".imageHeader"),
                            m = k.select(".imageHolder");
                        if (m.length > 0) {
                            var p = k.getLayout().get("height");
                            m[0].setStyle({
                                height: p + "px"
                            })
                        }
                        var j = 0;
                        for (var l = 0; l < n; l++) {
                            var o = a.cachedRows[e][g + l];
                            j = j + (o.select("th:first-child")[0].getHeight())
                        }
                        if (q.length > 0) {
                            q[0].setStyle({
                                height: j + "px"
                            })
                        }
                    })
                })
            });
            d.each(function(e, f) {
                if (e.getHeight() > c[f]) {
                    c[f] = e.getHeight();
                    b[f].setStyle({
                        height: c[f] + "px"
                    })
                } else {
                    e.setStyle({
                        height: c[f] + "px"
                    })
                }
            })
        },
        findRowsInContainer: function() {
            var a = this;
            if (this.container.nodeName == "TABLE") {
                this.tablesId.push(this.container.id)
            } else {
                var b = this.container.select(this.options.tableSelector);
                b.each(function(d) {
                    a.tablesId.push(d.identify())
                })
            }
            var c = [];
            this.tablesId.each(function(d) {
                c[d] = $(d).select(a.options.rowSelector + ":not(.nestedRow)")
            });
            return c
        },
        selectInput: function(b) {
            var c = b.findElement();
            if (c.nodeName != "INPUT") {
                var a = this.options.elemToCheck;
                var g = b.findElement(a);
                var d = g.up(this.options.rowSelector);
                var e = (d.select(a)).indexOf(g);
                this.setCurrentIndex(e);
                var f = g.up(this.options.tableSelector);
                var h = this;
                var i = false;
                this.cachedRows[f.id].each(function(l) {
                    if (i) {
                        return false
                    }
                    var k = l.select(a)[e];
                    var j = k.select(h.options.inputs).first();
                    if (j) {
                        j.simulate("click").addClassName("simulated-click");
                        i = true
                    }
                })
            }
        },
        inputChangingHandler: function(d) {
            var c = d.findElement();
            var a = c.identify();
            var b = this.cacheIndexes(c);
            this.chooseMethodToSelectTableColumn(c);
            if (Object.isFunction(this.options.callback)) {
                this.options.callback(c)
            }
            d.stop()
        },
        initCheckedInputs: function() {
            var a = this.options.inputs.replace(/ +/g, "").split(",");
            var b = this;
            a.each(function(c) {
                b.container.select(c + ":checked").each(function(d) {
                    var e = d.up(b.options.elemToCheck);
                    b.setCurrentIndex(e.previousSiblings().length, true);
                    b.chooseMethodToSelectTableColumn(d)
                })
            })
        },
        setCurrentIndex: function(a, b) {
            if (typeof a != "undefined" && a != null) {
                this.previousIndex = (b) ? a : this.selectedIndex;
                this.selectedIndex = a
            }
        },
        chooseMethodToSelectTableColumn: function(a) {
            if (this.options.onlySelectColumn) {
                this.selectTableColumn(a)
            } else {
                this.smartInsertOfTableColumnPopup(a)
            }
        },
        selectTableColumn: function(a) {
            var d = a.up(this.options.tableSelector),
                c = d.id,
                b = this;
            this.cachedRows[c].each(function(g, e) {
                var h = (b.previousIndex > -1) ? g.select(b.options.elemToCheck)[b.previousIndex] : null,
                    f = (b.selectedIndex > -1) ? g.select(b.options.elemToCheck)[b.selectedIndex] : null;
                if (h) {
                    h.removeClassName(b.options.selectedClass)
                }
                if (f) {
                    f.addClassName(b.options.selectedClass)
                }
            })
        },
        smartInsertOfTableColumnPopup: function(d) {
            var j = d.up(this.options.tableSelector),
                e = this.setElementId(j, d),
                c = $(e);
            if (!c) {
                c = new Element("div", {
                    "class": "table-column-popup",
                    id: e
                });
                j.up().insert({
                    bottom: c
                })
            }
            var f = new Element("table", {
                "class": j.readAttribute("class")
            });
            var h = new Element("tbody");
            var k = this;
            this.cachedRows[j.id].each(function(r, n) {
                var q = r.select(k.options.elemToCheck)[k.selectedIndex];
                var o = q.offsetHeight;
                var p = q.clone(true).setStyle({
                    height: o + "px"
                });
                k.newCopiedInputs(p);
                var m = new Element("tr", {
                    "class": r.readAttribute("class")
                }).update(p);
                h.insert({
                    bottom: m
                });
                if (n == 0) {
                    c.setStyle({
                        width: q.getWidth() + "px",
                        left: q.positionedOffset().left + "px"
                    })
                }
            });
            f.update(h);
            c.update(f);
            this.popup = c;
            if ($$(".holder-addRemoveInput") != "undeifned") {
                var g = $("wizard-content-commitment-form"),
                    b = d.up("table").id + "-selected-column-popup",
                    a = $(b),
                    l = g.select(".holder-addRemoveInput");
                l.each(function(m) {
                    m.down("a").writeAttribute("id", m.down("a").id + "-copied")
                });
                if (a) {
                    var i = a.select(".link-addRemoveInput");
                    i.each(function(m) {
                        m.writeAttribute("id", m.id.slice(0, -7));
                        m.on("click", function(n) {
                            linkToclick = $(m);
                            if (linkToclick) {
                                PTK.Ajax.clickLink(linkToclick)
                            }
                            n.stop()
                        })
                    })
                }
            }
        },
        newCopiedInputs: function(a) {
            copiedInputs = a.select("input");
            copiedInputs.each(function(b) {
                b.remove()
            })
        },
        setElementId: function(b, a) {
            return b.id + "-selected-column-popup"
        },
        cacheIndexes: function(b) {
            var a = b.identify();
            if (!this.indexOfInputs[a]) {
                this.indexOfInputs[a] = b.up(this.options.elemToCheck).previousSiblings().length
            }
            return this.indexOfInputs[a]
        }
    })
}
if (typeof PTK.ColumnCheckerInSafariiTable == "undefined") {
    PTK.ColumnCheckerInSafariiTable = {};
    PTK.ColumnCheckerInSafariiTable = Class.create(PTK.ColumnChecker, {
        initialize: function($super, a, b) {
            this.defaults = {
                mainSubmitSelector: ".main-submit",
                increaseSubmitSelector: ".increase-submit",
                decreaseSubmitSelector: ".decrease-submit",
                onlySelectColumn: false
            };
            this.options = Object.extend(this.defaults, b);
            $super(a, this.options);
            this.mainSubmit = this.container.select(this.options.mainSubmitSelector).first();
            if (this.mainSubmit) {
                this.container.on("click", this.options.inputs, this.inputClickHandler.bindAsEventListener(this));
                var c = this.container.select("form");
                if (c.length) {
                    c.first().addClassName("no-auto-submit")
                }
            }
        },
        smartInsertOfTableColumnPopup: function($super, b) {
            $super(b);
            if (!this.increaseSubmit) {
                this.increaseSubmit = this.container.select(this.options.increaseSubmitSelector).first()
            }
            if (!this.decreaseSubmit) {
                this.decreaseSubmit = this.container.select(this.options.decreaseSubmitSelector).first()
            }
            if (this.popup && (this.increaseSubmit || this.decreaseSubmit)) {
                var a = new Element("div", {
                    "class": "buttons-container"
                });
                this.popup.insert({
                    top: a
                });
                if (this.decreaseSubmit) {
                    this.createPopupSubmitButton("decrease", a, this.decreaseSubmit)
                }
                if (this.increaseSubmit) {
                    this.createPopupSubmitButton("increase", a, this.increaseSubmit)
                }
            }
        },
        inputClickHandler: function(a) {
            if (!a.findElement().hasClassName("simulated-click")) {
                this.mainSubmit.click()
            }
        },
        createPopupSubmitButton: function(d, a, c) {
            var b = new Element("a", {
                "class": "submit-button " + d,
                href: ""
            });
            a.insert({
                bottom: b
            });
            b.observe("click", function(e) {
                e.stop();
                c.click()
            })
        }
    })
}
if (typeof PTK.ColumnServicePackChecker == "undefined") {
    PTK.ColumnServicePackChecker = {};
    PTK.ColumnServicePackChecker = Class.create(PTK.ColumnChecker, {
        initialize: function($super, a, b) {
            this.defaults = {
                onlySelectColumn: false
            };
            this.options = Object.extend(this.defaults, b);
            $super(a, this.options);
            PTK.PopupColumnChecker.removeAllQuestionDetails()
        },
        selectInput: function(b) {
            var c = b.findElement();
            if (c.nodeName == "LABEL" && c.hasClassName("delete-input")) {
                b.preventDefault();
                this.removeInput(c)
            } else {
                if (c.hasClassName("protect-mark")) {
                    return false
                } else {
                    if (c.nodeName != "INPUT" && c.nodeName != "IMG") {
                        if ($("restricted-count")) {
                            $("restricted-count").click()
                        }
                        var a = this.options.elemToCheck;
                        var g = b.findElement(a);
                        var d = g.up("tr");
                        var e = (d.select(a)).indexOf(g);
                        this.setCurrentIndex(e);
                        var f = g.up("table");
                        var h = this;
                        var i = false;
                        if (this.cachedRows[f.id] != undefined) {
                            this.cachedRows[f.id].each(function(l) {
                                if (i) {
                                    return false
                                }
                                var k = l.select(a)[e];
                                var j = k.select(h.options.inputs).first();
                                if (j) {
                                    j.simulate("click").addClassName("simulated-click");
                                    i = true
                                }
                            })
                        }
                    }
                }
            }
        },
        removeInput: function(b) {
            var a = b.readAttribute("for"),
                c = a.slice(23);
            $(a).checked = true;
            $(c + "-selected-column-popup").remove();
            $(c).simulate("click").removeClassName("simulated-click");
            $(c).checked = false
        },
        inputChangingHandler: function(d) {
            var c = d.findElement();
            PTK.PopupColumnChecker.removeAllQuestionDetails();
            if (c.checked) {
                var a = c.identify();
                var b = this.cacheIndexes(c);
                this.chooseMethodToSelectTableColumn(c);
                if (Object.isFunction(this.options.callback)) {
                    this.options.callback(c)
                }
            }
            d.stop()
        },
        newCopiedInputs: function(a) {
            copiedInputs = a.select("input");
            copiedInputs.each(function(b) {
                b.remove()
            })
        },
        setElementId: function(b, a) {
            return a.id + "-selected-column-popup"
        },
    })
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.ColumnHighlighter == "undefined") {
    PTK.ColumnHighlighter = {};
    PTK.ColumnHighlighter = Class.create({
        initialize: function(d, c) {
            var b = this;
            var a;
            if (typeof d == "string") {
                a = $$(d)[0]
            } else {
                a = d
            }
            if (!a) {
                throw ("Nie ma contenera takiego kontenera")
            }
            this.container = a;
            this.options = {};
            this.defaults = {
                elemToHighlight: "td, th",
                inputs: "input:radio, input:checkbox",
                excludedColumnIndexes: [],
                tableSelector: "table",
                rowSelector: "tr",
                highlightClass: "highlight"
            };
            this.options = Object.extend(this.defaults, c);
            this.cachedRows = this.findRowsInContainer();
            this.container.on("mouseover", this.options.elemToHighlight, this.highlightColumnHandler.bindAsEventListener(this, true));
            this.container.on("mouseout", this.options.elemToHighlight, this.highlightColumnHandler.bindAsEventListener(this, false))
        },
        highlightColumnHandler: function(a, e) {
            var f = this.options.elemToHighlight;
            var c = a.findElement(f);
            var d = c.up(this.options.rowSelector);
            var i = (d.select(f)).indexOf(c);
            var b = true;
            if (this.options.excludedColumnIndexes.length > 0) {
                this.options.excludedColumnIndexes.each(function(j) {
                    if (i == j) {
                        b = false
                    }
                })
            }
            if (b) {
                var h = c.up(this.options.tableSelector),
                    g = this;
                if (this.cachedRows[h.id]) {
                    this.cachedRows[h.id].each(function(j) {
                        var k = j.select(f)[i];
                        if (e) {
                            k.addClassName(g.options.highlightClass)
                        } else {
                            k.removeClassName(g.options.highlightClass)
                        }
                    })
                }
            }
            a.stop()
        },
        findRowsInContainer: function() {
            var d = [],
                a = this;
            if (this.container.nodeName == "TABLE") {
                d.push(this.container.id)
            } else {
                var b = this.container.select(this.options.tableSelector);
                b.each(function(e) {
                    d.push(e.identify())
                })
            }
            var c = [];
            d.each(function(e) {
                c[e] = $(e).select(a.options.rowSelector)
            });
            return c
        }
    })
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.InputChecker == "undefined") {
    PTK.InputChecker = {};
    PTK.InputChecker = Class.create({
        initialize: function(d, c) {
            var b = this;
            var a;
            if (typeof d == "string") {
                a = $$(d)[0]
            } else {
                a = d
            }
            if (!a) {
                throw ("Nie ma contenera takiego kontenera")
            }
            this.container = a;
            this.options = {};
            this.defaults = {
                clickableElementClass: ".js-inputcheck",
                inputs: "input:radio, input:checkbox",
                callback: null
            };
            this.options = Object.extend(this.defaults, c);
            this.initCheckedInputs();
            this.container.on("click", this.options.clickableElementClass, this.elementClickHandler.bindAsEventListener(this));
            this.container.on("change", this.options.inputs, this.inputChangingHandler.bindAsEventListener(this))
        },
        elementClickHandler: function(d) {
            var b = d.findElement();
            if (b.nodeName != "INPUT") {
                var c = d.findElement(this.options.clickableElementClass);
                var a = c.select(this.options.inputs).first();
                a.simulate("click")
            }
        },
        inputChangingHandler: function(e) {
            var b = e.findElement();
            var d = this.options.clickableElementClass;
            var a = b.up(d);
            if (b.checked) {
                a.addClassName("js-inputcheck-selected")
            } else {
                a.removeClassName("js-inputcheck-selected")
            }
            if (b.type == "radio") {
                var c = b.name;
                var f = this.container.select("input:radio[name=" + c + "]");
                f.each(function(g) {
                    if (!g.checked) {
                        g.up(d).removeClassName("js-inputcheck-selected")
                    }
                })
            }
            if (this.options.callback && typeof this.options.callback == "function") {
                this.options.callback(b)
            }
            e.stop()
        },
        initCheckedInputs: function() {
            var a = this.options.inputs.replace(/ +/g, "").split(",");
            var b = this;
            a.each(function(c) {
                b.container.select(c + ":checked").each(function(d) {
                    var e = d.up(b.options.clickableElementClass);
                    e.addClassName("js-inputcheck-selected")
                })
            })
        }
    })
};