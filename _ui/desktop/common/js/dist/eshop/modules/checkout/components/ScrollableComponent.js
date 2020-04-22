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

    window.validationComponents = window.validationComponents || {};
    window.validationComponents.list = window.validationComponents.list || [];

    var ScrollableComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ScrollableComponent, _Component);

        var _super = _createSuper(ScrollableComponent);

        function ScrollableComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, ScrollableComponent);
            _this = _super.call(this, props);
            _this.state = {
                no: 0
            };
            _this.scrollToValidationComponent = _this.scrollToValidationComponent.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(ScrollableComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (validationComponents.counter) {
                    window.validationComponents.counter++;
                } else {
                    window.validationComponents.counter = 1;
                }

                this.setState({
                    no: window.validationComponents.counter - 1
                });
                this.setInList("registered");
                console.log("ScrollableComponent componentDidMount", window.validationComponents.counter - 1);
            }
        }, {
            key: "setInList",
            value: function setInList(status) {
                window.validationComponents.list[this.state.no] = status;
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                this.setInList("ready");
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.setInList("validated");
                var that = this;
                setTimeout(function() {
                    that.scrollToValidationComponent();
                }, 450); //wait until consents expander opens
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                console.log("ScrollableComponent UNMOUNT");
                window.validationComponents.list[this.state.no] = 'removed';
            }
        }, {
            key: "areAllElementsValidated",
            value: function areAllElementsValidated() {
                return window.validationComponents.list.filter(function(v) {
                    return v == "validated" || v == "removed";
                }).length == window.validationComponents.list.length;
            }
        }, {
            key: "scrollToValidationComponent",
            value: function scrollToValidationComponent() {
                console.log("ScrollableComponent scrollToValidationComponent", window.validationComponents, this.props.errorList, this.props.consentsErrorList);

                if ((this.props.errorList && this.props.errorList.length && this.props.errorList[0].afterValidation || this.props.consentsErrorList && this.props.consentsErrorList.length && this.props.consentsErrorList[0].afterValidation) && this.areAllElementsValidated()) {
                    var firstValidationOffset = this.getFirstValidationErrorOffset();
                    console.log("Scroll to :", firstValidationOffset);

                    if (firstValidationOffset) {
                        $('html, body').animate({
                            scrollTop: firstValidationOffset
                        }, '50');
                    }
                }
            }
        }, {
            key: "calculateAdditionalScrollOffset",
            value: function calculateAdditionalScrollOffset(elementToFocusOn) {
                var sectionReference = $("#" + $(elementToFocusOn).data('scroll-offset-calculate-to'));
                var errorReference = $("#" + $(elementToFocusOn).data('scroll-offset-calculate-from'));

                if ($(sectionReference).offset() && $(errorReference).offset()) {
                    var sectionTop = $(sectionReference).offset().top;
                    var errorTop = $(errorReference).offset().top;
                    return sectionTop - errorTop;
                }

                return 0;
            }
        }, {
            key: "getFirstValidationErrorOffset",
            value: function getFirstValidationErrorOffset() {
                var top = 9999999999;
                var left = 9999999999;
                var elementToFocusOn;
                $(".opl-msg--error-anchor").each(function() {
                    var ref = this;
                    var myTop = $(ref).offset().top;
                    var myLeft = $(ref).offset().left;

                    if ($(ref).hasClass("opl-msg-scrollToParent")) {
                        var myTop = $(ref).parent().offset().top - 100;
                        var myLeft = $(ref).parent().offset().left;
                    }

                    if ($(this).parent().find('input').length) {
                        ref = $(this).parent().find('input');
                        myTop = $(ref).offset().top;
                    }

                    if (top > myTop && ref && left > myLeft) {
                        left = myLeft;
                        elementToFocusOn = ref;
                    }

                    top = top > myTop ? myTop : top;
                });

                if (elementToFocusOn) {
                    console.log("ScrollableComponent will focus on:", elementToFocusOn);
                    top += $(elementToFocusOn).data('scroll-offset');

                    if ($(elementToFocusOn).data('scroll-offset-calculate-from') && $(elementToFocusOn).data('scroll-offset-calculate-to')) {
                        top += this.calculateAdditionalScrollOffset(elementToFocusOn);
                    }
                }

                var headerHeight = $(".opl-header__main").outerHeight() || $(".opl-navBar").outerHeight() || 100;
                top = parseInt(top - parseInt(headerHeight));
                return top - 80; //consider animated header
            }
        }]);
        return ScrollableComponent;
    }(_react.Component);

    _exports.default = ScrollableComponent;
});
//# sourceMappingURL=ScrollableComponent.js.map