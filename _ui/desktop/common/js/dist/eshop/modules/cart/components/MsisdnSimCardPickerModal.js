define(["exports", "react", "prop-types", "react-redux", "eshop/components/OraCommonComponents", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/resources", "./MsisdnPickerComponent", "./SimCardPickerComponent", "../../core/constants/TransactionProcessTypeEnum"], function(_exports, _react, _propTypes, _reactRedux, _OraCommonComponents, _OnlineUtils, _Modal, _selectors, _resources, _MsisdnPickerComponent, _SimCardPickerComponent, _TransactionProcessTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _MsisdnPickerComponent = babelHelpers.interopRequireDefault(_MsisdnPickerComponent);
    _SimCardPickerComponent = babelHelpers.interopRequireDefault(_SimCardPickerComponent);
    _TransactionProcessTypeEnum = babelHelpers.interopRequireDefault(_TransactionProcessTypeEnum);

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

    var MsisdnSimCardPickerModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MsisdnSimCardPickerModal, _Component);

        var _super = _createSuper(MsisdnSimCardPickerModal);

        function MsisdnSimCardPickerModal(props) {
            babelHelpers.classCallCheck(this, MsisdnSimCardPickerModal);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MsisdnSimCardPickerModal, [{
            key: "save",
            value: function save() {
                this.props.updateResources();
            }
        }, {
            key: "getMsisdnDescription",
            value: function getMsisdnDescription() {
                if (this.props.entry.processType === _TransactionProcessTypeEnum.default.RETENTION) {
                    return 'Przedłużenie dla numeru: ';
                }

                return 'Nowy numer: ';
            }
        }, {
            key: "render",
            value: function render() {
                var simCardPickerComponent = /*#__PURE__*/ _react.default.createElement(_SimCardPickerComponent.default, {
                    fetch: this.props.open,
                    simCard: this.props.simCard,
                    simCards: this.props.simCards,
                    fetchSimCards: this.props.fetchSimCards,
                    changeSimCard: this.props.changeSimCard,
                    channel: this.props.channel
                });

                var msisdnPickerComponent = this.props.entry.processType === _TransactionProcessTypeEnum.default.ACTIVATION && /*#__PURE__*/ _react.default.createElement(_MsisdnPickerComponent.default, {
                    msisdn: this.props.msisdn,
                    msisdns: this.props.msisdns,
                    fetchMsisdns: this.props.fetchMsisdns,
                    changeMsisdn: this.props.changeMsisdn,
                    entry: this.props.entry,
                    fetch: this.props.open,
                    channel: this.props.channel
                });

                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "MsisdnSimCardPickerModal",
                    key: "MsisdnSimCardPickerModal",
                    open: this.props.open,
                    onClose: this.props.onClose.bind(this, this.props.bundleNo),
                    size: "narrow"
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h3 u-margin-l opl-modal-title-space"
                }, this.props.entry.planName), this.props.entry.loyaltyLengthDescription && /*#__PURE__*/ _react.default.createElement("p", null, this.props.entry.loyaltyLengthDescription), /*#__PURE__*/ _react.default.createElement("p", null, this.props.entry.simCard && ["Karta SIM (" + this.props.entry.simCard.description + ")"], this.props.entry.simCard && this.props.entry.msisdn && [" / "], this.props.entry.msisdn && [this.getMsisdnDescription.apply(this), /*#__PURE__*/ _react.default.createElement("b", null, _OnlineUtils.default.transformMsisdn(this.props.entry.msisdn))]), this.props.resourcesMsg && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraMessage, {
                    type: "error",
                    className: "u-spacing-top-l"
                }, this.props.resourcesMsg.message), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-margin-l u-margin-top-l"
                }), simCardPickerComponent, msisdnPickerComponent, /*#__PURE__*/ _react.default.createElement("div", {
                    className: 'u-margin-l l-col l-col-12' + (this.props.entry.processType != _TransactionProcessTypeEnum.default.MNP ? ' o-separator' : '')
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col--opposite l-col-3 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    onClick: this.save.bind(this),
                    "aria-label": "zmie\u0144 numer"
                }, "Zmie\u0144"))));
            }
        }]);
        return MsisdnSimCardPickerModal;
    }(_react.Component);

    MsisdnSimCardPickerModal.propTypes = {
        msisdn: _propTypes.PropTypes.string,
        onClose: _propTypes.PropTypes.func,
        processType: _propTypes.PropTypes.string,
        bundleNo: _propTypes.PropTypes.number,
        channel: _propTypes.PropTypes.string
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            msisdns: (0, _selectors.getMsisdns)(state),
            msisdn: (0, _selectors.getMsisdn)(state),
            simCards: (0, _selectors.getSimCards)(state),
            simCard: (0, _selectors.getSimCard)(state),
            resourcesMsg: (0, _selectors.getResourcesMsg)(state),
            open: (0, _selectors.isResourceModalVisible)(state),
            bundleNo: (0, _selectors.getResourceModalBundleNo)(state),
            entry: (0, _selectors.getEntryForResourceModal)(state),
            changingMsisdn: (0, _selectors.changingMsisdn)(state),
            changingSimCard: (0, _selectors.changingSimCard)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            fetchMsisdns: function fetchMsisdns(bundleNo) {
                return dispatch((0, _resources.fetchMsisdns)(bundleNo));
            },
            fetchSimCards: function fetchSimCards(bundleNo) {
                return dispatch((0, _resources.fetchSimCards)(bundleNo));
            },
            changeMsisdn: function changeMsisdn(msisdn, bundleNo) {
                return dispatch((0, _resources.changeMsisdn)(msisdn));
            },
            changeSimCard: function changeSimCard(simCard) {
                return dispatch((0, _resources.changeSimCard)(simCard));
            },
            onClose: function onClose(bundleNo) {
                return dispatch((0, _resources.resourceModalClose)(bundleNo));
            },
            updateResources: function updateResources() {
                return dispatch((0, _resources.updateResources)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MsisdnSimCardPickerModal);

    _exports.default = _default;
});
//# sourceMappingURL=MsisdnSimCardPickerModal.js.map