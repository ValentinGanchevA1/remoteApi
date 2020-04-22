/*******************
 * ProductsCompared *
 *******************/


function buttonHideClick(name, button) {
    e = document.getElementById(name);
    if (e.style.display == 'none') {
        e.style.display = 'block';

        button.innerHTML = '<img src="/b/tp/static/minus.gif" alt=""/> ';
    } else {
        e.style.display = 'none';
        button.innerHTML = '<img src="/b/tp/static/plus.gif" alt=""/> ';
    }
}

function onlySameClick(checkBox, featureListSize) {

    for (var i = 1; i <= featureListSize; i++) {
        var table = document.getElementById('propertyTable_' + i);
        var rows = table.getElementsByTagName('tr');
        if (checkBox.checked == true) {
            for (var j = 0; j < rows.length; j++) {
                innerCels = rows[j].getElementsByTagName('td');
                if (checkCels(innerCels)) {
                    rows[j].style.display = 'none';
                }
            }
        } else {
            for (var j = 0; j < rows.length; j++)
                rows[j].style.display = '';
        }
    }
}

function checkCels(innerCels) {
    for (var i = 1; i < innerCels.length; i++) {
        for (var x = 1; x < innerCels.length; x++) {
            if (innerCels[i].innerHTML != innerCels[x].innerHTML)
                return false;
        }
    }
    return true;
}


/******************
 * Cart            *
 ******************/


<
!--
changed = 1;
loaded = 0;

function powiadom(page) {
    window.open("/buddy/?qr_page=" + page, "", 'location=0,toolbar=0,status=0,scrollbars=1,resizable=1,width=440,height=470,top=200,left=200');
}

function windowDruk(page) {
    window.open(page, "", 'location=0,toolbar=0,status=0,scrollbars=1,resizable=1,width=600,height=400,top=20,left=20');
}

function zwin() {
    document.getElementById('flashDivPuchar').style.height = "200px";
}

function rozwin() {
    document.getElementById('flashDivPuchar').style.height = "450px";
}

function buynow() {

    document.tp_cart.buy.value = 1;
    document.tp_cart.submit();
}

var old = '';

function checkNumber(zm, blur) {
    a = zm.value;
    b = '';
    l = false;
    if (old != a) {
        for (i = 0; i < a.length; i++) {
            if (!isNaN(a.substr(i, 1))) { //dostepne tylko cyfry
                b += a.substr(i, 1);
            } else {
                l = true;
            }
        }

        var nameBrowser;
        nameBrowser = navigator.appName;
        nameBrowser = nameBrowser.toLowerCase();
        if (nameBrowser == 'netscape' && l == true) {
            zm.value = b;
            if (blur == 0) {
                zm.blur();
            }
        } else if (nameBrowser != 'netscape') {
            zm.value = b;
        }
        old = b;
    }
}

function delItemFromCart(itemId) {
    var select = document.getElementById('removalIds');
    select.options[0] = new Option(itemId, itemId, false, true);
    //select.value = itemId;  select.options.length
    return true;
}

function autosubmit(e) {
    var select = document.getElementById('removalIds');
    select.options.length = 0;

    var key = (document.all) ? event.keyCode : e.which;
    if (key == 13) {
        document.getElementById('btn_przelicz_wartosc').click();
        return false;
    }
    return true;
}

function moveToPurchaseClick() {

    var select = document.getElementById('removalIds');
    select.options.length = 0;

    document.getElementById('btn_zamawiam').click();
    return false;
}

function orderByRelationshipClick() {

    var select = document.getElementById('removalIds');
    select.options.length = 0;


    var itemId = document.getElementById('skuidx').value;
    var elSelect = document.getElementById('catalogIds');
    if ((elSelect.value != null) && (elSelect.value != '')) {
        var elInputQuant = document.getElementById(itemId);
        var elInput = document.getElementById('ilosc');
        elInput.value = elInputQuant.value;
    }

    document.getElementById('btn_przelicz_wartosc').click();
    //var formCart = document.getElementById('cartForm2');
    //formCart.elements['btn_change_color2'].click();

    return false;
}

function updateQty() {
    var qty = document.getElementById(itemId);
}

function removeAndAddItemToOrder(itemId, commId, prodId) {

    var elInputQuant = document.getElementById(itemId);
    var elSelectSku = document.getElementById(itemId + '_sku');

    var elSelect = document.getElementById('catalogIds');
    elSelect.value = elSelectSku.value;

    var elSelect2 = document.getElementById('forChangeIds');
    elSelect2.value = commId;

    var elInputProdId = document.getElementById('col_prodID');
    elInputProdId.value = prodId;

    var elInput = document.getElementById('ilosc');
    elInput.value = elInputQuant.value;

    var select = document.getElementById('removalIds');
    select.options.length = 0;


    document.getElementById('btn_change_color2').click();


    return true;
}


function removeAndAddItemToOrder2(itemId, commId, prodId) {

    var elInputIdx = document.getElementById('skuidx');
    elInputIdx.value = itemId;


    var elInputQuant = document.getElementById(itemId);
    var elSelectSku = document.getElementById(itemId + '_sku');

    var elSelect = document.getElementById('catalogIds');
    elSelect.value = elSelectSku.value;

    var elSelect2 = document.getElementById('forChangeIds');
    elSelect2.value = commId;

    var elInputProdId = document.getElementById('col_prodID');
    elInputProdId.value = prodId;

    var elInput = document.getElementById('ilosc');
    elInput.value = elInputQuant.value;

    var select = document.getElementById('removalIds');
    select.options.length = 0;


    document.forms['cartForm'].btn_change_color2.click();
    return false;
}


function setItemsForChange(itemId) {
    var select = document.getElementById('forChangeIds');

    select.options[select.options.length] = new Option(itemId, itemId, false, true);
    removeAndAddItemToOrderClick();
}

function removeAndAddItemToOrderClick() {

    document.getElementById('btn_change_color').click();

    return false;
}

/*
//funkcja zwraca ture albo false w zaleznosci od tego czy po refreshu sku uleglo zmianie
function isChangedSKU(sku){
    //var elSelectedSku  = document.getElementById( itemId + '_sku' );
    var elFirstSku  = document.getElementById( 'firstSkuValue' );
    if (sku != elFirstSku.value){
        alert('wartosc sku sie zmienila');
    }else {
        alert('wartosc sku sie NIE zmienila');
    }
    return true;
}

//funcka ustawia pole firstSkuValue na wartosc wybranego SKU
function getFirstSKU(){
    var elSelectSku  = document.getElementById( itemId + '_sku' );
    return elSelectSku.value;
}

function changeCount( ){

    var itemId = document.getElementById( 'skuidx' ).value;
    var elSelect = document.getElementById('catalogIds');
    if (  (elSelect.value != null) && (elSelect.value != '' ) ) {
        var elInputQuant = document.getElementById( itemId );
        var elInput = document.getElementById('ilosc');
        elInput.value = elInputQuant.value;
    }
    return true;
}

*/
// -->