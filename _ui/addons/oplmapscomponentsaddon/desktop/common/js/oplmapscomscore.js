ACC.comscore = {



    bindComscoreEvents: function() {
        document.addEventListener('comscore', function(e) {
            var searchResult = ACC.comscore.prepareSearchResultPart(e);
            var query = ACC.comscore.prepareQueryPart(e);
            ACC.comscore.sendComscoreEvent(searchResult, query);

        });

    },
    prepareSearchResultPart: function(locationData) {
        var searchResult = 'opl_ev_sprawdz_dostepnosc_uslug_result=' + locationData["town"] + '_' + locationData["street"] + '_' + locationData["streetNo"] + '_' + locationData["info"];
        return searchResult;
    },
    prepareQueryPart: function(searchInput) {
        var query = 'opl_ev_sprawdz_dostepnosc_uslug_input=' + searchInput;
        return query;
    },
    sendComscoreEvent: function(searchResult, query) {

        ACC.comscore.udm_('http' + (document.location.href.charAt(4) == 's' ? 's://sb' : '://b') + '.scorecardresearch.com/p?c1=2&c2=5641052&name=poimaps&ns_site=opl-portal&' + searchResult + '&' + query);

    },
    udm_: function(a) {
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
    },



    doComscore: function(locationData, searchInput) {
        try {
            var searchResult = ACC.comscore.prepareSearchResultPart(locationData);
            var query = ACC.comscore.prepareQueryPart(searchInput);
            ACC.comscore.sendComscoreEvent(searchResult, query)
        } catch (err) {
            console.log('failed to send comscore event', err)
        }



    }


};

document.addEventListener('framework.ready', function() {

    with(ACC.comscore) {
        bindComscoreEvents();
    }
});