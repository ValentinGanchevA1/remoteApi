define(["exports", "react", "react-redux", "eshop/utils/DataLayerUtils", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/fetchComparatorConfigActionType", "../../../configurator/utils", "../../../configurator/selectors/metaData"], function(_exports, _react, _reactRedux, _DataLayerUtils, _comparator, _selectors, _filters, _fetchComparatorConfigActionType, _utils, _metaData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _fetchComparatorConfigActionType = babelHelpers.interopRequireDefault(_fetchComparatorConfigActionType);

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

    var ComparatorDeviceTab = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ComparatorDeviceTab, _Component);

        var _super = _createSuper(ComparatorDeviceTab);

        function ComparatorDeviceTab(props) {
            babelHelpers.classCallCheck(this, ComparatorDeviceTab);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ComparatorDeviceTab, [{
            key: "handleDeleteClick",
            value: function handleDeleteClick(uid) {
                this.props.updateComparatorConfig(uid, this.props.comparatorUid);
            }
        }, {
            key: "removePrefix",
            value: function removePrefix(url) {
                if (url) {
                    return url.split("/sklep").pop().split("/akcesoria").pop();
                } else {
                    return url;
                }
            }
        }, {
            key: "getProductUrl",
            value: function getProductUrl() {
                _DataLayerUtils.default.pushComparatorDeviceDetails(this.props.device, this.props.selectedDevices);

                location.href = (0, _utils.getPagePrefixUrl)(this.props.marketContextPrefixUrl) + this.removePrefix(this.props.device.productPageUrl) + '?' + this.props.filtersUrl + '&selectedCategory=' + this.props.selectedCategory;
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("section", {
                    className: "opl-compare-products__section--box"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    key: this.props.device.productId + this.props.index,
                    className: "opl-compare-products__section--box-item"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "g-icon g-icon--only g-icon--xs g-icon--close clear-content",
                    onClick: function onClick() {
                        return _this.handleDeleteClick(_this.props.device.productId);
                    }
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Usu\u0144")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-feature-object opl-feature-object--zoom-in-zoom-out  opl-feature-object--phone u-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    onClick: function onClick() {
                        return _this.getProductUrl();
                    },
                    className: "opl-feature-object__content"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-feature-object__inner-wrapper"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-feature-object__inner"
                }, /*#__PURE__*/ _react.default.createElement("img", {
                    src: this.props.device.imageUrl,
                    alt: this.props.device.productId + "_alt"
                }))))), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold u-text-center"
                }, this.props.device.name)));
            }
        }]);
        return ComparatorDeviceTab;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedDevices: (0, _selectors.getComparatorDevices)(state),
            comparatorConfig: (0, _selectors.getComparatorConfig)(state),
            selectedCategory: (0, _selectors.getSelectedCategory)(state),
            filtersUrl: (0, _filters.getFiltersUrl)(state),
            marketContextPrefixUrl: (0, _metaData.getMarketContextPrefixUrl)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            updateSelectedDevices: function updateSelectedDevices(deviceUid) {
                return dispatch((0, _comparator.updateComparatorDevicesList)(deviceUid));
            },
            updateComparatorConfig: function updateComparatorConfig(devices, pk) {
                return dispatch((0, _comparator.fetchComparatorConfig)(devices, pk, _fetchComparatorConfigActionType.default.REMOVE_DEVICE));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ComparatorDeviceTab);

    _exports.default = _default;
});
//# sourceMappingURL=ComparatorDeviceTab.js.map