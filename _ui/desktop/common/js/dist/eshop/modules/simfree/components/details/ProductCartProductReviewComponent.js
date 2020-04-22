define(["exports", "react", "prop-types", "react-redux", "eshop/modules/simfree/components/rating/ProductCartProductRatingStatisticComponent", "eshop/modules/simfree/components/rating/ProductCartProductRecensionComponent", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors"], function(_exports, _react, _propTypes, _reactRedux, _ProductCartProductRatingStatisticComponent, _ProductCartProductRecensionComponent, _app, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _ProductCartProductRatingStatisticComponent = babelHelpers.interopRequireDefault(_ProductCartProductRatingStatisticComponent);
    _ProductCartProductRecensionComponent = babelHelpers.interopRequireDefault(_ProductCartProductRecensionComponent);

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

    var ProductCartProductReviewComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductCartProductReviewComponent, _React$Component);

        var _super = _createSuper(ProductCartProductReviewComponent);

        function ProductCartProductReviewComponent(props) {
            babelHelpers.classCallCheck(this, ProductCartProductReviewComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductCartProductReviewComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this._loadModules();
            }
        }, {
            key: "showMobileReview",
            value: function showMobileReview() {
                if ($('#opl-rating-form').hasClass("u-small-hide")) {
                    $('#opl-rating-form').removeClass("u-small-hide");
                } else {
                    $('#opl-rating-form').addClass("u-small-hide");
                }
            }
        }, {
            key: "handleSendClick",
            value: function handleSendClick() {
                if (this.props.rating > 0 && this.props.login && this.props.message) {
                    this.props.sendReview(this.props.deviceData.productId, this.props.rating, this.props.login, this.props.message);
                } else {
                    this.props.setShowRatingErrorModal(true);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-expander__container opl-wiking-expander__container"
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    id: 'product-comments',
                    "data-skiplinks": 'Opinie i recenzje',
                    className: "h2 u-padding-l u-small-no-padding-b u-small-padding-left-xl u-no-spacing"
                }, "Oceny i recenzje"), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger opl-wiking-expander__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--arrow-down-slim"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "rozwi\u0144")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-expander__content opl-wiking-expander__content"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-padding-top-m u-spacing-xl u-small-no-spacing"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-wiking-comments"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-large-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h1 g-brand2-c u-inline-block u-spacing-right"
                }, this.props.deviceData.averageRatingCustomers), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-rating u-vertical-top"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    style: {
                        width: this.props.deviceData.percentageRating
                    },
                    className: "opl-rating-bar"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }))), /*#__PURE__*/ _react.default.createElement("button", {
                    className: "o-btn opl-btn opl-btn--secondary opl-btn--medium u-spacing-m u-w-100",
                    onClick: function onClick(e) {
                        _this.showMobileReview();
                    }
                }, "Dodaj swoj\u0105 opini\u0119")), /*#__PURE__*/ _react.default.createElement("div", {
                    id: 'opl-rating-form',
                    className: "l-row u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-rating"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    style: {
                        width: this.props.deviceData.percentageRating
                    },
                    className: "opl-rating-bar"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-9 l-col-8 "
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h4 u-inline-block"
                }, "\u015Arednia ocena"), "\xA0", /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h2 g-brand2-c u-inline-block"
                }, this.props.deviceData.averageRatingCustomers), "\xA0", /*#__PURE__*/ _react.default.createElement("p", {
                    className: "small g-gray4-c u-padding-left-s u-inline-block",
                    title: 'Liczba opini: ' + this.props.deviceData.numberOfReviewsCustomers
                }, "(", this.props.deviceData.numberOfReviewsCustomers, ")"))), /*#__PURE__*/ _react.default.createElement(_ProductCartProductRatingStatisticComponent.default, {
                    ratings: this.props.deviceData.ratingStatistics
                })), this._renderRatingFormSection()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-spacing-xl u-madium-hide u-small-hide"
                }), /*#__PURE__*/ _react.default.createElement(_ProductCartProductRecensionComponent.default, {
                    reviews: this.props.deviceData.reviews
                })))));
            }
        }, {
            key: "_renderRatingFormSection",
            value: function _renderRatingFormSection() {
                var content;

                if (this.props.reviewSend) {
                    content = this._renderRatingSuccessFormSend();
                } else if (this.props.reviewSend === "") {
                    content = this._renderRatingForm();
                } else {
                    content = this._renderRatingErrorFormSend();
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-9 l-col-6  medium-offset-by-3"
                }, content);
            }
        }, {
            key: "_renderRatingForm",
            value: function _renderRatingForm() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-10 l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h4 u-inline-block u-padding-right-xl"
                }, "Dodaj swoj\u0105 opini\u0119"), /*#__PURE__*/ _react.default.createElement("fieldset", {
                    id: 'product-cart-opl-rating',
                    "data-js-module": 'common/modules/opl-rating',
                    className: "u-inline-block opl-rating opl-rating--clickable"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    name: 'rating',
                    onClick: this.props.setRating.bind(this, 1)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label u-acc-hide"
                }, "Ocena 1")), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    name: 'rating',
                    onClick: this.props.setRating.bind(this, 2)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label u-acc-hide"
                }, "Ocena 2")), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    name: 'rating',
                    onClick: this.props.setRating.bind(this, 3)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label u-acc-hide"
                }, "Ocena 3")), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    name: 'rating',
                    onClick: this.props.setRating.bind(this, 4)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label u-acc-hide"
                }, "Ocena 4")), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    name: 'rating',
                    onClick: this.props.setRating.bind(this, 5)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label u-acc-hide"
                }, "Ocena 5")))), /*#__PURE__*/ _react.default.createElement("input", {
                    type: "text",
                    placeholder: 'Nick lub imię',
                    className: "u-spacing opl-input--size-m",
                    onChange: function onChange(event) {
                        _this2.props.setLogin(event.target.value);
                    }
                }), /*#__PURE__*/ _react.default.createElement("textarea", {
                    className: "u-spacing-l",
                    placeholder: 'Opinia o produkcie',
                    onChange: function onChange(event) {
                        _this2.props.setMessage(event.target.value);
                    }
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-4 l-col-4 medium-offset-by-8 large-offset-by-8"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "o-btn opl-btn opl-btn--secondary opl-btn--medium u-w-100",
                    onClick: function onClick() {
                        return _this2.handleSendClick();
                    }
                }, "Wy\u015Blij")))));
            }
        }, {
            key: "_renderRatingSuccessFormSend",
            value: function _renderRatingSuccessFormSend() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-10 l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h1 u-inline-block text-center xl"
                }, "Dzi\u0119kujemy!!!")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-inline-block text-center xl"
                }, "Dzi\u0119kujemy za wyra\u017Cenie opinii. Zostanie ona wy\u015Bwietlona po weryfikacji przez moderatora."), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-inline-block text-center xl"
                }, "Zapraszamy do ponownego dzielenia si\u0119 wra\u017Ceniami odno\u015Bnie u\u017Cytkowanego sprz\u0119tu."))));
            }
        }, {
            key: "_renderRatingErrorFormSend",
            value: function _renderRatingErrorFormSend() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-10 l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h1 u-inline-block text-center xl"
                }, "Uuups!!!")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-inline-block text-center xl"
                }, "Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d."), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-inline-block text-center xl"
                }, "Prosimy spr\xF3bowa\u0107 ponownie p\xF3\u017Aniej."))));
            }
        }, {
            key: "_loadModules",
            value: function _loadModules() {
                OPL.UI.loadModules(document.getElementById("product-cart-opl-rating"), [{
                    path: 'common/modules/opl-rating'
                }]);
            }
        }]);
        return ProductCartProductReviewComponent;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            rating: (0, _selectors.getRating)(state),
            message: (0, _selectors.getMessage)(state),
            login: (0, _selectors.getLogin)(state),
            reviewSend: (0, _selectors.getReviewSend)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setRating: function setRating(rating) {
                return dispatch((0, _app.setRating)(rating));
            },
            setLogin: function setLogin(login) {
                return dispatch((0, _app.setLogin)(login));
            },
            setMessage: function setMessage(message) {
                return dispatch((0, _app.setMessage)(message));
            },
            sendReview: function sendReview(productCode, rating, login, message) {
                return dispatch((0, _app.sendReview)(productCode, rating, login, message));
            },
            setShowRatingErrorModal: function setShowRatingErrorModal(showRatingErrorModal) {
                return dispatch((0, _app.setShowRatingErrorModal)(showRatingErrorModal));
            }
        };
    };

    ProductCartProductReviewComponent.propTypes = {
        deviceData: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductCartProductReviewComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductCartProductReviewComponent.js.map