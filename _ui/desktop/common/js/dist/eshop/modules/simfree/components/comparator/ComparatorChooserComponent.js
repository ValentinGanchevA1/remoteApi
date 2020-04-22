define(["exports", "react-redux", "react", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/components/comparator/ComparatorAddDeviceModal", "eshop/modules/simfree/components/comparator/ComparatorErrorModal", "eshop/modules/configurator/selectors/metaData"], function(_exports, _reactRedux, _react, _comparator, _selectors, _filters, _ComparatorAddDeviceModal, _ComparatorErrorModal, _metaData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ComparatorAddDeviceModal = babelHelpers.interopRequireDefault(_ComparatorAddDeviceModal);
    _ComparatorErrorModal = babelHelpers.interopRequireDefault(_ComparatorErrorModal);

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

    var ComparatorChooserComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ComparatorChooserComponent, _Component);

        var _super = _createSuper(ComparatorChooserComponent);

        function ComparatorChooserComponent(props) {
            babelHelpers.classCallCheck(this, ComparatorChooserComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ComparatorChooserComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.props.fetchComparatorDevicesList();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.checkIsComparatorCategory(this.props);
                this.loadModules();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.loadModules();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps, nextContext) {
                if (this.props.selectedCategory !== nextProps.selectedCategory) {
                    this.checkIsComparatorCategory(nextProps);
                }
            }
        }, {
            key: "loadModules",
            value: function loadModules() {
                if (document.getElementById("opl-comparator-chooser-component-content") != null) {
                    OPL.UI.initModules(document.getElementById("opl-comparator-chooser-component-content"));
                }
            }
        }, {
            key: "checkIsComparatorCategory",
            value: function checkIsComparatorCategory(props) {
                var isComparatorCategory = props.categories && props.categories.filter(function(category) {
                    return category === props.selectedCategory;
                }).length > 0;
                this.props.storeIsComparatorCategory(isComparatorCategory);
            }
        }, {
            key: "getComparatorUrl",
            value: function getComparatorUrl() {
                return this.props.marketContextPrefixUrl + this.props.comparatorPageUrl + '?' + this.props.filtersUrl + '&selectedCategory=' + this.props.selectedCategory;
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-comparator-chooser-component"
                }, this.props.isComparatorCategory && this.props.comparatorDevices && this.props.comparatorDevices.length > 0 && /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-comparator-chooser-component-content",
                    className: "l-row u-margin-top-l-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h3"
                }, this.props.title), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-compare-products"
                }, /*#__PURE__*/ _react.default.createElement(_ComparatorAddDeviceModal.default, {
                    title: this.props.title,
                    trigger: "opl-compare-products__modal-trigger"
                }), this.props.comparatorDevices && this.props.comparatorDevices.map(function(device, index) {
                    var className;

                    if (index <= 1) {
                        className = "opl-compare-products__box u-margin-right-m u-small-no-margin-r";
                    } else {
                        className = "opl-compare-products__box u-large-margin-right-xxl";
                    }

                    return /*#__PURE__*/ _react.default.createElement("section", {
                        key: device.productId,
                        className: className
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        id: "box-item-" + device.productId,
                        className: "opl-compare-products__item g-gray1-bg",
                        "data-js-module": "[{\"path\":\"common/modules/opl-ellipsis\",\"conditions\": \"element:{seen}\", \"options\":{\"maxLength\": \"40\", \"smallMaxLength\" : \"15\"}}]"
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "opl-compare-products__item-btn g-icon g-icon--close",
                        role: "button",
                        onClick: function onClick() {
                            return _this.props.updateComparatorDevices(device);
                        }
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Usu\u0144")), /*#__PURE__*/ _react.default.createElement("img", {
                        className: "opl-compare-products__item-img u-margin-right",
                        src: device.imageUrl,
                        alt: ""
                    }), /*#__PURE__*/ _react.default.createElement("p", {
                        className: "opl-compare-products__item-name ellipsis-item u-font-bold"
                    }, device.name)));
                }), babelHelpers.toConsumableArray(Array(3 - this.props.comparatorDevices.length)).map(function(x, i) {
                    var className;

                    if (_this.props.comparatorDevices.length === 2 || _this.props.comparatorDevices.length === 1 && i === 1) {
                        className = "opl-compare-products__box u-large-margin-right-xxl";
                    } else {
                        className = "opl-compare-products__box u-margin-right-m u-small-no-margin-r";
                    }

                    return /*#__PURE__*/ _react.default.createElement("section", {
                        key: "empty" + i,
                        className: className
                    }, /*#__PURE__*/ _react.default.createElement("a", {
                        id: "opl-compare-products__modal-trigger",
                        className: "opl-btn--box o-btn o-modal__trigger",
                        href: "#opl-compare-products__modal",
                        "data-js-module": "core/modules/modal",
                        onClick: function onClick() {
                            return _this.props.fetchProducers();
                        }
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-spacing-right g-icon--xs-s g-icon g-icon--plus"
                    }), "Dodaj", /*#__PURE__*/ _react.default.createElement("br", null), "urz\u0105dzenie"));
                }), /*#__PURE__*/ _react.default.createElement("button", {
                    disabled: this.props.comparatorDevices.length < 2,
                    onClick: function onClick() {
                        return _this.props.redirectToComparator(_this.getComparatorUrl());
                    },
                    className: "opl-compare-products__btn opl-btn opl-btn--primary o-btn u-small-margin-top-l u-medium-margin-top-l"
                }, /*#__PURE__*/ _react.default.createElement("span", null, "Por\xF3wnaj"))))), /*#__PURE__*/ _react.default.createElement(_ComparatorErrorModal.default, {
                    modalCategoryErrorMessage: this.props.modalCategoryErrorMessage,
                    modalDevicesLimitErrorMessage: this.props.modalDevicesLimitErrorMessage,
                    modalLeftButtonText: this.props.modalLeftButtonText,
                    modalRightButtonText: this.props.modalRightButtonText,
                    comparatorPageUrl: this.getComparatorUrl()
                }));
            }
        }]);
        return ComparatorChooserComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            comparatorDevices: (0, _selectors.getComparatorDevices)(state),
            selectedCategory: (0, _selectors.getSelectedCategory)(state),
            isComparatorCategory: (0, _selectors.getIsComparatorCategory)(state),
            filtersUrl: (0, _filters.getFiltersUrl)(state),
            marketContextPrefixUrl: (0, _metaData.getMarketContextPrefixUrl)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
        return {
            redirectToComparator: function redirectToComparator(url) {
                return dispatch((0, _comparator.redirectToComparator)(url));
            },
            fetchComparatorDevicesList: function fetchComparatorDevicesList() {
                return dispatch((0, _comparator.fetchComparatorDevicesList)());
            },
            updateComparatorDevices: function updateComparatorDevices(device) {
                return dispatch((0, _comparator.updateComparatorDevicesList)(device));
            },
            storeIsComparatorCategory: function storeIsComparatorCategory(isComparatorCategory) {
                return dispatch((0, _comparator.storeIsComparatorCategory)(isComparatorCategory));
            },
            fetchProducers: function fetchProducers() {
                return dispatch((0, _comparator.fetchProducers)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ComparatorChooserComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ComparatorChooserComponent.js.map