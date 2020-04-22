define(["exports", "react", "eshop/modules/fix/components/FixTvFilteredView", "eshop/modules/core/components/ui/Expander"], function(_exports, _react, _FixTvFilteredView, _Expander) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _FixTvFilteredView = babelHelpers.interopRequireDefault(_FixTvFilteredView);

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

    var FixTvFilteredExpander = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(FixTvFilteredExpander, _React$Component);

        var _super = _createSuper(FixTvFilteredExpander);

        function FixTvFilteredExpander() {
            babelHelpers.classCallCheck(this, FixTvFilteredExpander);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(FixTvFilteredExpander, [{
            key: "getSectionHeader",
            value: function getSectionHeader() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-l u-large-padding-l-xl  u-padding-left-xxl u-box-shadow--s u-small-padding-xl "
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    className: "js-expander__trigger__nested opl-section__expander-trigger u-inline-block  u-margin-left-l u-margin-right-l u-margin-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-xl u-padding-top-m u-padding-right-xl "
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide "
                }, /*#__PURE__*/ _react.default.createElement("h4", {
                    className: "u-padding-top-s"
                }, "Wyszukaj kana\u0142y lub pakiety telewizyjne")), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, /*#__PURE__*/ _react.default.createElement("h4", {
                    className: "u-padding-top-s"
                }, "Wyszukaj kana\u0142y lub pakiety telewizyjne")))));
            }
        }, {
            key: "render",
            value: function render() {
                if (!!this.props.tvPackages && this.props.tvPackages.length > 0) {
                    return /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                        header: this.getSectionHeader(),
                        contentClassName: "js-expander__container__nested",
                        headerClassName: " u-small-text-right opl-section--togglable u-margin-top",
                        className: "u-position-relative opl-section opl-section--togglable  u-no-margin u-no-padding-top ",
                        expanded: false
                    }, /*#__PURE__*/ _react.default.createElement(_FixTvFilteredView.default, {
                        tvPackages: this.props.tvPackages
                    }));
                }

                return null;
            }
        }]);
        return FixTvFilteredExpander;
    }(_react.default.Component);

    _exports.default = FixTvFilteredExpander;
});
//# sourceMappingURL=FixTvFilteredExpander.js.map