define(["exports", "react", "prop-types", "eshop/utils/OnlineUtils"], function(_exports, _react, _propTypes, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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
     * Renders an attribute box
     */
    var tooltipPlaceholder = "TOOLTIP-ID-PLACEHOLDER";

    var Attribute = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(Attribute, _React$Component);

        var _super = _createSuper(Attribute);

        function Attribute() {
            babelHelpers.classCallCheck(this, Attribute);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(Attribute, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (hasTooltip(this.props.value)) {
                    OPL.UI.loadModules(document.getElementById(this.tooltipId()), [{
                        path: 'core/modules/tooltips',
                        options: {
                            "mouseoverMinWidth": 0,
                            "triggerEvent": "mouseover"
                        }
                    }]);
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (hasTooltip(this.props.value)) {
                    OPL.UI.stopModules(this.refs.container);
                }
            }
        }, {
            key: "tooltipId",
            value: function tooltipId() {
                if (this.tooltipIdValue === undefined) this.tooltipIdValue = _OnlineUtils.default.generateUniqeHtmlId("featureTooltip_");
                return this.tooltipIdValue;
            }
        }, {
            key: "render",
            value: function render() {
                return renderMethods()[this.props.type](this.props, this.tooltipId.bind(this));
            }
        }]);
        return Attribute;
    }(_react.default.Component);

    _exports.default = Attribute;
    Attribute.propTypes = {
        type: _propTypes.default.string.isRequired,
        //static || bar
        value: _propTypes.default.string.isRequired,
        technicalValue: _propTypes.default.number,
        icon: _propTypes.default.string
    };

    function renderMethods() {
        return {
            static: renderStatic,
            bar: renderBar
        };
    }

    function renderBar(props) {
        var value = props.value;
        var technicalValue = props.technicalValue;
        var barDescription = props.config.dataBarDescription;
        var innerHtmlForValue = {
            __html: value
        };
        var innerHtmlForDescription = {
            __html: barDescription
        };

        var iconPart = /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-box__icon-list__icon"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-box__dataplan-badge opl-box__dataplan-badge--break-medium u-medium-vertical-middle",
            dangerouslySetInnerHTML: innerHtmlForValue
        }));

        var barPart = /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-box__icon-list__text"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            title: technicalValue + "%",
            className: "o-progress opl-progress u-spacing u-small-hide"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            style: {
                width: technicalValue + "%"
            },
            className: "o-progress__bar"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-acc-hide"
        }, technicalValue, "%"))), /*#__PURE__*/ _react.default.createElement("span", {
            dangerouslySetInnerHTML: innerHtmlForDescription
        }));

        return renderLi(props.box ? boxClass() : "", [iconPart, barPart], props.hide, props.border);
    }

    function boxClass() {
        return "opl-box__icon-list__item";
    }

    function tableClass() {
        return "u-table";
    }

    function renderStatic(props, tooltipId) {
        var icon = props.icon;
        var value = props.value;

        if (hasTooltip(value)) {
            value = value.replace(tooltipPlaceholder, tooltipId());
        }

        var li = valueAsLi(value);

        function liClass() {
            if (li) {
                return li.className;
            } else {
                var c = [props.box ? boxClass() : "", props.table ? tableClass() : ""];
                return c.join(" ");
            }
        }

        function renderLiWrapper(children) {
            return renderLi(liClass(), children, props.hide, props.border, props.fixer);
        }

        if (icon) {
            return renderLiWrapper([renderIcon(icon), renderHtml(value)]);
        } else if (li) {
            return renderLiWrapper([ /*#__PURE__*/ _react.default.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: li.value
                }
            })]);
        } else {
            return renderLiWrapper([ /*#__PURE__*/ _react.default.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: value
                }
            })]);
        }
    }

    function renderIcon(icon) {
        if (icon) {
            var icon_ = icon.toLowerCase().replace('_', '-');
            var istyle = "g-icon g-icon--" + icon_ + " g-icon--only u-medium-vertical-middle";
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "opl-box__icon-list__icon"
            }, /*#__PURE__*/ _react.default.createElement("span", {
                "aria-hidden": "true",
                className: istyle
            }));
        }
    } //value


    function valueAsLi(li) {
        var liElement = '<li';
        li = li.trim();

        if (!li.startsWith(liElement)) {
            return;
        } //class extraction


        var s0 = function s0(s) {
            return s.substring(0, s.indexOf('>'));
        };

        var s1 = function s1(s) {
            return s.substring(s.indexOf("class"));
        };

        var s2 = function s2(s) {
            return s.substring(s.indexOf('"') + 1);
        };

        var s3 = function s3(s) {
            return s.substring(0, s.indexOf('"'));
        }; //inner element


        var e0 = function e0(s) {
            return s.substring(s.indexOf('>') + 1);
        };

        var e1 = function e1(s) {
            return s.substring(0, s.lastIndexOf('<'));
        };

        return {
            className: [li].map(s0).map(s1).map(s2).map(s3)[0],
            value: [li].map(e0).map(e1)[0]
        };
    }

    function renderHtml(value) {
        var innerHtml = {
            __html: value
        };
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-box__icon-list__text",
            dangerouslySetInnerHTML: innerHtml
        });
    }

    function renderLi(classStr, children, hide, border, fixer) {
        function fixerWrapper(fixer, children) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "u-animate-height " + fixer
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: "js-height-sensitive-element"
            }, children));
        }

        var classes = classStr + (hide ? " u-hide" : "") + (border ? " u-border u-no-border-l u-no-border-r u-no-border-t" : "");
        var inside = null;

        if (fixer) {
            inside = fixerWrapper(fixer, children);
        } else {
            inside = children;
        }

        return /*#__PURE__*/ _react.default.createElement("li", {
            ref: "container",
            className: classes
        }, inside);
    }

    function hasTooltip(value) {
        return value.indexOf(tooltipPlaceholder) >= 0;
    }
});
//# sourceMappingURL=Attribute.js.map