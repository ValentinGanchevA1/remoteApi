define(["exports", "react", "prop-types", "jquery", "../../modules/core/utils/ui"], function(e, s, t, a, o) {
    "use strict";

    function l(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
                var i = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, i)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.OraLoader = e.OraLoaderChildren = e.OraParentLoader = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t), a = babelHelpers.interopRequireDefault(a);
    var r = 1,
        i = function(e) {
            babelHelpers.inherits(i, e);
            var t = l(i);

            function i() {
                return babelHelpers.classCallCheck(this, i), t.apply(this, arguments)
            }
            return babelHelpers.createClass(i, [{
                key: "componentWillUpdate",
                value: function(e) {
                    if (this.props.loading !== e.loading)
                        if (e.loading) OPL.UI.fire("modules.loader.show", (0, a.default)("#" + this.id), this.props.parentId);
                        else {
                            var t = this.id,
                                i = this.props.parentId;
                            OPL.UI.fire("modules.loader.hide", (0, a.default)("#" + t), i)
                        }
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    this.props.id ? this.id = this.props.id : this.id = "loaderParent-" + String(r++)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.props.loading && OPL.UI.fire("modules.loader.show", (0, a.default)("#" + this.id), this.props.parentId)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return s.default.createElement("div", {
                        id: this.props.parentId,
                        ref: function(e) {
                            return t.ref = e
                        },
                        "data-js-module": "core/modules/loader"
                    }, s.default.createElement("div", {
                        "data-loader-class": (0, o.styleVariant)("opl-loader--size-", this.props.size),
                        id: this.id
                    }, this.props.children))
                }
            }]), i
        }(s.Component);
    (e.OraParentLoader = i).propTypes = {
        loading: t.default.bool,
        id: t.default.string,
        parentId: t.default.string,
        size: t.default.oneOf(["s", "m", "l"]),
        children: t.default.any
    }, i.defaultProps = {
        size: "l"
    };
    var d = function(e) {
        babelHelpers.inherits(i, e);
        var t = l(i);

        function i() {
            return babelHelpers.classCallCheck(this, i), t.apply(this, arguments)
        }
        return babelHelpers.createClass(i, [{
            key: "componentDidUpdate",
            value: function(e) {
                e.loading !== this.props.loading && (this.props.loading ? OPL.UI.fire("modules.loader.show", (0, a.default)("#" + this.props.id), this.props.parentId) : OPL.UI.fire("modules.loader.hide", (0, a.default)("#" + this.props.id), this.props.parentId))
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("div", {
                    id: this.props.id
                }, this.props.children)
            }
        }]), i
    }(s.Component);
    (e.OraLoaderChildren = d).propTypes = {
        loading: t.default.bool,
        id: t.default.string,
        parentId: t.default.string,
        children: t.default.any
    }, d.defaultProps = {
        id: "loaderChildren-" + String(r++),
        parentId: "",
        loading: !1
    }, window.loaderHeigthFixerTimeout = 0, window.loaderTimeout = [];
    var n = function(e) {
        babelHelpers.inherits(r, e);
        var i = l(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), (t = i.call(this, e)).showLoader = t.showLoader.bind(babelHelpers.assertThisInitialized(t)), t.hideLoader = t.hideLoader.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(r, [{
            key: "getClassName",
            value: function() {
                return "u-position-relative " + (0, o.styleVariant)(" ", this.props.className)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.props.loading && (this.showLoader(), this.traceHeight(!0))
            }
        }, {
            key: "traceHeight",
            value: function(e) {
                if (clearTimeout(window.loaderHeigthFixerTimeout), this.props.useHeightFixing && e) {
                    var t = (0, a.default)("#" + this.props.id).height();
                    (0, a.default)("." + this.props.id).height(t)
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.useHeightFixing && this.props.childrenHeight != e.childrenHeight && this.traceHeight(this.props.loading), this.props.loading !== e.loading) {
                    var t = this;
                    clearTimeout(window.loaderTimeout[this.props.id]), e.loading ? window.loaderTimeout[this.props.id] = setTimeout(function() {
                        t.hideLoader()
                    }, 10) : window.loaderTimeout[this.props.id] = setTimeout(function() {
                        t.showLoader()
                    }, 50)
                }
            }
        }, {
            key: "showLoader",
            value: function() {
                "FULL_SCREEN" === this.props.mode ? OPL.UI.fire("modules.loader.show") : OPL.UI.fire("modules.loader.show", (0, a.default)("#" + this.props.id), this.props.parentId)
            }
        }, {
            key: "hideLoader",
            value: function() {
                "FULL_SCREEN" === this.props.mode ? OPL.UI.fire("modules.loader.hide") : OPL.UI.fire("modules.loader.hide", (0, a.default)("#" + this.props.id), this.props.parentId)
            }
        }, {
            key: "render",
            value: function() {
                return "span" == this.props.blockType ? s.default.createElement("span", {
                    id: this.props.id,
                    "data-loader-class": (0, o.styleVariant)("opl-loader--size-", this.props.size),
                    className: this.getClassName()
                }, this.props.children) : s.default.createElement("div", {
                    id: this.props.id,
                    "data-loader-class": (0, o.styleVariant)("opl-loader--size-", this.props.size),
                    className: this.getClassName()
                }, this.props.children)
            }
        }]), r
    }(s.Component);
    (e.OraLoader = n).propTypes = {
        id: t.default.string,
        parentId: t.default.any,
        loading: t.default.bool,
        className: t.default.string,
        size: t.default.oneOf(["s", "m", "l"]),
        mode: t.default.string,
        children: t.default.any,
        useHeightFixing: t.default.bool
    }, n.defaultProps = {
        id: "loader-" + String(r++),
        parentId: "bsf-container-div",
        loading: !1,
        className: "",
        size: "m",
        useHeightFixing: !1
    }
});
//# sourceMappingURL=OraLoader.js.map