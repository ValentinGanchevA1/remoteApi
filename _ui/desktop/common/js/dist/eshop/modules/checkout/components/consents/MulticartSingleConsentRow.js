define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "eshop/modules/core/components/ui/Expander", "./MulticartSingleConsentCheckboxRow", "./MulticartSingleConsentRadioButtonRow", "eshop/modules/core/utils/ui"], function(_exports, _react, _OraCommonComponents, _Modal, _Expander, _MulticartSingleConsentCheckboxRow, _MulticartSingleConsentRadioButtonRow, _ui) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _MulticartSingleConsentCheckboxRow = babelHelpers.interopRequireDefault(_MulticartSingleConsentCheckboxRow);
    _MulticartSingleConsentRadioButtonRow = babelHelpers.interopRequireDefault(_MulticartSingleConsentRadioButtonRow);

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

    var MulticartSingleConsentRow = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MulticartSingleConsentRow, _React$Component);

        var _super = _createSuper(MulticartSingleConsentRow);

        function MulticartSingleConsentRow(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartSingleConsentRow);
            _this = _super.call(this, props);
            _this.state = {
                showModal: false
            };
            return _this;
        }

        babelHelpers.createClass(MulticartSingleConsentRow, [{
            key: "getModalProps",
            value: function getModalProps() {
                return {
                    open: this.state.showModal,
                    size: "narrow",
                    showClose: true,
                    escapeClose: false,
                    clickClose: false,
                    onClose: this.setShowModal.bind(this, false)
                };
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadExpander();
            }
        }, {
            key: "loadExpander",
            value: function loadExpander() {
                this.expanderPromise = (0, _ui.loadModule)(this.expander, {
                    path: "common/modules/opl-expander",
                    options: {
                        parentClass: "js-expander__container__nested",
                        contentSelector: ".js-expander__content__nested",
                        triggerSelector: ".js-expander__trigger__nested",
                        scrollToSelected: false
                    }
                });
            }
        }, {
            key: "setShowModal",
            value: function setShowModal(modalState) {
                this.setState({
                    showModal: modalState
                });
            }
        }, {
            key: "agreeConsentChange",
            value: function agreeConsentChange(accept) {
                this.setShowModal(false);

                if (accept) {
                    var bundleNo = !!this.bundleAssignment ? this.bundleAssignment.bundleNo : null;
                    this.bundleAssignment = null;
                    this.onChangeCallback({
                        consentCode: this.props.consent.consentCode,
                        stateCode: this.props.consent.states.find(function(state) {
                            return !state.positive;
                        }).code,
                        bundleNo: bundleNo
                    });
                }
            }
        }, {
            key: "onStateChange",
            value: function onStateChange(bundleAssignment, event) {
                var state = this.props.consent.states.find(function(state) {
                    return state.code === event.target.value;
                });

                if (this.hasBonus() && state.businessImplicationsDescr) {
                    this.bundleAssignment = bundleAssignment;
                    this.setShowModal(true);
                    this.modalContent = state.businessImplicationsDescr;
                } else {
                    var bundleNo = !!bundleAssignment ? bundleAssignment.bundleNo : null;
                    this.onChangeCallback({
                        consentCode: this.props.consent.consentCode,
                        stateCode: event.target.value,
                        bundleNo: bundleNo
                    });
                }
            }
        }, {
            key: "onChangeCallback",
            value: function onChangeCallback(data) {
                if (this.props.consentsWithBonusLoading) {
                    this.props.onUpdate([data]);
                } else {
                    this.props.onChange([data]);
                }
            }
        }, {
            key: "getButtonProps",
            value: function getButtonProps(main) {
                return {
                    className: "u-w-100",
                    accept: main,
                    onClick: this.agreeConsentChange.bind(this, !main),
                    type: main ? "primary" : "secondary"
                };
            }
        }, {
            key: "hasBusinessImplications",
            value: function hasBusinessImplications() {
                return this.props.consent.states.map(function(s) {
                    return s.businessImplicationsDescr;
                }).find(function(d) {
                    return d;
                });
            }
        }, {
            key: "hasBonus",
            value: function hasBonus() {
                return !!this.props.consent.bonuses && this.props.consent.bonuses.length > 0;
            }
        }, {
            key: "getModalContent",
            value: function getModalContent() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-font-bold u-small-no-spacing"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "u-no-spacing"
                }, "Uwaga!"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-normal u-font-small"
                }, this.modalContent))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator o-separator--m u-spacing-top-l u-small-visible-hide"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 large-offset-by-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, this.getButtonProps(true), "Wr\xF3\u0107 do zg\xF3d")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 u-small-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, this.getButtonProps(false), "Dalej")))));
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var consentPositiveState = this.props.consent.states.find(function(state) {
                    return state.positive;
                });
                var consentNegativeState = this.props.consent.states.find(function(state) {
                    return !state.positive;
                });
                var showTitle = !(this.props.consent && this.props.consent.type === "OSW");
                return /*#__PURE__*/ _react.default.createElement("fieldset", {
                    ref: function ref(_ref) {
                        return _this2.expander = _ref;
                    },
                    className: "u-padding-top-l opl-agreements__item opl-agreements__item--slave true u-padding-right ",
                    "data-js-module": "common/modules/opl-expander",
                    "data-js-conditions": "element:{was seen}"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col " + (showTitle ? "l-col-12" : "l-col-10") + " u-padding-l"
                }, this.hasBonus() && this.hasBusinessImplications() ? /*#__PURE__*/ _react.default.createElement(_Modal.default, this.getModalProps(), this.getModalContent()) : "", this.props.formInputType && this.props.formInputType === "CHECKBOX" || this.props.consent && this.props.consent.type === "OSW" ? /*#__PURE__*/ _react.default.createElement(_MulticartSingleConsentCheckboxRow.default, babelHelpers.extends({
                    key: this.props.name
                }, this.props, {
                    onStateChange: this.onStateChange.bind(this),
                    onChangeCallback: this.onChangeCallback.bind(this),
                    showTitle: showTitle
                })) : /*#__PURE__*/ _react.default.createElement(_MulticartSingleConsentRadioButtonRow.default, babelHelpers.extends({}, this.props, {
                    onStateChange: this.onStateChange.bind(this),
                    onChangeCallback: this.onChangeCallback.bind(this)
                })))));
            }
        }]);
        return MulticartSingleConsentRow;
    }(_react.default.Component);

    _exports.default = MulticartSingleConsentRow;
});
//# sourceMappingURL=MulticartSingleConsentRow.js.map