/* CanvasCloud
@author p.palubski@amg.net.pl
*@version 0.3
*@required: prototype 1.6+ and iecanvas ver. 3 for internet explorer
*@AMG.CanvasCloud - background or/and help cloud border, based on html canvas element
*@method fullcCloudHr horizontal oriented cloud for help or background with rounded corner, fill and shadow
*	@param id - id of an element
*	@param settings{
*	 	direction - direction of cloud context
*	 	x padding - left in pixels
* 		y padding - top in pixels
* 		r - radius of a circle part used to create rounded corners
* 		width -  cloud's width without pointer's width
* 		height - clouds's height without pointer's height
* 		r1 - color red, integer - start color of rgb shadow
* 		g1 - color green, integer - start color of rgb shadow
*		b1 - color blue, integer - start color of rgb shadow
* 		rgb2 - color in convention [r,g,b]  - fill
* 		rgb3 - color in convention [r,g,b]  - border
* 		pointerW - pointer's height
* 		pointerExt - range of a pointer outside a cloud
*	}
*
*@method fullcCloudVt vertical oriented cloud for help or background with rounded corner, fill and shadow
*	@param id - id of an element
*	@param settings{
*	 	direction - direction of a cloud context
*	 	x padding - left in pixels
* 		y padding - top in pixels
* 		r - radius of a circle part used to create rounded corners
* 		width -  cloud's width without pointer's width
* 		height - clouds's height without pointer's height
* 		r1 - color red, integer - start color of rgb shadow
* 		g1 - color green, integer - start color of rgb shadow
*		b1 - color blue, integer - start color of rgb shadow
* 		rgb2 - color in convention [r,g,b]  - fill
* 		rgb3 - color in convention [r,g,b]  - border
* 		pointerW - pointer's height
* 		pointerExt - range of a pointer outside a cloud
*	}
*fullcCloudFloatVt vertical oriented cloud for help or background with rounded corner, fill and shadow with movable pointer
*	@param id - id of an element
*	@param settings{
*	 	direction - direction of a cloud context
*		pointerFloatDirection - direction of a cloud context ('left' or 'right')
*		pointerFloatSize - pointerFloatSize - scroll of a pointer (multiplier)  <0.1 - 0.9>
*	 	x padding - left in pixels
* 		y padding - top in pixels
* 		r - radius of a circle part used to create rounded corners
* 		width -  cloud's width without pointer's width
* 		height - clouds's height without pointer's height
* 		r1 - color red, integer - start color of rgb shadow
* 		g1 - color green, integer - start color of rgb shadow
*		b1 - color blue, integer - start color of rgb shadow
* 		rgb2 - color in convention [r,g,b]  - fill
* 		rgb3 - color in convention [r,g,b]  - border
* 		pointerW - pointer's height
* 		pointerExt - range of a pointer outside a cloud
*	}
*@method cleanCloud fills the box 
*	@param elementId - element id
*	@param settings{
*		width -  width || width of $(elementId),
*		height- height || height of $(elementId),
*		rgb - color rgb || [255,255,255]
*	}
*/


var TP;
if (typeof TP == "undefined") TP = {};
if (typeof TP.CanvasCloud == "undefined") {

    TP.CanvasCloud = {

        fullcCloudHr: function(elementId, settings) {
            /* settings:   direction,x,y,cornerRadius,width,height,r1,g1,b1,rgb2,rgb3,pointerW,pointerExt,maxk */
            var thisRef = this;

            //default settings
            var opt = settings || {};
            opt.direction = opt.direction || false;
            opt.x = opt.x || 0;
            opt.y = opt.y || 0;
            opt.cornerRadius = opt.cornerRadius || 5;
            opt.width = opt.width || 200;
            opt.height = opt.height || 100;
            opt.r1 = opt.r1 || 200;
            opt.g1 = opt.g1 || 200;
            opt.b1 = opt.b1 || 200;
            opt.rgb2 = opt.rgb2 || [254, 254, 254];
            opt.rgb3 = opt.rgb3 || [100, 100, 100];
            opt.pointerW = opt.pointerW || 0;
            opt.pointerExt = opt.pointerExt || 0;
            opt.maxk = opt.maxk || 5;
            opt.mode = opt.mode || false;
            /* jesli chmorka ma byc z prawej to odsowamy ja od lewej o dlugosc dziubka */
            opt.direction ? null : opt.x = opt.x + opt.pointerExt;
            opt.width = opt.width - opt.pointerExt;
            (opt.r1 + 6 * opt.maxk > 255) ? opt.r1 = 256 - 6 * opt.maxk: null;
            (opt.g1 + 6 * opt.maxk > 255) ? opt.g1 = 256 - 6 * opt.maxk: null;
            (opt.b1 + 6 * opt.maxk > 255) ? opt.b1 = 256 - 6 * opt.maxk: null;

            function cCloudHr(id, hrDir, x, y, r, width, height, rgb, mode, pointerW, pointerExt) {





                var pointer_pol = Math.floor(pointerW / 2);
                var ctx = document.getElementById(id).getContext('2d');

                // TPAS-23954 - konieczne były transformacje na canvasie w celu pokonania wygladzania krawedzi
                ctx.translate(0.5, 0.5);
                x = x - 0.5;
                y = y - 0.5;
                width = width - 0.5;
                height = height - 0.5;
                //TPAS-23954 end

                mode ? ctx.strokeStyle = 'rgb(' + rgb.join(',') + ')' : ctx.fillStyle = 'rgb(' + rgb.join(',') + ')'; //kolor krawedzi lub wypelnienia
                ctx.beginPath();
                ctx.moveTo(x, y + r);
                hrDir ? null : ctx.lineTo(x, height / 2 + (y - pointer_pol));
                hrDir ? null : ctx.lineTo(x - pointerExt, height / 2 + y); //pointer Ext z lewej
                hrDir ? null : ctx.lineTo(x, height / 2 + (y + pointer_pol));
                ctx.lineTo(x, height + y - r);
                ctx.arc(x + r, height - r + y, r, Math.PI, Math.PI / 2, true);
                ctx.lineTo(x + width - r, height + y);
                ctx.arc(x + width - r, height + y - r, r, Math.PI / 2, Math.PI * 2, true);
                hrDir ? ctx.lineTo(x + width, height / 2 + (y + pointer_pol)) : null;
                hrDir ? ctx.lineTo(x + width + pointerExt, height / 2 + y) : null; //pointer Ext z prawej
                hrDir ? ctx.lineTo(x + width, height / 2 + (y - pointer_pol)) : null;
                ctx.lineTo(x + width, y + r);
                ctx.arc(x + width - r, y + r, r, 0, 3 * Math.PI / 2, true);
                ctx.lineTo(x + r, y);
                ctx.arc(x + r, y + r, r, 3 * Math.PI / 2, Math.PI, true);
                //ie wypelnia inaczej wiec jesli chcemy miec wypelniony dymek to:
                /*mode ? null : ctx.lineTo(x,height+y-r);
                mode ? null : ctx.lineTo(x+width-r,height+y);
                mode ? null : ctx.lineTo(x+width,y+r);
                mode ? null : ctx.lineTo(x+r,y);*/
                //ie wypelnia inaczej------end
                mode ? ctx.stroke() : ctx.fill(); //rysuje krawedz lub wypelnia ksztalt
            }

            for (var k = 1; k < opt.maxk; k++) {
                cCloudHr(elementId, opt.direction, opt.x + opt.maxk - k, opt.y + opt.maxk - k, opt.cornerRadius + k, opt.width - 2 * opt.maxk + 2 * k, opt.height - 2 * opt.maxk + 2 * k, [opt.r1 + 6 * k, opt.g1 + 6 * k, opt.b1 + 6 * k], true, opt.pointerW + k, opt.pointerExt);
            }
            cCloudHr(elementId, opt.direction, opt.x + opt.maxk, opt.y + opt.maxk, opt.cornerRadius, opt.width - 2 * opt.maxk, opt.height - 2 * opt.maxk, opt.rgb2, opt.mode, opt.pointerW, opt.pointerExt);
            cCloudHr(elementId, opt.direction, opt.x + opt.maxk, opt.y + opt.maxk, opt.cornerRadius, opt.width - 2 * opt.maxk, opt.height - 2 * opt.maxk, opt.rgb3, true, opt.pointerW, opt.pointerExt);

            return thisRef.fullcCloudVt;
        },

        fullcCloudVt: function(elementId, settings) {
            /* settings:   direction,x,y,cornerRadius,width,height,r1,g1,b1,rgb2,rgb3,pointerW,pointerExt,maxk */
            var thisRef = this;

            //default settings
            var opt = settings || {};
            opt.direction = opt.direction || false;
            opt.x = opt.x || 0;
            opt.y = opt.y || 0;
            opt.cornerRadius = opt.cornerRadius || 5;
            opt.width = opt.width || 200;
            opt.height = opt.height || 100;
            opt.r1 = opt.r1 || 200;
            opt.g1 = opt.g1 || 200;
            opt.b1 = opt.b1 || 200;
            opt.rgb2 = opt.rgb2 || [255, 255, 255];
            opt.rgb3 = opt.rgb3 || [100, 100, 100];
            opt.pointerW = opt.pointerW || 20;
            opt.pointerExt = opt.pointerExt || 40;
            opt.maxk = opt.maxk || 5;
            opt.mode = opt.mode || false;
            /* jesli chmorka ma byc pod spodem to odsowamy ja od gory o dlugosc dziubka */
            opt.direction ? opt.y = opt.y + opt.pointerExt : null;
            opt.height = opt.height - opt.pointerExt;
            (opt.r1 + 6 * opt.maxk > 255) ? opt.r1 = 256 - 6 * opt.maxk: null;
            (opt.g1 + 6 * opt.maxk > 255) ? opt.g1 = 256 - 6 * opt.maxk: null;
            (opt.b1 + 6 * opt.maxk > 255) ? opt.b1 = 256 - 6 * opt.maxk: null;

            function cCloudVt(id, vtDir, x, y, r, width, height, rgb, mode, pointerW, pointerExt) {
                var pointer_pol = Math.floor(pointerW / 2);
                var ctx = document.getElementById(id).getContext('2d');
                mode ? ctx.strokeStyle = 'rgb(' + rgb.join(',') + ')' : ctx.fillStyle = 'rgb(' + rgb.join(',') + ')'; //kolor krawedzi lub wypelnienia
                ctx.beginPath();
                ctx.moveTo(x, y + r);
                ctx.lineTo(x, height + y - r);
                ctx.arc(x + r, height - r + y, r, Math.PI, Math.PI / 2, true);
                vtDir ? null : ctx.lineTo(width / 2 + (x - pointer_pol), y + height);
                vtDir ? null : ctx.lineTo(width / 2 + x, y + height + pointerExt); //pointer Ext z lewej
                vtDir ? null : ctx.lineTo(width / 2 + (x + pointer_pol), y + height);
                ctx.lineTo(x + width - r, height + y);
                ctx.arc(x + width - r, height + y - r, r, Math.PI / 2, Math.PI * 2, true);
                ctx.lineTo(x + width, y + r);
                ctx.arc(x + width - r, y + r, r, 0, 3 * Math.PI / 2, true);
                vtDir ? ctx.lineTo(width / 2 + (x + pointer_pol), y) : null;
                vtDir ? ctx.lineTo(width / 2 + x, y - pointerExt) : null; //pointer Ext z prawej
                vtDir ? ctx.lineTo(width / 2 + (x - pointer_pol), y) : null;
                ctx.lineTo(x + r, y);
                ctx.arc(x + r, y + r, r, 3 * Math.PI / 2, Math.PI, true);
                //ie wypelnia inaczej wiec jesli chcemy miec wypelniony dymek to:
                /*mode ? null : ctx.lineTo(x,height+y-r);
                mode ? null : ctx.lineTo(x+width-r,height+y);
                mode ? null : ctx.lineTo(x+width,y+r);
                mode ? null : ctx.lineTo(x+r,y);*/
                //ie wypelnia inaczej------end
                mode ? ctx.stroke() : ctx.fill(); //rysuje krawedz lub wypelnia ksztalt
            }


            for (var k = 1; k < opt.maxk; k++) {
                cCloudVt(elementId, opt.direction, opt.x + opt.maxk - k, opt.y + opt.maxk - k, opt.cornerRadius + k, opt.width - 2 * opt.maxk + 2 * k, opt.height - 2 * opt.maxk + 2 * k, [opt.r1 + 6 * k, opt.g1 + 6 * k, opt.b1 + 6 * k], true, opt.pointerW + k, opt.pointerExt);
            }
            cCloudVt(elementId, opt.direction, opt.x + opt.maxk, opt.y + opt.maxk, opt.cornerRadius, opt.width - 2 * opt.maxk, opt.height - 2 * opt.maxk, opt.rgb2, opt.mode, opt.pointerW, opt.pointerExt);
            cCloudVt(elementId, opt.direction, opt.x + opt.maxk, opt.y + opt.maxk, opt.cornerRadius, opt.width - 2 * opt.maxk, opt.height - 2 * opt.maxk, opt.rgb3, true, opt.pointerW, opt.pointerExt);

            return thisRef.fullcCloudVt;

        },

        fullcCloudFloatVt: function(elementId, settings) {
            /* settings:   direction,x,y,cornerRadius,width,height,r1,g1,b1,rgb2,rgb3,pointerW,pointerExt,maxk */
            var thisRef = this;

            //default settings
            var opt = settings || {};
            opt.direction = opt.direction || false;
            opt.pointerFloatDirection = opt.pointerFloatDirection || false;
            opt.pointerFloatSize = opt.pointerFloatSize || 0.5;
            opt.x = opt.x || 0;
            opt.y = opt.y || 0;
            opt.cornerRadius = opt.cornerRadius || 5;
            opt.width = opt.width || 200;
            opt.height = opt.height || 100;
            opt.r1 = opt.r1 || 200;
            opt.g1 = opt.g1 || 200;
            opt.b1 = opt.b1 || 200;
            opt.rgb2 = opt.rgb2 || [255, 255, 255];
            opt.rgb3 = opt.rgb3 || [100, 100, 100];
            opt.pointerW = opt.pointerW || 20;
            opt.pointerExt = opt.pointerExt || 40;
            opt.maxk = opt.maxk || 1;
            opt.mode = opt.mode || false;
            /* jesli chmorka ma byc pod spodem to odsowamy ja od gory o dlugosc dziubka */
            opt.direction ? opt.y = opt.y + opt.pointerExt : null;
            opt.height = opt.height - opt.pointerExt;
            (opt.r1 + 6 * opt.maxk > 255) ? opt.r1 = 256 - 6 * opt.maxk: null;
            (opt.g1 + 6 * opt.maxk > 255) ? opt.g1 = 256 - 6 * opt.maxk: null;
            (opt.b1 + 6 * opt.maxk > 255) ? opt.b1 = 256 - 6 * opt.maxk: null;

            function cCloudVt(id, vtDir, x, y, r, width, height, rgb, mode, pointerW, pointerExt, pointerFloatDirection, pointerFloatSize) {
                var pointer_pol = Math.floor(pointerW / 2);
                var pointerFloatSizeLeft = 0;
                var pointerFloatSizeRight = 0;
                var pointer_pol_floated = 0;
                var ctx = document.getElementById(id).getContext('2d');
                mode ? ctx.strokeStyle = 'rgb(' + rgb.join(',') + ')' : ctx.fillStyle = 'rgb(' + rgb.join(',') + ')'; //kolor krawedzi lub wypelnienia
                ctx.beginPath();
                ctx.moveTo(x, y + r);
                ctx.lineTo(x, height + y - r);
                ctx.arc(x + r, height - r + y, r, Math.PI, Math.PI / 2, true);
                if (pointerFloatDirection == 'left') {
                    pointerFloatSizeLeft = pointerFloatSize;
                    pointer_pol_floated = pointer_pol;
                }
                if (pointerFloatDirection == 'right') {
                    pointerFloatSizeRight = pointerFloatSize;
                    pointer_pol_floated = pointer_pol;
                }

                /*https://jira.amg.net.pl/browse/SALSA-3048*/
                pointer_pol_floated = 0;

                vtDir ? null : ctx.lineTo(width / 2 - (width / 2) * pointerFloatSizeLeft + (width / 2) * pointerFloatSizeRight + (x - pointer_pol + pointer_pol_floated), y + height);
                vtDir ? null : ctx.lineTo(width / 2 - (width / 2) * pointerFloatSizeLeft + (width / 2) * pointerFloatSizeRight + x, y + height + pointerExt); //pointer Ext z lewej
                vtDir ? null : ctx.lineTo(width / 2 - (width / 2) * pointerFloatSizeLeft + (width / 2) * pointerFloatSizeRight + (x + pointer_pol + pointer_pol_floated), y + height);
                ctx.lineTo(x + width - r, height + y);
                ctx.arc(x + width - r, height + y - r, r, Math.PI / 2, Math.PI * 2, true);
                ctx.lineTo(x + width, y + r);
                ctx.arc(x + width - r, y + r, r, 0, 3 * Math.PI / 2, true);
                vtDir ? ctx.lineTo(width / 2 - (width / 2) * pointerFloatSizeLeft + (width / 2) * pointerFloatSizeRight + (x + pointer_pol + pointer_pol_floated), y) : null;
                vtDir ? ctx.lineTo(width / 2 - (width / 2) * pointerFloatSizeLeft + (width / 2) * pointerFloatSizeRight + x, y - pointerExt) : null; //pointer Ext z prawej
                vtDir ? ctx.lineTo(width / 2 - (width / 2) * pointerFloatSizeLeft + (width / 2) * pointerFloatSizeRight + (x - pointer_pol + pointer_pol_floated), y) : null;
                ctx.lineTo(x + r, y);
                ctx.arc(x + r, y + r, r, 3 * Math.PI / 2, Math.PI, true);
                //ie wypelnia inaczej wiec jesli chcemy miec wypelniony dymek to:
                /*mode ? null : ctx.lineTo(x,height+y-r);
                mode ? null : ctx.lineTo(x+width-r,height+y);
                mode ? null : ctx.lineTo(x+width,y+r);
                mode ? null : ctx.lineTo(x+r,y);*/
                //ie wypelnia inaczej------end
                mode ? ctx.stroke() : ctx.fill(); //rysuje krawedz lub wypelnia ksztalt
            }


            for (var k = 1; k < opt.maxk; k++) {
                cCloudVt(elementId, opt.direction, opt.x + opt.maxk - k, opt.y + opt.maxk - k, opt.cornerRadius + k, opt.width - 2 * opt.maxk + 2 * k, opt.height - 2 * opt.maxk + 2 * k, [opt.r1 + 6 * k, opt.g1 + 6 * k, opt.b1 + 6 * k], true, opt.pointerW + k, opt.pointerExt, opt.pointerFloatDirection, opt.pointerFloatSize);
            }
            cCloudVt(elementId, opt.direction, opt.x + opt.maxk, opt.y + opt.maxk, opt.cornerRadius, opt.width - 2 * opt.maxk, opt.height - 2 * opt.maxk, opt.rgb2, opt.mode, opt.pointerW, opt.pointerExt, opt.pointerFloatDirection, opt.pointerFloatSize);
            cCloudVt(elementId, opt.direction, opt.x + opt.maxk, opt.y + opt.maxk, opt.cornerRadius, opt.width - 2 * opt.maxk, opt.height - 2 * opt.maxk, opt.rgb3, true, opt.pointerW, opt.pointerExt, opt.pointerFloatDirection, opt.pointerFloatSize);

            return thisRef.fullcCloudVt;

        },

        cleanCloud: function(elementId, settings) {
            var thisRef = this;
            var opt = settings || {};
            opt.width = opt.width || $(elementId).getWidth();
            opt.height = opt.height || $(elementId).getHeight();
            opt.rgb = opt.rgb || [255, 255, 255];

            function cClean(id, width, height, rgb) {
                var ctx = document.getElementById(id).getContext('2d');
                ctx.fillStyle = 'rgb(' + rgb.join(',') + ')';
                ctx.beginPath();
                ctx.lineTo(0, height);
                ctx.lineTo(width, height);
                ctx.lineTo(width, 0);
                ctx.lineTo(0, 0);
                ctx.fill();
            }

            cClean(elementId, opt.width, opt.height, opt.rgb);
            return thisRef.cleanCloud;
        },

        cSize: function(wrappedElement, settings) {
            var thisRef = this;
            var opt = settings || {};
            //TO DO - dostosuj rozmiar
            return thisRef.cSizing;
        },

        cPosition: function(element, settings) {
            var thisRef = this;
            var opt = settings || {};
            //TO DO - zmien pozycje wg ustawien
            return thisRef.cPosition;
        }

    }
};