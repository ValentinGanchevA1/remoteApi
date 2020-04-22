define(["exports", "react", "react-redux", "prop-types", "eshop/components/OraCommonComponents", "../../core/utils/ui"], function(_exports, _react, _reactRedux, _propTypes, _OraCommonComponents, _ui) {
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

    var AddComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddComponent, _Component);

        var _super = _createSuper(AddComponent);

        function AddComponent(props) {
            babelHelpers.classCallCheck(this, AddComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(AddComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.initTooltip();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.initTooltip();
            }
        }, {
            key: "initTooltip",
            value: function initTooltip() {
                if (getDescription('tooltipContent', this.props) && this.tooltipWrapperRef) {
                    (0, _ui.loadModule)(this.tooltipWrapperRef, {
                        path: "core/modules/tooltips",
                        options: {
                            maxWidth: '320',
                            side: 'top',
                            trigger: 'hover'
                        }
                    });
                }
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate(nextProps, nextState) {
                if (getDescription('tooltipContent', this.props) && this.tooltipWrapperRef) {
                    OPL.UI.stopModules(this.tooltipWrapperRef);
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (getDescription('tooltipContent', this.props)) {
                    OPL.UI.stopModules(this.tooltipWrapperRef);
                }
            }
        }, {
            key: "onAddClick",
            value: function onAddClick() {
                this.props.onAddClick();
            }
        }, {
            key: "getRootViewContent",
            value: function getRootViewContent() {
                var _this = this;

                var tooltipContent = getDescription("tooltipContent", this.props);
                var icon = getDescription("addRowIcon", this.props);
                return [ /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide",
                    key: "addBtnTextKey"
                }, getDescription("addBtnText", this.props)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l g-white1-bg u-box-shadow--s u-box-shadow-hover",
                    key: "addBtnContentKey"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", {
                    ref: function ref(_ref) {
                        return _this.tooltipWrapperRef = _ref;
                    }
                }, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "opl-checkout__icon__cell"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--only " + icon
                })), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-l u-padding-l u-padding-right-l u-font-bold u-small-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("div", null, getDescription("label", this.props), tooltipContent && [ /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: function onClick(e) {
                        return e.preventDefault();
                    },
                    key: "tooltipLink_" + this.props.tooltipId,
                    "aria-describedby": this.props.tooltipId,
                    className: "o-tooltip__trigger u-padding-left-s tooltipstered"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, getDescription("tooltipBtnText", this.props))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-tooltip__content",
                    id: this.props.tooltipId,
                    role: "tooltip",
                    key: "tooltipContent_" + this.props.tooltipId
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-margin"
                }, tooltipContent))]), this.props.children), this.props.showAddLink && /*#__PURE__*/ _react.default.createElement("td", {
                    className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-product-addlink u-right u-small-right"
                }))))))];
            }
        }, {
            key: "render",
            value: function render() {
                if (this.props.showAddLink) {
                    return /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#",
                        "aria-label": getDescription('addBtnText', this.props),
                        onClick: this.onAddClick.bind(this)
                    }, this.getRootViewContent());
                } else {
                    return /*#__PURE__*/ _react.default.createElement("div", null, this.getRootViewContent());
                }
            }
        }]);
        return AddComponent;
    }(_react.Component);

    _exports.default = AddComponent;
    AddComponent.propTypes = {
        label: _propTypes.default.string,
        tooltipId: _propTypes.default.string.isRequired,
        tooltipContent: _propTypes.default.string,
        tooltipBtnText: _propTypes.default.string,
        addBtnText: _propTypes.default.string,
        addRowIcon: _propTypes.default.string,
        showAddLink: _propTypes.default.bool
    };
    AddComponent.defaultProps = {
        label: "Posiadam",
        addBtnText: "Kliknij aby potwierdzić posiadanie",
        tooltipBtnText: "Otwórz podpowiedź",
        addRowIcon: "g-icon--voucher",
        showAddLink: true
    };

    function getDescription(descriptionName, props) {
        return props.descriptions[descriptionName] || props[descriptionName];
    }
});
//# sourceMappingURL=AddComponent.js.map