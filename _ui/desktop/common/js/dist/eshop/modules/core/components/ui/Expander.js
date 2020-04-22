define(["exports", "react", "prop-types", "eshop/modules/core/utils/ui"], function(_exports, _react, _propTypes, _ui) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.Section = _exports.ConsentTrigger = _exports.Trigger = _exports.Toggle = _exports.Expander = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var _SECTION_CLASS_FOR_VA, _TOGGLE_CLASS_FOR_VAR, _TRIGGER_CLASS_FOR_VA, _CONTENT_CLASS_FOR_VA;

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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
     * Expander component.
     * Usage:
     * <Expander>
     *   <Section toggle="Section description">
     *     Section content
     *   </Section>
     *   <Section header={<div>Custom header <Toggle>with clickable Toggle element</Toggle></div>}>
     *     Another section
     *   </Section>
     * </Expander>
     *
     * The Expander element can contain any number of any React elements (components or html tags) along with any number of Section elements,
     * so the following structure is valid:
     * <Expander>
     *   <div>Header</div>
     *   <Section toggle="Section 1">Section content</Section>
     *   <div className="separator"/>
     *   <Section toggle="Section 2">Section content</Section>
     *   <div>Footer</div>
     * </Expander>
     *
     * Section elements will not work properly when used outside of an Expander element.
     *
     * A section needs to have either 'toggle' or 'header' prop specified:
     *  toggle - a React element or string that will be put in a section header as a section toggle
     *  header - a React element that will be used as a custom header; should contain a Toggle or Trigger element,
     *           which will be the only clickable element of the header
     *
     * The following structure is created using this component, corresponding to structure in UI examples:
     * <Expander>
     *   <Section>
     *     <Header>
     *       <Toggle|Trigger/>
     *     </Header>
     *     <Content/>
     *   <Section>
     * </Expander>
     *
     * Class names can be provided for different levels of the expander structure:
     *  Expander (container):
     *    <Expander className="...">
     *  Section:
     *    <Section className="...">
     *    <Expander sectionClassName="...">
     *  Header:
     *    <Section headerClassName="...">
     *    <Expander headerClassName="...">
     *  Toggle:
     *    <Toggle className="...">
     *    <Section toggleClassName="...">
     *    <Expander toggleClassName="...">
     *  Content:
     *    <Section contentClassName="...">
     *    <Expander contentClassName="...">
     *
     * Class name definitions on higher up elements are treated as defaults for its scope and can be overriden on the elements.
     * For example, sectionClassName on Expander element will be used for every section that doesn't have its own className.
     *
     * Expander
     *
     * Additional options: see opl-expander module, all options are passed from props
     * TODO:
     * - switch triggers
     * - radio label
     * - fix stopping and starting all modules inside (needs fixing in styleguide js API)
     **/
    // Dynamic expander classes enable nested expanders
    var getTriggerClassName = function getTriggerClassName(expanderId) {
        return expanderId + "__expander-trigger";
    };

    var getContentClassName = function getContentClassName(expanderId) {
        return expanderId + "__content";
    };

    var getParentClassName = function getParentClassName(expanderId) {
        return expanderId + "--togglable";
    };

    var getTriggerId = function getTriggerId(expanderId, sectionId) {
        return expanderId + "-section-" + sectionId + "-trigger";
    };

    var getContentId = function getContentId(expanderId, sectionId) {
        return expanderId + "-section-" + sectionId + "-content";
    }; // static id counters - manually declaring ids for react components is usually unnecessary


    window.expanderId = window.expanderId != undefined ? window.expanderId + 1 : 1;
    window.sectionId = window.sectionId != undefined ? window.sectionId + 1 : 1;
    var VARIANT_BASIC = "";
    var VARIANT_SECTION = "section";
    var VARIANT_SECTION_EXPANDER = "section_expander";
    var VARIANT_CONSOLE = "console";
    var VARIANT_ARROW = "arrow";

    var PropTypeExpanderVariant = _propTypes.default.oneOf([VARIANT_BASIC, VARIANT_SECTION, VARIANT_CONSOLE, VARIANT_SECTION_EXPANDER]); // expander variant base CSS class configuration


    var SECTION_CLASS_FOR_VARIANT = (_SECTION_CLASS_FOR_VA = {}, babelHelpers.defineProperty(_SECTION_CLASS_FOR_VA, VARIANT_BASIC, ""), babelHelpers.defineProperty(_SECTION_CLASS_FOR_VA, VARIANT_SECTION, "opl-section opl-section--togglable"), babelHelpers.defineProperty(_SECTION_CLASS_FOR_VA, VARIANT_SECTION_EXPANDER, "opl-section opl-section--expander"), babelHelpers.defineProperty(_SECTION_CLASS_FOR_VA, VARIANT_CONSOLE, "opl-console--togglable"), _SECTION_CLASS_FOR_VA);
    var TOGGLE_CLASS_FOR_VARIANT = (_TOGGLE_CLASS_FOR_VAR = {}, babelHelpers.defineProperty(_TOGGLE_CLASS_FOR_VAR, VARIANT_BASIC, ""), babelHelpers.defineProperty(_TOGGLE_CLASS_FOR_VAR, VARIANT_SECTION, "opl-section__heading"), babelHelpers.defineProperty(_TOGGLE_CLASS_FOR_VAR, VARIANT_SECTION_EXPANDER, "opl-section__heading"), babelHelpers.defineProperty(_TOGGLE_CLASS_FOR_VAR, VARIANT_CONSOLE, "opl-console__heading"), babelHelpers.defineProperty(_TOGGLE_CLASS_FOR_VAR, VARIANT_ARROW, ""), _TOGGLE_CLASS_FOR_VAR);
    var TRIGGER_CLASS_FOR_VARIANT = (_TRIGGER_CLASS_FOR_VA = {}, babelHelpers.defineProperty(_TRIGGER_CLASS_FOR_VA, VARIANT_BASIC, ""), babelHelpers.defineProperty(_TRIGGER_CLASS_FOR_VA, VARIANT_SECTION, "opl-section__expander-trigger"), babelHelpers.defineProperty(_TRIGGER_CLASS_FOR_VA, VARIANT_SECTION_EXPANDER, "opl-section__expander-trigger"), babelHelpers.defineProperty(_TRIGGER_CLASS_FOR_VA, VARIANT_CONSOLE, "opl-console__trigger"), _TRIGGER_CLASS_FOR_VA);
    var CONTENT_CLASS_FOR_VARIANT = (_CONTENT_CLASS_FOR_VA = {}, babelHelpers.defineProperty(_CONTENT_CLASS_FOR_VA, VARIANT_BASIC, "u-hide--soft"), babelHelpers.defineProperty(_CONTENT_CLASS_FOR_VA, VARIANT_SECTION, "opl-section__content"), babelHelpers.defineProperty(_CONTENT_CLASS_FOR_VA, VARIANT_SECTION_EXPANDER, "opl-section__content"), babelHelpers.defineProperty(_CONTENT_CLASS_FOR_VA, VARIANT_CONSOLE, "opl-console__content"), _CONTENT_CLASS_FOR_VA);

    var Expander = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(Expander, _Component);

        var _super = _createSuper(Expander);

        function Expander(props) {
            var _this;

            babelHelpers.classCallCheck(this, Expander);
            _this = _super.call(this, props);
            _this.id = props.id || "react-expander-" + window.expanderId++;
            _this.triggerSelector = "." + getTriggerClassName(_this.id);
            _this.contentSelector = "." + getContentClassName(_this.id);
            _this.parentClass = getParentClassName(_this.id);
            _this.newSections = 0;
            return _this;
        }

        babelHelpers.createClass(Expander, [{
            key: "newSectionCallback",
            value: function newSectionCallback() {
                this.newSections += 1;
            }
        }, {
            key: "getChildContext",
            value: function getChildContext() {
                return _objectSpread({
                    expanderId: this.id,
                    newSectionCallback: this.newSectionCallback.bind(this)
                }, (0, _ui.pickProps)(this.props, ["toggleClassName", "headerClassName", "summaryClassName", "sectionClassName", "contentClassName", "variant"]));
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.newSections > 0) {
                    OPL.UI.fire(OPL.UI.EVENTS.modules.expander.reinit, null, this.id);
                    this.newSections = 0;
                }
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadExpander();
            }
        }, {
            key: "loadExpander",
            value: function loadExpander() {
                var options = _objectSpread({
                    triggerSelector: this.triggerSelector,
                    contentSelector: this.contentSelector,
                    parentClass: this.parentClass
                }, (0, _ui.pickProps)(this.props, ["hideOtherElements", "scrollToSelected", "scrollToHash", "duration", "easing", "switchTrigger", "switchTriggerVal"]));

                this.expanderPromise = (0, _ui.loadModule)(this.expander, {
                    path: "common/modules/opl-expander",
                    options: options
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    ref: function ref(_ref) {
                        return _this2.expander = _ref;
                    },
                    className: this.props.className + " is-expanded",
                    id: this.id
                }, this.props.children);
            } // This is created as a workaround
            // TODO introduce a way to create "controlled" expanders that would enable passing 'open' flag and open/close/toggle handlers

        }, {
            key: "open",
            value: function open(sectionId) {
                var _this3 = this;

                this.expanderPromise.then(function() {
                    OPL.UI.fire(OPL.UI.EVENTS.modules.expander.open, getTriggerId(_this3.id, sectionId), _this3.id);
                });
            }
        }]);
        return Expander;
    }(_react.Component);

    _exports.Expander = Expander;
    Expander.propTypes = {
        id: _propTypes.default.string,
        variant: PropTypeExpanderVariant,
        className: _propTypes.default.string,
        sectionClassName: _propTypes.default.string,
        toggleClassName: _propTypes.default.string,
        headerClassName: _propTypes.default.string,
        contentClassName: _propTypes.default.string,
        hideOtherElements: _propTypes.default.bool,
        scrollToSelected: _propTypes.default.bool,
        scrollToHash: _propTypes.default.bool,
        duration: _propTypes.default.number,
        easing: _propTypes.default.string
    };
    Expander.defaultProps = {
        variant: VARIANT_BASIC
    };
    Expander.childContextTypes = {
        // used to wire triggers and sections
        expanderId: _propTypes.default.string,
        // default values for sections
        sectionClassName: _propTypes.default.string,
        toggleClassName: _propTypes.default.string,
        headerClassName: _propTypes.default.string,
        summaryClassName: _propTypes.default.string,
        contentClassName: _propTypes.default.string,
        // workaround to reset handlers for dynamically loaded sections
        newSectionCallback: _propTypes.default.func,
        variant: PropTypeExpanderVariant
    };

    var Toggle = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(Toggle, _Component2);

        var _super2 = _createSuper(Toggle);

        function Toggle() {
            babelHelpers.classCallCheck(this, Toggle);
            return _super2.apply(this, arguments);
        }

        babelHelpers.createClass(Toggle, [{
            key: "render",
            value: function render() {
                var toggleClassName = [TOGGLE_CLASS_FOR_VARIANT[this.props.variant || this.context.variant], this.props.className || this.context.toggleClassName || ""].join(" ");
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col-small-11 " + toggleClassName
                }, this.props.variant === "arrow" && this.props.header, /*#__PURE__*/ _react.default.createElement(Trigger, babelHelpers.extends({
                    className: this.props.triggerClassName
                }, this.props), this.props.children));
            }
        }]);
        return Toggle;
    }(_react.Component);

    _exports.Toggle = Toggle;
    Toggle.contextTypes = {
        toggleClassName: _propTypes.default.string,
        triggerClassName: _propTypes.default.string,
        variant: PropTypeExpanderVariant
    };

    var Trigger = /*#__PURE__*/ function(_Component3) {
        babelHelpers.inherits(Trigger, _Component3);

        var _super3 = _createSuper(Trigger);

        function Trigger() {
            babelHelpers.classCallCheck(this, Trigger);
            return _super3.apply(this, arguments);
        }

        babelHelpers.createClass(Trigger, [{
            key: "render",
            value: function render() {
                var triggerId = getTriggerId(this.context.expanderId, this.context.sectionId);
                var triggerClassName = [TRIGGER_CLASS_FOR_VARIANT[this.context.variant], getTriggerClassName(this.context.expanderId), this.props.className || ""].join(" ");
                return /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    id: triggerId,
                    className: triggerClassName + " " + !!this.props.expanded,
                    onClick: this.props.onClick,
                    "aria-expanded": !!this.props.expanded
                }, this.props.children);
            }
        }]);
        return Trigger;
    }(_react.Component);

    _exports.Trigger = Trigger;
    Trigger.contextTypes = {
        expanderId: _propTypes.default.string,
        sectionId: _propTypes.default.string,
        variant: PropTypeExpanderVariant
    };

    var ConsentTrigger = /*#__PURE__*/ function(_Component4) {
        babelHelpers.inherits(ConsentTrigger, _Component4);

        var _super4 = _createSuper(ConsentTrigger);

        function ConsentTrigger() {
            babelHelpers.classCallCheck(this, ConsentTrigger);
            return _super4.apply(this, arguments);
        }

        babelHelpers.createClass(ConsentTrigger, [{
            key: "render",
            value: function render() {
                var triggerId = getTriggerId(this.context.expanderId, this.context.sectionId);
                var triggerClassName = [TRIGGER_CLASS_FOR_VARIANT[this.context.variant], getTriggerClassName(this.context.expanderId), this.props.className || ""].join(" ");
                return /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    id: triggerId,
                    o: true,
                    className: triggerClassName + " " + !!this.props.expanded,
                    "aria-expanded": !!this.props.expanded,
                    onClick: this.expanderSectionClick.bind(this)
                }, this.props.children);
            }
        }, {
            key: "expanderSectionClick",
            value: function expanderSectionClick(event) {
                this.props.onClick(event);
                this.props.onExpand(this.props.listNo);
            }
        }]);
        return ConsentTrigger;
    }(_react.Component);

    _exports.ConsentTrigger = ConsentTrigger;;
    ConsentTrigger.contextTypes = {
        expanderId: _propTypes.default.string,
        sectionId: _propTypes.default.string,
        variant: PropTypeExpanderVariant,
        onExpand: _propTypes.default.func,
        listNo: _propTypes.default.listNo
    };
    ConsentTrigger.defaultProps = {
        onExpand: function onExpand() {}
    }; //Section render initially not expanded. If you want to make it initially expanded pass BOTH "styleObject" and "expanded" params.

    var sectionRenderCount = [];

    var Section = /*#__PURE__*/ function(_Component5) {
        babelHelpers.inherits(Section, _Component5);

        var _super5 = _createSuper(Section);

        function Section(props, context) {
            var _this4;

            babelHelpers.classCallCheck(this, Section);
            _this4 = _super5.call(this, props, context);
            var id = window.sectionId++;
            _this4.id = props.id || "react--section-" + id;
            _this4.contentId = getContentId(context.expanderId, id);
            return _this4;
        }

        babelHelpers.createClass(Section, [{
            key: "componentDidCatch",
            value: function componentDidCatch() {
                console.error("SECTION " + this.id + " error");
            }
        }, {
            key: "getChildContext",
            value: function getChildContext() {
                return {
                    sectionId: this.id,
                    variant: this.props.variant || this.context.variant
                };
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                this.setState({
                    expanded: false
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.context.newSectionCallback();
                sectionRenderCount[this.id] = 0;
                this.setState({
                    styleObject: {}
                });
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate(nextProps) {
                if (nextProps.expanded != this.props.expanded) {
                    if (nextProps.expanded) {
                        this.setState({
                            expanded: true,
                            styleObject: {
                                display: "block"
                            }
                        });
                    } else {
                        this.setState({
                            expanded: false
                        });
                    }
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.props.expanded) {
                    $("#" + this.contentId).css("display", "block");
                }
            }
        }, {
            key: "renderHeader",
            value: function renderHeader() {
                var variant = this.props.variant === "section_expander" ? "section" : this.props.variant;
                var headerClassName = [(0, _ui.styleVariant)("opl-", variant || this.context.variant, "__header"), this.props.headerClassName || this.context.headerClassName || "", this.props.triggerHeader && getTriggerClassName(this.context.expanderId)].join(" ");

                if (this.props.header) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: headerClassName
                    }, this.props.header);
                } else {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: headerClassName
                    }, /*#__PURE__*/ _react.default.createElement(Toggle, babelHelpers.extends({
                        contentId: this.contentId,
                        className: this.props.toggleClassName
                    }, this.props), this.props.toggle));
                }
            }
        }, {
            key: "defaultHeader",
            value: function defaultHeader(appendAria) {
                if (appendAria) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: this.props.summaryClassName || this.context.summaryClassName || "",
                        "aria-expanded": "true"
                    }, this.renderHeader(), this.props.summary);
                } else {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: this.props.summaryClassName || this.context.summaryClassName || ""
                    }, this.renderHeader(), this.props.summary);
                }
            }
        }, {
            key: "render",
            value: function render() {
                sectionRenderCount[this.id] = parseInt(sectionRenderCount[this.id]) + 1;
                var variant = this.props.variant || this.context.variant;
                var sectionClassName = [SECTION_CLASS_FOR_VARIANT[variant], getParentClassName(this.context.expanderId), this.props.expanded ? " is-expanded " : "  ", this.props.className || this.context.sectionClassName || ""].join(" ");
                var contentClassName = [CONTENT_CLASS_FOR_VARIANT[variant], getContentClassName(this.context.expanderId), this.props.contentClassName || this.context.contentClassName || ""].join(" ");
                var header = !this.props.summary ? this.renderHeader() : this.defaultHeader(this.state.expanded);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: sectionClassName
                }, !this.props.headerBelow && header, /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.contentId,
                    className: contentClassName,
                    style: this.props.styleObject
                }, this.props.children), this.props.headerBelow && header);
            }
        }]);
        return Section;
    }(_react.Component);

    _exports.Section = Section;
    Section.propTypes = {
        id: _propTypes.default.string,
        className: _propTypes.default.string,
        toggle: _propTypes.default.node,
        toggleClassName: _propTypes.default.string,
        header: _propTypes.default.node,
        headerClassName: _propTypes.default.string,
        summary: _propTypes.default.node,
        contentClassName: _propTypes.default.string,
        variant: PropTypeExpanderVariant,
        triggerHeader: _propTypes.default.bool,
        headerBelow: _propTypes.default.bool,
        expanded: _propTypes.default.bool,
        styleObject: _propTypes.default.object
    };
    Section.defaultProps = {
        headerBelow: false,
        expanded: false,
        styleObject: {}
    };
    Section.childContextTypes = {
        sectionId: _propTypes.default.string,
        variant: PropTypeExpanderVariant
    };
    Section.contextTypes = {
        expanderId: _propTypes.default.string,
        sectionClassName: _propTypes.default.string,
        toggleClassName: _propTypes.default.string,
        headerClassName: _propTypes.default.string,
        summaryClassName: _propTypes.default.string,
        contentClassName: _propTypes.default.string,
        newSectionCallback: _propTypes.default.func,
        variant: PropTypeExpanderVariant
    };
});
//# sourceMappingURL=Expander.js.map