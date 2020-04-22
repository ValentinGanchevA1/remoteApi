define(["exports", "react", "prop-types", "react-redux", "eshop/components/OraCommonComponents", "../selectors", "../actions/documents", "eshop/modules/cart/selectors", "eshop/utils/OnlineUtils"], function(_exports, _react, _propTypes, _reactRedux, _OraCommonComponents, _selectors, _documents, _selectors2, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var MulticartDocumentLink = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartDocumentLink, _Component);

        var _super = _createSuper(MulticartDocumentLink);

        function MulticartDocumentLink(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartDocumentLink);
            _this = _super.call(this, props);
            _this.handleClick = _this.handleClick.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(MulticartDocumentLink, [{
            key: "handleClick",
            value: function handleClick(e) {
                this.props.getOrCreateDocument(this.props.documentCode, this.props.bundleNo, this.props.documentType);
                e.preventDefault();
            }
        }, {
            key: "isMsisdnInDescriptionNeeded",
            value: function isMsisdnInDescriptionNeeded() {
                return this.props.documentCode === 'MOB_DOC_AGR_B2C' || this.props.documentCode === 'MOB_DOC_AGR_B2B' || this.props.documentCode === 'DOC_AGR_ASSIGNMENT' || this.props.documentCode === 'DOC_AGR_ASSIGNMENT_DEATH';
            }
        }, {
            key: "getDescriptionWithMsisdn",
            value: function getDescriptionWithMsisdn() {
                var _this2 = this;

                var entry = this.props.miniCartData.entries.find(function(entry) {
                    return entry.bundleNo === _this2.props.bundleNo;
                });

                if (!entry) {
                    return this.props.documentDescription;
                }

                var msisdnForDescription = _OnlineUtils.default.formatMsisdn(_OnlineUtils.default.isMigration(entry.processType) ? entry.mnpNumber : entry.msisdn);

                return this.props.documentDescription + ' (nr ' + msisdnForDescription + ') ';
            }
        }, {
            key: "getDocumentDescription",
            value: function getDocumentDescription() {
                if (this.isMsisdnInDescriptionNeeded()) {
                    return this.getDescriptionWithMsisdn();
                } else {
                    return this.props.documentDescription;
                }
            }
        }, {
            key: "renderDocumentLink",
            value: function renderDocumentLink() {
                if (this.props.anyDocumentIsBeingLoaded) {
                    return /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-font-bold"
                    }, this.getDocumentDescription(), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "PDF"));
                } else {
                    return /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#",
                        onClick: this.handleClick
                    }, this.getDocumentDescription(), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "PDF"));
                }
            }
        }, {
            key: "render",
            value: function render() {
                var loaderId = "print-documents-loader-" + this.props.documentCode + (this.props.bundleNo ? "_" + this.props.bundleNo : '');
                return /*#__PURE__*/ _react.default.createElement("li", {
                    className: "u-padding-s"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    loading: this.props.isDocumentBeingDownloaded,
                    id: loaderId,
                    parentId: "document-loader"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-vertical-middle"
                }, this.renderDocumentLink())));
            }
        }]);
        return MulticartDocumentLink;
    }(_react.Component);

    MulticartDocumentLink.propTypes = {
        documentCode: _propTypes.default.string.isRequired,
        documentDescription: _propTypes.default.string.isRequired,
        bundleNo: _propTypes.default.number
    };

    var makeMapStateToProps = function makeMapStateToProps() {
        var getDocumentLinkForCode = (0, _selectors.createGetDocumentLinkForCodeSelector)();
        var isDocumentBeingDownloaded = (0, _selectors.createIsDocumentBeingDownloadedSelector)();
        return function(state, props) {
            return {
                anyDocumentIsBeingLoaded: (0, _selectors.getAnyDocumentIsBeingLoaded)(state),
                isDocumentBeingDownloaded: isDocumentBeingDownloaded(state, props),
                documentLink: getDocumentLinkForCode(state, props),
                miniCartData: (0, _selectors2.getMiniCartData)(state)
            };
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            getOrCreateDocument: function getOrCreateDocument(code, bundleNo, documentType) {
                return dispatch((0, _documents.getOrCreateDocument)(code, bundleNo, documentType));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(makeMapStateToProps, mapDispatchToProps)(MulticartDocumentLink);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartDocumentLink.js.map