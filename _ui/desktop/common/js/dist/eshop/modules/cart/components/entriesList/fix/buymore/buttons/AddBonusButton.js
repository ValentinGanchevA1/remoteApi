define(["exports", "react", "prop-types", "lodash", "../FixSecondaryChoiceBonusModal", "../AnalyzerAdapter", "../../BoxFragments", "../../Utils", "../../../../../analyzer/DeviceUtils"], function(_exports, _react, _propTypes, _lodash, _FixSecondaryChoiceBonusModal, _AnalyzerAdapter, _BoxFragments, _Utils, _DeviceUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _FixSecondaryChoiceBonusModal = babelHelpers.interopRequireDefault(_FixSecondaryChoiceBonusModal);

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

    var AddBonusButton = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddBonusButton, _Component);

        var _super = _createSuper(AddBonusButton);

        function AddBonusButton(props) {
            var _this;

            babelHelpers.classCallCheck(this, AddBonusButton);
            _this = _super.call(this, props);
            _this.addButtonClicked = _this.addButtonClicked.bind(babelHelpers.assertThisInitialized(_this));
            _this.closeModalClicked = _this.closeModalClicked.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(AddBonusButton, [{
            key: "addButtonClicked",
            value: function addButtonClicked() {
                console.log("Modal clicked");
                this.props.modalOpenAction();
            }
        }, {
            key: "closeModalClicked",
            value: function closeModalClicked() {
                this.props.modalCloseAction();
            }
        }, {
            key: "removeButtonClicked",
            value: function removeButtonClicked(productCode) {
                console.log("Remove button clicked: " + productCode);

                if (this.adapter && this.adapter.removeProduct) {
                    this.adapter.removeProduct(productCode);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var presentable = _lodash.default.flatMap(this.props.presentable);

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_BoxFragments.FloatingBox, {
                    boxClassName: "u-padding-left-l u-padding-right-l u-box-shadow--s u-box-shadow-hover"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    id: "add-bonus-button-".concat(this.props.idx),
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
                    customRules: (0, _DeviceUtils.createCustomRules)(presentable, this.props.migrated),
                    ref: function ref(adapter) {
                        return _this2.adapter = adapter;
                    }
                }, /*#__PURE__*/ _react.default.createElement(_FixSecondaryChoiceBonusModal.default, {
                    uid: "FBM_".concat(this.props.uid),
                    label: this.props.header,
                    open: this.props.isModalOpen,
                    services: presentable,
                    bonus: this.props.bonus,
                    onClose: this.closeModalClicked,
                    descriptions: this.props.descriptions,
                    showNetPrices: this.props.showNetPrices,
                    isActivateSecondaryChoice: false,
                    configurables: this.props.configurables,
                    migratedProducts: this.props.migrated
                })));
            }
        }]);
        return AddBonusButton;
    }(_react.Component);

    _exports.default = AddBonusButton;
    AddBonusButton.propTypes = {
        icon: _propTypes.default.string,
        label: _propTypes.default.string,
        configurables: _propTypes.default.object.isRequired,
        entry: _propTypes.default.object.isRequired,
        presentable: _propTypes.default.array,
        bonus: _propTypes.default.object.isRequired,
        migrated: _propTypes.default.array,
        uid: _propTypes.default.string,
        header: _propTypes.default.string
    };
});
//# sourceMappingURL=AddBonusButton.js.map