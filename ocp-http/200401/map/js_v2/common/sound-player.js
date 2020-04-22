define("common/sound-player", ["require", "adapter/dom", "pubsub", "lib/soundmanager/soundmanager2-nodebug-jsmin", "adapter/jsClass", "adapter/enumerable"], function(e) {
    var t = e("adapter/dom"),
        n = e("pubsub"),
        r = e("lib/soundmanager/soundmanager2-nodebug-jsmin"),
        i = e("adapter/jsClass"),
        s = e("adapter/enumerable"),
        o = i.Class({
            constructor: function(e, t) {
                this.defaults = {
                    manager: {
                        url: "/ocp-http/200401/map/js_v2/lib/soundmanager/swf/",
                        flashVersion: 9,
                        useFlashBlock: !1,
                        onready: this.onReady.bind(this)
                    },
                    reset: !1,
                    playerId: null,
                    playerPrefix: "s-"
                }, this.settings = s.defaults(t, this.defaults), this.isReady = !1, this.soundUrls = e, this.sounds = [], this.currentSoundIndex = 0, this.loadedSoundIndex = 0, this.init()
            },
            init: function() {
                soundManager.setup(this.settings.manager), soundManager.beginDelayedInit(), soundManager.ontimeout(this.onTimeout.bind(this))
            },
            eventNameWithID: function(e) {
                return this.settings.playerId ? e + "." + this.settings.playerId : e
            },
            onReady: function() {
                soundManager.supported() ? (this.isReady = !0, n.publish(this.eventNameWithID(ns.events.soundSupported))) : n.publish(this.eventNameWithID(ns.events.soundNotSupported))
            },
            onTimeout: function() {
                n.publish(this.eventNameWithID(ns.events.soundLoadTimeout))
            },
            preload: function() {},
            reset: function() {
                soundManager.reset()
            },
            play: function() {
                this.playOne(this.currentSoundIndex)
            },
            pause: function() {
                soundManager.pause(this.settings.playerPrefix + this.currentSoundIndex)
            },
            resume: function() {
                soundManager.resume(this.settings.playerPrefix + this.currentSoundIndex)
            },
            playOne: function(e) {
                this.currentSoundIndex < this.soundUrls.length ? this.createSoundObject(e, this.settings.manager.onfinish) : (this.stop(), n.publish(this.eventNameWithID(ns.events.allSoundsFinished)))
            },
            createSoundObject: function(e, t) {
                var n = this.soundUrls[e],
                    r = this.onSoundFinish;
                this.settings.reset && (r = this.resetAfterStop), this.sounds[e] && soundManager.destroySound(this.settings.playerPrefix + e), this.sounds[e] = soundManager.createSound({
                    id: this.settings.playerPrefix + e,
                    url: n,
                    autoLoad: !0,
                    autoPlay: !0,
                    stream: !1,
                    type: "audio/mpeg",
                    onload: this.onSoundLoaded.bind(this),
                    onfinish: r.bind(this)
                })
            },
            onSoundLoaded: function(e, t) {},
            onSoundFinish: function() {
                this.playNext()
            },
            destroyCurrentSound: function() {
                var e = this.sounds[this.currentSoundIndex];
                e && (soundManager.destroySound(e.id), this.sounds[this.currentSoundIndex] = null)
            },
            playNext: function() {
                this.destroyCurrentSound(), this.currentSoundIndex++, this.playOne(this.currentSoundIndex)
            },
            resetAfterStop: function() {
                soundManager.stopAll(), n.publish(ns.events.allSoundsFinished), this.destroyCurrentSound(), this.currentSoundIndex = 0
            },
            stop: function() {
                soundManager.stopAll(), n.publish(ns.events.allSoundsFinished), this.destroyCurrentSound(), this.currentSoundIndex = 0
            },
            stopOne: function(e) {
                soundManager.stop(e + this.currentSoundIndex), this.destroyCurrentSound(), this.currentSoundIndex = 0
            },
            createSoundObjects: function() {
                s.each(this.soundUrls, function(e, t) {
                    var n = soundManager.createSound({
                        id: this.settings.playerPrefix + t,
                        url: e,
                        onload: this.onSoundLoaded.bind(this)
                    });
                    this.sounds.push(n)
                }, this)
            },
            isLoading: function() {
                s.every(this.sounds, function(e, t) {
                    return e.readystate === 3
                }, this)
            }
        });
    return o
});