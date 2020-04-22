define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/cart/components/entriesList/fix/buymore/FixProductDetails", "eshop/modules/core/components/ui/OfferDetails", "../../../../../magnum2/constants/ProcessTypeEnum"], function(_exports, _react, _propTypes, _OraCommonComponents, _FixProductDetails, _OfferDetails, _ProcessTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ProcessTypeEnum = babelHelpers.interopRequireDefault(_ProcessTypeEnum);

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

    var OfferDetailsModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OfferDetailsModal, _Component);

        var _super = _createSuper(OfferDetailsModal);

        function OfferDetailsModal() {
            babelHelpers.classCallCheck(this, OfferDetailsModal);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OfferDetailsModal, [{
            key: "getPriceSource",
            value: function getPriceSource() {
                return this.props.entry || this.props.proposition;
            }
        }, {
            key: "render",
            value: function render() {
                console.log("OfferDetailsModal", this.props);
                return isUnbundledMobile(this.props) ? /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraModal, {
                    id: this.props.id,
                    showClose: true,
                    narrow: false
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_OfferDetails.DetailsLargeSimfreeRaw, babelHelpers.extends({
                    key: this.props.voice.code + this.props.id
                }, preprocess(this.props), {
                    proposition: this.getPriceSource()
                })))) : /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraModal, {
                    id: this.props.id,
                    showClose: true,
                    narrow: false
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h1", {
                    className: "u-acc-hide"
                }, "Szczeg\xF3\u0142y oferty"), /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "u-spacing-l-xl opl-modal-title-space",
                    style: {
                        paddingRight: 32
                    }
                }, this.props.header), this.props.data && /*#__PURE__*/ _react.default.createElement(CommonDetailsSection, {
                    product: this.props.data
                }), this.props.broadband && /*#__PURE__*/ _react.default.createElement(CommonDetailsSection, {
                    product: this.props.broadband
                }), this.props.tv && /*#__PURE__*/ _react.default.createElement(TvDetailsSection, {
                    product: this.props.tv,
                    tvPackages: this.props.tvPackages
                }), this.props.voip && /*#__PURE__*/ _react.default.createElement(CommonDetailsSection, {
                    product: this.props.voip
                }), this.props.voice && /*#__PURE__*/ _react.default.createElement(CommonDetailsSection, {
                    product: this.props.voice
                })));
            }
        }]);
        return OfferDetailsModal;
    }(_react.Component);

    function isUnbundledMobile(props) {
        var trans = props.transactions;

        if (trans) {
            var filteredTrans = trans.filter(function(trans) {
                return trans.process !== _ProcessTypeEnum.default.TERMINATION && trans.process !== _ProcessTypeEnum.default.TERMINATION_DATA;
            });
            return filteredTrans.length === 1;
        }

        return false;
    }

    function preprocess(props) {
        var extendedProps = props;
        extendedProps.header = props.header;
        extendedProps.data = null;
        extendedProps.propositionName = props.voice.name;
        extendedProps.basePrice = props.priceVariant.DEFAULT.monthlyPayments[0].finalPrice;
        extendedProps.details = JSON.parse(props.voice.descriptionForProductLongTable);
        extendedProps.proposition = {
            rateplanId: props.voice.code,
            internetLegal: props.internetLegal
        };
        return extendedProps;
    }

    var DeviceType = function DeviceType(deviceCode) {
        switch (deviceCode) {
            case 'LB':
                return "Modem ";

            case 'STB':
                return "Dekoder ";

            default:
                return "";
        }
    };

    var DetailsSection = function DetailsSection(props) {
        var devices = props.devices || [];
        console.log("DetailsSection", props);
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h3", {
            className: "u-spacing-l"
        }, props.title), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-spacing-l-xl",
            dangerouslySetInnerHTML: {
                __html: props.offerDetails
            }
        }), devices.map(function(device) {
            return /*#__PURE__*/ _react.default.createElement(DeviceSection, {
                device: device,
                key: device.id
            });
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-separator u-spacing-l"
        }), props.children);
    };

    var DeviceSection = function DeviceSection(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-spacing-l"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-spacing"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold u-inline-block u-spacing-right-m"
        }, DeviceType(props.device.deviceType)), props.device.title), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
        }, /*#__PURE__*/ _react.default.createElement("img", {
            src: props.device.imgUrl,
            alt: props.device.title,
            className: props.device.orginalImageSize ? "" : "u-w-100"
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-6 ",
            dangerouslySetInnerHTML: {
                __html: props.device.longDescription
            }
        })));
    };

    var CommonDetailsSection = function CommonDetailsSection(props) {
        return /*#__PURE__*/ _react.default.createElement(DetailsSection, {
            title: props.product.name,
            offerDetails: props.product.details,
            devices: props.product.devices
        });
    };

    var TvDetailsSection = function TvDetailsSection(props) {
        return /*#__PURE__*/ _react.default.createElement(DetailsSection, {
            title: props.product.name,
            offerDetails: props.product.details,
            devices: props.product.devices
        }, /*#__PURE__*/ _react.default.createElement(OfferAdapterForTvDetails, {
            offerDetails: props.product.details,
            tvPackages: props.tvPackages,
            productCode: props.product.code
        }));
    };

    var OfferAdapterForTvDetails = function OfferAdapterForTvDetails(props) {
        console.log("OfferAdapterForTvDetails", props);
        var matchingTvPackage = props.tvPackages.find(function(tv) {
            return props.productCode === tv.id;
        });

        if (matchingTvPackage) {
            return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                className: "u-spacing-l"
            }, /*#__PURE__*/ _react.default.createElement(_FixProductDetails.TvDetails, {
                vas: matchingTvPackage
            })), /*#__PURE__*/ _react.default.createElement("div", {
                className: "o-separator u-spacing-l"
            }));
        } else {
            return null;
        }
    };

    OfferDetailsModal.defaultProps = {
        id: "",
        details: "",
        header: "Szczegóły oferty"
    };
    OfferDetailsModal.propTypes = {
        id: _propTypes.PropTypes.string,
        icon: _propTypes.PropTypes.string,
        details: _propTypes.PropTypes.string,
        productName: _propTypes.PropTypes.string,
        header: _propTypes.PropTypes.string,
        prices: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.object)
    };
    var _default = OfferDetailsModal;
    _exports.default = _default;
});
//# sourceMappingURL=OfferDetailsModal.js.map