Function.prototype.bind ? window.protoBindUndefined = !1 : (window.protoBindUndefined = !0, Function.prototype.bind = function(e) {
    if (typeof this != "function") throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var t = Array.prototype.slice.call(arguments, 1),
        n = this,
        r = function() {},
        i = function() {
            return n.apply(this instanceof r && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
        };
    return r.prototype = this.prototype, i.prototype = new r, i
});
var namespace = function(e) {
        var t = this,
            n = e.split("."),
            r;
        while (n.length > 0) r = n.shift(), typeof t[r] == "undefined" && (t[r] = {}), t = t[r];
        return t
    },
    config = {
        namespace: "PTK",
        showlog: !1,
        showlog: !1,
        require: {
            paths: {
                jq: "lib/jquery",
                underscore: "lib/underscore",
                pubsub: "lib/pubsub",
                jsface: "lib/jsface",
                detectizr: "lib/detectizr",
                underscoreDeepExtend: "lib/plugins/underscore.mixin.deepExtend",
                "jquery-widget": "lib/plugins/jquery-ui-widget",
                "jquery-selectboxit": "lib/plugins/jquery.selectBoxIt",
                "jquery-nicescroll": "lib/plugins/jquery.nicescroll",
                "jquery-datepicker": "lib/plugins/jquery-ui-datepicker",
                "jquery-position": "lib/plugins/jquery-ui-position",
                openurls: "//helios.stanusch.com/players/orange_newlayout/js/openerurls",
                swfobject: "//helios.stanusch.com/players/orange_newlayout2/js/swfobject",
                wdscript2: "//helios.stanusch.com/players/orange_newlayout2/js/wdscript2",
                "jquery-validate": "lib/plugins/jquery.validate"
            },
            shim: {
                detectizr: {
                    deps: ["jq"]
                },
                "jquery-widget": {
                    deps: ["jq"]
                },
                "jquery-nicescroll": {
                    deps: ["jq"]
                },
                "jquery-selectboxit": {
                    deps: ["jquery-widget"]
                },
                "plugins/custom-select": {
                    deps: ["jquery-selectboxit"]
                },
                "plugins/account-selector": {
                    deps: ["jquery-selectboxit", "jquery-nicescroll"]
                },
                "jquery-datepicker": {
                    deps: ["jq"]
                },
                "jquery-position": {
                    deps: ["jq"]
                },
                "plugins/datepicker": {
                    deps: ["jquery-datepicker", "jquery-position"]
                },
                "lib/soundmanager/soundmanager2": {
                    exports: "soundManager"
                },
                underscoreDeepExtend: {
                    deps: ["underscore"]
                },
                "plugins/stwd-adviser": {
                    deps: ["openurls", "swfobject", "jq", "wdscript2"]
                },
                "jquery-validate": {
                    deps: ["jq"]
                },
                "plugins/validation": {
                    deps: ["jq", "jquery-validate"]
                }
            },
            waitSeconds: 120
        },
        jsModuleClass: "js-mod",
        jsDataAttr: "js-m",
        pluginsPath: "plugins/",
        mediaQueries: {
            screenSmall: 480,
            screenMedium: 1200
        },
        commonPlugins: {
            "nav-menu--dropdown-menu": {
                modId: "nav-menu",
                name: "dropdown-menu"
            },
            "global-custom-forms-css3": {
                modId: "global",
                name: "custom-forms-css3"
            },
            "global-remove-focus-globally": {
                modId: "global",
                name: "remove-focus-globally"
            }
        }
    },
    ns = namespace(config.namespace);