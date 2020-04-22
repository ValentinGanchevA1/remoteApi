define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/modules/core/components/ui/Expander", "eshop/utils/OnlineUtils"], function(_exports, _reactRedux, _react, _Modal, _Expander, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
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

    //    USAGE
    //    <OraVasPacketPickerComponent /> - has to be mounted anywhere on the page (once!) and then:
    //    <p onClick={event => OraVasPacketPickerComponent.openPopup({ ...this.data(), submit: this.submit})}>wybierz</p>
    //
    //    submit(toAdd, toRemove, conflicts){
    //        alert(toAdd + '-' + selected + '-' + conflicts)
    //    }
    //
    //    data(){
    //        return {
    //            plan: {
    //                name: 'Testowy',
    //                capacity: 3
    //            },
    //            packets: [
    //                {
    //                    id: 'p1',
    //                    title: 'Paczka - 1',
    //                    weight: 1,
    //                    features: [
    //                        'feature - 1',
    //                        'feature - 2'
    //                    ],
    //                    moreFeatures: [
    //                        'add feature - 1',
    //                        'add feature - 2'
    //                    ]
    //                },
    //                {
    //                    id: 'p2',
    //                    title: 'Paczka - 2 - niby Office',
    //                    weight: 2,
    //                    warning: {
    //                        id : 'vas-in-cart-id',
    //                        name: 'Office'
    //                    },
    //                    features: [
    //                        'feature - 1',
    //                        'feature - 2'
    //                    ],
    //                    moreFeatures: [
    //                        'add feature - 1',
    //                        'add feature - 2'
    //                    ],
    //                    info: 'Office to dwie paczki',
    //                },
    //                {
    //                    id: 'p3',
    //                    title: 'Paczka - 3',
    //                    weight: 1,
    //                    features: [
    //                        'feature - 1',
    //                        'feature - 2'
    //                    ],
    //                    moreFeatures: [
    //                        'add feature - 1',
    //                        'add feature - 2'
    //                    ]
    //                },
    //                {
    //                    id: 'p4',
    //                    title: 'Paczka - 4',
    //                    weight: 1,
    //                    features: [
    //                        'feature - 1',
    //                        'feature - 2'
    //                    ],
    //                    moreFeatures: [
    //                        'add feature - 1',
    //                        'add feature - 2'
    //                    ]
    //                }
    //            ],
    //            selected:[
    //                'p1',
    //                'p4'
    //            ]
    //        }
    //    }
    var OraVasPacketPickerComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraVasPacketPickerComponent, _Component);

        var _super = _createSuper(OraVasPacketPickerComponent);

        function OraVasPacketPickerComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, OraVasPacketPickerComponent);
            _this = _super.call(this, props);
            _this.state = {
                showModal: false,
                selected: [],
                conflicts: []
            };
            _this.open = _this.open.bind(babelHelpers.assertThisInitialized(_this));
            _this.onClose = _this.onClose.bind(babelHelpers.assertThisInitialized(_this));
            _this.openData = {};
            _this.onSelect = _this.onSelect.bind(babelHelpers.assertThisInitialized(_this));
            _this.onUselect = _this.onUselect.bind(babelHelpers.assertThisInitialized(_this));
            _this.onSubmit = _this.onSubmit.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(OraVasPacketPickerComponent, [{
            key: "open",
            value: function open(data) {
                this.openData = data;
                this.setState({
                    showModal: true,
                    selected: this.openData.selected || [],
                    conflicts: [],
                    showHint: true
                });
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                if (!window.OraVasPacketPickerComponentOpenPopup) {
                    window.OraVasPacketPickerComponentOpenPopup = this.open;
                } else {
                    console.error("OraVasPacketPickerComponent should be mounted only once!");
                }
            }
        }, {
            key: "capacityCount",
            value: function capacityCount() {
                return this.openData && this.openData.plan && this.openData.plan.capacity || -1;
            }
        }, {
            key: "onClose",
            value: function onClose() {
                this.setState({
                    showModal: false
                });
            }
        }, {
            key: "onSelect",
            value: function onSelect(packetCode, conflictCode) {
                var selected = this.state.selected;
                var conflicts = this.state.conflicts;

                if (packetCode && !this.state.selected.find(function(s) {
                        return s === packetCode;
                    })) {
                    selected = selected.concat(packetCode);
                }

                if (conflictCode && !this.state.conflicts.find(function(s) {
                        return s === conflictCode;
                    })) {
                    conflicts = conflicts.concat(conflictCode);
                }

                this.setState({
                    showHint: true,
                    selected: selected,
                    conflicts: conflicts
                });
            }
        }, {
            key: "onUselect",
            value: function onUselect(packetCode, conflictCode) {
                var selected = packetCode ? this.state.selected.filter(function(s) {
                    return s !== packetCode;
                }) : this.state.selected;
                var conflicts = conflictCode ? this.state.conflicts.filter(function(c) {
                    return c !== conflictCode;
                }) : this.state.conflicts;
                this.setState({
                    showHint: false,
                    selected: selected,
                    conflicts: conflicts
                });
            }
        }, {
            key: "onSubmit",
            value: function onSubmit() {
                var _this2 = this;

                if (this.capacityCount() === usedCapacity(this.openData.packets, this.state.selected)) {
                    var toAdd = this.state.selected.filter(function(now) {
                        return !_this2.openData.selected.find(function(s) {
                            return s === now;
                        });
                    });
                    var toRemove = this.openData.selected.filter(function(now) {
                        return !_this2.state.selected.find(function(s) {
                            return s === now;
                        });
                    });
                    this.openData.submit(toAdd, toRemove, this.state.conflicts);
                    this.onClose();
                } else {
                    this.setState({
                        showHint: true
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "packet-picker-popup",
                    size: "narrow",
                    noPadding: true,
                    fullscreenMobile: true,
                    escapeClose: true,
                    showClose: true,
                    clickClose: true,
                    open: this.state.showModal,
                    onClose: this.onClose
                }, /*#__PURE__*/ _react.default.createElement(OraPacketPickerPopup, babelHelpers.extends({}, this.openData, {
                    selected: this.state.selected,
                    showHint: this.state.showHint,
                    onSelect: this.onSelect,
                    onUselect: this.onUselect,
                    onSubmit: this.onSubmit
                }, _OnlineUtils.default.extractObject(this.props.descriptions, "label.popup."))));
            }
        }], [{
            key: "openPopup",
            value: function openPopup(data) {
                if (window.OraVasPacketPickerComponentOpenPopup) {
                    window.OraVasPacketPickerComponentOpenPopup(data);
                } else {
                    console.error("OraVasPacketPickerComponent has not been mounted");
                }
            }
        }]);
        return OraVasPacketPickerComponent;
    }(_react.Component);

    _exports.default = OraVasPacketPickerComponent;

    var OraPacketPickerPopup = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(OraPacketPickerPopup, _Component2);

        var _super2 = _createSuper(OraPacketPickerPopup);

        function OraPacketPickerPopup(props) {
            var _this3;

            babelHelpers.classCallCheck(this, OraPacketPickerPopup);
            _this3 = _super2.call(this, props);
            _this3.toPacket = _this3.toPacket.bind(babelHelpers.assertThisInitialized(_this3));
            return _this3;
        }

        babelHelpers.createClass(OraPacketPickerPopup, [{
            key: "getPacketCountText",
            value: function getPacketCountText(idx) {
                switch (idx) {
                    case 1:
                        return "jedną paczkę";

                    case 2:
                        return "dwie paczki";

                    case 3:
                        return "trzy paczki";

                    case 4:
                        return "cztery paczki";

                    case 5:
                        return "pięć paczek";

                    case 6:
                        return "sześć paczek";

                    default:
                        return "-";
                }
            }
        }, {
            key: "toPacket",
            value: function toPacket(packetProps) {
                var isSelected = (this.props.selected || []).includes(packetProps.id);
                var isEnabled = usedCapacity(this.props.packets, this.props.selected) + packetProps.weight <= this.props.plan.capacity || isSelected;
                return /*#__PURE__*/ _react.default.createElement(Packet, babelHelpers.extends({
                    key: packetProps.id
                }, packetProps, {
                    enabled: isEnabled,
                    selected: isSelected,
                    onSelect: this.props.onSelect,
                    onUselect: this.props.onUselect,
                    conflictResolveMsg: this.props.conflictResolveMsg,
                    conflictMsgTemplate: this.props.conflictMsgTemplate
                }));
            }
        }, {
            key: "getTitle",
            value: function getTitle() {
                if (this.props.plan && this.props.plan.name) {
                    return this.props.titleTemplate.replace('%PLAN_NAME%', this.props.plan.name);
                }
            }
        }, {
            key: "getSubtitle",
            value: function getSubtitle() {
                if (this.props.plan && this.props.plan.capacity) {
                    return this.props.subtitleTemplate.replace('%AVAILABLE_PACKET_COUNT%', this.getPacketCountText(this.props.plan.capacity));
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-packet-box__modal--top u-padding g-white1-bgc"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "u-padding-all-l u-padding-top-xl"
                }, this.getTitle()), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-padding-all-l u-no-padding-top u-no-padding-bottom"
                }, this.getSubtitle())), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-packet-box__modal--center"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-packet-box__modal--center-content u-padding-top"
                }, this.props.packets && this.props.packets.map(this.toPacket))), /*#__PURE__*/ _react.default.createElement(Bottom, {
                    showHint: this.props.showHint,
                    chosenCount: usedCapacity(this.props.packets, this.props.selected),
                    capacity: this.props.plan && this.props.plan.capacity,
                    onSubmit: this.props.onSubmit,
                    hintSelectMoreTemplate: this.props.hintSelectMoreTemplate,
                    hintFull: this.props.hintFull
                }));
            }
        }]);
        return OraPacketPickerPopup;
    }(_react.Component);

    OraPacketPickerPopup.defaultProps = {
        titleTemplate: '%PLAN_NAME%. Wybierz paczki usług do planu.',
        subtitleTemplate: 'W tym planie możesz wybrać %AVAILABLE_PACKET_COUNT% usług z listy poniżej. Nie płacisz za nie dodatkowo, są już w cenie abonamentu. Co miesiąc możesz je zamienić na inne.',
        hintSelectMoreTemplate: 'Wybierz paczki (wybrano %USED_CAPACITY% z %AVAILABLE_PACKET_COUNT% dostępnych)',
        hintFull: 'Wybrałeś już maksymalną liczbę paczek. Jeśli chcesz dodać inną musisz najpierw odznaczyć jedną z aktualnie zaznaczonych.',
        conflictMsgTemplate: 'Wybrałeś już %CONFLICT_NAME% w usługach dodatkowych',
        conflictResolveMsg: 'Zamieniam usługę na paczkę'
    };

    var Packet = function Packet(props) {
        var sectionHeader = /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
            className: "js-expander__trigger"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "js-expander__trigger--hide"
        }, "Wi\u0119cej"), /*#__PURE__*/ _react.default.createElement("span", {
            className: "js-expander__trigger--show"
        }, "Zwi\u0144"), /*#__PURE__*/ _react.default.createElement("span", {
            className: "g-icon g-icon--arrow-down g-icon--xs u-padding-left-s"
        }));

        var beforeSelectWarning = !props.selected && !!props.warning;

        var onChange = function onChange(event) {
            if (event.target.checked) {
                props.onSelect(props.id);
            } else {
                props.onUselect(props.id, props.warning && props.warning.id);
            }
        };

        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-packet-box__checkbox u-padding-l" + (!props.enabled ? " disabled" : "") + (beforeSelectWarning ? " g-gray1-bg" : "")
        }, /*#__PURE__*/ _react.default.createElement("label", {
            className: "opl-checkbox opl-checkbox--red-disabled o-checkbox u-padding-l"
        }, /*#__PURE__*/ _react.default.createElement("input", {
            type: "checkbox",
            disabled: (!props.enabled || beforeSelectWarning) && "disabled",
            checked: props.selected,
            onChange: onChange
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "o-ci"
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "o-ci-label h4"
        }, props.title)), /*#__PURE__*/ _react.default.createElement("ul", {
            className: "opl-packet-box__checkbox--list u-padding"
        }, (props.features || []).map(function(f, idx) {
            return /*#__PURE__*/ _react.default.createElement("li", {
                key: "feature_" + idx
            }, f);
        }), props.moreFeatures && props.moreFeatures[0] && /*#__PURE__*/ _react.default.createElement(_Expander.Expander, null, /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
            header: sectionHeader,
            headerBelow: true
        }, /*#__PURE__*/ _react.default.createElement("ul", null, (props.moreFeatures || []).map(function(f, idx) {
            return /*#__PURE__*/ _react.default.createElement("li", {
                key: "moreFeatures_" + idx
            }, f);
        }))))), props.info && /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-margin-l u-padding-left-l-xl u-table"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "g-icon g-icon--info g-icon--xs-s u-padding-right u-table-cell u-vertical-middle" + (props.enabled ? " g-bluef-c" : "")
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-table-cell u-font-small u-font-bold u-vertical-middle"
        }, props.info)), beforeSelectWarning && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-msg opl-msg--warn-black opl-msg--context u-margin-l"
        }, /*#__PURE__*/ _react.default.createElement("p", null, props.conflictMsgTemplate.replace('%CONFLICT_NAME%', props.warning.name))), /*#__PURE__*/ _react.default.createElement("button", {
            className: "opl-btn o-btn opl-btn--small u-padding-left-xl u-padding-right-xl",
            disabled: !props.enabled && "disabled",
            onClick: function onClick() {
                return props.onSelect(props.id, props.warning.id);
            }
        }, props.conflictResolveMsg)));
    };

    var Bottom = function Bottom(props) {
        var completed = props.chosenCount === props.capacity;
        var hintSelectMore = props.hintSelectMoreTemplate.replace('%USED_CAPACITY%', props.chosenCount).replace('%AVAILABLE_PACKET_COUNT%', props.capacity);
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-packet-box__modal--bottom"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-all-l u-box-sizing u-w-100"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table u-margin-auto-l u-small-block"
        }, props.showHint && !completed && /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table-cell u-vertical-middle u-padding-right-l u-small-hide"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold u-inline-block u-margin-right"
        }, hintSelectMore)), props.showHint && completed && /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table-cell u-vertical-middle u-padding-right-l u-small-block u-small-no-padding-r"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-msg opl-msg--info opl-msg--context u-inline-block"
        }, /*#__PURE__*/ _react.default.createElement("p", null, props.hintFull))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table-cell u-vertical-middle u-small-block u-small-margin-top-l"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: "opl-btn opl-btn--primary opl-btn--medium o-btn u-padding-right-l-xl u-padding-left-l-xl",
            onClick: props.onSubmit
        }, "Gotowe")))));
    };

    var usedCapacity = function usedCapacity(packets, selected) {
        return (packets || []).filter(function(p) {
            return selected && !!selected.includes(p.id);
        }).map(function(p) {
            return p.weight || 0;
        }).reduce(function(a, b) {
            return a + b;
        }, 0);
    };
});
//# sourceMappingURL=OraVasPacketPickerComponent.js.map