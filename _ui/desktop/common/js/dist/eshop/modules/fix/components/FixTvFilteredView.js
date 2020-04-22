define(["exports", "react", "prop-types", "eshop/modules/cart/analyzer/TvChannelUtils", "eshop/components/OraCommonComponents", "eshop/modules/core/utils/ui", "eshop/modules/fix/selectors/root", "../../core/components/ui/Tooltip"], function(_exports, _react, _propTypes, _TvChannelUtils, _OraCommonComponents, _ui, _root, _Tooltip) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.TvDetails = _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Tooltip = babelHelpers.interopRequireDefault(_Tooltip);

    function _createSuper(Derived) {
        return function() {
            var Super = babelHelpers.getPrototypeOf(Derived),
                result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = babelHelpers.getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return babelHelpers.possibleConstructorReturn(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    var FixTvFilteredView = function FixTvFilteredView(props) {
        console.log("FixTvFilteredView", props);

        if (props.tvPackages) {
            var tvPackages = props.tvPackages;

            if (props.offer && props.offer.tvProduct) {
                var matchingTvPackage = tvPackages.find(function(tv) {
                    return props.offer.tvProduct.code === tv.id;
                });
                if (matchingTvPackage) tvPackages = [matchingTvPackage];
                else if (tvPackages.length) {
                    tvPackages = [tvPackages[0]];
                } else {
                    tvPackages = [];
                }
            }

            var tvChannelList = [];

            if (tvPackages.length == 0) {
                return /*#__PURE__*/ _react.default.createElement("div", null);
            }

            tvPackages.forEach(function(tvPackage) {
                tvPackage.tvChannelList.forEach(function(tvChannel) {
                    if (!tvChannelList.find(function(channel) {
                            return channel.code == tvChannel.code;
                        })) {
                        if (!tvChannel.packagesList) tvChannel.packagesList = {};
                        tvChannel.packagesList[tvPackage.base] = tvPackage.title;
                        tvChannelList.push(tvChannel);
                    } else {
                        var tvc = tvChannelList.find(function(channel) {
                            return channel.code == tvChannel.code;
                        });
                        tvc.packagesList[tvPackage.base] = tvPackage.title;
                    }
                });
            });
            console.log("concat tvChannelList", tvChannelList);
            return /*#__PURE__*/ _react.default.createElement(TvPresentation, {
                tvChannelList: tvChannelList,
                tvPackages: tvPackages,
                isPreLandingPage: props.isPreLandingPage,
                descriptions: props.descriptions
            });
        }

        return /*#__PURE__*/ _react.default.createElement("div", null);
    };

    var _default = FixTvFilteredView;
    _exports.default = _default;

    var TvChannelsFilter = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(TvChannelsFilter, _React$Component);

        var _super = _createSuper(TvChannelsFilter);

        function TvChannelsFilter() {
            babelHelpers.classCallCheck(this, TvChannelsFilter);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(TvChannelsFilter, [{
            key: "render",
            value: function render() {
                console.log("TvChannelsFilter ", this.props);

                if (this.props.tvPackages && this.props.tvPackages.length > 1) {
                    return /*#__PURE__*/ _react.default.createElement(TvChannelsFilterFull, this.props);
                }

                return /*#__PURE__*/ _react.default.createElement(TvChannelsFilterTab, this.props);
            }
        }]);
        return TvChannelsFilter;
    }(_react.default.Component);

    var TvChannelsFilterBase = /*#__PURE__*/ function(_React$Component2) {
        babelHelpers.inherits(TvChannelsFilterBase, _React$Component2);

        var _super2 = _createSuper(TvChannelsFilterBase);

        function TvChannelsFilterBase(props) {
            var _this;

            babelHelpers.classCallCheck(this, TvChannelsFilterBase);
            _this = _super2.call(this, props);
            _this.state = {
                selected: "all"
            };
            return _this;
        }

        babelHelpers.createClass(TvChannelsFilterBase, [{
            key: "manageExpanderSafe",
            value: function manageExpanderSafe() {
                var target = document.getElementById("opl-channels-container" + this.props.mixerId);
                var height = $("#innerChannelList" + this.props.mixerId).height();

                if (height < this.props.minimumHeight) {
                    height = this.props.minimumHeight;
                }

                console.log("MANAGE EXPANDER", height);
                console.log("MANAGE EXPANDER", this.props.expanded);
                console.log("MANAGE EXPANDER", this.props.initialHeight);

                if (height <= this.props.initialHeight) {
                    $(target).animate({
                        height: height
                    }, 400);
                    $("#expandButton" + this.props.mixerId).addClass("u-hide");
                } else {
                    $("#expandButton" + this.props.mixerId).removeClass("u-hide");

                    if (this.props.expanded) {
                        $(target).animate({
                            height: height
                        }, 400);
                    } else {
                        $(target).animate({
                            height: this.props.initialHeight
                        }, 400);
                    }
                }
            }
        }, {
            key: "manageExpander",
            value: function manageExpander() {
                var that = this;
                setTimeout(function() {
                    that.manageExpanderSafe();
                }, 400);
            }
        }]);
        return TvChannelsFilterBase;
    }(_react.default.Component);

    var TvChannelsFilterTab = /*#__PURE__*/ function(_TvChannelsFilterBase) {
        babelHelpers.inherits(TvChannelsFilterTab, _TvChannelsFilterBase);

        var _super3 = _createSuper(TvChannelsFilterTab);

        function TvChannelsFilterTab() {
            babelHelpers.classCallCheck(this, TvChannelsFilterTab);
            return _super3.apply(this, arguments);
        }

        babelHelpers.createClass(TvChannelsFilterTab, [{
            key: "onChange",
            value: function onChange(e, value) {
                e.stopPropagation();
                e.preventDefault();

                if ($("#form" + this.props.mixerId) && !$("#form" + this.props.mixerId).attr('data-js-initialized')) {
                    return;
                }

                $("#" + this.props.mixerId).val(value);
                this.SearchRef.click();
                this.manageExpander();
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var channels = this.props.tvChannelList;
                var categories = [{
                    "description": "Wszystkie",
                    "value": "all"
                }];
                channels.forEach(function(channel) {
                    return Object.keys(channel.categoryList).forEach(function(key) {
                        if (categories.filter(function(cat) {
                                return cat.value == '.is-' + key.toLowerCase();
                            }).length == 0) categories.push({
                            "description": channel.categoryList[key],
                            "value": '.is-' + key.toLowerCase()
                        });
                    });
                });
                console.log("CATERORIES", categories);
                var that = this;
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section"
                }, /*#__PURE__*/ _react.default.createElement("h3", null, "Lista kana\u0142\xF3w w pakiecie optymalnym")), /*#__PURE__*/ _react.default.createElement("input", {
                    id: this.props.mixerId,
                    className: "select-channel-category     u-hide " + this.props.mixerId,
                    "data-type": "mixer-filter"
                }), /*#__PURE__*/ _react.default.createElement("input", {
                    type: "hidden",
                    id: "channelsearch",
                    autoComplete: "off",
                    "aria-describedby": "xxx",
                    name: "chsearch",
                    "data-search-attribute": "class",
                    "data-type": "mixer-search"
                }), /*#__PURE__*/ _react.default.createElement("button", {
                    className: "opl-input-with-icon__btn u-hide",
                    ref: function ref(_ref) {
                        return _this2.SearchRef = _ref;
                    },
                    type: "submit"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--s g-icon--search",
                    "aria-hidden": "true"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Szukaj")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-tabs opl-tabs--secondary"
                }, categories.length >= 1 ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-tabs__nav-wrapper"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-tabs__nav-wrapper-inner"
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-tabs__nav",
                    "data-js-module": "common/modules/opl-tabs",
                    "data-js-options": "{\"tabNavLinkInnerCor\": 30}"
                }, categories.map(function(option, index) {
                    return /*#__PURE__*/ _react.default.createElement("li", {
                        className: "opl-tabs__nav-item"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-tabs__nav-item__content"
                    }, /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#",
                        onClick: function onClick(e) {
                            return that.onChange(e, option.value);
                        },
                        className: "opl-tabs__nav-link" + (option.value === that.state.selected ? " is-active" : ""),
                        "data-selected": option.value === that.state.selected ? "1" : "0",
                        "aria-selected": option.value === that.state.selected
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "opl-tabs__nav-link-inner"
                    }, /*#__PURE__*/ _react.default.createElement("span", null, option.description || option.value)))));
                })))) : null));
            }
        }]);
        return TvChannelsFilterTab;
    }(TvChannelsFilterBase);

    var TvChannelsFilterFull = /*#__PURE__*/ function(_TvChannelsFilterBase2) {
        babelHelpers.inherits(TvChannelsFilterFull, _TvChannelsFilterBase2);

        var _super4 = _createSuper(TvChannelsFilterFull);

        function TvChannelsFilterFull() {
            babelHelpers.classCallCheck(this, TvChannelsFilterFull);
            return _super4.apply(this, arguments);
        }

        babelHelpers.createClass(TvChannelsFilterFull, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                (0, _ui.loadModules)(this.searchInputRef, [{
                    path: 'core/modules/sliding-label'
                }]);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                OPL.UI.stopModules(this.searchInputWrapperRef);
            }
        }, {
            key: "mergeFilters",
            value: function mergeFilters() {
                var finalFilter = "";
                var checkboxesOR = "";
                var selectsAND = "";
                $(".filter-element." + this.props.mixerId).each(function() {
                    var that = this;
                    if (that.value == 'all' || that.type == 'checkbox' && !that.checked) return;

                    if (that.type == 'checkbox') {
                        checkboxesOR += that.value;
                    } else finalFilter += that.value;
                });
                if (checkboxesOR) finalFilter += '.' + checkboxesOR.replace(/\./g, '');
                if (!finalFilter) finalFilter = 'all';
                $("#" + this.props.mixerId).val(finalFilter);
                this.SearchRef.click();
                this.manageExpander();
                if ($($("#" + this.props.mixerId).val()).length) $(".opl-no-canals").addClass("u-hide");
                else {
                    $(".opl-no-canals").removeClass("u-hide");
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var channels = this.props.tvChannelList;
                var tvPackages = this.props.tvPackages;
                console.log("TvChannelsFilterFull channels", channels);
                var categories = [{
                    "description": "Wszystkie",
                    "value": "all"
                }];
                channels.forEach(function(channel) {
                    return Object.keys(channel.categoryList).forEach(function(key) {
                        if (categories.filter(function(cat) {
                                return cat.value == '.is-' + key.toLowerCase();
                            }).length == 0) categories.push({
                            "description": channel.categoryList[key],
                            "value": '.is-' + key.toLowerCase()
                        });
                    });
                });
                var packages = [{
                    "description": "Wszystkie",
                    "value": "all"
                }];
                if (tvPackages) tvPackages.forEach(function(tvPackage) {
                    if (packages.filter(function(pac) {
                            return pac.base == tvPackage.base;
                        }).length == 0) packages.push({
                        "description": tvPackage.title,
                        "value": '.is-' + tvPackage.base.toLowerCase()
                    });
                });
                console.log("categories", categories);
                console.log("packages", packages);
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section"
                }, /*#__PURE__*/ _react.default.createElement("h3", null, "Poznaj bogactwo kana\u0142\xF3w")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-3 "
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 u-min-h-30"
                }, "Kategoria tematyczna:"), /*#__PURE__*/ _react.default.createElement("input", {
                    id: this.props.mixerId,
                    className: "select-channel-category   u-hide  " + this.props.mixerId
                }), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSelect, {
                    options: categories,
                    id: "select-channel-category1",
                    onChange: this.mergeFilters.bind(this),
                    selectClassName: "filter-element " + this.props.mixerId
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-3 u-small-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 u-min-h-30"
                }, "Pakiet kana\u0142\xF3w:", /*#__PURE__*/ _react.default.createElement(_Tooltip.default, null, "Pakiet optymalny otrzymasz w\xA0cenie oferty z\xA0telewizj\u0105. Pozosta\u0142e pakiety mo\u017Cesz w\u0142\u0105czy\u0107 w\xA0dowolnym momencie lub wy\u0142\u0105czy\u0107 w\xA0zachowaniem miesi\u0119cznego okresu wypowiedzenia")), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSelect, {
                    options: packages,
                    id: "select-package-category1",
                    onChange: this.mergeFilters.bind(this),
                    selectClassName: "filter-element " + this.props.mixerId
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-3 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-min-h-30 u-margin u-medium-hide u-small-hide " + (this.props.isPreLandingPage ? "" : " u-margin-top-l-xl")
                }), /*#__PURE__*/ _react.default.createElement("fieldset", {
                    className: "u-small-margin-top-l",
                    ref: function ref(_ref4) {
                        return _this3.searchInputWrapperRef = _ref4;
                    }
                }, /*#__PURE__*/ _react.default.createElement("legend", {
                    className: "u-acc-hide"
                }, "Wyszukaj kana\u0142"), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "u-acc-hide",
                    htmlFor: "channelsearch"
                }, "Nazwa kana\u0142u"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-input-with-icon o-sliding-label",
                    ref: function ref(_ref3) {
                        return _this3.searchInputRef = _ref3;
                    }
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "text",
                    id: "channelsearch",
                    autoComplete: "off",
                    "aria-describedby": "xxx",
                    name: "chsearch",
                    "data-search-attribute": "class",
                    "data-type": "mixer-search"
                }), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "label o-sliding-label__placeholder",
                    id: "xxx"
                }, /*#__PURE__*/ _react.default.createElement("span", null, "Szukaj")), /*#__PURE__*/ _react.default.createElement("button", {
                    className: "opl-input-with-icon__btn",
                    ref: function ref(_ref2) {
                        return _this3.SearchRef = _ref2;
                    },
                    type: "submit"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--s g-icon--search",
                    "aria-hidden": "true"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Szukaj")))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-3 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-group__element u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox opl-checkbox-hd "
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    value: '.is-hd',
                    className: "filter-element " + this.props.mixerId,
                    onChange: this.mergeFilters.bind(this)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, "Poka\u017C kana\u0142y HD")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-3 kablowa-show u-block"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-group__element u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox opl-checkbox-4k"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    className: "filter-element " + this.props.mixerId,
                    value: ".is-4k",
                    onChange: this.mergeFilters.bind(this)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, "Poka\u017C kana\u0142y 4K"))))));
            }
        }]);
        return TvChannelsFilterFull;
    }(TvChannelsFilterBase);

    var tvPresentationId = 0;

    var TvPresentation = /*#__PURE__*/ function(_React$Component3) {
        babelHelpers.inherits(TvPresentation, _React$Component3);

        var _super5 = _createSuper(TvPresentation);

        function TvPresentation(props) {
            var _this4;

            babelHelpers.classCallCheck(this, TvPresentation);
            _this4 = _super5.call(this, props);
            _this4.state = {
                mixerId: "mixerId" + tvPresentationId++,
                initialHeight: 330,
                minimumHeight: 110,
                expanded: false
            };
            return _this4;
        }

        babelHelpers.createClass(TvPresentation, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.startModules();
            }
        }, {
            key: "mixer",
            value: function mixer() {
                return {
                    path: "common/modules/opl-mixer",
                    options: {
                        dropdownSelector: "#" + this.state.mixerId
                    },
                    conditions: "element:{was seen}"
                };
            }
        }, {
            key: "startModules",
            value: function startModules() {
                if (this.ref) {
                    OPL.UI.loadModules(this.ref, this.mixer());
                }
            }
        }, {
            key: "expandChannelList",
            value: function expandChannelList(e) {
                e.preventDefault();
                var target = document.getElementById("opl-channels-container" + this.state.mixerId);
                var height = this.state.expanded ? this.state.initialHeight : $("#innerChannelList" + this.state.mixerId).height();
                var heightInner = $("#innerChannelList" + this.state.mixerId).height();
                console.log(" EXPANDER", height);
                console.log(" EXPANDER");
                console.log(" EXPANDER", heightInner);
                if (heightInner < height) height = heightInner;
                target.classList[this.state.expanded ? "remove" : "add"]('is-expanded');
                e.target.innerHTML = this.state.expanded ? 'rozwiń kanały' : 'zwiń kanały';
                if (this.state.expanded) window.scrollTo(target);
                console.log("EXPAND ", $("#innerChannelList" + this.state.mixerId).height());
                $(target).animate({
                    height: height
                }, 400);
                this.setState({
                    expanded: !this.state.expanded
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this5 = this;

                var channels = this.props.tvChannelList;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row  u-position-relative",
                    id: "selectionChannel"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    "data-js-module": "core/modules/loader",
                    "data-js-options": "{\"preloaderAdditionalClass\":\"g-black1-bg\", \"coverOpacity\": 30}",
                    id: "channles-element-loader"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "channels-loader",
                    "data-loader-class": "opl-loader--size-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-l "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row",
                    id: "selectionChannelBox"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-tv-switch",
                    className: "opl-tv-switch l-col l-col-12",
                    "data-tv": "kablowa"
                }, /*#__PURE__*/ _react.default.createElement("form", {
                    action: "#",
                    ref: function ref(_ref5) {
                        return _this5.ref = _ref5;
                    },
                    id: "form" + this.state.mixerId
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement(TvChannelsFilter, babelHelpers.extends({}, this.props, this.state, {
                    minimumHeight: this.state.minimumHeight,
                    initialHeight: this.state.initialHeight
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-margin-top-m u-overflow"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 g-gray7-c opl-pakiet-info"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-text-right"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-text-center"
                }, /*#__PURE__*/ _react.default.createElement("fieldset", {
                    id: "opl-channels-container" + this.state.mixerId,
                    className: "u-overflow u-margin",
                    style: {
                        height: this.state.initialHeight
                    }
                }, /*#__PURE__*/ _react.default.createElement("legend", {
                    className: "u-acc-hide"
                }, "Wybierz kana\u0142y"), /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-tv-channel-list",
                    id: "innerChannelList" + this.state.mixerId
                }, channels.map(function(channel, index) {
                    return /*#__PURE__*/ _react.default.createElement(TvChannelBox, {
                        key: channel.code,
                        channel: channel
                    });
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-mistrzowska u-text-left u-margin-top u-margin u-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator o-separator--m u-margin-top u-margin "
                }), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 opl-mistrzowska-txt"
                }, "Do Pakietu CANAL + Select mo\u017Cesz dokupi\u0107 Pakiet Mistrzowska Pi\u0142ka a w nim 6 kana\u0142\xF3w sportowych, w tym 2 w jako\u015Bci HD w cenie 30 z\u0142."), /*#__PURE__*/ _react.default.createElement("p", null, "Szczeg\xF3\u0142y u sprzedawcy.")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-no-canals u-margin-l u-hide"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4"
                }, "Brak wynik\xF3w wyszukiwania :)"))), /*#__PURE__*/ _react.default.createElement("button", {
                    id: "expandButton" + this.state.mixerId,
                    onClick: this.expandChannelList.bind(this),
                    className: "o-btn opl-btn opl-btn--small opl-btn--black  u-margin-auto opl-more_channels_button"
                }, "rozwi\u0144 kana\u0142y")))))), this.props.tvPackages && this.props.tvPackages.length > 1 && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-margin-top-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold"
                }, this.props.descriptions && this.props.descriptions.info), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold opl-star-text u-hide u-position-relative u-overflow u-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-channel-star u-block"
                }), " Kana\u0142y dost\u0119pne w\xA0ramach oferty ITI\xA0Neovision\xA0S.A. dla\xA0klient\xF3w Orange"))))))))));
            }
        }]);
        return TvPresentation;
    }(_react.default.Component);

    var TvDetails = function TvDetails(props) {
        console.log("TvDetails", props);
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement(TvPresentation, {
            tvChannelList: props.tvChannelList,
            isPreLandingPage: props.isPreLandingPage
        }));
    };

    _exports.TvDetails = TvDetails;

    var TvChannelBox = /*#__PURE__*/ function(_React$Component4) {
        babelHelpers.inherits(TvChannelBox, _React$Component4);

        var _super6 = _createSuper(TvChannelBox);

        function TvChannelBox() {
            babelHelpers.classCallCheck(this, TvChannelBox);
            return _super6.apply(this, arguments);
        }

        babelHelpers.createClass(TvChannelBox, [{
            key: "classByCategory",
            value: function classByCategory() {
                var className = "";

                if (this.props.channel && this.props.channel.categoryList) {
                    Object.keys(this.props.channel.categoryList).forEach(function(key) {
                        return className += 'is-' + key.toLowerCase() + ' ';
                    });
                }

                className += "is-" + this.props.channel.code + ' ';
                return className;
            }
        }, {
            key: "classByPackage",
            value: function classByPackage() {
                var className = "";

                if (this.props.channel && this.props.channel.packagesList) {
                    Object.keys(this.props.channel.packagesList).forEach(function(key) {
                        return className += 'is-' + key.toLowerCase() + ' ';
                    });
                }

                return className;
            }
        }, {
            key: "classByResolution",
            value: function classByResolution() {
                var className = "";

                if (this.props.channel && this.props.channel.resolution) {
                    className += 'is-' + this.props.channel.resolution.toLowerCase();
                    className += ' is-hdis-4k';
                }

                return className;
            }
        }, {
            key: "render",
            value: function render() {
                var props = this.props; // {props.channel.code.includes("HD") && (<span className="opl-package-tv-choose__hd">HD</span>)}

                return /*#__PURE__*/ _react.default.createElement("li", {
                    className: "l-group__element opl-tv-channel-list__element u-margin-right " + this.classByCategory() + ' ' + this.classByPackage() + ' ' + this.classByResolution(),
                    "data-type": "mixer-target",
                    "data-phrase": props.channel.name
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-checkbox opl-checker__wrapper o-checker__wrapper g-white1-bg",
                    title: props.channel.code
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-checker u-position-relative u-overflow"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-channel-star"
                }), /*#__PURE__*/ _react.default.createElement("img", {
                    src: !("empty" === props.channel.image) ? props.channel.image : "//:0",
                    alt: props.channel.name
                }))));
            }
        }]);
        return TvChannelBox;
    }(_react.default.Component);

    ;
});
//# sourceMappingURL=FixTvFilteredView.js.map