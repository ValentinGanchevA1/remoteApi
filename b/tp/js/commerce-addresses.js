/*******************
 * Addresses        *
 *******************/


<!--

var MappingAddress = new Array();
MappingAddress[0] = new Array("shippingName", "billingName", "name");
MappingAddress[1] = new Array("shippingStreet", "billingStreet", "street");
MappingAddress[2] = new Array("shippingHomeNo", "billingHomeNo", "homeNo");
MappingAddress[3] = new Array("shippingFlatNo", "billingFlatNo", "flatNo");
MappingAddress[4] = new Array("shippingPostalCode1", "billingPostalCode1", "postalCode1");
MappingAddress[5] = new Array("shippingPostalCode2", "billingPostalCode2", "postalCode2");
MappingAddress[6] = new Array("shippingCity", "billingCity", "city");
MappingAddress[7] = new Array("shippingProvince", "billingProvince", "province");


function copyItemFromAbove(name, val, state) {
    if (state == true) {
        var el = document.getElementById(name);
        el.value = document.getElementById(val).value;
        if ($(el).hasClassName('tp-selectbox-hidden')) {
            TP.CustomForms.Controls.selectOption(name, $(el).selectedIndex);
        }
    }
    document.getElementById(name).disabled = state;
}

function copyAddressFromAbove(check) {
    var state = check.checked;
    for (var i = 0; i < MappingAddress.length; i++) {
        copyItemFromAbove(MappingAddress[i][0], MappingAddress[i][1], state);
    }
    if (document.getElementById('savedShippingAddressName') != null)
        document.getElementById('savedShippingAddressName').disabled = state;
}


function copyItemFromList(name, val, address) {
    if (address)
        document.getElementById(name).value = address[val];
}

function copyAddressFromList(check) {
    var nick = document.getElementById("savedShippingAddressName").value;
    var address = ShippingAddress.findAddress(nick);

    if (address) {
        for (var i = 0; i < MappingAddress.length; i++) {
            copyItemFromList(MappingAddress[i][0], MappingAddress[i][2], address);
        }
    }

}


function createAddressNick(check) {
    if (check != null) {
        var state = check.checked;
        var nick = "";
        if (state == true) {
            var street = document.getElementById("shippingStreet").value;
            var homeNo = document.getElementById("shippingHomeNo").value;
            var flatNo = document.getElementById("shippingFlatNo").value;
            var city = document.getElementById("shippingCity").value;
            var shippingName = document.getElementById("shippingName").value;

            nick = city + ", " + street + " " + homeNo;
            if (flatNo != null && flatNo != "")
                nick = nick + "/" + flatNo;
            nick = nick + ", " + shippingName;
        }
        document.getElementById("newShippingAddressName").value = nick;
    }
}


function checkChange(input) {
    for (var i = 0; i < MappingAddress.length; i++) {
        if (document.getElementById("sameAsAbove").checked == true && input.id == MappingAddress[i][1]) {
            copyItemFromAbove(MappingAddress[i][0], MappingAddress[i][1], true);
        }
        if (document.getElementById("newShippingAddressSave") != null && document.getElementById("newShippingAddressSave").checked == true && input.id == MappingAddress[i][0]) {
            createAddressNick(document.getElementById("newShippingAddressSave"));
        }
    }
}

function required(name, state) {

    if (state == true) {

        document.getElementById(name).style.display = "inline";

    } else {

        document.getElementById(name).style.display = "none";
    }
}

function showCompanyRequired(check) {
    var state = (check.value == "company") ? true : false;

    required("requiredNip", state);
    required("requiredRegon", false);
}

function toggleRequired(name, state) {

    if (state == true) {

        $(name).up('.input-container').addClassName('required');

    } else {

        $(name).up('.input-container').removeClassName('required');
    }
}

function toggleCompanyRequired(check) {
    var state = (check.value == "company") ? true : false;

    toggleRequired("billingNip", state); // id inputa 
}


function updateOnReload() {

    copyAddressFromAbove(document.getElementById("sameAsAbove"));
    createAddressNick(document.getElementById("newShippingAddressSave"));
    var inputs = document.getElementsByTagName("INPUT");
    for (var i = 0; i < inputs.length; i++)
        if (inputs[i].id == 'clientTypeName' && inputs[i].checked == true)
            toggleCompanyRequired(inputs[i])
    var ctPerson = document.getElementById("clientTypePerson");
    var ctCompany = document.getElementById("clientTypeCompany");

    if (ctPerson.checked == false && ctCompany.checked == false)
        ctPerson.checked = true;
}


function ShippingAddress(nick, name, street, homeNo, flatNo, postalCode, city, province) {
    this.nick = nick;
    this.name = name;
    this.street = street;
    this.homeNo = homeNo;
    this.flatNo = flatNo;
    this.postalCode = postalCode;
    this.postalCode1 = postalCode.split("-")[0];
    this.postalCode2 = postalCode.split("-")[1];
    this.city = city;
    this.province = province;
}

ShippingAddress.addressArr = new Array();

ShippingAddress.addAddress = function(nick, name, street, homeNo, flatNo, postalCode, city, province) {
    var addr = new ShippingAddress(nick, name, street, homeNo, flatNo, postalCode, city, province);
    ShippingAddress.addressArr[ShippingAddress.addressArr.length] = addr;
}

ShippingAddress.findAddress = function(nick) {
    for (var i = 0; i < ShippingAddress.addressArr.length; i++)
        if (ShippingAddress.addressArr[i].nick == nick)
            return ShippingAddress.addressArr[i];
    return null;
}


//-->