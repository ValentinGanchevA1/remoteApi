define(["exports", "react", "prop-types", "react-redux", "lodash", "../../configurator/components/OraMobileOffersDocumentsSection", "../../magnum2/components/documents/OraDocumentsSection", "../../simfree/actions/app", "../../magnum2/actions/data", "../../simfree/constants/OfferTypeEnum"], function(_exports, _react, _propTypes, _reactRedux, _lodash, _OraMobileOffersDocumentsSection, _OraDocumentsSection, _app, _data, _OfferTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _OraMobileOffersDocumentsSection = babelHelpers.interopRequireDefault(_OraMobileOffersDocumentsSection);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);

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

    var OraOffersDocumentsContainer = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraOffersDocumentsContainer, _Component);

        var _super = _createSuper(OraOffersDocumentsContainer);

        function OraOffersDocumentsContainer(props) {
            var _this;

            babelHelpers.classCallCheck(this, OraOffersDocumentsContainer);
            _this = _super.call(this, props);

            if (_this.props.isFut === 'false') {
                _this.props.getStaticDocuments();
            }

            return _this;
        }

        babelHelpers.createClass(OraOffersDocumentsContainer, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.isFut === 'false') {
                    this.props.getStaticDocuments();
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var regulationsList;
                var agreementsList;
                var pricesList;
                var depositList;

                if (this.props.selectedOfferType === _OfferTypeEnum.default.CONVERGENT) {
                    return /*#__PURE__*/ _react.default.createElement(_OraDocumentsSection.OraOffersDocumentsExpander, {
                        descriptions: {
                            sectionName: 'Regulaminy, Cenniki, Umowy',
                            noDocuments: 'Brak dokumentów',
                            fetchDocumentsMessage: 'Trwa wczytywanie dokumentów',
                            downloadDocumentMessage: 'Trwa pobieranie dokumentu'
                        },
                        documents: this.props.magnumDocuments.list,
                        documentsMetadata: this.props.magnumDocuments.metadata,
                        durationList: this.props.magnumDurationList,
                        fetchDocuments: this.props.fetchDocuments,
                        isLoading: this.props.magnumDocuments.loading
                    });
                }

                if (!_lodash.default.isEmpty(this.props.documents)) {
                    this.props.documents.sort(function(a, b) {
                        if (a.priority === b.priority) {
                            return a.documentDescription.localeCompare(b.documentDescription);
                        } else {
                            return a.priority - b.priority;
                        }
                    });
                    agreementsList = this.props.documents.filter(function(element) {
                        return _this2.props.filters.agreementsList.indexOf(element.documentType) > -1;
                    });
                    pricesList = this.props.documents.filter(function(element) {
                        return _this2.props.filters.pricesList.indexOf(element.documentType) > -1;
                    });
                    regulationsList = this.props.documents.filter(function(element) {
                        return _this2.props.filters.regulationsList.indexOf(element.documentType) > -1;
                    });
                    depositList = this.props.documents.filter(function(element) {
                        return _this2.props.filters.depositList.indexOf(element.documentType) > -1;
                    });
                }

                return !_lodash.default.isEmpty(this.props.documents) && !_lodash.default.isEmpty(regulationsList.concat(agreementsList, pricesList, depositList)) ? /*#__PURE__*/ _react.default.createElement(_OraMobileOffersDocumentsSection.default, {
                    regulationsList: regulationsList,
                    agreementsList: agreementsList,
                    pricesList: pricesList,
                    depositList: depositList,
                    selectedOfferType: this.props.selectedOfferType
                }) : /*#__PURE__*/ _react.default.createElement("div", null);
            }
        }]);
        return OraOffersDocumentsContainer;
    }(_react.Component);

    OraOffersDocumentsContainer.propTypes = {
        isFut: _propTypes.default.string,
        documents: _propTypes.default.arrayOf(_propTypes.default.shape({
            documentType: _propTypes.default.string
        })),
        magnumDocuments: _propTypes.default.object,
        filters: _propTypes.default.object,
        magnumDurationList: _propTypes.default.object,
        loaderOptions: _propTypes.default.string,
        selectedOfferType: _propTypes.default.string,
        getStaticDocuments: _propTypes.default.func,
        fetchDocuments: _propTypes.default.func
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            magnumDocuments: state.magnum.documents,
            magnumDurationList: state.magnum.durationList
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            getStaticDocuments: function getStaticDocuments() {
                return dispatch((0, _app.getStaticSimFreeDocuments)());
            },
            fetchDocuments: _data.fetchDocuments
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraOffersDocumentsContainer);

    _exports.default = _default;
});
//# sourceMappingURL=OraOffersDocumentsContainer.js.map