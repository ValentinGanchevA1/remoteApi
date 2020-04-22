define(["exports", "react-redux", "react", "../../selectors", "../../actions/app", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal"], function(_exports, _reactRedux, _react, _selectors, _app, _OraCommonComponents, _Modal) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
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

    var FBBServicesModalView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FBBServicesModalView, _Component);

        var _super = _createSuper(FBBServicesModalView);

        function FBBServicesModalView(props) {
            var _this;

            babelHelpers.classCallCheck(this, FBBServicesModalView);
            _this = _super.call(this, props);
            _this.state = {
                shouldClose: false
            };
            _this.props.fixInvalid && OPL.UI.on('module.started', function(data) {
                return _this.onReady(data);
            });
            _this.onReady = _this.onReady.bind(babelHelpers.assertThisInitialized(_this));
            _this.modalId = "fbbServicesModal";
            return _this;
        }

        babelHelpers.createClass(FBBServicesModalView, [{
            key: "componentWillUpdate",
            value: function componentWillUpdate(nextProps) {
                if (!!this.props.fbbServices && !!nextProps.fbbServices && !!nextProps.fbbServices[0] && nextProps.fbbServices[0].serviceBundles && nextProps.fbbServices[0].serviceBundles[0] && this.props.fbbServices.length != nextProps.fbbServices.length) {
                    this.props.selectedDesignationNumberAction(nextProps.fbbServices[0].serviceBundles[0].mainService.designationNumber);
                    this.props.selectedServiceInstanceIdAction(nextProps.fbbServices[0].serviceBundles[0].mainService.serviceId);
                }
            }
        }, {
            key: "onReady",
            value: function onReady(data) {
                if (data.element.id === "react-modal-" + this.modalId + "-trigger") {
                    this.props.requestFBBServiceDataFilteredByWWT();
                }
            }
        }, {
            key: "renderService",
            value: function renderService(serviceBundle) {
                if (serviceBundle.mainService) {
                    var serviceId = serviceBundle.mainService.serviceId;
                    var hasPots = !!serviceBundle.pots;
                    var isConvergent = !!serviceBundle.convergent;
                    var _this$props$descripti = this.props.descriptions,
                        potsIcon = _this$props$descripti.potsIcon,
                        internetIcon = _this$props$descripti.internetIcon,
                        videoIcon = _this$props$descripti.videoIcon,
                        voipIcon = _this$props$descripti.voipIcon,
                        simIcon = _this$props$descripti.simIcon,
                        pots = _this$props$descripti.pots,
                        internet = _this$props$descripti.internet,
                        video = _this$props$descripti.video,
                        voip = _this$props$descripti.voip,
                        sim = _this$props$descripti.sim,
                        servicesSeparator = _this$props$descripti.servicesSeparator;
                    var icons = '';
                    var desc = '';

                    switch (serviceId) {
                        case "PSTN0000":
                            icons += potsIcon;
                            desc += pots;
                            break;

                        case "NEOI0000":
                            icons += internetIcon;
                            desc += internet;
                            break;

                        case "DUO0000":
                            icons += internetIcon + voipIcon;
                            desc += internet + servicesSeparator + voip;
                            break;

                        case "DWIE0000":
                            icons += internetIcon + videoIcon;
                            desc += internet + servicesSeparator + video;
                            break;

                        case "TRPL0000":
                            icons += internetIcon + videoIcon + voipIcon;
                            desc += internet + servicesSeparator + video + servicesSeparator + voip;
                            break;
                    }

                    if ("PSTN0000" !== serviceId && hasPots) {
                        icons += potsIcon;
                        desc += servicesSeparator + pots;
                    }

                    if (("NEOI0000" === serviceId || "TRPL0000" === serviceId) && isConvergent) {
                        icons += simIcon;
                        desc += servicesSeparator + sim;
                    }

                    if (!isConvergent) {
                        desc += ' (' + serviceBundle.displayNumber + ')';
                    }

                    var labelWithIcons = {
                        __html: icons + desc
                    };
                    return /*#__PURE__*/ _react.default.createElement("p", {
                        dangerouslySetInnerHTML: labelWithIcons
                    });
                }
            }
        }, {
            key: "renderFixAddressWithServices",
            value: function renderFixAddressWithServices(fixAddressWithServices) {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, fixAddressWithServices.map(function(service, index) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: index
                    }, _this2.renderServices(service));
                }));
            }
        }, {
            key: "renderServices",
            value: function renderServices(service) {
                var _this3 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, service.serviceBundles.map(function(a, subindex) {
                    return /*#__PURE__*/ _react.default.createElement("span", {
                        key: "subMap-" + subindex
                    }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, _this3.getPropsForRadio(_this3.renderService(a), a)), /*#__PURE__*/ _react.default.createElement("br", null));
                }));
            }
        }, {
            key: "getPropsForRadio",
            value: function getPropsForRadio(text, value) {
                return {
                    name: "serviceSelect",
                    text: text,
                    value: [this.getDesignationNumber(value), this.getServiceInstanceId(value)],
                    labelClassName: "o-radio opl-radio u-spacing",
                    spanClassName: "u-vertical-center",
                    readOnly: false,
                    checked: this.getDesignationNumber(value).toString() == this.props.selectedDesignationNumber,
                    onChange: this.selectRadio.bind(this)
                };
            }
        }, {
            key: "selectRadio",
            value: function selectRadio(event) {
                this.props.selectedDesignationNumberAction(event.target.value.slice(0, event.target.value.indexOf(',')));
                this.props.selectedServiceInstanceIdAction(event.target.value.slice(event.target.value.lastIndexOf(',') + 1));
            }
        }, {
            key: "getDesignationNumber",
            value: function getDesignationNumber(value) {
                return !!value && !!value.mainService && value.mainService.designationNumber;
            }
        }, {
            key: "getServiceInstanceId",
            value: function getServiceInstanceId(value) {
                return !!value && !!value.mainService && value.mainService.cfServiceInstanceId;
            }
        }, {
            key: "getButtonProps",
            value: function getButtonProps(main) {
                return {
                    className: "o-btn opl-btn opl-btn--primary u-w-100",
                    accept: main,
                    type: main ? "primary" : "secondary",
                    onClick: this.props.onClickNext.bind(this, this.props.selectedDesignationNumber, this.props.selectedServiceInstanceId)
                };
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: this.modalId,
                    showClose: true,
                    open: this.props.fbbServices && this.props.fbbServices.length > 0,
                    size: "narrow"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h3"
                }, this.props.descriptions.title || "Zdecyduj czy składane zamówienia ma być rozliczane w ramach faktury dla posiadanego już konta, czy nowego."), /*#__PURE__*/ _react.default.createElement("br", null)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.mainDescription || "Do faktury wskazanego przez ciebie konta, dołączone będą numery umieszczone na koszyku. Dołączenie wybranych numerówdo Twojego istniejącego konta sprawi, że co miesiąc będziesz opłacać tylko jeden rachunek, na którym wyszczególnione będą opłaty za wszystkie numery."), /*#__PURE__*/ _react.default.createElement("br", null)), !!this.props.fbbServices && this.props.fbbServices.length > 0 && this.renderFixAddressWithServices(this.props.fbbServices), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, this.getPropsForRadio("Zainstaluj nową usługę", "")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8 "
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, this.getButtonProps(false), this.props.descriptions.next || "Dalej"))));
            }
        }]);
        return FBBServicesModalView;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            fbbServices: (0, _selectors.getFbbServices)(state),
            selectedDesignationNumber: (0, _selectors.getSelectedDesignationNumber)(state),
            selectedServiceInstanceId: (0, _selectors.getSelectedServiceInstanceId)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            selectedDesignationNumberAction: function selectedDesignationNumberAction(designationNumber) {
                return dispatch((0, _app.setSelectedDesignationNumberAction)(designationNumber));
            },
            selectedServiceInstanceIdAction: function selectedServiceInstanceIdAction(serviceInstanceId) {
                return dispatch((0, _app.setSelectedServiceInstanceIdAction)(serviceInstanceId));
            },
            onClickNext: function onClickNext(selectedDesignationNumber, selectedServiceInstanceId) {
                selectedDesignationNumber != "false" ? dispatch((0, _app.gotoFixDispatcher)(selectedDesignationNumber, selectedServiceInstanceId)) : dispatch((0, _app.refreshFixCartWithoutFbbCheck)());
            },
            requestFBBServiceDataFilteredByWWT: function requestFBBServiceDataFilteredByWWT() {
                return dispatch((0, _app.requestFBBServiceDataFilteredByWWT)());
            }
        };
    };

    var FBBServicesModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FBBServicesModalView);
    var _default = FBBServicesModal;
    _exports.default = _default;
});
//# sourceMappingURL=FBBServicesModal.js.map