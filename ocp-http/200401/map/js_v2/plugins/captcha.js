define("plugins/captcha", ["require", "common/basePlugin", "adapter/jsClass", "pubsub", "common/sound-player", "adapter/enumerable"], function(e) {
    var t = e("common/basePlugin"),
        n = e("adapter/jsClass"),
        r = e("pubsub"),
        i = e("common/sound-player"),
        s = e("adapter/enumerable"),
        o = n.Class(t, {
            constructor: function(e, t, n, r) {
                o.$super.call(this, e, t, n, r), this.settings = s.defaults(this.options, {
                    inputSelector: "input.captcha-input",
                    questionSelector: ".captcha-question",
                    playLinkSelector: "#captcha-read",
                    focusableSelector: ".captcha-input, #captcha-refresh, #captcha-read",
                    playLinkText: ["czytaj", "zatrzymaj"],
                    keyCodes: [],
                    readLinkText: "czytaj"
                }), this.active = !1, this.focusedElement = null, this.isPlaying = !1, this.observers = !1, this.context = dom.find("#" + e), this.init()
            },
            init: function() {
                this.inputs = this.getInputs(), this.playLink = dom.find(this.settings.playLinkSelector, this.context), this.question = dom.find(this.settings.questionSelector, this.context), this.body = dom.find("body"), this.focusable = dom.find(this.settings.focusableSelector, this.context), this.sounds = this.getSounds(), this.player = new i(this.sounds, {
                    playerId: "captcha"
                }), this.initObservers(), dom.hasClass(this.body, "soundmanager-support") ? this.isSoundSupported() : r.subscribe(ns.events.soundSupported, this.isSoundSupported.bind(this))
            },
            isSoundSupported: function() {
                dom.addClass(this.body, "soundmanager-support"), this.initObservers()
            },
            onAllSoundsLoaded: function() {
                dom.addClass(this.body, "soundmanager-support"), this.initObservers()
            },
            changeReadLinkText: function() {
                dom.append(this.playLink[0], this.settings.readLinkText, "inside")
            },
            initObservers: function(e) {
                this.observers || (dom.on(this.playLink, "click", this.handlePlay.bind(this)), dom.on(this.focusable, "focus", this.handleContainerFocus.bind(this)), dom.on(this.focusable, "blur", this.handleContainerBlur.bind(this)), dom.on(this.context, "keyup", this.handleKeyup.bind(this)), this.inputLabels = this.getInputLabels(), dom.on(this.inputLabels, "click", null, null, this.onLabelClick.bind(this)), dom.on(this.inputs, "change", null, null, this.onInputChange.bind(this)), this.observers = !0, this.subscribe(ns.events.soundStartPlay, this.eventStopSounds.bind(this))), r.subscribe(ns.events.allSoundsFinished, this.handleAllSoundsFinished.bind(this)), r.subscribe(ns.events.soundLoadTimeout, this.handleSoundTimeout.bind(this))
            },
            handleContainerFocus: function(e) {
                this.active = !0, this.focusedElement = e.target;
                if (this.focusedElement.tagName.toLowerCase() === "input") {
                    var t = dom.parent(this.focusedElement, "label");
                    dom.addClass(t, "input-focused")
                }
            },
            handleContainerBlur: function() {
                this.active = !1;
                if (this.focusedElement.tagName.toLowerCase() === "input") {
                    var e = dom.parent(this.focusedElement, "label");
                    dom.removeClass(e, "input-focused")
                }
            },
            handleKeyup: function(e) {
                if (this.active) {
                    var t = e.keyCode ? e.keyCode : e.which,
                        n = t - 48;
                    n > 48 && n < 58 && (n -= 48), n > 0 && n <= 9 && this.selectAnswer(n)
                }
            },
            handlePlay: function(e) {
                return e.preventDefault(), this.isPlaying ? this.stopSounds() : (this.publish(ns.events.soundStartPlay, {
                    playerId: this.player.settings.playerId
                }), this.playSounds()), !1
            },
            handleAllSoundsFinished: function() {
                this.onStop()
            },
            handleSoundTimeout: function() {
                this.onStop()
            },
            playSounds: function() {
                this.player.play(), dom.setAttribute(this.playLink, "class", "icon-before-pause"), this.setPlayLinkText(this.settings.playLinkText[1]), this.isPlaying = !0
            },
            eventStopSounds: function(e, t) {
                this.player.settings.playerId != t.playerId && this.isPlaying && (this.player.stopOne(this.player.settings.playerPrefix), this.onStop())
            },
            stopSounds: function() {
                this.player.stop(), this.onStop()
            },
            onStop: function() {
                this.isPlaying && (dom.setAttribute(this.playLink, "class", "icon-before-read"), this.setPlayLinkText(this.settings.playLinkText[0]), this.isPlaying = !1)
            },
            setPlayLinkText: function(e) {
                dom.append(this.playLink, e, "inside")
            },
            getInputs: function() {
                return dom.find(this.settings.inputSelector, this.context)
            },
            getInputLabels: function() {
                var e = [];
                return s.each(this.inputs, function(t, n) {
                    e.push(dom.parent(t, "label")[0])
                }, this), e
            },
            getSounds: function() {
                var e = dom.getData(this.question, "sound"),
                    t = [];
                return t.push(e), s.each(this.inputs, function(e) {
                    var n = dom.getData(e, "sound-number"),
                        r = dom.getData(e, "sound");
                    n && t.push(n), r && t.push(r)
                }, this), this.log(t), t
            },
            selectAnswer: function(e) {
                var t = this.inputs[e - 1];
                t && dom.trigger(t, "click")
            },
            stop: function() {
                this.player.reset()
            },
            onLabelClick: function(e) {
                if (e.target.tagName.toLocaleLowerCase() === "label" || e.target.tagName.toLocaleLowerCase() === "span") {
                    e.preventDefault();
                    var t = dom.getAttribute(e.currentTarget, "for");
                    dom.find("#" + t)[0].click()
                }
            },
            onInputChange: function(e) {
                var t = e.currentTarget,
                    n = dom.parent(t, "label");
                dom.addClass(n, "input-checked"), s.each(this.inputs, function(e) {
                    if (e.id === t.id) return;
                    var n = dom.parent(e, "label");
                    dom.removeClass(n, "input-checked")
                })
            }
        });
    return o
});