define(["exports", "react", "prop-types", "../../../checkout/components/consents/AssistModeEnum"], function(_exports, _react, _propTypes, _AssistModeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _AssistModeEnum = babelHelpers.interopRequireDefault(_AssistModeEnum);

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

    var OraLoyaltyHeader = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraLoyaltyHeader, _Component);

        var _super = _createSuper(OraLoyaltyHeader);

        function OraLoyaltyHeader() {
            var _this;

            babelHelpers.classCallCheck(this, OraLoyaltyHeader);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "onClickChange", function(e) {
                e.preventDefault();

                _this.props.onClickChange();
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "onClickCreateLead", function(e) {
                e.preventDefault();

                _this.props.onClickCreateLead();
            });
            return _this;
        }

        babelHelpers.createClass(OraLoyaltyHeader, [{
            key: "render",
            value: function render() {
                var street = this.props.street ? "ul. ".concat(this.props.street) : '';
                var apartmentNumber = this.props.apartmentNumber ? "/".concat(this.props.apartmentNumber) : '';
                var address = "".concat(this.props.place, ", ").concat(street, " ").concat(this.props.streetNumber).concat(apartmentNumber);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-xl u-padding-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-display_table"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-inline-block u-vertical-middle u-spacing-right"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--only g-icon--valid g-icon--xs-s g-greenf-c"
                })), this.props.ftthAvailabilityDate ? this.renderChangeAddressOrCreateLead(address) : this.renderChangeAddress(address)));
            }
        }, {
            key: "renderChangeAddressOrCreateLead",
            value: function renderChangeAddressOrCreateLead(address) {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-inline-block u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.createLeadText1, " "), /*#__PURE__*/ _react.default.createElement("span", null, address, " "), /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.createLeadText2, " "), /*#__PURE__*/ _react.default.createElement("span", null, this.props.ftthAvailabilityDate, ". "), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold u-xsmall-block"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: function onClick(e) {
                        return _this2.onClickChange(e);
                    }
                }, this.props.descriptions.createLeadChangeAddressButton)), /*#__PURE__*/ _react.default.createElement("span", null, " ", this.props.descriptions.createLeadButtonSeparator, " "), this.props.assistModeState === _AssistModeEnum.default.ACTIVE ? this.renderTurnOffAssistModeText() : this.renderCreateLeadButton()));
            }
        }, {
            key: "renderTurnOffAssistModeText",
            value: function renderTurnOffAssistModeText() {
                return /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.turnOffAssistModeText);
            }
        }, {
            key: "renderCreateLeadButton",
            value: function renderCreateLeadButton() {
                var _this3 = this;

                return /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold u-xsmall-block"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: function onClick(e) {
                        return _this3.onClickCreateLead(e);
                    }
                }, this.props.descriptions.createLeadButton));
            }
        }, {
            key: "renderChangeAddress",
            value: function renderChangeAddress(address) {
                var _this4 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-inline-block u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.changeAddressTitle, " "), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold u-xsmall-block"
                }, /*#__PURE__*/ _react.default.createElement("span", null, address, " "), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: function onClick(e) {
                        return _this4.onClickChange(e);
                    }
                }, this.props.descriptions.changeAddressButtonLabel))));
            }
        }]);
        return OraLoyaltyHeader;
    }(_react.Component);

    babelHelpers.defineProperty(OraLoyaltyHeader, "propTypes", {
        descriptions: _propTypes.default.shape({
            changeAddressTitle: _propTypes.default.string,
            changeAddressButtonLabel: _propTypes.default.string,
            createLeadText1: _propTypes.default.string,
            createLeadText2: _propTypes.default.string,
            createLeadButtonSeparator: _propTypes.default.string,
            createLeadChangeAddressButton: _propTypes.default.string,
            createLeadButton: _propTypes.default.string
        }),
        place: _propTypes.default.string,
        street: _propTypes.default.string,
        apartmentNumber: _propTypes.default.string,
        streetNumber: _propTypes.default.string,
        ftthAvailabilityDate: _propTypes.default.string,
        assistModeState: _propTypes.default.string,
        onClickChange: _propTypes.default.func,
        onClickCreateLead: _propTypes.default.func
    });
    babelHelpers.defineProperty(OraLoyaltyHeader, "defaultProps", {});
    var _default = OraLoyaltyHeader;
    _exports.default = _default;
});
//# sourceMappingURL=OraLoyaltyHeader.js.map