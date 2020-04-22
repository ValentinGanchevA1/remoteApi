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

    var ProductFilterView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductFilterView, _React$Component);

        var _super = _createSuper(ProductFilterView);

        function ProductFilterView(props) {
            babelHelpers.classCallCheck(this, ProductFilterView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductFilterView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.getMatchToData();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var _this = this;

                if (document.getElementById("opl-match-to-filter-expander-main" + this.props.isModal) && !document.getElementById("opl-match-to-filter-expander-main" + this.props.isModal).getAttribute("data-js-processed")) {
                    OPL.UI.initModules(document.getElementById("matchToFilter"));
                    OPL.UI.on("modules.categorytree.clickevent", function(event) {
                        _this.bindEvent(event);
                    }, "match-to-tree");
                    OPL.UI.on("modules.categorytree.clearevent", function(event) {
                        _this.clearAll(event);
                    }, "match-to-tree");
                }

                var initModulesNeeded = false;

                if (this.props.filters != null) {
                    this.props.filters.map(function(element) {
                        var attributeId = element.name.replace(/\s+/g, "-").toLowerCase();

                        if (_this.componentNeedInitialization("opl-product-filter-attribute-main-" + attributeId + _this.props.isModal)) {
                            initModulesNeeded = true;
                        }
                    });
                }

                if (this.componentNeedInitialization("opl-match-to-filter-expander-main" + this.props.isModal) || this.componentNeedInitialization("opl-product-filter-expander-main" + this.props.isModal)) {
                    initModulesNeeded = true;
                }

                if (initModulesNeeded && this.props.isModal) {
                    OPL.UI.initModules(document.getElementById("ora-product-list-section-modal-product"));
                } else if (initModulesNeeded) {
                    OPL.UI.initModules(document.getElementById("ora-product-filter-component"));
                }
            }
        }, {
            key: "componentNeedInitialization",
            value: function componentNeedInitialization(name) {
                return document.getElementById(name) != null && !document.getElementById(name).hasAttribute("data-js-processed");
            }
        }, {
            key: "getStateOfRadio",
            value: function getStateOfRadio(name, value) {
                return this.props.selectedFilters[name] === value;
            }
        }, {
            key: "getStateOfCheckboxes",
            value: function getStateOfCheckboxes(name, value) {
                var values = this.props.selectedFilters[name];

                if (values) {
                    return values.indexOf(value) != -1;
                }

                return false;
            }
        }, {
            key: "getStateOfNumberInput",
            value: function getStateOfNumberInput(element, type) {
                var value = this.props.selectedNumberFilters[element.code + "_" + type];
                return value ? value : "";
            }
        }, {
            key: "renderValueCheckBox",
            value: function renderValueCheckBox(element, parent, index) {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("ul", {
                    key: parent.code + "_" + index,
                    className: "u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("li", {
                    className: "u-spacing"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    name: this.props.component + "_" + parent.code,
                    onClick: function onClick(e, checked) {
                        return _this2.changeAttribute(element, parent, true, "add", checked);
                    },
                    checked: this.getStateOfCheckboxes(parent.code, element)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label u-font-normal"
                }, element, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-gray4-c u-font-small"
                })))));
            }
        }, {
            key: "changeAttribute",
            value: function changeAttribute(element, parent, multiValue, operation, e) {
                this.props.changeFilterAttribute(element, parent.code, multiValue, operation);
                this.props.reloadTree();
            }
        }, {
            key: "changeNumberAttribute",
            value: function changeNumberAttribute(type, value, element) {
                this.props.changeFilterNumberAttribute(type, value, element);
                this.props.reloadTree();
            }
        }, {
            key: "changeNumberAttributeProps",
            value: function changeNumberAttributeProps(type, value, element) {
                this.props.changeFilterNumberAttribute(type, value, element);
            }
        }, {
            key: "renderValueRadio",
            value: function renderValueRadio(element, parent, index) {
                var _this3 = this;

                return /*#__PURE__*/ _react.default.createElement("ul", {
                    key: parent.code + "_" + index,
                    className: "u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("li", {
                    className: "u-spacing"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    name: this.props.component + "_" + parent.code,
                    onClick: function onClick(e, checked) {
                        return _this3.changeAttribute(element, parent, false, "add", checked);
                    },
                    checked: this.getStateOfRadio(parent.code, element)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label u-font-normal"
                }, element, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-gray4-c u-font-small"
                })))));
            }
        }, {
            key: "renderInputString",
            value: function renderInputString(element) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-input"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "text"
                }));
            }
        }, {
            key: "renderNumberPair",
            value: function renderNumberPair(element) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l"
                }, this.renderInputNumber(element, "from"), this.renderInputNumber(element, "to"));
            }
        }, {
            key: "renderInputNumber",
            value: function renderInputNumber(element, type) {
                var _this4 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "text",
                    placeholder: type == "from" ? "Od" : "Do",
                    value: this.getStateOfNumberInput(element, type),
                    className: "opl-input--size-m",
                    onBlur: function onBlur(event) {
                        _this4.changeNumberAttribute(type, event.target.value, element);
                    },
                    onKeyPress: function onKeyPress(event) {
                        if (event.key === "Enter") {
                            _this4.changeNumberAttribute(type, event.target.value, element);
                        }
                    },
                    onChange: function onChange(event) {
                        _this4.changeNumberAttributeProps(type, event.target.value, element);
                    }
                }));
            }
        }, {
            key: "renderAttribute",
            value: function renderAttribute(element) {
                var _this5 = this;

                var attributeId = element.name.replace(/\s+/g, "-").toLowerCase();
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-product-filter-attribute-expanders-" + attributeId + this.props.isModal,
                    className: "single-filter"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.id || "opl-product-filter-attribute-main-" + attributeId + this.props.isModal,
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
                    className: "opl-section u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__header u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-spacing-l u-spacing-top-l"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, element.name)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 "
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-text-right u-block opl-section__trigger opl-wiking-expander__trigger--plus",
                    role: "tab"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--plus g-icon--xs"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Rozwi\u0144 sekcj\u0119"))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__content u-hide--soft",
                    role: "tabpanel"
                }, element.type == "enum" ? element.availableValues.map(function(pos, index) {
                    return element.multiValue ? _this5.renderValueCheckBox(pos, element, index) : _this5.renderValueRadio(pos, element, index);
                }) : "", element.type == "string" && this.renderInputString(element), element.type == "number" && this.renderNumberPair(element), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-clear-both"
                })))));
            }
        }, {
            key: "handlePriceFilter",
            value: function handlePriceFilter(type, price) {
                this.props.changePriceFilter(type, price);
                this.props.reloadTree();
            }
        }, {
            key: "handlePricePropsFilter",
            value: function handlePricePropsFilter(type, price) {
                this.props.changePriceFilter(type, price);
            }
        }, {
            key: "renderPriceFilter",
            value: function renderPriceFilter() {
                var _this6 = this;

                return this.props.isSalesOfGoodsPage ? /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-product-filter-expanders" + this.props.isModal
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-clear-both"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-product-filter-expander-main" + this.props.isModal,
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
                    className: "opl-section u-no-padding" + (this.props.initiallyExpanded ? " is-expanded" : ""),
                    "aria-expanded": this.props.initiallyExpanded ? "true" : "false"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__header u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-spacing-l u-spacing-top-l"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.title, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-gray4-c u-font-small"
                }, " (z\u0142)"))), /*#__PURE__*/ _react.default.createElement("div", {
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
                    className: "l-row u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "text",
                    placeholder: "Od",
                    className: "opl-input--size-m",
                    onBlur: function onBlur(event) {
                        _this6.handlePriceFilter("from", event.target.value);
                    },
                    onKeyPress: function onKeyPress(event) {
                        if (event.key === "Enter") {
                            _this6.handlePriceFilter("from", event.target.value);
                        }
                    },
                    onChange: function onChange(event) {
                        _this6.handlePricePropsFilter("from", event.target.value);
                    },
                    value: this.props.selectedPrice.from
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "text",
                    placeholder: "Do",
                    className: "opl-input--size-m",
                    onBlur: function onBlur(event) {
                        _this6.handlePriceFilter("to", event.target.value);
                    },
                    onKeyPress: function onKeyPress(event) {
                        if (event.key === "Enter") {
                            _this6.handlePriceFilter("to", event.target.value);
                        }
                    },
                    ref: function ref(_ref) {
                        return _this6.priceTo = _ref;
                    },
                    onChange: function onChange(event) {
                        _this6.handlePricePropsFilter("to", event.target.value);
                    },
                    value: this.props.selectedPrice.to
                }))))))) : null;
            }
        }, {
            key: "handleModelChooseAction",
            value: function handleModelChooseAction(modelId, checked) {
                this.props.setSelectedModel(modelId, checked);
                this.props.reloadTree();
            }
        }, {
            key: "handleProducerChooseAction",
            value: function handleProducerChooseAction(producerId, checked) {
                this.props.setSelectedRecomendedProducer(producerId, checked);
                this.props.reloadTree();
            }
        }, {
            key: "bindEvent",
            value: function bindEvent(event) {
                if (event.inputName == "model") {
                    this.handleModelChooseAction(event.liDataId, event.checked);
                }

                if (event.inputName == "producent") {
                    this.handleProducerChooseAction(event.liDataId, event.checked);
                }
            }
        }, {
            key: "clearAll",
            value: function clearAll(event) {
                this.props.clearMatchToFilters();
            }
        }, {
            key: "renderMatchToFilter",
            value: function renderMatchToFilter() {
                if (this.props.products.mainCategory == "accesories") {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row u-small-hide u-medium-hide",
                        id: "matchToFilter"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        id: this.props.id || "opl-match-to-filter-expander-main" + this.props.isModal,
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
                        className: "opl-section u-no-padding"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-section__header u-no-padding"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-separator u-spacing-l u-spacing-top-l"
                    }), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-9 "
                    }, /*#__PURE__*/ _react.default.createElement("p", {
                        className: "h4 u-spacing-l"
                    }, "Pasuj\u0105ce do")), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-3 "
                    }, /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#",
                        className: "u-text-right u-block opl-section__trigger opl-wiking-expander__trigger--plus",
                        role: "tab"
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "g-icon g-icon--only g-icon--plus g-icon--xs"
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Rozwi\u0144 sekcj\u0119"))))), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-section__content u-hide--soft",
                        role: "tabpanel"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        "data-js-module": "common/modules/opl-category-tree",
                        id: "match-to-tree",
                        "data-js-options": JSON.stringify(this.props.matchToData),
                        className: "opl-category-tree"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row u-small-hide u-medium-hide"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-12  u-text-right"
                    }, /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#",
                        className: "opl-category-tree__clear"
                    }, "Wyczy\u015B\u0107"))))))));
                } else {
                    return /*#__PURE__*/ _react.default.createElement("div", null);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this7 = this;

                return this.props.filters ? /*#__PURE__*/ _react.default.createElement("div", null, this.renderPriceFilter(), this.renderMatchToFilter(), this.props.filters.map(function(pos, index) {
                    return _this7.renderAttribute(pos);
                })) : null;
            }
        }]);
        return ProductFilterView;
    }(_react.default.Component);

    _exports.default = ProductFilterView;
});
//# sourceMappingURL=ProductFilterView.js.map