define(["exports", "react", "prop-types", "eshop/flux/utils/OraModalService", "eshop/modules/cart/components/entriesList/shared/productDetails/OfferDetailsModal"], function(_exports, _react, _propTypes, _OraModalService, _OfferDetailsModal) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _OfferDetailsModal = babelHelpers.interopRequireDefault(_OfferDetailsModal);

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

    var OfferPropositionDetails = /*#__PURE__*/ function(_PureComponent) {
        babelHelpers.inherits(OfferPropositionDetails, _PureComponent);

        var _super = _createSuper(OfferPropositionDetails);

        function OfferPropositionDetails() {
            babelHelpers.classCallCheck(this, OfferPropositionDetails);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OfferPropositionDetails, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.registerModalServiceSelectedPropositionDetails();
            }
        }, {
            key: "registerModalServiceSelectedPropositionDetails",
            value: function registerModalServiceSelectedPropositionDetails() {
                var _this = this;

                var proposition = this.props.proposition;

                if (proposition) {
                    _OraModalService.default.add(function(data) {
                        return /*#__PURE__*/ _react.default.createElement(_OfferDetailsModal.default, {
                            id: "offer_proposition_details_" + proposition.code,
                            header: "Szczegóły",
                            broadband: proposition.broadband,
                            tv: proposition.tvProduct,
                            tvPackages: proposition.tvPackages,
                            voip: proposition.voip,
                            voice: proposition.voice,
                            data: proposition.data,
                            transactions: _this.props.transactions
                        });
                    });
                }
            }
        }, {
            key: "openDetailsModal",
            value: function openDetailsModal() {
                _OraModalService.default.open("offer_proposition_details_" + this.props.proposition.code);
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var proposition = this.props.proposition;
                var linkName = this.props.linkName;
                return /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block u-spacing-right",
                    onClick: function onClick() {
                        return _this2.openDetailsModal();
                    }
                }, linkName);
            }
        }]);
        return OfferPropositionDetails;
    }(_react.PureComponent);

    babelHelpers.defineProperty(OfferPropositionDetails, "propTypes", {
        linkName: _propTypes.default.string,
        proposition: _propTypes.default.object,
        transactions: _propTypes.default.object
    });
    var _default = OfferPropositionDetails;
    _exports.default = _default;
});
//# sourceMappingURL=OfferPropositionDetails.js.map