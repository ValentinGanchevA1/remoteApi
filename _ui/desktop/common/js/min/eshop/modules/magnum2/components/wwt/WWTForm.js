define(["exports", "react", "prop-types", "../../../../components/OraCommonComponents", "../../../core/constants/RequestState", "../InputWithFloatingLabel", "eshop/modules/checkout/validators", "eshop/flux/utils/OraApiUtils", "eshop/modules/magnum2/components/wwt/ConfirmWWTPopup", "lodash"], function(e, i, t, s, n, r, o, c, u, d) {
    "use strict";

    function m(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.prepareUrl = void 0, i = babelHelpers.interopRequireWildcard(i), t = babelHelpers.interopRequireDefault(t), r = babelHelpers.interopRequireDefault(r), u = babelHelpers.interopRequireDefault(u), d = babelHelpers.interopRequireDefault(d);

    function p(e) {
        return bsfContextPath + ("undefined" != typeof prefixWWW ? prefixWWW : "") + e
    }
    e.prepareUrl = p;
    var a = function(e) {
        babelHelpers.inherits(l, e);
        var a = m(l);

        function l(e) {
            var i;
            babelHelpers.classCallCheck(this, l), i = a.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "state", {
                city_id: "",
                city_name: "",
                location_street_id: "",
                location_street_name: "",
                location_estate_number: "",
                location_apartment_number: "",
                isAddressWithoutStreet: !1,
                isAddressWithLessThanTwoStreets: !1,
                isAddressWithoutEstateNumber: !1,
                city_selected: !1,
                street_selected: !1
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "backgroundWwtComponent", {
                backgroundImage: "url(".concat(!i.props.isModal && i.props.descriptions.backgroundImageURL, ")"),
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover"
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "cityAutocompleteUrl", p("/cbs/cityauto")), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "streetAutocompleteUrl", p("/cbs/streetauto")), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "onCitySelect", function(e) {
                e && e.item && (i.setState({
                    city_id: e.item.value,
                    city_name: e.item.label,
                    location_street_id: "",
                    location_street_name: "",
                    location_estate_number: "",
                    location_apartment_number: "",
                    available_apartments: []
                }), OPL.UI.fire(OPL.UI.EVENTS.modules.autocomplete.querydata, {
                    city_id: e.item.value
                }, "location_street"), i.handleAddressWithoutStreet(), i.focusOnStreet())
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "onStreetSelect", function(e) {
                e && i.setState({
                    location_street_id: e.item.value,
                    location_street_name: e.item.label,
                    available_apartments: []
                }), $("#location_estate_number:visible").focus()
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "equalToStateAddress", function(e) {
                function t(a, l) {
                    var i = {};
                    return Object.keys(l).forEach(function(e) {
                        var t = l[e](a);
                        i[e] = t ? "" + t : null
                    }), i
                }
                var a = t(i.state, {
                        city: function(e) {
                            return e.city_id
                        },
                        street: function(e) {
                            return e.location_street_id
                        },
                        streetNo: function(e) {
                            return e.location_estate_number
                        },
                        apartmentNo: function(e) {
                            return e.location_apartment_number
                        }
                    }),
                    l = t(e, {
                        city: function(e) {
                            return e.cityId
                        },
                        street: function(e) {
                            return e.streetId
                        },
                        streetNo: function(e) {
                            return e.line2
                        },
                        apartmentNo: function(e) {
                            return e.appartmentNo
                        }
                    });
                return JSON.stringify(a) === JSON.stringify(l)
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "isWWW", function() {
                return i.props.channels && "WWW" == i.props.channels.sales
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "shouldShowWWTConfirmationModal", function() {
                return !(!i.isWWW() || !i.props.fbbServices) && i.props.fbbServices.map(function(e) {
                    return e.addressData
                }).some(i.equalToStateAddress)
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "_pickCity", function(e) {
                i.setState({
                    city_name: e.value,
                    city_id: "",
                    location_street_id: "",
                    location_street_name: ""
                })
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "_pickStreet", function(e) {
                i.setState({
                    location_street_name: e.value,
                    location_street_id: ""
                })
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "_onChangeEstateNumber", function(e) {
                i.setState({
                    location_estate_number: e.value
                })
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "_onChangeApartmentNumber", function(e) {
                i.setState({
                    location_apartment_number: e.value
                })
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "_handleSubmitWithConfirmationModal", function(e) {
                if (e.preventDefault(), i.props.onSubmit) return i.props.onSubmit(i.state.city_id, i.state.location_street_id, i.state.location_estate_number, i.state.location_apartment_number, i.state.city_name, i.state.location_street_name);
                i.shouldShowWWTConfirmationModal() ? u.default.open({
                    onClickConfirm: i._handleSubmit,
                    onClickDecline: function() {
                        return i.props.resetWWTAddress()
                    }
                }) : i._handleSubmit()
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i), "_handleSubmit", function() {
                if (0 < o.wwtValidator.wwtAddressValidator(i.state.location_estate_number).length) {
                    var e = o.wwtValidator.wwtAddressValidator(i.state.location_estate_number)[0].message;
                    i.props.openWwtValidationModal(!0, e)
                } else if (0 < o.wwtValidator.wwtAddressValidator(i.state.location_apartment_number).length) {
                    var t = o.wwtValidator.wwtAddressValidator(i.state.location_apartment_number)[0].message;
                    i.props.openWwtValidationModal(!0, t)
                } else i.props.onSubmitVerification() && i.state.city_id && (i.state.isAddressWithLessThanTwoStreets || i.state.location_street_id) && i.state.location_estate_number && i.props.getZipCodeFromWWT(i.state.city_id, i.state.city_name, i.state.location_street_id ? i.state.location_street_id : null, i.state.location_street_name ? i.state.location_street_name : "", i.state.location_estate_number, i.state.isAddressWithoutApartmentNumber ? null : i.state.location_apartment_number)
            });
            var t = e.wwt;
            return i.state = {
                city_id: t.cityId,
                city_name: t.cityName,
                location_street_id: t.streetId,
                location_street_name: t.streetName,
                location_estate_number: t.streetNumber,
                location_apartment_number: t.apartmentNumber,
                available_apartments: t.availableApartments
            }, i
        }
        return babelHelpers.createClass(l, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                if (this.props.wwtValidationModalState === e.wwtValidationModalState) {
                    var t = e.wwt;
                    this.setState({
                        city_id: t.cityId,
                        city_name: t.cityName,
                        location_street_id: t.streetId,
                        location_street_name: t.streetName,
                        location_estate_number: t.streetNumber,
                        location_apartment_number: t.apartmentNumber,
                        available_apartments: t.availableApartments
                    })
                }
            }
        }, {
            key: "clearInputs",
            value: function() {
                this.setState({
                    city_id: "",
                    city_name: "",
                    location_street_id: "",
                    location_street_name: "",
                    location_estate_number: "",
                    location_apartment_number: "",
                    isAddressWithoutEstateNumber: !1,
                    available_apartments: []
                })
            }
        }, {
            key: "setAddressWithoutApartmentNumber",
            value: function(e) {
                this.setState({
                    isAddressWithoutApartmentNumber: e.target.checked
                })
            }
        }, {
            key: "componentWillMount",
            value: function() {
                u.default.initialize()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e, t) {
                t.isAddressWithLessThanTwoStreets && !this.state.isAddressWithLessThanTwoStreets && this.focusOnStreet(), !t.isAddressWithLessThanTwoStreets && this.state.isAddressWithLessThanTwoStreets && this.focusOnEstateNo(), (this.props.showWWTModal && !e.showWWTModal || this.props.showWwtComponent && !e.showWwtComponent) && this.clearInputs()
            }
        }, {
            key: "focusOnStreet",
            value: function() {
                $(this.wrapperRef).find("#location_street").focus()
            }
        }, {
            key: "focusOnEstateNo",
            value: function() {
                $(this.wrapperRef).find("#location_estate_number").focus()
            }
        }, {
            key: "handleAddressWithoutStreet",
            value: function() {
                var a = this,
                    e = {
                        filter: {
                            city_id: this.state.city_id
                        },
                        html: " "
                    };
                (0, c.post)(this.streetAutocompleteUrl, JSON.stringify(e)).then(function(e) {
                    if (e.length <= 1) {
                        a.setState({
                            isAddressWithoutStreet: e.length < 1,
                            isAddressWithLessThanTwoStreets: !0
                        });
                        var t = a.createSelect(e[0]);
                        a.onStreetSelect(t)
                    } else a.state.isAddressWithLessThanTwoStreets && a.focusOnStreet(), a.setState({
                        isAddressWithoutStreet: !1,
                        isAddressWithLessThanTwoStreets: !1
                    })
                })
            }
        }, {
            key: "onCityBlur",
            value: function() {
                var a = this;
                if (this.state.city_id) this.state.location_street_id || this.focusOnStreet();
                else {
                    var e = {
                        filter: "",
                        html: this.state.city_name
                    };
                    this.state.city_name && (0, c.post)(this.cityAutocompleteUrl, JSON.stringify(e)).then(function(e) {
                        if (e) {
                            var t = a.createSelect(e[0]);
                            a.onCitySelect(t)
                        }
                    }).catch(function(e) {})
                }
            }
        }, {
            key: "onStreetBlur",
            value: function() {
                var a = this;
                if (!this.state.location_street_id && this.state.location_street_name) {
                    var e = {
                        filter: {
                            city_id: this.state.city_id
                        },
                        html: this.state.location_street_name
                    };
                    this.state.city_name && (0, c.post)(this.streetAutocompleteUrl, JSON.stringify(e)).then(function(e) {
                        if (e) {
                            var t = a.createSelect(e[0]);
                            a.onStreetSelect(t)
                        }
                    }).catch(function(e) {})
                }
            }
        }, {
            key: "createSelect",
            value: function(e) {
                return e ? {
                    item: {
                        label: e.name,
                        value: e.id
                    }
                } : null
            }
        }, {
            key: "renderCityInput",
            value: function() {
                return i.default.createElement(r.default, {
                    id: "city_id",
                    value: this.state.city_name,
                    required: !0,
                    onChange: this._pickCity,
                    placeholder: this.props.descriptions.locationCityPlaceholder || "Miejscowość",
                    autocomplete: !0,
                    autocompleteUrl: this.cityAutocompleteUrl,
                    onPick: this.onCitySelect,
                    onBlur: this.onCityBlur.bind(this),
                    focusOnMount: (this.props.showWWTModal || this.props.showWwtComponent || this.props.focusCityOnMount) && (!this.state.available_apartments || !this.state.available_apartments.length),
                    showValidation: !!this.state.city_name,
                    showErrors: !0,
                    valid: !!this.state.city_id || !this.state.city_name,
                    errors: !this.state.city_id,
                    overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                })
            }
        }, {
            key: "renderStreetInput",
            value: function() {
                return i.default.createElement(r.default, {
                    id: "location_street",
                    value: this.state.location_street_name,
                    required: !0,
                    onChange: this._pickStreet,
                    disabled: this.state.isAddressWithLessThanTwoStreets,
                    placeholder: this.props.descriptions.locationStreetPlaceholder || "Ulica",
                    autocomplete: !0,
                    autocompleteUrl: this.streetAutocompleteUrl,
                    browserAutocomplete: "nope",
                    onPick: this.onStreetSelect.bind(this),
                    onBlur: this.onStreetBlur.bind(this),
                    showValidation: !!this.state.location_street_name,
                    showErrors: !0,
                    valid: !!this.state.location_street_id || !this.state.location_street_name,
                    errors: !this.state.location_street_id,
                    overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                })
            }
        }, {
            key: "renderEstateInput",
            value: function() {
                return i.default.createElement(r.default, {
                    id: "location_estate_number",
                    value: this.state.location_estate_number,
                    required: !0,
                    onChange: this._onChangeEstateNumber,
                    showValidation: !!this.state.location_estate_number,
                    showErrors: !0,
                    valid: this.isEstateValid(),
                    errors: !this.state.location_estate_number,
                    placeholder: this.props.descriptions.locationEstateNumberPlaceholder || "Numer budynku",
                    browserAutocomplete: "nope",
                    overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                })
            }
        }, {
            key: "renderApartmentInput",
            value: function() {
                return i.default.createElement(r.default, {
                    id: "location_apartment_number",
                    value: this.state.isAddressWithoutApartmentNumber ? "" : this.state.location_apartment_number,
                    onChange: this._onChangeApartmentNumber,
                    disabled: this.state.isAddressWithoutApartmentNumber,
                    showValidation: !!this.state.available_apartments && 0 < this.state.available_apartments.length || !!this.state.location_apartment_number,
                    showErrors: !0,
                    valid: this.isApartmentValid(),
                    errors: !this.state.location_apartment_number,
                    placeholder: this.props.descriptions.locationApartmentNumberPlaceholder || "Numer lokalu",
                    browserAutocomplete: "nope",
                    overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                })
            }
        }, {
            key: "isEstateValid",
            value: function() {
                return !1 !== /^([0-9]+)(.*?)$/.test(this.state.location_estate_number)
            }
        }, {
            key: "isApartmentValid",
            value: function() {
                if (this.mandatoryApartmentIsInvalid()) return !1;
                return !1 !== /^([0-9]+)(.*?)$/.test(this.state.location_apartment_number)
            }
        }, {
            key: "mandatoryApartmentIsInvalid",
            value: function() {
                return !!this.state.available_apartments && 0 < this.state.available_apartments.length && !this.state.location_apartment_number
            }
        }, {
            key: "renderSubmitButton",
            value: function() {
                var e = !1;
                return e = this.state.isAddressWithoutStreet ? this.props.wwt.zipCodeRequestState === n.RequestState.Waiting || d.default.some([this.state.city_id, this.state.location_estate_number], function(e) {
                    return !e
                }) || !!this.state.location_street_name : d.default.some([this.state.city_id, this.state.location_street_id, this.state.location_estate_number], function(e) {
                    return !e
                }), i.default.createElement(s.OraButton, {
                    id: "location_check_btn",
                    type: "primary",
                    className: "u-small-spacing-l u-no-padding-l u-no-padding-r u-text-center u-w-100",
                    onClick: this._handleSubmitWithConfirmationModal,
                    disabled: e
                }, i.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.submitButton || "Autoryzuj"
                    }
                }))
            }
        }, {
            key: "renderAddressWithoutApartmentNumberChecbox",
            value: function() {
                return i.default.createElement("div", {
                    className: "u-padding-top-m"
                }, i.default.createElement(s.OraSimpleCheckbox, {
                    checked: this.state.isAddressWithoutApartmentNumber,
                    onChange: this.setAddressWithoutApartmentNumber.bind(this),
                    text: "Bez numeru lokalu"
                }))
            }
        }, {
            key: "renderNarrowModal",
            value: function() {
                var t = this;
                return i.default.createElement("div", {
                    className: "opl-wwt-rwd u-padding-top-xl u-padding-l",
                    ref: function(e) {
                        return t.wrapperRef = e
                    }
                }, i.default.createElement("div", null, i.default.createElement("p", {
                    className: "h5  u-spacing-l  g-white1-c"
                }, i.default.createElement("h6", null, "Wpisz adres instalacyjny")), i.default.createElement("form", {
                    id: "wwtFormTag",
                    name: "wwtFormTag",
                    onSubmit: this._handleSubmitWithConfirmationModal.bind(this)
                }, i.default.createElement("div", {
                    className: "l-row"
                }, i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-top-m"
                }, this.renderCityInput()), i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-top-m "
                }, this.renderStreetInput()), i.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-3 u-padding-top-m"
                }, this.renderEstateInput()), i.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-3 u-padding-top-m"
                }, this.renderApartmentInput(), this.renderAddressWithoutApartmentNumberChecbox()), i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 u-padding-top-m u-small-padding-top-m  "
                }, this.renderSubmitButton())))))
            }
        }, {
            key: "renderModal",
            value: function() {
                var t = this;
                return this.props.isNarrow ? this.renderNarrowModal() : i.default.createElement("div", {
                    className: "opl-wwt-rwd u-padding-top-xl u-padding-xl",
                    ref: function(e) {
                        return t.wrapperRef = e
                    }
                }, i.default.createElement("div", {
                    className: "l-page-row"
                }, i.default.createElement("p", {
                    className: "h3  u-spacing-l"
                }, this.props.descriptions.headerForWWTComponent), i.default.createElement("div", {
                    className: "u-spacing-l u-large-hide"
                }, i.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--pin-clear g-icon--s g-white1-c u-inline-block u-spacing-right"
                }), i.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block g-white1-c u-vertical-middle"
                }, this.props.descriptions.getLocationFromMobile)), i.default.createElement("form", {
                    id: "wwtFormTag",
                    name: "wwtFormTag",
                    onSubmit: this._handleSubmitWithConfirmationModal.bind(this)
                }, i.default.createElement("div", {
                    className: "l-row"
                }, i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-4  u-spacing-l"
                }, this.props.isModal && "Wyszukaj miejscowość wpisując nazwę", this.renderCityInput()), i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4  u-spacing-l"
                }, this.props.isModal && "Wyszukaj ulicę wpisując nazwę", this.renderStreetInput()), i.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-2 u-spacing-l u-margin-top-l"
                }, this.renderEstateInput()), i.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-2 u-spacing-l u-margin-top-l"
                }, this.renderApartmentInput(), i.default.createElement("div", {
                    className: "u-padding-top-m"
                }, i.default.createElement(s.OraSimpleCheckbox, {
                    checked: this.state.isAddressWithoutApartmentNumber,
                    onChange: this.setAddressWithoutApartmentNumber.bind(this),
                    text: "Bez numeru lokalu"
                })))), i.default.createElement("div", {
                    className: "l-row"
                }, i.default.createElement("div", {
                    className: "l-col l-col-3 l-col-medium-6 l-col-small-12 u-left"
                }, i.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--padlock g-icon--s   u-inline-block u-spacing-right "
                }), i.default.createElement("p", {
                    className: "u-inline-block   u-vertical-middle u-text-decoration-none  "
                }, this.props.descriptions.padLockAnchor), i.default.createElement("span", {
                    "data-js-module": "core/modules/tooltips",
                    "data-js-options": '{"trigger": "hover", "side": "top", "maxWidth": 380}'
                }, i.default.createElement("span", {
                    className: "o-tooltip__trigger g-icon g-icon--hint g-icon--xs-s  u-inline-block u-spacing-left  "
                }), i.default.createElement("div", {
                    className: "o-tooltip__content"
                }, i.default.createElement("p", null, this.props.descriptions.tooltipContent)))), i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2 medium-offset-by-3 u-medium-right  u-large-right u-small-margin-top-l"
                }, this.renderSubmitButton())))))
            }
        }, {
            key: "render",
            value: function() {
                return this.props.isModal ? this.renderModal() : i.default.createElement("div", {
                    style: this.backgroundWwtComponent,
                    className: "opl-wwt-rwd u-padding-top-xl u-padding-xl"
                }, i.default.createElement("div", {
                    className: "l-page-row"
                }, i.default.createElement("p", {
                    className: "h3  u-spacing-l  g-white1-c"
                }, this.props.descriptions.headerForWWTComponent), i.default.createElement("div", {
                    className: "u-spacing-l u-large-hide"
                }, i.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--pin-clear g-icon--s g-white1-c u-inline-block u-spacing-right"
                }), i.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block g-white1-c u-vertical-middle"
                }, this.props.descriptions.getLocationFromMobile)), i.default.createElement("form", {
                    id: "wwtFormTag",
                    name: "wwtFormTag",
                    onSubmit: this._handleSubmitWithConfirmationModal.bind(this)
                }, i.default.createElement("div", {
                    className: "l-row"
                }, i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-3 u-spacing-l"
                }, this.renderCityInput()), i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-3 u-spacing-l "
                }, this.renderStreetInput()), i.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-2 u-spacing-l"
                }, this.renderEstateInput()), i.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-3 l-col-2 u-spacing-l"
                }, this.renderApartmentInput()), i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2 medium-offset-by-3 u-medium-right"
                }, this.renderSubmitButton())), i.default.createElement("div", {
                    className: "l-row"
                }, i.default.createElement("div", {
                    className: "l-col l-col-3 u-left"
                }, i.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--padlock g-icon--s   u-inline-block u-spacing-right g-white1-c"
                }), i.default.createElement("p", {
                    className: "u-inline-block   u-vertical-middle u-text-decoration-none  g-white1-c"
                }, this.props.descriptions.padLockAnchor), i.default.createElement("span", {
                    "data-js-module": "core/modules/tooltips",
                    "data-js-options": '{"trigger": "hover", "side": "top", "maxWidth": 380}'
                }, i.default.createElement("span", {
                    className: "o-tooltip__trigger g-icon g-icon--hint g-icon--xs-s  u-inline-block u-spacing-left  g-white1-c"
                }), i.default.createElement("div", {
                    className: "o-tooltip__content"
                }, i.default.createElement("p", null, this.props.descriptions.tooltipContent))))))))
            }
        }], [{
            key: "getAddressFromData",
            value: function(e) {
                return {
                    postalCode: e[0].zip,
                    cityId: e[0].placeId,
                    streetId: e[0].streetId
                }
            }
        }]), l
    }(i.Component);
    babelHelpers.defineProperty(a, "propTypes", {
        component: t.default.string,
        descriptions: t.default.shape({
            backgroundImageURL: t.default.string,
            headerForWWTComponent: t.default.string,
            getLocationFromMobile: t.default.string,
            locationCityPlaceholder: t.default.string,
            locationStreetPlaceholder: t.default.string,
            streetReaderOnly: t.default.string,
            streetTooltipContent: t.default.string,
            locationEstateNumberPlaceholder: t.default.string,
            locationApartmentNumberPlaceholder: t.default.string,
            submitButton: t.default.string,
            padLockAnchor: t.default.string,
            tooltipContent: t.default.string
        }).isRequired,
        onSubmitVerification: t.default.func,
        postWwtCallback: t.default.func,
        postWWTCallBackParameter: t.default.object,
        wwt: t.default.object,
        getZipCodeFromWWT: t.default.func,
        resetWWTAddress: t.default.func,
        getSelectedWwtAddress: t.default.func,
        dispatchPostWwt: t.default.func
    });
    var l = a;
    e.default = l
});
//# sourceMappingURL=WWTForm.js.map