define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Expander", "../actions/documents", "./MulticartDocumentsListComponent", "eshop/modules/cart/components/Utils", "../../checkout/selectors", "../selectors", "eshop/modules/checkout/components/serialNumber/documents/MulticartGoodsOrdersDocuments"], function(_exports, _react, _reactRedux, _Expander, _documents, _MulticartDocumentsListComponent, _Utils, _selectors, _selectors2, _MulticartGoodsOrdersDocuments) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MulticartDocumentsListComponent = babelHelpers.interopRequireDefault(_MulticartDocumentsListComponent);
    _MulticartGoodsOrdersDocuments = babelHelpers.interopRequireDefault(_MulticartGoodsOrdersDocuments);

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

    var MulticartDocumentsComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartDocumentsComponent, _Component);

        var _super = _createSuper(MulticartDocumentsComponent);

        function MulticartDocumentsComponent() {
            babelHelpers.classCallCheck(this, MulticartDocumentsComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartDocumentsComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.props.fetchDocuments();
            }
        }, {
            key: "renderLists",
            value: function renderLists() {
                return this.props.lists.map(function(list) {
                    return /*#__PURE__*/ _react.default.createElement(_MulticartDocumentsListComponent.default, {
                        key: list.id,
                        types: list.types,
                        title: list.name,
                        sectionKey: list.id
                    });
                });
            }
        }, {
            key: "render",
            value: function render() {
                if (!this.documentsAvailable()) {
                    return null;
                }

                return /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, null, this.renderExpander());
            }
        }, {
            key: "renderNotWWW",
            value: function renderNotWWW() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-console u-margin-l"
                }, this.renderExpander()))));
            }
        }, {
            key: "renderExpander",
            value: function renderExpander() {
                var toggleHeader = /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h4 opl-section__heading"
                }, this.props.descriptions.title);

                var sectionHeader = /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Toggle, {
                    variant: "arrow",
                    header: toggleHeader,
                    className: "l-col l-col-12 ",
                    triggerClassName: "opl-document__expander__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-show"
                }, "rozwi\u0144 sekcj\u0119 Umowy, cenniki, regulaminy"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, "zwi\u0144 sekcj\u0119 Umowy, cenniki, regulaminy")));

                return /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    scrollToSelected: false,
                    className: "l-page-row",
                    id: "document-section"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: sectionHeader,
                    variant: "section",
                    className: "opl-document__expander",
                    contentClassName: "opl-document__expander__content",
                    id: "document-component-section"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    scrollToSelected: false,
                    className: "u-padding-left-l",
                    id: "document-component-subexpander"
                }, this.renderLists(), this.props.channels.sales == 'POS' && /*#__PURE__*/ _react.default.createElement(_MulticartGoodsOrdersDocuments.default, this.props))));
            }
        }, {
            key: "documentsAvailable",
            value: function documentsAvailable() {
                return this.props.documentItems && this.props.documentItems.length > 0;
            }
        }]);
        return MulticartDocumentsComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            currentStepId: (0, _selectors.getCurrentStepId)(state),
            documentItems: (0, _selectors2.getDocumentItems)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            fetchDocuments: function fetchDocuments() {
                return dispatch((0, _documents.fetchDocuments)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartDocumentsComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartDocumentsComponent.js.map