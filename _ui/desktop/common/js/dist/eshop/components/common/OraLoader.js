define(["exports", "react", "prop-types", "jquery", "../../modules/core/utils/ui"], function(_exports, _react, _propTypes, _jquery, _ui) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.OraLoader = _exports.OraLoaderChildren = _exports.OraParentLoader = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _jquery = babelHelpers.interopRequireDefault(_jquery);

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

    var loaderId = 1;

    var OraParentLoader = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraParentLoader, _Component);

        var _super = _createSuper(OraParentLoader);

        function OraParentLoader() {
            babelHelpers.classCallCheck(this, OraParentLoader);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OraParentLoader, [{
            key: "componentWillUpdate",
            value: function componentWillUpdate(nextProps) {
                if (this.props.loading === nextProps.loading) return;

                if (nextProps.loading) {
                    OPL.UI.fire('modules.loader.show', (0, _jquery.default)("#" + this.id), this.props.parentId);
                } else {
                    var id = this.id;
                    var parentId = this.props.parentId;
                    OPL.UI.fire('modules.loader.hide', (0, _jquery.default)("#" + id), parentId);
                }
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                if (this.props.id) {
                    this.id = this.props.id;
                } else {
                    this.id = "loaderParent-" + String(loaderId++);
                }
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                // initial checking of loading attribute value:
                if (this.props.loading) {
                    OPL.UI.fire('modules.loader.show', (0, _jquery.default)("#" + this.id), this.props.parentId);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.parentId,
                    ref: function ref(_ref) {
                        return _this.ref = _ref;
                    },
                    "data-js-module": "core/modules/loader"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    "data-loader-class": (0, _ui.styleVariant)("opl-loader--size-", this.props.size),
                    id: this.id
                }, this.props.children));
            }
        }]);
        return OraParentLoader;
    }(_react.Component);

    _exports.OraParentLoader = OraParentLoader;
    OraParentLoader.propTypes = {
        loading: _propTypes.default.bool,
        id: _propTypes.default.string,
        parentId: _propTypes.default.string,
        size: _propTypes.default.oneOf(['s', 'm', 'l']),
        children: _propTypes.default.any
    };
    OraParentLoader.defaultProps = {
        //    id: "loaderParent-" + String(loaderId++),
        size: "l"
    };

    var OraLoaderChildren = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(OraLoaderChildren, _Component2);

        var _super2 = _createSuper(OraLoaderChildren);

        function OraLoaderChildren() {
            babelHelpers.classCallCheck(this, OraLoaderChildren);
            return _super2.apply(this, arguments);
        }

        babelHelpers.createClass(OraLoaderChildren, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                if (prevProps.loading === this.props.loading) return;

                if (this.props.loading) {
                    OPL.UI.fire('modules.loader.show', (0, _jquery.default)("#" + this.props.id), this.props.parentId);
                } else {
                    OPL.UI.fire('modules.loader.hide', (0, _jquery.default)("#" + this.props.id), this.props.parentId);
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.id
                }, this.props.children);
            }
        }]);
        return OraLoaderChildren;
    }(_react.Component);

    _exports.OraLoaderChildren = OraLoaderChildren;
    OraLoaderChildren.propTypes = {
        loading: _propTypes.default.bool,
        id: _propTypes.default.string,
        parentId: _propTypes.default.string,
        children: _propTypes.default.any
    };
    OraLoaderChildren.defaultProps = {
        id: "loaderChildren-" + String(loaderId++),
        parentId: "",
        loading: false
    };
    window.loaderHeigthFixerTimeout = 0;
    window.loaderTimeout = [];

    var OraLoader = /*#__PURE__*/ function(_Component3) {
        babelHelpers.inherits(OraLoader, _Component3);

        var _super3 = _createSuper(OraLoader);

        function OraLoader(props) {
            var _this2;

            babelHelpers.classCallCheck(this, OraLoader);
            _this2 = _super3.call(this, props);
            _this2.showLoader = _this2.showLoader.bind(babelHelpers.assertThisInitialized(_this2));
            _this2.hideLoader = _this2.hideLoader.bind(babelHelpers.assertThisInitialized(_this2));
            return _this2;
        }

        babelHelpers.createClass(OraLoader, [{
            key: "getClassName",
            value: function getClassName() {
                return "u-position-relative " + (0, _ui.styleVariant)(" ", this.props.className);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                // initial checking of loading attribute value:
                if (this.props.loading) {
                    this.showLoader();
                    this.traceHeight(true);
                }
            }
        }, {
            key: "traceHeight",
            value: function traceHeight(loading) {
                console.log("traceHeight beg ", loading);
                clearTimeout(window.loaderHeigthFixerTimeout);
                if (!this.props.useHeightFixing || !loading) return;
                var height = (0, _jquery.default)("#" + this.props.id).height();
                (0, _jquery.default)("." + this.props.id).height(height);
                var that = this; //     window.loaderHeigthFixerTimeout=setTimeout(function(){that.traceHeight(loading); },300);

                console.log("Loader height", height);
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prvProps) {
                if (this.props.useHeightFixing) {
                    console.log("prvProps", prvProps);
                    console.log("actProps", this.props);

                    if (this.props.childrenHeight != prvProps.childrenHeight) {
                        console.log(":):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):)");
                        this.traceHeight(this.props.loading);
                    }
                }

                if (this.props.loading === prvProps.loading) return;
                var that = this;
                clearTimeout(window.loaderTimeout[this.props.id]);

                if (prvProps.loading) {
                    window.loaderTimeout[this.props.id] = setTimeout(function() {
                        that.hideLoader();
                    }, 10); //this.hideLoader();
                } else {
                    window.loaderTimeout[this.props.id] = setTimeout(function() {
                        that.showLoader();
                    }, 50); //            this.showLoader();
                }
            }
        }, {
            key: "showLoader",
            value: function showLoader() {
                if (this.props.mode === 'FULL_SCREEN') {
                    OPL.UI.fire('modules.loader.show');
                } else {
                    OPL.UI.fire('modules.loader.show', (0, _jquery.default)("#" + this.props.id), this.props.parentId); //       this.traceHeight(this.props.loading);
                }
            }
        }, {
            key: "hideLoader",
            value: function hideLoader() {
                if (this.props.mode === 'FULL_SCREEN') {
                    OPL.UI.fire('modules.loader.hide');
                } else {
                    OPL.UI.fire('modules.loader.hide', (0, _jquery.default)("#" + this.props.id), this.props.parentId);
                }
            }
        }, {
            key: "render",
            value: function render() {
                if (this.props.blockType == "span") return /*#__PURE__*/ _react.default.createElement("span", {
                    id: this.props.id,
                    "data-loader-class": (0, _ui.styleVariant)("opl-loader--size-", this.props.size),
                    className: this.getClassName()
                }, this.props.children);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.id,
                    "data-loader-class": (0, _ui.styleVariant)("opl-loader--size-", this.props.size),
                    className: this.getClassName()
                }, this.props.children);
            }
        }]);
        return OraLoader;
    }(_react.Component);

    _exports.OraLoader = OraLoader;
    OraLoader.propTypes = {
        id: _propTypes.default.string,
        parentId: _propTypes.default.any,
        loading: _propTypes.default.bool,
        className: _propTypes.default.string,
        size: _propTypes.default.oneOf(['s', 'm', 'l']),
        mode: _propTypes.default.string,
        children: _propTypes.default.any,
        useHeightFixing: _propTypes.default.bool
    };
    OraLoader.defaultProps = {
        id: "loader-" + String(loaderId++),
        parentId: "bsf-container-div",
        loading: false,
        className: "",
        size: "m",
        useHeightFixing: false
    };
});
//# sourceMappingURL=OraLoader.js.map