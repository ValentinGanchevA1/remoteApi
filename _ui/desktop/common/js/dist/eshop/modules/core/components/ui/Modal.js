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

    window.modalId = window.modalId != undefined ? window.modalId + 1 : 1;
    var SIZE_SMALL = "small";
    var SIZE_NARROW = "narrow";
    var SIZE_MEDIUM = "medium";
    var SIZE_FULLSCREEN = "fullscreen";
    var SIZE_NONE = "";
    window.modalStack = window.modalStack || [];

    var OraModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraModal, _Component);

        var _super = _createSuper(OraModal);

        function OraModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, OraModal);
            _this = _super.call(this, props);
            _this.onClose = _this.onClose.bind(babelHelpers.assertThisInitialized(_this));
            _this.show = _this.show.bind(babelHelpers.assertThisInitialized(_this));
            _this.overrideShowClose = _this.overrideShowClose.bind(babelHelpers.assertThisInitialized(_this));
            _this.close = _this.close.bind(babelHelpers.assertThisInitialized(_this));
            _this.state = {
                open: false
            };

            _this.setContainerRef = function(el) {
                _this.container = el;
            };

            return _this;
        }

        babelHelpers.createClass(OraModal, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                var id = this.props.id || window.modalId++;
                this.modalId = "react-modal-" + id;
                this.triggerId = "react-modal-" + id + "-trigger";
                this.contentClass = "react-modal-" + id + "-content";
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                OPL.UI.on(OPL.UI.EVENTS.modules.modal.closed, this.onClose, this.triggerId);
                OPL.UI.on('module.started', function(data) {
                    if (window.modalStack.length == 1 && window.modalStack[0] === data.element.id) {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, "", data.element.id);
                    }
                });
                OPL.UI.initModules(this.container);
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(props) {
                this.overrideShowClose();

                if (props.open && !this.props.open || props.open && !this.state.open) {
                    this.show();
                }

                if (!props.open && this.props.open) {
                    this.close();
                }
            }
        }, {
            key: "show",
            value: function show() {
                if (window.modalStack.indexOf(this.triggerId) === -1) {
                    if (window.modalStack.length > 0) {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, "", window.modalStack[0]); //wait untill first modal closes

                        setTimeout(this.doOpen.bind(this), 600);
                    } else {
                        this.doOpen();
                    }

                    window.modalStack.push(this.triggerId);
                }

                console.log("window.modalStack", window.modalStack);
            }
        }, {
            key: "doOpen",
            value: function doOpen() {
                ;
                OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, "", this.triggerId);
                this.setState({
                    open: true
                });
            }
        }, {
            key: "close",
            value: function close() {
                var modalIndex = window.modalStack.indexOf(this.triggerId);

                if (modalIndex > -1) {
                    window.modalStack.splice(modalIndex, 1);
                }

                OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, "", this.triggerId);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                OPL.UI.off(OPL.UI.EVENTS.modules.modal.closed, this.onClose, this.triggerId);
                OPL.UI.stopModules(this.container);
            }
        }, {
            key: "onClose",
            value: function onClose() {
                if (!!this.props.onClose) {
                    this.props.onClose();
                }

                if (window.modalStack.length === 0) {
                    window.document.body.classList.remove("toplayer__open");
                }

                this.setState({
                    open: false
                });
                var modalIndex = window.modalStack.indexOf(this.triggerId);

                if (modalIndex > -1) {
                    window.modalStack.splice(modalIndex, 1);
                }
            }
        }, {
            key: "getModalOptions",
            value: function getModalOptions() {
                var options = (0, _ui.pickProps)(this.props, ["showClose", "escapeClose", "clickClose", "contentHeight", "closeText", "openOnStart"]);
                options.modalClass = "o-modal" + (!!this.props.size ? " o-modal--" + this.props.size : "");
                options.additionalClass = this.contentClass;

                if (this.props.closeText !== null) {
                    options.showCloseText = true;
                }

                return options;
            }
        }, {
            key: "overrideShowClose",
            value: function overrideShowClose() {
                if (this.props.showClose) {
                    $("#" + this.modalId).find(".close-modal").removeClass("u-hide");
                } else {
                    $("#" + this.modalId).find(".close-modal").addClass("u-hide");
                }
            }
        }, {
            key: "portalClassName",
            value: function portalClassName() {
                return "u-hide--soft" + (this.props.noPadding ? " o-modal__no-padding" : "") + (this.props.fullscreenMobile ? " o-modal--fullscreen-mobile" : "");
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    ref: this.setContainerRef
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#" + this.modalId,
                    id: this.triggerId,
                    className: "o-modal__trigger u-hide",
                    "data-type": "modal:custom",
                    "data-js-module": "core/modules/modal",
                    "data-js-options": JSON.stringify(this.getModalOptions())
                }), /*#__PURE__*/ _react.default.createElement(_Portal.default, {
                    portalId: this.modalId,
                    portalClassName: this.portalClassName(),
                    getDestinationNode: function getDestinationNode() {
                        return document.getElementsByClassName(_this2.contentClass)[0];
                    }
                }, this.props.children));
            }
        }]);
        return OraModal;
    }(_react.Component);

    OraModal.propTypes = {
        id: _propTypes.default.string,
        open: _propTypes.default.bool.isRequired,
        showClose: _propTypes.default.bool,
        noPadding: _propTypes.default.bool,
        fullscreenMobile: _propTypes.default.bool,
        closeText: _propTypes.default.string,
        escapeClose: _propTypes.default.bool,
        clickClose: _propTypes.default.bool,
        contentHeight: _propTypes.default.number,
        onClose: _propTypes.default.func,
        size: _propTypes.default.oneOf([SIZE_SMALL, SIZE_NARROW, SIZE_MEDIUM, SIZE_FULLSCREEN, SIZE_NONE])
    };
    OraModal.defaultProps = {
        showClose: true,
        noPadding: false,
        fullscreenMobile: false,
        closeText: null,
        contentHeight: null,
        escapeClose: null,
        clickClose: null,
        size: SIZE_NONE
    };
    var _default = OraModal;
    _exports.default = _default;
});
//# sourceMappingURL=Modal.js.map