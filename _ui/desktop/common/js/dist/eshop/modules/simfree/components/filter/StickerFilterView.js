define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

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

    var StickerFilterView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(StickerFilterView, _React$Component);

        var _super = _createSuper(StickerFilterView);

        function StickerFilterView(props) {
            babelHelpers.classCallCheck(this, StickerFilterView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(StickerFilterView, [{
            key: "toHTML",
            value: function toHTML(filterName) {
                return {
                    __html: filterName
                };
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {}
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (document.getElementById("opl-sticker-expander-main" + this.props.isModal) != null && !document.getElementById("opl-sticker-expander-main" + this.props.isModal).hasAttribute("data-js-processed")) {
                    OPL.UI.initModules($('#ora-product-sticker-filter-component')[0]);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return !this.props.filterConfiguration.stickerFilter || this.props.filterConfiguration.stickerFilter.length == 0 ? null : /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-sticker-expanders" + this.props.isModal
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-sticker-expander-main" + this.props.isModal,
                    "data-js-module": "common/modules/opl-expander",
                    "data-js-options": JSON.stringify({
                        scrollToSelected: false,
                        triggerSelector: ".opl-section__trigger",
                        "contentSelector": ".opl-section__content",
                        "parentClass": "opl-section"
                    }),
                    role: "tablist",
                    "aria-multiselectable": "false"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section u-no-padding" + (this.props.initiallyExpanded ? ' is-expanded' : ''),
                    "aria-expanded": this.props.initiallyExpanded ? 'true' : 'false'
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__header u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-spacing-l"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.title)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 "
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-text-right u-block opl-section__trigger opl-wiking-expander__trigger--plus",
                    role: "tab"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--plus g-icon--xs"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Rozwiń sekcję " + this.props.title))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__content u-hide--soft",
                    role: "tabpanel"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-right-xl"
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-wiking-manufacturers"
                }, this.props.filterConfiguration.stickerFilter.map(function(pos, index) {
                    return _this.renderAttribute(pos);
                }))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-clear-both"
                })))));
            }
        }, {
            key: "renderAttribute",
            value: function renderAttribute(element) {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "u-spacing-l"
                }, element.type == 'enum' ? element.availableValues.map(function(pos, index) {
                    return element.multiValue ? _this2.renderCuteLinkIfAvailable(pos, element) : _this2.renderValueRadio(pos, element);
                }) : '');
            }
        }, {
            key: "renderCuteLinkIfAvailable",
            value: function renderCuteLinkIfAvailable(element, parent) {
                if (parent.cuteName !== "" && !this.getStateOfCheckboxes(parent.code, element)) {
                    return /*#__PURE__*/ _react.default.createElement("a", {
                        href: "/sklep/" + parent.cuteName
                    }, " ", this.renderValueCheckBox(element, parent), " ");
                } else {
                    return this.renderValueCheckBox(element, parent);
                }
            }
        }, {
            key: "renderValueCheckBox",
            value: function renderValueCheckBox(element, parent) {
                var _this3 = this;

                return /*#__PURE__*/ _react.default.createElement("li", {
                    className: "u-spacing"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    name: this.props.component + "_" + parent.code,
                    onClick: function onClick(e, checked) {
                        return _this3.changeAttribute(element, parent, true, "add", checked);
                    },
                    checked: this.getStateOfCheckboxes(parent.code, element)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label u-font-normal"
                }, this.stripHtmlTagsFromString(parent.name), "\xA0", /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-gray4-c u-font-small"
                }, "(", parent.unit, ")"))));
            }
        }, {
            key: "getStateOfCheckboxes",
            value: function getStateOfCheckboxes(name, value) {
                var values = this.props.selectedStickerFilters[name];

                if (values) {
                    return values.indexOf(value) != -1;
                }

                return false;
            }
        }, {
            key: "stripHtmlTagsFromString",
            value: function stripHtmlTagsFromString(text) {
                return text.replace(/<\/?[^>]+(>|$)/g, "");
            }
        }, {
            key: "changeAttribute",
            value: function changeAttribute(element, parent, multiValue, operation, e) {
                this.props.changeStickerFilterAttribute(element, parent, multiValue, operation);
                this.props.reloadTree();
            }
        }]);
        return StickerFilterView;
    }(_react.default.Component);

    _exports.default = StickerFilterView;
});
//# sourceMappingURL=StickerFilterView.js.map