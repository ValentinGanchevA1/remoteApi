define(["exports", "react", "prop-types", "../FixVasModal", "../AnalyzerAdapter", "../../BoxFragments", "../../Utils", "../../../../../analyzer/DeviceUtils"], function(_exports, _react, _propTypes, _FixVasModal, _AnalyzerAdapter, _BoxFragments, _Utils, _DeviceUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _FixVasModal = babelHelpers.interopRequireDefault(_FixVasModal);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    var AddVasesButton = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddVasesButton, _Component);

        var _super = _createSuper(AddVasesButton);

        function AddVasesButton(props) {
            var _this;

            babelHelpers.classCallCheck(this, AddVasesButton);
            _this = _super.call(this, props);
            _this.addButtonClicked = _this.addButtonClicked.bind(babelHelpers.assertThisInitialized(_this));
            _this.closeModalClicked = _this.closeModalClicked.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(AddVasesButton, [{
            key: "addButtonClicked",
            value: function addButtonClicked() {
                console.log("Modal clicked");
                this.props.modalOpenAction();
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
                this.props.modalCloseAction();
            }
        }, {
            key: "filterMigratedDevices",
            value: function filterMigratedDevices() {
                return this.props.migrated ? this.props.migrated.filter(function(p) {
                    return !!p.deviceType;
                }) : [];
            }
        }, {
            key: "migratedPresentable",
            value: function migratedPresentable() {
                var _this2 = this;

                var presentable = this.props.presentable;
                var migrated = this.props.migrated;

                if (migrated) {
                    if (presentable) {
                        return presentable.map(function(serviceOrDevice) {
                            return _objectSpread({}, serviceOrDevice, {
                                migrated: _this2.isMigrated(serviceOrDevice, migrated)
                            });
                        });
                    }
                }

                return presentable;
            }
        }, {
            key: "isMigrated",
            value: function isMigrated(serviceOrDevice, migrated) {
                if (migrated && serviceOrDevice) {
                    return migrated.filter(function(element) {
                        return element.base === serviceOrDevice.base && element.productCode === serviceOrDevice.id;
                    }).length > 0;
                }

                return false;
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                this.migratedDevices = this.filterMigratedDevices();
                this.migratedServicesAndDevices = this.migratedPresentable();
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_BoxFragments.FloatingBox, {
                    boxClassName: "u-padding-left-l u-padding-right-l u-box-shadow--s u-box-shadow-hover"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    id: "add-vases-button",
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
                    customRules: (0, _DeviceUtils.createCustomRules)(this.migratedServicesAndDevices, this.migratedDevices),
                    ref: function ref(adapter) {
                        return _this3.adapter = adapter;
                    }
                }, /*#__PURE__*/ _react.default.createElement(_FixVasModal.default, {
                    uid: "FVM_".concat(this.props.uid),
                    label: this.props.header,
                    open: this.props.isModalOpen,
                    services: this.migratedServicesAndDevices,
                    onClose: this.closeModalClicked,
                    productList: this.props.inner,
                    descriptions: this.props.descriptions,
                    selectedSection: this.props.selectedSection,
                    showNetPrices: this.props.showNetPrices,
                    configurables: this.props.configurables,
                    migratedProducts: this.props.migrated
                })));
            }
        }]);
        return AddVasesButton;
    }(_react.Component);

    _exports.default = AddVasesButton;
    AddVasesButton.propTypes = {
        icon: _propTypes.default.string,
        label: _propTypes.default.string,
        configurables: _propTypes.default.object.isRequired,
        entry: _propTypes.default.object.isRequired,
        presentable: _propTypes.default.array,
        migrated: _propTypes.default.array,
        uid: _propTypes.default.string,
        header: _propTypes.default.string,
        inner: _propTypes.default.object,
        selectedSection: _propTypes.default.string
    };
});
//# sourceMappingURL=AddVasesButton.js.map