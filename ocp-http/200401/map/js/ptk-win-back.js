var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.WinBack == "undefined") {
    PTK.WinBack = {
        ie6: false,
        isIe6: function() {
            if (navigator.userAgent.indexOf("MSIE 6") != -1) {
                this.ie6 = true
            }
        },
        running: false,
        debug: false,
        log: function(a) {
            if (this.debug) {
                if (typeof window.console != "undefined") {
                    console.log("PTK.WinBack >> " + a)
                } else {
                    PTK.WinBack.consoleWrite("PTK.WinBack &gt;&gt; " + a)
                }
            }
        },
        consoleWrite: function(c) {
            var b = $("console-log-box");
            var a = $$("body")[0];
            if (!b) {
                if (a) {
                    a.insert({
                        top: '<div id="console-log-box" style="width:950px;height:60px;overflow-x:hidden;overflow-y:scroll;text-align:left;border:2px solid #888;color: #000; background: #fff; position:relative; padding:0 10px; margin: 0 auto;"><p style="margin:0;">' + c + "</p></div>"
                    })
                }
            } else {
                b.insert({
                    bottom: '<p style="margin:0;">' + c + "</p>"
                });
                b.scrollTop = (b.scrollTop + b.getHeight())
            }
        },
        registerEvent: function(a, b) {
            PTK.WinBack.log("Registering event: " + a + ", linkId: " + b);
            if (a) {
                PTK.WinBack.isIe6();
                if (typeof this[a] != "undefined") {
                    this[a](a, b)
                }
                this.onDoNothingForSomeTime(a, b)
            }
        },
        onBrowserCloseAplied: false,
        onBrowserCloseClickedLinks: new Array(),
        portalClickFlag: false,
        onBrowserClose: function(b, c) {
            var c = c + "";
            var b = b + "";
            if (!PTK.WinBack.onBrowserCloseAplied) {
                PTK.WinBack.onBrowserCloseAplied = true;
                PTK.WinBack.log("event: " + b);
                var a = null;
                if (Prototype.Browser.Opera) {
                    window.opera.setOverrideHistoryNavigationMode("compatible")
                }
                if (PTK.WinBack.ie6) {
                    setTimeout('location.hash= "#";', 500)
                } else {
                    setTimeout('location.hash= "#cur";', 500)
                }
                setTimeout("intervalId = setInterval(\"PTK.WinBack.checkHash('" + c + "')\",10);", 600);
                window.onbeforeunload = function(d) {
                    if (!PTK.WinBack.portalClickFlag && !PTK.WinBack.activePopup()) {
                        PTK.WinBack.log("PTK.WinBack.portalClickFlag " + PTK.WinBack.portalClickFlag);
                        if (PTK.WinBack.onBrowserCloseClickedLinks.indexOf(c) == -1) {
                            PTK.WinBack.onBrowserCloseClickedLinks.push(c);
                            PTK.Ajax.clickLink(c);
                            return ""
                        }
                    } else {
                        if (PTK.WinBack.activePopup()) {
                            PTK.WinBack.log("already showing popup")
                        }
                    }
                }
            }
        },
        checkHash: function(a) {
            var a = a + "";
            if (PTK.WinBack.ie6) {
                if (location.hash + "" == "") {
                    if (PTK.WinBack.onBrowserCloseClickedLinks.indexOf(a) == -1) {
                        PTK.WinBack.onBrowserCloseClickedLinks.push(a);
                        history.back()
                    }
                }
            } else {
                if (location.hash + "" != "#cur") {
                    if (PTK.WinBack.onBrowserCloseClickedLinks.indexOf(a) == -1) {
                        PTK.WinBack.onBrowserCloseClickedLinks.push(a);
                        history.back()
                    }
                }
            }
        },
        activePopup: function() {
            var a = false;
            $$(".popup").each(function(b) {
                if (b.id.indexOf("win-back-popup") != -1) {
                    a = true
                }
            });
            return a
        },
        timeoutInstances: new Array(),
        linkId: new Array(),
        clickedLinks: new Array(),
        onDoNothingForSomeTime: function(a, d) {
            var a = a + "";
            var d = d + "";
            if (PTK.WinBack.linkId.indexOf(d) == -1 && PTK.WinBack.clickedLinks.indexOf(d) == -1) {
                var c = parseInt(a.replace("onDoNothingFor", ""));
                if (c + "" != "NaN") {
                    if (c > 0 && d) {
                        PTK.WinBack.linkId.push(d);
                        var e = "if(!PTK.WinBack.activePopup()){PTK.Ajax.clickLink('" + d + "');";
                        e += "PTK.WinBack.clickedLinks.push('" + d + "');";
                        e += "}else{PTK.WinBack.log('already showing popup');}";
                        var b = setTimeout(e, c * 1000);
                        this.timeoutInstances.push(new Array(b, 'setTimeout("' + e + '",' + c * 1000 + ")", "" + d));
                        PTK.WinBack.log("this.timeoutInstances.push(" + b + ', "setTimeout("' + e + '",' + c * 1000 + ')", ' + d + " )")
                    }
                }
                PTK.WinBack.observeBody()
            } else {
                PTK.WinBack.log("Event already registered or end of lifecycle: " + a + ", linkId: " + d)
            }
        },
        checkInAjaxed: function(a) {
            return (typeof PTK.Ajax.ajaxed[a] != "undefined")
        },
        observeBody: function() {
            $$("body").each(function(body, i) {
                body.setStyle({
                    width: "100%",
                    height: "100%",
                    "float": "left"
                });
                body.observe("mousemove", function(event) {
                    var el = Event.element(event);
                    if (Event.pointerY(event) - $$("html")[0].scrollTop <= 15) {
                        PTK.WinBack.portalClickFlag = false;
                        PTK.WinBack.log("[x: " + Event.pointerX(event) + " y: " + Event.pointerY(event) + "]")
                    } else {
                        if (!PTK.WinBack.portalClickFlag) {
                            PTK.WinBack.portalClickFlag = true
                        }
                    }
                });

                function observeClick(event) {
                    var element = Event.element(event);
                    PTK.WinBack.portalClickFlag = !PTK.WinBack.checkInAjaxed(element.id);
                    PTK.WinBack.log("clicked a.id " + element.id + " and PTK.WinBack.checkInAjaxed(" + element.id + ") returns " + PTK.WinBack.checkInAjaxed(element.id));
                    PTK.WinBack.log("portal click: element " + element.tagName);
                    react()
                }

                function observeSubmit(event) {
                    var element = Event.element(event);
                    PTK.WinBack.portalClickFlag = PTK.WinBack.checkInAjaxed(element.id);
                    PTK.WinBack.log("clicked form.id " + element.id + " and PTK.WinBack.checkInAjaxed(" + element.id + ") returns " + PTK.WinBack.checkInAjaxed(element.id));
                    PTK.WinBack.log("portal submit: element " + element.tagName);
                    react()
                }

                function observeKeydown(event) {
                    var element = Event.element(event);
                    PTK.WinBack.log("portal keydown: element " + element.tagName);
                    react()
                }

                function react() {
                    var tInstArray = PTK.WinBack.timeoutInstances;
                    if (tInstArray.length) {
                        tInstArray.each(function(tInstSingleArray, iter) {
                            clearTimeout(tInstSingleArray[0]);
                            if (PTK.WinBack.linkId.indexOf(tInstSingleArray[2]) == -1 && PTK.WinBack.clickedLinks.indexOf(tInstSingleArray[2]) == -1) {
                                var newTInst = eval(tInstSingleArray[1]);
                                PTK.WinBack.timeoutInstances[iter] = new Array(newTInst, tInstSingleArray[1], tInstSingleArray[2])
                            }
                        })
                    }
                }
            })
        },
        deleteCookie: function(a) {
            date = new Date();
            date.setDate(date.getDate() - 1);
            document.cookie = escape(a) + "=;expires=" + date
        },
        createCookie: function(c, d, e) {
            if (e) {
                if (e == "0") {
                    this.deleteCookie(c)
                } else {
                    var b = new Date();
                    b.setTime(b.getTime() + (e * 24 * 60 * 60 * 1000));
                    var a = "; expires=" + b.toGMTString()
                }
            } else {
                var a = ""
            }
            document.cookie = c + "=" + d + a + "; path=/"
        }
    }
};