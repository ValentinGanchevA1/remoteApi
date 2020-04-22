define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Modal", "./FixProductRadioBox", "eshop/modules/core/utils/ui", "eshop/modules/core/components/ui/Expander", "eshop/modules/cart/analyzer/CartInfoUtils"], function(_exports, _react, _propTypes, _Modal, _FixProductRadioBox, _ui, _Expander, _CartInfoUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _FixProductRadioBox = babelHelpers.interopRequireDefault(_FixProductRadioBox);

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

    var FixGadgetModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixGadgetModal, _Component);

        var _super = _createSuper(FixGadgetModal);

        function FixGadgetModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, FixGadgetModal);
            _this = _super.call(this, props);
            _this.state = {
                open: _this.props.open
            };
            return _this;
        }

        babelHelpers.createClass(FixGadgetModal, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this.setState({
                    open: nextProps.open
                });
            }
        }, {
            key: "_onSaveWrapper",
            value: function _onSaveWrapper() {
                this.props.onClose();
                this.props.onSave();
            }
        }, {
            key: "getSectionHeader",
            value: function getSectionHeader() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    className: "js-expander__trigger__nested u-inline u-text-nowrap"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Mniej\xA0gad\u017Cet\xF3w"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Wi\u0119cej\xA0gad\u017Cet\xF3w"))), /*#__PURE__*/ _react.default.createElement(SaveVasesButton, {
                    saveVasesClicked: this._onSaveWrapper.bind(this)
                }));
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var numberOfVasesVisibleByDefault = 3;
                var vasesWithStatuses = this.props.services.map(function(vas) {
                    vas.selected = false;
                    return vas;
                });
                vasesWithStatuses.sort((0, _CartInfoUtils.compareByProductListAndMandatoryAndTitle)(this.props.productList ? this.props.productList.productCodes : null));
                Object.keys(this.props.entries).filter(function(productCode) {
                    return _this2.props.entries[productCode];
                }).map(function(productCode) {
                    return vasesWithStatuses.find(function(vas) {
                        return vas.id === productCode;
                    });
                }).filter(function(vas) {
                    return vas;
                }).forEach(function(vas) {
                    return vas.selected = true;
                });
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    open: this.state.open,
                    onClose: this.props.onClose,
                    size: "medium"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3"
                }, "Dobierz gad\u017Cet za 1 z\u0142"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-multicheckout-services"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    scrollToSelected: false,
                    variant: "",
                    className: "opl-expander-outer u-no-padding",
                    sectionClassName: "opl-section-outer"
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "u-spacing-l u-small-spacing-m"
                }, vasesWithStatuses && vasesWithStatuses.slice(0, numberOfVasesVisibleByDefault).map(function(vas, idx, vases) {
                    return /*#__PURE__*/ _react.default.createElement(_FixProductRadioBox.default, {
                        key: idx,
                        vas: vas,
                        idx: vases.length - idx,
                        onSelectionChanged: _this2.props.onClick(vas.id),
                        net: _this2.props.net
                    });
                }))), vasesWithStatuses && vasesWithStatuses.length > numberOfVasesVisibleByDefault ? /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    variant: "",
                    className: "opl-expander-inner u-no-padding",
                    sectionClassName: "opl-section-inner"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Section, babelHelpers.defineProperty({
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__content__nested u-hide--soft",
                    className: "opl-section-inner",
                    headerBelow: true
                }, "className", "u-no-padding"), /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    scrollToSelected: false,
                    variant: "",
                    className: "opl-expander-outer u-no-padding",
                    sectionClassName: "opl-section-outer"
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "u-spacing-l u-small-spacing-m"
                }, vasesWithStatuses && vasesWithStatuses.slice(numberOfVasesVisibleByDefault).map(function(vas, idx, vases) {
                    var index = idx + numberOfVasesVisibleByDefault;
                    return /*#__PURE__*/ _react.default.createElement(_FixProductRadioBox.default, {
                        key: index,
                        vas: vas,
                        idx: vases.length - index + numberOfVasesVisibleByDefault,
                        onSelectionChanged: _this2.props.onClick(vas.id),
                        inputType: "checkbox",
                        net: _this2.props.net
                    });
                }))))) : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                }), /*#__PURE__*/ _react.default.createElement(SaveVasesButton, {
                    saveVasesClicked: this._onSaveWrapper.bind(this)
                }))));
            }
        }]);
        return FixGadgetModal;
    }(_react.Component);

    _exports.default = FixGadgetModal;
    FixGadgetModal.propTypes = {
        header: _propTypes.PropTypes.string,
        bundle: _propTypes.PropTypes.string,
        cartBundle: _propTypes.PropTypes.string,
        propositionId: _propTypes.PropTypes.string,
        open: _propTypes.PropTypes.bool
    };

    var SaveVasesButton = function SaveVasesButton(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-right u-text-right"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
            onClick: props.saveVasesClicked
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-box"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-circle"
        })), "Wybierz"));
    };

    SaveVasesButton.propTypes = {
        saveVasesClicked: _propTypes.PropTypes.func
    };
});
//# sourceMappingURL=FixGadgetModal.js.map