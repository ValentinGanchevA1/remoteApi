/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

/*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
 * https://github.com/jzaefferer/jquery-validation
 * Copyright (c) 2012 JÃ¶rn Zaefferer; Licensed MIT, GPL */

(function(e, t) {
    typeof exports == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define("lib/spin", t) : e.Spinner = t()
})(this, function() {
    function r(e, t) {
        var n = document.createElement(e || "div"),
            r;
        for (r in t) n[r] = t[r];
        return n
    }

    function i(e) {
        for (var t = 1, n = arguments.length; t < n; t++) e.appendChild(arguments[t]);
        return e
    }

    function o(e, r, i, o) {
        var u = ["opacity", r, ~~(e * 100), i, o].join("-"),
            a = .01 + i / o * 100,
            f = Math.max(1 - (1 - e) / r * (100 - a), e),
            l = n.substring(0, n.indexOf("Animation")).toLowerCase(),
            c = l && "-" + l + "-" || "";
        return t[u] || (s.insertRule("@" + c + "keyframes " + u + "{" + "0%{opacity:" + f + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + r) % 100 + "%{opacity:" + e + "}" + "100%{opacity:" + f + "}" + "}", s.cssRules.length), t[u] = 1), u
    }

    function u(t, n) {
        var r = t.style,
            i, s;
        n = n.charAt(0).toUpperCase() + n.slice(1);
        for (s = 0; s < e.length; s++) {
            i = e[s] + n;
            if (r[i] !== undefined) return i
        }
        if (r[n] !== undefined) return n
    }

    function a(e, t) {
        for (var n in t) e.style[u(e, n) || n] = t[n];
        return e
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) e[r] === undefined && (e[r] = n[r])
        }
        return e
    }

    function l(e) {
        var t = {
            x: e.offsetLeft,
            y: e.offsetTop
        };
        while (e = e.offsetParent) t.x += e.offsetLeft, t.y += e.offsetTop;
        return t
    }

    function c(e, t) {
        return typeof e == "string" ? e : e[t % e.length]
    }

    function p(e) {
        if (typeof this == "undefined") return new p(e);
        this.opts = f(e || {}, p.defaults, h)
    }

    function d() {
        function e(e, t) {
            return r("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
        }
        s.addRule(".spin-vml", "behavior:url(#default#VML)"), p.prototype.lines = function(t, n) {
            function o() {
                return a(e("group", {
                    coordsize: s + " " + s,
                    coordorigin: -r + " " + -r
                }), {
                    width: s,
                    height: s
                })
            }

            function h(t, s, u) {
                i(f, i(a(o(), {
                    rotation: 360 / n.lines * t + "deg",
                    left: ~~s
                }), i(a(e("roundrect", {
                    arcsize: n.corners
                }), {
                    width: r,
                    height: n.width,
                    left: n.radius,
                    top: -n.width >> 1,
                    filter: u
                }), e("fill", {
                    color: c(n.color, t),
                    opacity: n.opacity
                }), e("stroke", {
                    opacity: 0
                }))))
            }
            var r = n.length + n.width,
                s = 2 * r,
                u = -(n.width + n.length) * 2 + "px",
                f = a(o(), {
                    position: "absolute",
                    top: u,
                    left: u
                }),
                l;
            if (n.shadow)
                for (l = 1; l <= n.lines; l++) h(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; l <= n.lines; l++) h(l);
            return i(t, f)
        }, p.prototype.opacity = function(e, t, n, r) {
            var i = e.firstChild;
            r = r.shadow && r.lines || 0, i && t + r < i.childNodes.length && (i = i.childNodes[t + r], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n))
        }
    }
    var e = ["webkit", "Moz", "ms", "O"],
        t = {},
        n, s = function() {
            var e = r("style", {
                type: "text/css"
            });
            return i(document.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
        }(),
        h = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto",
            position: "relative"
        };
    p.defaults = {}, f(p.prototype, {
        spin: function(e) {
            this.stop();
            var t = this,
                i = t.opts,
                s = t.el = a(r(0, {
                    className: i.className
                }), {
                    position: i.position,
                    width: 0,
                    zIndex: i.zIndex
                }),
                o = i.radius + i.length + i.width,
                u, f;
            e && (e.insertBefore(s, e.firstChild || null), f = l(e), u = l(s), a(s, {
                left: (i.left == "auto" ? f.x - u.x + (e.offsetWidth >> 1) : parseInt(i.left, 10) + o) + "px",
                top: (i.top == "auto" ? f.y - u.y + (e.offsetHeight >> 1) : parseInt(i.top, 10) + o) + "px"
            })), s.setAttribute("role", "progressbar"), t.lines(s, t.opts);
            if (!n) {
                var c = 0,
                    h = (i.lines - 1) * (1 - i.direction) / 2,
                    p, d = i.fps,
                    v = d / i.speed,
                    m = (1 - i.opacity) / (v * i.trail / 100),
                    g = v / i.lines;
                (function y() {
                    c++;
                    for (var e = 0; e < i.lines; e++) p = Math.max(1 - (c + (i.lines - e) * g) % v * m, i.opacity), t.opacity(s, e * i.direction + h, p, i);
                    t.timeout = t.el && setTimeout(y, ~~(1e3 / d))
                })()
            }
            return t
        },
        stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = undefined), this
        },
        lines: function(e, t) {
            function l(e, n) {
                return a(r(), {
                    position: "absolute",
                    width: t.length + t.width + "px",
                    height: t.width + "px",
                    background: e,
                    boxShadow: n,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / t.lines * s + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)",
                    borderRadius: (t.corners * t.width >> 1) + "px"
                })
            }
            var s = 0,
                u = (t.lines - 1) * (1 - t.direction) / 2,
                f;
            for (; s < t.lines; s++) f = a(r(), {
                position: "absolute",
                top: 1 + ~(t.width / 2) + "px",
                transform: t.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: t.opacity,
                animation: n && o(t.opacity, t.trail, u + s * t.direction, t.lines) + " " + 1 / t.speed + "s linear infinite"
            }), t.shadow && i(f, a(l("#000", "0 0 4px #000"), {
                top: "2px"
            })), i(e, i(f, l(c(t.color, s), "0 0 1px rgba(0,0,0,.1)")));
            return e
        },
        opacity: function(e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }
    });
    var v = a(r("group"), {
        behavior: "url(#default#VML)"
    });
    return !u(v, "transform") && v.adj ? d() : n = u(v, "animation"), p
}), define("common/progress", ["require", "adapter/dom", "adapter/enumerable", "lib/spin", "adapter/jsClass"], function(e) {
        var t = e("adapter/dom"),
            n = e("adapter/enumerable"),
            r = e("lib/spin"),
            i = e("adapter/jsClass"),
            s = i.Class({
                constructor: function(e) {
                    var t = {
                        lines: 13,
                        length: 5,
                        width: 4,
                        radius: 9,
                        corners: 1,
                        rotate: 0,
                        color: "#f16e00",
                        speed: 1,
                        trail: 60,
                        shadow: !1,
                        hwaccel: !0,
                        className: "spinner",
                        zIndex: 499,
                        top: "auto",
                        left: "auto"
                    };
                    this.settings = n.defaults(e || {}, t), this.init()
                },
                init: function() {
                    this.spinner = new r(this.settings)
                },
                start: function(e) {
                    this.spinner.spin(e)
                },
                stop: function() {
                    this.spinner.stop()
                },
                destroy: function() {
                    delete this.spinner
                },
                setTop: function(e) {
                    this.destroy(), this.settings.top = e, this.init(), this.start()
                }
            });
        return s
    }),
    function(e) {
        typeof define == "function" && define.amd ? define("jquery-validate", ["jq"], e) : e(jQuery)
    }(function(e) {
        e.extend(e.fn, {
            validate: function(t) {
                if (!this.length) {
                    t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
                    return
                }
                var n = e.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                    n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0)
                }), this.submit(function(t) {
                    function r() {
                        var r;
                        return n.settings.submitHandler ? (n.submitButton && (r = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(n.submitButton.value).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && r.remove(), !1) : !0
                    }
                    return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, r()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : r() : (n.focusInvalid(), !1)
                })), n)
            },
            valid: function() {
                if (e(this[0]).is("form")) return this.validate().form();
                var t = !0,
                    n = e(this[0].form).validate();
                return this.each(function() {
                    t &= n.element(this)
                }), t
            },
            removeAttrs: function(t) {
                var n = {},
                    r = this;
                return e.each(t.split(/\s/), function(e, t) {
                    n[t] = r.attr(t), r.removeAttr(t)
                }), n
            },
            rules: function(t, n) {
                var r = this[0];
                if (t) {
                    var i = e.data(r.form, "validator").settings,
                        s = i.rules,
                        o = e.validator.staticRules(r);
                    switch (t) {
                        case "add":
                            e.extend(o, e.validator.normalizeRule(n)), s[r.name] = o, n.messages && (i.messages[r.name] = e.extend(i.messages[r.name], n.messages));
                            break;
                        case "remove":
                            if (!n) return delete s[r.name], o;
                            var u = {};
                            return e.each(n.split(/\s/), function(e, t) {
                                u[t] = o[t], delete o[t]
                            }), u
                    }
                }
                var a = e.validator.normalizeRules(e.extend({}, e.validator.metadataRules(r), e.validator.classRules(r), e.validator.attributeRules(r), e.validator.staticRules(r)), r);
                if (a.required) {
                    var f = a.required;
                    delete a.required, a = e.extend({
                        required: f
                    }, a)
                }
                return a
            }
        }), e.extend(e.expr[":"], {
            blank: function(t) {
                return !e.trim("" + t.value)
            },
            filled: function(t) {
                return !!e.trim("" + t.value)
            },
            unchecked: function(e) {
                return !e.checked
            }
        }), e.validator = function(t, n) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
        }, e.validator.format = function(t, n) {
            return arguments.length === 1 ? function() {
                var n = e.makeArray(arguments);
                return n.unshift(t), e.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), n)
            }), t)
        }, e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(e, t) {
                    this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
                },
                onfocusout: function(e, t) {
                    !this.checkable(e) && (e.name in this.submitted || !this.optional(e)) && this.element(e)
                },
                onkeyup: function(e, t) {
                    if (t.which === 9 && this.elementValue(e) === "") return;
                    (e.name in this.submitted || e === this.lastActive) && this.element(e)
                },
                onclick: function(e, t) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function(t, n, r) {
                    t.type === "radio" ? this.findByName(t.name).addClass(n).removeClass(r) : e(t).addClass(n).removeClass(r)
                },
                unhighlight: function(t, n, r) {
                    t.type === "radio" ? this.findByName(t.name).removeClass(n).addClass(r) : e(t).removeClass(n).addClass(r)
                }
            },
            setDefaults: function(t) {
                e.extend(e.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function r(t) {
                        var n = e.data(this[0].form, "validator"),
                            r = "on" + t.type.replace(/^validate/, "");
                        n.settings[r] && n.settings[r].call(n, this[0], t)
                    }
                    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var t = this.groups = {};
                    e.each(this.settings.groups, function(n, r) {
                        e.each(r.split(/\s/), function(e, r) {
                            t[r] = n
                        })
                    });
                    var n = this.settings.rules;
                    e.each(n, function(t, r) {
                        n[t] = e.validator.normalizeRule(r)
                    }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", r).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", r), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                },
                element: function(t) {
                    t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
                    var n = this.check(t) !== !1;
                    return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
                },
                showErrors: function(t) {
                    if (t) {
                        e.extend(this.errorMap, t), this.errorList = [];
                        for (var n in t) this.errorList.push({
                            message: t[n],
                            element: this.findByName(n)[0]
                        });
                        this.successList = e.grep(this.successList, function(e) {
                            return !(e.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(e) {
                    var t = 0;
                    for (var n in e) t++;
                    return t
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return this.size() === 0
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var t = this.lastActive;
                    return t && e.grep(this.errorList, function(e) {
                        return e.element.name === t.name
                    }).length === 1 && t
                },
                elements: function() {
                    var t = this,
                        n = {};
                    return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0)
                    })
                },
                clean: function(t) {
                    return e(t)[0]
                },
                errors: function() {
                    var t = this.settings.errorClass.replace(" ", ".");
                    return e(this.settings.errorElement + "." + t, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                },
                elementValue: function(t) {
                    var n = e(t).attr("type"),
                        r = e(t).val();
                    return n === "radio" || n === "checkbox" ? e('input[name="' + e(t).attr("name") + '"]:checked').val() : typeof r == "string" ? r.replace(/\r/g, "") : r
                },
                check: function(t) {
                    t = this.validationTargetFor(this.clean(t));
                    var n = e(t).rules(),
                        r = !1,
                        i = this.elementValue(t),
                        s;
                    for (var o in n) {
                        var u = {
                            method: o,
                            parameters: n[o]
                        };
                        try {
                            s = e.validator.methods[o].call(this, i, t, u.parameters);
                            if (s === "dependency-mismatch") {
                                r = !0;
                                continue
                            }
                            r = !1;
                            if (s === "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(t));
                                return
                            }
                            if (!s) return this.formatAndAdd(t, u), !1
                        } catch (a) {
                            throw this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + u.method + "' method", a), a
                        }
                    }
                    if (r) return;
                    return this.objectLength(n) && this.successList.push(t), !0
                },
                customMetaMessage: function(t, n) {
                    if (!e.metadata) return;
                    var r = this.settings.meta ? e(t).metadata()[this.settings.meta] : e(t).metadata();
                    return r && r.messages && r.messages[n]
                },
                customDataMessage: function(t, n) {
                    return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase())
                },
                customMessage: function(e, t) {
                    var n = this.settings.messages[e];
                    return n && (n.constructor === String ? n : n[t])
                },
                findDefined: function() {
                    for (var e = 0; e < arguments.length; e++)
                        if (arguments[e] !== undefined) return arguments[e];
                    return undefined
                },
                defaultMessage: function(t, n) {
                    return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), this.customMetaMessage(t, n), !this.settings.ignoreTitle && t.title || undefined, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
                },
                formatAndAdd: function(t, n) {
                    var r = this.defaultMessage(t, n.method),
                        i = /\$?\{(\d+)\}/g;
                    typeof r == "function" ? r = r.call(this, n.parameters, t) : i.test(r) && (r = e.validator.format(r.replace(i, "{$1}"), n.parameters)), this.errorList.push({
                        message: r,
                        element: t
                    }), this.errorMap[t.name] = r, this.submitted[t.name] = r
                },
                addWrapper: function(e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                },
                defaultShowErrors: function() {
                    var e, t;
                    for (e = 0; this.errorList[e]; e++) {
                        var n = this.errorList[e];
                        this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
                    }
                    this.errorList.length && (this.toShow = this.toShow.add(this.containers));
                    if (this.settings.success)
                        for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return e(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(t, n) {
                    var r = this.errorsFor(t);
                    r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.attr("generated") && r.html(n)) : (r = e("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(t),
                        generated: !0
                    }).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, e(t)) : r.insertAfter(t))), !n && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
                },
                errorsFor: function(t) {
                    var n = this.idOrName(t);
                    return this.errors().filter(function() {
                        return e(this).attr("for") === n
                    })
                },
                idOrName: function(e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
                },
                checkable: function(e) {
                    return /radio|checkbox/i.test(e.type)
                },
                findByName: function(t) {
                    return e(this.currentForm).find('[name="' + t + '"]')
                },
                getLength: function(t, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case "select":
                            return e("option:selected", n).length;
                        case "input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function(e, t) {
                    return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
                },
                dependTypes: {
                    "boolean": function(e, t) {
                        return e
                    },
                    string: function(t, n) {
                        return !!e(t, n.form).length
                    },
                    "function": function(e, t) {
                        return e(t)
                    }
                },
                optional: function(t) {
                    var n = this.elementValue(t);
                    return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
                },
                startRequest: function(e) {
                    this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
                },
                stopRequest: function(t, n) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && this.pendingRequest === 0 && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(t) {
                    return e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(t, n) {
                t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
            },
            classRules: function(t) {
                var n = {},
                    r = e(t).attr("class");
                return r && e.each(r.split(" "), function() {
                    this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
                }), n
            },
            attributeRules: function(t) {
                var n = {},
                    r = e(t);
                for (var i in e.validator.methods) {
                    var s;
                    i === "required" ? (s = r.get(0).getAttribute(i), s === "" && (s = !0), s = !!s) : s = r.attr(i), s ? n[i] = s : r[0].getAttribute("type") === i && (n[i] = !0)
                }
                return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
            },
            metadataRules: function(t) {
                if (!e.metadata) return {};
                var n = e.data(t.form, "validator").settings.meta;
                return n ? e(t).metadata()[n] : e(t).metadata()
            },
            staticRules: function(t) {
                var n = {},
                    r = e.data(t.form, "validator");
                return r.settings.rules && (n = e.validator.normalizeRule(r.settings.rules[t.name]) || {}), n
            },
            normalizeRules: function(t, n) {
                return e.each(t, function(r, i) {
                    if (i === !1) {
                        delete t[r];
                        return
                    }
                    if (i.param || i.depends) {
                        var s = !0;
                        switch (typeof i.depends) {
                            case "string":
                                s = !!e(i.depends, n.form).length;
                                break;
                            case "function":
                                s = i.depends.call(n, n)
                        }
                        s ? t[r] = i.param !== undefined ? i.param : !0 : delete t[r]
                    }
                }), e.each(t, function(r, i) {
                    t[r] = e.isFunction(i) ? i(n) : i
                }), e.each(["minlength", "maxlength", "min", "max"], function() {
                    t[this] && (t[this] = Number(t[this]))
                }), e.each(["rangelength", "range"], function() {
                    t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
                }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t.messages && delete t.messages, t
            },
            normalizeRule: function(t) {
                if (typeof t == "string") {
                    var n = {};
                    e.each(t.split(/\s/), function() {
                        n[this] = !0
                    }), t = n
                }
                return t
            },
            addMethod: function(t, n, r) {
                e.validator.methods[t] = n, e.validator.messages[t] = r !== undefined ? r : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
            },
            methods: {
                required: function(t, n, r) {
                    if (!this.depend(r, n)) return "dependency-mismatch";
                    if (n.nodeName.toLowerCase() === "select") {
                        var i = e(n).val();
                        return i && i.length > 0
                    }
                    return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
                },
                remote: function(t, n, r) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var i = this.previousValue(n);
                    this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), i.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = i.message, r = typeof r == "string" && {
                        url: r
                    } || r;
                    if (this.pending[n.name]) return "pending";
                    if (i.old === t) return i.valid;
                    i.old = t;
                    var s = this;
                    this.startRequest(n);
                    var o = {};
                    return o[n.name] = t, e.ajax(e.extend(!0, {
                        url: r,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: o,
                        success: function(r) {
                            s.settings.messages[n.name].remote = i.originalMessage;
                            var o = r === !0 || r === "true";
                            if (o) {
                                var u = s.formSubmitted;
                                s.prepareElement(n), s.formSubmitted = u, s.successList.push(n), delete s.invalid[n.name], s.showErrors()
                            } else {
                                var a = {},
                                    f = r || s.defaultMessage(n, "remote");
                                a[n.name] = i.message = e.isFunction(f) ? f(t) : f, s.invalid[n.name] = !0, s.showErrors(a)
                            }
                            i.valid = o, s.stopRequest(n, o)
                        }
                    }, r)), "pending"
                },
                minlength: function(t, n, r) {
                    var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || i >= r
                },
                maxlength: function(t, n, r) {
                    var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || i <= r
                },
                rangelength: function(t, n, r) {
                    var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || i >= r[0] && i <= r[1]
                },
                min: function(e, t, n) {
                    return this.optional(t) || e >= n
                },
                max: function(e, t, n) {
                    return this.optional(t) || e <= n
                },
                range: function(e, t, n) {
                    return this.optional(t) || e >= n[0] && e <= n[1]
                },
                email: function(e, t) {
                    return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
                },
                url: function(e, t) {
                    return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
                },
                date: function(e, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(e))
                },
                dateISO: function(e, t) {
                    return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
                },
                number: function(e, t) {
                    return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                },
                digits: function(e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                },
                creditcard: function(e, t) {
                    if (this.optional(t)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(e)) return !1;
                    var n = 0,
                        r = 0,
                        i = !1;
                    e = e.replace(/\D/g, "");
                    for (var s = e.length - 1; s >= 0; s--) {
                        var o = e.charAt(s);
                        r = parseInt(o, 10), i && (r *= 2) > 9 && (r -= 9), n += r, i = !i
                    }
                    return n % 10 === 0
                },
                equalTo: function(t, n, r) {
                    var i = e(r);
                    return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        e(n).valid()
                    }), t === i.val()
                }
            }
        }), e.format = e.validator.format;
        var t = {};
        if (e.ajaxPrefilter) e.ajaxPrefilter(function(e, n, r) {
            var i = e.port;
            e.mode === "abort" && (t[i] && t[i].abort(), t[i] = r)
        });
        else {
            var n = e.ajax;
            e.ajax = function(r) {
                var i = ("mode" in r ? r : e.ajaxSettings).mode,
                    s = ("port" in r ? r : e.ajaxSettings).port;
                return i === "abort" ? (t[s] && t[s].abort(), t[s] = n.apply(this, arguments)) : n.apply(this, arguments)
            }
        }!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && e.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, n) {
            function r(t) {
                return t = e.event.fix(t), t.type = n, e.event.handle.call(this, t)
            }
            e.event.special[n] = {
                setup: function() {
                    this.addEventListener(t, r, !0)
                },
                teardown: function() {
                    this.removeEventListener(t, r, !0)
                },
                handler: function(t) {
                    var r = arguments;
                    return r[0] = e.event.fix(t), r[0].type = n, e.event.handle.apply(this, r)
                }
            }
        }), e.extend(e.fn, {
            validateDelegate: function(t, n, r) {
                return this.bind(n, function(n) {
                    var i = e(n.target);
                    if (i.is(t)) return r.apply(i, arguments)
                })
            }
        })
    }), define("plugins/validation", ["require", "adapter/dom", "common/basePlugin", "adapter/jsClass", "adapter/enumerable", "common/progress", "jq", "jquery-validate", "common/scroll-to"], function(e) {
        var t = e("adapter/dom"),
            n = e("common/basePlugin"),
            r = e("adapter/jsClass"),
            s = e("adapter/enumerable"),
            o = e("common/progress"),
            u = e("jq"),
            a = e("jquery-validate"),
            f = e("common/scroll-to"),
            l;
        return l = r.Class(n, {
            form: null,
            validator: null,
            focusVal: null,
            dblclick: !1,
            constructor: function(e, n, r, i) {
                this.form = t.find("form#" + e + ",#" + e + "form"), this.config = {
                    actions: {
                        formSubmit: this.checkSubmitAction,
                        submit: this.checkSubmitAction,
                        focusout: this.checkSubmitAction
                    }
                }, s.extend(u.validator.messages, {
                    required: "required",
                    letters: "letters",
                    remote: "remote",
                    email: "email",
                    url: "url",
                    date: "date",
                    dateISO: "dateISO",
                    number: "number",
                    digits: "digits",
                    creditcard: "creditcard",
                    equalTo: "equal-to",
                    maxlength: "maxlength",
                    minlength: "minlength",
                    rangelength: "rangelength",
                    range: "range",
                    max: "max",
                    min: "min"
                });
                var o = this,
                    a = t.outerHeight(t.find(".header")),
                    c = {
                        customForms: !1,
                        errorClass: "error",
                        generalMessageClass: ".b-main-v-error",
                        setFocusOnError: !0,
                        patterns: {
                            letters: "^[a-zA-Z]",
                            lettersdigits: "^[A-Za-z0-9]",
                            digits: "^[0-9]",
                            postcode: "^[0-9]{2}-[0-9]{3}$",
                            postcodewestern: "^[A-Za-z0-9\\-]",
                            housenumber: "^[0-9]+[a-zA-Z]?((\\|/){1}[0-9]+[a-zA-Z]?)?$",
                            letterspl: "^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9]",
                            letterspldigits: "^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]",
                            lettersandseparator: "^([a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+[- ]?[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ])",
                            lettersandseparatorsimple: "^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\\-\\s]",
                            lettersandseparatorsimpleandparentheses: "^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\\-()\\s]",
                            lettersdigitsandseparatorsimple: "^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9\\-\\s]",
                            lettersdigitsandseparatorsimpleandparentheses: "^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9\\-()\\s]",
                            dateformatforpolishdate: "(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d|(0[1-9]|[12][0-9]|3[01])[- / .][0-9a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{4,}[- /.](19|20)\\d\\d",
                            latinlettersdigitsseparatorsspecialchars: "[a-zA-Z0-9_\\-\\?~`!@#$%^&*()+-=[\\]{}|;':\",./<>\\s\\\\]"
                        },
                        actionToAsk: ""
                    };
                this.options = s.defaults(i, c), this.validatorSettings = {
                    onsubmit: this.options.onSubmit && !0,
                    onkeyup: !1,
                    onclick: this.options.onClick || !1,
                    onfocusout: this.options.onFocusout ? function(e) {
                        $(e).valid()
                    } : !1,
                    validClass: "success",
                    errorClass: o.options.errorClass,
                    showErrors: function(e, n) {
                        s.each(this.currentElements, function(n) {
                            o.removeAllAria(n), t.removeClass(n, "error"), t.removeClass("[id^=" + n.id + "--]", "visible");
                            if (t.hasClass(n, "postalcode")) {
                                var r = t.getAttribute(n, "data-postalcode1"),
                                    i = t.find("#" + r),
                                    s = t.find("#" + t.getAttribute(n, "data-postalcode2"));
                                t.removeClass(i, "error"), t.removeClass(s, "error");
                                var u = t.find("[id^=" + r + "--]");
                                t.removeClass(u, "visible")
                            }
                            n.type == "radio" && t.hasClass(n, "checked") && t.removeClass(t.find('input[name="' + t.getAttribute(n, "name") + '"]'), "error");
                            if (t.isTag(n, "select") && t.hasClass(n, "selectboxit-select")) {
                                var a = t.parent(n),
                                    f = t.find(".selectboxit-btn", a);
                                t.removeClass(f, "error")
                            }
                            if (e[n.name]) {
                                var l = e[n.name],
                                    c = n.id + "--" + l;
                                t.addClass(n, "error"), t.addClass("#" + c, "visible"), o.addAria(n, c);
                                if (t.hasClass(n, "postalcode")) {
                                    var r = t.getAttribute(n, "data-postalcode1"),
                                        i = t.find("#" + r),
                                        s = t.find("#" + t.getAttribute(n, "data-postalcode2"));
                                    t.addClass(i, "error"), t.addClass(s, "error"), u = t.find("#" + r + "--" + e[n.name]), t.addClass(u, "visible")
                                }
                                n.type == "radio" && t.hasClass(n, "checked") && t.addClass(t.find('input[name="' + t.getAttribute(n, "name") + '"]'), "error");
                                if (t.isTag(n, "select") && t.hasClass(n, "selectboxit-select")) {
                                    var a = t.parent(n),
                                        f = t.find(".selectboxit-btn", a);
                                    t.addClass(f, "error")
                                }
                                if (e[n.name] == "comparefields") {
                                    var h = t.find(t.getAttribute(n, "data-comparefields"), t.parent(n, "fieldset"));
                                    t.addClass(h, "error")
                                }
                            }
                            if (t.hasClass(n, "comparefields")) {
                                var h = t.find(t.getAttribute(n, "data-comparefields"), t.parent(n, "fieldset"));
                                t.removeClass(h, "error")
                            }
                        }), o.options.showGeneralMessage && (t.removeClass(t.find(o.options.generalMessageClass, o.form), "visible"), n.length > 0 && t.addClass(t.find(o.options.generalMessageClass, o.form), "visible"))
                    },
                    focusInvalid: !1,
                    invalidHandler: function(e, t) {
                        if (!t.numberOfInvalids()) return;
                        var n = function() {
                            new f(t.errorList[0].element.id, {
                                position: 0,
                                setFocus: o.options.setFocusOnError,
                                forceFocus: !0
                            })
                        };
                        setTimeout(n, 0)
                    }
                }, this.validator = u(this.form).validate(this.validatorSettings), l.$super.call(this, e, n, r, i), this.initAdvancedRules(), this.initRadioAndCheckboxValidation(), this.subscribe(ns.events.pluginInnerAjaxed, this.innerAjaxHandler.bind(this)), this.initOnSubmitMouseDown(), this.initDependantValidation()
            },
            addAria: function(e, n) {
                var r = t.getAttribute(e, "aria-describedby") || "";
                r.indexOf(n) == -1 && (r += " " + n), t.setAttribute(e, "aria-describedby", r), t.setAttribute(e, "aria-invalid", !0)
            },
            removeAllAria: function(e) {
                var n = t.find("[id^=" + e.id.replace(".", "\\.") + "--]", this.form),
                    r = t.getAttribute(e, "aria-describedby") || "";
                t.removeAttribute(e, "aria-describedby"), t.removeAttribute(e, "aria-invalid")
            },
            initOnSubmitMouseDown: function() {
                var e = 'button.submit[type="submit"]:not(.cancel), input[type="submit"]:not(.cancel), input[type="image"]:not(.cancel)',
                    n = 'button.submit[type="submit"], input[type="submit"], input[type="image"]';
                this.submits = t.find(e, this.form), this.lastClicked = null, t.on(this.form, "mousedown", e, function(n) {
                    this.options.actionToAsk != "" ? (this.lastClicked = n.target, this.askForAction(this.options.actionToAsk, {
                        ev: "validation-ask-for-" + this.options.actionToAsk,
                        modId: this.modId
                    }, this.onValidationPermitted.bind(this))) : this.doValidation() && (t.trigger(n.target, "click"), t.on(this.form, "click", e, function(e) {
                        t.off(this, e), e.preventDefault()
                    }))
                }.bind(this)), this.allSubmits = t.find(n, this.form), t.on(this.form, "mousedown", n, function(e) {
                    t.removeClass(this.allSubmits, "clicked-submit"), t.addClass(e.target, "clicked-submit")
                }.bind(this))
            },
            onValidationPermitted: function(e, n) {
                n.status && (this.lastClicked.type == "checkbox" ? u(this.lastClicked).valid() : this.doValidation() && (t.trigger(this.lastClicked, "click"), t.on(this.submits, "click", function(e) {
                    t.off(this, e), e.preventDefault()
                })))
            },
            onExtensionInit: function() {
                var e, t = this;
                this.extensions.PasswordValidator && (this.extensions.PasswordValidator.init(this.modId, this.options.passwordValidatorOptions), e = this.extensions.PasswordValidator.getPasswordInput(), this.addMethod("validate-password", function(e, n, r) {
                    return t.extensions.PasswordValidator.validate()
                }), u(e).rules("add", {
                    "validate-password": !0
                }))
            },
            checkSubmitAction: function(e, n) {
                if (n && n.modId && n.modId == this.form[0].id) {
                    var r = t.find(".clicked-submit", this.form);
                    if (t.hasClass(r, "cancel") || t.hasClass(this.form, "notvalidate")) return !0;
                    var i = this.validate();
                    return i
                }
                return !0
            },
            initAdvancedRules: function() {
                function r(e, n, r) {
                    if (this.optional(n)) return !0;
                    var i = r[0],
                        s = r[1];
                    if (typeof i == "string" && i.indexOf("#") != -1) {
                        var u = t.find(i);
                        t.removeClass(u[0], "error"), t.removeClass("[id^=" + u[0].id + "--]", "visible"), i = o(u)
                    }
                    if (typeof s == "string" && s.indexOf("#") != -1) {
                        var u = t.find(s);
                        t.removeClass(u[0], "error"), t.removeClass("[id^=" + u[0].id + "--]", "visible"), s = o(u)
                    }
                    i.setHours(0), i.setMinutes(0), i.setSeconds(0), i = Date.parse(i), s = Date.parse(s);
                    var a = r[2] ? r[2] : "/",
                        f = e.split(a),
                        l = [];
                    l[0] = f[0].length == 1 ? "0" + f[0] : f[0], l[1] = f[1].length == 1 ? "0" + f[1] : f[1], n.value = l[0] + a + l[1] + a + f[2], f.reverse(), f[0] = parseInt(f[0]), f[1] = parseInt(f[1]) == 0 ? parseInt(f[1].substr(1)) : parseInt(f[1]), f[2] = parseInt(f[2]) == 0 ? parseInt(f[2].substr(1)) : parseInt(f[2]);
                    if (f[1] < 1 || f[1] > 12) return !1;
                    if (f[2] < 1 || f[2] > 31) return !1;
                    if (f[1] != 4 && f[1] != 6 && f[1] != 9 && f[1] != 11 || f[2] != 31) {
                        if (f[1] == 2) {
                            var c = f[0] % 4 == 0 && (f[0] % 100 != 0 || f[0] % 400 == 0);
                            if (f[2] > 29 || f[2] == 29 && !c) return !1
                        }
                        var h = new Date(f[0], f[1] - 1, f[2], 0, 0, 0);
                        return isNaN(h) ? !1 : i <= Date.parse(h) && Date.parse(h) <= s
                    }
                    return !1
                }

                function o(e) {
                    var n = t.getProperty(e, "value");
                    if (t.getProperty(e, "placeholder")) {
                        var r = t.getData(e, "split-value"),
                            i = t.getProperty(e, "placeholder").split(r),
                            s = n.split(r),
                            o = [0, 0, 0];
                        for (var u = 0; u < 3; u++) i[u].indexOf("d") != -1 ? o[2] = s[u] : i[u].indexOf("m") != -1 ? o[1] = s[u] : o[0] = s[u];
                        return new Date(o[0], o[1] - 1, o[2])
                    }
                    return new Date(n)
                }

                function a(e) {
                    var t, n = new Date,
                        r, i, s, o;
                    return e === "today" ? t = n : e.indexOf("#") != -1 ? t = e : (r = e.split("|"), i = parseInt(r[0], 10), s = parseInt(r[1], 10), o = parseInt(r[2], 10), t = new Date(n.getFullYear() + o, n.getMonth() + s, n.getDate() + i)), t
                }

                function f(e, t) {
                    var n = 0;
                    for (var r = 0; r < e.length; ++r) n = (n * 10 + parseInt(e.charAt(r))) % t;
                    return n
                }

                function l(e, t, n) {
                    if (e != "") {
                        var r = e.toUpperCase();
                        r = r.replace(/\s+/g, "");
                        if (r.search(/^[A-Z]{2}/gi) < 0) {
                            if (n !== "" && n !== !0) return !1;
                            r = "PL" + r
                        }
                        return r = r.substring(4) + r.substring(0, 4), r = r.replace(/[A-Z]/g, function(e) {
                            return e.charCodeAt(0) - 55
                        }), parseInt(f(r, 97), 10) === 1
                    }
                    return !0
                }

                function c(e) {
                    var t = /[A-Z]{2}[0-9]{7}/g,
                        n = t.test(e);
                    if (n) {
                        var r = {
                                A: "10",
                                B: "11",
                                C: "12",
                                D: "13",
                                E: "14",
                                F: "15",
                                G: "16",
                                H: "17",
                                I: "18",
                                J: "19",
                                K: "20",
                                L: "21",
                                M: "22",
                                N: "23",
                                O: "24",
                                P: "25",
                                Q: "26",
                                R: "27",
                                S: "28",
                                T: "29",
                                U: "30",
                                V: "31",
                                W: "32",
                                X: "33",
                                Y: "34",
                                Z: "35"
                            },
                            s = [7, 3, 9, 1, 7, 3, 1, 7, 3],
                            o = 0,
                            u = "";
                        e = e.split("");
                        var a = e.length;
                        for (i = 0; i < a; i++) u = e[i], typeof r[u] != "undefined" && (e[i] = r[u]), o += e[i] * s[i];
                        if (o % 10 === 0) return !0
                    }
                    return !1
                }

                function h(e) {
                    var t = /[A-Za-z0-9]{2,20}/g,
                        n = t.test(e);
                    return n ? !0 : !1
                }

                function p(e) {
                    var t = e.replace(/[\ \-]/gi, "");
                    if (t.length != 11) return !1;
                    var n = new Array(1, 3, 7, 9, 1, 3, 7, 9, 1, 3),
                        r = 0;
                    for (var i = 0; i < 10; i++) r += n[i] * t[i];
                    return sum_m = 10 - r % 10, sum_m == 10 ? sum_c = 0 : sum_c = sum_m, sum_c != t[10] ? !1 : !0
                }

                function d(e) {
                    var t = e.replace(/[\ \-]/gi, ""),
                        n = /^[0-9]{9}$/,
                        r = /^[0-9]{14}$/;
                    if (e != "") {
                        if (n.test(t) == 0 && r.test(t) == 0) return !1;
                        if (t.length == 9) {
                            var i = new Array(8, 9, 2, 3, 4, 5, 6, 7),
                                s = 0;
                            for (var o = 0; o < 8; o++) s += i[o] * t[o];
                            var u = s % 11,
                                a = u == 10 ? 0 : u;
                            if (a != t[8]) return !1
                        } else if (t.length == 14) {
                            var i = new Array(2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8),
                                s = 0;
                            for (var o = 0; o < 13; o++) s += i[o] * t[o];
                            var u = s % 11,
                                a = u == 10 ? 0 : u;
                            if (a != t[13]) return !1
                        }
                        return !0
                    }
                    return !0
                }

                function v(e) {
                    var t = e.replace(/[\ \-]/gi, "");
                    if (e != "") {
                        if (t.length != 10) return !1;
                        var n = new Array(6, 5, 7, 2, 3, 4, 5, 6, 7),
                            r = 0;
                        for (var i = 0; i < 9; i++) r += t[i] * n[i];
                        var s = r % 11;
                        return s != t[9] ? !1 : !0
                    }
                    return !0
                }
                var e = [],
                    n = this;
                e = t.find(".equal-to[data-equal-to]", this.form), s.each(e, function(e) {
                    u(e).rules("add", {
                        equalTo: "#" + t.getAttribute(e, "data-equal-to")
                    })
                }), e = t.find(".not-equal-to[data-not-equal-to]", this.form), e.length && (this.addMethod("not-equal-to", function(e, t, n) {
                    var r = n.value;
                    if (n.id == "email" || n.id == "e-mail") r = n.value.split("@")[0];
                    return e !== r
                }), s.each(e, function(e) {
                    var n = t.find("#" + t.getAttribute(e, "data-not-equal-to"));
                    n.length && u(e).rules("add", {
                        "not-equal-to": n[0]
                    })
                })), e = t.find(".not-contain[data-not-contain]", this.form), e.length && (this.addMethod("not-contain", function(e, t, n) {
                    var r = ".*" + n + ".*",
                        i = new RegExp(r);
                    return !i.test(e)
                }), s.each(e, function(e) {
                    var n = t.getAttribute(e, "data-not-contain");
                    n && u(e).rules("add", {
                        "not-contain": n
                    })
                })), e = t.find(".greater-than[data-greater-than]", this.form), this.addMethod("greaterthan", function(e, n, r) {
                    return t.hasClass(r, "error") && (t.removeClass(r, "error"), t.removeClass(t.find("#" + r.id + "--lessthan"), "visible")), parseInt(e) > parseInt(r.value)
                }), s.each(e, function(e) {
                    var n = t.find("#" + t.getAttribute(e, "data-greater-than"));
                    u(e).rules("add", {
                        greaterthan: n[0]
                    })
                }), e = t.find(".less-than[data-less-than]", this.form), this.addMethod("lessthan", function(e, n, r) {
                    return t.hasClass(r, "error") && (t.removeClass(r, "error"), t.removeClass(t.find("#" + r.id + "--greaterthan"), "visible")), parseInt(e) < parseInt(r.value)
                }), s.each(e, function(e) {
                    var n = t.find("#" + t.getAttribute(e, "data-less-than"));
                    u(e).rules("add", {
                        lessthan: n[0]
                    })
                }), e = t.find(".min-length[data-min-length]", this.form), s.each(e, function(e) {
                    var n = parseInt(t.getAttribute(e, "data-min-length"));
                    n = !isNaN(n) && n >= 0 ? n : 0, u(e).rules("add", {
                        minlength: n
                    })
                }), e = t.find(".max-length[data-max-length]", this.form), s.each(e, function(e) {
                    var n = parseInt(t.getAttribute(e, "data-max-length"));
                    n = !isNaN(n) && n >= 0 ? n : Infinity, u(e).rules("add", {
                        maxlength: n
                    })
                }), e = t.find(".equal-length[data-equal-length]", this.form), e.length && (this.addMethod("equallength", function(e, t, n) {
                    return s.contains(n, e.length)
                }), s.each(e, function(e) {
                    var n = t.getAttribute(e, "data-equal-length"),
                        r = n.split(",");
                    for (var i in r) {
                        var s = parseInt(r[i]);
                        if (isNaN(s)) return;
                        r[i] = s
                    }
                    r.length > 0 && u(e).rules("add", {
                        equallength: r
                    })
                })), e = t.find(".pattern[data-pattern]", this.form), e.length && (this.addMethod("pattern", function(e, t, n) {
                    return e = e.replace(n[1], ""), t.value = e, e != "" ? n[0].test(e) : !0
                }), s.each(e, function(e) {
                    var r = t.getAttribute(e, "data-pattern");
                    if (r.indexOf("pattern-") === 0) {
                        var i = n.options.patterns[r.split("pattern-")[1].split("|")[0]],
                            s = r.split("|");
                        s.length > 1 ? minlength = s[1] : minlength = "", s.length > 2 ? maxlength = s[2] : maxlength = "";
                        var o = s.length > 3 ? new RegExp(s[3], "g") : "",
                            a = "";
                        minlength && maxlength ? a = "{" + minlength + "," + maxlength + "}$" : minlength ? a = "{" + minlength + ",}$" : maxlength && (a = "{," + maxlength + "}$");
                        var f = i.slice(-1) === "$" ? i : a ? i + a : i + "+$";
                        n.log(e, f);
                        var l = new RegExp(f)
                    } else {
                        if (r.indexOf("|") != -1) {
                            var s = r.split("|"),
                                o = new RegExp(s[1], "g");
                            r = s[0]
                        }
                        var l = new RegExp(r)
                    }
                    u(e).rules("add", {
                        pattern: [l, o]
                    })
                })), e = t.find(".whole", this.form), this.addMethod("whole", function(e, t, n) {
                    return e = e.replace(",", "."), e % 1 == 0
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        whole: !0
                    })
                }), e = t.find(".divided[data-divided]", this.form), this.addMethod("divided", function(e, n, r) {
                    return e = e.replace(",", "."), e % parseInt(t.getAttribute(n, "data-divided")) == 0
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        divided: !0
                    })
                }), e = t.find(".range[data-min-value][data-max-value]", this.form), this.addMethod("range", function(e, t, n) {
                    return e = e.replace(",", "."), e >= n[0] && e <= n[1]
                }), s.each(e, function(e) {
                    var n = parseInt(t.getAttribute(e, "data-max-value"));
                    n = isNaN(n) ? Infinity : n;
                    var r = parseInt(t.getAttribute(e, "data-min-value"));
                    r = isNaN(r) ? -Infinity : r, u(e).rules("add", {
                        range: [r, n]
                    })
                }), e = t.find(".js-v-daterange[data-min-value][data-max-value]", this.form), this.addMethod("daterange", r), s.each(e, function(e) {
                    var n = a(t.getData(e, "max-value")),
                        r = a(t.getData(e, "min-value")),
                        i = t.getData(e, "split-value");
                    i || (i = "/"), u(e).rules("add", {
                        daterange: [r, n, i]
                    })
                }), e = t.find(".rangelength[data-min-length][data-max-length]", this.form), this.addMethod("rangelength", function(e, t, n) {
                    return e.length >= n[0] && e.length <= n[1]
                }), s.each(e, function(e) {
                    var n = parseInt(t.getAttribute(e, "data-max-length"));
                    n = isNaN(n) ? Infinity : n;
                    var r = parseInt(t.getAttribute(e, "data-min-length"));
                    r = isNaN(r) ? 0 : r, u(e).rules("add", {
                        rangelength: [r, n]
                    })
                }), e = t.find(".postcode[data-postcode],.js-v-postcode", this.form), e.length && (this.addMethod("postcode", function(e, t, r) {
                    if (r !== !0) return e.length == 2 && r.value.length == 3;
                    var i = n.options.patterns.postcode,
                        s = new RegExp(i);
                    return s.test(e)
                }), s.each(e, function(e) {
                    var n = t.find("#" + t.getAttribute(e, "data-postcode"));
                    n.length ? u(e).rules("add", {
                        postcode: n[0]
                    }) : u(e).rules("add", {
                        postcode: !0
                    })
                })), e = t.find(".postalcode[data-postalcode1][data-postalcode2]", this.form), e.length && (this.addMethod("postalcode", function(e, t, n) {
                    var r = !0,
                        i = n[0].value,
                        s = n[1].value,
                        o = "^[0-9]+$",
                        u = new RegExp(o);
                    if (i.length > 0 || s.length > 0) {
                        if (i.length != 2 || s.length != 3) r = !1;
                        else if (!u.test(i) || !u.test(s)) r = !1
                    } else r = !1;
                    return r
                }), s.each(e, function(e) {
                    if (!t.hasClass(e, "vInitialized")) {
                        var r = t.find("#" + t.getAttribute(e, "data-postalcode1")),
                            i = t.find("#" + t.getAttribute(e, "data-postalcode2"));
                        r.length && i.length && (n.validatorSettings.onfocusout != 0 && n.validatorSettings.onfocusout(e) != 0 && (t.on(e, "focusout", null, [r[0], i[0]], n.onPostcodeOut.bind(n)), t.on(e, "focusin", null, [r[0], i[0]], n.onPostcodeIn.bind(n))), u(e).rules("add", {
                            postalcode: [r[0], i[0]]
                        }), e == r[0] ? (t.setAttribute(e, "maxlength", 2), t.on(e, "keyup", n.onCode1Key.bind(n)), t.on(e, "dblclick", n.onCode1DblClick.bind(n))) : (t.setAttribute(e, "maxlength", 3), t.on(e, "keyup", n.onCode2Key.bind(n)), t.on(e, "keydown", n.onCode2Key.bind(n)))), t.addClass(e, "vInitialized")
                    }
                }, n)), e = t.find(".comparefields[data-comparefields]", this.form), e.length && (this.addMethod("comparefields", function(e, r, i) {
                    var o = new RegExp(i[2], "g"),
                        u = [t.serialize(t.find(i[1], i[0])).replace(o, "")],
                        a = t.prevAll(i[0], "fieldset");
                    if (a.length > 0) {
                        s.each(a, function(e) {
                            var n = t.serialize(t.find(i[1], e)).replace(o, "");
                            t.inArray(n, u) == -1 && u.push(n)
                        }, n);
                        if (u.length <= a.length) return !1
                    }
                    return !0
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        comparefields: [t.parent(e, "fieldset"), t.getAttribute(e, "data-comparefields"), t.getAttribute(e, "data-comparefields-regexp")]
                    })
                }, n)), e = t.find(".unique[data-unique-num][data-unique-fields]", this.form), e.length && (this.addMethod("unique", function(e, r, i) {
                    var o = [];
                    return s.each(t.find(t.getAttribute(r, "data-unique-fields"), n.form), function(e) {
                        t.inArray(e.value, o) == -1 && o.push(e.value)
                    }, n), o.length > i ? !1 : !0
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        unique: t.getAttribute(e, "data-unique-num")
                    })
                }, n)), e = t.find(".blacklist", this.form), e.length && (this.addMethod("blacklist", function(e, t, n) {
                    return !s.contains(n, e)
                }), s.each(e, function(e) {
                    var n = [];
                    t.getAttribute(e, "data-blacklist") ? n = t.getAttribute(e, "data-blacklist").split(",") : this.options.blacklist && this.options.blacklist[e.id] && (n = this.options.blacklist[e.id]), n.length && u(e).rules("add", {
                        blacklist: n
                    })
                }, this)), this.addMethod("iban", l), e = t.find(".js-v-iban", this.form), e.length && s.each(e, function(e) {
                    var n = t.getAttribute(e, "data-iban-country") ? t.getAttribute(e, "data-iban-country") : "";
                    u(e).rules("add", {
                        iban: n
                    })
                }), this.addMethod("ibannotmill", function(e, t, n) {
                    if (l(e, t, n)) {
                        e = e.replace(/\s+/g, "");
                        var r = e.slice(2, 10);
                        return r !== "11602202"
                    }
                    return !1
                }), e = t.find(".js-v-iban-not-mill", this.form), e.length && s.each(e, function(e) {
                    u(e).rules("add", {
                        ibannotmill: ""
                    })
                }), this.addMethod("idnumber", function(e, t, n) {
                    if (e == "") return !0;
                    if (e == null || e.length != 9) return !1;
                    var r = {
                            0: 0,
                            1: 1,
                            2: 2,
                            3: 3,
                            4: 4,
                            5: 5,
                            6: 6,
                            7: 7,
                            8: 8,
                            9: 9,
                            A: 10,
                            B: 11,
                            C: 12,
                            D: 13,
                            E: 14,
                            F: 15,
                            G: 16,
                            H: 17,
                            I: 18,
                            J: 19,
                            K: 20,
                            L: 21,
                            M: 22,
                            N: 23,
                            O: 24,
                            P: 25,
                            Q: 26,
                            R: 27,
                            S: 28,
                            T: 29,
                            U: 30,
                            V: 31,
                            W: 32,
                            X: 33,
                            Y: 34,
                            Z: 35
                        },
                        i, s;
                    e = e.toUpperCase();
                    for (i = 0; i < 3; i++)
                        if (r[e[i]] < 10) return !1;
                    for (i = 3; i < 9; i++)
                        if (r[e[i]] < 0 || r[e[i]] > 9) return !1;
                    return s = 7 * r[e[0]] + 3 * r[e[1]] + 1 * r[e[2]] + 7 * r[e[4]] + 3 * r[e[5]] + 1 * r[e[6]] + 7 * r[e[7]] + 3 * r[e[8]], s %= 10, s == r[e[3]]
                }), e = t.find(".id-number", this.form), e.length && s.each(e, function(e) {
                    u(e).rules("add", {
                        idnumber: !0
                    })
                }.bind(this)), this.addMethod("passportpl", c), e = t.find(".js-v-passport-pl", this.form), e.length && s.each(e, function(e) {
                    u(e).rules("passportpl", {
                        passportpl: !0
                    })
                }.bind(this)), this.addMethod("documenttype", h), e = t.find(".js-v-document-type", this.form), e.length && s.each(e, function(e) {
                    u(e).rules("documenttype", {
                        documenttype: !0
                    })
                }.bind(this)), e = t.find(".equal-value[data-equal-value]", this.form), this.addMethod("equal-value", function(e, t, n) {
                    return e == n
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        "equal-value": t.getAttribute(e, "data-equal-value")
                    })
                }), e = t.find(".not-equal-value[data-not-equal-value]", this.form), this.addMethod("not-equal-value", function(e, t, n) {
                    return e != n
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        "not-equal-value": t.getAttribute(e, "data-not-equal-value")
                    })
                }), e = t.find("input.checked", this.form), this.addMethod("checked", function(e, n, r) {
                    return t.find('input[name="' + t.getAttribute(n, "name") + '"]:checked').length > 0
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        checked: !0
                    })
                }), e = t.find("input.require-one-checkbox", this.form), this.addMethod("require-one-checkbox", function(e, n, r) {
                    return t.find(".require-one-checkbox:checked", t.parent(n, "fieldset")).length > 0
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        "require-one-checkbox": !0
                    })
                }), e = t.find(".letterspl", this.form), this.addMethod("letterspl", function(e, t, n) {
                    var r = this.options.patterns.letters,
                        i = new RegExp(r);
                    return i.test(e)
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        letterspl: !0
                    })
                }), e = t.find(".letters-and-separator", this.form), this.addMethod("lettersandseparator", function(e, t, r) {
                    var i = n.options.patterns.lettersandseparator,
                        s = new RegExp(i);
                    return s.test(e)
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        lettersandseparator: !0
                    })
                }), e = t.find(".letters-and-separators", this.form), this.addMethod("lettersandseparators", function(e, t, n) {
                    var r = "^[\\-\\sa-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,40}$",
                        i = new RegExp(r);
                    return i.test(e)
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        lettersandseparators: !0
                    })
                }), e = t.find(".phone", this.form), this.addMethod("phone", function(e, t, n) {
                    var r = "^[1-9]{1}[0-9]{2,11}$",
                        i = new RegExp(r);
                    return i.test(e)
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        phone: !0
                    })
                }), e = t.find(".tpphone", this.form), this.addMethod("tpphone", function(e, t, n) {
                    if (e != "") {
                        var r = "^[1-9]{1}([0-9]{8}|[0-9]{11})$",
                            i = new RegExp(r);
                        return i.test(e)
                    }
                    return !0
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        tpphone: !0
                    })
                }), e = t.find(".tpphonemobileandhome", this.form), this.addMethod("tpphonemobileandhome", function(e, t, n) {
                    if (e != "") {
                        var r = "([0-9]{1,3}s[0-9]{6,9})|([1-9]{1}([0-9]{8}|[0-9]{11}))",
                            i = new RegExp(r);
                        return i.test(e)
                    }
                    return !0
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        tpphonemobileandhome: !0
                    })
                }), e = t.find(".mobile", this.form), this.addMethod("mobile", function(e, t, n) {
                    var r = "^[1-9]{1}[0-9]{8,8}$",
                        i = new RegExp(r);
                    return i.test(e)
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        mobile: !0
                    })
                }), e = t.find(".phone-nreq", this.form), this.addMethod("phone-nreq", function(e, t, n) {
                    var r = "^([1-9]{1}[0-9]{8,8}){0,1}$",
                        i = new RegExp(r);
                    return i.test(e)
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        "phone-nreq": !0
                    })
                }), e = t.find(".disableifnotempty", this.form), this.addMethod("disableifnotempty", function(e, t, n) {
                    return t
                }), s.each(e, function(e) {
                    var n = this,
                        r = t.getData(e, "disabled-submit"),
                        i = r != "" ? t.find("#" + r) : "";
                    i.length && t.on(e, "keyup", i, function(n) {
                        t.getAttribute(e, "value") != "" ? t.setAttribute(i, "disabled", "disabled") : t.removeAttribute(i, "disabled", "disabled")
                    }), u(e).rules("add", {
                        disableifnotempty: !0
                    })
                }), e = t.find(".js-v-pesel", this.form), this.addMethod("pesel", function(e, t, n) {
                    return p(e)
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        pesel: !0
                    })
                }), e = t.find(".js-v-pesel-adult", this.form), this.addMethod("peseladult", function(e, t, n) {
                    if (p(e)) {
                        var r = new Date,
                            i = parseInt(e.substr(0, 2)) + 1900,
                            s = parseInt(e.substr(2, 2)),
                            o = parseInt(e.substr(4, 2));
                        return s > 20 && (i += 100, s -= 20), !(new Date(i + 18, s, o) - new Date(r.getFullYear(), r.getMonth() + 1, r.getDate()) > 0)
                    }
                    return !1
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        peseladult: !0
                    })
                }), e = t.find(".js-v-regon", this.form), this.addMethod("regon", function(e, t, n) {
                    return d(e)
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        regon: !0
                    })
                }), e = t.find(".js-v-nip", this.form), this.addMethod("nip", function(e, t, n) {
                    return v(e)
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        nip: !0
                    })
                }), e = t.find(".streetNo", this.form), this.addMethod("streetNo", function(e, t, n) {
                    var r = "^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9/]{0,10}$",
                        i = new RegExp(r);
                    return i.test(e)
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        streetNo: !0
                    })
                }), e = t.find(".streetname", this.form), this.addMethod("streetname", function(e, t, n) {
                    var r = "^[,.\\/\\-\\sa-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9]{2,165}$",
                        i = new RegExp(r);
                    return i.test(e)
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        streetname: !0
                    })
                }), e = t.find(".email-simple", this.form), this.addMethod("emailsimple", function(e, t, n) {
                    if (e != "") {
                        var r = "^[_a-zA-Z0-9-]+(\\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{2,4})$",
                            i = new RegExp(r);
                        return i.test(e)
                    }
                    return !0
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        emailsimple: !0
                    })
                }), e = t.find(".not-email", this.form), this.addMethod("notemail", function(e, t, n) {
                    if (e != "") {
                        var r = "\\w{1,}[@][\\w\\-]{1,}([.]([\\w\\-]{1,})){1,3}$",
                            i = new RegExp(r);
                        return !i.test(e)
                    }
                    return !0
                }), s.each(e, function(e) {
                    u(e).rules("add", {
                        notemail: !0
                    })
                })
            },
            onPostcodeOut: function(e) {
                var n = this;
                e.preventDefault(), e.stopPropagation(), n.postBlur = !1, setTimeout(function() {
                    !n.postBlur && (t.hasClass(e.target, n.options.errorClass) || !t.hasClass(e.target, n.options.errorClass) && (e.data[0].value.length || e.data[1].value.length)) && u(e.target).valid() && (t.trigger(e.data[0], "validBlur"), (n.focusVal[0] != e.data[0].value || n.focusVal[1] != e.data[1].value) && t.trigger(e.data[0], "validChange"), n.focusVal = null)
                }, 100)
            },
            onPostcodeIn: function(e) {
                var t = this;
                t.focusVal == null && (t.focusVal = [e.data[0].value, e.data[1].value]), t.postBlur = !0
            },
            onCode1Key: function(e) {
                var n = e.target,
                    r = e.keyCode ? e.keyCode : e.charCode;
                if (n.value.length == 2 && r != 8 && !self.dblclick) {
                    var i = t.find("#" + t.getAttribute(n, "data-postalcode2"))[0];
                    i.focus()
                }
                self.dblclick = !1
            },
            onCode2Key: function(e) {
                var n = e.target,
                    r = e.keyCode ? e.keyCode : e.charCode;
                if (n.value.length == 0 && r == 8) {
                    var i = t.find("#" + t.getAttribute(n, "data-postalcode1"))[0];
                    i.focus()
                }
            },
            onCode1DblClick: function(e) {
                self.dblclick = !0
            },
            addMethod: function(e, t) {
                u.validator.addMethod(e, t, e)
            },
            validate: function() {
                return t.removeClass(this.allSubmits, "clicked-submit"), this.doValidation()
            },
            doValidation: function() {
                return u(this.form).valid()
            },
            initRadioAndCheckboxValidation: function() {
                var e = u("input[type=checkbox].checked, input[type=radio].checked", this.form);
                e.length && t.on(e, this.options.customForms ? ns.events.customCheckboxChange : "change", this.onControlsChange.bind(this))
            },
            onControlsChange: function(e) {
                this.lastClicked = e.currentTarget, this.options.actionToAsk != "" ? this.askForAction(this.options.actionToAsk, {
                    ev: "validation-ask-for-" + this.options.actionToAsk,
                    modId: this.modId
                }, this.onValidationPermitted.bind(this)) : u(this.lastClicked).valid()
            },
            innerAjaxHandler: function() {
                this.initAdvancedRules()
            },
            onfocusout: function(e) {
                u(this.form).valid()
            },
            initDependantValidation: function() {
                var e = t.find(".js-v-dependant-trigger", this.form);
                s.each(e, function(e) {
                    t.on(e, "change", this.validationTriggerChange.bind(this))
                }, this)
            },
            validationTriggerChange: function(e) {
                var n = e.target,
                    r = n.tagName.toLowerCase() === "select" ? n.options[n.selectedIndex] : n,
                    i = t.getData(r, "v-rules"),
                    o = i ? i.split("|") : [],
                    a = t.find("#" + t.getData(r, "v-input")),
                    f = {};
                o.length && s.each(o, function(e) {
                    f[e] = !0
                }), a.length && (u(a).rules() && u(a).rules("remove"), o.length && u(a).rules("add", f), t.hasClass(a, this.options.errorClass) && this.validator.element(a))
            }
        }), l
    });