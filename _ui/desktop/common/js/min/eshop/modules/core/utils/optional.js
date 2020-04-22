define(["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Optional = void 0;
    var t = function() {
        function t(e) {
            babelHelpers.classCallCheck(this, t), this.value = e
        }
        return babelHelpers.createClass(t, null, [{
            key: "of",
            value: function(e) {
                return new t(e)
            }
        }]), babelHelpers.createClass(t, [{
            key: "ifPresent",
            value: function(e) {
                return this.isPresent() && e(this.value), this
            }
        }, {
            key: "isPresent",
            value: function() {
                return !!this.value
            }
        }, {
            key: "orElse",
            value: function(e) {
                this.isPresent() || e()
            }
        }, {
            key: "get",
            value: function() {
                return this.value
            }
        }]), t
    }();
    e.Optional = t
});
//# sourceMappingURL=optional.js.map