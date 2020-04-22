define(["exports", "react", "prop-types", "eshop/components/OraFloatingLabelSelect"], function(e, r, t, i) {
    "use strict";

    function n(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = function(e) {
        babelHelpers.inherits(s, e);
        var t = n(s);

        function s(e) {
            return babelHelpers.classCallCheck(this, s), t.call(this, e)
        }
        return babelHelpers.createClass(s, [{
            key: "componentDidMount",
            value: function() {
                this.props.fetch && this.props.fetchSimCards()
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                e.fetch && !this.props.fetch && this.props.fetchSimCards()
            }
        }, {
            key: "setSimCard",
            value: function(t) {
                this.props.changeSimCard(this.props.simCards.find(function(e) {
                    return e.id === t.value
                }))
            }
        }, {
            key: "defaultSimList",
            value: function() {
                return [{
                    description: "Bez wymiany karty SIM",
                    businessDescription: null,
                    id: "",
                    isDefault: null,
                    stockLevel: 9999
                }]
            }
        }, {
            key: "getBusinessDescription",
            value: function() {
                var t = this,
                    e = this.props.simCards.find(function(e) {
                        return e.id === t.props.simCard.id
                    });
                return e ? e.businessDescription : null
            }
        }, {
            key: "render",
            value: function() {
                var e = "POS" === this.props.channel || "AKA" === this.props.channel ? this.defaultSimList() : this.props.simCards,
                    t = this.getBusinessDescription.apply(this);
                return r.default.createElement("div", {
                    className: "l-row"
                }, r.default.createElement("div", {
                    className: "u-margin-top-s l-col"
                }, r.default.createElement("h3", {
                    className: "h4 u-margin-l"
                }, "Twoja karta"), r.default.createElement("div", {
                    className: "l-row"
                }, r.default.createElement("div", {
                    className: "l-col l-col-6 l-col-small-12 l-col-medium-6  u-spacing-l"
                }, r.default.createElement(i.OraFloatingLabelSelect, {
                    id: "simCardListSelectFloating",
                    options: e.map(function(e) {
                        return {
                            value: e.id,
                            description: e.description
                        }
                    }),
                    onChange: this.setSimCard.bind(this),
                    selected: this.props.simCard.id,
                    disabled: 1 === e.length,
                    className: "opl-input--size-m g-grey-bg",
                    singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                    label: "Wybierz rodzaj karty SIM",
                    isPrimary: !1
                }))), t && r.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })))
            }
        }]), s
    }((r = babelHelpers.interopRequireWildcard(r)).Component);
    s.defaultProps = {
        simCards: [],
        fetch: !0
    }, s.propTypes = {
        simCard: t.PropTypes.shape({
            isDefault: t.PropTypes.bool,
            description: t.PropTypes.string,
            id: t.PropTypes.string,
            stockLevel: t.PropTypes.number
        }),
        simCards: t.PropTypes.arrayOf(t.PropTypes.shape({
            isDefault: t.PropTypes.bool,
            description: t.PropTypes.string,
            id: t.PropTypes.string,
            stockLevel: t.PropTypes.number
        })),
        fetchSimCards: t.PropTypes.func,
        changeSimCard: t.PropTypes.func,
        fetch: t.PropTypes.bool,
        channel: t.PropTypes.string
    };
    var l = s;
    e.default = l
});
//# sourceMappingURL=SimCardPickerComponent.js.map