define(["exports", "react", "prop-types", "react-redux", "redux", "lodash", "../../../core/components/ui/Expander", "./OraDocumentsSectionCategory", "../FullScreenLoader", "../../actions/data", "../../../core/constants/RequestState"], function(_exports, _react, _propTypes, _reactRedux, _redux, _lodash, _Expander, _OraDocumentsSectionCategory, _FullScreenLoader, _data, _RequestState) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.OraOffersDocumentsExpander = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _OraDocumentsSectionCategory = babelHelpers.interopRequireDefault(_OraDocumentsSectionCategory);
    _FullScreenLoader = babelHelpers.interopRequireDefault(_FullScreenLoader);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    var OraOffersDocumentsExpander = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraOffersDocumentsExpander, _Component);

        var _super = _createSuper(OraOffersDocumentsExpander);

        function OraOffersDocumentsExpander() {
            babelHelpers.classCallCheck(this, OraOffersDocumentsExpander);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OraOffersDocumentsExpander, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var prevDurationListRequestStateWaiting = prevProps.durationList.requestState === _RequestState.RequestState.Waiting;
                var currentDurationListRequestStateSuccess = this.props.durationList.requestState === _RequestState.RequestState.Success;

                if (prevDurationListRequestStateWaiting && currentDurationListRequestStateSuccess) {
                    this.props.fetchDocuments();
                }
            }
        }, {
            key: "getDocumentKeys",
            value: function getDocumentKeys() {
                return this.props.descriptions.sectionName.split(',').map(function(key) {
                    return key.trim();
                });
            }
        }, {
            key: "renderContent",
            value: function renderContent() {
                if (!_lodash.default.isEmpty(this.props.documents)) {
                    var content = [];
                    var documentKeys = this.getDocumentKeys();

                    for (var i = 0; i < documentKeys.length; i++) {
                        var list = this.props.documents[documentKeys[i]];

                        if (list) {
                            content.push( /*#__PURE__*/ _react.default.createElement(_OraDocumentsSectionCategory.default, {
                                documents: list,
                                header: documentKeys[i],
                                key: i
                            }));
                        }
                    }

                    return content;
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l-xl u-small-no-padding-l u-padding-m"
                }, this.props.descriptions.noDocuments);
            }
        }, {
            key: "renderContentLoader",
            value: function renderContentLoader() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l-xl u-small-no-padding-l u-padding-m"
                }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.fetchDocumentsMessage, "..."));
            }
        }, {
            key: "render",
            value: function render() {
                var descriptions = this.props.descriptions;

                var toggleHeader = /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h4 opl-section__heading"
                }, descriptions.sectionName);

                var sectionHeader = /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Toggle, {
                    variant: "arrow",
                    header: toggleHeader,
                    className: "l-col l-col-12 ",
                    triggerClassName: "opl-document__expander__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-show"
                }, descriptions.expandSection, " ", descriptions.sectionName), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, descriptions.collapseSection, " ", descriptions.sectionName)));

                var loaderMessage = descriptions.downloadDocumentMessage;
                var showLoader = this.props.documentsMetadata && this.props.documentsMetadata.documentBeingDownloaded !== '';
                var isContentLoading = this.props.isLoading;
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_FullScreenLoader.default, {
                    id: "document-all-loader-id",
                    showLoader: showLoader,
                    message: loaderMessage,
                    showClose: true
                }), /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    id: "doc_expander",
                    variant: "section",
                    sectionClassName: "opl-checkout-section",
                    summaryClassName: "opl-section__border-bottom",
                    toggleClassName: "h4 opl-checkout-section__heading"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: sectionHeader
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, isContentLoading ? this.renderContentLoader() : this.renderContent()))));
            }
        }]);
        return OraOffersDocumentsExpander;
    }(_react.Component);

    _exports.OraOffersDocumentsExpander = OraOffersDocumentsExpander;
    babelHelpers.defineProperty(OraOffersDocumentsExpander, "propTypes", {
        descriptions: _propTypes.default.shape({
            sectionName: _propTypes.default.string,
            noDocuments: _propTypes.default.string,
            expandSection: _propTypes.default.string,
            collapseSection: _propTypes.default.string,
            fetchDocumentsMessage: _propTypes.default.string,
            downloadDocumentMessage: _propTypes.default.string
        }),
        documents: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
        documentsMetadata: _propTypes.default.object,
        isLoading: _propTypes.default.bool,
        durationList: _propTypes.default.object,
        fetchDocuments: _propTypes.default.func
    });

    var mapStateToProps = function mapStateToProps(state) {
        return {
            documents: state.magnum.documents.list,
            documentsMetadata: state.documents.metadata,
            isLoading: state.magnum.documents.loading,
            durationList: state.magnum.durationList
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return _objectSpread({}, (0, _redux.bindActionCreators)({
            fetchDocuments: _data.fetchDocuments
        }, dispatch));
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraOffersDocumentsExpander);

    _exports.default = _default;
});
//# sourceMappingURL=OraDocumentsSection.js.map