define(["exports", "react", "eshop/modules/simfree/components/filter/OfferDetailsPopUp"], function(_exports, _react, _OfferDetailsPopUp) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OfferDetailsPopUp = babelHelpers.interopRequireDefault(_OfferDetailsPopUp);

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

    var getLabelsForDetails = function getLabelsForDetails(desc) {
        return {
            close: desc && desc['details.close'] || "Zamknij",
            header: desc && desc['details.header'] || "Szczegóły oferty",
            select: desc && desc['details.select'] || "Wybieram ofertę bez telefonu"
        };
    };

    var PropositionDetailsForDevice = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(PropositionDetailsForDevice, _React$Component);

        var _super = _createSuper(PropositionDetailsForDevice);

        function PropositionDetailsForDevice() {
            babelHelpers.classCallCheck(this, PropositionDetailsForDevice);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(PropositionDetailsForDevice, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_OfferDetailsPopUp.default, {
                    labelText: "Szczegóły",
                    header: getLabelsForDetails(this.props.descriptions).header,
                    propositionName: this.props.rateplanName,
                    details: this.props.longDescriptionTable,
                    proposition: this.props.proposition,
                    clientContext: this.props.clientContext
                }));
            }
        }]);
        return PropositionDetailsForDevice;
    }(_react.default.Component);

    _exports.default = PropositionDetailsForDevice;
});
//# sourceMappingURL=PropositionDetailsForDevice.js.map