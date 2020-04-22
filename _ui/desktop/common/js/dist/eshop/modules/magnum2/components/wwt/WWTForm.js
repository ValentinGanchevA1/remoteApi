define(["exports", "react", "prop-types", "../../../../components/OraCommonComponents", "../../../core/constants/RequestState", "../InputWithFloatingLabel", "eshop/modules/checkout/validators", "eshop/flux/utils/OraApiUtils", "eshop/modules/magnum2/components/wwt/ConfirmWWTPopup", "lodash"], function(_exports, _react, _propTypes, _OraCommonComponents, _RequestState, _InputWithFloatingLabel, _validators, _OraApiUtils, _ConfirmWWTPopup, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.prepareUrl = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _InputWithFloatingLabel = babelHelpers.interopRequireDefault(_InputWithFloatingLabel);
    _ConfirmWWTPopup = babelHelpers.interopRequireDefault(_ConfirmWWTPopup);
    _lodash = babelHelpers.interopRequireDefault(_lodash);

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

    var prepareUrl = function prepareUrl(url) {
        return bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;
    };

    _exports.prepareUrl = prepareUrl;

    var WWTForm = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(WWTForm, _Component);

        var _super = _createSuper(WWTForm);

        function WWTForm(props) {
            var _this;

            babelHelpers.classCallCheck(this, WWTForm);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "state", {
                city_id: "",
                city_name: "",
                location_street_id: "",
                location_street_name: "",
                location_estate_number: "",
                location_apartment_number: "",
                isAddressWithoutStreet: false,
                isAddressWithLessThanTwoStreets: false,
                isAddressWithoutEstateNumber: false,
                city_selected: false,
                street_selected: false
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "backgroundWwtComponent", {
                backgroundImage: "url(".concat(!_this.props.isModal && _this.props.descriptions.backgroundImageURL, ")"),
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover"
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "cityAutocompleteUrl", prepareUrl("/cbs/cityauto"));
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "streetAutocompleteUrl", prepareUrl("/cbs/streetauto"));
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "onCitySelect", function(data) {
                if (data && data.item) {
                    _this.setState({
                        city_id: data.item.value,
                        city_name: data.item.label,
                        location_street_id: '',
                        location_street_name: '',
                        location_estate_number: '',
                        location_apartment_number: '',
                        available_apartments: []
                    });

                    OPL.UI.fire(OPL.UI.EVENTS.modules.autocomplete.querydata, {
                        "city_id": data.item.value
                    }, 'location_street');

                    _this.handleAddressWithoutStreet();

                    _this.focusOnStreet();
                }
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "onStreetSelect", function(data) {
                if (data) {
                    _this.setState({
                        location_street_id: data.item.value,
                        location_street_name: data.item.label,
                        available_apartments: []
                    });
                }

                $("#location_estate_number:visible").focus();
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "equalToStateAddress", function(fbbAddress) {
                var stateAddressExtractors = {
                    city: function city(a) {
                        return a.city_id;
                    },
                    street: function street(a) {
                        return a.location_street_id;
                    },
                    streetNo: function streetNo(a) {
                        return a.location_estate_number;
                    },
                    apartmentNo: function apartmentNo(a) {
                        return a.location_apartment_number;
                    }
                };
                var fbbAddressExtractors = {
                    city: function city(a) {
                        return a.cityId;
                    },
                    street: function street(a) {
                        return a.streetId;
                    },
                    streetNo: function streetNo(a) {
                        return a.line2;
                    },
                    apartmentNo: function apartmentNo(a) {
                        return a.appartmentNo;
                    }
                };

                function toCanonical(addr, extractors) {
                    var ret = {};
                    Object.keys(extractors).forEach(function(extractorName) {
                        var v = extractors[extractorName](addr);
                        ret[extractorName] = v ? "" + v : null;
                    });
                    return ret;
                }

                var a1 = toCanonical(_this.state, stateAddressExtractors);
                var a2 = toCanonical(fbbAddress, fbbAddressExtractors);
                return JSON.stringify(a1) === JSON.stringify(a2);
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "isWWW", function() {
                return _this.props.channels && _this.props.channels.sales == 'WWW';
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "shouldShowWWTConfirmationModal", function() {
                if (_this.isWWW() && _this.props.fbbServices) {
                    var fbbAddresses = _this.props.fbbServices.map(function(fb) {
                        return fb.addressData;
                    });

                    return fbbAddresses.some(_this.equalToStateAddress);
                } else {
                    return false;
                }
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "_pickCity", function(e) {
                _this.setState({
                    city_name: e.value,
                    city_id: "",
                    location_street_id: "",
                    location_street_name: ""
                });
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "_pickStreet", function(e) {
                _this.setState({
                    location_street_name: e.value,
                    location_street_id: ""
                });
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "_onChangeEstateNumber", function(e) {
                _this.setState({
                    location_estate_number: e.value
                });
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "_onChangeApartmentNumber", function(e) {
                _this.setState({
                    location_apartment_number: e.value
                });
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "_handleSubmitWithConfirmationModal", function(e) {
                e.preventDefault();

                if (_this.props.onSubmit) {
                    return _this.props.onSubmit(_this.state.city_id, _this.state.location_street_id, _this.state.location_estate_number, _this.state.location_apartment_number, _this.state.city_name, _this.state.location_street_name);
                }

                if (_this.shouldShowWWTConfirmationModal()) {
                    _ConfirmWWTPopup.default.open({
                        onClickConfirm: _this._handleSubmit,
                        onClickDecline: function onClickDecline() {
                            return _this.props.resetWWTAddress();
                        }
                    });
                } else {
                    _this._handleSubmit();
                }
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "_handleSubmit", function() {
                if (_validators.wwtValidator["wwtAddressValidator"](_this.state.location_estate_number).length > 0) {
                    var message = _validators.wwtValidator["wwtAddressValidator"](_this.state.location_estate_number)[0].message;

                    _this.props.openWwtValidationModal(true, message);

                    return;
                } else if (_validators.wwtValidator["wwtAddressValidator"](_this.state.location_apartment_number).length > 0) {
                    var _message = _validators.wwtValidator["wwtAddressValidator"](_this.state.location_apartment_number)[0].message;

                    _this.props.openWwtValidationModal(true, _message);

                    return;
                }

                if (!_this.props.onSubmitVerification()) {
                    return;
                }

                if (_this.state.city_id && (_this.state.isAddressWithLessThanTwoStreets || _this.state.location_street_id) && _this.state.location_estate_number) {
                    _this.props.getZipCodeFromWWT(_this.state.city_id, _this.state.city_name, !!_this.state.location_street_id ? _this.state.location_street_id : null, !!_this.state.location_street_name ? _this.state.location_street_name : '', _this.state.location_estate_number, _this.state.isAddressWithoutApartmentNumber ? null : _this.state.location_apartment_number);
                }
            });
            var wwt = props.wwt;
            _this.state = {
                city_id: wwt.cityId,
                city_name: wwt.cityName,
                location_street_id: wwt.streetId,
                location_street_name: wwt.streetName,
                location_estate_number: wwt.streetNumber,
                location_apartment_number: wwt.apartmentNumber,
                available_apartments: wwt.availableApartments
            };
            return _this;
        }

        babelHelpers.createClass(WWTForm, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (this.props.wwtValidationModalState !== nextProps.wwtValidationModalState) {
                    //Perhaps not the greatest workaround ever, but looks like it works.
                    return;
                }

                var wwt = nextProps.wwt;
                this.setState({
                    city_id: wwt.cityId,
                    city_name: wwt.cityName,
                    location_street_id: wwt.streetId,
                    location_street_name: wwt.streetName,
                    location_estate_number: wwt.streetNumber,
                    location_apartment_number: wwt.apartmentNumber,
                    available_apartments: wwt.availableApartments
                });
            }
        }, {
            key: "clearInputs",
            value: function clearInputs() {
                this.setState({
                    city_id: "",
                    city_name: "",
                    location_street_id: "",
                    location_street_name: "",
                    location_estate_number: "",
                    location_apartment_number: "",
                    isAddressWithoutEstateNumber: false,
                    available_apartments: []
                });
            }
        }, {
            key: "setAddressWithoutApartmentNumber",
            value: function setAddressWithoutApartmentNumber(event) {
                this.setState({
                    isAddressWithoutApartmentNumber: event.target.checked
                });
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                _ConfirmWWTPopup.default.initialize();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                if (prevState.isAddressWithLessThanTwoStreets && !this.state.isAddressWithLessThanTwoStreets) {
                    this.focusOnStreet();
                }

                if (!prevState.isAddressWithLessThanTwoStreets && this.state.isAddressWithLessThanTwoStreets) {
                    this.focusOnEstateNo();
                }

                if (this.props.showWWTModal && !prevProps.showWWTModal || this.props.showWwtComponent && !prevProps.showWwtComponent) {
                    this.clearInputs();
                }
            }
        }, {
            key: "focusOnStreet",
            value: function focusOnStreet() {
                $(this.wrapperRef).find("#location_street").focus();
            }
        }, {
            key: "focusOnEstateNo",
            value: function focusOnEstateNo() {
                $(this.wrapperRef).find("#location_estate_number").focus();
            }
        }, {
            key: "handleAddressWithoutStreet",
            value: function handleAddressWithoutStreet() {
                var _this2 = this;

                var data = {
                    filter: {
                        city_id: this.state.city_id
                    },
                    html: " "
                };
                (0, _OraApiUtils.post)(this.streetAutocompleteUrl, JSON.stringify(data)).then(function(response) {
                    if (response.length <= 1) {
                        _this2.setState({
                            isAddressWithoutStreet: response.length < 1,
                            isAddressWithLessThanTwoStreets: true
                        });

                        var select = _this2.createSelect(response[0]);

                        _this2.onStreetSelect(select);
                    } else {
                        if (_this2.state.isAddressWithLessThanTwoStreets) {
                            _this2.focusOnStreet();
                        }

                        _this2.setState({
                            isAddressWithoutStreet: false,
                            isAddressWithLessThanTwoStreets: false
                        });
                    }
                });
            }
        }, {
            key: "onCityBlur",
            value: function onCityBlur() {
                var _this3 = this;

                if (this.state.city_id) {
                    if (!this.state.location_street_id) {
                        this.focusOnStreet();
                    }

                    return;
                }

                var data = {
                    filter: "",
                    html: this.state.city_name
                };

                if (!!this.state.city_name) {
                    (0, _OraApiUtils.post)(this.cityAutocompleteUrl, JSON.stringify(data)).then(function(response) {
                        if (response) {
                            var select = _this3.createSelect(response[0]);

                            _this3.onCitySelect(select);
                        }
                    }).catch(function(err) {
                        return console.log("City autocomplete error ", err);
                    });
                }
            }
        }, {
            key: "onStreetBlur",
            value: function onStreetBlur() {
                var _this4 = this;

                if (this.state.location_street_id || !this.state.location_street_name) {
                    return;
                }

                var data = {
                    filter: {
                        city_id: this.state.city_id
                    },
                    html: this.state.location_street_name
                };

                if (!!this.state.city_name) {
                    (0, _OraApiUtils.post)(this.streetAutocompleteUrl, JSON.stringify(data)).then(function(response) {
                        if (response) {
                            var select = _this4.createSelect(response[0]);

                            _this4.onStreetSelect(select);
                        }
                    }).catch(function(err) {
                        return console.log("Street autocomplete error ", err);
                    });
                }
            }
        }, {
            key: "createSelect",
            value: function createSelect(res) {
                if (res) return {
                    item: {
                        label: res.name,
                        value: res.id
                    }
                };
                return null;
            }
        }, {
            key: "renderCityInput",
            value: function renderCityInput() {
                return /*#__PURE__*/ _react.default.createElement(_InputWithFloatingLabel.default, {
                    id: "city_id",
                    value: this.state.city_name,
                    required: true,
                    onChange: this._pickCity,
                    placeholder: this.props.descriptions.locationCityPlaceholder || "Miejscowość",
                    autocomplete: true,
                    autocompleteUrl: this.cityAutocompleteUrl,
                    onPick: this.onCitySelect,
                    onBlur: this.onCityBlur.bind(this),
                    focusOnMount: (this.props.showWWTModal || this.props.showWwtComponent || this.props.focusCityOnMount) && (!this.state.available_apartments || !this.state.available_apartments.length),
                    showValidation: !!this.state.city_name,
                    showErrors: true,
                    valid: !!this.state.city_id || !this.state.city_name,
                    errors: !!!this.state.city_id,
                    overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                });
            }
        }, {
            key: "renderStreetInput",
            value: function renderStreetInput() {
                return /*#__PURE__*/ _react.default.createElement(_InputWithFloatingLabel.default, {
                    id: "location_street",
                    value: this.state.location_street_name,
                    required: true,
                    onChange: this._pickStreet,
                    disabled: this.state.isAddressWithLessThanTwoStreets,
                    placeholder: this.props.descriptions.locationStreetPlaceholder || "Ulica",
                    autocomplete: true,
                    autocompleteUrl: this.streetAutocompleteUrl,
                    browserAutocomplete: "nope",
                    onPick: this.onStreetSelect.bind(this),
                    onBlur: this.onStreetBlur.bind(this),
                    showValidation: !!this.state.location_street_name,
                    showErrors: true,
                    valid: !!this.state.location_street_id || !this.state.location_street_name,
                    errors: !!!this.state.location_street_id,
                    overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                });
            }
        }, {
            key: "renderEstateInput",
            value: function renderEstateInput() {
                return /*#__PURE__*/ _react.default.createElement(_InputWithFloatingLabel.default, {
                    id: "location_estate_number",
                    value: this.state.location_estate_number,
                    required: true,
                    onChange: this._onChangeEstateNumber,
                    showValidation: !!this.state.location_estate_number,
                    showErrors: true,
                    valid: this.isEstateValid(),
                    errors: !!!this.state.location_estate_number,
                    placeholder: this.props.descriptions.locationEstateNumberPlaceholder || "Numer budynku",
                    browserAutocomplete: "nope",
                    overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                });
            }
        }, {
            key: "renderApartmentInput",
            value: function renderApartmentInput() {
                return /*#__PURE__*/ _react.default.createElement(_InputWithFloatingLabel.default, {
                    id: "location_apartment_number",
                    value: !!this.state.isAddressWithoutApartmentNumber ? "" : this.state.location_apartment_number,
                    onChange: this._onChangeApartmentNumber,
                    disabled: this.state.isAddressWithoutApartmentNumber,
                    showValidation: !!this.state.available_apartments && this.state.available_apartments.length > 0 || !!this.state.location_apartment_number,
                    showErrors: true,
                    valid: this.isApartmentValid(),
                    errors: !!!this.state.location_apartment_number,
                    placeholder: this.props.descriptions.locationApartmentNumberPlaceholder || "Numer lokalu",
                    browserAutocomplete: "nope",
                    overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                });
            }
        }, {
            key: "isEstateValid",
            value: function isEstateValid() {
                var reg = /^([0-9]+)(.*?)$/;
                if (reg.test(this.state.location_estate_number) === false) return false;
                return true;
            }
        }, {
            key: "isApartmentValid",
            value: function isApartmentValid() {
                if (this.mandatoryApartmentIsInvalid()) {
                    return false;
                }

                var reg = /^([0-9]+)(.*?)$/;

                if (reg.test(this.state.location_apartment_number) === false) {
                    return false;
                }

                return true;
            }
        }, {
            key: "mandatoryApartmentIsInvalid",
            value: function mandatoryApartmentIsInvalid() {
                return !!this.state.available_apartments && this.state.available_apartments.length > 0 && !this.state.location_apartment_number;
            }
        }, {
            key: "renderSubmitButton",
            value: function renderSubmitButton() {
                var setButtonDisable = false;

                if (this.state.isAddressWithoutStreet) {
                    setButtonDisable = this.props.wwt.zipCodeRequestState === _RequestState.RequestState.Waiting || _lodash.default.some([this.state.city_id, this.state.location_estate_number], function(field) {
                        return !field;
                    }) || !!this.state.location_street_name;
                } else {
                    setButtonDisable = _lodash.default.some([this.state.city_id, this.state.location_street_id, this.state.location_estate_number], function(field) {
                        return !field;
                    });
                }

                return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    id: "location_check_btn",
                    type: "primary",
                    className: "u-small-spacing-l u-no-padding-l u-no-padding-r u-text-center u-w-100",
                    onClick: this._handleSubmitWithConfirmationModal,
                    disabled: setButtonDisable
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.submitButton || "Autoryzuj"
                    }
                }));
            }
        }, {
            key: "renderAddressWithoutApartmentNumberChecbox",
            value: function renderAddressWithoutApartmentNumberChecbox() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleCheckbox, {
                    checked: this.state.isAddressWithoutApartmentNumber,
                    onChange: this.setAddressWithoutApartmentNumber.bind(this),
                    text: "Bez numeru lokalu"
                }));
            }
        }, {
            key: "renderNarrowModal",
            value: function renderNarrowModal() {
                var _this5 = this;

                //for pesel/address authorization methode
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-wwt-rwd u-padding-top-xl u-padding-l",
                    ref: function ref(_ref) {
                        return _this5.wrapperRef = _ref;
                    }
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5  u-spacing-l  g-white1-c"
                }, /*#__PURE__*/ _react.default.createElement("h6", null, "Wpisz adres instalacyjny")), /*#__PURE__*/ _react.default.createElement("form", {
                    id: "wwtFormTag",
                    name: "wwtFormTag",
                    onSubmit: this._handleSubmitWithConfirmationModal.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-top-m"
                }, this.renderCityInput()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-top-m "
                }, this.renderStreetInput()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-3 u-padding-top-m"
                }, this.renderEstateInput()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-3 u-padding-top-m"
                }, this.renderApartmentInput(), this.renderAddressWithoutApartmentNumberChecbox()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 u-padding-top-m u-small-padding-top-m  "
                }, this.renderSubmitButton())))));
            }
        }, {
            key: "renderModal",
            value: function renderModal() {
                var _this6 = this;

                if (this.props.isNarrow) {
                    return this.renderNarrowModal();
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-wwt-rwd u-padding-top-xl u-padding-xl",
                    ref: function ref(_ref2) {
                        return _this6.wrapperRef = _ref2;
                    }
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3  u-spacing-l"
                }, this.props.descriptions.headerForWWTComponent), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l u-large-hide"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--pin-clear g-icon--s g-white1-c u-inline-block u-spacing-right"
                }), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block g-white1-c u-vertical-middle"
                }, this.props.descriptions.getLocationFromMobile)), /*#__PURE__*/ _react.default.createElement("form", {
                    id: "wwtFormTag",
                    name: "wwtFormTag",
                    onSubmit: this._handleSubmitWithConfirmationModal.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-4  u-spacing-l"
                }, this.props.isModal && "Wyszukaj miejscowość wpisując nazwę", this.renderCityInput()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4  u-spacing-l"
                }, this.props.isModal && "Wyszukaj ulicę wpisując nazwę", this.renderStreetInput()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-2 u-spacing-l u-margin-top-l"
                }, this.renderEstateInput()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-2 u-spacing-l u-margin-top-l"
                }, this.renderApartmentInput(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleCheckbox, {
                    checked: this.state.isAddressWithoutApartmentNumber,
                    onChange: this.setAddressWithoutApartmentNumber.bind(this),
                    text: "Bez numeru lokalu"
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 l-col-medium-6 l-col-small-12 u-left"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--padlock g-icon--s   u-inline-block u-spacing-right "
                }), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-inline-block   u-vertical-middle u-text-decoration-none  "
                }, this.props.descriptions.padLockAnchor), /*#__PURE__*/ _react.default.createElement("span", {
                    "data-js-module": "core/modules/tooltips",
                    "data-js-options": "{\"trigger\": \"hover\", \"side\": \"top\", \"maxWidth\": 380}"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-tooltip__trigger g-icon g-icon--hint g-icon--xs-s  u-inline-block u-spacing-left  "
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-tooltip__content"
                }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.descriptions.tooltipContent)))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2 medium-offset-by-3 u-medium-right  u-large-right u-small-margin-top-l"
                }, this.renderSubmitButton())))));
            }
        }, {
            key: "render",
            value: function render() {
                if (this.props.isModal) {
                    return this.renderModal();
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    style: this.backgroundWwtComponent,
                    className: "opl-wwt-rwd u-padding-top-xl u-padding-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3  u-spacing-l  g-white1-c"
                }, this.props.descriptions.headerForWWTComponent), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l u-large-hide"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--pin-clear g-icon--s g-white1-c u-inline-block u-spacing-right"
                }), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block g-white1-c u-vertical-middle"
                }, this.props.descriptions.getLocationFromMobile)), /*#__PURE__*/ _react.default.createElement("form", {
                    id: "wwtFormTag",
                    name: "wwtFormTag",
                    onSubmit: this._handleSubmitWithConfirmationModal.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-3 u-spacing-l"
                }, this.renderCityInput()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-3 u-spacing-l "
                }, this.renderStreetInput()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-2 u-spacing-l"
                }, this.renderEstateInput()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-2 u-spacing-l"
                }, this.renderApartmentInput()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2 medium-offset-by-3 u-medium-right"
                }, this.renderSubmitButton())), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 u-left"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--padlock g-icon--s   u-inline-block u-spacing-right g-white1-c"
                }), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-inline-block   u-vertical-middle u-text-decoration-none  g-white1-c"
                }, this.props.descriptions.padLockAnchor), /*#__PURE__*/ _react.default.createElement("span", {
                    "data-js-module": "core/modules/tooltips",
                    "data-js-options": "{\"trigger\": \"hover\", \"side\": \"top\", \"maxWidth\": 380}"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-tooltip__trigger g-icon g-icon--hint g-icon--xs-s  u-inline-block u-spacing-left  g-white1-c"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-tooltip__content"
                }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.descriptions.tooltipContent))))))));
            }
        }], [{
            key: "getAddressFromData",
            value: function getAddressFromData(data) {
                return {
                    postalCode: data[0].zip,
                    cityId: data[0].placeId,
                    streetId: data[0].streetId
                };
            }
        }]);
        return WWTForm;
    }(_react.Component);

    babelHelpers.defineProperty(WWTForm, "propTypes", {
        component: _propTypes.default.string,
        descriptions: _propTypes.default.shape({
            backgroundImageURL: _propTypes.default.string,
            headerForWWTComponent: _propTypes.default.string,
            getLocationFromMobile: _propTypes.default.string,
            locationCityPlaceholder: _propTypes.default.string,
            locationStreetPlaceholder: _propTypes.default.string,
            streetReaderOnly: _propTypes.default.string,
            streetTooltipContent: _propTypes.default.string,
            locationEstateNumberPlaceholder: _propTypes.default.string,
            locationApartmentNumberPlaceholder: _propTypes.default.string,
            submitButton: _propTypes.default.string,
            padLockAnchor: _propTypes.default.string,
            tooltipContent: _propTypes.default.string
        }).isRequired,
        onSubmitVerification: _propTypes.default.func,
        postWwtCallback: _propTypes.default.func,
        postWWTCallBackParameter: _propTypes.default.object,
        wwt: _propTypes.default.object,
        getZipCodeFromWWT: _propTypes.default.func,
        resetWWTAddress: _propTypes.default.func,
        getSelectedWwtAddress: _propTypes.default.func,
        dispatchPostWwt: _propTypes.default.func
    });
    var _default = WWTForm;
    _exports.default = _default;
});
//# sourceMappingURL=WWTForm.js.map