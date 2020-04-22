define(["exports", "react", "lodash"], function(_exports, _react, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);

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

    var SimCartIndexHeader = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SimCartIndexHeader, _Component);

        var _super = _createSuper(SimCartIndexHeader);

        function SimCartIndexHeader(props) {
            babelHelpers.classCallCheck(this, SimCartIndexHeader);
            return _super.call(this, props);
        }

        babelHelpers.createClass(SimCartIndexHeader, [{
            key: "getText",
            value: function getText(inx) {
                switch (inx) {
                    case 0:
                        return "Pierwsza";

                    case 1:
                        return "Druga";

                    case 2:
                        return "Trzecia";

                    case 3:
                        return "Czwarta";

                    case 4:
                        return "Piąta";

                    case 5:
                        return "Szósta";

                    case 6:
                        return "Siódma";

                    case 7:
                        return "Ósma";

                    case 8:
                        return "Dziewiąta";

                    case 9:
                        return "Dziesiąta";

                    case 10:
                        return "Jedenasta";

                    case 11:
                        return "Dwunasta";

                    case 12:
                        return "Trzynasta";

                    case 13:
                        return "Czternasta";

                    case 14:
                        return "Piętnasta";

                    case 15:
                        return "Szesnasta";

                    case 16:
                        return "Siedemnasta";

                    case 17:
                        return "Osiemnasta";

                    case 18:
                        return "Dziewiętnasta";

                    case 19:
                        return "Dwudziesta";

                    case 29:
                        return "Trzydziesta";

                    case 39:
                        return "Czterdziesta";

                    case 49:
                        return "Pięćdziesiąta";

                    case 59:
                        return "Sześćdziesiąta";

                    case 69:
                        return "Siedemdziesiąta";

                    case 79:
                        return "Osiemdziesiąta";

                    case 89:
                        return "Dziewięćdziesiąta";

                    default:
                        return null;
                }
            }
        }, {
            key: "index2Text",
            value: function index2Text(inx) {
                if (inx < 20 || inx % 10 === 9) {
                    return this.getText(inx);
                } else {
                    var rest = inx % 10;
                    return this.getText(inx - rest - 1) + ' ' + _lodash.default.lowerFirst(this.getText(rest));
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3 " + this.props.className
                }, this.index2Text(this.props.simIndex), " karta");
            }
        }]);
        return SimCartIndexHeader;
    }(_react.Component);

    _exports.default = SimCartIndexHeader;
});
//# sourceMappingURL=SimCartIndexHeader.js.map