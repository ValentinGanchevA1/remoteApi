define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

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

    var ProductCartProductRecensionComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductCartProductRecensionComponent, _React$Component);

        var _super = _createSuper(ProductCartProductRecensionComponent);

        function ProductCartProductRecensionComponent(props) {
            babelHelpers.classCallCheck(this, ProductCartProductRecensionComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductCartProductRecensionComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                console.log("opinion section - mounting component");
            }
        }, {
            key: "_formatDate",
            value: function _formatDate(date) {
                return date.toLocaleString();
            }
        }, {
            key: "render",
            value: function render() {
                return this.props.reviews.length > 0 ? /*#__PURE__*/ _react.default.createElement("div", null, this._renderBody()) : null;
            }
        }, {
            key: "_renderBody",
            value: function _renderBody() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-cart-product-opinion-section"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l u-small-no-spacing-bottom"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h4 u-small-spacing-m"
                }, "Oceny i recenzje klient\xF3w Orange:"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-large-hide u-medium-hide"
                }))), /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "u-medium-spacing-xl"
                }, this._renderOpinions()));
            }
        }, {
            key: "_renderOpinions",
            value: function _renderOpinions() {
                return this.props.reviews.map(function(review, index) {
                    return /*#__PURE__*/ _react.default.createElement("li", {
                        key: index,
                        className: "l-row u-spacing-xl"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-small-spacing"
                    }, /*#__PURE__*/ _react.default.createElement("p", {
                        className: "g-gray4-c"
                    }, review.alias, ", ", review.dateString), /*#__PURE__*/ _react.default.createElement("div", {
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
                            width: review.percentageRating
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
                        className: "l-col l-col-small-12 l-col-medium-9 l-col-10 "
                    }, /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-spacing"
                    }, review.comment)));
                }, this);
            }
        }]);
        return ProductCartProductRecensionComponent;
    }(_react.default.Component);

    _exports.default = ProductCartProductRecensionComponent;
});
//# sourceMappingURL=ProductCartProductRecensionComponent.js.map