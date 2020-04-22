define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.Optional = void 0;

    var Optional = /*#__PURE__*/ function() {
        babelHelpers.createClass(Optional, null, [{
            key: "of",
            value: function of (value) {
                return new Optional(value);
            }
        }]);

        function Optional(value) {
            babelHelpers.classCallCheck(this, Optional);
            this.value = value;
        }

        babelHelpers.createClass(Optional, [{
            key: "ifPresent",
            value: function ifPresent(actionOn) {
                if (this.isPresent()) {
                    actionOn(this.value);
                }

                return this;
            }
        }, {
            key: "isPresent",
            value: function isPresent() {
                return !!this.value;
            }
        }, {
            key: "orElse",
            value: function orElse(action) {
                if (!this.isPresent()) {
                    action();
                }
            }
        }, {
            key: "get",
            value: function get() {
                return this.value;
            }
        }]);
        return Optional;
    }();

    _exports.Optional = Optional;
});
//# sourceMappingURL=optional.js.map