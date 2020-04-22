/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20131201
 */

(function(e, t) {
    function n(n, r) {
        function i(e) {
            return u.preferFlash && Lt && !u.ignoreFlash && u.flash[e] !== t && u.flash[e]
        }

        function s(e) {
            return function(t) {
                var n = this._s;
                return !n || !n._a ? null : e.call(this, t)
            }
        }
        this.setupOptions = {
            url: n || null,
            flashVersion: 8,
            debugMode: !0,
            debugFlash: !1,
            useConsole: !0,
            consoleOnly: !0,
            waitForWindowLoad: !1,
            bgColor: "#ffffff",
            useHighPerformance: !1,
            flashPollingInterval: null,
            html5PollingInterval: null,
            flashLoadTimeout: 1e3,
            wmode: null,
            allowScriptAccess: "always",
            useFlashBlock: !1,
            useHTML5Audio: !0,
            html5Test: /^(probably|maybe)$/i,
            preferFlash: !1,
            noSWFCache: !1,
            idPrefix: "sound"
        }, this.defaultOptions = {
            autoLoad: !1,
            autoPlay: !1,
            from: null,
            loops: 1,
            onid3: null,
            onload: null,
            whileloading: null,
            onplay: null,
            onpause: null,
            onresume: null,
            whileplaying: null,
            onposition: null,
            onstop: null,
            onfailure: null,
            onfinish: null,
            multiShot: !0,
            multiShotEvents: !1,
            position: null,
            pan: 0,
            stream: !0,
            to: null,
            type: null,
            usePolicyFile: !1,
            volume: 100
        }, this.flash9Options = {
            isMovieStar: null,
            usePeakData: !1,
            useWaveformData: !1,
            useEQData: !1,
            onbufferchange: null,
            ondataerror: null
        }, this.movieStarOptions = {
            bufferTime: 3,
            serverURL: null,
            onconnect: null,
            duration: null
        }, this.audioFormats = {
            mp3: {
                type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                required: !0
            },
            mp4: {
                related: ["aac", "m4a", "m4b"],
                type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                required: !1
            },
            ogg: {
                type: ["audio/ogg; codecs=vorbis"],
                required: !1
            },
            opus: {
                type: ["audio/ogg; codecs=opus", "audio/opus"],
                required: !1
            },
            wav: {
                type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                required: !1
            }
        }, this.movieID = "sm2-container", this.id = r || "sm2movie", this.debugID = "soundmanager-debug", this.debugURLParam = /([#?&])debug=1/i, this.versionNumber = "V2.97a.20131201", this.altURL = this.movieURL = this.version = null, this.enabled = this.swfLoaded = !1, this.oMC = null, this.sounds = {}, this.soundIDs = [], this.didFlashBlock = this.muted = !1, this.filePattern = null, this.filePatterns = {
            flash8: /\.mp3(\?.*)?$/i,
            flash9: /\.mp3(\?.*)?$/i
        }, this.features = {
            buffering: !1,
            peakData: !1,
            waveformData: !1,
            eqData: !1,
            movieStar: !1
        }, this.sandbox = {}, this.html5 = {
            usingFlash: null
        }, this.flash = {}, this.ignoreFlash = this.html5Only = !1;
        var o, u = this,
            a = null,
            f = null,
            l, c = navigator.userAgent,
            h = e.location.href.toString(),
            p = document,
            d, v, m, y, b = [],
            w = !1,
            E = !1,
            S = !1,
            x = !1,
            T = !1,
            N, C, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y = null,
            Z = null,
            et, tt, nt, rt, it, st, ot = !1,
            ut = !1,
            at, ft, lt, ct = 0,
            ht = null,
            pt, dt = [],
            vt, mt = null,
            gt, yt, bt, wt, Et, St, xt, Tt, Nt = Array.prototype.slice,
            Ct = !1,
            kt, Lt, At, Ot, Mt, _t, Dt = 0,
            Pt = c.match(/(ipad|iphone|ipod)/i),
            Ht = c.match(/android/i),
            Bt = c.match(/msie/i),
            jt = c.match(/webkit/i),
            Ft = c.match(/safari/i) && !c.match(/chrome/i),
            It = c.match(/opera/i),
            qt = c.match(/(mobile|pre\/|xoom)/i) || Pt || Ht,
            Rt = !h.match(/usehtml5audio/i) && !h.match(/sm2\-ignorebadua/i) && Ft && !c.match(/silk/i) && c.match(/OS X 10_6_([3-7])/i),
            Ut = p.hasFocus !== t ? p.hasFocus() : null,
            zt = Ft && (p.hasFocus === t || !p.hasFocus()),
            Wt = !zt,
            Xt = /(mp3|mp4|mpa|m4a|m4b)/i,
            Vt = p.location ? p.location.protocol.match(/http/i) : null,
            $t = Vt ? "" : "http://",
            Jt = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
            Kt = "mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),
            Qt = RegExp("\\.(" + Kt.join("|") + ")(\\?.*)?$", "i");
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i, this.useAltURL = !Vt;
        var Gt;
        try {
            Gt = Audio !== t && (It && opera !== t && 10 > opera.version() ? new Audio(null) : new Audio).canPlayType !== t
        } catch (Yt) {
            Gt = !1
        }
        this.hasHTML5 = Gt, this.setup = function(e) {
            var n = !u.url;
            return e !== t && S && mt && u.ok(), L(e), e && (n && z && e.url !== t && u.beginDelayedInit(), !z && e.url !== t && "complete" === p.readyState && setTimeout(R, 1)), u
        }, this.supported = this.ok = function() {
            return mt ? S && !x : u.useHTML5Audio && u.hasHTML5
        }, this.getMovie = function(t) {
            return l(t) || p[t] || e[t]
        }, this.createSound = function(e, n) {
            function r() {
                return i = rt(i), u.sounds[i.id] = new o(i), u.soundIDs.push(i.id), u.sounds[i.id]
            }
            var i, s = null;
            if (!S || !u.ok()) return !1;
            n !== t && (e = {
                id: e,
                url: n
            }), i = C(e), i.url = pt(i.url), void 0 === i.id && (i.id = u.setupOptions.idPrefix + Dt++);
            if (st(i.id, !0)) return u.sounds[i.id];
            if (yt(i)) s = r(), s._setup_html5(i);
            else {
                if (u.html5Only || u.html5.usingFlash && i.url && i.url.match(/data\:/i)) return r();
                8 < y && null === i.isMovieStar && (i.isMovieStar = !!i.serverURL || !!(i.type && i.type.match(Jt) || i.url && i.url.match(Qt))), i = it(i, void 0), s = r(), 8 === y ? f._createSound(i.id, i.loops || 1, i.usePolicyFile) : (f._createSound(i.id, i.url, i.usePeakData, i.useWaveformData, i.useEQData, i.isMovieStar, i.isMovieStar ? i.bufferTime : !1, i.loops || 1, i.serverURL, i.duration || null, i.autoPlay, !0, i.autoLoad, i.usePolicyFile), i.serverURL || (s.connected = !0, i.onconnect && i.onconnect.apply(s))), !i.serverURL && (i.autoLoad || i.autoPlay) && s.load(i)
            }
            return !i.serverURL && i.autoPlay && s.play(), s
        }, this.destroySound = function(e, t) {
            if (!st(e)) return !1;
            var n = u.sounds[e],
                r;
            n._iO = {}, n.stop(), n.unload();
            for (r = 0; r < u.soundIDs.length; r++)
                if (u.soundIDs[r] === e) {
                    u.soundIDs.splice(r, 1);
                    break
                }
            return t || n.destruct(!0), delete u.sounds[e], !0
        }, this.load = function(e, t) {
            return st(e) ? u.sounds[e].load(t) : !1
        }, this.unload = function(e) {
            return st(e) ? u.sounds[e].unload() : !1
        }, this.onposition = this.onPosition = function(e, t, n, r) {
            return st(e) ? u.sounds[e].onposition(t, n, r) : !1
        }, this.clearOnPosition = function(e, t, n) {
            return st(e) ? u.sounds[e].clearOnPosition(t, n) : !1
        }, this.start = this.play = function(e, t) {
            var n = null,
                r = t && !(t instanceof Object);
            if (!S || !u.ok()) return !1;
            if (st(e, r)) r && (t = {
                url: t
            });
            else {
                if (!r) return !1;
                r && (t = {
                    url: t
                }), t && t.url && (t.id = e, n = u.createSound(t).play())
            }
            return null === n && (n = u.sounds[e].play(t)), n
        }, this.setPosition = function(e, t) {
            return st(e) ? u.sounds[e].setPosition(t) : !1
        }, this.stop = function(e) {
            return st(e) ? u.sounds[e].stop() : !1
        }, this.stopAll = function() {
            for (var e in u.sounds) u.sounds.hasOwnProperty(e) && u.sounds[e].stop()
        }, this.pause = function(e) {
            return st(e) ? u.sounds[e].pause() : !1
        }, this.pauseAll = function() {
            var e;
            for (e = u.soundIDs.length - 1; 0 <= e; e--) u.sounds[u.soundIDs[e]].pause()
        }, this.resume = function(e) {
            return st(e) ? u.sounds[e].resume() : !1
        }, this.resumeAll = function() {
            var e;
            for (e = u.soundIDs.length - 1; 0 <= e; e--) u.sounds[u.soundIDs[e]].resume()
        }, this.togglePause = function(e) {
            return st(e) ? u.sounds[e].togglePause() : !1
        }, this.setPan = function(e, t) {
            return st(e) ? u.sounds[e].setPan(t) : !1
        }, this.setVolume = function(e, t) {
            return st(e) ? u.sounds[e].setVolume(t) : !1
        }, this.mute = function(e) {
            var t = 0;
            e instanceof String && (e = null);
            if (e) return st(e) ? u.sounds[e].mute() : !1;
            for (t = u.soundIDs.length - 1; 0 <= t; t--) u.sounds[u.soundIDs[t]].mute();
            return u.muted = !0
        }, this.muteAll = function() {
            u.mute()
        }, this.unmute = function(e) {
            e instanceof String && (e = null);
            if (e) return st(e) ? u.sounds[e].unmute() : !1;
            for (e = u.soundIDs.length - 1; 0 <= e; e--) u.sounds[u.soundIDs[e]].unmute();
            return u.muted = !1, !0
        }, this.unmuteAll = function() {
            u.unmute()
        }, this.toggleMute = function(e) {
            return st(e) ? u.sounds[e].toggleMute() : !1
        }, this.getMemoryUse = function() {
            var e = 0;
            return f && 8 !== y && (e = parseInt(f._getMemoryUse(), 10)), e
        }, this.disable = function(n) {
            var r;
            n === t && (n = !1);
            if (x) return !1;
            x = !0;
            for (r = u.soundIDs.length - 1; 0 <= r; r--) K(u.sounds[u.soundIDs[r]]);
            return N(n), Tt.remove(e, "load", _), !0
        }, this.canPlayMIME = function(e) {
            var t;
            return u.hasHTML5 && (t = bt({
                type: e
            })), !t && mt && (t = e && u.ok() ? !!(8 < y && e.match(Jt) || e.match(u.mimePattern)) : null), t
        }, this.canPlayURL = function(e) {
            var t;
            return u.hasHTML5 && (t = bt({
                url: e
            })), !t && mt && (t = e && u.ok() ? !!e.match(u.filePattern) : null), t
        }, this.canPlayLink = function(e) {
            return e.type !== t && e.type && u.canPlayMIME(e.type) ? !0 : u.canPlayURL(e.href)
        }, this.getSoundById = function(e, t) {
            return e ? u.sounds[e] : null
        }, this.onready = function(t, n) {
            if ("function" != typeof t) throw et("needFunction", "onready");
            return n || (n = e), O("onready", t, n), M(), !0
        }, this.ontimeout = function(t, n) {
            if ("function" != typeof t) throw et("needFunction", "ontimeout");
            return n || (n = e), O("ontimeout", t, n), M({
                type: "ontimeout"
            }), !0
        }, this._wD = this._writeDebug = function(e, t) {
            return !0
        }, this._debug = function() {}, this.reboot = function(t, n) {
            var r, i, s;
            for (r = u.soundIDs.length - 1; 0 <= r; r--) u.sounds[u.soundIDs[r]].destruct();
            if (f) try {
                Bt && (Z = f.innerHTML), Y = f.parentNode.removeChild(f)
            } catch (o) {}
            Z = Y = mt = f = null, u.enabled = z = S = ot = ut = w = E = x = Ct = u.swfLoaded = !1, u.soundIDs = [], u.sounds = {}, Dt = 0;
            if (t) b = [];
            else
                for (r in b)
                    if (b.hasOwnProperty(r)) {
                        i = 0;
                        for (s = b[r].length; i < s; i++) b[r][i].fired = !1
                    }
            return u.html5 = {
                usingFlash: null
            }, u.flash = {}, u.html5Only = !1, u.ignoreFlash = !1, e.setTimeout(function() {
                q(), n || u.beginDelayedInit()
            }, 20), u
        }, this.reset = function() {
            return u.reboot(!0, !0)
        }, this.getMoviePercent = function() {
            return f && "PercentLoaded" in f ? f.PercentLoaded() : null
        }, this.beginDelayedInit = function() {
            T = !0, R(), setTimeout(function() {
                return ut ? !1 : (X(), I(), ut = !0)
            }, 20), D()
        }, this.destruct = function() {
            u.disable(!0)
        }, o = function(e) {
            var n, r, i = this,
                s, o, l, c, h, p, d = !1,
                v = [],
                m = 0,
                g, b, w = null,
                E;
            r = n = null, this.sID = this.id = e.id, this.url = e.url, this._iO = this.instanceOptions = this.options = C(e), this.pan = this.options.pan, this.volume = this.options.volume, this.isHTML5 = !1, this._a = null, E = this.url ? !1 : !0, this.id3 = {}, this._debug = function() {}, this.load = function(e) {
                var n = null,
                    r;
                e !== t ? i._iO = C(e, i.options) : (e = i.options, i._iO = e, w && w !== i.url && (i._iO.url = i.url, i.url = null)), i._iO.url || (i._iO.url = i.url), i._iO.url = pt(i._iO.url), r = i.instanceOptions = i._iO;
                if (!r.url && !i.url) return i;
                if (r.url === i.url && 0 !== i.readyState && 2 !== i.readyState) return 3 === i.readyState && r.onload && _t(i, function() {
                    r.onload.apply(i, [!!i.duration])
                }), i;
                i.loaded = !1, i.readyState = 1, i.playState = 0, i.id3 = {};
                if (yt(r)) n = i._setup_html5(r), n._called_load || (i._html5_canplay = !1, i.url !== r.url && (i._a.src = r.url, i.setPosition(0)), i._a.autobuffer = "auto", i._a.preload = "auto", i._a._called_load = !0);
                else {
                    if (u.html5Only || i._iO.url && i._iO.url.match(/data\:/i)) return i;
                    try {
                        i.isHTML5 = !1, i._iO = it(rt(r)), r = i._iO, 8 === y ? f._load(i.id, r.url, r.stream, r.autoPlay, r.usePolicyFile) : f._load(i.id, r.url, !!r.stream, !!r.autoPlay, r.loops || 1, !!r.autoLoad, r.usePolicyFile)
                    } catch (s) {
                        V({
                            type: "SMSOUND_LOAD_JS_EXCEPTION",
                            fatal: !0
                        })
                    }
                }
                return i.url = r.url, i
            }, this.unload = function() {
                return 0 !== i.readyState && (i.isHTML5 ? (c(), i._a && (i._a.pause(), w = Et(i._a))) : 8 === y ? f._unload(i.id, "about:blank") : f._unload(i.id), s()), i
            }, this.destruct = function(e) {
                i.isHTML5 ? (c(), i._a && (i._a.pause(), Et(i._a), Ct || l(), i._a._s = null, i._a = null)) : (i._iO.onfailure = null, f._destroySound(i.id)), e || u.destroySound(i.id, !0)
            }, this.start = this.play = function(e, n) {
                var r, s, o, a, l;
                s = !0, s = null, n = n === t ? !0 : n, e || (e = {}), i.url && (i._iO.url = i.url), i._iO = C(i._iO, i.options), i._iO = C(e, i._iO), i._iO.url = pt(i._iO.url), i.instanceOptions = i._iO;
                if (!i.isHTML5 && i._iO.serverURL && !i.connected) return i.getAutoPlay() || i.setAutoPlay(!0), i;
                yt(i._iO) && (i._setup_html5(i._iO), h()), 1 === i.playState && !i.paused && (r = i._iO.multiShot, r || (i.isHTML5 && i.setPosition(i._iO.position), s = i));
                if (null !== s) return s;
                e.url && e.url !== i.url && (!i.readyState && !i.isHTML5 && 8 === y && E ? E = !1 : i.load(i._iO)), i.loaded || (0 === i.readyState ? (!i.isHTML5 && !u.html5Only ? (i._iO.autoPlay = !0, i.load(i._iO)) : i.isHTML5 ? i.load(i._iO) : s = i, i.instanceOptions = i._iO) : 2 === i.readyState && (s = i));
                if (null !== s) return s;
                !i.isHTML5 && 9 === y && 0 < i.position && i.position === i.duration && (e.position = 0);
                if (i.paused && 0 <= i.position && (!i._iO.serverURL || 0 < i.position)) i.resume();
                else {
                    i._iO = C(e, i._iO);
                    if (null !== i._iO.from && null !== i._iO.to && 0 === i.instanceCount && 0 === i.playState && !i._iO.serverURL) {
                        r = function() {
                            i._iO = C(e, i._iO), i.play(i._iO)
                        }, i.isHTML5 && !i._html5_canplay ? (i.load({
                            _oncanplay: r
                        }), s = !1) : !i.isHTML5 && !i.loaded && (!i.readyState || 2 !== i.readyState) && (i.load({
                            onload: r
                        }), s = !1);
                        if (null !== s) return s;
                        i._iO = b()
                    }(!i.instanceCount || i._iO.multiShotEvents || i.isHTML5 && i._iO.multiShot && !Ct || !i.isHTML5 && 8 < y && !i.getAutoPlay()) && i.instanceCount++, i._iO.onposition && 0 === i.playState && p(i), i.playState = 1, i.paused = !1, i.position = i._iO.position !== t && !isNaN(i._iO.position) ? i._iO.position : 0, i.isHTML5 || (i._iO = it(rt(i._iO))), i._iO.onplay && n && (i._iO.onplay.apply(i), d = !0), i.setVolume(i._iO.volume, !0), i.setPan(i._iO.pan, !0), i.isHTML5 ? 2 > i.instanceCount ? (h(), s = i._setup_html5(), i.setPosition(i._iO.position), s.play()) : (o = new Audio(i._iO.url), a = function() {
                        Tt.remove(o, "ended", a), i._onfinish(i), Et(o), o = null
                    }, l = function() {
                        Tt.remove(o, "canplay", l);
                        try {
                            o.currentTime = i._iO.position / 1e3
                        } catch (e) {}
                        o.play()
                    }, Tt.add(o, "ended", a), void 0 !== i._iO.volume && (o.volume = Math.max(0, Math.min(1, i._iO.volume / 100))), i.muted && (o.muted = !0), i._iO.position ? Tt.add(o, "canplay", l) : o.play()) : (s = f._start(i.id, i._iO.loops || 1, 9 === y ? i.position : i.position / 1e3, i._iO.multiShot || !1), 9 === y && !s && i._iO.onplayerror && i._iO.onplayerror.apply(i))
                }
                return i
            }, this.stop = function(e) {
                var t = i._iO;
                return 1 === i.playState && (i._onbufferchange(0), i._resetOnPosition(0), i.paused = !1, i.isHTML5 || (i.playState = 0), g(), t.to && i.clearOnPosition(t.to), i.isHTML5 ? i._a && (e = i.position, i.setPosition(0), i.position = e, i._a.pause(), i.playState = 0, i._onTimer(), c()) : (f._stop(i.id, e), t.serverURL && i.unload()), i.instanceCount = 0, i._iO = {}, t.onstop && t.onstop.apply(i)), i
            }, this.setAutoPlay = function(e) {
                i._iO.autoPlay = e, i.isHTML5 || (f._setAutoPlay(i.id, e), e && !i.instanceCount && 1 === i.readyState && i.instanceCount++)
            }, this.getAutoPlay = function() {
                return i._iO.autoPlay
            }, this.setPosition = function(e) {
                e === t && (e = 0);
                var n = i.isHTML5 ? Math.max(e, 0) : Math.min(i.duration || i._iO.duration, Math.max(e, 0));
                i.position = n, e = i.position / 1e3, i._resetOnPosition(i.position), i._iO.position = n;
                if (i.isHTML5) {
                    if (i._a) {
                        if (i._html5_canplay) {
                            if (i._a.currentTime !== e) try {
                                i._a.currentTime = e, (0 === i.playState || i.paused) && i._a.pause()
                            } catch (r) {}
                        } else if (e) return i;
                        i.paused && i._onTimer(!0)
                    }
                } else e = 9 === y ? i.position : e, i.readyState && 2 !== i.readyState && f._setPosition(i.id, e, i.paused || !i.playState, i._iO.multiShot);
                return i
            }, this.pause = function(e) {
                return i.paused || 0 === i.playState && 1 !== i.readyState ? i : (i.paused = !0, i.isHTML5 ? (i._setup_html5().pause(), c()) : (e || e === t) && f._pause(i.id, i._iO.multiShot), i._iO.onpause && i._iO.onpause.apply(i), i)
            }, this.resume = function() {
                var e = i._iO;
                return i.paused ? (i.paused = !1, i.playState = 1, i.isHTML5 ? (i._setup_html5().play(), h()) : (e.isMovieStar && !e.serverURL && i.setPosition(i.position), f._pause(i.id, e.multiShot)), !d && e.onplay ? (e.onplay.apply(i), d = !0) : e.onresume && e.onresume.apply(i), i) : i
            }, this.togglePause = function() {
                return 0 === i.playState ? (i.play({
                    position: 9 === y && !i.isHTML5 ? i.position : i.position / 1e3
                }), i) : (i.paused ? i.resume() : i.pause(), i)
            }, this.setPan = function(e, n) {
                return e === t && (e = 0), n === t && (n = !1), i.isHTML5 || f._setPan(i.id, e), i._iO.pan = e, n || (i.pan = e, i.options.pan = e), i
            }, this.setVolume = function(e, n) {
                return e === t && (e = 100), n === t && (n = !1), i.isHTML5 ? i._a && (u.muted && !i.muted && (i.muted = !0, i._a.muted = !0), i._a.volume = Math.max(0, Math.min(1, e / 100))) : f._setVolume(i.id, u.muted && !i.muted || i.muted ? 0 : e), i._iO.volume = e, n || (i.volume = e, i.options.volume = e), i
            }, this.mute = function() {
                return i.muted = !0, i.isHTML5 ? i._a && (i._a.muted = !0) : f._setVolume(i.id, 0), i
            }, this.unmute = function() {
                i.muted = !1;
                var e = i._iO.volume !== t;
                return i.isHTML5 ? i._a && (i._a.muted = !1) : f._setVolume(i.id, e ? i._iO.volume : i.options.volume), i
            }, this.toggleMute = function() {
                return i.muted ? i.unmute() : i.mute()
            }, this.onposition = this.onPosition = function(e, n, r) {
                return v.push({
                    position: parseInt(e, 10),
                    method: n,
                    scope: r !== t ? r : i,
                    fired: !1
                }), i
            }, this.clearOnPosition = function(e, t) {
                var n;
                e = parseInt(e, 10);
                if (isNaN(e)) return !1;
                for (n = 0; n < v.length; n++) e === v[n].position && (!t || t === v[n].method) && (v[n].fired && m--, v.splice(n, 1))
            }, this._processOnPosition = function() {
                var e, t;
                e = v.length;
                if (!e || !i.playState || m >= e) return !1;
                for (e -= 1; 0 <= e; e--) t = v[e], !t.fired && i.position >= t.position && (t.fired = !0, m++, t.method.apply(t.scope, [t.position]));
                return !0
            }, this._resetOnPosition = function(e) {
                var t, n;
                t = v.length;
                if (!t) return !1;
                for (t -= 1; 0 <= t; t--) n = v[t], n.fired && e <= n.position && (n.fired = !1, m--);
                return !0
            }, b = function() {
                var e = i._iO,
                    t = e.from,
                    n = e.to,
                    r, s;
                return s = function() {
                    i.clearOnPosition(n, s), i.stop()
                }, r = function() {
                    null !== n && !isNaN(n) && i.onPosition(n, s)
                }, null !== t && !isNaN(t) && (e.position = t, e.multiShot = !1, r()), e
            }, p = function() {
                var e, t = i._iO.onposition;
                if (t)
                    for (e in t) t.hasOwnProperty(e) && i.onPosition(parseInt(e, 10), t[e])
            }, g = function() {
                var e, t = i._iO.onposition;
                if (t)
                    for (e in t) t.hasOwnProperty(e) && i.clearOnPosition(parseInt(e, 10))
            }, h = function() {
                i.isHTML5 && at(i)
            }, c = function() {
                i.isHTML5 && ft(i)
            }, s = function(e) {
                e || (v = [], m = 0), d = !1, i._hasTimer = null, i._a = null, i._html5_canplay = !1, i.bytesLoaded = null, i.bytesTotal = null, i.duration = i._iO && i._iO.duration ? i._iO.duration : null, i.durationEstimate = null, i.buffered = [], i.eqData = [], i.eqData.left = [], i.eqData.right = [], i.failures = 0, i.isBuffering = !1, i.instanceOptions = {}, i.instanceCount = 0, i.loaded = !1, i.metadata = {}, i.readyState = 0, i.muted = !1, i.paused = !1, i.peakData = {
                    left: 0,
                    right: 0
                }, i.waveformData = {
                    left: [],
                    right: []
                }, i.playState = 0, i.position = null, i.id3 = {}
            }, s(), this._onTimer = function(e) {
                var t, s = !1,
                    o = {};
                if (i._hasTimer || e) return i._a && (e || (0 < i.playState || 1 === i.readyState) && !i.paused) && (t = i._get_html5_duration(), t !== n && (n = t, i.duration = t, s = !0), i.durationEstimate = i.duration, t = 1e3 * i._a.currentTime || 0, t !== r && (r = t, s = !0), (s || e) && i._whileplaying(t, o, o, o, o)), s
            }, this._get_html5_duration = function() {
                var e = i._iO;
                return (e = i._a && i._a.duration ? 1e3 * i._a.duration : e && e.duration ? e.duration : null) && !isNaN(e) && Infinity !== e ? e : null
            }, this._apply_loop = function(e, t) {
                e.loop = 1 < t ? "loop" : ""
            }, this._setup_html5 = function(e) {
                e = C(i._iO, e);
                var t = Ct ? a : i._a,
                    n = decodeURI(e.url),
                    r;
                Ct ? n === decodeURI(kt) && (r = !0) : n === decodeURI(w) && (r = !0);
                if (t) {
                    if (t._s)
                        if (Ct) t._s && t._s.playState && !r && t._s.stop();
                        else if (!Ct && n === decodeURI(w)) return i._apply_loop(t, e.loops), t;
                    r || (w && s(!1), t.src = e.url, kt = w = i.url = e.url, t._called_load = !1)
                } else e.autoLoad || e.autoPlay ? (i._a = new Audio(e.url), i._a.load()) : i._a = It && 10 > opera.version() ? new Audio(null) : new Audio, t = i._a, t._called_load = !1, Ct && (a = t);
                return i.isHTML5 = !0, i._a = t, t._s = i, o(), i._apply_loop(t, e.loops), e.autoLoad || e.autoPlay ? i.load() : (t.autobuffer = !1, t.preload = "auto"), t
            }, o = function() {
                if (i._a._added_events) return !1;
                var e;
                i._a._added_events = !0;
                for (e in Mt) Mt.hasOwnProperty(e) && i._a && i._a.addEventListener(e, Mt[e], !1);
                return !0
            }, l = function() {
                var e;
                i._a._added_events = !1;
                for (e in Mt) Mt.hasOwnProperty(e) && i._a && i._a.removeEventListener(e, Mt[e], !1)
            }, this._onload = function(e) {
                var t = !!e || !i.isHTML5 && 8 === y && i.duration;
                return i.loaded = t, i.readyState = t ? 3 : 2, i._onbufferchange(0), i._iO.onload && _t(i, function() {
                    i._iO.onload.apply(i, [t])
                }), !0
            }, this._onbufferchange = function(e) {
                return 0 === i.playState || e && i.isBuffering || !e && !i.isBuffering ? !1 : (i.isBuffering = 1 === e, i._iO.onbufferchange && i._iO.onbufferchange.apply(i), !0)
            }, this._onsuspend = function() {
                return i._iO.onsuspend && i._iO.onsuspend.apply(i), !0
            }, this._onfailure = function(e, t, n) {
                i.failures++, i._iO.onfailure && 1 === i.failures && i._iO.onfailure(i, e, t, n)
            }, this._onfinish = function() {
                var e = i._iO.onfinish;
                i._onbufferchange(0), i._resetOnPosition(0), i.instanceCount && (i.instanceCount--, i.instanceCount || (g(), i.playState = 0, i.paused = !1, i.instanceCount = 0, i.instanceOptions = {}, i._iO = {}, c(), i.isHTML5 && (i.position = 0)), (!i.instanceCount || i._iO.multiShotEvents) && e && _t(i, function() {
                    e.apply(i)
                }))
            }, this._whileloading = function(e, t, n, r) {
                var s = i._iO;
                i.bytesLoaded = e, i.bytesTotal = t, i.duration = Math.floor(n), i.bufferLength = r, i.durationEstimate = !i.isHTML5 && !s.isMovieStar ? s.duration ? i.duration > s.duration ? i.duration : s.duration : parseInt(i.bytesTotal / i.bytesLoaded * i.duration, 10) : i.duration, i.isHTML5 || (i.buffered = [{
                    start: 0,
                    end: i.duration
                }]), (3 !== i.readyState || i.isHTML5) && s.whileloading && s.whileloading.apply(i)
            }, this._whileplaying = function(e, n, r, s, o) {
                var u = i._iO;
                return isNaN(e) || null === e ? !1 : (i.position = Math.max(0, e), i._processOnPosition(), !i.isHTML5 && 8 < y && (u.usePeakData && n !== t && n && (i.peakData = {
                    left: n.leftPeak,
                    right: n.rightPeak
                }), u.useWaveformData && r !== t && r && (i.waveformData = {
                    left: r.split(","),
                    right: s.split(",")
                }), u.useEQData && o !== t && o && o.leftEQ && (e = o.leftEQ.split(","), i.eqData = e, i.eqData.left = e, o.rightEQ !== t && o.rightEQ && (i.eqData.right = o.rightEQ.split(",")))), 1 === i.playState && (!i.isHTML5 && 8 === y && !i.position && i.isBuffering && i._onbufferchange(0), u.whileplaying && u.whileplaying.apply(i)), !0)
            }, this._oncaptiondata = function(e) {
                i.captiondata = e, i._iO.oncaptiondata && i._iO.oncaptiondata.apply(i, [e])
            }, this._onmetadata = function(e, t) {
                var n = {},
                    r, s;
                r = 0;
                for (s = e.length; r < s; r++) n[e[r]] = t[r];
                i.metadata = n, i._iO.onmetadata && i._iO.onmetadata.apply(i)
            }, this._onid3 = function(e, t) {
                var n = [],
                    r, s;
                r = 0;
                for (s = e.length; r < s; r++) n[e[r]] = t[r];
                i.id3 = C(i.id3, n), i._iO.onid3 && i._iO.onid3.apply(i)
            }, this._onconnect = function(e) {
                e = 1 === e;
                if (i.connected = e) i.failures = 0, st(i.id) && (i.getAutoPlay() ? i.play(t, i.getAutoPlay()) : i._iO.autoLoad && i.load()), i._iO.onconnect && i._iO.onconnect.apply(i, [e])
            }, this._ondataerror = function(e) {
                0 < i.playState && i._iO.ondataerror && i._iO.ondataerror.apply(i)
            }
        }, W = function() {
            return p.body || p.getElementsByTagName("div")[0]
        }, l = function(e) {
            return p.getElementById(e)
        }, C = function(e, n) {
            var r = e || {},
                i, s;
            i = n === t ? u.defaultOptions : n;
            for (s in i) i.hasOwnProperty(s) && r[s] === t && (r[s] = "object" != typeof i[s] || null === i[s] ? i[s] : C(r[s], i[s]));
            return r
        }, _t = function(t, n) {
            !t.isHTML5 && 8 === y ? e.setTimeout(n, 0) : n()
        }, A = {
            onready: 1,
            ontimeout: 1,
            defaultOptions: 1,
            flash9Options: 1,
            movieStarOptions: 1
        }, L = function(e, n) {
            var r, i = !0,
                s = n !== t,
                o = u.setupOptions;
            for (r in e)
                if (e.hasOwnProperty(r))
                    if ("object" != typeof e[r] || null === e[r] || e[r] instanceof Array || e[r] instanceof RegExp) s && A[n] !== t ? u[n][r] = e[r] : o[r] !== t ? (u.setupOptions[r] = e[r], u[r] = e[r]) : A[r] === t ? i = !1 : u[r] instanceof Function ? u[r].apply(u, e[r] instanceof Array ? e[r] : [e[r]]) : u[r] = e[r];
                    else {
                        if (A[r] !== t) return L(e[r], r);
                        i = !1
                    }
            return i
        }, Tt = function() {
            function t(e) {
                e = Nt.call(e);
                var t = e.length;
                return r ? (e[1] = "on" + e[1], 3 < t && e.pop()) : 3 === t && e.push(!1), e
            }

            function n(e, t) {
                var n = e.shift(),
                    s = [i[t]];
                r ? n[s](e[0], e[1]) : n[s].apply(n, e)
            }
            var r = e.attachEvent,
                i = {
                    add: r ? "attachEvent" : "addEventListener",
                    remove: r ? "detachEvent" : "removeEventListener"
                };
            return {
                add: function() {
                    n(t(arguments), "add")
                },
                remove: function() {
                    n(t(arguments), "remove")
                }
            }
        }(), Mt = {
            abort: s(function() {}),
            canplay: s(function() {
                var e = this._s,
                    n;
                if (e._html5_canplay) return !0;
                e._html5_canplay = !0, e._onbufferchange(0), n = e._iO.position !== t && !isNaN(e._iO.position) ? e._iO.position / 1e3 : null;
                if (e.position && this.currentTime !== n) try {
                    this.currentTime = n
                } catch (r) {}
                e._iO._oncanplay && e._iO._oncanplay()
            }),
            canplaythrough: s(function() {
                var e = this._s;
                e.loaded || (e._onbufferchange(0), e._whileloading(e.bytesLoaded, e.bytesTotal, e._get_html5_duration()), e._onload(!0))
            }),
            ended: s(function() {
                this._s._onfinish()
            }),
            error: s(function() {
                this._s._onload(!1)
            }),
            loadeddata: s(function() {
                var e = this._s;
                !e._loaded && !Ft && (e.duration = e._get_html5_duration())
            }),
            loadedmetadata: s(function() {}),
            loadstart: s(function() {
                this._s._onbufferchange(1)
            }),
            play: s(function() {
                this._s._onbufferchange(0)
            }),
            playing: s(function() {
                this._s._onbufferchange(0)
            }),
            progress: s(function(e) {
                var t = this._s,
                    n, r, i = 0,
                    i = e.target.buffered;
                n = e.loaded || 0;
                var s = e.total || 1;
                t.buffered = [];
                if (i && i.length) {
                    n = 0;
                    for (r = i.length; n < r; n++) t.buffered.push({
                        start: 1e3 * i.start(n),
                        end: 1e3 * i.end(n)
                    });
                    i = 1e3 * (i.end(0) - i.start(0)), n = Math.min(1, i / (1e3 * e.target.duration))
                }
                isNaN(n) || (t._onbufferchange(0), t._whileloading(n, s, t._get_html5_duration()), n && s && n === s && Mt.canplaythrough.call(this, e))
            }),
            ratechange: s(function() {}),
            suspend: s(function(e) {
                var t = this._s;
                Mt.progress.call(this, e), t._onsuspend()
            }),
            stalled: s(function() {}),
            timeupdate: s(function() {
                this._s._onTimer()
            }),
            waiting: s(function() {
                this._s._onbufferchange(1)
            })
        }, yt = function(e) {
            return !e || !e.type && !e.url && !e.serverURL ? !1 : e.serverURL || e.type && i(e.type) ? !1 : e.type ? bt({
                type: e.type
            }) : bt({
                url: e.url
            }) || u.html5Only || e.url.match(/data\:/i)
        }, Et = function(e) {
            var t;
            return e && (t = Ft ? "about:blank" : u.html5.canPlayType("audio/wav") ? "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==" : "about:blank", e.src = t, void 0 !== e._called_unload && (e._called_load = !1)), Ct && (kt = null), t
        }, bt = function(e) {
            if (!u.useHTML5Audio || !u.hasHTML5) return !1;
            var n = e.url || null;
            e = e.type || null;
            var r = u.audioFormats,
                s;
            if (e && u.html5[e] !== t) return u.html5[e] && !i(e);
            if (!wt) {
                wt = [];
                for (s in r) r.hasOwnProperty(s) && (wt.push(s), r[s].related && (wt = wt.concat(r[s].related)));
                wt = RegExp("\\.(" + wt.join("|") + ")(\\?.*)?$", "i")
            }
            return s = n ? n.toLowerCase().match(wt) : null, !s || !s.length ? e && (n = e.indexOf(";"), s = (-1 !== n ? e.substr(0, n) : e).substr(6)) : s = s[1], s && u.html5[s] !== t ? n = u.html5[s] && !i(s) : (e = "audio/" + s, n = u.html5.canPlayType({
                type: e
            }), n = (u.html5[s] = n) && u.html5[e] && !i(e)), n
        }, xt = function() {
            function e(e) {
                var t, r = t = !1;
                if (!n || "function" != typeof n.canPlayType) return t;
                if (e instanceof Array) {
                    a = 0;
                    for (t = e.length; a < t; a++)
                        if (u.html5[e[a]] || n.canPlayType(e[a]).match(u.html5Test)) r = !0, u.html5[e[a]] = !0, u.flash[e[a]] = !!e[a].match(Xt);
                    t = r
                } else e = n && "function" == typeof n.canPlayType ? n.canPlayType(e) : !1, t = !!e && !!e.match(u.html5Test);
                return t
            }
            if (!u.useHTML5Audio || !u.hasHTML5) return mt = u.html5.usingFlash = !0, !1;
            var n = Audio !== t ? It && 10 > opera.version() ? new Audio(null) : new Audio : null,
                r, i, s = {},
                o, a;
            o = u.audioFormats;
            for (r in o)
                if (o.hasOwnProperty(r) && (i = "audio/" + r, s[r] = e(o[r].type), s[i] = s[r], r.match(Xt) ? (u.flash[r] = !0, u.flash[i] = !0) : (u.flash[r] = !1, u.flash[i] = !1), o[r] && o[r].related))
                    for (a = o[r].related.length - 1; 0 <= a; a--) s["audio/" + o[r].related[a]] = s[r], u.html5[o[r].related[a]] = s[r], u.flash[o[r].related[a]] = s[r];
            return s.canPlayType = n ? e : null, u.html5 = C(u.html5, s), u.html5.usingFlash = gt(), mt = u.html5.usingFlash, !0
        }, F = {}, et = function() {}, rt = function(e) {
            return 8 === y && 1 < e.loops && e.stream && (e.stream = !1), e
        }, it = function(e, t) {
            return e && !e.usePolicyFile && (e.onid3 || e.usePeakData || e.useWaveformData || e.useEQData) && (e.usePolicyFile = !0), e
        }, d = function() {
            return !1
        }, K = function(e) {
            for (var t in e) e.hasOwnProperty(t) && "function" == typeof e[t] && (e[t] = d)
        }, Q = function(e) {
            e === t && (e = !1), (x || e) && u.disable(e)
        }, G = function(e) {
            var t = null;
            if (e)
                if (e.match(/\.swf(\?.*)?$/i)) {
                    if (t = e.substr(e.toLowerCase().lastIndexOf(".swf?") + 4)) return e
                } else e.lastIndexOf("/") !== e.length - 1 && (e += "/");
            return e = (e && -1 !== e.lastIndexOf("/") ? e.substr(0, e.lastIndexOf("/") + 1) : "./") + u.movieURL, u.noSWFCache && (e += "?ts=" + (new Date).getTime()), e
        }, B = function() {
            y = parseInt(u.flashVersion, 10), 8 !== y && 9 !== y && (u.flashVersion = y = 8);
            var e = u.debugMode || u.debugFlash ? "_debug.swf" : ".swf";
            u.useHTML5Audio && !u.html5Only && u.audioFormats.mp4.required && 9 > y && (u.flashVersion = y = 9), u.version = u.versionNumber + (u.html5Only ? " (HTML5-only mode)" : 9 === y ? " (AS3/Flash 9)" : " (AS2/Flash 8)"), 8 < y ? (u.defaultOptions = C(u.defaultOptions, u.flash9Options), u.features.buffering = !0, u.defaultOptions = C(u.defaultOptions, u.movieStarOptions), u.filePatterns.flash9 = RegExp("\\.(mp3|" + Kt.join("|") + ")(\\?.*)?$", "i"), u.features.movieStar = !0) : u.features.movieStar = !1, u.filePattern = u.filePatterns[8 !== y ? "flash9" : "flash8"], u.movieURL = (8 === y ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", e), u.features.peakData = u.features.waveformData = u.features.eqData = 8 < y
        }, $ = function(e, t) {
            if (!f) return !1;
            f._setPolling(e, t)
        }, J = function() {}, st = this.getSoundById, nt = function() {
            var e = [];
            return u.debugMode && e.push("sm2_debug"), u.debugFlash && e.push("flash_debug"), u.useHighPerformance && e.push("high_performance"), e.join(" ")
        }, tt = function() {
            et("fbHandler");
            var e = u.getMoviePercent(),
                t = {
                    type: "FLASHBLOCK"
                };
            if (u.html5Only) return !1;
            u.ok() ? u.oMC && (u.oMC.className = [nt(), "movieContainer", "swf_loaded" + (u.didFlashBlock ? " swf_unblocked" : "")].join(" ")) : (mt && (u.oMC.className = nt() + " movieContainer " + (null === e ? "swf_timedout" : "swf_error")), u.didFlashBlock = !0, M({
                type: "ontimeout",
                ignoreInit: !0,
                error: t
            }), V(t))
        }, O = function(e, n, r) {
            b[e] === t && (b[e] = []), b[e].push({
                method: n,
                scope: r || null,
                fired: !1
            })
        }, M = function(e) {
            e || (e = {
                type: u.ok() ? "onready" : "ontimeout"
            });
            if (!S && e && !e.ignoreInit || "ontimeout" === e.type && (u.ok() || x && !e.ignoreInit)) return !1;
            var t = {
                    success: e && e.ignoreInit ? u.ok() : !x
                },
                n = e && e.type ? b[e.type] || [] : [],
                r = [],
                i, t = [t],
                s = mt && !u.ok();
            e.error && (t[0].error = e.error), e = 0;
            for (i = n.length; e < i; e++) !0 !== n[e].fired && r.push(n[e]);
            if (r.length) {
                e = 0;
                for (i = r.length; e < i; e++) r[e].scope ? r[e].method.apply(r[e].scope, t) : r[e].method.apply(this, t), s || (r[e].fired = !0)
            }
            return !0
        }, _ = function() {
            e.setTimeout(function() {
                u.useFlashBlock && tt(), M(), "function" == typeof u.onload && u.onload.apply(e), u.waitForWindowLoad && Tt.add(e, "load", _)
            }, 1)
        }, At = function() {
            if (Lt !== t) return Lt;
            var n = !1,
                r = navigator,
                i = r.plugins,
                s, o = e.ActiveXObject;
            if (i && i.length)(r = r.mimeTypes) && r["application/x-shockwave-flash"] && r["application/x-shockwave-flash"].enabledPlugin && r["application/x-shockwave-flash"].enabledPlugin.description && (n = !0);
            else if (o !== t && !c.match(/MSAppHost/i)) {
                try {
                    s = new o("ShockwaveFlash.ShockwaveFlash")
                } catch (u) {
                    s = null
                }
                n = !!s
            }
            return Lt = n
        }, gt = function() {
            var e, t, n = u.audioFormats;
            Pt && c.match(/os (1|2|3_0|3_1)/i) ? (u.hasHTML5 = !1, u.html5Only = !0, u.oMC && (u.oMC.style.display = "none")) : u.useHTML5Audio && (!u.html5 || !u.html5.canPlayType) && (u.hasHTML5 = !1);
            if (u.useHTML5Audio && u.hasHTML5)
                for (t in vt = !0, n) n.hasOwnProperty(t) && n[t].required && (u.html5.canPlayType(n[t].type) ? u.preferFlash && (u.flash[t] || u.flash[n[t].type]) && (e = !0) : (vt = !1, e = !0));
            return u.ignoreFlash && (e = !1, vt = !0), u.html5Only = u.hasHTML5 && u.useHTML5Audio && !e, !u.html5Only
        }, pt = function(e) {
            var t, n, r = 0;
            if (e instanceof Array) {
                t = 0;
                for (n = e.length; t < n; t++)
                    if (e[t] instanceof Object) {
                        if (u.canPlayMIME(e[t].type)) {
                            r = t;
                            break
                        }
                    } else if (u.canPlayURL(e[t])) {
                    r = t;
                    break
                }
                e[r].url && (e[r] = e[r].url), e = e[r]
            }
            return e
        }, at = function(e) {
            e._hasTimer || (e._hasTimer = !0, !qt && u.html5PollingInterval && (null === ht && 0 === ct && (ht = setInterval(lt, u.html5PollingInterval)), ct++))
        }, ft = function(e) {
            e._hasTimer && (e._hasTimer = !1, !qt && u.html5PollingInterval && ct--)
        }, lt = function() {
            var e;
            if (null !== ht && !ct) return clearInterval(ht), ht = null, !1;
            for (e = u.soundIDs.length - 1; 0 <= e; e--) u.sounds[u.soundIDs[e]].isHTML5 && u.sounds[u.soundIDs[e]]._hasTimer && u.sounds[u.soundIDs[e]]._onTimer()
        }, V = function(n) {
            n = n !== t ? n : {}, "function" == typeof u.onerror && u.onerror.apply(e, [{
                type: n.type !== t ? n.type : null
            }]), n.fatal !== t && n.fatal && u.disable()
        }, Ot = function() {
            if (!Rt || !At()) return !1;
            var e = u.audioFormats,
                t, n;
            for (n in e)
                if (e.hasOwnProperty(n) && ("mp3" === n || "mp4" === n))
                    if (u.html5[n] = !1, e[n] && e[n].related)
                        for (t = e[n].related.length - 1; 0 <= t; t--) u.html5[e[n].related[t]] = !1
        }, this._setSandboxType = function(e) {}, this._externalInterfaceOK = function(e) {
            if (u.swfLoaded) return !1;
            u.swfLoaded = !0, zt = !1, Rt && Ot(), setTimeout(m, Bt ? 100 : 1)
        }, X = function(e, n) {
            function r(e, t) {
                return '<param name="' + e + '" value="' + t + '" />'
            }
            if (w && E) return !1;
            if (u.html5Only) return B(), u.oMC = l(u.movieID), m(), E = w = !0, !1;
            var i = n || u.url,
                s = u.altURL || i,
                o = W(),
                a = nt(),
                f = null,
                f = p.getElementsByTagName("html")[0],
                h, d, v, f = f && f.dir && f.dir.match(/rtl/i);
            e = e === t ? u.id : e, B(), u.url = G(Vt ? i : s), n = u.url, u.wmode = !u.wmode && u.useHighPerformance ? "transparent" : u.wmode, null !== u.wmode && (c.match(/msie 8/i) || !Bt && !u.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (dt.push(F.spcWmode), u.wmode = null), o = {
                name: e,
                id: e,
                src: n,
                quality: "high",
                allowScriptAccess: u.allowScriptAccess,
                bgcolor: u.bgColor,
                pluginspage: $t + "www.macromedia.com/go/getflashplayer",
                title: "JS/Flash audio component (SoundManager 2)",
                type: "application/x-shockwave-flash",
                wmode: u.wmode,
                hasPriority: "true"
            }, u.debugFlash && (o.FlashVars = "debug=1"), u.wmode || delete o.wmode;
            if (Bt) i = p.createElement("div"), d = ['<object id="' + e + '" data="' + n + '" type="' + o.type + '" title="' + o.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + $t + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', r("movie", n), r("AllowScriptAccess", u.allowScriptAccess), r("quality", o.quality), u.wmode ? r("wmode", u.wmode) : "", r("bgcolor", u.bgColor), r("hasPriority", "true"), u.debugFlash ? r("FlashVars", o.FlashVars) : "", "</object>"].join("");
            else
                for (h in i = p.createElement("embed"), o) o.hasOwnProperty(h) && i.setAttribute(h, o[h]);
            J(), a = nt();
            if (o = W())
                if (u.oMC = l(u.movieID) || p.createElement("div"), u.oMC.id) v = u.oMC.className, u.oMC.className = (v ? v + " " : "movieContainer") + (a ? " " + a : ""), u.oMC.appendChild(i), Bt && (h = u.oMC.appendChild(p.createElement("div")), h.className = "sm2-object-box", h.innerHTML = d), E = !0;
                else {
                    u.oMC.id = u.movieID, u.oMC.className = "movieContainer " + a, h = a = null, u.useFlashBlock || (u.useHighPerformance ? a = {
                        position: "fixed",
                        width: "8px",
                        height: "8px",
                        bottom: "0px",
                        left: "0px",
                        overflow: "hidden"
                    } : (a = {
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        top: "-9999px",
                        left: "-9999px"
                    }, f && (a.left = Math.abs(parseInt(a.left, 10)) + "px"))), jt && (u.oMC.style.zIndex = 1e4);
                    if (!u.debugFlash)
                        for (v in a) a.hasOwnProperty(v) && (u.oMC.style[v] = a[v]);
                    try {
                        Bt || u.oMC.appendChild(i), o.appendChild(u.oMC), Bt && (h = u.oMC.appendChild(p.createElement("div")), h.className = "sm2-object-box", h.innerHTML = d), E = !0
                    } catch (g) {
                        throw Error(et("domError") + " \n" + g.toString())
                    }
                }
            return w = !0
        }, I = function() {
            return u.html5Only ? (X(), !1) : f || !u.url ? !1 : (f = u.getMovie(u.id), f || (Y ? (Bt ? u.oMC.innerHTML = Z : u.oMC.appendChild(Y), Y = null, w = !0) : X(u.id, u.url), f = u.getMovie(u.id)), "function" == typeof u.oninitmovie && setTimeout(u.oninitmovie, 1), !0)
        }, D = function() {
            setTimeout(P, 1e3)
        }, H = function() {
            e.setTimeout(function() {
                u.setup({
                    preferFlash: !1
                }).reboot(), u.didFlashBlock = !0, u.beginDelayedInit()
            }, 1)
        }, P = function() {
            var t, n = !1;
            if (!u.url || ot) return !1;
            ot = !0, Tt.remove(e, "load", D);
            if (Lt && zt && !Ut) return !1;
            S || (t = u.getMoviePercent(), 0 < t && 100 > t && (n = !0)), setTimeout(function() {
                t = u.getMoviePercent();
                if (n) return ot = !1, e.setTimeout(D, 1), !1;
                !S && Wt && (null === t ? u.useFlashBlock || 0 === u.flashLoadTimeout ? u.useFlashBlock && tt() : !u.useFlashBlock && vt ? H() : M({
                    type: "ontimeout",
                    ignoreInit: !0,
                    error: {
                        type: "INIT_FLASHBLOCK"
                    }
                }) : 0 !== u.flashLoadTimeout && (!u.useFlashBlock && vt ? H() : Q(!0)))
            }, u.flashLoadTimeout)
        }, j = function() {
            return Ut || !zt ? (Tt.remove(e, "focus", j), !0) : (Ut = Wt = !0, ot = !1, D(), Tt.remove(e, "focus", j), !0)
        }, N = function(t) {
            if (S) return !1;
            if (u.html5Only) return S = !0, _(), !0;
            var n = !0,
                r;
            if (!u.useFlashBlock || !u.flashLoadTimeout || u.getMoviePercent()) S = !0;
            r = {
                type: !Lt && mt ? "NO_FLASH" : "INIT_TIMEOUT"
            };
            if (x || t) u.useFlashBlock && u.oMC && (u.oMC.className = nt() + " " + (null === u.getMoviePercent() ? "swf_timedout" : "swf_error")), M({
                type: "ontimeout",
                error: r,
                ignoreInit: !0
            }), V(r), n = !1;
            return x || (u.waitForWindowLoad && !T ? Tt.add(e, "load", _) : _()), n
        }, v = function() {
            var e, n = u.setupOptions;
            for (e in n) n.hasOwnProperty(e) && (u[e] === t ? u[e] = n[e] : u[e] !== n[e] && (u.setupOptions[e] = u[e]))
        }, m = function() {
            if (S) return !1;
            if (u.html5Only) return S || (Tt.remove(e, "load", u.beginDelayedInit), u.enabled = !0, N()), !0;
            I();
            try {
                f._externalInterfaceTest(!1), $(!0, u.flashPollingInterval || (u.useHighPerformance ? 10 : 50)), u.debugMode || f._disableDebug(), u.enabled = !0, u.html5Only || Tt.add(e, "unload", d)
            } catch (t) {
                return V({
                    type: "JS_TO_FLASH_EXCEPTION",
                    fatal: !0
                }), Q(!0), N(), !1
            }
            return N(), Tt.remove(e, "load", u.beginDelayedInit), !0
        }, R = function() {
            return z ? !1 : (z = !0, v(), J(), !Lt && u.hasHTML5 && u.setup({
                useHTML5Audio: !0,
                preferFlash: !1
            }), xt(), !Lt && mt && (dt.push(F.needFlash), u.setup({
                flashLoadTimeout: 1
            })), p.removeEventListener && p.removeEventListener("DOMContentLoaded", R, !1), I(), !0)
        }, St = function() {
            return "complete" === p.readyState && (R(), p.detachEvent("onreadystatechange", St)), !0
        }, U = function() {
            T = !0, Tt.remove(e, "load", U)
        }, q = function() {
            qt && (u.setupOptions.useHTML5Audio = !0, u.setupOptions.preferFlash = !1, Pt || Ht && !c.match(/android\s2\.3/i)) && (Pt && (u.ignoreFlash = !0), Ct = !0)
        }, q(), At(), Tt.add(e, "focus", j), Tt.add(e, "load", D), Tt.add(e, "load", U), p.addEventListener ? p.addEventListener("DOMContentLoaded", R, !1) : p.attachEvent ? p.attachEvent("onreadystatechange", St) : V({
            type: "NO_DOM2_EVENTS",
            fatal: !0
        })
    }
    var r = null;
    if (void 0 === e.SM2_DEFER || !SM2_DEFER) r = new n;
    e.SoundManager = n, e.soundManager = r
})(window);