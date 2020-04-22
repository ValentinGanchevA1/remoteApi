define(["exports", "react", "../FixGadgetModal", "../AnalyzerAdapter", "../../BoxFragments", "../../Utils"], function(_exports, _react, _FixGadgetModal, _AnalyzerAdapter, _BoxFragments, _Utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _FixGadgetModal = babelHelpers.interopRequireDefault(_FixGadgetModal);

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

    var AddGadgetsButton = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddGadgetsButton, _Component);

        var _super = _createSuper(AddGadgetsButton);

        function AddGadgetsButton(props) {
            var _this;

            babelHelpers.classCallCheck(this, AddGadgetsButton);
            _this = _super.call(this, props);
            _this.state = {
                modalVisible: false
            };
            _this.addButtonClicked = _this.addButtonClicked.bind(babelHelpers.assertThisInitialized(_this));
            _this.closeModalClicked = _this.closeModalClicked.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(AddGadgetsButton, [{
            key: "addButtonClicked",
            value: function addButtonClicked() {
                console.log("Modal clicked");
                this.setState({
                    modalVisible: true
                }, function() {
                    console.log("This state modalVisible: " + !!this.state.modalVisible);
                }.bind(this));
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
            key: "closeModalClicked",
            value: function closeModalClicked() {
                this.setState({
                    modalVisible: false
                }, function() {
                    console.log("This state modalVisible: " + !!this.state.modalVisible);
                }.bind(this));
            }
        }, {
            key: "createCustomValidationGroup",
            value: function createCustomValidationGroup(presentable) {
                return [{
                    sidCode: null,
                    min: 0,
                    max: 1,
                    targetProducts: presentable.map(function(product) {
                        return product.id;
                    }),
                    conditionalProducts: presentable.map(function(product) {
                        return product.id;
                    }),
                    type: null
                }];
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, (!this.props.entry.gadgets || this.props.entry.gadgets.length === 0) && /*#__PURE__*/ _react.default.createElement(_BoxFragments.FloatingBox, {
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
                    customGroups: this.createCustomValidationGroup(this.props.presentable),
                    unselectable: false,
                    ref: function ref(adapter) {
                        return _this2.adapter = adapter;
                    }
                }, /*#__PURE__*/ _react.default.createElement(_FixGadgetModal.default, {
                    label: this.props.header,
                    open: this.state.modalVisible,
                    services: this.props.presentable,
                    onClose: this.closeModalClicked,
                    productList: this.props.inner
                })));
            }
        }]);
        return AddGadgetsButton;
    }(_react.Component);

    _exports.default = AddGadgetsButton;
});
//# sourceMappingURL=AddGadgetsButton.js.map