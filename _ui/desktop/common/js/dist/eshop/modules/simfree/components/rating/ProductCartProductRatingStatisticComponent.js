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

    var ProductCartProductRatingStatisticComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductCartProductRatingStatisticComponent, _React$Component);

        var _super = _createSuper(ProductCartProductRatingStatisticComponent);

        function ProductCartProductRatingStatisticComponent(props) {
            babelHelpers.classCallCheck(this, ProductCartProductRatingStatisticComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductCartProductRatingStatisticComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                console.log("statistic section - mounting component");
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "u-medium-spacing-xl"
                }, this._renderRatingStatistics());
            }
        }, {
            key: "_renderRatingStatistics",
            value: function _renderRatingStatistics() {
                return this.props.ratings.map(function(stats, index) {
                    return /*#__PURE__*/ _react.default.createElement("li", {
                        key: index,
                        className: "l-row u-spacing u-small-hide"
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
                            width: stats.percentageRating
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
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-11 l-col-9 "
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        title: stats.percentageNumberOfVotes,
                        className: "o-progress opl-progress opl-progress--availability availability--orange"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        style: {
                            width: stats.percentageNumberOfVotes
                        },
                        className: "o-progress__bar"
                    }))), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-1 l-col-3 "
                    }, /*#__PURE__*/ _react.default.createElement("h4", {
                        className: "opl-wiking-comments__value"
                    }, stats.percentageNumberOfVotes, " ", /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "oceniaj\u0105cych"))))));
                }, this);
            }
        }]);
        return ProductCartProductRatingStatisticComponent;
    }(_react.default.Component);

    _exports.default = ProductCartProductRatingStatisticComponent;
});
//# sourceMappingURL=ProductCartProductRatingStatisticComponent.js.map