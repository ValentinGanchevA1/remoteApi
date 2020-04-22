var httpRequest;
var actualObject;

function requestReadyFunc() {
    if (httpRequest) {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                actualObject.xmlDoc = httpRequest.responseXML;
                actualObject.asynchronousFunction()
            }
        }
    }
}

function ParserXml(a) {
    this.xmlDoc = a;
    this.get = function(d) {
        var b = a.getElementsByTagName("root").item(0);
        for (var c = 0; c < b.childNodes.length; c++) {
            node = b.childNodes.item(c);
            if (node.nodeName.toLowerCase() == d) {
                if (node.childNodes.item(0)) {
                    return node.childNodes.item(0).nodeValue.replace(/\|l/gi, "<").replace(/\|r/gi, ">")
                } else {
                    return null
                }
            }
        }
        return null
    };
    this.getArray = function(f) {
        var b = new Array();
        var d = 0;
        var c = a.getElementsByTagName("root").item(0);
        for (var e = 0; e < c.childNodes.length; e++) {
            node = c.childNodes.item(e);
            if (node.nodeName.toLowerCase() == f) {
                if (node.childNodes.item(0)) {
                    b[d] = node.childNodes.item(0).nodeValue.replace(/\|l/gi, "<").replace(/\|r/gi, ">");
                    d++
                }
            }
        }
        return b
    }
}

function Param(a, b) {
    this.name = a;
    this.value = b
}

function AjaxHelper() {
    this.xmlDoc = null;
    this.synchronousSend = function(a, c) {
        httpRequest = false;
        try {
            httpRequest = new XMLHttpRequest()
        } catch (b) {
            try {
                httpRequest = new ActiveXObject("Maxml2.XMLHTTP")
            } catch (b) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (b) {
                    httpRequest = false
                }
            }
        }
        if (!httpRequest) {
            return false
        }
        if (c && c !== null) {
            if (c instanceof Array) {
                for (i = 0; i < c.length; i++) {
                    if (i === 0) {
                        a += "?" + c.name + "=" + c.value
                    } else {
                        a += "&" + c.name + "=" + c.value
                    }
                }
            } else {
                a += "?" + c.name + "=" + c.value
            }
        }
        httpRequest.open("GET", a, false);
        httpRequest.send(null);
        this.xmlDoc = httpRequest.responseXML;
        return this.xmlDoc
    };
    this.asynchronousFunction = null;
    this.asynchronousSend = function(a, d, b) {
        httpRequest = false;
        try {
            httpRequest = new XMLHttpRequest()
        } catch (c) {
            try {
                httpRequest = new ActiveXObject("Maxml2.XMLHTTP")
            } catch (c) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (c) {
                    httpRequest = false
                }
            }
        }
        if (!httpRequest) {
            return false
        }
        if (d && d !== null) {
            if (d instanceof Array) {
                for (i = 0; i < d.length; i++) {
                    if (i === 0) {
                        a += "?" + d.name + "=" + d.value
                    } else {
                        a += "&" + d.name + "=" + d.value
                    }
                }
            } else {
                a += "?" + d.name + "=" + d.value
            }
        }
        actualObject = this;
        this.asynchronousFunction = b;
        httpRequest.onreadystatechange = requestReadyFunc;
        httpRequest.open("GET", a, true);
        httpRequest.send(null)
    };
    this.get = function(b) {
        var a = new ParserXml(this.xmlDoc);
        return a.get(b)
    };
    this.getArray = function(b) {
        var a = new ParserXml(this.xmlDoc);
        return a.getArray(b)
    }
};