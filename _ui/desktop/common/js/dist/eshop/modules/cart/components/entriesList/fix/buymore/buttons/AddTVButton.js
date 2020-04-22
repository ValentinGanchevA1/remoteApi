define(["exports", "react", "react-redux", "../FixTvModal", "../AnalyzerAdapter", "../../BoxFragments", "../../Utils", "../../../../../actions/cart", "../../../../../selectors", "../../../../../analyzer/TvPackageUtils"], function(_exports, _react, _reactRedux, _FixTvModal, _AnalyzerAdapter, _BoxFragments, _Utils, _cart, _selectors, _TvPackageUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _FixTvModal = babelHelpers.interopRequireDefault(_FixTvModal);

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

    var preventDefaultWrapper = function preventDefaultWrapper(handler) {
        return function(event) {
            event.preventDefault();
            handler(event);
        };
    };

    var AddTVButton = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddTVButton, _Component);

        var _super = _createSuper(AddTVButton);

        function AddTVButton(props) {
            var _this;

            babelHelpers.classCallCheck(this, AddTVButton);
            _this = _super.call(this, props);
            _this.addButtonClicked = _this.addButtonClicked.bind(babelHelpers.assertThisInitialized(_this));
            _this.closeModalClicked = _this.closeModalClicked.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(AddTVButton, [{
            key: "addButtonClicked",
            value: function addButtonClicked() {
                this.props.changeTvModalVisibility(true);
            }
        }, {
            key: "removeButtonClicked",
            value: function removeButtonClicked(productCode) {
                if (this.adapter && this.adapter.removeProduct) {
                    this.adapter.removeProduct(productCode);
                }
            }
        }, {
            key: "closeModalClicked",
            value: function closeModalClicked() {
                this.props.changeTvModalVisibility(false);
            }
        }, {
            key: "getIncludedInThePackageTitle",
            value: function getIncludedInThePackageTitle() {
                if (this.props.descriptions && this.props.descriptions.includedInThePackageTitle && this.props.descriptions.includedInThePackageTitle !== "") {
                    return this.props.descriptions.includedInThePackageTitle;
                }

                return "W cenie pakietu";
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var subModalTitle = this.props.descriptions ? this.props.descriptions.modalTitle : "";
                var subModalContents = this.props.descriptions ? this.props.descriptions.modalContents : "";
                var migratedTvPacks = this.props.migratedTvPacks ? this.props.migratedTvPacks : [];
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_BoxFragments.FloatingBox, {
                    boxClassName: "u-padding-left-l u-padding-right-l u-box-shadow--s u-box-shadow-hover"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: preventDefaultWrapper(this.addButtonClicked)
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement(_Utils.GraphicCell, {
                    icon: this.props.icon
                }), /*#__PURE__*/ _react.default.createElement(_BoxFragments.LabelCell, {
                    label: this.props.label
                }), /*#__PURE__*/ _react.default.createElement(_BoxFragments.ButtonCell, {
                    icon: "plus",
                    link: "#"
                })))))), /*#__PURE__*/ _react.default.createElement(_AnalyzerAdapter.FixAnalyzerAdapter, {
                    configurables: this.props.configurables,
                    entry: this.props.entry,
                    customRules: (0, _TvPackageUtils.createCustomRules)(this.props.presentable, migratedTvPacks, this.props.customFilters),
                    ref: function ref(adapter) {
                        return _this2.adapter = adapter;
                    },
                    triggerCartRecalculation: this.props.tvModalVisibility
                }, /*#__PURE__*/ _react.default.createElement(_FixTvModal.default, {
                    label: this.props.header,
                    open: this.props.tvModalVisibility,
                    services: this.props.presentable,
                    migratedServices: this.props.configurables.migratedProducts,
                    onClose: this.closeModalClicked,
                    productList: this.props.inner,
                    subModalTitle: subModalTitle,
                    subModalContents: subModalContents,
                    showNetPrices: this.props.showNetPrices,
                    includedInThePackageTitle: this.getIncludedInThePackageTitle(),
                    filtersVisible: true
                })));
            }
        }]);
        return AddTVButton;
    }(_react.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            changeTvModalVisibility: function changeTvModalVisibility(visibility) {
                return dispatch((0, _cart.changeTvModalVisibility)(visibility));
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            tvModalVisibility: (0, _selectors.getTvModalVisibility)(state),
            customFilters: (0, _selectors.getCustomFilters)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, {
        withRef: true
    })(AddTVButton);

    _exports.default = _default;
});
//# sourceMappingURL=AddTVButton.js.map