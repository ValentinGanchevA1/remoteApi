define(["exports", "react", "eshop/components/OraCommonComponents"], function(_exports, _react, _OraCommonComponents) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var MulticartModificationModalComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartModificationModalComponent, _Component);

        var _super = _createSuper(MulticartModificationModalComponent);

        function MulticartModificationModalComponent() {
            babelHelpers.classCallCheck(this, MulticartModificationModalComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartModificationModalComponent, [{
            key: "onPrimaryButtonClick",
            value: function onPrimaryButtonClick() {
                this.props.setShowSection("");
                this.props.closeAuthModal();
            }
        }, {
            key: "renderInfo",
            value: function renderInfo() {
                return /*#__PURE__*/ _react.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.processChangeContent || this.props.defaultText
                    }
                });
            }
        }, {
            key: "getPrimaryButtonText",
            value: function getPrimaryButtonText() {
                return this.props.descriptions.processChangeButtonText || this.props.defaultButtonText;
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.renderInfo()))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 large-offset-by-8"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.onPrimaryButtonClick.bind(this),
                    className: "u-w-100"
                }, this.getPrimaryButtonText()))));
            }
        }]);
        return MulticartModificationModalComponent;
    }(_react.Component);

    MulticartModificationModalComponent.defaultProps = {
        defaultText: "<span>Zweryfikowaliśmy Twoje dane odnośnie posiadania lini telefonicznej (telefon domowy) Pod wskazanym adresem do instalacji usługi. W ramach posiadanej lini zostanie odliczona opłata za utrzymanie łącza w wysokości 10 zł/mies. na kwotę abonamentu za usługę. Zaktualizowane ceny możesz zobaczyć w sekci <b>Podsumowanie opłat</b> przechodząc na krok <b>Dostawa i Płatność</b><br/></span>",
        defaultButtonText: "Kontynuuj zamówienie"
    };
    var _default = MulticartModificationModalComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartModificationModalComponent.js.map