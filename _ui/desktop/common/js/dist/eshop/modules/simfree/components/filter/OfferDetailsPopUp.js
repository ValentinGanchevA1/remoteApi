define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/OfferDetails", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/selectors", "eshop/modules/configurator/selectors/offers"], function(_exports, _react, _reactRedux, _OfferDetails, _Modal, _selectors, _offers) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);

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

    var popupId = 0;

    var OfferDetailsPopUp = /*#__PURE__*/ function(_React$PureComponent) {
        babelHelpers.inherits(OfferDetailsPopUp, _React$PureComponent);

        var _super = _createSuper(OfferDetailsPopUp);

        function OfferDetailsPopUp(props) {
            var _this;

            babelHelpers.classCallCheck(this, OfferDetailsPopUp);
            _this = _super.call(this, props);
            _this.state = {
                showModal: false
            };
            _this.popupId = _this.props.id || "details-popup_trigger" + popupId++;
            return _this;
        }

        babelHelpers.createClass(OfferDetailsPopUp, [{
            key: "getModalProps",
            value: function getModalProps() {
                return {
                    size: "medium",
                    showClose: true,
                    escapeClose: true,
                    clickClose: true
                };
            }
        }, {
            key: "setShowModal",
            value: function setShowModal(modalState) {
                this.setState(function(state) {
                    return {
                        showModal: modalState
                    };
                });
            }
        }, {
            key: "onClose",
            value: function onClose() {
                this.setShowModal(false);
            }
        }, {
            key: "openDetailsModal",
            value: function openDetailsModal(event) {
                event.preventDefault();
                this.setShowModal(true);
            }
        }, {
            key: "preventOfferSwitch",
            value: function preventOfferSwitch(event) {
                console.log(event);
                console.count("event");
                event.stopPropagation();
            }
        }, {
            key: "getPriceSource",
            value: function getPriceSource() {
                return this.props.entry || this.props.proposition;
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                console.log("OfferDetailsPopUp", this.props);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-inline-block",
                    onClick: function onClick(e) {
                        return _this2.preventOfferSwitch(e);
                    }
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    key: "details-popup_trigger" + this.popupId,
                    id: this.popupId + "trigger",
                    className: "u-inline-block u-spacing-right",
                    href: "#",
                    onClick: function onClick(e) {
                        return _this2.openDetailsModal(e);
                    }
                }, this.props.labelText), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Szczeg\xF3\u0142y oferty"), /*#__PURE__*/ _react.default.createElement(_Modal.default, babelHelpers.extends({
                    key: "modal_" + this.popupId
                }, this.getModalProps(), {
                    id: "modal_" + this.popupId,
                    open: this.state.showModal,
                    onClose: this.onClose.bind(this)
                }), /*#__PURE__*/ _react.default.createElement(_OfferDetails.DetailsLargeSimfreeRaw, babelHelpers.extends({
                    key: this.props.proposition.rateplanId + this.props.clientContext
                }, this.props, {
                    proposition: this.getPriceSource()
                }))));
            }
        }]);
        return OfferDetailsPopUp;
    }(_react.default.PureComponent);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showNet: (0, _selectors.getPriceIsNet)(state),
            contractRole: (0, _offers.getContractRole)(state)[0]
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    OfferDetailsPopUp.defaultProps = {
        header: "Szczególy oferty",
        propositionName: "",
        details: []
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OfferDetailsPopUp);

    _exports.default = _default;
});
//# sourceMappingURL=OfferDetailsPopUp.js.map