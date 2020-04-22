/* 	
 * 	table-renderer.js
 *	autor: akozioro
 */

function callAction(actionName, parametrName, parametrValue, tableName) {
    var form = document.getElementById(tableName + '_table');
    document.getElementById(tableName + '-' + parametrName).value = parametrValue;
    document.getElementById(tableName + '-action').value = actionName;
    form.submit();
}

function observeCancellationLinks() {
    var links = $$('.orders-main-page a.cancel-button');
    var linksJSON = "";
    links.each(function(e) {
        var orderNr = e.id.sub('cancel-button-', '');
        linksJSON += "'" + e.id + "':{a:'/slr/gear/services/ajax',p:'orderNr=" + orderNr + "&toUpdate=cancellation-confirm-popup&toGet=cancellation-confirmation-popup',c:TP.Ajax.popupCallback,pc:'ecare-popup ecare-popup-ajax'},";
    });
    TP.Ajax.ajaxifyLinks(linksJSON);
}