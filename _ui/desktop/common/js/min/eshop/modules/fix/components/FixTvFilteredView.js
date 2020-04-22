define(["exports", "react", "prop-types", "eshop/modules/cart/analyzer/TvChannelUtils", "eshop/components/OraCommonComponents", "eshop/modules/core/utils/ui", "eshop/modules/fix/selectors/root", "../../core/components/ui/Tooltip"], function(e, s, t, a, i, l, n, r) {
    "use strict";

    function c(l) {
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
    }), e.TvDetails = e.default = void 0, s = babelHelpers.interopRequireWildcard(s), r = babelHelpers.interopRequireDefault(r);

    function o(t) {
        if (t.tvPackages) {
            var e = t.tvPackages;
            if (t.offer && t.offer.tvProduct) {
                var a = e.find(function(e) {
                    return t.offer.tvProduct.code === e.id
                });
                e = a ? [a] : e.length ? [e[0]] : []
            }
            var l = [];
            return 0 == e.length ? s.default.createElement("div", null) : (e.forEach(function(e) {
                e.tvChannelList.forEach(function(t) {
                    l.find(function(e) {
                        return e.code == t.code
                    }) ? l.find(function(e) {
                        return e.code == t.code
                    }).packagesList[e.base] = e.title : (t.packagesList || (t.packagesList = {}), t.packagesList[e.base] = e.title, l.push(t))
                })
            }), s.default.createElement(f, {
                tvChannelList: l,
                tvPackages: e,
                isPreLandingPage: t.isPreLandingPage,
                descriptions: t.descriptions
            }))
        }
        return s.default.createElement("div", null)
    }
    e.default = o;
    var u = function(e) {
            babelHelpers.inherits(a, e);
            var t = c(a);

            function a() {
                return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
            }
            return babelHelpers.createClass(a, [{
                key: "render",
                value: function() {
                    return this.props.tvPackages && 1 < this.props.tvPackages.length ? s.default.createElement(p, this.props) : s.default.createElement(m, this.props)
                }
            }]), a
        }(s.default.Component),
        d = function(e) {
            babelHelpers.inherits(l, e);
            var a = c(l);

            function l(e) {
                var t;
                return babelHelpers.classCallCheck(this, l), (t = a.call(this, e)).state = {
                    selected: "all"
                }, t
            }
            return babelHelpers.createClass(l, [{
                key: "manageExpanderSafe",
                value: function() {
                    var e = document.getElementById("opl-channels-container" + this.props.mixerId),
                        t = $("#innerChannelList" + this.props.mixerId).height();
                    t < this.props.minimumHeight && (t = this.props.minimumHeight), t <= this.props.initialHeight ? ($(e).animate({
                        height: t
                    }, 400), $("#expandButton" + this.props.mixerId).addClass("u-hide")) : ($("#expandButton" + this.props.mixerId).removeClass("u-hide"), this.props.expanded ? $(e).animate({
                        height: t
                    }, 400) : $(e).animate({
                        height: this.props.initialHeight
                    }, 400))
                }
            }, {
                key: "manageExpander",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        e.manageExpanderSafe()
                    }, 400)
                }
            }]), l
        }(s.default.Component),
        m = function(e) {
            babelHelpers.inherits(a, e);
            var t = c(a);

            function a() {
                return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
            }
            return babelHelpers.createClass(a, [{
                key: "onChange",
                value: function(e, t) {
                    e.stopPropagation(), e.preventDefault(), $("#form" + this.props.mixerId) && !$("#form" + this.props.mixerId).attr("data-js-initialized") || ($("#" + this.props.mixerId).val(t), this.SearchRef.click(), this.manageExpander())
                }
            }, {
                key: "render",
                value: function() {
                    var t = this,
                        e = this.props.tvChannelList,
                        a = [{
                            description: "Wszystkie",
                            value: "all"
                        }];
                    e.forEach(function(e) {
                        return Object.keys(e.categoryList).forEach(function(t) {
                            0 == a.filter(function(e) {
                                return e.value == ".is-" + t.toLowerCase()
                            }).length && a.push({
                                description: e.categoryList[t],
                                value: ".is-" + t.toLowerCase()
                            })
                        })
                    });
                    var l = this;
                    return s.default.createElement("div", null, s.default.createElement("div", {
                        className: "opl-section"
                    }, s.default.createElement("h3", null, "Lista kanałów w pakiecie optymalnym")), s.default.createElement("input", {
                        id: this.props.mixerId,
                        className: "select-channel-category     u-hide " + this.props.mixerId,
                        "data-type": "mixer-filter"
                    }), s.default.createElement("input", {
                        type: "hidden",
                        id: "channelsearch",
                        autoComplete: "off",
                        "aria-describedby": "xxx",
                        name: "chsearch",
                        "data-search-attribute": "class",
                        "data-type": "mixer-search"
                    }), s.default.createElement("button", {
                        className: "opl-input-with-icon__btn u-hide",
                        ref: function(e) {
                            return t.SearchRef = e
                        },
                        type: "submit"
                    }, s.default.createElement("span", {
                        className: "g-icon g-icon--only g-icon--s g-icon--search",
                        "aria-hidden": "true"
                    }), s.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Szukaj")), s.default.createElement("div", {
                        className: "opl-tabs opl-tabs--secondary"
                    }, 1 <= a.length ? s.default.createElement("div", {
                        className: "opl-tabs__nav-wrapper"
                    }, s.default.createElement("div", {
                        className: "opl-tabs__nav-wrapper-inner"
                    }, s.default.createElement("ul", {
                        className: "opl-tabs__nav",
                        "data-js-module": "common/modules/opl-tabs",
                        "data-js-options": '{"tabNavLinkInnerCor": 30}'
                    }, a.map(function(t, e) {
                        return s.default.createElement("li", {
                            className: "opl-tabs__nav-item"
                        }, s.default.createElement("div", {
                            className: "opl-tabs__nav-item__content"
                        }, s.default.createElement("a", {
                            href: "#",
                            onClick: function(e) {
                                return l.onChange(e, t.value)
                            },
                            className: "opl-tabs__nav-link" + (t.value === l.state.selected ? " is-active" : ""),
                            "data-selected": t.value === l.state.selected ? "1" : "0",
                            "aria-selected": t.value === l.state.selected
                        }, s.default.createElement("span", {
                            className: "opl-tabs__nav-link-inner"
                        }, s.default.createElement("span", null, t.description || t.value)))))
                    })))) : null))
                }
            }]), a
        }(d),
        p = function(e) {
            babelHelpers.inherits(a, e);
            var t = c(a);

            function a() {
                return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidMount",
                value: function() {
                    (0, l.loadModules)(this.searchInputRef, [{
                        path: "core/modules/sliding-label"
                    }])
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    OPL.UI.stopModules(this.searchInputWrapperRef)
                }
            }, {
                key: "mergeFilters",
                value: function() {
                    var t = "",
                        a = "";
                    $(".filter-element." + this.props.mixerId).each(function() {
                        var e = this;
                        "all" == e.value || "checkbox" == e.type && !e.checked || ("checkbox" == e.type ? a += e.value : t += e.value)
                    }), a && (t += "." + a.replace(/\./g, "")), t = t || "all", $("#" + this.props.mixerId).val(t), this.SearchRef.click(), this.manageExpander(), $($("#" + this.props.mixerId).val()).length ? $(".opl-no-canals").addClass("u-hide") : $(".opl-no-canals").removeClass("u-hide")
                }
            }, {
                key: "render",
                value: function() {
                    var t = this,
                        e = this.props.tvChannelList,
                        a = this.props.tvPackages,
                        l = [{
                            description: "Wszystkie",
                            value: "all"
                        }];
                    e.forEach(function(e) {
                        return Object.keys(e.categoryList).forEach(function(t) {
                            0 == l.filter(function(e) {
                                return e.value == ".is-" + t.toLowerCase()
                            }).length && l.push({
                                description: e.categoryList[t],
                                value: ".is-" + t.toLowerCase()
                            })
                        })
                    });
                    var n = [{
                        description: "Wszystkie",
                        value: "all"
                    }];
                    return a && a.forEach(function(t) {
                        0 == n.filter(function(e) {
                            return e.base == t.base
                        }).length && n.push({
                            description: t.title,
                            value: ".is-" + t.base.toLowerCase()
                        })
                    }), s.default.createElement("div", null, s.default.createElement("div", {
                        className: "opl-section"
                    }, s.default.createElement("h3", null, "Poznaj bogactwo kanałów")), s.default.createElement("div", {
                        className: "l-row"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-3 "
                    }, s.default.createElement("p", {
                        className: "h5 u-min-h-30"
                    }, "Kategoria tematyczna:"), s.default.createElement("input", {
                        id: this.props.mixerId,
                        className: "select-channel-category   u-hide  " + this.props.mixerId
                    }), s.default.createElement(i.OraSelect, {
                        options: l,
                        id: "select-channel-category1",
                        onChange: this.mergeFilters.bind(this),
                        selectClassName: "filter-element " + this.props.mixerId
                    })), s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-3 u-small-margin-top"
                    }, s.default.createElement("p", {
                        className: "h5 u-min-h-30"
                    }, "Pakiet kanałów:", s.default.createElement(r.default, null, "Pakiet optymalny otrzymasz w cenie oferty z telewizją. Pozostałe pakiety możesz włączyć w dowolnym momencie lub wyłączyć w zachowaniem miesięcznego okresu wypowiedzenia")), s.default.createElement(i.OraSelect, {
                        options: n,
                        id: "select-package-category1",
                        onChange: this.mergeFilters.bind(this),
                        selectClassName: "filter-element " + this.props.mixerId
                    })), s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-3 "
                    }, s.default.createElement("div", {
                        className: "u-min-h-30 u-margin u-medium-hide u-small-hide " + (this.props.isPreLandingPage ? "" : " u-margin-top-l-xl")
                    }), s.default.createElement("fieldset", {
                        className: "u-small-margin-top-l",
                        ref: function(e) {
                            return t.searchInputWrapperRef = e
                        }
                    }, s.default.createElement("legend", {
                        className: "u-acc-hide"
                    }, "Wyszukaj kanał"), s.default.createElement("label", {
                        className: "u-acc-hide",
                        htmlFor: "channelsearch"
                    }, "Nazwa kanału"), s.default.createElement("div", {
                        className: "opl-input-with-icon o-sliding-label",
                        ref: function(e) {
                            return t.searchInputRef = e
                        }
                    }, s.default.createElement("input", {
                        type: "text",
                        id: "channelsearch",
                        autoComplete: "off",
                        "aria-describedby": "xxx",
                        name: "chsearch",
                        "data-search-attribute": "class",
                        "data-type": "mixer-search"
                    }), s.default.createElement("p", {
                        className: "label o-sliding-label__placeholder",
                        id: "xxx"
                    }, s.default.createElement("span", null, "Szukaj")), s.default.createElement("button", {
                        className: "opl-input-with-icon__btn",
                        ref: function(e) {
                            return t.SearchRef = e
                        },
                        type: "submit"
                    }, s.default.createElement("span", {
                        className: "g-icon g-icon--only g-icon--s g-icon--search",
                        "aria-hidden": "true"
                    }), s.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Szukaj")))))), s.default.createElement("div", {
                        className: "l-row"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-3 "
                    }, s.default.createElement("div", {
                        className: "l-group__element u-padding-top-m"
                    }, s.default.createElement("label", {
                        className: "o-checkbox opl-checkbox opl-checkbox-hd "
                    }, s.default.createElement("input", {
                        type: "checkbox",
                        value: ".is-hd",
                        className: "filter-element " + this.props.mixerId,
                        onChange: this.mergeFilters.bind(this)
                    }), s.default.createElement("span", {
                        className: "o-ci"
                    }), s.default.createElement("span", {
                        className: "o-ci-label"
                    }, "Pokaż kanały HD")))), s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-3 kablowa-show u-block"
                    }, s.default.createElement("div", {
                        className: "l-group__element u-padding-top-m"
                    }, s.default.createElement("label", {
                        className: "o-checkbox opl-checkbox opl-checkbox-4k"
                    }, s.default.createElement("input", {
                        type: "checkbox",
                        className: "filter-element " + this.props.mixerId,
                        value: ".is-4k",
                        onChange: this.mergeFilters.bind(this)
                    }), s.default.createElement("span", {
                        className: "o-ci"
                    }), s.default.createElement("span", {
                        className: "o-ci-label"
                    }, "Pokaż kanały 4K"))))))
                }
            }]), a
        }(d),
        h = 0,
        f = function(e) {
            babelHelpers.inherits(l, e);
            var a = c(l);

            function l(e) {
                var t;
                return babelHelpers.classCallCheck(this, l), (t = a.call(this, e)).state = {
                    mixerId: "mixerId" + h++,
                    initialHeight: 330,
                    minimumHeight: 110,
                    expanded: !1
                }, t
            }
            return babelHelpers.createClass(l, [{
                key: "componentDidMount",
                value: function() {
                    this.startModules()
                }
            }, {
                key: "mixer",
                value: function() {
                    return {
                        path: "common/modules/opl-mixer",
                        options: {
                            dropdownSelector: "#" + this.state.mixerId
                        },
                        conditions: "element:{was seen}"
                    }
                }
            }, {
                key: "startModules",
                value: function() {
                    this.ref && OPL.UI.loadModules(this.ref, this.mixer())
                }
            }, {
                key: "expandChannelList",
                value: function(e) {
                    e.preventDefault();
                    var t = document.getElementById("opl-channels-container" + this.state.mixerId),
                        a = this.state.expanded ? this.state.initialHeight : $("#innerChannelList" + this.state.mixerId).height(),
                        l = $("#innerChannelList" + this.state.mixerId).height();
                    l < a && (a = l), t.classList[this.state.expanded ? "remove" : "add"]("is-expanded"), e.target.innerHTML = this.state.expanded ? "rozwiń kanały" : "zwiń kanały", this.state.expanded && window.scrollTo(t), $(t).animate({
                        height: a
                    }, 400), this.setState({
                        expanded: !this.state.expanded
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this,
                        e = this.props.tvChannelList;
                    return s.default.createElement("div", {
                        className: "l-full-row  u-position-relative",
                        id: "selectionChannel"
                    }, s.default.createElement("div", {
                        "data-js-module": "core/modules/loader",
                        "data-js-options": '{"preloaderAdditionalClass":"g-black1-bg", "coverOpacity": 30}',
                        id: "channles-element-loader"
                    }, s.default.createElement("div", {
                        id: "channels-loader",
                        "data-loader-class": "opl-loader--size-l"
                    }, s.default.createElement("div", {
                        className: "u-padding-top-l "
                    }, s.default.createElement("div", {
                        className: "l-page-row"
                    }, s.default.createElement("div", {
                        className: "l-row",
                        id: "selectionChannelBox"
                    }, s.default.createElement("div", {
                        id: "opl-tv-switch",
                        className: "opl-tv-switch l-col l-col-12",
                        "data-tv": "kablowa"
                    }, s.default.createElement("form", {
                        action: "#",
                        ref: function(e) {
                            return t.ref = e
                        },
                        id: "form" + this.state.mixerId
                    }, s.default.createElement("div", {
                        className: ""
                    }, s.default.createElement(u, babelHelpers.extends({}, this.props, this.state, {
                        minimumHeight: this.state.minimumHeight,
                        initialHeight: this.state.initialHeight
                    })), s.default.createElement("div", {
                        className: "u-margin-top-m u-overflow"
                    }, s.default.createElement("div", {
                        className: "l-row"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                    }, s.default.createElement("p", {
                        className: "h5 g-gray7-c opl-pakiet-info"
                    })), s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-text-right"
                    }), s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-text-center"
                    }, s.default.createElement("fieldset", {
                        id: "opl-channels-container" + this.state.mixerId,
                        className: "u-overflow u-margin",
                        style: {
                            height: this.state.initialHeight
                        }
                    }, s.default.createElement("legend", {
                        className: "u-acc-hide"
                    }, "Wybierz kanały"), s.default.createElement("ul", {
                        className: "opl-tv-channel-list",
                        id: "innerChannelList" + this.state.mixerId
                    }, e.map(function(e, t) {
                        return s.default.createElement(v, {
                            key: e.code,
                            channel: e
                        })
                    })), s.default.createElement("div", {
                        className: "opl-mistrzowska u-text-left u-margin-top u-margin u-hide"
                    }, s.default.createElement("div", {
                        className: "o-separator o-separator--m u-margin-top u-margin "
                    }), s.default.createElement("p", {
                        className: "h5 opl-mistrzowska-txt"
                    }, "Do Pakietu CANAL + Select możesz dokupić Pakiet Mistrzowska Piłka a w nim 6 kanałów sportowych, w tym 2 w jakości HD w cenie 30 zł."), s.default.createElement("p", null, "Szczegóły u sprzedawcy.")), s.default.createElement("div", {
                        className: "opl-no-canals u-margin-l u-hide"
                    }, s.default.createElement("p", {
                        className: "h4"
                    }, "Brak wyników wyszukiwania :)"))), s.default.createElement("button", {
                        id: "expandButton" + this.state.mixerId,
                        onClick: this.expandChannelList.bind(this),
                        className: "o-btn opl-btn opl-btn--small opl-btn--black  u-margin-auto opl-more_channels_button"
                    }, "rozwiń kanały")))))), this.props.tvPackages && 1 < this.props.tvPackages.length && s.default.createElement("div", null, s.default.createElement("div", {
                        className: "u-margin-top-l"
                    }, s.default.createElement("p", {
                        className: "u-font-bold"
                    }, this.props.descriptions && this.props.descriptions.info), s.default.createElement("p", {
                        className: "u-font-bold opl-star-text u-hide u-position-relative u-overflow u-margin-top"
                    }, s.default.createElement("span", {
                        className: "opl-channel-star u-block"
                    }), " Kanały dostępne w ramach oferty ITI Neovision S.A. dla klientów Orange"))))))))))
                }
            }]), l
        }(s.default.Component);
    e.TvDetails = function(e) {
        return s.default.createElement("div", {
            className: "l-row"
        }, s.default.createElement(f, {
            tvChannelList: e.tvChannelList,
            isPreLandingPage: e.isPreLandingPage
        }))
    };
    var v = function(e) {
        babelHelpers.inherits(a, e);
        var t = c(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "classByCategory",
            value: function() {
                var t = "";
                return this.props.channel && this.props.channel.categoryList && Object.keys(this.props.channel.categoryList).forEach(function(e) {
                    return t += "is-" + e.toLowerCase() + " "
                }), t += "is-" + this.props.channel.code + " "
            }
        }, {
            key: "classByPackage",
            value: function() {
                var t = "";
                return this.props.channel && this.props.channel.packagesList && Object.keys(this.props.channel.packagesList).forEach(function(e) {
                    return t += "is-" + e.toLowerCase() + " "
                }), t
            }
        }, {
            key: "classByResolution",
            value: function() {
                var e = "";
                return this.props.channel && this.props.channel.resolution && (e += "is-" + this.props.channel.resolution.toLowerCase(), e += " is-hdis-4k"), e
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props;
                return s.default.createElement("li", {
                    className: "l-group__element opl-tv-channel-list__element u-margin-right " + this.classByCategory() + " " + this.classByPackage() + " " + this.classByResolution(),
                    "data-type": "mixer-target",
                    "data-phrase": e.channel.name
                }, s.default.createElement("div", {
                    className: "opl-checkbox opl-checker__wrapper o-checker__wrapper g-white1-bg",
                    title: e.channel.code
                }, s.default.createElement("span", {
                    className: "o-checker u-position-relative u-overflow"
                }, s.default.createElement("span", {
                    className: "opl-channel-star"
                }), s.default.createElement("img", {
                    src: "empty" !== e.channel.image ? e.channel.image : "//:0",
                    alt: e.channel.name
                }))))
            }
        }]), a
    }(s.default.Component)
});
//# sourceMappingURL=FixTvFilteredView.js.map