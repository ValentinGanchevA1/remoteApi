define(["exports", "react", "prop-types", "react-redux", "../selectors/offers", "../selectors/filters", "../../core/components/OraOffersDocumentsContainer"], function(_exports, _react, _propTypes, _reactRedux, _offers, _filters, _OraOffersDocumentsContainer) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OraOffersDocumentsContainer = babelHelpers.interopRequireDefault(_OraOffersDocumentsContainer);

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

    var OraMobileOffersDocumentsContainer = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraMobileOffersDocumentsContainer, _Component);

        var _super = _createSuper(OraMobileOffersDocumentsContainer);

        function OraMobileOffersDocumentsContainer() {
            babelHelpers.classCallCheck(this, OraMobileOffersDocumentsContainer);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OraMobileOffersDocumentsContainer, [{
            key: "getDocumentFilters",
            //TODO: think of something better
            value: function getDocumentFilters() {
                return {
                    agreementsList: ["TEMPLATE", "AGR_TEMPLATE"],
                    pricesList: ["PRICE_LIST", "DEVICE_PRICE_LIST"],
                    regulationsList: ["REG", "SHOP_REG"],
                    depositList: ["DEP_REQ"]
                };
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_OraOffersDocumentsContainer.default, {
                    documents: this.props.documents,
                    isFut: this.props.isFut,
                    filters: this.getDocumentFilters(),
                    selectedOfferType: this.props.selectedOfferType
                });
            }
        }]);
        return OraMobileOffersDocumentsContainer;
    }(_react.Component);

    OraMobileOffersDocumentsContainer.propTypes = {
        isFut: _propTypes.default.string,
        documents: _propTypes.default.arrayOf(_propTypes.default.shape({
            documentType: _propTypes.default.string
        }))
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            documents: (0, _offers.getOffersDocuments)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraMobileOffersDocumentsContainer);

    _exports.default = _default;
});
//# sourceMappingURL=OraMobileOffersDocumentsContainer.js.map