define(["exports", "react", "eshop/components/OraCommonComponents", "./hoc/input", "./ui/Autocomplete"], function(_exports, _react, _OraCommonComponents, _input, _Autocomplete) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.LabeledKnaNumberInputWithErrors = _exports.LabeledRegonInputWithErrors = _exports.LabeledNipMobileInputWithErrors = _exports.LabeledNipInputWithErrors = _exports.LabeledPhoneNumberInputMobileWithErrors = _exports.LabeledPhoneNumberInputWithErrors = _exports.LabeledIdCensoredNumberWithErrors = _exports.LabeledIdNumberWithErrors = _exports.LabeledPeselWithErrors = _exports.LabeledAutocompleteWithErrors = _exports.LabeledCbsInputWithErrors = _exports.LabeledPostalCodeInputMobileWithErrors = _exports.LabeledPostalCodeInputWithErrors = _exports.LabeledInputWithErrors = _exports.withErrorMessageNotTimeouted = _exports.withErrorMessage = _exports.ErrorMessage = _exports.OraLabeledRegon = _exports.OraLabeledNipMobile = _exports.OraLabeledNip = _exports.OraLabeledKna = _exports.OraLabeledCensoredIdNumber = _exports.OraLabeledIdNumber = _exports.OraLabeledPhoneMobile = _exports.OraLabeledPhone = _exports.OraLabeledPesel = _exports.OraLabeledPostalCodeInputMobile = _exports.OraLabeledPostalCodeInput = _exports.OraLabeledInput = _exports.InputSerialNumber = _exports.OraKnaInput = _exports.InputWithKnaNumberMask = _exports.OraRegonInput = _exports.InputWithRegonMask = _exports.OraNipInput = _exports.OraNipMobileInput = _exports.InputWithNipMobileMask = _exports.InputWithNipMask = _exports.OraPhoneNumberInputMobile = _exports.OraPhoneNumberInput = _exports.InputWithPhoneNumberMobileMask = _exports.InputWithPhoneNumberMask = _exports.OraPostalCodeInputMobile = _exports.OraPostalCodeInput = _exports.InputWithPostalCodeMaskMobile = _exports.InputWithPostalCodeMask = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    //TODO: Component refactored to not duplicate styleguide mask module and handle blur event. Check LabeledInput.
    var InputWithPostalCodeMask = (0, _input.maskField)(function map(value) {
        return /^(\d{0,5}-?\d{0,5})$/.test(value) && value.replace("-", "").length <= 5;
    })(_OraCommonComponents.OraInput);
    _exports.InputWithPostalCodeMask = InputWithPostalCodeMask;
    var InputWithPostalCodeMaskMobile = (0, _input.maskField)(function(value) {
        return /^(\d{0,5}|)$/.test(value);
    })(_OraCommonComponents.OraInput);
    _exports.InputWithPostalCodeMaskMobile = InputWithPostalCodeMaskMobile;
    var OraPostalCodeInput = (0, _input.mapDisplayValue)({
        mapToDisplay: function mapToDisplay(value) {
            return /^\d{3,5}$/.test(value.replace("-", "")) ? value.replace("-", "").slice(0, 2) + "-" + value.replace("-", "").slice(2) : value;
        },
        mapToValue: function mapToValue(display) {
            return /^(\d{0,2})-?(\d{0,3})$/.test(display) ? display.replace("-", "") : display;
        }
    })(InputWithPostalCodeMask);
    _exports.OraPostalCodeInput = OraPostalCodeInput;
    var OraPostalCodeInputMobile = (0, _input.mapDisplayValue)({
        mapToDisplay: function mapToDisplay(value) {
            return value;
        },
        mapToValue: function mapToValue(display) {
            return display;
        }
    })(InputWithPostalCodeMaskMobile);
    _exports.OraPostalCodeInputMobile = OraPostalCodeInputMobile;
    var InputWithPhoneNumberMask = (0, _input.maskField)(function(value) {
        return /^(\d{1})|([\d\(]{1}\+48\) (\d{0,3}-?|\d{0,3})(\d{0,3}-?|\d{0,3})\d{0,3})$/.test(value);
    })(_OraCommonComponents.OraInput);
    _exports.InputWithPhoneNumberMask = InputWithPhoneNumberMask;
    var InputWithPhoneNumberMobileMask = (0, _input.maskField)(function(value) {
        return /^(\d{0,9}|)$/.test(value);
    })(_OraCommonComponents.OraInput);
    _exports.InputWithPhoneNumberMobileMask = InputWithPhoneNumberMobileMask;
    var OraPhoneNumberInput = (0, _input.mapDisplayValue)({
        mapToDisplay: function mapToDisplay(value) {
            return mapMsisdn(value);
        },
        mapToValue: function mapToValue(display) {
            return replace(display);
        }
    })(InputWithPhoneNumberMask);
    _exports.OraPhoneNumberInput = OraPhoneNumberInput;
    var OraPhoneNumberInputMobile = (0, _input.mapDisplayValue)({
        mapToDisplay: function mapToDisplay(value) {
            return value;
        },
        mapToValue: function mapToValue(display) {
            return display;
        }
    })(InputWithPhoneNumberMobileMask);
    _exports.OraPhoneNumberInputMobile = OraPhoneNumberInputMobile;
    var InputWithNipMask = (0, _input.maskField)(function(value) {
        return /^((\d{3}-?|\d{0,3})(\d{3}-?|\d{0,3})(\d{2}-?|\d{0,2})(\d{0,2}))$/.test(value);
    })(_OraCommonComponents.OraInput);
    _exports.InputWithNipMask = InputWithNipMask;
    var InputWithNipMobileMask = (0, _input.maskField)(function(value) {
        return /^(\d{0,10}|)$/.test(value);
    })(_OraCommonComponents.OraInput);
    _exports.InputWithNipMobileMask = InputWithNipMobileMask;
    var OraNipMobileInput = (0, _input.mapDisplayValue)({
        mapToDisplay: function mapToDisplay(value) {
            return value;
        },
        mapToValue: function mapToValue(display) {
            return display;
        }
    })(InputWithNipMobileMask);
    _exports.OraNipMobileInput = OraNipMobileInput;
    var OraNipInput = (0, _input.mapDisplayValue)({
        mapToDisplay: function mapToDisplay(value) {
            return mapNip(value);
        },
        mapToValue: function mapToValue(display) {
            return !display ? "" : display.replace(/-/g, "");
        }
    })(InputWithNipMask);
    _exports.OraNipInput = OraNipInput;

    function mapNip(value) {
        if (!value) return "";
        if (/^.{8,10}$/.test(value)) return value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6, 8) + "-" + value.slice(8);
        else if (/^.{6,8}$/.test(value)) return value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);
        else if (/^.{3,6}$/.test(value)) return value.slice(0, 3) + "-" + value.slice(3);
        else return value;
    }

    var InputWithRegonMask = (0, _input.maskField)(function(value) {
        return /^\d{0,14}$/.test(value);
    })(_OraCommonComponents.OraInput);
    _exports.InputWithRegonMask = InputWithRegonMask;
    var OraRegonInput = (0, _input.mapDisplayValue)({
        mapToDisplay: function mapToDisplay(value) {
            return !value ? "" : value;
        },
        mapToValue: function mapToValue(display) {
            return !display ? "" : display;
        }
    })(InputWithRegonMask);
    _exports.OraRegonInput = OraRegonInput;

    function mapMsisdn(value) {
        if (/^.{6,9}$/.test(value)) return "(+48) " + value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);
        else if (/^.{3,6}$/.test(value)) return "(+48) " + value.slice(0, 3) + "-" + value.slice(3);
        else if (/^.{1,3}$/.test(value)) return "(+48) " + value;
        else return value;
    }

    function replace(display) {
        return /^(.{2,17})$/.test(display) ? checkIfCopied(display) : display;
    }

    function checkIfCopied(display) {
        return /^([\d\(]{1}\+48\) (\d{3}-?|\d{0,3})(\d{3}-?|\d{0,3})\d{0,3})$/.test(display) ? display.replace(/\D/g, "").slice(2, display.replace(/\D/g, "").length) : display.replace(/\D/g, "");
    }

    function mapKna(value) {
        if (/^.{7,9}$/.test(value)) return value.slice(0, 2) + "-" + value.slice(2, 5) + "-" + value.slice(5, 7) + "-" + value.slice(7);
        else if (/^.{5,7}$/.test(value)) return value.slice(0, 2) + "-" + value.slice(2, 5) + "-" + value.slice(5);
        else if (/^.{2,5}$/.test(value)) return value.slice(0, 2) + "-" + value.slice(2);
        else if (/^.{1,2}$/.test(value)) return value;
        else return value;
    }

    var InputWithKnaNumberMask = (0, _input.maskField)(function(value) {
        value = value.replace(/_/g, "").replace(/-/g, "");
        return /^(\d{0,2}|\d{2}-?\d{0,3}-?\d{0,2}-?\d{0,2})$/.test(value);
    })(_OraCommonComponents.OraInput);
    _exports.InputWithKnaNumberMask = InputWithKnaNumberMask;
    var OraKnaInput = (0, _input.mapDisplayValue)({
        mapToDisplay: function mapToDisplay(value) {
            return mapKna(value);
        },
        mapToValue: function mapToValue(display) {
            return display ? display.replace(/_/g, "").replace(/-/g, "") : display;
        }
    })(InputWithKnaNumberMask);
    _exports.OraKnaInput = OraKnaInput;
    var InputSerialNumber;
    _exports.InputSerialNumber = InputSerialNumber;
    var OraLabeledInput = (0, _input.addLabelToInput)(_OraCommonComponents.OraInput);
    _exports.OraLabeledInput = OraLabeledInput;
    var OraLabeledPostalCodeInput = (0, _input.addLabelToInput)(OraPostalCodeInput);
    _exports.OraLabeledPostalCodeInput = OraLabeledPostalCodeInput;
    var OraLabeledPostalCodeInputMobile = (0, _input.addLabelToInput)(OraPostalCodeInputMobile);
    _exports.OraLabeledPostalCodeInputMobile = OraLabeledPostalCodeInputMobile;
    var OraLabeledPesel = (0, _input.addLabelToInputPesel)(_OraCommonComponents.OraInput);
    _exports.OraLabeledPesel = OraLabeledPesel;
    var OraLabeledPhone = (0, _input.addLabelToInputPhone)(OraPhoneNumberInput);
    _exports.OraLabeledPhone = OraLabeledPhone;
    var OraLabeledPhoneMobile = (0, _input.addLabelToInputPhone)(OraPhoneNumberInputMobile);
    _exports.OraLabeledPhoneMobile = OraLabeledPhoneMobile;
    var OraLabeledIdNumber = (0, _input.addLabelToInputIdNumber)(_OraCommonComponents.OraInput);
    _exports.OraLabeledIdNumber = OraLabeledIdNumber;
    var OraLabeledCensoredIdNumber = (0, _input.addLabelToInputCensoredIdNumber)(_OraCommonComponents.OraInput);
    _exports.OraLabeledCensoredIdNumber = OraLabeledCensoredIdNumber;
    var OraLabeledKna = (0, _input.addLabelToInputKna)(OraKnaInput);
    _exports.OraLabeledKna = OraLabeledKna;
    var OraLabeledNip = (0, _input.addLabelToInputNip)(OraNipInput);
    _exports.OraLabeledNip = OraLabeledNip;
    var OraLabeledNipMobile = (0, _input.addLabelToInputNip)(OraNipMobileInput);
    _exports.OraLabeledNipMobile = OraLabeledNipMobile;
    var OraLabeledRegon = (0, _input.addLabelToInput)(OraRegonInput); // Component mapping a validation error object (see eshop/modules/core/validation) to a message component

    _exports.OraLabeledRegon = OraLabeledRegon;

    var ErrorMessage = function ErrorMessage(_ref) {
        var level = _ref.level,
            message = _ref.message;
        return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraMessage, {
            type: level,
            text: message
        });
    };

    _exports.ErrorMessage = ErrorMessage;
    var withErrorMessage = (0, _input.appendErrors)(ErrorMessage);
    _exports.withErrorMessage = withErrorMessage;
    var withErrorMessageNotTimeouted = (0, _input.appendErrorsNotTimeouted)(ErrorMessage);
    _exports.withErrorMessageNotTimeouted = withErrorMessageNotTimeouted;
    var LabeledInputWithErrors = withErrorMessage(OraLabeledInput);
    _exports.LabeledInputWithErrors = LabeledInputWithErrors;
    var LabeledPostalCodeInputWithErrors = withErrorMessage(OraLabeledPostalCodeInput);
    _exports.LabeledPostalCodeInputWithErrors = LabeledPostalCodeInputWithErrors;
    var LabeledPostalCodeInputMobileWithErrors = withErrorMessage(OraLabeledPostalCodeInputMobile);
    _exports.LabeledPostalCodeInputMobileWithErrors = LabeledPostalCodeInputMobileWithErrors;
    var LabeledCbsInputWithErrors = withErrorMessage(OraLabeledPostalCodeInput);
    _exports.LabeledCbsInputWithErrors = LabeledCbsInputWithErrors;
    var LabeledAutocompleteWithErrors = withErrorMessage(_Autocomplete.LabeledAutocomplete);
    _exports.LabeledAutocompleteWithErrors = LabeledAutocompleteWithErrors;
    var LabeledPeselWithErrors = withErrorMessage(OraLabeledPesel);
    _exports.LabeledPeselWithErrors = LabeledPeselWithErrors;
    var LabeledIdNumberWithErrors = withErrorMessage(OraLabeledIdNumber);
    _exports.LabeledIdNumberWithErrors = LabeledIdNumberWithErrors;
    var LabeledIdCensoredNumberWithErrors = withErrorMessage(OraLabeledCensoredIdNumber);
    _exports.LabeledIdCensoredNumberWithErrors = LabeledIdCensoredNumberWithErrors;
    var LabeledPhoneNumberInputWithErrors = withErrorMessage(OraLabeledPhone);
    _exports.LabeledPhoneNumberInputWithErrors = LabeledPhoneNumberInputWithErrors;
    var LabeledPhoneNumberInputMobileWithErrors = withErrorMessage(OraLabeledPhoneMobile);
    _exports.LabeledPhoneNumberInputMobileWithErrors = LabeledPhoneNumberInputMobileWithErrors;
    var LabeledNipInputWithErrors = withErrorMessage(OraLabeledNip);
    _exports.LabeledNipInputWithErrors = LabeledNipInputWithErrors;
    var LabeledNipMobileInputWithErrors = withErrorMessage(OraLabeledNipMobile);
    _exports.LabeledNipMobileInputWithErrors = LabeledNipMobileInputWithErrors;
    var LabeledRegonInputWithErrors = withErrorMessage(OraLabeledRegon);
    _exports.LabeledRegonInputWithErrors = LabeledRegonInputWithErrors;
    var LabeledKnaNumberInputWithErrors = withErrorMessageNotTimeouted(OraLabeledKna);
    _exports.LabeledKnaNumberInputWithErrors = LabeledKnaNumberInputWithErrors;
});
//# sourceMappingURL=forms.js.map