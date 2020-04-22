/** 
 * PTK.FbLike - odpowiada za obsluge facebook-owego przycisku "Like" 
 * 
 * @autor Jan Jagoda
 * @requires prototype.js
 */
/*  */

var PTK;
if (typeof PTK == "undefined") PTK = {};
if (typeof PTK.FbLike == "undefined") {


    PTK.FbLike = {

        init: function(href, options) {
            var self = this;

            this.defaults = {
                containerId: 'fb-like',
                layout: 'button_count',
                colorscheme: 'dark'
            }

            this.options = Object.extend(this.defaults, options);

            this.container = $(this.options.containerId);
            if (!this.container) return;

            //po zaladowaniu facebook-owe api wywoluje fbAsyncInit
            window.fbAsyncInit = this.fbAsyncInit;
            var width = (Prototype.Browser.IE) ? 98 : 96;
            this.container.innerHTML = '<div class="fb-like" data-href="' + href + '" data-send="false" data-width="' + width + '" data-show-faces="false" data-layout="button_count"></div>';
            this.getFbLib();
        },

        fbAsyncInit: function() {

            FB.init({
                xfbml: true,
                cookie: true
            });

            //parse powoduje problemy w ff z reklamami adtotal, fb:like dodawany jest w miejsce reklamy
            //FB.XFBML.parse(document.getElementById(this.containerId));

            //called from window scope, so this==window !
            //PTK.FbLike.onInit();

        },

        onInit: function() {
            //bo fb:ilke po zmianie zawartosci nie zmienia szerokosci w IE
            if (Prototype.Browser.IE) PTK.FbLike.resizeIframe();
        },

        resizeIframe: function() {
            var iframe = PTK.FbLike.container.select('iframe')[0];
            iframe.style.width = '120px';
        },

        //gets the FB library
        getFbLib: function() {
            var e = document.createElement('div');
            e.id = "fb-root";
            document.body.appendChild(e);

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/pl_PL/all.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }
    };
}