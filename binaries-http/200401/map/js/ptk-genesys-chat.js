var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.GenesysChat == "undefined") {
    PTK.GenesysChat = {
        init: function() {
            this.body = $$("body")[0]
        },
        init_old: function() {
            this.body = $$("body")[0];
            if (!this.body.hasClassName("genesys-chat-initialized")) {
                this.body.addClassName("genesys-chat-initialized");
                this.body.on("click", ".start-genesys-chat", function(b) {
                    b.preventDefault();
                    var a = b.findElement(".start-genesys-chat"),
                        c = a.identify();
                    this.sendEventToGenesys("onClick", {
                        name: c
                    })
                }.bind(this));
                Event.observe(window, "resize", this.setMaxHeightOfMessages.bind(this))
            }
        },
        setMaxHeightOfMessages: function() {
            if (typeof this.chat == "undefined") {
                this.findAllChatElements()
            }
            if (this.messagesContainer) {
                var b = document.viewport.getDimensions().height,
                    a = b - 240;
                this.messagesContainer.setStyle({
                    "max-height": a + "px"
                })
            }
        },
        findAllChatElements: function() {
            if (typeof this.chat == "undefined") {
                this.chat = $$(".gwc-chat");
                if (this.chat.length && this.chat[0]) {
                    this.chat = this.chat[0];
                    this.input = this.chat.select(".gwc-chat-input");
                    if (this.input.length && this.input[0]) {
                        this.input = this.input[0]
                    } else {
                        this.input = undefined
                    }
                    this.messagesContainer = this.chat.select(".gwc-persistent-chat-messages");
                    if (this.messagesContainer.length && this.messagesContainer[0]) {
                        this.messagesContainer = this.messagesContainer[0]
                    } else {
                        this.messagesContainer = undefined
                    }
                    this.head = this.chat.select(".gwc-chat-head");
                    if (this.head.length && this.head[0]) {
                        this.head = this.head[0]
                    } else {
                        this.head = undefined
                    }
                    this.inputContainer = (this.input) ? this.input.up("form") : undefined;
                    return true
                }
            }
            return false
        },
        onReady: function(b) {
            var a = this;
            b.onSession(function(c) {
                if (this.findAllChatElements()) {
                    if (this.input && this.messagesContainer) {
                        this.input.writeAttribute("placeholder", "Wpisz tekst i nacisnij ENTER");
                        this.session = c;
                        this.messageCounter = 0;
                        c.onMessageReceived(function(d) {
                            this.onMessageReceived(d)
                        }.bind(this));
                        this.setMaxHeightOfMessages()
                    }
                }
            }.bind(this))
        },
        startChatOnPageLoad: function() {
            this.sendEventToGenesys("startChat")
        },
        onMessageReceived: function(b) {
            if (b.party.name == "User") {
                var a = this.messagesContainer.select(".gwc-chat-message:not(.gwc-chat-systemMessage)")[this.messageCounter];
                if (a) {
                    a.addClassName("gwc-chat-userMessage")
                }
            }
            this.messageCounter++
        },
        sendEventToGenesys: function(b, d) {
            if (typeof _gt == "undefined") {
                var c = 0,
                    a = this,
                    e = setInterval(function() {
                        if (typeof _gt != "undefined" && typeof _gt.push == "function") {
                            clearInterval(e);
                            a.pushEvent(b, d)
                        } else {
                            if (c >= 100) {
                                clearInterval(e)
                            }
                        }
                        c++
                    }, 1000)
            } else {
                this.pushEvent(b, d)
            }
        },
        pushEvent: function(a, b) {
            if (typeof _gt != "undefined" && typeof _gt.push == "function" && typeof a == "string") {
                if (b != null && typeof b != "undefined") {
                    _gt.push(["event", a, {
                        data: b
                    }])
                } else {
                    _gt.push(["event", a])
                }
            }
        },
        sendEventToGenesysOnEvent: function(e, c, a, f) {
            if (typeof e != "undefined" && typeof c != "undefined" && typeof c != "") {
                if (!(PTK.GenesysChat.observer && PTK.GenesysChat.observer[e] && PTK.GenesysChat.observer[e][c] && PTK.GenesysChat.observer[e][c][a])) {
                    this.body.on(e, c, function(g) {
                        this.sendEventToGenesys(a, f)
                    }.bind(this));
                    var d = {},
                        b = {};
                    d[a] = true;
                    b[c] = d;
                    PTK.GenesysChat.observer[e] = b
                }
            }
        },
        observer: {}
    }
};