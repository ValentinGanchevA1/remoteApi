ACC.checkoutaddress = {

    spinner: $("<img src='" + ACC.config.commonResourcePath + "/images/spinner.gif' />"),
    addressID: '',

    showAddressBook: function() {
        $(document).on("click", "#viewAddressBook", function() {
            var data = $("#savedAddressListHolder").html();
            $.colorbox({

                height: false,
                html: data,
                onComplete: function() {

                    $(this).colorbox.resize();
                }
            });

        })
    },

    showRemoveAddressConfirmation: function() {
        $(document).on("click", ".removeAddressButton", function() {
            var addressId = $(this).data("addressId");
            $.colorbox({
                inline: true,
                height: false,
                href: "#popup_confirm_address_removal_" + addressId,
                onComplete: function() {

                    $(this).colorbox.resize();
                }
            });

        })
    }
}

ACC.checkoutcartdetails = {

    bindAll: function() {
        this.bindCheckCartDetails();
    },

    bindCheckCartDetails: function() {
        $("#checkout-cart-details").hide();

        $("#checkout-cart-details-btn").click(function(e) {
            e.preventDefault();
            $("#checkout-cart-details").toggle();
            if ($("#checkout-cart-details").is(":visible")) {
                $("#checkout-cart-details-btn").html(hideText);
            } else {
                $("#checkout-cart-details-btn").html(showText);
            }
        });
    }
};

ACC.checkoutpickupdetails = {

    bindAll: function() {
        this.bindPickupDetails();
    },

    bindPickupDetails: function() {
        $(".pickupSummaryDetail").hide();

        $(".pickupSummaryDetailsButton").click(function(e) {
            e.preventDefault();
            $(this).parent().children(".pickupSummaryDetail").toggle();
            if ($(this).parent().children(".pickupSummaryDetail").is(":visible")) {
                $(this).html(hideText);
            } else {
                $(this).html(showText);
            }
        });
    }
};

ACC.deliverydescription = {

    bindAll: function() {
        this.bindDeliveryModeDes();
    },
    bindDeliveryModeDes: function() {

        var str = $(".deliverymode-description").text();
        if (str.length > 180) {
            str = str.substr(0, 180) + '&hellip;';
        }
        $(".deliverymode-description").html(str);

    }

};

ACC.hopdebug = {

    bindAll: function() {
        this.bindShowDebugMode();
    },

    bindShowDebugMode: function() {
        var debugModeEnabled = $('#hopDebugMode').data("hopDebugMode");

        if (!debugModeEnabled && !$('#showDebugPage').attr('value')) {
            $('#hostedOrderPagePostForm').submit();
        }
    }
};


ACC.payment = {

    bindUseThisSavedCardButton: function() {
        $(document).on("click", '.use_this_saved_card_button', function() {
            var paymentId = $(this).attr('data-payment');
            $.postJSON(setPaymentDetailsUrl, {
                paymentId: paymentId
            }, ACC.payment.handleSelectSavedCardSuccess);
            return false;
        });
    },

    handleSelectSavedCardSuccess: function(data) {
        if (data != null) {
            ACC.refresh.refreshPage(data);

            parent.$.colorbox.close();
        } else {
            alert("Failed to set payment details");
        }
    },

    refreshPaymentDetailsSection: function(data) {
        $('.summaryPayment').replaceWith($('#paymentSummaryTemplate').tmpl(data));

        //bind edit payment details button
        if (!typeof bindSecurityCodeWhatIs == 'undefined')
            bindSecurityCodeWhatIs();
    },

    showSavedPayments: function() {
        $(document).on("click", "#viewSavedPayments", function() {
            var data = $("#savedPaymentListHolder").html();
            $.colorbox({

                height: false,
                html: data,
                onComplete: function() {

                    $(this).colorbox.resize();
                }
            });

        })


    },

    bindPaymentCardTypeSelect: function() {
        $("#card_cardType").change(function() {
            var cardType = $(this).val();
            if (cardType == '024') {
                $('#startDate, #issueNum').show();
            } else {
                $('#startDate, #issueNum').hide();
            }
        });
    }
}

ACC.placeorder = {

    bindAll: function() {
        this.bindPlaceOrder();
        this.updatePlaceOrderButton();
        this.bindSecurityCodeWhatIs();
    },

    bindPlaceOrder: function() {
        $(".placeOrderWithSecurityCode").on("click", function() {
            ACC.common.blockFormAndShowProcessingMessage($(this));
            $(".securityCodeClass").val($("#SecurityCode").val());
            $("#placeOrderForm1").submit();
        });
    },

    updatePlaceOrderButton: function() {

        $(".place-order").removeAttr("disabled");
        // need rewrite /  class changes
    },

    bindSecurityCodeWhatIs: function() {
        $('.security_code_what').bt($("#checkout_summary_payment_div").data("securityWhatText"), {
            trigger: 'click',
            positions: 'bottom',
            fill: '#efefef',
            cssStyles: {
                fontSize: '11px'
            }
        });
    }
};

ACC.removepayment = {

    bindAll: function() {
        this.bindRemovePaymentDetails();
    },

    bindRemovePaymentDetails: function() {
        $('.submitRemove').on("click", function() {
            $('#removePaymentDetails' + $(this).attr('id')).submit();
        });
        $('.submitSetDefault').on("click", function() {
            $('#setDefaultPaymentDetails' + $(this).attr('id')).submit();
        });
    }

};

ACC.silentorderpost = {

    spinner: $("<img src='" + ACC.config.commonResourcePath + "/images/spinner.gif' />"),

    bindUseDeliveryAddress: function() {
        $('#useDeliveryAddress').on('change', function() {
            if ($('#useDeliveryAddress').is(":checked")) {
                var options = {
                    'countryIsoCode': $('#useDeliveryAddress').data('countryisocode'),
                    'useDeliveryAddress': true
                };
                ACC.silentorderpost.enableAddressForm();
                ACC.silentorderpost.displayCreditCardAddressForm(options, ACC.silentorderpost.useDeliveryAddressSelected);
                ACC.silentorderpost.disableAddressForm();
            } else {
                ACC.silentorderpost.clearAddressForm();
                ACC.silentorderpost.enableAddressForm();
            }
        });

        if ($('#useDeliveryAddress').is(":checked")) {
            ACC.silentorderpost.disableAddressForm();
        }
    },

    bindSubmitSilentOrderPostForm: function() {
        $('.submit_silentOrderPostForm').click(function() {
            ACC.common.blockFormAndShowProcessingMessage($(this));
            $('.billingAddressForm').filter(":hidden").remove();
            ACC.silentorderpost.enableAddressForm();
            $('#silentOrderPostForm').submit();
        });
    },

    bindCycleFocusEvent: function() {
        $('#lastInTheForm').blur(function() {
            $('#silentOrderPostForm [tabindex$="10"]').focus();
        })
    },

    isEmpty: function(obj) {
        if (typeof obj == 'undefined' || obj === null || obj === '') return true;
        return false;
    },

    disableAddressForm: function() {
        $('input[id^="address\\."]').prop('disabled', true);
        $('select[id^="address\\."]').prop('disabled', true);
    },

    enableAddressForm: function() {
        $('input[id^="address\\."]').prop('disabled', false);
        $('select[id^="address\\."]').prop('disabled', false);
    },

    clearAddressForm: function() {
        $('input[id^="address\\."]').val("");
        $('select[id^="address\\."]').val("");
    },

    useDeliveryAddressSelected: function() {
        if ($('#useDeliveryAddress').is(":checked")) {
            $('#address\\.country').val($('#useDeliveryAddress').data('countryisocode'));
            ACC.silentorderpost.disableAddressForm();
        } else {
            ACC.silentorderpost.clearAddressForm();
            ACC.silentorderpost.enableAddressForm();
        }
    },

    displayStartDateIssueNum: function() {
        var cardType = $('#silentOrderPostForm [tabindex="1"]').val();
        if (cardType == 'maestro' || cardType == 'switch') {
            $('#startDate').removeAttr('hidden');
            $('#issueNum').removeAttr('hidden');
        } else {
            $('#startDate').attr('hidden', 'true');
            $('#issueNum').attr('hidden', 'true');
        }
    },

    bindCreditCardAddressForm: function() {
        $('#billingCountrySelector :input').on("change", function() {
            var countrySelection = $(this).val();
            var options = {
                'countryIsoCode': countrySelection,
                'useDeliveryAddress': false
            };
            ACC.silentorderpost.displayCreditCardAddressForm(options);
        })
    },

    displayCreditCardAddressForm: function(options, callback) {
        $.ajax({
            url: ACC.config.encodedContextPath + '/checkout/multi/sop/billingaddressform',
            async: true,
            data: options,
            dataType: "html",
            beforeSend: function() {
                $('#billingAddressForm').html(ACC.silentorderpost.spinner);
            }
        }).done(function(data) {
            $("#billingAddressForm").html($(data).html());
            if (typeof callback == 'function') {
                callback.call();
            }
        });
    }
}

ACC.termsandconditions = {

    bindTermsAndConditionsLink: function() {
        $('.termsAndConditionsLink').click(function(e) {
            e.preventDefault();
            $.colorbox({
                href: $(this).attr("href"),
                onComplete: function() {
                    ACC.common.refreshScreenReaderBuffer();
                },
                onClosed: function() {
                    ACC.common.refreshScreenReaderBuffer();
                }
            });
        });
    }
}

ACC.updatebillingaddress = {
    bindCycleFocusEvent: function() {
        $('#lastInTheForm').blur(function() {
            $('#paymentDetailsForm [tabindex$="10"]').focus();
        })
    },

    updateBillingAddressForm: function() {
        var newAddress = $('#differentAddress').attr("checked");
        if (newAddress) {
            $("#newBillingAddressFields :input").removeAttr('disabled');
        } else {
            $("#newBillingAddressFields :input").attr('disabled', 'disabled');
        }
    }
}



$(document).ready(function() {
    $.fn.bt === undefined ? $.fn.bt = function() {} : false;

    with(ACC.checkoutaddress) {

        showAddressBook();
        showRemoveAddressConfirmation();
    }

    ACC.checkoutcartdetails.bindAll();

    ACC.checkoutpickupdetails.bindAll();

    ACC.deliverydescription.bindAll();

    ACC.hopdebug.bindAll();

    ACC.payment.bindPaymentCardTypeSelect();
    ACC.payment.showSavedPayments();
    if (!typeof bindSecurityCodeWhatIs == 'undefined') {
        bindSecurityCodeWhatIs();
    }

    ACC.placeorder.bindAll();

    ACC.removepayment.bindAll();

    with(ACC.silentorderpost) {
        $('#silentOrderPostForm [tabindex="1"]').change(function() {
            displayStartDateIssueNum();
        });
        bindUseDeliveryAddress()
        bindSubmitSilentOrderPostForm();
        bindCreditCardAddressForm();
    }

    with(ACC.termsandconditions) {
        bindTermsAndConditionsLink();
    }

    ACC.updatebillingaddress.updateBillingAddressForm();
    ACC.silentorderpost.displayStartDateIssueNum();

    if ($("#differentAddress").length > 0) {
        $("#differentAddress").click(function() {
            ACC.updatebillingaddress.updateBillingAddressForm();
        })
    } else {
        $("#newBillingAddressFields :input").removeAttr('disabled');
    }

    $('#paymentDetailsForm [tabindex="1"]').change(function() {
        ACC.silentorderpost.displayStartDateIssueNum();
    });

    ACC.updatebillingaddress.bindCycleFocusEvent();
});