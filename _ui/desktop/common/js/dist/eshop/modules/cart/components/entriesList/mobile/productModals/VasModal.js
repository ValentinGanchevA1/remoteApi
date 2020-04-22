define(["exports", "react", "prop-types", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/actions/cart", "./VasBox", "./ValidationResultMessageComponent", "eshop/modules/core/components/ui/Expander", "../../../../../checkout/constants/RuleTypeEnum"], function(_exports, _react, _propTypes, _reactRedux, _Modal, _cart, _VasBox, _ValidationResultMessageComponent, _Expander, _RuleTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _VasBox = babelHelpers.interopRequireDefault(_VasBox);
    _RuleTypeEnum = babelHelpers.interopRequireDefault(_RuleTypeEnum);

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

    var VAS_CHARACTERISTIC_MANDATORY = "MANDATORY";

    var VASModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(VASModal, _Component);

        var _super = _createSuper(VASModal);

        function VASModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, VASModal);
            _this = _super.call(this, props);
            _this.extractMobileVasesForThisSection = _this.extractMobileVasesForThisSection.bind(babelHelpers.assertThisInitialized(_this));
            _this.markAlreadySelectedVases = _this.markAlreadySelectedVases.bind(babelHelpers.assertThisInitialized(_this));
            _this.disabledMandatoryVases = _this.disabledMandatoryVases.bind(babelHelpers.assertThisInitialized(_this));
            _this.createClickedCallback = _this.createClickedCallback.bind(babelHelpers.assertThisInitialized(_this));
            _this.findBrokenRequireRules = _this.findBrokenRequireRules.bind(babelHelpers.assertThisInitialized(_this));
            _this.findBrokenDisableRules = _this.findBrokenDisableRules.bind(babelHelpers.assertThisInitialized(_this));
            _this.findTriggeredValidationGroups = _this.findTriggeredValidationGroups.bind(babelHelpers.assertThisInitialized(_this));
            _this.isRuleTriggered = _this.isRuleTriggered.bind(babelHelpers.assertThisInitialized(_this));
            _this.isValidationGroupTriggered = _this.isValidationGroupTriggered.bind(babelHelpers.assertThisInitialized(_this));
            _this.createVasIdToNameTranslationMap = _this.createVasIdToNameTranslationMap.bind(babelHelpers.assertThisInitialized(_this));
            _this.saveSelectedVases = _this.saveSelectedVases.bind(babelHelpers.assertThisInitialized(_this));
            _this.state = {
                open: _this.props.open,
                services: [],
                requireRules: [],
                disableRules: [],
                groups: [],
                oldServices: [],
                unfulfilledRequireRules: [],
                triggeredValidationGroups: []
            };
            return _this;
        }

        babelHelpers.createClass(VASModal, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var vasesWithRules = this.extractMobileVasesForThisSection(nextProps);
                var markedVases = this.markAlreadySelectedVases(vasesWithRules.services, nextProps);

                if (this.props.viewAsRetentionBonuses && vasesWithRules.categorizedBonuses["RetentionBonuses"]) {
                    markedVases = this.markAlreadySelectedVases(vasesWithRules.categorizedBonuses["RetentionBonuses"].services, nextProps);
                }

                markedVases = this.disabledMandatoryVases(markedVases);

                if (vasesWithRules) {
                    this.setState({
                        open: nextProps.open,
                        oldServices: JSON.parse(JSON.stringify(markedVases)),
                        services: markedVases,
                        requireRules: this.filterRequireRules(this.filterUsableRules(vasesWithRules.relations, markedVases)),
                        disableRules: this.filterDisableRules(this.filterUsableRules(vasesWithRules.relations, markedVases)),
                        groups: this.filterUsableValidationGroups(vasesWithRules.groups, markedVases),
                        unfulfilledRequireRules: [],
                        triggeredValidationGroups: []
                    });
                } else {
                    this.setState({
                        open: nextProps.open
                    }, function() {
                        console.log("This state open: " + !!this.state.open);
                    }.bind(this));
                }
            }
        }, {
            key: "filterUsableRules",
            value: function filterUsableRules(rules, services) {
                var serviceCodes = services.map(function(service) {
                    return service.id;
                });
                return rules.filter(function(rule) {
                    var targets = rule.targetVases.filter(function(vas) {
                        return serviceCodes.includes(vas);
                    });
                    var sources = rule.sourceVases.filter(function(vas) {
                        return serviceCodes.includes(vas);
                    }); //Usable rule contains available vases on both sides

                    if (targets.length > 0 && sources.length > 0) {
                        //Analyzing state of unavailable vases is pointless
                        //leave only those possible to select
                        rule.targetVases = targets;
                        rule.sourceVases = sources;
                        return rule;
                    }
                });
            }
        }, {
            key: "filterRequireRules",
            value: function filterRequireRules(rules) {
                return rules.filter(function(rule) {
                    return rule.type === _RuleTypeEnum.default.REQUIRE;
                });
            }
        }, {
            key: "filterDisableRules",
            value: function filterDisableRules(rules) {
                return rules.filter(function(rule) {
                    return rule.type === _RuleTypeEnum.default.EXCLUDE;
                });
            }
        }, {
            key: "filterUsableValidationGroups",
            value: function filterUsableValidationGroups(groups, services) {
                var serviceCodes = services.map(function(service) {
                    return service.id;
                });
                return groups.filter(function(group) {
                    var targets = group.targetProducts.filter(function(product) {
                        return serviceCodes.includes(product);
                    });
                    var conditionals = group.conditionalProducts.filter(function(product) {
                        return serviceCodes.includes(product);
                    });

                    if (targets.length > 0 && conditionals.length > 0) {
                        return group;
                    }
                });
            }
        }, {
            key: "extractMobileVasesForThisSection",
            value: function extractMobileVasesForThisSection(props) {
                return props.vases.find(function(element) {
                    return element.bundle === props.bundle;
                });
            }
        }, {
            key: "markAlreadySelectedVases",
            value: function markAlreadySelectedVases(services, props) {
                var cartVasCodes = props.cartVases.map(function(vas) {
                    return vas.productCode;
                });
                cartVasCodes = cartVasCodes ? cartVasCodes : [];

                if (!services) {
                    return [];
                }

                return services.map(function(vas) {
                    if (cartVasCodes.indexOf(vas.id) != -1) {
                        return Object.assign({}, vas, {
                            selected: true
                        });
                    }

                    return Object.assign({}, vas, {
                        selected: false
                    });
                });
            }
        }, {
            key: "disabledMandatoryVases",
            value: function disabledMandatoryVases(vases) {
                return vases.map(function(vas) {
                    if (vas.characteristics.indexOf(VAS_CHARACTERISTIC_MANDATORY) != -1) {
                        return Object.assign({}, vas, {
                            disabled: true
                        });
                    }

                    return Object.assign({}, vas, {
                        disabled: false
                    });
                });
            }
        }, {
            key: "isRuleTriggered",
            value: function isRuleTriggered(rule, serviceCodes) {
                return rule.sourceVases.filter(function(vas) {
                    return serviceCodes.includes(vas);
                }).length > 0;
            }
        }, {
            key: "isValidationGroupTriggered",
            value: function isValidationGroupTriggered(group, serviceCodes) {
                return group.conditionalProducts.filter(function(product) {
                    return serviceCodes.includes(product);
                }).length > 0;
            }
        }, {
            key: "findBrokenRequireRules",
            value: function findBrokenRequireRules(services) {
                var _this2 = this;

                var selectedVasCodes = services.filter(function(service) {
                    return service.selected;
                }).map(function(service) {
                    return service.id;
                });
                console.log("Find broken require rules");
                return this.state.requireRules.filter(function(rule) {
                    return _this2.isRuleTriggered(rule, selectedVasCodes);
                }).filter(function(rule) {
                    return !_this2.areAllRuleTargetsPresent(rule, selectedVasCodes);
                });
            }
        }, {
            key: "findBrokenDisableRules",
            value: function findBrokenDisableRules(services) {
                var _this3 = this;

                var selectedVasCodes = services.filter(function(service) {
                    return service.selected;
                }).map(function(service) {
                    return service.id;
                });
                console.log("Find broken disable rules");
                return this.state.disableRules.filter(function(rule) {
                    return _this3.isRuleTriggered(rule, selectedVasCodes);
                }).filter(function(rule) {
                    return _this3.areAnyRuleTargetsPresent(rule, selectedVasCodes);
                });
            }
        }, {
            key: "findTriggeredValidationGroups",
            value: function findTriggeredValidationGroups(services) {
                var _this4 = this;

                var selectedVasCodes = services.filter(function(service) {
                    return service.selected;
                }).map(function(service) {
                    return service.id;
                });
                var allVasCodes = services.map(function(service) {
                    return service.id;
                });
                console.log("Find triggered validation groups");
                var triggeredGroups = this.state.groups.filter(function(group) {
                    return _this4.isValidationGroupTriggered(group, selectedVasCodes);
                });
                var disabledProducts = triggeredGroups.reduce(function(products, group) {
                    return products.concat(group.targetProducts.filter(function(product) {
                        return allVasCodes.includes(product);
                    }));
                }, []).filter(function(value, index, array) {
                    return array.indexOf(value) === index;
                });
                services = services.map(function(service) {
                    service.active = !disabledProducts.includes(service.id);
                });
                return triggeredGroups;
            }
        }, {
            key: "areAllRuleTargetsPresent",
            value: function areAllRuleTargetsPresent(rule, selectedVasCodes) {
                return rule.targetVases.every(function(product) {
                    return selectedVasCodes.includes(product);
                });
            }
        }, {
            key: "areAnyRuleTargetsPresent",
            value: function areAnyRuleTargetsPresent(rule, selectedVasCodes) {
                return rule.targetVases.find(function(product) {
                    return selectedVasCodes.includes(product);
                });
            }
        }, {
            key: "updateUnfulfilledRules",
            value: function updateUnfulfilledRules(services, selectedId) {
                var brokenRequireRules = this.findBrokenRequireRules(services);
                this.uncheckExcludeVases(services, selectedId);
                var triggeredValidationGroups = this.findTriggeredValidationGroups(services);
                this.setState({
                    services: services,
                    unfulfilledRequireRules: brokenRequireRules,
                    triggeredValidationGroups: triggeredValidationGroups
                });
                console.log("Broken rules:");
                console.log(JSON.stringify(brokenRequireRules));
                console.log(JSON.stringify(triggeredValidationGroups));
            }
        }, {
            key: "uncheckExcludeVases",
            value: function uncheckExcludeVases(services, selectedId) {
                var excludeVases = [];
                this.state.disableRules.filter(function(rule) {
                    return rule.sourceVases.filter(function(vas) {
                        return vas === selectedId;
                    }).length > 0;
                }).forEach(function(rule) {
                    return rule.targetVases.forEach(function(vas) {
                        return excludeVases.push(vas);
                    });
                });
                services.forEach(function(service) {
                    if (excludeVases.includes(service.id)) {
                        service.selected = false;
                    }
                });
            }
        }, {
            key: "createClickedCallback",
            value: function createClickedCallback(vas) {
                var _this5 = this;

                var vasClicked = function vasClicked() {
                    console.log("VAS CLICKED ", vas);
                    var services = _this5.state.services;
                    var index = services.indexOf(vas);
                    console.log("index", index);

                    if (index != -1) {
                        if (_this5.props.viewAsRetentionBonuses) {
                            services.forEach(function(ser) {
                                return ser.selected = false;
                            });
                            vas.selected = true;
                        } else {
                            vas.selected = !vas.selected;
                        }

                        services[index] = vas;

                        _this5.updateUnfulfilledRules(services, vas.id);

                        console.log("CLICKED: " + JSON.stringify(vas));
                    }
                };

                return vasClicked.bind(this);
            }
        }, {
            key: "createVasIdToNameTranslationMap",
            value: function createVasIdToNameTranslationMap() {
                var translationMap = {};
                return Object.freeze(this.state.services.reduce(function(map, vas) {
                    map[vas.id] = vas.title;
                    return map;
                }, translationMap));
            }
        }, {
            key: "getVasAndBonusesIdsFromVas",
            value: function getVasAndBonusesIdsFromVas(vas) {
                var bonuses = vas.bonuses ? vas.bonuses.map(function(bonus) {
                    return bonus.code;
                }) : [];
                return [vas.id].concat(babelHelpers.toConsumableArray(bonuses));
            }
        }, {
            key: "saveSelectedVases",
            value: function saveSelectedVases() {
                console.log("Save vases clicked");
                var diff = this.servicesStateDiff(this.state.oldServices, this.state.services);
                console.log("Diff:");
                console.log(JSON.stringify(diff));
                var toBeSelected = diff.filter(function(vas) {
                    return vas.selected;
                }).map(this.getVasAndBonusesIdsFromVas.bind(this)).reduce(function(prev, current) {
                    return prev.concat.apply(prev, babelHelpers.toConsumableArray(current));
                }, []);
                var toBeRemoved = diff.filter(function(vas) {
                    return !vas.selected;
                }).map(this.getVasAndBonusesIdsFromVas.bind(this)).reduce(function(prev, current) {
                    return prev.concat.apply(prev, babelHelpers.toConsumableArray(current));
                }, []);
                this.setState({
                    oldServices: JSON.parse(JSON.stringify(this.state.services)),
                    open: false
                });
                this.props.onClose();
                this.props.updateCartVases(this.props.propositionId, this.props.bundle, this.props.cartBundle, toBeRemoved, toBeSelected);
            }
        }, {
            key: "servicesStateDiff",
            value: function servicesStateDiff(oldServices, newServices) {
                if (oldServices.length !== newServices.length) {
                    throw "Something went wrong. Service lists' sizes do not match.";
                }

                var diff = newServices.map(function(vas, idx) {
                    vas.changed = vas.selected !== oldServices[idx].selected;
                    return vas;
                }).filter(function(vas) {
                    return vas.changed;
                });
                return diff;
            }
        }, {
            key: "getSectionHeader",
            value: function getSectionHeader() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l u-small-spacing-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    className: "js-expander__trigger__nested u-inline u-text-nowrap"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Mniej\xA0us\u0142ug"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Wi\u0119cej\xA0us\u0142ug"))), /*#__PURE__*/ _react.default.createElement(SaveVasesButton, {
                    unfulfilledRequireRules: this.state.unfulfilledRequireRules,
                    saveVasesClicked: this.saveSelectedVases
                }));
            }
        }, {
            key: "render",
            value: function render() {
                var _this6 = this;

                var translationMap = this.createVasIdToNameTranslationMap();
                var numberOfVasesVisibleByDefault = 4;
                console.log("VAS MODAL RENDER PROPS:", this.props);
                console.log("VAS MODAL RENDER STATE:", this.state);
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    open: this.state.open,
                    onClose: this.props.onClose,
                    size: "medium"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3"
                }, this.props.title), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-multicheckout-services"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    scrollToSelected: false,
                    variant: "",
                    className: "opl-expander-outer u-no-padding",
                    sectionClassName: "opl-section-outer"
                }, /*#__PURE__*/ _react.default.createElement("ul", null, this.state.services && this.state.services.slice(0, numberOfVasesVisibleByDefault).map(function(vas, idx, vases) {
                    return /*#__PURE__*/ _react.default.createElement("li", {
                        className: "opl-multicheckout-services__item",
                        key: "vas_" + idx
                    }, /*#__PURE__*/ _react.default.createElement(_VasBox.default, {
                        key: "".concat(vas.id, "_").concat(idx),
                        multiChoice: _this6.props.multiChoice,
                        onSelectionChanged: _this6.createClickedCallback(vas),
                        vas: vas,
                        idx: vases.length - idx
                    }));
                }))), this.state.services.length && this.state.services.length > numberOfVasesVisibleByDefault ? /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    scrollToSelected: false,
                    variant: "",
                    className: "opl-expander-inner u-no-padding",
                    sectionClassName: "opl-section-inner"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__content__nested u-hide--soft",
                    className: "opl-section-inner u-no-padding",
                    headerBelow: true
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    scrollToSelected: false,
                    variant: "",
                    className: "opl-expander-outer u-no-padding",
                    sectionClassName: "opl-section-outer"
                }, /*#__PURE__*/ _react.default.createElement("ul", null, /*#__PURE__*/ _react.default.createElement("li", {
                    className: "opl-multicheckout-services__item",
                    key: "vas_blank"
                }), this.state.services && this.state.services.slice(numberOfVasesVisibleByDefault).map(function(vas, idx, vases) {
                    var index = idx + numberOfVasesVisibleByDefault;
                    return /*#__PURE__*/ _react.default.createElement("li", {
                        className: "opl-multicheckout-services__item",
                        key: "vas_" + index
                    }, /*#__PURE__*/ _react.default.createElement(_VasBox.default, {
                        key: "".concat(vas.id, "_").concat(index),
                        multiChoice: _this6.props.multiChoice,
                        onSelectionChanged: _this6.createClickedCallback(vas),
                        vas: vas,
                        idx: vases.length - index + numberOfVasesVisibleByDefault
                    }));
                }))))) : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l u-small-spacing-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                }), /*#__PURE__*/ _react.default.createElement(SaveVasesButton, {
                    unfulfilledRequireRules: this.state.unfulfilledRequireRules,
                    saveVasesClicked: this.saveSelectedVases
                }))), this.state.unfulfilledRequireRules.length > 0 && /*#__PURE__*/ _react.default.createElement(_ValidationResultMessageComponent.RequireRuleMessageComponent, {
                    translationMap: translationMap,
                    brokenRules: this.state.unfulfilledRequireRules
                }, "UNFULFILLED REQUIRE RULES"));
            }
        }]);
        return VASModal;
    }(_react.Component);

    VASModal.propTypes = {
        header: _propTypes.PropTypes.string,
        bundle: _propTypes.PropTypes.string,
        cartBundle: _propTypes.PropTypes.string,
        propositionId: _propTypes.PropTypes.string,
        open: _propTypes.PropTypes.bool,
        onClose: _propTypes.PropTypes.func,
        idx: _propTypes.PropTypes.number,
        cartVases: _propTypes.PropTypes.array,
        updateCartVases: _propTypes.PropTypes.func
    };
    VASModal.defaultProps = {
        title: "Dobierz usługi dodatkowe"
    };

    var SaveVasesButton = function SaveVasesButton(props) {
        var shouldDisableButton = props.unfulfilledRequireRules.length > 0;

        if (shouldDisableButton) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-small-padding-top"
            }, /*#__PURE__*/ _react.default.createElement("button", {
                className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
                disabled: true
            }, /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-ripple-box"
            }, /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-ripple-circle"
            })), "Wybierz us\u0142ugi"));
        } else {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-text-right u-small-padding-top"
            }, /*#__PURE__*/ _react.default.createElement("button", {
                className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
                onClick: props.saveVasesClicked
            }, /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-ripple-box"
            }, /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-ripple-circle"
            })), "Wybierz"));
        }
    };

    SaveVasesButton.propTypes = {
        unfulfilledRequireRules: _propTypes.PropTypes.array.isRequired,
        saveVasesClicked: _propTypes.PropTypes.func.isRequired
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            updateCartVases: function updateCartVases(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
                return dispatch((0, _cart.updateCartVases)(bundle, offer, cartBundle, productsToRemove, productsToAdd));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(VASModal);

    _exports.default = _default;
});
//# sourceMappingURL=VasModal.js.map