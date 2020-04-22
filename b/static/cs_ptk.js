function getMetaTags(tag) {
    var out = new Array();
    var metaTags = document.getElementsByTagName('meta');

    for (var i = 0; i < metaTags.length; i++) {
        nameAttribute = metaTags[i].name.indexOf(tag);
        if (nameAttribute != -1) {
            out.push(metaTags[i].content);
        }
    }
    return out;
}

if (cs_parameters.ns_site === undefined) {
    /* portal/eshop/ecare */
    cs_parameters.ns_site = 'opl-portal';
}
if (getMetaTags('WT.cg_n').join(';').indexOf('esupport;') == 0) {
    cs_parameters.ns_site = 'opl-esupport';
}

if (getMetaTags('WT.cg_n').join(';').indexOf('EShop;') == 0) {
    cs_parameters.ns_site = 'opl-eshop';
}

if (cs_parameters.name === undefined) {
    /* counter names / breadcrumbs */
    var br_el = document.getElementById('breadcrumbs-container');
    if (br_el) {
        var span_els = br_el.getElementsByTagName('span');
        if (span_els) {
            var crumbs = '';
            for (var i = 0; i < span_els.length; i++) {
                crumbs += (span_els[i].innerText != undefined) ? span_els[i].innerText : span_els[i].textContent;
            }
            cs_parameters.name = crumbs.replace('.', '_').replace(/\s*>\s*/g, '.').replace(/^\s+|\s+$/g, '').toLowerCase().replace(/[^0-9a-z-_.ąćęłńóśżźĄĆĘŁŃÓŚŻŹ]/g, '_').replace('orange_pl.', '') + '.index';
        }
    }
    if (cs_parameters.name === undefined && document.location.href.indexOf('/rejestracja.phtml') != -1) {
        cs_parameters.name = 'rejestracja.krok1.index';
        if (document.getElementById('user-login')) {
            cs_parameters.name = 'rejestracja.prospect.krok2.index';
        }
    }
    if (cs_parameters.name === undefined && document.location.href.indexOf('/witamy.phtml') != -1) {
        cs_parameters.name = 'rejestracja.podsumowanie.index';
    }
}

if (cs_parameters.opl_cg === undefined) {
    /* Content Groups */
    cs_parameters.opl_cg = getMetaTags('WT.cg_n').join(';');
}


if (cs_parameters.opl_search_ty === undefined) {
    /*search type*/
    if (document.location.href.indexOf('/search_result_infoportal.phtml') != -1)
        cs_parameters.opl_search_ty = 'general';
    if (document.location.href.indexOf('/search_result_esupport.phtml') != -1)
        cs_parameters.opl_search_ty = 'esupport';
}
if (cs_parameters.ns_search_term === undefined && cs_parameters.opl_search_ty) {
    /* search query */
    var el = document.getElementById('searchPhrase');
    if (el && el.value) {
        cs_parameters.ns_search_term = el.value;
    }
}


if (cs_parameters.opl_lev1 === undefined) {
    cs_parameters.opl_lev1 = getMetaTags('group_lev1').join(';');
}
if (cs_parameters.opl_funnel_name === undefined) {
    cs_parameters.opl_funnel_name = getMetaTags('WT.si_n').join(';');
}
if (cs_parameters.opl_funnel_step === undefined) {
    cs_parameters.opl_funnel_step = getMetaTags('WT.si_p').join(';');
}

var cs_encode = encodeURIComponent || escape;

var cs_uri_params = '';
for (var i in cs_parameters)
    if (cs_parameters[i]) {
        cs_uri_params += '&' + i + '=' + cs_encode(cs_parameters[i]);
    }



function udm_(a) {
    var b = "comScore=",
        c = document,
        d = c.cookie,
        e = "",
        f = "indexOf",
        g = "substring",
        h = "length",
        i = 2048,
        j, k = "&ns_",
        l = "&",
        m, n, o, p, q = window,
        r = q.encodeURIComponent || escape;
    if (d[f](b) + 1)
        for (o = 0, n = d.split(";"), p = n[h]; o < p; o++) m = n[o][f](b), m + 1 && (e = l + unescape(n[o][g](m + b[h])));
    a += k + "_t=" + +(new Date) + k + "c=" + (c.characterSet || c.defaultCharset || "") + "&c8=" + r(c.title) + e + "&c7=" + r(c.URL) + "&c9=" + r(c.referrer), a[h] > i && a[f](l) > 0 && (j = a[g](0, i - 8).lastIndexOf(l), a = (a[g](0, j) + k + "cut=" + r(a[g](j + 1)))[g](0, i)), c.images ? (m = new Image, q.ns_p || (ns_p = m), m.src = a) : c.write("<", "p", "><", 'img src="', a, '" height="1" width="1" alt="*"', "><", "/p", ">")
}

udm_('http' + (document.location.href.charAt(4) == 's' ? 's://sb' : '://b') + '.scorecardresearch.com/b?c1=2&c2=5641052' + cs_uri_params);