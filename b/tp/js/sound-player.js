/**
 * SoundPlayer - klasa odpowiadająca za odtwarzanie dziwięków
 * author: jjagoda, tnowakow
 * Date: 29.10.13
 * Require: lib/soundmanager2
 * @module common
 * @class PTK.SoundPlayer
 */

var PTK;
if (typeof PTK == "undefined") PTK = {};
if (typeof PTK.SoundPlayer == "undefined") {

    PTK.SoundPlayer = Class.create({

        initialize: function(soundUrls, options) {

            this.defaults = {
                manager: {
                    url: '/b/tp/js/lib/soundmanager/swf/',
                    flashVersion: 9,
                    //autoPlay: false,
                    useFlashBlock: false,
                    onready: this.onReady.bind(this)
                },
                playerId: null,
                playerPrefix: 's-', // przy uruchamianiu jednoczesnie player mp3 i captcha konflikt id utrowru
                onReady: function() {},
                onStopAll: function() {},
                onTimeout: function() {},
                onSoundNotSupported: function() {}

            };

            this.settings = Object.extend(this.defaults, options || {});
            this.isReady = false;
            this.soundUrls = soundUrls;
            this.sounds = [];
            this.currentSoundIndex = 0;
            this.loadedSoundIndex = 0;

            $LAB.setOptions({
                AlwaysPreserveOrder: true,
                AppendTo: 'body'
            }).script(
                '/b/tp/js/lib/soundmanager/soundmanager2-nodebug-jsmin.js'
            ).wait(function() {
                //Flash potrzebuje zmiennej wyeksportowanej do window
                window.soundManager = soundManager;
                soundManager.setup(this.settings.manager);
                soundManager.beginDelayedInit();
                soundManager.ontimeout(this.onTimeout);
            }.bind(this));

            return this;
        },

        eventNameWithID: function(eventName) {
            if (this.settings.playerId) {
                return eventName + '.' + this.settings.playerId;
            } else {
                return eventName;
            }
        },

        onReady: function() {
            if (soundManager.supported()) {
                this.isReady = true;
                this.settings.onReady();
            } else {
                this.settings.onSoundNotSupported();
            }
        },

        onTimeout: function() {
            console.error('PTK.SoundPlayer.onTimeout()');
            this.settings.onTimeout();
        },

        preload: function() {

        },

        reset: function() {
            soundManager.reset();
        },

        play: function() {
            this.playOne(this.currentSoundIndex);
        },
        pause: function() {
            soundManager.pause(this.settings.playerPrefix + this.currentSoundIndex);

        },
        resume: function() {
            soundManager.resume(this.settings.playerPrefix + this.currentSoundIndex);
        },
        playOne: function(index) {
            if (this.currentSoundIndex < this.soundUrls.length) {
                this.createSoundObject(index);
            } else {
                this.stop();
            }
        },

        createSoundObject: function(index) {

            var soundUrl = this.soundUrls[index];

            if (this.sounds[index]) soundManager.destroySound(this.settings.playerPrefix + index);

            this.sounds[index] = soundManager.createSound({
                id: this.settings.playerPrefix + index,
                url: soundUrl,
                /*onload: this.onSoundLoaded.bind(this),*/
                autoLoad: true,
                autoPlay: true,
                stream: false,
                type: 'audio/mpeg',
                onload: this.onSoundLoaded.bind(this),
                onfinish: this.onSoundFinish.bind(this)

            });

            /*var so = this.sounds[this.currentSoundIndex];
            so.load({
                onload: this.onSoundLoaded.bind(this)
            });*/

            //            this.sounds[index] = so;
            //            }
        },

        onSoundLoaded: function(loaded, sound) {
            /*this.loadedSoundIndex++;
            if(this.loadedSoundIndex === this.soundUrls.length){
                pubSub.publish(ns.events.allSoundsLoaded);
            }*/

            //var so = this.sounds[this.currentSoundIndex];
            //console.log('SO: ', so);
            //console.log('SO: ', sound);
            //so.play({onfinish:this.onSoundFinish.bind(this)});

        },

        onSoundFinish: function() {
            this.playNext();
        },

        destroyCurrentSound: function() {
            var so = this.sounds[this.currentSoundIndex];
            if (so) {
                soundManager.destroySound(so.id);
                this.sounds[this.currentSoundIndex] = null;
            }
        },

        playNext: function() {
            this.destroyCurrentSound();
            this.currentSoundIndex++;
            this.playOne(this.currentSoundIndex);
        },

        stop: function() {
            soundManager.stopAll();
            this.settings.onStopAll();
            this.destroyCurrentSound();
            this.currentSoundIndex = 0;
        },

        createSoundObjects: function() {
            enumerable.each(this.soundUrls, function(soundUrl, index) {
                var so = soundManager.createSound({
                    id: this.settings.playerPrefix + index,
                    url: soundUrl,
                    //                    autoLoad: true,
                    //                    autoPlay: false,
                    onload: this.onSoundLoaded.bind(this)
                });

                this.sounds.push(so);

            }, this)
        },

        isLoading: function() {
            enumerable.every(this.sounds, function(sound, index) {
                // został załadowany
                return sound.readystate === 3;
            }, this);
        }

    });
}