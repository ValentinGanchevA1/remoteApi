function changeLink(location) {
    if (location != 'nullOption') {
        document.getElementById('useful').action = location;
        document.getElementById('useful').submit();
    }
}

function openPopUPRes(page, width, height) {
    msg = window.open(page, 'PopUp', 'width=' + width + ' ,height=' + height + ',directories=no,location=no,menubar=no,scrollbars=yes,resizable=yes,status=no,toolbar=no,systemmenu=no');
    msg.focus();
}

function openPopUPFlash(page, width, height) {
    msg = window.open(page, 'PopUp', 'width=' + width + ' ,height=' + height + ',directories=no,location=no,menubar=no,scrollbars=yes,resizable=no,status=no,toolbar=no,systemmenu=no');
    msg.focus();
}

function openPopUPNoScroll(page, width, height) {
    msg = window.open(page, 'PopUp', 'width=' + width + ' ,height=' + height + ',directories=no,location=no,menubar=no,scrollbars=no,resizable=no,status=no,toolbar=no,systemmenu=no');
    msg.focus();
}

function openPopUP(page) {
    msg = window.open(page, 'PopUp', 'width=616,height=600,directories=no,location=no,menubar=no,scrollbars=yes,resizable=no,status=no,toolbar=no,systemmenu=no');
    msg.focus();
}

function openPopUPAnnex(page) {
    msg = window.open(page, 'PopUp', 'width=656,height=600,directories=no,location=no,menubar=no,scrollbars=yes,resizable=no,status=no,toolbar=no,systemmenu=no');
    msg.focus();
}

var jest_flash = 0;

if (navigator.mimeTypes && navigator.mimeTypes['application/x-shockwave-flash'] && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
    if (navigator.plugins && navigator.plugins['Shockwave Flash'])
        jest_flash = 1;
} else if (navigator.userAgent && navigator.userAgent.indexOf('MSIE') >= 0 && (navigator.userAgent.indexOf('Windows 95') >= 0 || navigator.userAgent.indexOf('Windows 98') >= 0 || navigator.userAgent.indexOf('Windows NT') >= 0)) {
    document.write('<SCRIPT LANGUAGE=VBScript\> \n on error resume next \n jest_flash = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3")))\n if ( jest_flash <= 0 ) then jest_flash = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4")))\n if ( jest_flash <= 0 ) then jest_flash = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5")))\n if ( jest_flash <= 0 ) then jest_flash = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6")))\n if ( jest_flash <= 0 ) then jest_flash = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7")))\n </SCRIPT\> \n');
}

// Zwraca pozycje absolutna elementu
function getOffsetTopElement(element) {
    var coords = {
        x: 0,
        y: 0,
        h: 0,
        w: 0
    };
    coords.w = element.offsetWidth;
    coords.h = element.offsetHeight;
    while (element && element.tagName.toLowerCase() != 'body') {
        //	 element.style.border = 'solid 1px blue';
        //	 if(element.offsetParent) element.offsetParent.style.border = 'solid 1px red';
        coords.x += element.offsetLeft;
        //	  alert(element.offsetLeft+':'+coords.x+';'+element.offsetParent.tagName+':'+element.tagName);
        coords.y += element.offsetTop;
        element = element.offsetParent;
    }
    return coords;
}

//Ustawia dodatkowy layer na dokumencie i wywoluje polecenie drukowania
function prepareForPrint(id) {
    op = window.opera;
    if (op) {
        window.onload = window.print;
    } else {
        window.print();
    }
    document.getElementById(id).style.height = document.body.scrollHeight;

}


function showAllCompare() {
    $$('div.hide_box').each(function(div) {
        div.show();
        div.previous("table").down("a").innerHTML = '<img src="/b/tp/static/minus.gif" alt=""/> ';
    });
}

//Ogranicza mozliwosc wpisania do textarea wiecej niz n znakow
function limitText(area, chars) {
    area.value = area.value.slice(0, chars);
}

function writeToLayer(layer, value) {
    if (document.all) {
        document.all[layer].innerHTML = value;
    } else {
        over = document.getElementById(layer);
        range = document.createRange();
        range.setStartBefore(over);
        domfrag = range.createContextualFragment(value);
        while (over.hasChildNodes()) {
            over.removeChild(over.lastChild);
        }
        over.appendChild(domfrag);
    }
}

var alertVisible = false; // blokuje pojawianie się więcej niż jednego alerta
function countLength(length, textAreaObj, infoDiv, alertText) {
    var nBodyLength = textAreaObj.value.length;
    if (nBodyLength > length && !alertVisible) {
        alertVisible = true;
        alert(alertText);
        alertVisible = false;
        textAreaObj.value = textAreaObj.value.substring(0, length);
        nBodyLength = textAreaObj.value.length;
    }
    var counterData = length - nBodyLength;
    var info = (counterData >= 0) ? counterData : 0;
    writeToLayer(infoDiv, info);
}


/**
Funkcja sprawdza, czy dlugosc tekstu nie zostala przekroczona i ucina ew. nadwyzke.
**/
function countLengthNoInfo(length, textAreaObj) {
    var nBodyLength = textAreaObj.value.length;
    if (nBodyLength > length) {
        textAreaObj.value = textAreaObj.value.substring(0, length);
        nBodyLength = textAreaObj.value.length;
    }
}


/******************
 * ProcessRequest *
 ******************/

var NS = (document.layers) ? 1 : 0;
var NS6 = (document.getElementById) ? 1 : 0;
var IE = (document.all) ? 1 : 0;
var isIE = navigator.appVersion.match(/msie/i) ? 1 : 0;
var isIE50 = navigator.appVersion.match(/msie 5\.0/i) ? 1 : 0;

function getLayer(name) {
    if (name == undefined) return undefined;
    if (NS) {
        return document[name];
    } else if (NS6) {
        return document.getElementById(name);
    } else if (IE) {
        return document.all[name];
    }
}

function getLayerStyle(layer) {
    if (name == undefined) return undefined;
    if (NS) {
        return layer;
    } else if (NS6) {
        return layer.style;
    } else if (IE) {
        return layer.style;
    }
}

function createDivPr(style) {
    var DIV = document.createElement('DIV');
    DIV.className = style;
    getLayerStyle(DIV).visibility = 'hidden';
    return DIV;
}

var prDiv = 0;

function processRequest(elem, w, h, showNow) {
    if (!document.appendChild || !document.createElement) {
        return;
    }
    var layer = getLayer(elem);
    if (!prDiv) {
        // ustawiamy style dla div-a.  
        // Niestety nie mamy gdzie wrzucic do css.
        prDiv = createDivPr('processRequest');
        prDiv.style.textAlign = 'center';
        prDiv.style.backgroundColor = 'white';
        prDiv.style.position = 'absolute';
        prDiv.style.zIndex = '9';
        var img = document.createElement('IMG');
        img.src = '/b/tp/static/please_wait.gif';
        prDiv.appendChild(img);
        layer.appendChild(prDiv);
    }
    if (layer) {
        var pos = getOffsetTopElement(layer);
        var w_ = (w ? w : pos.w);
        var h_ = (h > pos.h ? h : pos.h);

        /* SALSA-3169 */
        if (document.getElementById('main-box')) {
            var mainPos = getOffsetTopElement(document.getElementById('main-box'));
            var footerPos = mainPos.y + mainPos.h;
            var maxHeight = footerPos - pos.y;
            if (maxHeight < h_ && maxHeight >= 0) {
                h_ = maxHeight;
            }
        }

        showDiv(prDiv, pos.x, pos.y, w_, h_);
        if (!showNow == true) {
            layer.style.display = "none";
        }
        prDiv.parentLayer = layer;
    }
}

function processRequestOff(elem) {
    var layer = getLayer(elem);
    if (prDiv) {
        getLayerStyle(prDiv).display = 'none';
        if (!elem) {
            prDiv.parentLayer.style.display = 'block';
        }
        showFormElements();
    }
    if (layer) {
        layer.style.display = "block";
    }
}

function showDiv(div, posX, posY, width, height) {
    //alert(posX+';'+posY+';'+width+';'+height);
    var divStyle = getLayerStyle(div);
    divStyle.position = 'absolute';
    //TPAS-23116
    //before : divStyle.left = posX + 'px';
    divStyle.left = 'auto';
    divStyle.top = posY + 'px';
    divStyle.width = width + 'px';
    divStyle.height = height + 'px';
    setupChilds(div);
    divStyle.visibility = 'visible';
    divStyle.display = 'block';
    hideFormElements(div);
}

function showDivZeroLeft(div, posX, posY, width, height) {
    //alert(posX+';'+posY+';'+width+';'+height);
    var divStyle = getLayerStyle(div);
    divStyle.position = 'absolute';
    //TPAS-23116
    //before : divStyle.left = posX + 'px';
    divStyle.left = 0;
    divStyle.top = posY + 'px';
    divStyle.width = width + 'px';
    divStyle.height = height + 'px';
    setupChilds(div);
    divStyle.visibility = 'visible';
    divStyle.display = 'block';
    hideFormElements(div);
}
/**
 * ustawia elementy po srodku wastwy na wysokosc
 */
function setupChilds(element) {
    if (element.hasChildNodes()) {
        var hm = element.offsetHeight / 2;
        var kids = element.childNodes;
        for (var i = 0; i < kids.length; i++) {
            var k = kids[i];
            var khm = k.offsetHeight / 2;
            var style = getLayerStyle(k);
            if (style) {
                style.position = 'relative';
                var h = hm - khm;
                if (document.getElementById('top-box') && h < 60) {
                    h = 60;
                }
                style.top = h + 'px';
            }
        }
    }
}

/**
 * Ukrywanie elementow formularza pod wastwa
 */
var formElementsOff = Array();

function hideFormElements(divHandler) {
    // dotyczy IE
    if (!IE) return;
    showFormElements()
    var tag = new Array();
    var e = 0;
    // tylko selecty wylaczamy.
    //      tag[e++] = document.getElementsByTagName('input');
    //      tag[e++] = document.getElementsByTagName('textarea');
    tag[e++] = document.getElementsByTagName('select');
    var elemPos = getOffsetTopElement(divHandler);
    formElementsOff = new Array();
    m = 0;
    for (k = 0; k < tag.length; k++) {
        for (i = 0; i < tag[k].length; i++) {
            offsetElement = getOffsetTopElement(tag[k][i]);
            if (offsetElement.y < elemPos.y + elemPos.h && offsetElement.y + offsetElement.h > elemPos.y && offsetElement.x < elemPos.x + elemPos.w && offsetElement.x + offsetElement.w > elemPos.x) {
                formElementsOff[m++] = tag[k][i];
                tag[k][i].style.visibility = 'hidden';
            }
        }
    }
}

function showFormElements() {
    if (!IE) return;
    for (k = 0; k < formElementsOff.length; k++) {
        formElementsOff[k].style.visibility = 'visible';
    }
    formElementsOff = Array();
}


var elementsInfoArray = Array();

function showButton(outerName, elemToShow) {
    var outer = elementsInfoArray[outerName];
    var showElem = elementsInfoArray[elemToShow];
    if (!showElem) {
        showElem = getLayer(elemToShow);
    }
    if (getLayerStyle(showElem).visibility == 'visible') {
        debug('element is visible');
        return;
    }
    if (!outer) {
        outer = getLayer(outerName);
        getLayerStyle(outer).position = 'relative';
        elementsInfoArray[outerName] = outer;
    }
    var outerHeight = outer.offsetHeight;
    var scrolled = outer.scrollTop;
    var scrollHeight = outer.scrollHeight;
    if (scrollHeight <= (scrolled + outerHeight)) {
        //    alert('hello:'+ document.all);
        debug('showEl');
        //        getLayerStyle(showElem).visibility = 'visible';
        getLayerStyle(showElem).backgroundImage = 'url(/b/static/button/akceptuje.gif)'
        showElem.removeAttribute('disabled');
    }
}
var debugOn = 0;
var debugI = 0;

function debug(text) {
    if (!debugOn) return;
    var debugElName = 'debug';
    var debugEl = elementsInfoArray[debugElName];
    if (!debugEl) {
        debugEl = getLayer(debugElName);
        elementsInfoArray[debugElName] = debugEl;
    }
    debugEl.value = debugI + ': ' + text + '\n' + debugEl.value;
    debugI += 1;
}

var nparam = '';

function openCalendar(fieldId) {
    var calWindow = window.open('/b/calendar/ecare_calendar.html', 'calendar', 'width=226,height=182,resizable=no,scrollbars=no');
    calWindow.focus();
    nparam = fieldId;
}


function topLayerStart() {
    var selectObjects = document.body.getElementsByTagName('select');
    if (selectObjects) {
        for (var i = 0; i < selectObjects.length; i++) {
            selectObjects[i].style.visibility = 'hidden';
        }
    }
}

function topLayerStop() {
    if (document.getElementById('toplayer')) {
        document.getElementById('toplayer').style.display = 'none';
    }
    var selectObjects = document.body.getElementsByTagName('select');
    if (selectObjects) {
        for (var i = 0; i < selectObjects.length; i++) {
            selectObjects[i].style.visibility = 'visible';
        }
    }
}

function autoTab(input, len, e, nextObj) {
    var keyCode = e.keyCode;
    var filter = [0, 8, 9, 16, 17, 18, 37, 38, 39, 40, 46];
    if (input.value.length >= len && !containsElement(filter, keyCode)) {
        //input.value = input.value.slice(0, len);
        if (document.getElementById(nextObj)) {
            document.getElementById(nextObj).focus();
        }
    }
}

function containsElement(arr, ele) {
    var found = false,
        index = 0;
    while (!found && index < arr.length)
        if (arr[index] == ele)
            found = true;
        else
            index++;
    return found;
}

function openNewWindow(page) {
    wnd = window.open(page, '_blank');
    wnd.focus();
}


// zmienia rozmiar czcionki w obszarze elementow znajdujacych sie 
// w tablicy fsElemIdTable, jesli takie pojawia sie na stronie
function changeFontSize(fs) {
    var fsElemIdTable = new Array('service-box', 'article-box', 'promotion-box');
    if (fsElemIdTable.length > 0) {
        for (i = 0; i < fsElemIdTable.length; i++) {
            if (document.getElementById(fsElemIdTable[i]) != null) {
                changeElemFontSize(fsElemIdTable[i], fs);
            }
        }
    }
}

// zmienia rozmiar czcionki w obszarze podanego elementu
function changeElemFontSize(elemId, fs) {
    var fsTable = new Array('12px', '14px', '16px');
    if (fs < 0) fs = 0;
    if (fs > 2) fs = 2;
    var elem = document.getElementById(elemId);
    elem.style.fontSize = fsTable[fs];

    if (fs == 1) {
        document.getElementById('size1').className = 'size1';
        document.getElementById('size2').className = 'size2 active';
        document.getElementById('size3').className = 'size3';
    } else if (fs == 2) {
        document.getElementById('size1').className = 'size1';
        document.getElementById('size2').className = 'size2';
        document.getElementById('size3').className = 'size3 active';
    } else {
        document.getElementById('size1').className = 'size1 active';
        document.getElementById('size2').className = 'size2';
        document.getElementById('size3').className = 'size3';
    }

    setCookieValue('font_size', fs);
}

// pobiera wartosc ciastka 
function getCookieValue(cookieName) {
    cookieName += '=';
    startIndex = document.cookie.indexOf(cookieName);
    if (startIndex == -1) {
        return '';
    }
    startIndex += cookieName.length;

    if (document.cookie.indexOf(';', startIndex) == -1) {
        endIndex = document.cookie.length;
    } else {
        endIndex = document.cookie.indexOf(';', startIndex);
    }
    cookieValue = document.cookie.substring(startIndex, endIndex);
    cookieValue = unescape(cookieValue);
    return cookieValue;
}

// ustawia wartosc ciastka
function setCookieValue(cookieName, cookieValue) {
    cookieValue = escape(cookieValue);
    document.cookie = cookieName + '=' + cookieValue + '; path=/';
}


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
    window.open('/buddy/?qr_page=' + page, '', 'location=0,toolbar=0,status=0,scrollbars=1,resizable=1,width=440,height=470,top=200,left=200');
}

function windowDruk(page) {
    window.open(page, '', 'location=0,toolbar=0,status=0,scrollbars=1,resizable=1,width=600,height=400,top=20,left=20');
}

function zwin() {
    document.getElementById('flashDivPuchar').style.height = '200px';
}

function rozwin() {
    document.getElementById('flashDivPuchar').style.height = '450px';
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


    document.forms['cartForm'].btn_change_colour2.submit();
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


/* funkcja odpowiedzialna za pokazanie tooltip'u przy panelu logowania */
function showLoginInfo(boxId, ie6) {
    var box = document.getElementById(boxId);
    if (box != null) {
        box.style.display = 'block';
        if (ie6) {
            box.style.top = -box.clientHeight + 5 + 'px';
            box.style.left = -box.clientWidth + 5 + 'px';
        }
    }
}

/* funkcja odpowiedzialna za ukrycie tooltip'u przy panelu logowania*/
function hideLoginInfo(boxId) {
    var box = document.getElementById(boxId);
    if (box != null) {
        box.style.display = 'none';
    }
}

/* funkcja odpowiedzialna za pokazanie tooltip'u pomocy */
function showHelp(boxId) {
    var box = document.getElementById(boxId);
    if (box != null) {
        box.style.display = 'block';
    }
}

/* funkcja odpowiedzialna za ukrycie tooltip'u pomocy*/
function hideHelp(boxId) {
    var box = document.getElementById(boxId);
    if (box != null) {
        box.style.display = 'none';
    }
}

/* funkcja odpowiedzialna za okreslenie polozenia left elementu na stronie*/
function findPosX(obj) {
    var curleft = 0;
    if (obj.offsetParent)
        while (1) {
            curleft += obj.offsetLeft;
            if (!obj.offsetParent)
                break;
            obj = obj.offsetParent;
        }
    else if (obj.x)
        curleft += obj.x;
    return curleft;
}

/* funkcja odpowiedzialna za okreslenie polozenia top elementu na stronie*/
function findPosY(obj) {
    var curtop = 0;
    if (obj.offsetParent)
        while (1) {
            curtop += obj.offsetTop;
            if (!obj.offsetParent)
                break;
            obj = obj.offsetParent;
        }
    else if (obj.y)
        curtop += obj.y;
    return curtop;
}


getWindowWidth = function() {
    var myWidth = 0;
    if (typeof(window.innerWidth) == 'number') {
        //Non-IE
        myWidth = window.innerWidth;
    } else if (document.documentElement && (document.documentElement.clientWidth)) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
    } else if (document.body && (document.body.clientWidth)) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
    }
    return myWidth;
}

getWindowHeight = function() {
    var myHeight = 0;
    if (typeof(window.innerHeight) == 'number') {
        //Non-IE
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientHeight)) {
        //IE 4 compatible
        myHeight = document.body.clientHeight;
    }
    return myHeight;
}

/* funkcja odpowiedzialna za pokazanie tooltip'u pomocy obok ikony, na ktorej pokazywany jest tooltip*/
function showHelpWithPosition(tooltipIcon, tooltipContent, xOffset, yOffset) {
    var helpIcon = document.getElementById(tooltipIcon);
    var positionTop = findPosY(helpIcon);
    var positionLeft = findPosX(helpIcon);
    if (xOffset) positionLeft += xOffset;
    if (yOffset) positionTop += yOffset;
    positionLeft = positionLeft + helpIcon.offsetWidth;
    document.getElementById(tooltipContent).style.position = 'absolute';
    document.getElementById(tooltipContent).style.top = positionTop + 'px';
    document.getElementById(tooltipContent).style.left = positionLeft + 'px';
    showHelp(tooltipContent);
}

/* funkcja odpowiedzialna za prezentacje pojedynczej zakladki */
function showTab(index, boxSelected) {
    var tabIndex = document.getElementById('tab' + index);
    var boxIndex = document.getElementById('box' + index);
    if (tabIndex != null && boxIndex != null) {
        document.getElementById('tab' + boxSelected).className = '';
        document.getElementById('box' + boxSelected).style.display = 'none';
        boxSelected = index;
        document.getElementById('tab' + boxSelected).className = 'selected';
        document.getElementById('box' + boxSelected).style.display = 'block';
    }
    return boxSelected;
}

/* funkcja odpowiedzialna za prezentacje zakladek w odpowiednim formacie (wysokie/niskie) */
function formatTabs(ie6, ie7) {
    var tab0 = document.getElementById('tab0');
    if (tab0 != null) {
        tab0.className = 'selected';
        var box0 = document.getElementById('box0');
        if (box0 != null) {
            box0.style.display = 'block';
        }
    }
}

/* funkcja odpowiedzialna za nadanie tej samej wysoko?ci kolumnom 
	prezentowanym na stranie z mapa serwisu */
function setServiceMapColsHeight() {
    var columnCount = 0;
    var map = document.getElementById('map-box');
    var mapChildren = map.childNodes;
    if (mapChildren != null) {
        var height = 0;
        for (var i = 0; i < mapChildren.length; i++) {
            if (mapChildren[i].className == 'map-col' || mapChildren[i].className == 'map-col first') {
                columnCount = columnCount + 1;
                if (mapChildren[i].clientHeight > height) {
                    height = mapChildren[i].clientHeight;
                }
            }
        }
        for (var i = 1; i <= columnCount; i++) {
            document.getElementById('col' + i).style.height = height + 'px';
        }
    }
}

/* funkcja odpowiedzialna za nadanie wysoko?ci elementowi div o klasie lh2-main-box */
function setHomepageHeight() {
    var mainBox = document.getElementById('lh2-main-box');
    var cols = mainBox.childNodes;
    if (cols != null) {
        var height = 0;
        for (var i = 0; i < cols.length; i++) {
            if (cols[i].tagName == 'DIV' && cols[i].id != null) {
                if (cols[i].clientHeight > height) {
                    height = cols[i].clientHeight;
                }
            }
        }
        if (height > 0) {
            mainBox.style.overflow = 'visible';
            mainBox.style.height = height + 'px';
        }
    }
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



function headerHubFlashText(text) {
    if (jest_flash) {
        document.writeln('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="500" height="35" id="headerHub" align="top"> \n<param name="allowScriptAccess" value="sameDomain" /> \n<param name="movie" value="/b/tp/flash/customizableFlashText.swf" /> \n<param name="quality" value="high" /> \n<param name="wmode" value="transparent" /> \n<param name="menu" value="false" /> \n<param name="bgcolor" value="#ffffff" /> \n<param name="FlashVars" value="headerText=' + text + '&fontSize=30&fontColor=0x353535" /> \n<embed src="/b/tp/flash/customizableFlashText.swf" quality="high" bgcolor="#ffffff" width="500" height="35" wmode="transparent" name="headerHub" align="top" menu="false" FlashVars="headerText=' + text + '&fontSize=30&fontColor=0x353535" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" /> \n</object>');
    } else {
        document.writeln(text);
    }
}

function headerHubColorFlashText(text, fontSize, color, height) {
    if (!height) height = 35;
    if (jest_flash) {
        document.writeln('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="500" height="' + height + '" id="headerHub" align="top"> \n<param name="allowScriptAccess" value="sameDomain" /> \n<param name="movie" value="/b/tp/flash/customizableFlashText.swf" /> \n<param name="quality" value="high" /> \n<param name="wmode" value="transparent" /> \n<param name="menu" value="false" /> \n<param name="bgcolor" value="#ffffff" /> \n<param name="FlashVars" value="headerText=' + text + '&fontSize=' + fontSize + '&fontColor=' + color + '" /> \n<embed src="/b/tp/flash/customizableFlashText.swf" quality="high" bgcolor="#ffffff" width="500" height="' + height + '" wmode="transparent" name="headerHub" align="top" menu="false" FlashVars="headerText=' + text + '&fontSize=' + fontSize + '&fontColor=' + color + '" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" /> \n</object>');
    } else {
        document.writeln(text);
    }
}

function headerHubColorFlashTextToId(id, text, fontSize, color) {
    var flashDiv = document.getElementById(id);
    if (flashDiv) {
        if (jest_flash) {
            flashDiv.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="500" height="35" id="headerHub" align="top"> \n<param name="allowScriptAccess" value="sameDomain" /> \n<param name="movie" value="/b/tp/flash/customizableFlashText.swf" /> \n<param name="quality" value="high" /> \n<param name="wmode" value="transparent" /> \n<param name="menu" value="false" /> \n<param name="bgcolor" value="#ffffff" /> \n<param name="FlashVars" value="headerText=' + text + '&fontSize=' + fontSize + '&fontColor=' + color + '" /> \n<embed src="/b/tp/flash/customizableFlashText.swf" quality="high" bgcolor="#ffffff" width="500" height="35" wmode="transparent" name="headerHub" align="top" menu="false" FlashVars="headerText=' + text + '&fontSize=' + fontSize + '&fontColor=' + color + '" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" /> \n</object>';
        } else {
            flashDiv.innerHTML = text;
        }
    }
}

function disableFields(isCodeSent) {
    /*Jesli nie ma checkboxa, to konczymy*/
    if (!document.getElementById('sameCorr')) {
        return;
    }
    var checked = document.getElementById('sameCorr').checked;

    document.getElementById('contact').streetCorr.disabled = checked;
    document.getElementById('contact').postCode1.disabled = checked;
    document.getElementById('contact').postCode2.disabled = checked;

    if (checked) {
        document.getElementById('contact').streetCorrNo.disabled = true;
        document.getElementById('contact').flat.disabled = true;
        document.getElementById('contact').streetText.disabled = true;
        document.getElementById('contact').streetSelect.disabled = true;
        document.getElementById('contact').checkboxStreet.disabled = true;

        document.getElementById('contact').streetText.className = "form-simple-disabled";
        document.getElementById('contact').streetSelect.className = "form-simple-disabled";
        document.getElementById('contact').home.className = "form-street-no-disabled";
        document.getElementById('contact').flat.className = "form-local-no-disabled";
        document.getElementById('contact').postCode1.className = "form-post-code1-disabled";
        document.getElementById('contact').postCode2.className = "form-post-code2-disabled";
        if (!isCodeSent) {
            changeContactFieldsState('enable');
        }
    } else {
        document.getElementById('contact').postCode1.className = "form-post-code1";
        document.getElementById('contact').postCode2.className = "form-post-code2";
        if (!isCodeSent) {
            changeContactFieldsState('disable');
            document.getElementById('contact').checkboxStreet.disabled = true;
        } else {
            document.getElementById('contact').streetCorrNo.disabled = false;
            document.getElementById('contact').flat.disabled = false;
            document.getElementById('contact').home.className = "form-street-no";
            document.getElementById('contact').flat.className = "form-local-no";
        }
        changeCheckboxState();
    }
}

function changeContactFieldsState(type) {
    var disabled = (type == 'disable');

    /*Formy kontaktu*/
    var cType1 = document.getElementById('contact-e-mail');
    var cType2 = document.getElementById('contact-pisemnie');
    if (cType1 && cType2) {
        cType1.disabled = disabled;
        cType2.disabled = disabled;
    }

    document.getElementById('email').disabled = disabled;
    document.getElementById('phone').disabled = disabled;
    if (document.getElementById('graphicToken')) {
        document.getElementById('graphicToken').disabled = disabled;
    }


    if (disabled) {
        document.getElementById('email').style.backgroundColor = '#c5c3c5';
        document.getElementById('phone').style.backgroundColor = '#c5c3c5';
        if (document.getElementById('graphicToken')) {
            document.getElementById('graphicToken').style.backgroundColor = '#c5c3c5';
        }
    } else {
        document.getElementById('email').style.backgroundColor = '#fff';
        document.getElementById('phone').style.backgroundColor = '#fff';
        if (document.getElementById('graphicToken')) {
            document.getElementById('graphicToken').style.backgroundColor = '#fff';
        }
    }

    if (typeof(document.getElementById('contact').contactPerson) != "undefined") {
        document.getElementById('contact').contactPerson.disabled = disabled;
    }
    if (typeof(document.getElementById('contact').day) != "undefined") {
        document.getElementById('contact').day.disabled = disabled;
        document.getElementById('contact').month.disabled = disabled;
        document.getElementById('contact').year.disabled = disabled;
    }
    if (document.getElementById('contactFrom') && document.getElementById('contactTo')) {
        document.getElementById('contactFrom').disabled = disabled;
        document.getElementById('contactTo').disabled = disabled;

        if (document.getElementById('contactFrom-selectbox-wrapper') && document.getElementById('contactTo-selectbox-wrapper')) {
            TP.CustomForms.Controls.setSelectState('contactFrom', document.getElementById('contactFrom').value, disabled);
            TP.CustomForms.Controls.setSelectState('contactTo', document.getElementById('contactFrom').value, disabled);
        }
    }

    if (typeof(document.getElementById('contact').PIN) != "undefined") {
        document.getElementById('contact').PIN.disabled = disabled;
    }
    if (document.getElementById('contact').graphicToken) {
        document.getElementById('contact').graphicToken.disabled = disabled;
    }
    if (typeof(document.getElementById("contactData")) != "undefined") {
        document.getElementById("contactData").className = "form-enabled";
    }
    if (typeof(document.getElementById("send")) != "undefined") {
        document.getElementById("send").className = "button-complaints-send";
    }
}


var lazyScriptsArray = new Array();

function loadScriptsLazy() {
    for (var i = 0; i < lazyScriptsArray.length; i++) {
        var scriptTag = document.createElement('script');
        scriptTag.src = lazyScriptsArray[i];
        scriptTag.type = 'text/javascript';
        document.body.appendChild(scriptTag);
    }
}

updateOfferContactForm = function(template) {
    Event.observe(window, 'load', function() {
        new Ajax.Request('/prt/pl/offer_contact_form', {
            method: 'get',
            parameters: {
                templateName: template
            },
            onSuccess: function(transport) {
                document.getElementById('offer-contact-form-box').innerHTML = transport.responseText;
                try {
                    transport.responseText.evalScripts();
                } catch (e) {
                    //
                }
            }
        });
    });
}

includeOfferContactForm = function(templateName) {
    document.write('<script type=\"text/javascript\">/*<![CDATA[*/ var offerContactFormName ="' + templateName + '\";/*]]>*/</script>');
    document.write('<div id=\"offer-contact-form-box\">&nbsp;</div>');
    document.write('<script src=\"/b/tp/js/ajax/prototype.js\" type=\"text/javascript\"></script>');
    document.write('<script src=\"/b/tp/js/offer-contact-form.js\" type=\"text/javascript\"></script>');
}

cutPrefix = function(contactPhone) {
    if (contactPhone.match('^048')) {
        contactPhone = contactPhone.replace('048', '');
    }
    var phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.value = contactPhone
    }
}

initLineInfoPopupLinks = function() {
    var links = $$('a.line-info-button');
    var linksJSON = "";
    links.each(function(e) {
        linksJSON += "'" + e.id + "':{a:'/slr/gear/services/ajax',p:'toUpdate=check-service-number-popup&toGet=check-service-availibility-box',c:TP.Ajax.popupCallback,pc:'ecare-popup'},";
    });
    TP.Ajax.ajaxifyLinks(linksJSON);
}

initBillingSystemPopupLinks = function() {
    var links = $$('a.invoice-billing-link');
    var linksJSON = "";
    links.each(function(e) {
        linksJSON += "'" + e.id + "':{a:'/slr/gear/useraccount/ajax',p:'toUpdate=get-invoice-billing-box&toGet=get-invoice-billing-box',c:TP.Ajax.popupCallback},";
    });
    if (links != "") TP.Ajax.ajaxifyLinks(linksJSON);
}

/*
 * Przekierowuje na adres GetInvoiceBillingServlet
 * przekazuje jako parametr invoiceId 
 */
initGetInvoiceBillingServlet = function(url) {
    window.location = url;
}

/* Wpisuje aktualny url do ukrytego inputa o klasie "formUrlParam". 
   Funkcja wykorzystywana jest na potrzeby zgod */
updateFormUrlParam = function() {
    var arr = $$('input.formUrlParam');
    if (arr != undefined && arr.length > 0) {
        arr[0].value = window.location.pathname + window.location.search;
    }
}

//Zamyka warstwe toplayer i ustawia ciastko
function hideBanner(bannerId) {
    if (document.getElementById('toplayer')) {
        document.getElementById('toplayer').style.display = 'none';
    }
    setCookieValue(bannerId, 'closed');
}


/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject = function() {
    var D = "undefined",
        r = "object",
        S = "Shockwave Flash",
        W = "ShockwaveFlash.ShockwaveFlash",
        q = "application/x-shockwave-flash",
        R = "SWFObjectExprInst",
        x = "onreadystatechange",
        O = window,
        j = document,
        t = navigator,
        T = false,
        U = [h],
        o = [],
        N = [],
        I = [],
        l, Q, E, B, J = false,
        a = false,
        n, G, m = true,
        M = function() {
            var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                ah = t.userAgent.toLowerCase(),
                Y = t.platform.toLowerCase(),
                ae = Y ? /win/.test(Y) : /win/.test(ah),
                ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                X = !+"\v1",
                ag = [0, 0, 0],
                ab = null;
            if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                ab = t.plugins[S].description;
                if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                    T = true;
                    X = false;
                    ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                    ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof O.ActiveXObject != D) {
                    try {
                        var ad = new ActiveXObject(W);
                        if (ad) {
                            ab = ad.GetVariable("$version");
                            if (ab) {
                                X = true;
                                ab = ab.split(" ")[1].split(",");
                                ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        }
                    } catch (Z) {}
                }
            }
            return {
                w3: aa,
                pv: ag,
                wk: af,
                ie: X,
                win: ae,
                mac: ac
            }
        }(),
        k = function() {
            if (!M.w3) {
                return
            }
            if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
                f()
            }
            if (!J) {
                if (typeof j.addEventListener != D) {
                    j.addEventListener("DOMContentLoaded", f, false)
                }
                if (M.ie && M.win) {
                    j.attachEvent(x, function() {
                        if (j.readyState == "complete") {
                            j.detachEvent(x, arguments.callee);
                            f()
                        }
                    });
                    if (O == top) {
                        (function() {
                            if (J) {
                                return
                            }
                            try {
                                j.documentElement.doScroll("left")
                            } catch (X) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                }
                if (M.wk) {
                    (function() {
                        if (J) {
                            return
                        }
                        if (!/loaded|complete/.test(j.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    })()
                }
                s(f)
            }
        }();

    function f() {
        if (J) {
            return
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z)
        } catch (aa) {
            return
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]()
        }
    }

    function K(X) {
        if (J) {
            X()
        } else {
            U[U.length] = X
        }
    }

    function s(Y) {
        if (typeof O.addEventListener != D) {
            O.addEventListener("load", Y, false)
        } else {
            if (typeof j.addEventListener != D) {
                j.addEventListener("load", Y, false)
            } else {
                if (typeof O.attachEvent != D) {
                    i(O, "onload", Y)
                } else {
                    if (typeof O.onload == "function") {
                        var X = O.onload;
                        O.onload = function() {
                            X();
                            Y()
                        }
                    } else {
                        O.onload = Y
                    }
                }
            }
        }
    }

    function h() {
        if (T) {
            V()
        } else {
            H()
        }
    }

    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function() {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                X.removeChild(aa);
                Z = null;
                H()
            })()
        } else {
            H()
        }
    }

    function H() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {
                    success: false,
                    id: Y
                };
                if (M.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa)
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class")
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align")
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                    }
                                }
                                P(ai, ah, Y, ab)
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa)
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && typeof Z.SetVariable != D) {
                            aa.success = true;
                            aa.ref = Z
                        }
                        ab(aa)
                    }
                }
            }
        }
    }

    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (typeof Y.SetVariable != D) {
                X = Y
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z
                }
            }
        }
        return X
    }

    function A() {
        return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }

    function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {
            success: false,
            id: X
        };
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null
            } else {
                l = ae;
                Q = X
            }
            aa.id = R;
            if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310"
            }
            if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
                ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D) {
                ab.flashvars += "&" + ac
            } else {
                ab.flashvars = ac
            }
            if (M.ie && M.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function() {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            u(aa, ab, X)
        }
    }

    function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function() {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            Y.parentNode.replaceChild(g(Y), Y)
        }
    }

    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) {
            aa.innerHTML = ab.innerHTML
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true))
                        }
                    }
                }
            }
        }
        return aa
    }

    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (M.wk && M.wk < 312) {
            return X
        }
        if (aa) {
            if (typeof ai.id == D) {
                ai.id = Y
            }
            if (M.ie && M.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae]
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"'
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"'
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                N[N.length] = ai.id;
                X = c(ai.id)
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac])
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac])
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab])
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z
            }
        }
        return X
    }

    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa)
    }

    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (M.ie && M.win) {
                X.style.display = "none";
                (function() {
                    if (X.readyState == 4) {
                        b(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }

    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null
                }
            }
            Y.parentNode.removeChild(Y)
        }
    }

    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) {}
        return X
    }

    function C(X) {
        return j.createElement(X)
    }

    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y]
    }

    function F(Z) {
        var Y = M.pv,
            X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
    }

    function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
            return
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            G = null
        }
        if (!n || G != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1]
            }
            G = X
        }
        if (M.ie && M.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y)
            }
        } else {
            if (n && typeof j.createTextNode != D) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }

    function w(Z, X) {
        if (!m) {
            return
        }
        var Y = X ? "visible" : "hidden";
        if (J && c(Z)) {
            c(Z).style.visibility = Y
        } else {
            v("#" + Z, "visibility:" + Y)
        }
    }

    function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
    }
    var d = function() {
        if (M.ie && M.win) {
            window.attachEvent("onunload", function() {
                var ac = I.length;
                for (var ab = 0; ab < ac; ab++) {
                    I[ab][0].detachEvent(I[ab][1], I[ab][2])
                }
                var Z = N.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(N[aa])
                }
                for (var Y in M) {
                    M[Y] = null
                }
                M = null;
                for (var X in swfobject) {
                    swfobject[X] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false)
            } else {
                if (Z) {
                    Z({
                        success: false,
                        id: ab
                    })
                }
            }
        },
        getObjectById: function(X) {
            if (M.w3) {
                return z(X)
            }
        },
        embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {
                success: false,
                id: ah
            };
            if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                K(function() {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al]
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak]
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (typeof am.flashvars != D) {
                                am.flashvars += "&" + ai + "=" + Z[ai]
                            } else {
                                am.flashvars = ai + "=" + Z[ai]
                            }
                        }
                    }
                    if (F(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true)
                        }
                        X.success = true;
                        X.ref = an
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            P(aj, am, ah, ac);
                            return
                        } else {
                            w(ah, true)
                        }
                    }
                    if (ac) {
                        ac(X)
                    }
                })
            } else {
                if (ac) {
                    ac(X)
                }
            }
        },
        switchOffAutoHideShow: function() {
            m = false
        },
        ua: M,
        getFlashPlayerVersion: function() {
            return {
                major: M.pv[0],
                minor: M.pv[1],
                release: M.pv[2]
            }
        },
        hasFlashPlayerVersion: F,
        createSWF: function(Z, Y, X) {
            if (M.w3) {
                return u(Z, Y, X)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(Z, aa, X, Y) {
            if (M.w3 && A()) {
                P(Z, aa, X, Y)
            }
        },
        removeSWF: function(X) {
            if (M.w3) {
                y(X)
            }
        },
        createCSS: function(aa, Z, Y, X) {
            if (M.w3) {
                v(aa, Z, Y, X)
            }
        },
        addDomLoadEvent: K,
        addLoadEvent: s,
        getQueryParamValue: function(aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1]
                }
                if (aa == null) {
                    return L(Z)
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (M.ie && M.win) {
                            l.style.display = "block"
                        }
                    }
                    if (E) {
                        E(B)
                    }
                }
                a = false
            }
        }
    }
}();

checkMaxLength = function(Object, MaxLen, e) {
    if (Object) {
        var KeyID = (window.event) ? event.keyCode : e.keyCode;
        if (KeyID == 8 || KeyID == 46) {
            return true;
        } else {
            if (Object.value) {
                return (Object.value.length <= MaxLen);
            } else {
                return true;
            }
        }
    } else {
        return true;
    }
}

function initializeRegistraion(delay) {

    if (!delay) {
        delay = 0;
    }

    setTimeout("TP.Ajax.clickLink('popup-registration')", delay * 1000);

}

/*	
 * Funkcja chowająca lub pokazująca checkbox o nazwie blockageEnable na stronie param_date.jsp
 * w zależności od daty jak znajduje się w polu startDate.
 */
function toggleBlockage(fieldName) {
    var dateString = new String(document.getElementById(fieldName).value);
    if (dateString != null) {
        var dateParts = dateString.split('-');
        var startDate = (new Date(dateParts[0], (dateParts[1] - 1), dateParts[2])).getTime();

        var today = new Date();
        var thDate = today.getTime() + 30 * 1000 * 60 * 60 * 24;
        var prototype = false;
        if (typeof $ != 'undefined') {
            prototype = true;
        }
        var wrapper = (prototype && $$('.suspend-date-wrapper').length > 0 ? $$('.suspend-date-wrapper')[0] : null);
        var checkbox = document.getElementById('blockageEnabledCheckbox');
        if (startDate > thDate) {

            document.getElementById('validateBlockage').value = 'true';
            if (wrapper) {
                wrapper.addClassName('has-info');
            }
            checkbox.style.display = 'block';
        } else {
            checkbox.style.display = 'none';
            document.getElementById('validateBlockage').value = 'false';
            if (wrapper) {
                wrapper.removeClassName('has-info');
            }
        }

        var error = (prototype && $$('#blockageEnabledCheckbox .error-message').length ? $$('#blockageEnabledCheckbox .error-message')[0] : null);
        if (error) {
            if (wrapper) {
                wrapper.addClassName('has-error');
            }
        } else {
            if (wrapper) {
                wrapper.removeClassName('has-error');
            }
        }
    }
}

var tradesmanSearchInputClicked = false;

updateTradesmanSearchInputTip = function(clicked) {
    var input = $('TradesmanSearchFormHandler-postalCode');
    if (input != undefined) {
        if (clicked && !tradesmanSearchInputClicked) {
            input.value = "";
            tradesmanSearchInputClicked = true;
            input.setStyle({
                color: "black"
            });
        }
        if (!clicked) {
            input.setStyle({
                color: "#474747"
            });
            input.value = "XX-XXX";
        }
    }
}

disablePageScrolling = function() {
    document.body.style.overflow = "hidden";
}

enablePageScrolling = function() {
    document.body.style.overflow = "auto";
}



//Zamyka warstwe toplayer i ustawia ciastko
function hideBanner(bannerId) {
    if (document.getElementById('toplayer')) {
        document.getElementById('toplayer').style.display = 'none';
    }
    setCookieValue(bannerId, 'closed');
}


/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject = function() {
    var D = "undefined",
        r = "object",
        S = "Shockwave Flash",
        W = "ShockwaveFlash.ShockwaveFlash",
        q = "application/x-shockwave-flash",
        R = "SWFObjectExprInst",
        x = "onreadystatechange",
        O = window,
        j = document,
        t = navigator,
        T = false,
        U = [h],
        o = [],
        N = [],
        I = [],
        l, Q, E, B, J = false,
        a = false,
        n, G, m = true,
        M = function() {
            var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                ah = t.userAgent.toLowerCase(),
                Y = t.platform.toLowerCase(),
                ae = Y ? /win/.test(Y) : /win/.test(ah),
                ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                X = !+"\v1",
                ag = [0, 0, 0],
                ab = null;
            if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                ab = t.plugins[S].description;
                if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                    T = true;
                    X = false;
                    ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                    ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof O.ActiveXObject != D) {
                    try {
                        var ad = new ActiveXObject(W);
                        if (ad) {
                            ab = ad.GetVariable("$version");
                            if (ab) {
                                X = true;
                                ab = ab.split(" ")[1].split(",");
                                ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        }
                    } catch (Z) {}
                }
            }
            return {
                w3: aa,
                pv: ag,
                wk: af,
                ie: X,
                win: ae,
                mac: ac
            }
        }(),
        k = function() {
            if (!M.w3) {
                return
            }
            if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
                f()
            }
            if (!J) {
                if (typeof j.addEventListener != D) {
                    j.addEventListener("DOMContentLoaded", f, false)
                }
                if (M.ie && M.win) {
                    j.attachEvent(x, function() {
                        if (j.readyState == "complete") {
                            j.detachEvent(x, arguments.callee);
                            f()
                        }
                    });
                    if (O == top) {
                        (function() {
                            if (J) {
                                return
                            }
                            try {
                                j.documentElement.doScroll("left")
                            } catch (X) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                }
                if (M.wk) {
                    (function() {
                        if (J) {
                            return
                        }
                        if (!/loaded|complete/.test(j.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    })()
                }
                s(f)
            }
        }();

    function f() {
        if (J) {
            return
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z)
        } catch (aa) {
            return
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]()
        }
    }

    function K(X) {
        if (J) {
            X()
        } else {
            U[U.length] = X
        }
    }

    function s(Y) {
        if (typeof O.addEventListener != D) {
            O.addEventListener("load", Y, false)
        } else {
            if (typeof j.addEventListener != D) {
                j.addEventListener("load", Y, false)
            } else {
                if (typeof O.attachEvent != D) {
                    i(O, "onload", Y)
                } else {
                    if (typeof O.onload == "function") {
                        var X = O.onload;
                        O.onload = function() {
                            X();
                            Y()
                        }
                    } else {
                        O.onload = Y
                    }
                }
            }
        }
    }

    function h() {
        if (T) {
            V()
        } else {
            H()
        }
    }

    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function() {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                X.removeChild(aa);
                Z = null;
                H()
            })()
        } else {
            H()
        }
    }

    function H() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {
                    success: false,
                    id: Y
                };
                if (M.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa)
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class")
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align")
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                    }
                                }
                                P(ai, ah, Y, ab)
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa)
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && typeof Z.SetVariable != D) {
                            aa.success = true;
                            aa.ref = Z
                        }
                        ab(aa)
                    }
                }
            }
        }
    }

    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (typeof Y.SetVariable != D) {
                X = Y
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z
                }
            }
        }
        return X
    }

    function A() {
        return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }

    function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {
            success: false,
            id: X
        };
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null
            } else {
                l = ae;
                Q = X
            }
            aa.id = R;
            if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310"
            }
            if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
                ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D) {
                ab.flashvars += "&" + ac
            } else {
                ab.flashvars = ac
            }
            if (M.ie && M.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function() {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            u(aa, ab, X)
        }
    }

    function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function() {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            Y.parentNode.replaceChild(g(Y), Y)
        }
    }

    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) {
            aa.innerHTML = ab.innerHTML
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true))
                        }
                    }
                }
            }
        }
        return aa
    }

    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (M.wk && M.wk < 312) {
            return X
        }
        if (aa) {
            if (typeof ai.id == D) {
                ai.id = Y
            }
            if (M.ie && M.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae]
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"'
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"'
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                N[N.length] = ai.id;
                X = c(ai.id)
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac])
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac])
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab])
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z
            }
        }
        return X
    }

    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa)
    }

    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (M.ie && M.win) {
                X.style.display = "none";
                (function() {
                    if (X.readyState == 4) {
                        b(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }

    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null
                }
            }
            Y.parentNode.removeChild(Y)
        }
    }

    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) {}
        return X
    }

    function C(X) {
        return j.createElement(X)
    }

    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y]
    }

    function F(Z) {
        var Y = M.pv,
            X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
    }

    function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
            return
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            G = null
        }
        if (!n || G != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1]
            }
            G = X
        }
        if (M.ie && M.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y)
            }
        } else {
            if (n && typeof j.createTextNode != D) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }

    function w(Z, X) {
        if (!m) {
            return
        }
        var Y = X ? "visible" : "hidden";
        if (J && c(Z)) {
            c(Z).style.visibility = Y
        } else {
            v("#" + Z, "visibility:" + Y)
        }
    }

    function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
    }
    var d = function() {
        if (M.ie && M.win) {
            window.attachEvent("onunload", function() {
                var ac = I.length;
                for (var ab = 0; ab < ac; ab++) {
                    I[ab][0].detachEvent(I[ab][1], I[ab][2])
                }
                var Z = N.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(N[aa])
                }
                for (var Y in M) {
                    M[Y] = null
                }
                M = null;
                for (var X in swfobject) {
                    swfobject[X] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false)
            } else {
                if (Z) {
                    Z({
                        success: false,
                        id: ab
                    })
                }
            }
        },
        getObjectById: function(X) {
            if (M.w3) {
                return z(X)
            }
        },
        embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {
                success: false,
                id: ah
            };
            if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                K(function() {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al]
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak]
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (typeof am.flashvars != D) {
                                am.flashvars += "&" + ai + "=" + Z[ai]
                            } else {
                                am.flashvars = ai + "=" + Z[ai]
                            }
                        }
                    }
                    if (F(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true)
                        }
                        X.success = true;
                        X.ref = an
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            P(aj, am, ah, ac);
                            return
                        } else {
                            w(ah, true)
                        }
                    }
                    if (ac) {
                        ac(X)
                    }
                })
            } else {
                if (ac) {
                    ac(X)
                }
            }
        },
        switchOffAutoHideShow: function() {
            m = false
        },
        ua: M,
        getFlashPlayerVersion: function() {
            return {
                major: M.pv[0],
                minor: M.pv[1],
                release: M.pv[2]
            }
        },
        hasFlashPlayerVersion: F,
        createSWF: function(Z, Y, X) {
            if (M.w3) {
                return u(Z, Y, X)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(Z, aa, X, Y) {
            if (M.w3 && A()) {
                P(Z, aa, X, Y)
            }
        },
        removeSWF: function(X) {
            if (M.w3) {
                y(X)
            }
        },
        createCSS: function(aa, Z, Y, X) {
            if (M.w3) {
                v(aa, Z, Y, X)
            }
        },
        addDomLoadEvent: K,
        addLoadEvent: s,
        getQueryParamValue: function(aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1]
                }
                if (aa == null) {
                    return L(Z)
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (M.ie && M.win) {
                            l.style.display = "block"
                        }
                    }
                    if (E) {
                        E(B)
                    }
                }
                a = false
            }
        }
    }
}();