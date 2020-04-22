define(["exports", "react", "eshop/utils/OnlineUtils"], function(_exports, _react, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var ProducerFilterView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProducerFilterView, _React$Component);

        var _super = _createSuper(ProducerFilterView);

        function ProducerFilterView(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProducerFilterView);
            _this = _super.call(this, props);
            _this.handleProducerChooseAction = _this.handleProducerChooseAction.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(ProducerFilterView, [{
            key: "handleProducerChooseAction",
            value: function handleProducerChooseAction(event, producer) {
                event.preventDefault();
                this.props.setSelectedProducer(producer);
                this.props.reloadTree();
                this.props.reloadMatchToFilter();

                _OnlineUtils.default.resetUrlPathWithoutReload();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                // ToDo FIXME!!! wiem, ze boli...
                if ($("#react-modal-ora-filters-modal").hasClass("is-visible")) OPL.UI.initModules(document.getElementById("react-modal-ora-filters-modal"));

                if (document.getElementById("opl-producer-filter-modal") && !document.getElementById("opl-producer-filter-modal").getAttribute("data-js-processed")) {
                    OPL.UI.stopModules(document.getElementById("react-modal-ora-filters-modal"));
                    OPL.UI.initModules(document.getElementById("react-modal-ora-filters-modal"));
                }
            }
        }, {
            key: "prepareProducerName",
            value: function prepareProducerName(producer) {
                return producer.cuteName ? producer.cuteName : producer.name;
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-producer-expanders" + (this.props.id ? "-" + this.props.id : "")
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.id || "opl-producer-expander-main",
                    "data-js-module": "common/modules/opl-expander",
                    "data-js-conditions": "element:{was seen}",
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
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, /*#__PURE__*/ _react.default.createElement("h4", {
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
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-right-xl"
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-wiking-manufacturers"
                }, this._renderProducer())))), /*#__PURE__*/ _react.default.createElement("div", {
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
                }, this._renderProducer(true)))))))));
            }
        }, {
            key: "_renderProducer",
            value: function _renderProducer(hidden) {
                var _this2 = this;

                return this.props.filterConfiguration.producerFilter ? this.props.filterConfiguration.producerFilter.map(function(producer, index) {
                    return !hidden && index < 6 || hidden && index > 5 ? /*#__PURE__*/ _react.default.createElement("li", {
                        key: index,
                        className: "opl-wiking-manufacturers__wrapper",
                        onClick: function onClick(event) {
                            return _this2.handleProducerChooseAction(event, producer.name);
                        }
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-wiking-manufacturers__item"
                    }, !producer.iconUrl ? _this2._renderTxtProducer(producer) : _this2._renderImgProducer(producer))) : null;
                }) : null;
            }
        }, {
            key: "_renderImgProducer",
            value: function _renderImgProducer(producer) {
                return /*#__PURE__*/ _react.default.createElement("a", {
                    href: "/sklep/" + this.prepareProducerName(producer),
                    className: producer.name == this.props.selectedProducer ? "active" : ""
                }, /*#__PURE__*/ _react.default.createElement("img", {
                    src: producer.iconUrl,
                    alt: producer.altText,
                    title: producer.tooltip
                }));
            }
        }, {
            key: "_renderTxtProducer",
            value: function _renderTxtProducer(producer) {
                return /*#__PURE__*/ _react.default.createElement("a", {
                    href: "/sklep/" + this.prepareProducerName(producer),
                    className: producer.name == this.props.selectedProducer ? "active" : ""
                }, producer.altText);
            }
        }]);
        return ProducerFilterView;
    }(_react.default.Component);

    _exports.default = ProducerFilterView;
});
//# sourceMappingURL=ProducerFilterView.js.map