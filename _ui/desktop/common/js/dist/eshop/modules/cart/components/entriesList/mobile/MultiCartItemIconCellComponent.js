define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var MultiCartItemIconCellComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MultiCartItemIconCellComponent, _Component);

        var _super = _createSuper(MultiCartItemIconCellComponent);

        function MultiCartItemIconCellComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, MultiCartItemIconCellComponent);
            _this = _super.call(this, props);
            _this.cellTypes = {
                ICON: 'opl-checkout__icon__cell',
                IMAGE: 'opl-checkout__image__cell'
            };
            _this.productIcons = {
                SIM: 'sim-3',
                VAS: 'funpack-2 g-icon--s',
                GADGET: 'gift'
            };
            return _this;
        }

        babelHelpers.createClass(MultiCartItemIconCellComponent, [{
            key: "render",
            value: function render() {
                var iconClass, cellType;

                if (['SIM', 'VAS', 'GADGET', 'DATA', 'BROADBAND', 'TV', 'MOBILE_VOICE', 'VOIP'].indexOf(this.props.entryType) !== -1) {
                    iconClass = this.props.icon || this.productIcons[this.props.entryType];
                    cellType = this.cellTypes.ICON;
                } else if (this.props.entryType === 'TERMINAL') {
                    cellType = this.cellTypes.IMAGE;
                }

                var verticalAlignClass = " u-vertical-top  u-padding-top-l";

                if (document.getElementById("ora-product-list-header-component")) {
                    //is LP
                    verticalAlignClass = " u-vertical-middle ";
                }

                return /*#__PURE__*/ _react.default.createElement("td", {
                    rowSpan: this.props.rowSpan || undefined,
                    className: cellType + (this.props.entryType !== 'VAS' ? verticalAlignClass : "")
                }, cellType === this.cellTypes.ICON && /*#__PURE__*/ _react.default.createElement("span", {
                    className: 'g-icon g-icon--only g-icon--' + iconClass,
                    "aria-hidden": "true"
                }), cellType === this.cellTypes.IMAGE && /*#__PURE__*/ _react.default.createElement("img", {
                    src: this.props.image,
                    className: "opl-checkout__image--phone",
                    alt: this.props.terminalName
                }));
            }
        }]);
        return MultiCartItemIconCellComponent;
    }(_react.Component);

    _exports.default = MultiCartItemIconCellComponent;
});
//# sourceMappingURL=MultiCartItemIconCellComponent.js.map