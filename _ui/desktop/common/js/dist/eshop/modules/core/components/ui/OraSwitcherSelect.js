define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/OraSwitcher"], function(_exports, _react, _propTypes, _OraSwitcher) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OraSwitcher = babelHelpers.interopRequireDefault(_OraSwitcher);

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

    var OraSwitcherSelect = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(OraSwitcherSelect, _React$Component);

        var _super = _createSuper(OraSwitcherSelect);

        function OraSwitcherSelect(props) {
            babelHelpers.classCallCheck(this, OraSwitcherSelect);
            return _super.call(this, props); // this.oraSwitcherClassLGroup = "l-group__element u-padding-m u-padding-right u-small-no-padding-bottom"
        }

        babelHelpers.createClass(OraSwitcherSelect, [{
            key: "handleClick",
            value: function handleClick(event) {
                var _event$currentTarget$ = event.currentTarget.dataset,
                    id = _event$currentTarget$.id,
                    value = _event$currentTarget$.value;
                this.props.onChange({
                    id: id,
                    value: value
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.ref) {
                    OPL.UI.loadModules(this.ref, this.oplLayoutFixerModule());
                    this.updateDimensions();
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.ref) {
                    OPL.UI.loadModules(this.ref, this.oplLayoutFixerModule());
                    this.updateDimensions();
                }
            }
        }, {
            key: "oplLayoutFixerModule",
            value: function oplLayoutFixerModule() {
                return {
                    path: "core/modules/layout-fixer",
                    options: {
                        selectors: [".js-layout-fixer-group-switcher-select" + this.props.id]
                    }
                };
            }
        }, {
            key: "updateDimensions",
            value: function updateDimensions() {
                if (this.ref) OPL.UI.fire(OPL.UI.EVENTS.modules.layoutFixer.recalculate, this.ref);
            }
        }, {
            key: "options",
            value: function options() {
                var _this = this;

                // grid layout
                return this.props.options.map(function(option, index) {
                    return _this.switcher(option, index);
                });
            }
        }, {
            key: "isDisabled",
            value: function isDisabled(option) {
                console.log("isDisabled", this.props.disabledOptions && !!this.props.disabledOptions.find(function(opt) {
                    return opt.value == option.value;
                }));
                console.log(option);
                console.log(this.props.disabledOptions);
                if (this.props.disabledOptions && !!this.props.disabledOptions.find(function(opt) {
                        return opt.value == option.value;
                    })) return true;
                return false;
            }
        }, {
            key: "switcher",
            value: function switcher(option, index) {
                var oraSwitcherClass = "opl-flex-boxes__item";
                var switcherClassName = "u-position-relative u-margin-m u-large-no-margin";
                var disabled = this.isDisabled(option);
                return /*#__PURE__*/ _react.default.createElement(_OraSwitcher.default, {
                    key: this.props.id + "_" + option.value + "_" + index,
                    className: oraSwitcherClass,
                    dataId: this.props.id + option.value,
                    dataValue: option.value,
                    onChangeHandler: !disabled && this.handleClick.bind(this),
                    switcherClassName: "switcher " + switcherClassName,
                    isSelected: option.value === this.props.selected
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer",
                    "aria-hidden": "true"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__border"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__checkmark"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-white1-bg u-padding-all-l    u-text-center " + (disabled ? " " : " u-box-shadow--s  u-cursor-pointer")
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-layout-fixer-group-switcher-select" + this.props.id + "  u-display__flex-center"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element "
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 u-no-margin" + (disabled ? " g-gray3-c " : "")
                }, " ", option.description || option.value)))));
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                if (this.props.options === undefined || !this.props.options.length) return null;
                if (this.props.options.length === 1 && this.props.singleOptionRenderer) return this.props.singleOptionRenderer(this.props.options[0].description);

                if (this.props.options.length === 1 && this.props.renderSingleOption) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-padding-right-m  u-font-bold "
                    }, /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-no-margin "
                    }, this.props.options[0].description || this.props.options[0].value));
                }

                var ulClass = "opl-switcher-list opl-flex-boxes__container";
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-margin-s u-large-margin-l",
                    ref: function ref(_ref) {
                        return _this2.ref = _ref;
                    },
                    id: "switcher_select_" + this.props.id
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: ulClass
                }, this.options()));
            }
        }]);
        return OraSwitcherSelect;
    }(_react.default.Component);

    _exports.default = OraSwitcherSelect;
    OraSwitcherSelect.PropTypes = {
        renderSingleOption: _propTypes.default.bool
    };
    OraSwitcherSelect.defaultProps = {
        renderSingleOption: false
    };
});
//# sourceMappingURL=OraSwitcherSelect.js.map