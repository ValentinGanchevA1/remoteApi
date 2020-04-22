define(["exports", "react", "eshop/components/OraCommonComponents"], function(e, a, o) {
    "use strict";

    function r(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(n, e);
        var t = r(n);

        function n() {
            return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
        }
        return babelHelpers.createClass(n, [{
            key: "onPrimaryButtonClick",
            value: function() {
                this.props.setShowSection(""), this.props.closeAuthModal()
            }
        }, {
            key: "renderInfo",
            value: function() {
                return a.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.processChangeContent || this.props.defaultText
                    }
                })
            }
        }, {
            key: "getPrimaryButtonText",
            value: function() {
                return this.props.descriptions.processChangeButtonText || this.props.defaultButtonText
            }
        }, {
            key: "render",
            value: function() {
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "u-padding-all-m u-small-padding-s"
                }, a.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, a.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.renderInfo()))), a.default.createElement("div", {
                    className: "l-row"
                }, a.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 large-offset-by-8"
                }, a.default.createElement(o.OraButton, {
                    onClick: this.onPrimaryButtonClick.bind(this),
                    className: "u-w-100"
                }, this.getPrimaryButtonText()))))
            }
        }]), n
    }((a = babelHelpers.interopRequireWildcard(a)).Component);
    t.defaultProps = {
        defaultText: "<span>Zweryfikowaliśmy Twoje dane odnośnie posiadania lini telefonicznej (telefon domowy) Pod wskazanym adresem do instalacji usługi. W ramach posiadanej lini zostanie odliczona opłata za utrzymanie łącza w wysokości 10 zł/mies. na kwotę abonamentu za usługę. Zaktualizowane ceny możesz zobaczyć w sekci <b>Podsumowanie opłat</b> przechodząc na krok <b>Dostawa i Płatność</b><br/></span>",
        defaultButtonText: "Kontynuuj zamówienie"
    };
    var n = t;
    e.default = n
});
//# sourceMappingURL=MulticartModificationModalComponent.js.map