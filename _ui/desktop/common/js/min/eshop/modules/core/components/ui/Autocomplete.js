define(["exports", "react", "prop-types", "../hoc/input", "eshop/modules/core/utils/ui"], function(e, o, t, r, s) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function u(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.LabeledAutocomplete = e.default = e.Autocomplete = e.AutocompleteInput = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireDefault(t);
    var a = 0,
        i = function(e) {
            babelHelpers.inherits(n, e);
            var r = u(n);

            function n(e) {
                var t;
                return babelHelpers.classCallCheck(this, n), (t = r.call(this, e)).id = e.id || "react-autocomplete-" + a++, t
            }
            return babelHelpers.createClass(n, [{
                key: "componentDidMount",
                value: function() {
                    this.modulePromise = (0, s.loadModule)(this.ref, {
                        path: "common/modules/opl-autocomplete",
                        options: {
                            noWrap: !0,
                            arrayData: !0,
                            minLength: this.props.minLength,
                            maxResults: this.props.maxResults,
                            completecallback: this.onSelect.bind(this)
                        }
                    }), this.updateSuggestions()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.suggestions !== this.props.suggestions && this.updateSuggestions()
                }
            }, {
                key: "updateSuggestions",
                value: function() {
                    if (this.props.suggestions) {
                        var e = this.props.suggestions.map(this.props.mapSuggestion);
                        OPL.UI.fire(OPL.UI.EVENTS.modules.autocomplete.arrayData, e, this.id)
                    }
                }
            }, {
                key: "onSelect",
                value: function() {
                    if (this.props.onChange) {
                        var e = this.ref,
                            t = e.id,
                            r = e.name,
                            n = e.value;
                        this.props.onChange({
                            id: t,
                            name: r,
                            value: n
                        })
                    }
                }
            }, {
                key: "onChangeValue",
                value: function(e) {
                    if (this.props.onChange) {
                        var t = e.target,
                            r = t.id,
                            n = t.name,
                            o = t.value;
                        this.props.onChange({
                            id: r,
                            name: n,
                            value: o
                        })
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return o.default.createElement("input", babelHelpers.extends({
                        type: "text"
                    }, (0, s.excludeProps)(this.props, n.OWN_PROPS), {
                        id: this.id,
                        onChange: this.onChangeValue.bind(this),
                        ref: function(e) {
                            return t.ref = e
                        }
                    }))
                }
            }]), n
        }(o.Component);
    (e.AutocompleteInput = i).OWN_PROPS = ["suggestions", "mapSuggestion", "minLength", "maxResults", "errors", "labelType"], i.propTypes = {
        suggestions: t.default.array,
        mapSuggestion: t.default.func.isRequired,
        minLength: t.default.number,
        maxResults: t.default.number,
        value: t.default.string.isRequired,
        onChange: t.default.func.isRequired
    }, i.defaultProps = {
        minLength: 3,
        mapSuggestion: function(e) {
            return {
                value: e,
                label: e
            }
        }
    };

    function l(e) {
        return o.default.createElement("div", {
            className: "opl-autocomplete"
        }, o.default.createElement(i, e))
    }
    var p = e.Autocomplete = l;
    e.default = p;
    var c = (0, r.addLabelToInput)(i);
    (e.LabeledAutocomplete = c).defaultProps = function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }({}, c.defaultProps, {}, i.defaultProps, {
        wrapperClassName: "opl-autocomplete"
    })
});
//# sourceMappingURL=Autocomplete.js.map