define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
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

    /**
     * Replaces placeholders in cms descriptions (or any other string)
     *
     * @author Piotr Sokolowski, PwC IT Services
     */
    var CmsDescription = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CmsDescription, _Component);

        var _super = _createSuper(CmsDescription);

        function CmsDescription(props) {
            babelHelpers.classCallCheck(this, CmsDescription);
            return _super.call(this, props);
        }

        babelHelpers.createClass(CmsDescription, [{
            key: "render",
            value: function render() {
                if (!this.props.description) {
                    return null;
                }

                var description = this.props.description;
                this.props.params && this.props.params.map(function(param, i) {
                    description = description.replace(new RegExp("\\{" + i + "\\}", "g"), param);
                });
                return /*#__PURE__*/ _react.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: description
                    }
                });
            }
        }]);
        return CmsDescription;
    }(_react.Component);

    CmsDescription.propTypes = {
        // cms description ex. "<p>First param is {0}</p>, <div class="h4">second param is {1}</div>" <- html as string accepted
        description: _propTypes.default.string.isRequired,
        // array of params ex. ["param1", "<p>param2</p>"] <- html as string accepted
        params: _propTypes.default.arrayOf(_propTypes.default.string)
    };
    var _default = CmsDescription;
    _exports.default = _default;
});
//# sourceMappingURL=CmsDescription.js.map