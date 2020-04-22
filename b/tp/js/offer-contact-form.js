var agree = false;
var emailRegexp = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
var namePartRegexpForbidden = /([^\s,\-,\u0104,\u0105,\u0106,\u0107,\u0118,\u0119,\u0141,\u0142,\u0143,\u0144,\u00d3,\u00f3,\u015a,\u015b,\u0179,\u017a,\u017b,\u017c,a-zA-Z])/;
var phoneRegexp = /^[1-9]{1}[0-9]{0,8}$/;

var ignoreErase = true;
var timerId = null;

var contactHours = null;
var offers = null;

var templateNameParam = null;

valueChooser = function(flaga, id, objectTable, functionName) {
    ignoreEraseValues();

    var element = document.getElementById(id);
    if (flaga) {
        element.style.cursor = 'wait';
        var html = '';

        for (var key = 0; key < objectTable.length; key++) {
            html += '<div id="' + id + objectTable[key] + '" onclick="' + functionName + '(\'' + objectTable[key] + '\');showValue(\'' + objectTable[key] + '\',\'' + id + '\')" class="valuesList-position"><div class="one-value">' + objectTable[key] + '</div></div>';
        }

        element.innerHTML = html;
        element.style.display = 'inline';
        element.style.cursor = 'pointer';
    } else {
        ignoreErase = false;
        timerId = setTimeout('eraseValues("' + id + '")', 10);
    }
}

eraseValues = function(id) {
    if (!ignoreErase) {
        document.getElementById(id).style.display = 'none';
    }
}

showValue = function(value, id) {
    var dropDownListTitle = document.getElementById(id + '-button-text');
    if (dropDownListTitle != null && value != 'undefined') {
        dropDownListTitle.innerHTML = value;
    }
}

ignoreEraseValues = function() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
    ignoreErase = true;
}


setOffer = function(offer) {
    updateFormField('offer-input', offer);
}

setContactHours = function(ch) {
    updateFormField('contact-hours-input', ch);
}

updateFormField = function(field, value) {
    var elem = document.getElementById(field);
    if (elem) {
        elem.value = value;
    } else {
        //alert("no element " + field + "! Cannot update form!");
    }
}

trim = function(str, chars) {
    return ltrim(rtrim(str, chars), chars);
}

ltrim = function(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

rtrim = function(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

validateToken = function(writing) {
    clearError('token-errors');
    if (trim(document.getElementById('token-input').value).length == 0) {
        var msgEmpty = document.getElementById('token-empty-msg').innerHTML;
        showError('token-errors', msgEmpty);
        return false;
    }
    return true;
}

validateName = function(writing) {
    var msgEmpty = document.getElementById('name-empty-msg').innerHTML;
    var msgInvalid = document.getElementById('name-invalid-msg').innerHTML;
    return validateField('name-input', 'name', 'name-errors', msgInvalid, true, msgEmpty, writing);
}

validateEmail = function() {
    var msgInvalid = document.getElementById('email-invalid-msg').innerHTML;
    return validateField('email-input', 'email', 'email-errors', msgInvalid, false);
}

validatePhone = function(writing) {
    var msgEmpty = document.getElementById('phone-empty-msg').innerHTML;
    var msgInvalid = document.getElementById('phone-invalid-msg').innerHTML;
    return validateField('phone-input', 'phone', 'phone-errors', msgInvalid, true, msgEmpty, writing);
}

validateAgreement = function() {
    clearError('agreement-error-spot');
    if (!document.getElementById('agreement-checkbox').checked) {
        var agreementError = document.getElementById('agreement-empty-msg').innerHTML;
        showError('agreement-error-spot', agreementError);
        return false;
    }
    return true;
}

validateField = function(fieldId, type, errorSpot, errorMsg, mandatory, errorMsgEmpty, writing) {
    var input = document.getElementById(fieldId);

    if (!input) {
        return false;
    }

    var valid = false;
    var error = errorMsg;
    var value = trim(input.value);

    if (!value) {
        if (mandatory) {
            error = errorMsgEmpty;
        } else {
            valid = true;
        }
    } else if (type == 'name') {
        if (writing) {
            valid = !namePartRegexpForbidden.test(value);
        } else {
            var splited = value.split(/\s+/);
            if (splited.length >= 2) {
                valid = true;
                for (var i = 0; i < splited.length; i++) {
                    if (namePartRegexpForbidden.test(splited[i]) || splited[i].length == 0) {
                        valid = false;
                        break;
                    }
                }
            }
        }
    } else if (type == 'email') {
        valid = emailRegexp.test(value);
    } else if (type == 'phone') {
        valid = phoneRegexp.test(value);
        if (valid && !writing && value.length != 9) {
            valid = false;
        }
    }

    if (!valid) {
        showError(errorSpot, error);
    } else {
        clearError(errorSpot);
    }

    return valid;
}

reloadToken = function() {
    var currentDate = new Date();
    var children = document.getElementById('token-image').getElementsByTagName('img');
    children[0].src = '/prt/servlet/contactform/token/jpg?param=' + currentDate.getTime();
}

showError = function(parentId, text) {
    var html = '<div class=\"error-msg\"><div class=\"error-text\">' + text + '</div></div>';
    document.getElementById(parentId).innerHTML = html;
}

clearError = function(parentId) {
    document.getElementById(parentId).innerHTML = "";
}

clearAllErrors = function() {
    clearError('name-errors');
    clearError('email-errors');
    clearError('phone-errors');
    clearError('token-errors');
    clearError('agreement-error-spot');
}

checkAll = function() {
    var agreeOk = validateAgreement();
    var emailOk = true;
    if (document.getElementById('email-input').value) {
        emailOk = validateEmail();
    }
    var tokenOk = validateToken();
    var nameOk = validateName(false);
    var phoneOk = validatePhone(false);

    return agreeOk && emailOk && nameOk && phoneOk && tokenOk;
}

submitForm = function() {
    if (!checkAll()) {
        return;
    }
    var form = $('offer-contact-form');
    form.request({
        parameters: {
            templateName: templateNameParam,
            ajaxRequest: 'true'
        },
        onSuccess: function(transport) {
            var responseDiv = document.getElementById('offer-contact-form-body');
            responseDiv.innerHTML = transport.responseText;
            try {
                transport.responseText.evalScripts();
            } catch (e) {
                //
            }
        }
    });
}

updateOfferContactForm = function(template) {
    new Ajax.Request('/prt/pl/offer_contact_form', {
        method: 'get',
        parameters: {
            templateName: template
        },
        onSuccess: function(transport) {
            document.getElementById('offer-contact-form-box').innerHTML = '<div style="line-height:1px;">&nbsp;</div>' + transport.responseText;
            try {
                transport.responseText.evalScripts();
            } catch (e) {
                //
            }
        }
    });
}

if (offerContactFormName) {
    updateOfferContactForm(offerContactFormName);
}