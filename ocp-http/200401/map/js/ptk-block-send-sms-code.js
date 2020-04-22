var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.BlockSendSmsCode == "undefined") {
    PTK.BlockSendSmsCode = {
        init: function(g, c, b, f, d, h) {
            this.buttonsContainerId = "sms-confirm-popup-buttons-to-disable";
            this.activeButtonSelector = ".active-button";
            this.disabledButtonSelector = ".disabled-button";
            this.textInputId = "sms-input-to-check";
            this.inputsTypeSelectors = "";
            this.textInput = null;
            this.filledInputsCounter = 0;
            this.externalValidateClass = "externalValidate";
            this.msisdnInputId = h;
            if (d) {
                this.blockingFormClass = d
            }
            if (c) {
                this.buttonsContainerId = c
            }
            this.buttonsContainer = $(this.buttonsContainerId);
            if (b != null && f != null) {
                this.inputsTypeSelectors = f;
                if ($$(b).length > 0) {
                    this.container = $$(b).first()
                } else {
                    throw ("PTK.BlockSendSmsCode: brak kontenera")
                }
                this.inputs = this.container.select(this.inputsTypeSelectors);
                if (this.inputs.length > 0) {
                    var i = this;
                    if (this.inputsTypeSelectors.indexOf("text") > -1) {
                        this.setTextInputHandlers(this.container, "input:text")
                    }
                    if (this.inputsTypeSelectors.indexOf("password")) {
                        this.setTextInputHandlers(this.container, "input:password")
                    }
                    if (this.inputsTypeSelectors.indexOf("checkbox") > -1) {
                        this.container.on("ptk:customforms:change", "input.ptk-hidden-checkbox:checkbox", this.checkboxHandler.bindAsEventListener(this));
                        this.container.on("change", "input:not(.ptk-hidden-checkbox):checkbox", this.checkboxHandler.bindAsEventListener(this))
                    }
                    if (this.inputsTypeSelectors.indexOf("radio") > -1) {
                        this.radioNames = {};
                        this.inputs.each(function(j) {
                            if (j.type == "radio") {
                                if (i.radioNames[j.name]) {
                                    i.radioNames[j.name]["count"]++
                                } else {
                                    i.radioNames[j.name] = {};
                                    i.radioNames[j.name]["count"] = 1
                                }
                                if (!i.radioNames[j.name]["radios"]) {
                                    i.radioNames[j.name]["radios"] = []
                                }
                                i.radioNames[j.name]["radios"].push(j)
                            }
                        });
                        for (var a in this.radioNames) {
                            this.radioNames[a]["customHandler"] = this.container.on("ptk:customforms:change", 'input.ptk-hidden-checkbox:radio[name="' + a + '"]', this.radioHandler.bindAsEventListener(this));
                            this.radioNames[a]["handler"] = this.container.on("change", 'input:not(.ptk-hidden-checkbox):radio[name="' + a + '"]', this.radioHandler.bindAsEventListener(this))
                        }
                    }
                    this.inputs.each(function(j) {
                        if (j.type == "text" || j.type == "password") {
                            i.textInputHandler(null, j)
                        }
                        if (j.type == "radio") {
                            i.radioHandler(null, j)
                        }
                        if (j.type == "checkbox") {
                            i.checkboxHandler(null, j)
                        }
                    })
                }
            } else {
                if (g) {
                    this.textInputId = g
                }
                var e = $(this.textInputId);
                if (e) {
                    this.textInput = e;
                    this.setTextInputHandlers(this.textInput, false);
                    this.inputs = [this.textInput];
                    this.textInputHandler(null, this.textInput)
                }
            }
        },
        radioHandler: function(f, b) {
            var h = null,
                c = "",
                e = null,
                a = this;
            if (f == null) {
                if (b) {
                    h = b
                }
            } else {
                if (f == "change") {
                    h = f.findElement()
                } else {
                    var g = f.memo;
                    h = g.input
                }
            }
            c = h.name;
            e = h.up("form");
            var d = 0;
            this.radioNames[c]["radios"].each(function(i) {
                if (i.checked) {
                    if (i.checked && i == h) {
                        a.filledInputsCounter = a.filledInputsCounter + a.radioNames[c]["count"];
                        if (a.radioNames[c]["customHandler"] != null) {
                            a.radioNames[c]["customHandler"].stop();
                            a.radioNames[c]["customHandler"] = null
                        }
                        if (a.radioNames[c]["handler"] != null) {
                            a.radioNames[c]["handler"].stop();
                            a.radioNames[c]["handler"] = null
                        }
                        a.blockUnblockInput(e)
                    }
                } else {
                    d++
                }
            });
            if (f == null && (d == this.radioNames[c]["radios"].length)) {
                this.buttonsContainer.addClassName("start")
            }
        },
        checkboxHandler: function(c, a) {
            var e = null,
                b = null;
            if (c == null) {
                if (a) {
                    e = a
                }
            } else {
                if (c == "change") {
                    e = c.findElement()
                } else {
                    var d = c.memo;
                    e = d.input
                }
            }
            b = e.up("form");
            if (e.checked) {
                this.filledInputsCounter++
            } else {
                if (c == null) {
                    this.buttonsContainer.addClassName("start")
                }
                if (this.filledInputsCounter > 0) {
                    this.filledInputsCounter--
                }
            }
            this.blockUnblockInput(b)
        },
        executeFunctionByName: function(f, c) {
            if (!f) {
                return -1
            }
            var a = [].slice.call(arguments).splice(2);
            var e = f.split(".");
            var d = e.pop();
            for (var b = 0; b < e.length; b++) {
                c = c[e[b]]
            }
            if (typeof c[d] === "function") {
                return c[d].apply(this, a)
            } else {
                return -1
            }
        },
        textInputHandler: function(h, c) {
            var e = null,
                g = null;
            if (h == null) {
                if (c) {
                    e = c
                }
            } else {
                e = h.findElement()
            }
            if (e.nodeName == "INPUT") {
                g = e.up("form");
                var a = e.getValue(),
                    d = a;
                var b = e.readAttribute("data-validation");
                var f = PTK.BlockSendSmsCode.executeFunctionByName(b, window, arguments);
                if (f != -1) {
                    if (f) {
                        d.trim();
                        if (!e.hasClassName("was-checked") && d.length > 0) {
                            this.filledInputsCounter++;
                            e.addClassName("was-checked").removeClassName("empty")
                        }
                    } else {
                        if (h == null) {
                            this.buttonsContainer.addClassName("start");
                            e.addClassName("empty")
                        }
                        if (this.filledInputsCounter > 0 && !e.hasClassName("empty")) {
                            this.filledInputsCounter--;
                            e.removeClassName("was-checked").addClassName("empty")
                        }
                    }
                } else {
                    if (a.length > 0) {
                        d.trim();
                        if (!e.hasClassName("was-checked") && d.length > 0) {
                            this.filledInputsCounter++;
                            e.addClassName("was-checked").removeClassName("empty")
                        }
                    } else {
                        if (h == null) {
                            this.buttonsContainer.addClassName("start");
                            e.addClassName("empty")
                        }
                        if (this.filledInputsCounter > 0 && !e.hasClassName("empty")) {
                            this.filledInputsCounter--;
                            e.removeClassName("was-checked").addClassName("empty")
                        }
                    }
                }
                if (!e.hasClassName(this.externalValidateClass) && !e.hasClassName("input-error")) {
                    this.blockUnblockInput(g)
                }
            }
        },
        takeCareOfButtons: function(a) {
            if (this.buttonsContainer) {
                if (a == "block") {
                    this.buttonsContainer.removeClassName("show-active")
                } else {
                    if (a == "unblock") {
                        this.buttonsContainer.addClassName("show-active").removeClassName("start")
                    }
                }
            }
        },
        offFormSubmit: function(a) {
            if (!a.hasClassName("submit-stop")) {
                a.addClassName("submit-stop");
                a.observe("submit", this.stopFormSubmit)
            }
        },
        onFormSubmit: function(a) {
            a.removeClassName("submit-stop");
            a.stopObserving("submit", this.stopFormSubmit);
            this.setAjaxedMeta("true", a)
        },
        stopFormSubmit: function(b) {
            Event.stop(b);
            var a = b.findElement();
            PTK.BlockSendSmsCode.setAjaxedMeta("false", a)
        },
        setAjaxedMeta: function(a, c) {
            var b = PTK.Ajax.ajaxed[c.id];
            if (b) {
                b.b = a
            }
        },
        blockUnblockInput: function(b, c, d) {
            var a = "block";
            if (this.inputs.length == this.filledInputsCounter && !c) {
                a = "unblock";
                this.onFormSubmit(b)
            } else {
                if (!c) {
                    this.offFormSubmit(b)
                }
            }
            if (c) {
                if (d == "block") {
                    this.offFormSubmit(b);
                    a = d
                } else {
                    if (d == "unblock") {
                        this.onFormSubmit(b);
                        a = d
                    }
                }
            }
            this.takeCareOfButtons(a)
        },
        setTextInputHandlers: function(b, a) {
            if (a) {
                if (!Prototype.Browser.IE && this.isEventSupported("input", "input")) {
                    b.on("input", a, this.textInputHandler.bindAsEventListener(this))
                } else {
                    b.on("keyup", a, this.textInputHandler.bindAsEventListener(this));
                    b.on("mouseup", a, this.textInputHandler.bindAsEventListener(this));
                    b.on("focusout", a, this.textInputHandler.bindAsEventListener(this))
                }
            } else {
                if (!Prototype.Browser.IE && this.isEventSupported("input", "input")) {
                    b.on("input", this.textInputHandler.bindAsEventListener(this))
                } else {
                    b.on("keyup", this.textInputHandler.bindAsEventListener(this));
                    b.on("mouseup", this.textInputHandler.bindAsEventListener(this));
                    b.on("focusout", this.textInputHandler.bindAsEventListener(this))
                }
            }
        },
        isEventSupported: function(a, b) {
            var d = document.createElement(b);
            a = "on" + a;
            var c = (a in d);
            if (!c) {
                d.setAttribute(a, "return;");
                c = typeof d[a] == "function"
            }
            d = null;
            return c
        }
    }
}
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/gm, "")
    }
};