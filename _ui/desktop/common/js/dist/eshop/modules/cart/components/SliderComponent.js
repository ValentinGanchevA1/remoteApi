define(["exports", "react", "prop-types", "react-redux", "eshop/components/OraCommonComponents", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/resources"], function(_exports, _react, _propTypes, _reactRedux, _OraCommonComponents, _selectors, _resources) {
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

    var SliderComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SliderComponent, _Component);

        var _super = _createSuper(SliderComponent);

        function SliderComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, SliderComponent);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "state", {
                showMinError: false,
                showMaxError: false,
                maxPrice: false,
                minPrice: false,
                count: false,
                countIn: false,
                fromInput: true,
                diff: 0
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "getTaxFactor", function(device) {
                return device.tax ? device.tax / 100 + 1 : 1;
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "getDevice", function(entry) {
                return !!entry && !!entry.terminals && entry.terminals.length > 0 && entry.terminals[0] || !!entry.euroSets && entry.euroSets.length > 0 && entry.euroSets[0];
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "onChange", function(e) {
                console.log("ONCHANGE1");
                var value = e.target.value.toString().replace(",", ".");
                var regex = /^\d*(\.\d{0,2}|\d?)$/;
                console.log("REGEXP_TEST");
                console.log(value);
                console.log(regex.test(value));

                if (regex.test(value)) {
                    _this.setState({
                        showMinError: false,
                        showMaxError: false,
                        fromInput: true,
                        count: value,
                        countIn: _this.getInstallment(parseFloat(value), _this.props)
                    });
                }
            });
            return _this;
        }

        babelHelpers.createClass(SliderComponent, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                console.log("SliderComponent.componentWillReceiveProps.props", this.props);
                console.log("SliderComponent.componentWillReceiveProps.nextProps", nextProps);
                var device = this.getDevice(nextProps.entry);
                var maxPrice = this.getMaxPrice(device, nextProps.showNetPrices);
                var willBeVoucher = this.isVoucher(device);
                var currentDevice = this.getDevice(this.props.entry);
                var currentDiff = this.getOffset(currentDevice, this.getTaxFactor(currentDevice), nextProps);
                var taxFactor = this.getTaxFactor(device);
                var nextDiff = this.getOffset(device, taxFactor, nextProps);
                var minPrice = this.getMinPrice(device, nextProps.showNetPrices, nextDiff);
                console.log("WILL BE VOUCHER");
                console.log(willBeVoucher);
                var isVoucher = this.isVoucher(this.getDevice(this.props.entry));
                console.log("IS VOUCHER");
                console.log(isVoucher);

                if (this.state.count == false || maxPrice !== this.state.maxPrice || minPrice !== this.state.minPrice || isVoucher !== willBeVoucher || currentDiff != nextDiff || this.props.open != nextProps.open || this.props.showNetPrices !== nextProps.showNetPrices || taxFactor !== this.state.taxFactor) {
                    var count = Number(parseFloat(minPrice) + nextDiff).toFixed(2);
                    this.setState({
                        maxPrice: maxPrice,
                        minPrice: minPrice,
                        count: count,
                        countIn: this.getInstallment(count, nextProps),
                        fromInput: true,
                        diff: nextDiff,
                        taxFactor: taxFactor
                    });
                }
            }
        }, {
            key: "onMouseDown",
            value: function onMouseDown(event) {
                console.log("onMouseDown");
                this.setState({
                    fromInput: false,
                    count: event.target.value,
                    countIn: this.getInstallment(event.currentTarget.value, this.props),
                    showMinError: false,
                    showMaxError: false
                });
            }
        }, {
            key: "onMouseUp",
            value: function onMouseUp(event) {
                console.log("onMouseUp");
                this.setState({
                    fromInput: false,
                    count: event.target.value,
                    countIn: this.getInstallment(event.target.value, this.props),
                    showMinError: false,
                    showMaxError: false
                });
            }
        }, {
            key: "onSliderChange",
            value: function onSliderChange(event) {
                console.log("onSliderChange");
                this.setState({
                    fromInput: false,
                    count: event.target.value,
                    // countIn: this.getInstallment(event.target.value, this.props),
                    showMinError: false,
                    showMaxError: false
                });
            }
        }, {
            key: "onButtonClick",
            value: function onButtonClick() {
                console.log("BUTTON CLICKED");
                console.log(this.state.count);
                console.log(this.state.minPrice);
                console.log(this.state.maxPrice);

                if (isNaN(parseFloat(this.state.count)) || parseFloat(this.state.count) < this.state.minPrice) {
                    console.log("MIN ERROR");
                    this.setState({
                        showMinError: true
                    });
                } else if (parseFloat(this.state.count) > this.state.maxPrice) {
                    console.log("MAX ERROR");
                    this.setState({
                        showMaxError: true
                    });
                } else {
                    console.log("SUBMIT INSTALLMENTS");
                    console.log(Number(this.state.count - this.state.minPrice).toFixed(2));
                    console.log(this.props.showNetPrices ? "B2B" : "B2C");
                    this.setState({
                        diff: this.state.count - this.state.minPrice
                    });
                    var offset = 0;

                    if (this.props.cartIsNet && !this.props.showNetPrices) {
                        offset = ((this.state.count - this.state.minPrice) / this.state.taxFactor).toFixed(2);
                    } else {
                        offset = (this.state.count - this.state.minPrice).toFixed(2);
                    }

                    this.props.postLowerInstallments(this.props.bundleNo, offset, this.props.showNetPrices ? "B2B" : "B2C");
                }
            }
        }, {
            key: "render",
            value: function render() {
                var monthlyPricesTable = this.renderMonthlyPrices();
                var error = this.renderError();
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "opl-modal-title-space u-margin-l"
                }, "Obni\u017C rat\u0119"), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-margin-l"
                }, "Mo\u017Cesz obni\u017Cy\u0107 wysoko\u015B\u0107 raty, p\u0142ac\u0105c wi\u0119cej na start:"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-margin-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "slide-container"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    className: "opl-range",
                    type: "range",
                    step: "0.01",
                    min: this.state.minPrice,
                    value: this.state.fromInput ? parseFloat(this.state.count) : undefined,
                    defaultValue: this.state.minPrice,
                    max: this.state.maxPrice,
                    id: "myRange",
                    onChange: this.onSliderChange.bind(this),
                    onMouseDown: this.state.fromInput ? this.onMouseDown.bind(this) : undefined,
                    onMouseUp: this.onMouseUp.bind(this),
                    onTouchEnd: this.onMouseUp.bind(this),
                    onTouchStart: this.onMouseUp.bind(this)
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-display__flex-wrap u-justify-content_space-between u-padding-top-s"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "g-gray5-c"
                }, this.state.minPrice.toString().replace(".", ","), " z\u0142"), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "g-gray5-c"
                }, this.state.maxPrice.toString().replace(".", ","), " z\u0142"))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-5 l-col-5 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-floating-label-line u-margin-m o-floating-label",
                    id: "mod-core/modules/floating-label-2"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "text",
                    id: "input01",
                    name: "input01",
                    value: this.state.count.toString().replace(".", ","),
                    className: "is-not-empty",
                    onChange: this.onChange.bind(this)
                }), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "label o-floating-label__placeholder o-floating-label__p-2",
                    htmlFor: "input01"
                }, "Op\u0142ata na start"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-floating-label-line--border"
                })), error), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-5 l-col-4  u-small-margin-m"
                }, /*#__PURE__*/ _react.default.createElement("table", null, /*#__PURE__*/ _react.default.createElement("caption", {
                    className: "u-acc-hide"
                }, "Miesi\u0119czna rata"), /*#__PURE__*/ _react.default.createElement("thead", null, /*#__PURE__*/ _react.default.createElement("tr", {
                    className: "u-acc-hide"
                }, /*#__PURE__*/ _react.default.createElement("th", {
                    className: "um-table-60"
                }), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "um-table-20"
                }, "Miesi\u0119czna rata"))), /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "p um-table-60 u-padding-top-s u-padding-s g-gray6-c u-font-small"
                }, "Miesi\u0119czna rata")), !!monthlyPricesTable && monthlyPricesTable)))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4  large-offset-by-8 medium-offset-by-8"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    onClick: this.onButtonClick.bind(this),
                    className: "opl-btn opl-btn--primary opl-btn--medium o-btn u-w-100"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-box"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), !!this.props.descriptions && this.props.descriptions.lowerInstallmentsSubmitButton || "Zatwierdź"))));
            }
        }, {
            key: "renderError",
            value: function renderError() {
                if (!!this.state.showMinError || !!this.state.showMaxError) {
                    var errorMsg = this.state.showMinError ? !!this.props.descriptions && this.props.descriptions.lowerInstallmentsMinError || "Opłata na start nie może być niższa niż w ofercie" : !!this.props.descriptions && this.props.descriptions.lowerInstallmentsMaxError || "Opłata na start nie może być wyższa niż w ofercie";
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-msg opl-msg--context opl-msg--error u-margin-top-s",
                        "aria-live": "rude"
                    }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
                        role: "alert",
                        className: "u-margin-left"
                    }, errorMsg)));
                } else {
                    return;
                }
            }
        }, {
            key: "renderMonthlyPrices",
            value: function renderMonthlyPrices() {
                if (!!this.state.countIn && this.state.countIn.length > 3) {
                    if (this.state.countIn[2] != this.state.countIn[3]) {
                        return [this.step(1, this.state.countIn[1], this.state.countIn[0]), this.step(this.state.countIn[1] + 1, null, this.state.countIn[2]), this.step(this.state.countIn[4] + 1, this.state.countIn[5], this.state.countIn[3])];
                    } else {
                        return [this.step(1, this.state.countIn[1], this.state.countIn[0]), this.step(this.state.countIn[4], this.state.countIn[5], this.state.countIn[3])];
                    }
                } else if (this.state.countIn[0] != this.state.countIn[1]) {
                    return [this.step(1, null, this.state.countIn[0]), this.step(2, this.state.countIn[2], this.state.countIn[1])];
                } else {
                    return this.step(1, this.state.countIn[2], this.state.countIn[0]);
                }
            }
        }, {
            key: "step",
            value: function step(monthFrom, monthTo, value) {
                console.log("STEP");
                console.log(monthFrom);
                console.log(monthTo);
                console.log(value);
                return !isNaN(value) && parseFloat(this.state.count) >= parseFloat(this.state.minPrice) && parseFloat(this.state.count) <= parseFloat(this.state.maxPrice) && /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-s"
                }, monthFrom, !!monthTo && '-' + monthTo, " mies."), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-font-bold u-small-padding u-padding-s u-text-right"
                }, !!value && value.toString().replace(".", ","), " z\u0142"));
            }
        }, {
            key: "getOffset",
            value: function getOffset(device, taxFactor, props) {
                if (!device) {
                    return false;
                }

                return props.cartIsNet && !props.showNetPrices ? device.priceOffset * taxFactor : device.priceOffset;
            }
        }, {
            key: "getMinPrice",
            value: function getMinPrice(device, showNetPrices, nextDiff) {
                //todo net Price
                if (!device) {
                    return false;
                }

                if (!!device && device.voucherNames == null) {
                    console.log("BRAK VOUCHERA");

                    if (!!showNetPrices) {
                        return !!device && device.checkoutPrice.netPriceWithoutVouchers.toFixed(2);
                    }

                    return !!device && device.checkoutPrice.priceWithoutVouchers.toFixed(2);
                } else {
                    var oneTimeVoucher = this.isOneTimeVoucher(device, showNetPrices, nextDiff);

                    if (!oneTimeVoucher) {
                        console.log("VOUCHER RATY");

                        if (!!showNetPrices) {
                            return !!device && device.checkoutPrice.netPriceWithoutVouchers.toFixed(2);
                        }

                        return !!device && device.checkoutPrice.priceWithoutVouchers.toFixed(2);
                    } else if (oneTimeVoucher) {
                        console.log("VOUCHER 1 RATA");

                        if (!!showNetPrices) {
                            return !!device && (device.checkoutPrice.netPrice - this.state.diff).toFixed(2);
                        }

                        return !!device && (device.checkoutPrice.price - this.state.diff).toFixed(2);
                    } else {
                        return !!device && device.checkoutPrice.price.toFixed(2);
                    }
                }
            }
        }, {
            key: "isOneTimeVoucher",
            value: function isOneTimeVoucher(device, showNetPrices, nextDiff) {
                console.log(this.state.diff);
                console.log(nextDiff);
                console.log(device.checkoutPrice.netPriceWithoutVouchers);
                console.log(device.checkoutPrice.netPrice);

                if (nextDiff !== false && !!showNetPrices ? nextDiff + device.checkoutPrice.netPriceWithoutVouchers == device.checkoutPrice.netPrice : nextDiff + device.checkoutPrice.priceWithoutVouchers == device.checkoutPrice.price) {
                    console.log("THERE IS NO 1 TIME VOUCHER");
                    return false;
                } else {
                    console.log("IS 1 TIME VOUCHER");
                    return true;
                }
            }
        }, {
            key: "isVoucher",
            value: function isVoucher(device) {
                console.log("CHECK IS VOUCHER");
                console.log(device);
                return !!device && device.voucherNames != null;
            }
        }, {
            key: "getMaxPrice",
            value: function getMaxPrice(device, showNetPrices) {
                if (!!device && device.voucherNames == null) {
                    if (!!showNetPrices) {
                        return !!device && (Number(this.getMonthlyPrice(device.monthlyPrices, 'netPriceWithoutVouchers')) + device.checkoutPrice.netPriceWithoutVouchers).toFixed(2);
                    }

                    return !!device && (Number(this.getMonthlyPrice(device.monthlyPrices, 'priceWithoutVouchers')) + device.checkoutPrice.priceWithoutVouchers).toFixed(2);
                } else {
                    console.log("VOUCHER MAX PRICE");

                    if (!!showNetPrices) {
                        return !!device && (Number(this.getMonthlyPrice(device.monthlyPrices, 'netPrice')) + device.checkoutPrice.netPrice).toFixed(2);
                    }

                    return !!device && (Number(this.getMonthlyPrice(device.monthlyPrices, 'price')) + device.checkoutPrice.price).toFixed(2);
                }
            }
        }, {
            key: "getMonthlyPrice",
            value: function getMonthlyPrice(monthly, type) {
                var sum = 0;
                monthly.forEach(function(e) {
                    sum = sum + (e.monthTo - e.monthFrom + 1) * e[type];
                });
                return sum;
            }
        }, {
            key: "getInstallment",
            value: function getInstallment(value, _ref) {
                var entry = _ref.entry,
                    showNetPrices = _ref.showNetPrices;
                var device = !!entry && !!entry.terminals && entry.terminals.length > 0 && entry.terminals[0] || !!entry.euroSets && entry.euroSets.length > 0 && entry.euroSets[0];
                console.log("INSTALLMENTS");

                if (!!device) {
                    console.log("INSTALLMENTS1");
                    console.log(value);
                    console.log(entry);
                    var compensation, inst, compensationInst;
                    var maxPrice = this.getMaxPrice(device, showNetPrices);
                    var diff = Number(maxPrice - value).toFixed(2);

                    if (!!device.monthlyPrices && !!device.monthlyPrices[1] && device.monthlyPrices[0].price == 0) {
                        //todo fix for more than one  installment
                        console.log("INSTALLMENTS2A");
                        var zeroMonthTo = device.monthlyPrices[0].monthTo;
                        var firstMonthTo = device.monthlyPrices[1].monthTo;
                        var firstMonthFrom = device.monthlyPrices[1].monthFrom;
                        var months = device.monthlyPrices[device.monthlyPrices.length - 1].monthTo - device.monthlyPrices[0].monthTo;
                        compensation = this.calculateCompensation(diff, months);
                        inst = Math.floor(100 * diff / months) / 100;
                        compensationInst = Number(inst + parseFloat(compensation)).toFixed(2);
                        return [Number(0).toFixed(2), zeroMonthTo, compensationInst, Number(inst).toFixed(2), firstMonthFrom, firstMonthTo];
                    } else {
                        console.log("INSTALLMENTS2B");
                        var _months = device.monthlyPrices[device.monthlyPrices.length - 1].monthTo;
                        compensation = this.calculateCompensation(diff, _months);
                        inst = Math.floor(100 * diff / _months) / 100;
                        compensationInst = Number(inst + parseFloat(compensation)).toFixed(2);
                        return [compensationInst, Number(inst).toFixed(2), _months];
                    }
                }

                return false;
            }
        }, {
            key: "calculateCompensation",
            value: function calculateCompensation(value, months) {
                var modulo = Number(100 * value).toFixed(0) % months;
                return Number(modulo / 100).toFixed(2);
            }
        }]);
        return SliderComponent;
    }(_react.Component);

    _exports.default = SliderComponent;
});
//# sourceMappingURL=SliderComponent.js.map