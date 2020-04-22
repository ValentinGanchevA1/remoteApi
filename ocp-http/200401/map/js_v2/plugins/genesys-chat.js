define("plugins/genesys-chat", ["require", "common/basePlugin", "adapter/dom", "adapter/enumerable", "adapter/jsClass", "common/utils", "pubsub"], function(e) {
    var t = e("common/basePlugin"),
        n = e("adapter/dom"),
        r = e("adapter/enumerable"),
        i = e("adapter/jsClass"),
        s = e("common/utils"),
        o = e("pubsub"),
        u = i.Class(t, {
            constructor: function(e, t, i, s) {
                var o = {
                    init: !1,
                    eventName: "",
                    dataToSend: null,
                    eventToInit: null,
                    initialElementSelector: null,
                    sendEventToGenesys: !1,
                    openChatInFullResize: !1,
                    sendEventToGenesysOnEvent: !1
                };
                u.$super.call(this, e, t, i, s), this.settings = r.defaults(s, o), this.body = n.find("body"), this.settings.sendEventToGenesys && this.sendEventToGenesys(this.settings.eventName, this.settings.dataToSend), this.settings.openChatInFullResize && this.openChatInFullResize(), this.settings.sendEventToGenesysOnEvent && this.sendEventToGenesysOnEvent()
            },
            init: function() {
                n.hasClass(this.body, "genesys-chat-initialized") || (n.addClass(this.body, "genesys-chat-initialized"), typeof PTK == "undefined" && (PTK = {}), typeof PTK.GenesysChat == "undefined" && (PTK.GenesysChat = {
                    onReady: this.onReady
                }), n.on(this.body, "click", ".start-genesys-chat", function(e) {
                    e.preventDefault();
                    var t = e.target,
                        r = n.identify(t);
                    this.sendEventToGenesys("onClick", {
                        name: r
                    })
                }.bind(this)), n.on(window, "resize", this.setMaxHeightOfMessages.bind(this)))
            },
            setMaxHeightOfMessages: function() {
                typeof this.chat == "undefined" && this.findAllChatElements();
                if (this.messagesContainer.length) {
                    var e = n.height(window),
                        t = e - 240;
                    n.css(this.messagesContainer, "max-height", t + "px")
                }
            },
            findAllChatElements: function() {
                if (typeof this.chat == "undefined") {
                    this.chat = n.find(".gwc-chat");
                    if (this.chat.length) return this.input = n.find(".gwc-chat-input", this.chat), this.messagesContainer = n.find(".gwc-persistent-chat-messages", this.chat), this.head = n.find(".gwc-chat-head", this.chat), this.inputContainer = this.input.length ? n.parent(this.input) : [], !0
                }
                return !1
            },
            onReady: function(e) {
                var t = this;
                e.onSession(function(e) {
                    this.chat = n.find(".gwc-chat"), this.findAllChatElements() && this.input.length && this.messagesContainer.length && (n.setAttribute(this.input, "placeholder", "Wpisz tekst i nacisnij ENTER"), this.session = e, this.messageCounter = 0, e.onMessageReceived(function(e) {
                        this.onMessageReceived(e)
                    }.bind(this)), this.setMaxHeightOfMessages())
                }.bind(this))
            },
            startChatOnPageLoad: function() {
                this.sendEventToGenesys("startChat")
            },
            onMessageReceived: function(e) {
                if (e.party.name == "User") {
                    var t = n.find(".gwc-chat-message:not(.gwc-chat-systemMessage)", this.messagesContainer)[this.messageCounter];
                    t && n.addClass(t, "gwc-chat-userMessage")
                }
                this.messageCounter++
            },
            sendEventToGenesys: function(e, t) {
                if (typeof _gt == "undefined") var n = 0,
                    r = this,
                    i = setInterval(function() {
                        typeof _gt != "undefined" && typeof _gt.push == "function" ? (clearInterval(i), r.pushEvent(e, t)) : n >= 100 && clearInterval(i), n++
                    }, 1e3);
                else this.pushEvent(e, t)
            },
            pushEvent: function(e, t) {
                typeof _gt != "undefined" && typeof _gt.push == "function" && typeof e == "string" && (t != null && typeof t != "undefined" ? _gt.push(["event", e, {
                    data: t
                }]) : _gt.push(["event", e]))
            },
            sendEventToGenesysOnEvent: function() {
                this.settings.eventToInit && (this.settings.eventToInit.indexOf(".") > -1 ? this.subscribeToken = o.subscribe(this.settings.eventToInit, this.handleSubscribedEvent.bind(this)) : this.settings.initialElementSelector && (this.listenedActionHandler = this.handleListenedAction.bind(this), n.on(this.settings.initialElementSelector, this.settings.eventToInit, this.listenedActionHandler)))
            },
            handleSubscribedEvent: function(e, t) {
                if (typeof t != "undefined" && typeof t.elementSelector != "undefined" && t.elementSelector == this.settings.initialElementSelector) {
                    var n = this.settings.dataToSend;
                    typeof t.dataToSend != "undefined" && (n = r.defaults(this.settings.dataToSend, t.dataToSend)), this.sendEventToGenesys(this.settings.eventName, n)
                }
            },
            handleListenedAction: function(e) {
                this.sendEventToGenesys(this.settings.eventName, this.settings.dataToSend)
            },
            stop: function() {
                typeof this.subscribeToken != "undefined" && o.unsubscribe(this.subscribeToken), typeof this.listenedActionHandler != "undefined" && n.off(this.settings.initialElementSelector, this.settings.eventToInit, this.listenedActionHandler)
            }
        });
    return u
});