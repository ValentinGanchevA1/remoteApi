/**
 * User: jjagoda
 * Date: 10.12.12
 */


/**
 * From Backbone Aura
 *
 * The bind method is used for callbacks.
 * (bind)[https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind]
 * (You don't need to use $.proxy)[http://www.aaron-powell.com/javascript/you-dont-need-jquery-proxy]
 *
 */
if (!Function.prototype.bind) {

    /* for IE8 tests */
    window.protoBindUndefined = true;
    Function.prototype.bind = function(oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1);
        var fToBind = this;
        var FNOP = function() {};
        var FBound = function() {
            return fToBind.apply(this instanceof FNOP && oThis ? this : oThis,
                aArgs.concat(Array.prototype.slice.call(arguments)));
        };

        FNOP.prototype = this.prototype;
        FBound.prototype = new FNOP();

        return FBound;
    };
} else {
    window.protoBindUndefined = false;
}


/**
 * definiuje namespace według zadanego wzorca np. 'app.obj1.obj2'
 * @param {string}  namespace
 * @return {object} namespaceObject
 */
var namespace = function(namespace) {
    var object = this,
        tokens = namespace.split("."),
        token;

    while (tokens.length > 0) {
        token = tokens.shift();

        if (typeof object[token] === "undefined") {
            object[token] = {};
        }

        object = object[token];
    }
    return object;
}

var config = {

    /* namespace aplikacji */
    namespace: 'PTK',

    showlog: false,
    showlog: false, // @DEV

    /* konfiguracja RequireJS */
    require: {
        paths: {
            'jq': 'lib/jquery', // po jQuery chcemy załadować touche.js i tym samym pozbyć sie 300ms delay dla clicka, kolejność ładowania zapewniona jest przez shim poniżej
            'underscore': 'lib/underscore',
            'pubsub': 'lib/pubsub',
            'jsface': 'lib/jsface',
            'detectizr': 'lib/detectizr',
            'underscoreDeepExtend': 'lib/plugins/underscore.mixin.deepExtend',
            'jquery-widget': 'lib/plugins/jquery-ui-widget',
            'jquery-selectboxit': 'lib/plugins/jquery.selectBoxIt',
            'jquery-nicescroll': 'lib/plugins/jquery.nicescroll',
            'jquery-datepicker': 'lib/plugins/jquery-ui-datepicker',
            'jquery-position': 'lib/plugins/jquery-ui-position',
            'openurls': '//helios.stanusch.com/players/orange_newlayout/js/openerurls',
            'swfobject': '//helios.stanusch.com/players/orange_newlayout2/js/swfobject',
            'wdscript2': '//helios.stanusch.com/players/orange_newlayout2/js/wdscript2',
            'jquery-validate': 'lib/plugins/jquery.validate',
            'jquery-mixitup': 'lib/plugins/jquery.mixitup',
            'jquery-actual': 'lib/plugins/jquery.actual',
            'swiper': 'lib/plugins/swiper',
            'scrollMagic': 'lib/plugins/ScrollMagic',
            'onoff': 'lib/onoff/onoff',
            'pointertouch': 'lib/onoff/pointertouch'
        },
        shim: {
            'detectizr': {
                deps: ['jq']
            },
            "jquery-widget": {
                deps: ['jq']
            },
            'jquery-nicescroll': {
                deps: ['jq']
            },
            'jquery-selectboxit': {
                deps: ['jquery-widget']
            },
            'plugins/custom-select': {
                deps: ['jquery-selectboxit']
            },
            'plugins/account-selector': {
                deps: ['jquery-selectboxit', 'jquery-nicescroll']
            },
            'jquery-datepicker': {
                deps: ['jq']
            },
            'jquery-position': {
                deps: ['jq']
            },
            'plugins/datepicker': {
                deps: ['jquery-datepicker', 'jquery-position']
            },
            'lib/soundmanager/soundmanager2': {
                exports: "soundManager"
            },
            'underscoreDeepExtend': {
                deps: ['underscore']
            },
            'plugins/stwd-adviser': {
                deps: ['openurls', 'swfobject', 'jq', 'wdscript2'],
            },
            'jquery-validate': {
                deps: ['jq']
            },
            'plugins/validation': {
                deps: ['jq', 'jquery-validate']
            },
            'jquery-mixitup': {
                deps: ['jq']
            },
            'jquery-actual': {
                deps: ['jq']
            },
            'plugins/layout-fixer': {
                deps: ['jq', 'jquery-actual']
            },
            'plugins/opl-mixer': {
                deps: ['jq', 'jquery-mixitup']
            },
            'plugins/touch-slider-v2': {
                deps: ['swiper']
            },
            'plugins/opl-scroll-and-animate': {
                deps: ['scrollMagic']
            },
            'pointertouch': {
                deps: ['jq']
            },
            'onoff': {
                deps: ['jq', 'pointertouch']
            },
            'plugins/onoff': {
                deps: ['jq', 'onoff']
            }

        },
        waitSeconds: 120
    },

    /* klasa używana podczas inicjalizacji pluginów JS */
    jsModuleClass: 'js-mod',

    /* atrybut data- używany do inicjalizacji modułów JS, w nim podawane są nazwy pluginów (data-js-m="ajaxify,validation") */
    jsDataAttr: 'js-m',

    /* ścieżka do pluginów JS */
    pluginsPath: 'plugins/',

    /* szerokości ekranów używane w media queries */
    /* TODO: do zastąpienia prawdziwymi mediaQuery i wykorzystanie matchMedia */
    mediaQueries: {
        screenSmall: 480,
        screenMedium: 1200
    },
    commonPlugins: {
        'nav-menu--dropdown-menu': {
            'modId': 'nav-menu',
            'name': 'dropdown-menu'
        },
        'global-custom-forms-css3': {
            'modId': 'global',
            'name': 'custom-forms-css3'
        },
        'global-remove-focus-globally': {
            'modId': 'global',
            'name': 'remove-focus-globally'
        }
    }
};

/* Definicja namespace dla aplikacji */
var ns = namespace(config.namespace);