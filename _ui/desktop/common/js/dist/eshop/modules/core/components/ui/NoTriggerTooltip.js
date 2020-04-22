define(["exports", "react", "prop-types", "./Portal", "eshop/modules/core/utils/ui"], function(_exports, _react, _propTypes, _Portal, _ui) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _Portal = babelHelpers.interopRequireDefault(_Portal);

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

    var noTriggerTooltipId = 0;

    var OraTooltip = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraTooltip, _Component);

        var _super = _createSuper(OraTooltip);

        function OraTooltip(props) {
            babelHelpers.classCallCheck(this, OraTooltip);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraTooltip, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                var id = this.props.id ? this.props.id : noTriggerTooltipId++;
                this.tooltipId = "react-tooltip-" + id;
                this.triggerId = "react-tooltip-" + id + "-trigger";
                this.contentClass = "react-tooltip-" + id + "-content";
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadModule();
            }
        }, {
            key: "loadModule",
            value: function loadModule() {
                var maxWidth = this.props.maxWidth ? this.props.maxWidth : 200; //Workaround dla NOR-111573. Tymczasowa poprawka, odkomentowane zostanie po poprawkach zespolu UI

                /*OPL.UI.loadModules(document.getElementById("tooltip-container-"+this.tooltipId),[
                        {
                            path:"core/modules/tooltips",
                            options:
                            {
                                triggerSelector: '.o-tooltip__trigger',
                                contentSelector: '.o-tooltip__content',
                                maxWidth:maxWidth,
                                triggerEvent: 'mouseover'
                            }
                        }
                      ]);*/
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                OPL.UI.stopModules(this.ref);
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "tooltip-container_" + this.tooltipId,
                    className: this.props.className
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "tooltip-container-" + this.tooltipId,
                    ref: function ref(_ref) {
                        return _this.ref = _ref;
                    },
                    className: "u-inline"
                }, this.props.children, /*#__PURE__*/ _react.default.createElement(_Portal.default, {
                    portalId: this.tooltipId,
                    portalClassName: "u-hide--soft o-tooltip__content " + this.contentClass,
                    role: "tooltip",
                    getDestinationNode: function getDestinationNode() {
                        return document.getElementsByClassName(_this.contentClass)[0];
                    }
                }, this.props.tooltipContent)));
            }
        }]);
        return OraTooltip;
    }(_react.Component);

    OraTooltip.propTypes = {
        open: _propTypes.default.bool
    };
    OraTooltip.defaultProps = {};
    var _default = OraTooltip;
    _exports.default = _default;
});
//# sourceMappingURL=NoTriggerTooltip.js.map