define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/offers", "eshop/modules/core/components/ui/Tooltip", "../../../../simfree/selectors", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent"], function(_exports, _react, _reactRedux, _offers, _offers2, _Tooltip, _selectors, _OraVasPacketPickerComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Tooltip = babelHelpers.interopRequireDefault(_Tooltip);
    _OraVasPacketPickerComponent = babelHelpers.interopRequireDefault(_OraVasPacketPickerComponent);

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

    var VasPackages = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(VasPackages, _Component);

        var _super = _createSuper(VasPackages);

        function VasPackages(props) {
            var _this;

            babelHelpers.classCallCheck(this, VasPackages);
            _this = _super.call(this, props);
            _this.submitSelectPackagesModal = _this.submitSelectPackagesModal.bind(babelHelpers.assertThisInitialized(_this));
            _this.openSelectPackagesModal = _this.openSelectPackagesModal.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(VasPackages, [{
            key: "getSelectPackagesModalInitData",
            value: function getSelectPackagesModalInitData() {
                return {
                    plan: {
                        name: this.props.offer.rateplanName,
                        capacity: this.getVasPackagesCapacityForProposition()
                    },
                    packets: this.getVasPackagesForProposition().map(function(p) {
                        return _objectSpread({
                            id: p.bonuses && p.bonuses.length === 1 && p.bonuses[0].code,
                            title: p.title,
                            weight: p.weight || 1
                        }, p.longDescriptionInJsonFormat);
                    }),
                    selected: this.getSelectedVasPackagesForProposition()
                };
            }
        }, {
            key: "openSelectPackagesModal",
            value: function openSelectPackagesModal(event) {
                event.preventDefault();
                event.stopPropagation();

                _OraVasPacketPickerComponent.default.openPopup(_objectSpread({}, this.getSelectPackagesModalInitData(), {
                    submit: this.submitSelectPackagesModal
                }));
            }
        }, {
            key: "submitSelectPackagesModal",
            value: function submitSelectPackagesModal(toAdd, toRemove) {
                var _this2 = this;

                toAdd.forEach(function(bonusId) {
                    return _this2.props.selectVas(_this2.props.offer.id, bonusId, _this2.props.offer.rateplanName);
                });
                toRemove.forEach(function(bonusId) {
                    return _this2.props.unselectVas(_this2.props.offer.id, bonusId, _this2.props.offer.rateplanName);
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.selectDefaults();
            }
        }, {
            key: "selectDefaults",
            value: function selectDefaults() {
                var _this3 = this;

                console.log("VasPackages selectDefaults");

                if (this.getSelectedVasPackagesForProposition(this.props.offer.id).length === 0) {
                    var vases = this.getVasPackagesForProposition();
                    console.log("VasPackages selectDefaults", vases);
                    var defaults = vases && vases.length > 0 && vases.filter(function(vas) {
                        return vas.isDefault;
                    });
                    console.log("VasPackages selectDefaults", defaults);

                    if (defaults) {
                        defaults.forEach(function(defaultVas) {
                            return _this3.props.selectVas(_this3.props.offer.id, defaultVas.bonuses && defaultVas.bonuses.length === 1 && defaultVas.bonuses[0].code);
                        });
                    }
                }
            }
        }, {
            key: "getVasPackagesForProposition",
            value: function getVasPackagesForProposition() {
                var mobileVasesForProposition = this.props.offer.addons;
                var vasPackagesIndex = "GratisPackageBonuses";
                return mobileVasesForProposition && mobileVasesForProposition.categorizedBonuses[vasPackagesIndex] && mobileVasesForProposition.categorizedBonuses[vasPackagesIndex].services || [];
            }
        }, {
            key: "getVasPackagesCapacityForProposition",
            value: function getVasPackagesCapacityForProposition() {
                var mobileVasesForProposition = this.props.offer.addons;
                var vasPackagesIndex = "GratisPackageBonuses";
                var groups = mobileVasesForProposition && mobileVasesForProposition.categorizedBonuses[vasPackagesIndex] && mobileVasesForProposition.categorizedBonuses[vasPackagesIndex].groups || [];

                if (groups.length == 0) {
                    console.error("Cannot find any group for " + this.props.offer.id);
                    return 0;
                } else if (groups.length == 1) {
                    return groups[0].min || 0;
                }

                var packageBonusCodesJoined = this.getVasPackagesForProposition().filter(function(p) {
                    return p.bonuses && p.bonuses.length === 1 && p.bonuses[0].code;
                }).map(function(p) {
                    return p.bonuses && p.bonuses.length === 1 && p.bonuses[0].code;
                }).sort().join();
                var capacityGroup = groups.filter(function(g) {
                    return (g.targetProducts || []).sort().join() == packageBonusCodesJoined;
                })[0];

                if (capacityGroup) {
                    return capacityGroup.min;
                } else {
                    console.error("Cannot find capacity group for: " + this.props.offer.id + ". Expected target products: " + packageBonusCodesJoined);
                    return 0;
                }
            }
        }, {
            key: "getSelectedVasPackagesForProposition",
            value: function getSelectedVasPackagesForProposition() {
                var propositionId = this.props.offer && this.props.offer.id;
                var selectedVases = this.props.selectedVases;

                if (selectedVases && selectedVases.find(function(proposition) {
                        return proposition.propositionId === propositionId;
                    })) {
                    return selectedVases.find(function(proposition) {
                        return proposition.propositionId === propositionId;
                    }).vases;
                }

                return [];
            }
        }, {
            key: "isSelected",
            value: function isSelected(bonusCode) {
                return this.props.selectedVases && this.props.selectedVases.indexOf(bonusCode) > -1;
            }
        }, {
            key: "getBonusCode",
            value: function getBonusCode(vas) {
                if (vas && vas.bonuses && vas.bonuses.length === 1) {
                    return vas.bonuses[0].code;
                }

                return vas.id;
            }
        }, {
            key: "getChangePackagesLabel",
            value: function getChangePackagesLabel() {
                var capacity = this.getVasPackagesCapacityForProposition();
                var selectedVases = this.getSelectedVasPackagesForProposition();

                if (capacity > 1) {
                    if (selectedVases.length == 0) {
                        return this.props.addLabelPlural;
                    } else {
                        return this.props.changeLabelPlural;
                    }
                }

                if (selectedVases.length == 0) {
                    return this.props.addLabelSingular;
                } else {
                    return this.props.changeLabelSingular;
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                console.log("VasPackages componentDidUpdate");
            }
        }, {
            key: "renderForDeviceLP",
            value: function renderForDeviceLP() {
                var _this4 = this;

                var vasPackages = this.getVasPackagesForProposition();
                var label = "Paczka usług w cenie abonamentu: ";

                if (vasPackages && vasPackages.length > 1) {
                    label = "Paczki usług w cenie abonamentu: ";
                }

                var selectedVases = this.getSelectedVasPackagesForProposition();
                var selectedVasPackages = !!vasPackages && vasPackages.filter(function(vas) {
                    return selectedVases && (selectedVases.indexOf(_this4.getBonusCode(vas)) > -1 || selectedVases.indexOf(vas.id) > -1);
                });

                if (!selectedVases || selectedVases.length == 0) {
                    label = "";
                }

                var capacity = this.getVasPackagesCapacityForProposition();
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: !!label && "u-padding-top-s"
                }, !!capacity && !this.props.isProductDetailsPage && /*#__PURE__*/ _react.default.createElement("div", null, label), selectedVasPackages && selectedVasPackages.map(function(vasPackage, index) {
                    return [ /*#__PURE__*/ _react.default.createElement(VasPackageForDeviceLP, babelHelpers.extends({
                        key: "vasPackage" + index
                    }, vasPackage)), /*#__PURE__*/ _react.default.createElement("span", null, index < selectedVasPackages.length - 1 && ", ")];
                }), !!capacity && !!this.props.changable && /*#__PURE__*/ _react.default.createElement("a", {
                    onClick: this.openSelectPackagesModal,
                    className: "o-modal__trigger u-block u-padding-s u-padding-top-s"
                }, this.getChangePackagesLabel()));
            }
        }, {
            key: "render",
            value: function render() {
                var _this5 = this;

                if (this.props.isDeviceLP) {
                    return this.renderForDeviceLP();
                }

                var vasPackages = this.getVasPackagesForProposition();
                var capacity = this.getVasPackagesCapacityForProposition();
                var label = "";

                if (!!capacity) {
                    label = capacity + " paczka w ramach abonamentu";
                    if (capacity > 1 && capacity < 5) label = capacity + " paczki w ramach abonamentu";
                    else if (capacity > 4) label = capacity + " paczek w ramach abonamentu";
                }

                var selectedVases = this.getSelectedVasPackagesForProposition();
                var selectedVasPackages = !!vasPackages && vasPackages.filter(function(vas) {
                    return selectedVases && selectedVases.indexOf(_this5.getBonusCode(vas)) > -1;
                });
                return /*#__PURE__*/ _react.default.createElement("div", null, !!capacity && /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-margin-l " + (!!this.props.isProductDetailsPage && " u-large-hide u-medium-hide")
                }, label), !!selectedVasPackages && selectedVasPackages.map(function(vasPackage, index) {
                    return /*#__PURE__*/ _react.default.createElement(VasPackage, babelHelpers.extends({
                        key: "vasPackage" + index
                    }, vasPackage, {
                        selectVas: _this5.props.selectVas,
                        unselectVas: _this5.props.unselectVas,
                        propositionId: _this5.props.offer && _this5.props.offer.id,
                        selectedVases: _this5.getSelectedVasPackagesForProposition()
                    }));
                }), !!capacity && /*#__PURE__*/ _react.default.createElement("a", {
                    onClick: this.openSelectPackagesModal,
                    className: "o-modal__trigger u-block u-margin-top-l"
                }, this.getChangePackagesLabel()));
            }
        }]);
        return VasPackages;
    }(_react.Component);

    VasPackages.defaultProps = {
        changeLabelSingular: "Zmień paczkę ",
        changeLabelPlural: "Zmień paczki ",
        addLabelSingular: "Wybierz paczkę ",
        addLabelPlural: "Wybierz paczki ",
        changable: true
    };

    var VasPackage = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(VasPackage, _Component2);

        var _super2 = _createSuper(VasPackage);

        function VasPackage(props) {
            var _this6;

            babelHelpers.classCallCheck(this, VasPackage);
            _this6 = _super2.call(this, props);
            _this6.getBonusCode = _this6.getBonusCode.bind(babelHelpers.assertThisInitialized(_this6));
            return _this6;
        }

        babelHelpers.createClass(VasPackage, [{
            key: "getBonusCode",
            value: function getBonusCode() {
                if (this.props.bonuses && this.props.bonuses.length === 1) {
                    return this.props.bonuses[0].code;
                }

                return this.props.id;
            }
        }, {
            key: "getLabel",
            value: function getLabel() {
                switch (this.props.weight) {
                    case 2:
                        return /*#__PURE__*/ _react.default.createElement("div", {
                            className: "opl-packet-box__package"
                        }, /*#__PURE__*/ _react.default.createElement("span", {
                            className: "g-icon--" + this.props.thumbnailIcon + " g-icon g-icon--s"
                        }), /*#__PURE__*/ _react.default.createElement("span", {
                            className: "u-font-bold"
                        }, this.props.title), /*#__PURE__*/ _react.default.createElement("div", {
                            className: "opl-packet-box__package-info u-padding-top-l u-padding-m"
                        }, /*#__PURE__*/ _react.default.createElement("span", {
                            className: "u-font-bold u-font-small"
                        }, "Office 365 zajmuje miejsce dw\xF3ch paczek")));

                    default:
                        return /*#__PURE__*/ _react.default.createElement("div", {
                            className: "opl-packet-box__package"
                        }, /*#__PURE__*/ _react.default.createElement("span", {
                            className: "g-icon--" + this.props.thumbnailIcon + " g-icon g-icon--s"
                        }), /*#__PURE__*/ _react.default.createElement("span", {
                            className: "u-font-bold"
                        }, this.props.title));
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
                    labelBlock: this.getLabel(),
                    className: "u-overflow"
                }, this.props.longDescription);
            }
        }]);
        return VasPackage;
    }(_react.Component);

    var VasPackageForDeviceLP = /*#__PURE__*/ function(_VasPackage) {
        babelHelpers.inherits(VasPackageForDeviceLP, _VasPackage);

        var _super3 = _createSuper(VasPackageForDeviceLP);

        function VasPackageForDeviceLP(props) {
            babelHelpers.classCallCheck(this, VasPackageForDeviceLP);
            return _super3.call(this, props);
        }

        babelHelpers.createClass(VasPackageForDeviceLP, [{
            key: "render",
            value: function render() {
                var label = /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold"
                }, this.props.title);

                return /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
                    labelSpan: label,
                    className: ""
                }, this.props.longDescription);
            }
        }]);
        return VasPackageForDeviceLP;
    }(VasPackage);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedVases: (0, _offers2.getSelectedVases)(state),
            isDeviceLP: (0, _selectors.isProductDetailsPage)(state) || (0, _selectors.isProductListPage)(state) || (0, _selectors.isAccessoryListPage)(state),
            isProductDetailsPage: (0, _selectors.isProductDetailsPage)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            selectVas: function selectVas(propositionId, vasId, rateplanName) {
                return dispatch((0, _offers.selectVas)(propositionId, vasId, rateplanName));
            },
            unselectVas: function unselectVas(propositionId, vasId, rateplanName) {
                return dispatch((0, _offers.unselectVas)(propositionId, vasId, rateplanName));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VasPackages);

    _exports.default = _default;
});
//# sourceMappingURL=VasPackages.js.map