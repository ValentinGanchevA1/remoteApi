define(["exports", "react", "react-redux", "./MulticartSingleConsentRow", "eshop/modules/checkout/selectors"], function(_exports, _react, _reactRedux, _MulticartSingleConsentRow, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _MulticartSingleConsentRow = babelHelpers.interopRequireDefault(_MulticartSingleConsentRow);

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

    /*
    SubSection exists to:
    - present preambles before each subsection
    - suppress update request to backend until whole subsection is filled
    */
    var MulticartConsentsGroupSubSectionView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MulticartConsentsGroupSubSectionView, _React$Component);

        var _super = _createSuper(MulticartConsentsGroupSubSectionView);

        function MulticartConsentsGroupSubSectionView(props) {
            babelHelpers.classCallCheck(this, MulticartConsentsGroupSubSectionView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartConsentsGroupSubSectionView, [{
            key: "subsectionConsentsCodes",
            value: function subsectionConsentsCodes() {
                return this.props.allConsents.map(function(c) {
                    return c.consentCode;
                });
            }
        }, {
            key: "currentSubsectionConsentsStates",
            value: function currentSubsectionConsentsStates() {
                var consentCodes = this.subsectionConsentsCodes();
                return this.props.getCurrentConsentsCheckoutData().filter(function(cs) {
                    return consentCodes.find(function(ccCode) {
                        return cs.consentCode == ccCode;
                    });
                });
            }
        }, {
            key: "checkedStatesConf",
            value: function checkedStatesConf() {
                var consentCodes = this.subsectionConsentsCodes();
                return this.props.consentProps.consents.filter(function(cs) {
                    return consentCodes.find(function(ccCode) {
                        return cs.consentCode == ccCode;
                    });
                }).map(function(consent) {
                    return {
                        consentCode: consent.consentCode,
                        state: consent.states.find(function(s) {
                            return s.positive;
                        })
                    };
                });
            }
        }, {
            key: "checkIfAllConsentsOfSectionAreChecked",
            value: function checkIfAllConsentsOfSectionAreChecked() {
                var requiredPositiveStates = this.checkedStatesConf();
                var currentStates = this.currentSubsectionConsentsStates().reduce(function(a, b) {
                    return _objectSpread({}, a, babelHelpers.defineProperty({}, b.consentCode, b.stateCode));
                }, {});
                return requiredPositiveStates.every(function(requiredState) {
                    return currentStates[requiredState.consentCode] == requiredState.state.code;
                });
            }
        }, {
            key: "onUpdate",
            value: function onUpdate(data) {
                if (this.props.sectionWithBonus == undefined) {
                    this.props.onUpdate(data); // do not hook
                } else {
                    var allConsentsOfSubSectionAreCheckedBeforeChange = this.checkIfAllConsentsOfSectionAreChecked();
                    this.props.onChange(data);

                    if (this.props.sectionWithBonus) {
                        var allConsentsOfSubSectionAreCheckedAfterChange = this.checkIfAllConsentsOfSectionAreChecked();

                        if (allConsentsOfSubSectionAreCheckedAfterChange != allConsentsOfSubSectionAreCheckedBeforeChange) {
                            var fields = ['bundleNo', 'consentCode', 'stateCode'];
                            var toUpdateData = this.currentSubsectionConsentsStates().map(function(cs) {
                                return fields.reduce(function(a, b) {
                                    return _objectSpread({}, a, babelHelpers.defineProperty({}, b, cs[b]));
                                }, {});
                            });
                            this.props.onUpdate(toUpdateData);
                        }
                    }
                }
            }
        }, {
            key: "preamble",
            value: function preamble() {
                if (this.props.consents && this.props.consents[0] && this.props.preamble) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-padding-top-l"
                    }, /*#__PURE__*/ _react.default.createElement("blockquote", {
                        className: "opl-blockquote g-bluef-bdrc u-box-shadow--s u-no-padding-l"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-msg opl-msg--box opl-msg--info g-white1-bg g-black1-c"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__item"
                    }), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-xsmall-block u-small-padding-l o-icon-list__icon u-vertical-top u-padding-right"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "g-icon g-icon--info g-icon--before g-icon--s g-bluef-c",
                        "aria-hidden": "true"
                    })), /*#__PURE__*/ _react.default.createElement("div", {
                        class: "o-icon-list__text"
                    }, /*#__PURE__*/ _react.default.createElement("p", {
                        dangerouslySetInnerHTML: {
                            __html: this.props.preamble
                        }
                    }))))));
                } else {
                    return null;
                }
            }
        }, {
            key: "consentsWithBonusLoading",
            value: function consentsWithBonusLoading() {
                if (this.props.sectionWithBonus != undefined) {
                    return {
                        consentsWithBonusLoading: this.props.sectionWithBonus
                    };
                } else {
                    return {};
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.props.className || ""
                }, this.preamble(), this.props.consents.map(function(consent, i) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "".concat(_this.props.consents.length - 1 === i ? '' : 'u-border-bottom')
                    }, /*#__PURE__*/ _react.default.createElement(_MulticartSingleConsentRow.default, babelHelpers.extends({}, _this.props.getPropsForConsent(consent), _this.consentsWithBonusLoading(), {
                        onUpdate: _this.onUpdate.bind(_this) //hook onUpdate property
                            ,
                        descriptions: _this.props.descriptions,
                        isDeliveryStep: _this.props.isDeliveryStep,
                        sectionKey: "consent" + consent.sectionIndex,
                        consents: _this.props.consents,
                        consentStates: _this.props.consentStates,
                        formInputType: _this.props.formInputType
                    })));
                }));
            }
        }]);
        return MulticartConsentsGroupSubSectionView;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {};
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            getCurrentConsentsCheckoutData: function getCurrentConsentsCheckoutData() {
                return dispatch(function(dispatch, getState) {
                    return (0, _selectors.getConsentsCheckoutData)(getState());
                });
            }
        };
    };

    var MulticartConsentsGroupSubSection = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartConsentsGroupSubSectionView);
    var _default = MulticartConsentsGroupSubSection;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartConsentsGroupSubSection.js.map