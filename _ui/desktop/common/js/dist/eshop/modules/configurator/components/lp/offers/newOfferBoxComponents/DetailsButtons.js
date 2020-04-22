define(["exports", "react", "eshop/modules/simfree/components/filter/OfferDetailsPopUp"], function(_exports, _react, _OfferDetailsPopUp) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.DetailsButtons = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
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

    var DetailsButtons = /*#__PURE__*/ function(_React$PureComponent) {
        babelHelpers.inherits(DetailsButtons, _React$PureComponent);

        var _super = _createSuper(DetailsButtons);

        function DetailsButtons() {
            babelHelpers.classCallCheck(this, DetailsButtons);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(DetailsButtons, [{
            key: "isClientContext",
            value: function isClientContext() {
                return this.props.clientContext || !!this.props.contractRole;
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-l u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement(OfferDetails, babelHelpers.extends({}, this.props.proposition, {
                    proposition: this.props.proposition,
                    descriptions: this.props.descriptions,
                    clientContext: this.isClientContext()
                })));
            }
        }]);
        return DetailsButtons;
    }(_react.default.PureComponent);

    _exports.DetailsButtons = DetailsButtons;

    var OfferDetails = function OfferDetails(props) {
        return /*#__PURE__*/ _react.default.createElement(_OfferDetailsPopUp.default, {
            labelText: "Szczegóły",
            header: getLabelsForDetails(props.descriptions).header,
            propositionName: props.rateplanName,
            details: props.longDescriptionTable,
            proposition: props.proposition,
            clientContext: props.clientContext
        });
    };

    var getLabelsForDetails = function getLabelsForDetails(desc) {
        return {
            close: desc && desc["details.close"] || "def:Zamknij",
            header: desc && desc["details.header"] || "def:Szczegóły oferty",
            select: desc && desc["details.select"] || "def:Wybieram ofertę bez telefonu"
        };
    };
});
//# sourceMappingURL=DetailsButtons.js.map