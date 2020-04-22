define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "react-redux", "eshop/modules/cart/selectors", "eshop/modules/cart/components/entriesList/mobile/productEntries/VasEntryComponent", "eshop/modules/core/enum/VasUpdateStatus"], function(_exports, _react, _propTypes, _OraCommonComponents, _reactRedux, _selectors, _VasEntryComponent, _VasUpdateStatus) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _VasEntryComponent = babelHelpers.interopRequireDefault(_VasEntryComponent);
    _VasUpdateStatus = babelHelpers.interopRequireDefault(_VasUpdateStatus);

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

    var VasEntriesListComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(VasEntriesListComponent, _Component);

        var _super = _createSuper(VasEntriesListComponent);

        function VasEntriesListComponent(props) {
            babelHelpers.classCallCheck(this, VasEntriesListComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(VasEntriesListComponent, [{
            key: "getVasesForBundle",
            value: function getVasesForBundle(bundle) {
                return this.props.vases && this.props.vases.find(function(vas) {
                    return vas.bundle == bundle;
                });
            }
        }, {
            key: "isVasInServices",
            value: function isVasInServices(vas) {
                var vases = this.getVasesForBundle(this.props.bundle);

                if (!vases || !vases.services) {
                    return false;
                }

                var services = vases.services;
                var inServices = [];
                services.forEach(function(service) {
                    if (service.id == vas.productCode) inServices.push(vas);
                });
                return !!inServices.length;
            }
        }, {
            key: "mobileVasUpdatingStatus",
            value: function mobileVasUpdatingStatus(vas) {
                return this.props.mobileVasUpdatingStatus && this.props.mobileVasUpdatingStatus[this.props.cartBundle] && this.props.mobileVasUpdatingStatus[this.props.cartBundle][vas.productCode];
            }
        }, {
            key: "getVasLoaderIdBase",
            value: function getVasLoaderIdBase() {
                return "vasComponent-loader_" + this.props.cartBundle + "_";
            }
        }, {
            key: "hideUnusedLoaders",
            value: function hideUnusedLoaders(presentedVases, baseId) {
                var that = this;

                if ($("[id*=" + baseId + "]") && $("[id*=" + baseId + "]").length) {
                    $("[id*=" + baseId + "]").each(function() {
                        var id = $(this).attr("id");

                        if (presentedVases.find(function(vas) {
                                return that.getVasLoaderIdBase() + vas.productCode === id;
                            })) {
                            console.log("I Exist ", id);
                        } else {
                            console.log("I am a ghost ", id);
                            $("." + id).css({
                                "display": "none"
                            });
                        }
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var presentedVases = this.props.entries.filter(function(isInServices) {
                    return _this.isVasInServices(isInServices);
                });
                this.hideUnusedLoaders(presentedVases, this.getVasLoaderIdBase());
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, presentedVases && presentedVases.map(function(vas, idx) {
                    return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                        loading: _this.mobileVasUpdatingStatus(vas) === _VasUpdateStatus.default.UPDATING || _this.mobileVasUpdatingStatus(vas) === _VasUpdateStatus.default.DELETED,
                        key: "loader_" + _this.props.cartBundle + "_" + vas.productCode,
                        id: _this.getVasLoaderIdBase() + vas.productCode,
                        parentId: "cart-loader",
                        useHeightFixing: false
                    }, /*#__PURE__*/ _react.default.createElement(_VasEntryComponent.default, {
                        key: "VAS" + vas.productCode + "_" + _this.props.idx,
                        detailsHeader: _this.props.detailsHeader,
                        entry: vas,
                        cartBundle: _this.props.cartBundle,
                        bundle: _this.props.bundle,
                        propositionId: _this.props.propositionId,
                        topBorder: true
                    }));
                }));
            }
        }]);
        return VasEntriesListComponent;
    }(_react.Component);

    VasEntriesListComponent.propTypes = {
        idx: _propTypes.default.number.isRequired,
        entries: _propTypes.default.arrayOf(_propTypes.default.object),
        detailsHeader: _propTypes.default.string,
        propositionId: _propTypes.default.string,
        bundle: _propTypes.default.string,
        cartBundle: _propTypes.default.string
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            vases: (0, _selectors.getMobileVases)(state),
            mobileVasUpdatingStatus: (0, _selectors.getMobileVasUpdatingStatus)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, null)(VasEntriesListComponent);

    _exports.default = _default;
});
//# sourceMappingURL=VasEntriesListComponent.js.map