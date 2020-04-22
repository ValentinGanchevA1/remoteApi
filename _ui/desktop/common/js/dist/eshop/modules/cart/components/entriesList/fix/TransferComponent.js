define(["exports", "react", "react-redux", "../shared/MultiCartExpandingSectionComponent", "../mobile/MultiCartCollapsedItemComponent", "../../../actions/cart", "eshop/flux/utils/OraModalService", "./BoxFragments", "../mobile/MultiCartRemovePopup", "../mobile/MultiCartAssignmentInstalmentComponent", "./TransferMainProductComponent"], function(_exports, _react, _reactRedux, _MultiCartExpandingSectionComponent, _MultiCartCollapsedItemComponent, _cart, _OraModalService, _BoxFragments, _MultiCartRemovePopup, _MultiCartAssignmentInstalmentComponent, _TransferMainProductComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MultiCartExpandingSectionComponent = babelHelpers.interopRequireDefault(_MultiCartExpandingSectionComponent);
    _MultiCartCollapsedItemComponent = babelHelpers.interopRequireDefault(_MultiCartCollapsedItemComponent);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _MultiCartRemovePopup = babelHelpers.interopRequireDefault(_MultiCartRemovePopup);
    _MultiCartAssignmentInstalmentComponent = babelHelpers.interopRequireDefault(_MultiCartAssignmentInstalmentComponent);
    _TransferMainProductComponent = babelHelpers.interopRequireDefault(_TransferMainProductComponent);

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

    var TransferComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(TransferComponent, _Component);

        var _super = _createSuper(TransferComponent);

        function TransferComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, TransferComponent);
            _this = _super.call(this, props);
            _this.state = {
                selectedSection: null
            };
            return _this;
        }

        babelHelpers.createClass(TransferComponent, [{
            key: "openRemovePopup",
            value: function openRemovePopup() {
                var entry = this.props.entry;

                _OraModalService.default.open('remove-from-cart-modal-' + entry.bundleNo, {
                    bundleNo: entry.bundleNo,
                    offerIndex: entry.bundleNo
                });
            }
        }, {
            key: "registerRemovePopup",
            value: function registerRemovePopup(entry) {
                var _this2 = this;

                _OraModalService.default.add(function() {
                    return /*#__PURE__*/ _react.default.createElement(_MultiCartRemovePopup.default, {
                        id: 'remove-from-cart-modal-' + entry.bundleNo,
                        bundleNo: entry.bundleNo,
                        title: _this2.props.sectionConf.deleteEntryPopupTitle,
                        content: _this2.props.sectionConf.deleteEntryPopupContent,
                        decline: _this2.props.sectionConf.declineDeleteEntryPopupButtonLabel,
                        confirm: _this2.props.sectionConf.confirmDeleteEntryPopupButtonLabel,
                        onClickRemove: _this2.props.removeFromCart.bind(_this2, null, entry.bundleNo),
                        textRepresentation: _this2.props.sectionConf.sectionTitle
                    });
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.registerRemovePopup(this.props.entry);
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var title = this.props.sectionConf.sectionTitle;
                var idx = "transfer_section" + this.props.idx;
                var trigger = 'ost-' + this.props.entry.bundleNo;
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_MultiCartExpandingSectionComponent.default, {
                    title: title,
                    key: idx,
                    entry: this.props.entry,
                    trigger: trigger,
                    conf: this.props.sectionConf,
                    onRemoveClicked: function onRemoveClicked() {
                        return _this3.openRemovePopup(_this3.props.entry);
                    }
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_BoxFragments.FloatingBox, {
                    key: idx
                }, /*#__PURE__*/ _react.default.createElement(ProductSectionWrapper, {
                    key: idx,
                    entry: this.props.entry,
                    sectionTitle: ""
                }, /*#__PURE__*/ _react.default.createElement(_TransferMainProductComponent.default, babelHelpers.extends({
                    key: idx
                }, this.props, {
                    showNetPrices: this.props.showNetPrices
                })))), /*#__PURE__*/ _react.default.createElement(_BoxFragments.FloatingBox, {
                    key: "instalment" + idx
                }, /*#__PURE__*/ _react.default.createElement(_MultiCartAssignmentInstalmentComponent.default, this.props))), /*#__PURE__*/ _react.default.createElement(_MultiCartCollapsedItemComponent.default, {
                    key: "collapsed" + idx
                })));
            }
        }]);
        return TransferComponent;
    }(_react.Component);

    var ProductSectionWrapper = function ProductSectionWrapper(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-box-shadow"
        }, props.sectionTitle && /*#__PURE__*/ _react.default.createElement("h3", {
            className: "h3 u-small-hide u-padding-all-l u-no-spacing"
        }, props.sectionTitle), props.children);
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            removeFromCart: function removeFromCart(data, id) {
                return dispatch((0, _cart.removeFromCart)(data, id));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(TransferComponent);

    _exports.default = _default;
});
//# sourceMappingURL=TransferComponent.js.map