define(["exports", "react", "prop-types", "react-redux", "eshop/modules/simfree/components/rating/ProductCartProductRatingStatisticComponent", "eshop/modules/simfree/components/rating/ProductCartProductRecensionComponent", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors"], function(e, l, a, t, n, s, i, c) {
    "use strict";

    function o(l) {
        return function() {
            var e, a = babelHelpers.getPrototypeOf(l);
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
                var t = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(a, arguments, t)
            } else e = a.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), a = babelHelpers.interopRequireDefault(a), n = babelHelpers.interopRequireDefault(n), s = babelHelpers.interopRequireDefault(s);
    var r = function(e) {
        babelHelpers.inherits(t, e);
        var a = o(t);

        function t(e) {
            return babelHelpers.classCallCheck(this, t), a.call(this, e)
        }
        return babelHelpers.createClass(t, [{
            key: "componentDidMount",
            value: function() {
                this._loadModules()
            }
        }, {
            key: "showMobileReview",
            value: function() {
                $("#opl-rating-form").hasClass("u-small-hide") ? $("#opl-rating-form").removeClass("u-small-hide") : $("#opl-rating-form").addClass("u-small-hide")
            }
        }, {
            key: "handleSendClick",
            value: function() {
                0 < this.props.rating && this.props.login && this.props.message ? this.props.sendReview(this.props.deviceData.productId, this.props.rating, this.props.login, this.props.message) : this.props.setShowRatingErrorModal(!0)
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return l.default.createElement("div", {
                    className: "js-expander__container opl-wiking-expander__container"
                }, l.default.createElement("h2", {
                    id: "product-comments",
                    "data-skiplinks": "Opinie i recenzje",
                    className: "h2 u-padding-l u-small-no-padding-b u-small-padding-left-xl u-no-spacing"
                }, "Oceny i recenzje"), l.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger opl-wiking-expander__trigger"
                }, l.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--arrow-down-slim"
                }), l.default.createElement("span", {
                    className: "u-acc-hide"
                }, "rozwiń")), l.default.createElement("div", {
                    className: "js-expander__content opl-wiking-expander__content"
                }, l.default.createElement("div", {
                    className: "u-small-padding-top-m u-spacing-xl u-small-no-spacing"
                }, l.default.createElement("div", {
                    className: "opl-wiking-comments"
                }, l.default.createElement("div", {
                    className: "u-large-hide u-medium-hide"
                }, l.default.createElement("p", {
                    className: "h1 g-brand2-c u-inline-block u-spacing-right"
                }, this.props.deviceData.averageRatingCustomers), l.default.createElement("div", {
                    className: "opl-rating u-vertical-top"
                }, l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("div", {
                    style: {
                        width: this.props.deviceData.percentageRating
                    },
                    className: "opl-rating-bar"
                }, l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }))), l.default.createElement("button", {
                    className: "o-btn opl-btn opl-btn--secondary opl-btn--medium u-spacing-m u-w-100",
                    onClick: function() {
                        e.showMobileReview()
                    }
                }, "Dodaj swoją opinię")), l.default.createElement("div", {
                    id: "opl-rating-form",
                    className: "l-row u-small-hide"
                }, l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-6 "
                }, l.default.createElement("div", {
                    className: "l-row u-spacing-l"
                }, l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-4 "
                }, l.default.createElement("div", {
                    className: "opl-rating"
                }, l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("div", {
                    style: {
                        width: this.props.deviceData.percentageRating
                    },
                    className: "opl-rating-bar"
                }, l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                })))), l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-9 l-col-8 "
                }, l.default.createElement("h3", {
                    className: "h4 u-inline-block"
                }, "Średnia ocena"), " ", l.default.createElement("p", {
                    className: "h2 g-brand2-c u-inline-block"
                }, this.props.deviceData.averageRatingCustomers), " ", l.default.createElement("p", {
                    className: "small g-gray4-c u-padding-left-s u-inline-block",
                    title: "Liczba opini: " + this.props.deviceData.numberOfReviewsCustomers
                }, "(", this.props.deviceData.numberOfReviewsCustomers, ")"))), l.default.createElement(n.default, {
                    ratings: this.props.deviceData.ratingStatistics
                })), this._renderRatingFormSection()), l.default.createElement("div", {
                    className: "o-separator u-spacing-xl u-madium-hide u-small-hide"
                }), l.default.createElement(s.default, {
                    reviews: this.props.deviceData.reviews
                })))))
            }
        }, {
            key: "_renderRatingFormSection",
            value: function() {
                var e;
                return e = this.props.reviewSend ? this._renderRatingSuccessFormSend() : "" === this.props.reviewSend ? this._renderRatingForm() : this._renderRatingErrorFormSend(), l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-9 l-col-6  medium-offset-by-3"
                }, e)
            }
        }, {
            key: "_renderRatingForm",
            value: function() {
                var a = this;
                return l.default.createElement("div", {
                    className: "l-row u-spacing-xl"
                }, l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-10 l-col-12 "
                }, l.default.createElement("div", {
                    className: "u-spacing-l"
                }, l.default.createElement("h3", {
                    className: "h4 u-inline-block u-padding-right-xl"
                }, "Dodaj swoją opinię"), l.default.createElement("fieldset", {
                    id: "product-cart-opl-rating",
                    "data-js-module": "common/modules/opl-rating",
                    className: "u-inline-block opl-rating opl-rating--clickable"
                }, l.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, l.default.createElement("input", {
                    type: "radio",
                    name: "rating",
                    onClick: this.props.setRating.bind(this, 1)
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "o-ci-label u-acc-hide"
                }, "Ocena 1")), l.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, l.default.createElement("input", {
                    type: "radio",
                    name: "rating",
                    onClick: this.props.setRating.bind(this, 2)
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "o-ci-label u-acc-hide"
                }, "Ocena 2")), l.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, l.default.createElement("input", {
                    type: "radio",
                    name: "rating",
                    onClick: this.props.setRating.bind(this, 3)
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "o-ci-label u-acc-hide"
                }, "Ocena 3")), l.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, l.default.createElement("input", {
                    type: "radio",
                    name: "rating",
                    onClick: this.props.setRating.bind(this, 4)
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "o-ci-label u-acc-hide"
                }, "Ocena 4")), l.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, l.default.createElement("input", {
                    type: "radio",
                    name: "rating",
                    onClick: this.props.setRating.bind(this, 5)
                }), l.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), l.default.createElement("span", {
                    className: "o-ci-label u-acc-hide"
                }, "Ocena 5")))), l.default.createElement("input", {
                    type: "text",
                    placeholder: "Nick lub imię",
                    className: "u-spacing opl-input--size-m",
                    onChange: function(e) {
                        a.props.setLogin(e.target.value)
                    }
                }), l.default.createElement("textarea", {
                    className: "u-spacing-l",
                    placeholder: "Opinia o produkcie",
                    onChange: function(e) {
                        a.props.setMessage(e.target.value)
                    }
                }), l.default.createElement("div", {
                    className: "l-row u-spacing-xl"
                }, l.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-4 l-col-4 medium-offset-by-8 large-offset-by-8"
                }, l.default.createElement("button", {
                    className: "o-btn opl-btn opl-btn--secondary opl-btn--medium u-w-100",
                    onClick: function() {
                        return a.handleSendClick()
                    }
                }, "Wyślij")))))
            }
        }, {
            key: "_renderRatingSuccessFormSend",
            value: function() {
                return l.default.createElement("div", {
                    className: "l-row u-spacing-xl"
                }, l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-10 l-col-12 "
                }, l.default.createElement("div", {
                    className: "u-spacing-l"
                }, l.default.createElement("p", {
                    className: "h1 u-inline-block text-center xl"
                }, "Dziękujemy!!!")), l.default.createElement("div", {
                    className: "u-spacing-l"
                }, l.default.createElement("p", {
                    className: "h4 u-inline-block text-center xl"
                }, "Dziękujemy za wyrażenie opinii. Zostanie ona wyświetlona po weryfikacji przez moderatora."), l.default.createElement("p", {
                    className: "h4 u-inline-block text-center xl"
                }, "Zapraszamy do ponownego dzielenia się wrażeniami odnośnie użytkowanego sprzętu."))))
            }
        }, {
            key: "_renderRatingErrorFormSend",
            value: function() {
                return l.default.createElement("div", {
                    className: "l-row u-spacing-xl"
                }, l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-10 l-col-12 "
                }, l.default.createElement("div", {
                    className: "u-spacing-l"
                }, l.default.createElement("p", {
                    className: "h1 u-inline-block text-center xl"
                }, "Uuups!!!")), l.default.createElement("div", {
                    className: "u-spacing-l"
                }, l.default.createElement("p", {
                    className: "h4 u-inline-block text-center xl"
                }, "Wystąpił nieoczekiwany błąd."), l.default.createElement("p", {
                    className: "h4 u-inline-block text-center xl"
                }, "Prosimy spróbować ponownie później."))))
            }
        }, {
            key: "_loadModules",
            value: function() {
                OPL.UI.loadModules(document.getElementById("product-cart-opl-rating"), [{
                    path: "common/modules/opl-rating"
                }])
            }
        }]), t
    }(l.default.Component);
    r.propTypes = {
        deviceData: a.default.oneOfType([a.default.string, a.default.object]).isRequired
    };
    var u = (0, t.connect)(function(e) {
        return {
            rating: (0, c.getRating)(e),
            message: (0, c.getMessage)(e),
            login: (0, c.getLogin)(e),
            reviewSend: (0, c.getReviewSend)(e)
        }
    }, function(n) {
        return {
            setRating: function(e) {
                return n((0, i.setRating)(e))
            },
            setLogin: function(e) {
                return n((0, i.setLogin)(e))
            },
            setMessage: function(e) {
                return n((0, i.setMessage)(e))
            },
            sendReview: function(e, a, t, l) {
                return n((0, i.sendReview)(e, a, t, l))
            },
            setShowRatingErrorModal: function(e) {
                return n((0, i.setShowRatingErrorModal)(e))
            }
        }
    })(r);
    e.default = u
});
//# sourceMappingURL=ProductCartProductReviewComponent.js.map