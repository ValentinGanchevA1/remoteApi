define(["exports", "react", "react-dom", "prop-types", "lodash", "../utils/OnlineUtils", "../modules/core/utils/ui", "./common/OraMessage", "./common/OraLoader"], function(e, s, t, a, l, n, r, i, o) {
    "use strict";

    function p(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "OraMessage", {
        enumerable: !0,
        get: function() {
            return i.default
        }
    }), Object.defineProperty(e, "OraLoader", {
        enumerable: !0,
        get: function() {
            return o.OraLoader
        }
    }), Object.defineProperty(e, "OraLoaderChildren", {
        enumerable: !0,
        get: function() {
            return o.OraLoaderChildren
        }
    }), Object.defineProperty(e, "OraParentLoader", {
        enumerable: !0,
        get: function() {
            return o.OraParentLoader
        }
    }), e.OraAddBar = e.SwitchButtons = e.FloatingLabelForDatePicker = e.OraDatePicker = e.OraTieredPrice = e.OraPrice = e.GenericPopup = e.OraModal = e.OraButton = e.OraSpinner = e.OraInputWithLabel = e.OraSimpleCheckbox = e.OraSimpleRadio = e.OraComplexRadio = e.OraInput = e.OraLabel = e.OraFloatingTextArea = e.OraFloatingSelect = e.OraMulticartSelect = e.OraCmpSelect = e.OraSelect = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t), a = babelHelpers.interopRequireDefault(a), l = babelHelpers.interopRequireDefault(l), n = babelHelpers.interopRequireDefault(n), i = babelHelpers.interopRequireDefault(i);
    var u = function(e) {
        babelHelpers.inherits(l, e);
        var a = p(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), (t = a.call(this, e)).handleChange = t.handleChange.bind(babelHelpers.assertThisInitialized(t)), t.handleChangeIe8 = t.handleChangeIe8.bind(babelHelpers.assertThisInitialized(t)), t.handleClick = t.handleClick.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(l, [{
            key: "componentDidMount",
            value: function() {
                n.default.ifIe8 && document.getElementById(this.props.id).attachEvent("onchange", this.handleChangeIe8.bind(this))
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.props.isFeedbackParam && "undefined" != typeof Feedback && Feedback.showHideFeedback()
            }
        }, {
            key: "handleChangeIe8",
            value: function(e) {
                var t = e.srcElement,
                    a = t.id,
                    l = t.name,
                    s = t.value;
                this.props.onChange({
                    id: a,
                    name: l,
                    value: s
                })
            }
        }, {
            key: "handleChange",
            value: function(e) {
                var t = e.target,
                    a = t.id,
                    l = t.name,
                    s = t.value;
                this.props.onChange({
                    id: a,
                    name: l,
                    value: s
                })
            }
        }, {
            key: "handleClick",
            value: function(e) {
                var t = e.currentTarget.dataset,
                    a = t.id,
                    l = t.value;
                this.props.onChange({
                    id: a,
                    value: l
                })
            }
        }, {
            key: "render",
            value: function() {
                var a = this;
                return 1 === this.props.options.length && this.props.options[0] ? s.default.createElement("p", {
                    className: "u-padding-top-m u-padding-left-m " + this.props.singleOptionClassName
                }, this.props.singleDataText ? this.props.singleDataText : null, this.props.options[0].description) : "TAB" === this.props.selectionType ? s.default.createElement("div", {
                    className: "opl-tabs opl-tabs--small opl-tabs--secondary opl-tabs--arrows"
                }, 1 < this.props.options.length ? s.default.createElement("div", {
                    className: "opl-tabs__nav-wrapper"
                }, s.default.createElement("div", {
                    className: "opl-tabs__nav-wrapper-inner opl-tabs__arrows opl-tabs__gradient-right"
                }, s.default.createElement("ul", {
                    className: "opl-tabs__nav",
                    "data-js-module": "common/modules/opl-tabs",
                    "data-js-options": '{"tabNavLinkInnerCor": 30, "arrows": true, "tabArrows": true, "draggable": false}'
                }, this.props.options.map(function(e, t) {
                    return s.default.createElement("li", {
                        className: "opl-tabs__nav-item"
                    }, s.default.createElement("div", {
                        className: "opl-tabs__nav-item__content"
                    }, s.default.createElement("a", {
                        href: "#",
                        onClick: a.handleClick,
                        "data-id": a.props.id + e.value,
                        "data-value": e.value,
                        className: "opl-tabs__nav-link " + (e.value === a.props.selected ? "is-active" : ""),
                        "data-selected": e.description === a.props.selectedName ? "1" : "0",
                        "aria-selected": e.value === a.props.selected
                    }, s.default.createElement("span", {
                        className: "opl-tabs__nav-link-inner"
                    }, s.default.createElement("span", null, e.description)))))
                })))) : null) : s.default.createElement("div", {
                    className: "o-select " + this.props.className
                }, this.props.label ? s.default.createElement("label", {
                    htmlFor: this.props.id,
                    className: "u-acc-hide"
                }, this.props.label) : null, s.default.createElement("select", {
                    onChange: this.handleChange,
                    name: this.props.name,
                    value: this.props.selected,
                    id: this.props.id,
                    disabled: this.props.disabled,
                    "aria-label": this.props.ariaLabel,
                    "data-feedback-param": this.props.isFeedbackParam,
                    className: this.props.selectClassName
                }, this.props.withEmptyOption ? s.default.createElement("option", {
                    key: this.props.emptyOption.value,
                    value: this.props.emptyOption.value
                }, this.props.emptyOption.description) : null, this.props.options.map(function(e) {
                    return s.default.createElement("option", {
                        key: e.value,
                        value: e.value,
                        hidden: e.hidden,
                        disabled: e.disabled
                    }, e.description)
                })), s.default.createElement("span", {
                    className: "o-select__arrow"
                }))
            }
        }]), l
    }(s.Component);
    (e.OraSelect = u).propTypes = {
        label: a.default.string,
        id: a.default.string.isRequired,
        isFeedbackParam: a.default.any,
        name: a.default.string,
        options: a.default.arrayOf(a.default.shape({
            value: a.default.oneOfType([a.default.string, a.default.number]),
            description: a.default.string
        })),
        selected: a.default.oneOfType([a.default.string, a.default.number]),
        disabled: a.default.bool,
        className: a.default.string,
        onChange: a.default.func,
        emptyOption: a.default.shape({
            value: a.default.string,
            description: a.default.string
        }),
        withEmptyOption: a.default.bool,
        singleDataText: a.default.string,
        selectClassName: a.default.string,
        singleOptionClassName: a.default.string,
        selectionType: a.default.string,
        ariaLabel: a.default.string
    }, u.defaultProps = {
        emptyOption: {
            value: "",
            description: "Wybierz..."
        },
        withEmptyOption: !1,
        selectClassName: "",
        singleOptionClassName: "",
        selectionType: "DROPDOWN",
        ariaLabel: "wybierz z listy"
    };
    var d = function(e) {
        babelHelpers.inherits(l, e);
        var a = p(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), (t = a.call(this, e)).handleChange = t.handleChange.bind(babelHelpers.assertThisInitialized(t)), t.handleChangeIe8 = t.handleChangeIe8.bind(babelHelpers.assertThisInitialized(t)), t.handleClick = t.handleClick.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(l, [{
            key: "componentDidMount",
            value: function() {
                n.default.ifIe8 && document.getElementById(this.props.id).attachEvent("onchange", this.handleChangeIe8.bind(this))
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.props.isFeedbackParam && "undefined" != typeof Feedback && Feedback.showHideFeedback()
            }
        }, {
            key: "handleChangeIe8",
            value: function(e) {
                var t = e.srcElement,
                    a = t.id,
                    l = t.name,
                    s = t.value;
                this.props.onChange({
                    id: a,
                    name: l,
                    value: s
                })
            }
        }, {
            key: "handleChange",
            value: function(e) {
                var t = e.target,
                    a = t.id,
                    l = t.name,
                    s = t.value;
                this.props.onChange({
                    id: a,
                    name: l,
                    value: s
                })
            }
        }, {
            key: "handleClick",
            value: function(e) {
                var t = e.currentTarget.dataset,
                    a = t.id,
                    l = t.value;
                this.props.onChange({
                    id: a,
                    value: l
                })
            }
        }, {
            key: "render",
            value: function() {
                var a = this;
                return "TAB" === this.props.selectionType ? s.default.createElement("div", {
                    className: "opl-tabs opl-tabs--small opl-tabs--secondary opl-tabs--arrows"
                }, 1 < this.props.options.length ? s.default.createElement("div", {
                    className: "opl-tabs__nav-wrapper"
                }, s.default.createElement("div", {
                    className: "opl-tabs__nav-wrapper-inner opl-tabs__arrows opl-tabs__gradient-right"
                }, s.default.createElement("ul", {
                    className: "opl-tabs__nav",
                    "data-js-module": "common/modules/opl-tabs",
                    "data-js-options": '{"tabNavLinkInnerCor": 30, "arrows": true, "tabArrows": true, "draggable": false}'
                }, this.props.options.map(function(e, t) {
                    return s.default.createElement("li", {
                        className: "opl-tabs__nav-item"
                    }, s.default.createElement("div", {
                        className: "opl-tabs__nav-item__content"
                    }, s.default.createElement("a", {
                        href: "#",
                        onClick: a.handleClick,
                        "data-id": a.props.id + e.value,
                        "data-value": e.value,
                        className: "opl-tabs__nav-link " + (e.value === a.props.selected ? "is-active" : ""),
                        "data-selected": e.description === a.props.selectedName ? "1" : "0",
                        "aria-selected": e.value === a.props.selected
                    }, s.default.createElement("span", {
                        className: "opl-tabs__nav-link-inner"
                    }, s.default.createElement("span", null, e.description)))))
                })))) : null) : s.default.createElement("div", {
                    className: "o-select " + this.props.className
                }, this.props.label ? s.default.createElement("label", {
                    htmlFor: this.props.id,
                    className: "u-acc-hide"
                }, this.props.label) : null, s.default.createElement("select", {
                    onChange: this.handleChange,
                    name: this.props.name,
                    value: this.props.selected,
                    id: this.props.id,
                    disabled: this.props.disabled,
                    "aria-label": this.props.ariaLabel,
                    "data-feedback-param": this.props.isFeedbackParam,
                    className: this.props.selectClassName
                }, this.props.withEmptyOption ? s.default.createElement("option", {
                    key: this.props.emptyOption.value,
                    value: this.props.emptyOption.value
                }, this.props.emptyOption.description) : null, this.props.options.map(function(e) {
                    return s.default.createElement("option", {
                        key: e.value,
                        value: e.value,
                        hidden: e.hidden,
                        disabled: e.disabled
                    }, e.description)
                })), s.default.createElement("span", {
                    className: "o-select__arrow"
                }))
            }
        }]), l
    }(s.Component);
    e.OraCmpSelect = d;
    var c = 0,
        h = function(e) {
            babelHelpers.inherits(l, e);
            var a = p(l);

            function l(e) {
                var t;
                return babelHelpers.classCallCheck(this, l), (t = a.call(this, e)).handleChange = t.handleChange.bind(babelHelpers.assertThisInitialized(t)), t.containerId = "multicartSelect_" + c++, t.optionsChange = !1, t
            }
            return babelHelpers.createClass(l, [{
                key: "componentDidMount",
                value: function() {
                    1 < this.props.options.length && this.loadModule()
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    this.props.withEmptyOption && this.props.options.unshift(this.props.emptyOption)
                }
            }, {
                key: "loadModule",
                value: function() {
                    OPL.UI.loadModules(this.ref, [{
                        path: "common/modules/opl-dropdown-select",
                        options: this.getSelectOptions()
                    }])
                }
            }, {
                key: "killModule",
                value: function() {
                    OPL.UI.stopModules(document.getElementById(this.containerId))
                }
            }, {
                key: "componentWillUpdate",
                value: function(e) {
                    e.withEmptyOption && e.options.unshift(e.emptyOption), this.compareOptionsArrays(this.props.options, e.options) || (this.optionsChange = !0, this.killModule()), this.props = e
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.optionsChange && 1 < this.props.options.length && this.loadModule(), this.optionsChange = !1
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.killModule()
                }
            }, {
                key: "compareOptionsArrays",
                value: function(e, a) {
                    var l = this;
                    return e.length === a.length && (0 !== e.length && e.map(function(e, t) {
                        return l.compareOptions(e, a[t])
                    }).reduce(function(e, t) {
                        return e && t
                    }))
                }
            }, {
                key: "compareOptions",
                value: function(e, t) {
                    for (var a in e) {
                        if (!t.hasOwnProperty(a)) return !1;
                        if (t[a] !== e[a]) return !1
                    }
                    return !0
                }
            }, {
                key: "getSelectOptions",
                value: function() {
                    return {
                        inputValue: ".opl-dropdown-select--value",
                        triggerClass: ".opl-dropdown-select--btn",
                        contentClass: ".opl-dropdown-select--list",
                        forceDown: !!this.props.forceDown && this.props.forceDown
                    }
                }
            }, {
                key: "handleChange",
                value: function(e) {
                    var t = e.value;
                    this.props.onChange({
                        value: t
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var a = this;
                    return 1 === this.props.options.length && this.props.options[0] ? s.default.createElement("label", {
                        className: this.props.className
                    }, this.props.singleDataText ? this.props.singleDataText : null, this.props.options[0].description) : s.default.createElement("div", {
                        id: this.containerId
                    }, s.default.createElement("div", {
                        ref: function(e) {
                            return a.ref = e
                        },
                        "aria-label": "",
                        className: "opl-dropdown-select " + (this.props.className ? this.props.className : ""),
                        id: this.props.id
                    }, s.default.createElement("input", {
                        type: "hidden",
                        name: "select_offer",
                        className: "opl-dropdown-select--value",
                        value: this.props.selected
                    }), s.default.createElement("button", {
                        className: "opl-dropdown-select--btn " + this.props.btnClassName,
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                        disabled: this.props.disabled,
                        name: this.props.name
                    }, this.props.options[0] ? this.props.options[0].description : ""), s.default.createElement("ul", {
                        role: "menu",
                        className: "opl-dropdown-select--list"
                    }, this.props.options.map(function(e, t) {
                        return s.default.createElement("li", {
                            role: "menuitem",
                            key: t,
                            hidden: e.hidden,
                            disabled: e.disabled
                        }, s.default.createElement("a", {
                            href: "#",
                            "data-option": e.value,
                            onClick: a.handleChange.bind(a, e)
                        }, e.description))
                    }))))
                }
            }]), l
        }(s.Component);
    (e.OraMulticartSelect = h).propTypes = {
        id: a.default.string.isRequired,
        name: a.default.string,
        options: a.default.arrayOf(a.default.shape({
            value: a.default.oneOfType([a.default.string, a.default.number]),
            description: a.default.string
        })),
        selected: a.default.oneOfType([a.default.string, a.default.number]),
        disabled: a.default.bool,
        className: a.default.string,
        btnClassName: a.default.string,
        onChange: a.default.func,
        emptyOption: a.default.shape({
            value: a.default.string,
            description: a.default.string
        }),
        withEmptyOption: a.default.bool,
        singleDataText: a.default.string
    }, h.defaultProps = {
        emptyOption: {
            value: "",
            description: "Wybierz..."
        },
        withEmptyOption: !1
    };
    var f = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "componentDidMount",
            value: function() {
                (0, r.loadModule)(this.refs.wrapper, {
                    path: "core/modules/floating-label"
                })
            }
        }, {
            key: "handleChange",
            value: function(e) {
                var t = e.target,
                    a = t.id,
                    l = t.name,
                    s = t.value;
                this.props.onChange({
                    id: a,
                    name: l,
                    value: s
                })
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = this.props.withEmptyOption ? [this.props.emptyOption].concat(this.props.options) : this.props.options.slice();
                return s.default.createElement("div", {
                    className: "o-floating-label o-select " + this.props.className,
                    ref: "wrapper"
                }, s.default.createElement("select", {
                    className: this.props.btnClassName + (this.props.value ? " is-not-empty" : ""),
                    value: this.props.value || "",
                    id: this.props.id,
                    name: this.props.name,
                    onChange: this.handleChange.bind(this),
                    "aria-describedby": "floating-label__placeholder",
                    disabled: this.props.disabled
                }, e.map(function(e) {
                    return s.default.createElement("option", {
                        key: t.props.id + "_" + e.value,
                        value: e.value,
                        disabled: e.disabled,
                        hidden: e.hidden
                    }, e.description)
                })), s.default.createElement("span", {
                    className: "o-select__arrow"
                }), s.default.createElement("p", {
                    className: "label o-floating-label__placeholder",
                    id: "floating-label__placeholder"
                }, this.props.label))
            }
        }]), a
    }(s.Component);
    e.OraFloatingSelect = f;
    var m = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "componentDidMount",
            value: function() {
                (0, r.loadModule)(this.refs.wrapper, {
                    path: "core/modules/floating-label"
                })
            }
        }, {
            key: "handleChange",
            value: function(e) {
                var t = e.target,
                    a = t.id,
                    l = t.name,
                    s = t.value;
                this.props.onChange({
                    id: a,
                    name: l,
                    value: s
                })
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("div", {
                    className: "o-floating-label " + this.props.className,
                    ref: "wrapper"
                }, s.default.createElement("textarea", {
                    id: this.props.id,
                    name: this.props.name,
                    className: this.props.txtAreaClassName,
                    style: this.props.txtAreaStyle,
                    "aria-describedby": "floating-label__textarea",
                    disabled: this.props.disabled,
                    onChange: this.handleChange.bind(this),
                    maxLength: this.props.maxlength
                }, this.props.value), s.default.createElement("span", {
                    className: "o-select__arrow"
                }), s.default.createElement("p", {
                    className: "label o-floating-label__placeholder",
                    id: "floating-label__placeholder"
                }, this.props.label))
            }
        }]), a
    }(s.Component);
    e.OraFloatingTextArea = m, f.propTypes = {
        id: a.default.string.isRequired,
        name: a.default.string.isRequired,
        options: a.default.arrayOf(a.default.shape({
            value: a.default.oneOfType([a.default.string, a.default.number]),
            description: a.default.string,
            hidden: a.default.bool,
            disabled: a.default.bool
        })).isRequired,
        selected: a.default.oneOfType([a.default.string, a.default.number]),
        className: a.default.string,
        btnClassName: a.default.string,
        onChange: a.default.func,
        emptyOption: a.default.shape({
            value: a.default.oneOfType([a.default.string, a.default.number]),
            description: a.default.string,
            hidden: a.default.bool,
            disabled: a.default.bool
        }),
        withEmptyOption: a.default.bool,
        disabled: a.default.bool,
        label: a.default.string
    }, f.defaultProps = {
        emptyOption: {
            value: "",
            description: "Wybierz...",
            hidden: !1,
            disabled: !1
        },
        disabled: !1,
        withEmptyOption: !1
    };

    function b(e) {
        var t = s.default.createElement("label", {
            htmlFor: e.htmlFor,
            className: e.className
        }, e.children);
        return e.wrapperClassName ? s.default.createElement("div", {
            className: e.wrapperClassName
        }, t) : t
    }(e.OraLabel = b).propTypes = {
        value: a.default.string,
        className: a.default.string,
        wrapperClassName: a.default.string,
        htmlFor: a.default.string,
        children: a.default.any
    }, b.defaultProps = {
        value: "",
        className: "",
        wrapperClassName: "",
        htmlFor: ""
    };
    var g = function(e) {
        babelHelpers.inherits(l, e);
        var a = p(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), (t = a.call(this, e)).state = {
                value: ""
            }, t.handleChange = t.handleChange.bind(babelHelpers.assertThisInitialized(t)), t.handleBlur = t.handleBlur.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(l, [{
            key: "handleChange",
            value: function(e) {
                if (this.setState({
                        value: e.target.value
                    }), this.props.onChange) {
                    var t = e.target,
                        a = t.id,
                        l = t.name,
                        s = t.value;
                    this.props.onChange({
                        id: a,
                        name: l,
                        value: s
                    })
                }
            }
        }, {
            key: "handleBlur",
            value: function(e) {
                if (this.props.onBlur) {
                    var t = e.target,
                        a = t.id,
                        l = t.name,
                        s = t.value;
                    this.props.onBlur({
                        id: a,
                        name: l,
                        value: s
                    })
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                !e.focusOnMount && this.props.focusOnMount && $(this.refs.inputRef).focus()
            }
        }, {
            key: "componentDidMount",
            value: function() {
                if (this.props.browserAutocomplete && t.default.findDOMNode(this.refs.inputRef).setAttribute("browserautocomplete", this.props.browserAutocomplete), this.props.focusOnMount) {
                    var e = this;
                    setTimeout(function() {
                        e.refs.inputRef && e.refs.inputRef.focus()
                    }, 500)
                }
                this.props.autocomplete && (OPL.UI.loadModules(this.refs.inputRef, {
                    path: "common/modules/opl-autocomplete",
                    options: {
                        sortElements: !1,
                        url: this.props.autocompleteUrl,
                        type: "POST",
                        responsdatavalue: "id",
                        responsdatalabel: "name",
                        noWrap: !0,
                        completecallback: this.props.onPick,
                        data: this.props.data
                    }
                }), OPL.UI.on("module.started", function(e) {
                    "common/modules/opl-autocomplete" === e.module && e.element.getAttribute("browserautocomplete") && (e.element.autocomplete = e.element.getAttribute("browserautocomplete"))
                }))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.className;
                this.props.value && 0 < this.props.value.length && (e += " is-not-empty");
                var t = s.default.createElement("input", babelHelpers.extends({}, (0, r.excludeProps)(this.props, ["wrapperClassName", "labelType", "validateEmpty", "browserAutocomplete", "focusOnMount", "autocompleteUrl", "onPick", "autocomplete"]), {
                    className: e,
                    ref: "inputRef",
                    onChange: this.handleChange,
                    onBlur: this.handleBlur,
                    onFocus: this.props.onFocus,
                    autoComplete: this.props.browserAutocomplete,
                    onKeyUp: this.props.onKeyUp
                }));
                return this.props.wrapperClassName ? s.default.createElement("div", {
                    className: this.props.wrapperClassName
                }, t) : t
            }
        }]), l
    }(s.PureComponent);
    (e.OraInput = g).propTypes = {
        id: a.default.string,
        name: a.default.string,
        className: a.default.string,
        wrapperClassName: a.default.string,
        placeholder: a.default.string,
        value: a.default.string,
        type: a.default.string,
        maxLength: a.default.string,
        onChange: a.default.func,
        onBlur: a.default.func,
        browserAutocomplete: a.default.string
    }, g.defaultProps = {
        className: "",
        wrapperClassName: "",
        placeholder: "",
        type: "text",
        browserAutocomplete: "on"
    };
    var v = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "handleChange",
            value: function(e) {
                this.props.onChange(e)
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("label", {
                    className: this.props.labelClassName && this.props.labelClassName
                }, s.default.createElement("input", {
                    type: "radio",
                    name: this.props.name,
                    value: this.props.value,
                    disabled: this.props.readOnly,
                    checked: this.props.checked,
                    onChange: this.handleChange.bind(this),
                    className: this.props.inputClassName
                }), s.default.createElement("span", {
                    className: "o-ci"
                }), s.default.createElement("div", {
                    className: "o-ci-label " + this.props.textSpanClassName && this.props.textSpanClassName
                }, this.props.children))
            }
        }]), a
    }(s.Component);
    e.OraComplexRadio = v;
    var C = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "handleChange",
            value: function(e) {
                this.props.onChange(e)
            }
        }, {
            key: "handleClick",
            value: function(e) {
                this.props.onClick(e)
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("label", {
                    className: this.props.labelClassName
                }, s.default.createElement("input", {
                    type: "radio",
                    name: this.props.name,
                    value: this.props.value,
                    disabled: this.props.readOnly,
                    checked: this.props.checked,
                    onChange: this.handleChange.bind(this),
                    className: this.props.inputClassName
                }), s.default.createElement("span", {
                    className: "o-ci " + this.props.spanClassName
                }), s.default.createElement("span", {
                    className: "o-ci-label " + this.props.textSpanClassName
                }, this.props.text))
            }
        }]), a
    }(s.Component);
    (e.OraSimpleRadio = C).propTypes = {
        name: a.default.string,
        text: a.default.string,
        value: a.default.oneOfType([a.default.string, a.default.bool]),
        readOnly: a.default.bool,
        checked: a.default.bool,
        onChange: a.default.func,
        inputClassName: a.default.string,
        labelClassName: a.default.string,
        textSpanClassName: a.default.string,
        spanClassName: a.default.string
    }, C.defaultProps = {
        labelClassName: "o-radio opl-radio",
        readOnly: !1,
        checked: !1,
        spanClassName: "",
        onChange: function() {}
    };
    var y = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "handleChange",
            value: function(e) {
                this.props.onChange(e)
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("label", {
                    className: this.props.labelClassName
                }, s.default.createElement("input", {
                    type: "checkbox",
                    name: this.props.name,
                    value: this.props.value,
                    disabled: this.props.readOnly,
                    checked: this.props.checked,
                    onChange: this.handleChange.bind(this),
                    className: this.props.inputClassName
                }), s.default.createElement("span", {
                    className: "o-ci"
                }), s.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.text))
            }
        }]), a
    }(s.Component);
    (e.OraSimpleCheckbox = y).propTypes = {
        name: a.default.string,
        text: a.default.string,
        value: a.default.oneOfType([a.default.string, a.default.bool]),
        readOnly: a.default.bool,
        checked: a.default.bool,
        onChange: a.default.func,
        labelClassName: a.default.string,
        inputClassName: a.default.string
    }, y.defaultProps = {
        text: "",
        labelClassName: "o-checkbox opl-checkbox",
        readOnly: !1,
        checked: !1,
        onChange: function() {}
    };
    var N = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "render",
            value: function() {
                return s.default.createElement("div", {
                    className: "l-row"
                }, s.default.createElement(b, {
                    htmlFor: this.props.inputId,
                    wrapperClassName: this.props.labelWrapperClass,
                    className: this.props.labelClass
                }, this.props.label), s.default.createElement(g, {
                    id: this.props.inputId,
                    name: this.props.inputName,
                    placeholder: this.props.inputPlaceholder,
                    wrapperClassName: this.props.inputWrapperClass,
                    className: this.props.inputClass,
                    onChange: this.props.inputOnChange,
                    value: this.props.inputValue
                }))
            }
        }]), a
    }(s.Component);
    (e.OraInputWithLabel = N).propTypes = {
        label: a.default.string,
        labelClass: a.default.string,
        labelWrapperClass: a.default.string,
        inputClass: a.default.string,
        inputWrapperClass: a.default.string,
        inputPlaceholder: a.default.string,
        inputId: a.default.string,
        inputName: a.default.string,
        inputOnChange: a.default.func,
        inputValue: a.default.string
    }, N.defaultProps = {
        labelClass: "",
        labelWrapperClass: "",
        inputClass: "",
        inputWrapperClass: "",
        inputPlaceholder: "",
        inputOnChange: function(e) {
            e.id, e.name, e.value
        },
        inputValue: ""
    };
    var k = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "render",
            value: function() {
                return this.props.show ? s.default.createElement("div", {
                    className: "spinner-containing-div"
                }, s.default.createElement("div", {
                    className: "spinner-wrapper"
                }, s.default.createElement("div", {
                    className: "spinner"
                }, s.default.createElement("div", {
                    className: "dot1"
                }), s.default.createElement("div", {
                    className: "dot2"
                })))) : null
            }
        }]), a
    }(s.Component);
    (e.OraSpinner = k).propTypes = {
        show: a.default.bool
    };
    var E = ["type", "size", "modal", "description", "className", "customClasses"],
        O = function(e) {
            babelHelpers.inherits(a, e);
            var t = p(a);

            function a() {
                return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
            }
            return babelHelpers.createClass(a, [{
                key: "getClassName",
                value: function() {
                    return this.props.customClasses ? this.props.customClasses : "o-btn opl-btn" + (0, r.styleVariant)(" opl-btn--", this.props.type) + (0, r.styleVariant)(" opl-btn--", this.props.size) + (0, r.styleVariant)(" ", this.props.className)
                }
            }, {
                key: "getDescription",
                value: function() {
                    if (this.props.description) return s.default.createElement("span", {
                        className: "u-acc-hide"
                    }, this.props.description)
                }
            }, {
                key: "render",
                value: function() {
                    var e = s.default.createElement("button", babelHelpers.extends({}, (0, r.excludeProps)(this.props, E), {
                        disabled: this.props.disabled,
                        className: this.getClassName()
                    }), this.props.children, this.getDescription());
                    return this.props.modal ? s.default.createElement("a", {
                        rel: "modal:close"
                    }, e) : e
                }
            }]), a
        }(s.Component);
    (e.OraButton = O).propTypes = {
        type: a.default.oneOf(["primary", "secondary", "transparent", "text", "green"]),
        size: a.default.oneOf(["small", "medium", "large"]),
        className: a.default.string,
        onClick: a.default.func,
        modal: a.default.bool,
        description: a.default.string,
        children: a.default.any,
        customClasses: a.default.string
    }, O.defaultProps = {
        type: "primary",
        size: "medium",
        modal: !1
    };
    var w = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "getModalOptions",
            value: function() {
                var e = {};
                return e.modalClass = "o-modal" + (this.props.narrow ? " o-modal--narrow" : "") + (!this.props.narrow && this.props.medium ? " o-modal--medium" : ""), null !== this.props.showClose && (e.showClose = this.props.showClose), null !== this.props.escapeClose && (e.escapeClose = this.props.escapeClose), null !== this.props.clickClose && (e.clickClose = this.props.clickClose), null !== this.props.closeText && (e.showCloseText = !0, e.closeText = this.props.closeText), null !== this.props.contentHeight && (e.contentHeight = this.props.contentHeight), e
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("div", null, s.default.createElement("a", {
                    href: "#" + this.props.id,
                    id: this.props.id + "-trigger",
                    className: "o-modal__trigger u-hide",
                    "data-type": "modal:custom",
                    "data-js-module": "core/modules/modal",
                    "data-js-options": JSON.stringify(this.getModalOptions())
                }), s.default.createElement("div", {
                    id: this.props.id,
                    className: "u-hide--soft"
                }, this.props.children))
            }
        }]), a
    }(s.Component);
    (e.OraModal = w).propTypes = {
        id: a.default.string.isRequired,
        narrow: a.default.bool,
        showClose: a.default.bool,
        escapeClose: a.default.bool,
        clickClose: a.default.bool,
        closeText: a.default.string,
        contentHeight: a.default.number,
        children: a.default.any,
        onClose: a.default.func,
        fallback: a.default.func
    }, w.defaultProps = {
        narrow: !1,
        showClose: null,
        closeText: null,
        contentHeight: null,
        escapeClose: null,
        clickClose: null
    };
    var _ = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "render",
            value: function() {
                return s.default.createElement("div", {
                    className: "l-page-row"
                }, s.default.createElement("div", {
                    className: "l-row"
                }, s.default.createElement("div", {
                    className: "l-col l-col-12"
                }, s.default.createElement("h2", null, this.props.title))), s.default.createElement("div", {
                    className: "l-row u-spacing-l"
                }, s.default.createElement("div", {
                    className: "l-col l-col-12"
                }, s.default.createElement("p", null, this.props.content))), s.default.createElement("div", {
                    className: "l-row"
                }, s.default.createElement("div", {
                    className: "u-medium-hide u-large-hide "
                }, s.default.createElement("div", {
                    className: "l-col l-col-small-12 u-margin-s"
                }, s.default.createElement(O, {
                    onClick: this.props.onClickConfirm,
                    className: "u-w-100",
                    modal: !0,
                    type: "secondary"
                }, this.props.confirm)), s.default.createElement("div", {
                    className: "l-col l-col-small-12 "
                }, s.default.createElement(O, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: !0
                }, this.props.decline))), s.default.createElement("div", {
                    className: "u-small-hide"
                }, s.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, s.default.createElement(O, {
                    onClick: this.props.onClickConfirm,
                    className: "u-w-100",
                    modal: !0
                }, this.props.confirm)), s.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, s.default.createElement(O, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: !0,
                    type: "secondary"
                }, this.props.decline)))))
            }
        }]), a
    }(s.Component);
    (e.GenericPopup = _).defaultProps = {
        title: "GenericPopup.title",
        content: "GenericPopup.content",
        confirm: "Tak",
        decline: "Nie",
        onClickDecline: function() {},
        onClickConfirm: function() {}
    };
    var T = a.default.shape({
            currency: a.default.string,
            gross: a.default.string,
            net: a.default.string,
            monthFrom: a.default.number,
            monthTo: a.default.number
        }),
        H = /[1-9]/,
        D = function(e) {
            babelHelpers.inherits(a, e);
            var t = p(a);

            function a() {
                return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
            }
            return babelHelpers.createClass(a, [{
                key: "isEmpty",
                value: function() {
                    return !this.props.price || !this.props.price.gross || !H.test(this.props.price.gross)
                }
            }, {
                key: "getPrice",
                value: function(e) {
                    return e + (this.props.price.currency && "" !== this.props.price.currency ? " " + this.props.price.currency : "")
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.isEmpty(),
                        t = [this.props.className, e ? this.props.classEmpty : this.props.classFilled].join(" ");
                    return s.default.createElement("span", {
                        className: t
                    }, e ? this.props.filler : this.getPrice(this.props.price.gross), e || !this.props.showNet ? null : s.default.createElement("span", {
                        className: this.props.classNet
                    }, "(", this.getPrice(this.props.price.net), " netto)"))
                }
            }]), a
        }(s.Component);
    (e.OraPrice = D).propTypes = {
        price: T,
        className: a.default.string,
        classFilled: a.default.string,
        classEmpty: a.default.string,
        filler: a.default.string,
        showNet: a.default.bool,
        classNet: a.default.string
    }, D.defaultProps = {
        className: "",
        classFilled: "",
        classEmpty: "",
        filler: "—",
        showNet: !1,
        classNet: ""
    };
    var P = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "isTiered",
            value: function() {
                return this.props.price && (1 < this.props.price.length || 1 === this.props.price.length && l.default.first(this.props.price).monthTo < this.props.loyaltyLength)
            }
        }, {
            key: "getMonthDesc",
            value: function(e) {
                return e.monthTo ? this.getMonthDescWithEndCycle(e) : this.getMonthDescUndefinedEndCycle(e)
            }
        }, {
            key: "getMonthDescWithEndCycle",
            value: function(e) {
                return this.props.monthDesc + " " + e.monthFrom + (e.monthTo !== e.monthFrom ? "-" + e.monthTo : "") + ":"
            }
        }, {
            key: "getMonthDescUndefinedEndCycle",
            value: function(e) {
                return this.props.mothFromDesc.replace(/%MONTH%/g, e.monthFrom)
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                return this.isTiered() ? s.default.createElement("ul", null, this.props.price.map(function(e) {
                    return s.default.createElement("li", {
                        key: e.monthFrom + "-" + e.monthTo,
                        className: "opl-table__list-item"
                    }, s.default.createElement("span", {
                        className: t.props.classMonth
                    }, t.getMonthDesc(e)), s.default.createElement(D, babelHelpers.extends({}, t.props, {
                        price: e
                    })))
                })) : s.default.createElement(D, babelHelpers.extends({}, this.props, {
                    price: this.props.price && this.props.price[0]
                }))
            }
        }]), a
    }(s.Component);
    (e.OraTieredPrice = P).propTypes = {
        price: a.default.arrayOf(T),
        className: a.default.string,
        classMonth: a.default.string,
        monthDesc: a.default.string,
        mothFromDesc: a.default.string,
        loyaltyLength: a.default.number
    }, P.defaultProps = {
        className: "",
        classMonth: "",
        monthDesc: "Miesiąc",
        mothFromDesc: "Od %MONTH% miesiąca:"
    };
    var x = s.default.createClass({
        displayName: "OraDatePicker",
        propTypes: {
            id: a.default.string.isRequired,
            value: a.default.string,
            onChange: a.default.func,
            icon: a.default.string,
            floatingLabel: a.default.oneOfType([a.default.bool, a.default.string]),
            inputClassName: a.default.string,
            options: a.default.shape({
                disabledDates: a.default.array,
                datepicker: a.default.bool,
                timepicker: a.default.bool,
                minDate: a.default.oneOfType([a.default.bool, a.default.string]),
                maxDate: a.default.oneOfType([a.default.bool, a.default.string]),
                format: a.default.string,
                formatDate: a.default.string,
                step: a.default.number,
                startDate: a.default.oneOfType([a.default.bool, a.default.string]),
                defaultDate: a.default.oneOfType([a.default.bool, a.default.string]),
                defaultTime: a.default.oneOfType([a.default.bool, a.default.string]),
                disabledWeekDays: a.default.arrayOf(a.default.number),
                allowDates: a.default.arrayOf(a.default.string),
                allowTimes: a.default.arrayOf(a.default.string),
                hideOtherMonth: a.default.bool,
                scrollInput: a.default.bool
            })
        },
        getDefaultProps: function() {
            return {
                icon: "calendar3",
                floatingLabel: !1,
                options: {}
            }
        },
        getDatepickerOptions: function(e) {
            return Object.assign({
                hasIcon: !1
            }, e.options)
        },
        componentDidMount: function() {
            OPL.UI.on(OPL.UI.EVENTS.modules.datepicker.selectedDate, this.onChangeDate, this.props.id), OPL.UI.loadModules(this.refs.datepicker, [{
                path: "common/modules/opl-datepicker",
                options: this.getDatepickerOptions(this.props)
            }])
        },
        componentWillUnmount: function() {
            OPL.UI.off(OPL.UI.EVENTS.modules.datepicker.selectedDate, this.onChangeDate, this.props.id)
        },
        componentWillReceiveProps: function(e) {
            for (var t in e.options)
                if (this.props.options[t] !== e.options[t]) {
                    OPL.UI.fire(OPL.UI.EVENTS.modules.datepicker.loaddata, this.getDatepickerOptions(e), this.props.id);
                    break
                }
        },
        onChangeDate: function() {
            this.props.onChange && this.props.onChange({
                id: this.props.id,
                name: this.props.name,
                value: this.refs.datepicker.value
            })
        },
        onChangeValue: function(e) {
            var t = e.target,
                a = t.id,
                l = t.name,
                s = t.value;
            this.props.onChange && this.props.onChange({
                id: a,
                name: l,
                value: s
            })
        },
        renderContent: function() {
            return [s.default.createElement("input", {
                type: "text",
                id: this.props.id,
                value: this.props.value,
                ref: "datepicker",
                onChange: this.onChangeValue,
                className: this.props.inputClassName
            }), !this.props.icon || s.default.createElement("label", {
                htmlFor: this.props.id,
                className: "calendar-icon g-icon g-icon--" + this.props.icon
            }, s.default.createElement("span", {
                className: "u-acc-hide"
            }, "Pokaż kalendarz"))]
        },
        render: function() {
            return s.default.createElement("div", {
                className: "opl-datepicker"
            }, this.props.floatingLabel ? s.default.createElement(M, this.props, this.renderContent()) : this.renderContent())
        }
    });
    e.OraDatePicker = x;
    var M = s.default.createClass({
        displayName: "FloatingLabelForDatePicker",
        componentDidMount: function() {
            OPL.UI.loadModules(this.refs.labelModule, [{
                path: "core/modules/floating-label",
                options: {}
            }])
        },
        render: function() {
            return s.default.createElement("div", {
                ref: "labelModule",
                className: "o-floating-label"
            }, this.props.children, s.default.createElement("p", {
                className: "label o-floating-label__placeholder"
            }, this.props.floatingLabel))
        }
    });
    e.FloatingLabelForDatePicker = M;
    var I = s.default.createClass({
        displayName: "SwitchButtons",
        propTypes: {
            options: a.default.arrayOf(a.default.shape({
                value: a.default.oneOfType([a.default.string, a.default.number]),
                description: a.default.string
            })),
            onClick: a.default.func,
            buttonClassName: a.default.string,
            switchType: a.default.string
        },
        getDefaultProps: function() {
            return {
                options: [{
                    value: "",
                    description: "Dla Ciebie",
                    selected: !0
                }, {
                    value: "https://www.orange.pl/view/duety",
                    description: "Dla Duetu",
                    selected: !1
                }, {
                    value: "https://www.orange.pl/view/duety#rodzina",
                    description: "Dla Rodziny",
                    selected: !1
                }],
                buttonClassName: "u-cursor-pointer",
                switchType: "SWITCH"
            }
        },
        render: function() {
            var a = this;
            return "TAB" === this.props.switchType ? s.default.createElement("div", {
                className: "opl-tabs opl-tabs--large opl-tabs--secondary"
            }, 1 < this.props.options.length ? s.default.createElement("div", {
                className: "opl-tabs__nav-wrapper"
            }, s.default.createElement("div", {
                className: "opl-tabs__nav-wrapper-inner"
            }, s.default.createElement("ul", {
                className: "opl-tabs__nav",
                "data-js-module": "common/modules/opl-tabs"
            }, this.props.options.map(function(e, t) {
                return s.default.createElement("li", {
                    key: a.props.switchType + "_" + t + "_" + e.value,
                    className: "opl-tabs__nav-item"
                }, s.default.createElement("div", {
                    className: "opl-tabs__nav-item__content" + (0 === t ? " u-no-padding-left" : "")
                }, s.default.createElement("a", {
                    href: e.value,
                    className: "opl-tabs__nav-link u-padding-left-l u-padding-right-l u-padding-top-l-xl" + (e.active ? " is-active" : "")
                }, s.default.createElement("span", {
                    className: "opl-tabs__nav-link-inner"
                }, e.description))))
            })))) : null) : s.default.createElement("div", {
                className: "opl-link-switcher"
            }, s.default.createElement("div", {
                className: "opl-link-switcher__link-list",
                onClick: this.onClick
            }, this.props.options.map(function(e) {
                return s.default.createElement("a", {
                    key: e.description,
                    onClick: function() {
                        return a.props.onClick(e.value)
                    },
                    className: "opl-link-switcher__link " + a.props.buttonClassName + " " + (e.selected ? "active" : "")
                }, e.description)
            })))
        }
    });
    e.SwitchButtons = I;
    var F = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "componentDidMount",
            value: function() {
                this.props.tooltipBtnText && this.props.tooltipContent && (0, r.loadModule)(this.tooltipRef, {
                    path: "core/modules/tooltips",
                    options: {
                        maxWidth: "320",
                        side: "top",
                        trigger: "hover"
                    }
                })
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.props.tooltipBtnText && this.props.tooltipContent && OPL.UI.stopModules(this.tooltipRef)
            }
        }, {
            key: "onAddClick",
            value: function(e) {
                e.preventDefault(), this.props.onAddClick(e)
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = !!this.props.tooltipBtnText && !!this.props.tooltipContent;
                return s.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-small-padding-left u-small-padding-right g-white1-bg u-box-shadow " + this.props.className
                }, s.default.createElement("table", {
                    className: "u-table-fixed"
                }, s.default.createElement("tbody", null, s.default.createElement("tr", null, this.props.icon && s.default.createElement("td", {
                    className: "opl-checkout__icon__cell"
                }, s.default.createElement("span", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--only g-icon--" + this.props.icon
                })), s.default.createElement("td", {
                    ref: function(e) {
                        return t.tooltipRef = e
                    },
                    className: "u-padding-top-l u-padding-l u-padding-right-l u-font-bold u-small-padding-right " + this.props.labelClassName
                }, this.props.label, e && s.default.createElement("a", {
                    href: "#",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "o-tooltip__trigger u-padding-left-s tooltipstered",
                    "aria-describedby": "tooltip_" + this.props.id
                }, s.default.createElement("span", {
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs"
                }), s.default.createElement("span", {
                    className: "u-acc-hide"
                }, this.props.tooltipBtnText)), e && s.default.createElement("div", {
                    className: "o-tooltip__content",
                    id: "tooltip_" + this.props.id,
                    role: "tooltip"
                }, s.default.createElement("p", {
                    className: "u-margin"
                }, this.props.tooltipContent))), s.default.createElement("td", {
                    className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
                }, s.default.createElement("a", {
                    href: "#",
                    "aria-label": this.props.addBtnText,
                    onClick: this.onAddClick.bind(this),
                    className: "opl-product-addlink u-right u-small-right"
                }, s.default.createElement("span", {
                    className: "u-acc-hide"
                }, this.props.addBtnText)))))))
            }
        }]), a
    }(s.Component);
    (e.OraAddBar = F).propTypes = {
        icon: a.default.string,
        id: a.default.string.isRequired,
        tooltipBtnText: a.default.string,
        tooltipContent: a.default.string,
        addBtnText: a.default.string,
        label: a.default.string.isRequired,
        onAddClick: a.default.func.isRequired,
        className: a.default.string,
        labelClassName: a.default.string
    }, F.defaultProps = {
        addBtnText: "Dodaj"
    }
});
//# sourceMappingURL=OraCommonComponents.js.map