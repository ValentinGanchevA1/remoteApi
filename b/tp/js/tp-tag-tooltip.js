/* TagTooltip standalone
 *@author: mailto:p.palubsk@amg.net.pl
 *@version: 0.2
 * required: prototype 1.6.0.1 +
 * required: excanvas.js ver. 3 (for ie6-8)
 * required: tp-canvas-cloud-body.js (cloud definitions)
 *
 */

var TP;
if (typeof TP == "undefined") TP = {};
if (typeof TP.TagTooltip == "undefined") {

    TP.TagTooltip = Class.create({

        options: {},

        callId: null,

        boundOnBodyClick: null,

        createCanvasElement: function(callId, options, cloudContent) {

            if ($(callId)) {
                this.callId = callId;
                var paddingDirection = options.cloudOrientation || 'top';
                (options.cloudOrientation == 'top') ? paddingDirection = 'bottom': paddingDirection;
                (options.cloudOrientation == 'bottom') ? paddingDirection = 'top': paddingDirection;
                (options.cloudOrientation == 'left') ? paddingDirection = 'right': paddingDirection;
                (options.cloudOrientation == 'right') ? paddingDirection = 'left': paddingDirection;

                var padding = options.shadow + options.radius;
                var paddingSide = options.pointerExt + padding;
                var cloud = '<div id="' + options.id + '" class="tp-tooltip-body" style="display:none;position:relative;"></div>';
                var cloudBody = '<canvas id="' + options.id + '-canvas" width="' + options.tooltipWidth + '"></canvas>';
                cloudBody += '<div id="' + options.id + '-content" style="position: absolute; top:0px; left:0px; float:left; width:' + options.tooltipWidth + 'px;">';
                cloudBody += '<div style="padding:' + padding + 'px;padding-' + paddingDirection + ':' + paddingSide + 'px;float:left;">';
                cloudBody += cloudContent;
                cloudBody += '</div></div>';

                $(document.body).insert({
                    'bottom': cloud
                });
                $(options.id).innerHTML = cloudBody;
            }
        },

        initialize: function(callId, options) {

            this.options = {
                tooltipWidth: options.width || 120,
                tooltipHeight: options.height || 30,
                id: options.id,
                contentId: options.contentId || false,
                contentContainerId: options.contentContainerId || 'undefined',
                observerUsed: options.observerUsed || false,
                tooltipOrientation: options.tooltipOrientation || 'bottom-right',
                cloudOrientation: options.cloudOrientation || 'right',
                /* orientacja chmorki wzgledem aktywatora: right,left,top,bottom */
                shadow: options.shadow || 0,
                radius: options.radius || 10,
                pointerExt: options.pointerExt || 10,
                pointerW: options.pointerW || 10,
                bodyColor: options.bodyColor || [255, 255, 255],
                borderColor: options.borderColor || [200, 200, 200],
                shadowColor: options.shadowColor || [255, 255, 255],
                pointerFloatDirection: options.pointerFloatDirection || null,
                pointerFloatSize: options.pointerFloatSize || 0.5,
                autoHide: (options.autoHide == undefined) ? true : options.autoHide, // jesli jest false to znika dopiero po kliknieciu poza tooltipem
                showEvent: options.showEvent || 'mouseover',
                closingElementID: options.closingElementID || '',
                inputID: options.inputID || '',
                input: $(options.inputID) // input powiązany z tooltipem
            };
            var self = this;
            var cloudContent = $(self.options.contentContainerId).innerHTML;
            $(self.options.contentContainerId).remove(); // usuwam element bo został już skopiowany
            self.createCanvasElement(callId, self.options, cloudContent);
            (function() {
                self.initializeExcanvas(options.id);
            }).defer();

            if ($(callId)) {
                if (!options.observerUsed) {
                    $(callId).observe(this.options.showEvent, function(event) {
                        Event.stop(event);
                        self.onShowTooltip(Event.element(event), self)
                    });
                    if (this.options.autoHide) {
                        $(callId).observe('mouseout', function(event) {
                            Event.stop(event);
                            if (!self.options.input || $$('#' + self.options.inputID + ':focus').length == 0) {
                                self.onHideTooltip(Event.element(event), self)
                            }
                        });
                    }
                    if (self.options.input) {
                        self.options.input.observe('mouseover', function(event) {
                            Event.stop(event);
                            self.onShowTooltip($(callId), self)
                        });
                        self.options.input.observe('focus', function(event) {
                            Event.stop(event);
                            self.onShowTooltip($(callId), self)
                        });
                    }
                    if (self.options.input && this.options.autoHide) {
                        self.options.input.observe('mouseout', function(event) {
                            Event.stop(event);
                            if ($$('#' + self.options.inputID + ':focus').length == 0) {
                                self.onHideTooltip($(callId), self)
                            }
                        });
                        self.options.input.observe('blur', function(event) {
                            Event.stop(event);
                            self.onHideTooltip($(callId), self)
                        });
                    }
                    /*if(this.options.closingElementID != ''){
                     $(this.options.closingElementID).observe('click', function(event){
                     // skoro ta linika jest wykomentowana to raczej całość nie jest potrzebna
                     //self.hideTooltip(event, self.options.id);
                     });
                     }*/
                }
            }
        },

        onShowTooltip: function(element, self) {
            if (self.options.input) {
                self.options.input.addClassName('tooltip-active');
            }

            self.hideAllTooltips(); // ukrywa pozostale tooltipy

            var cloud = $(self.options.id);
            self.showCanvasTooltip(element, self.options.id, self.options.cloudOrientation, self.options.shadow, self.options.radius, self.options.pointerW, self.options.pointerExt, self.options.bodyColor, self.options.borderColor, self.options.shadowColor, self.options.pointerFloatDirection, self.options.pointerFloatSize);

            if (!self.options.autoHide) {
                self.boundOnBodyClick = self.onBodyClick.bind(self);
                document.getElementsByTagName('body')[0].observe('click', self.boundOnBodyClick);
            }
        },

        onHideTooltip: function(element, self) {
            if (self.options.input) {
                self.options.input.removeClassName('tooltip-active');
            }
            self.hideTooltip(element, self.options.id);
        },

        onBodyClick: function(event) {
            // jesli kliknelismy w tooltip, lub jego zawartosc to nie ukrywamy
            if (event.element().id !== this.options.id && event.element().up('#' + this.options.id) === undefined) {
                document.getElementsByTagName('body')[0].stopObserving('click', this.boundOnBodyClick);
                this.hideTooltip(event, this.options.id);
            }
        },

        fireCanvas: function(id, width, height, orientation, shadow, radius, pointerW, pointerExt, bodyColor, borderColor, shadowColor, pointerFloatDirection, pointerFloatSize) {
            if (shadowColor) {
                var r1 = shadowColor[0];
                var g1 = shadowColor[1];
                var b1 = shadowColor[2];
            }
            if (orientation == 'top' || orientation == 'bottom') {
                (orientation == 'top') ? direction = false: direction = true;
                if (pointerFloatDirection) {
                    var cCloud = new TP.CanvasCloud.fullcCloudFloatVt(id, {
                        width: width,
                        height: height,
                        direction: direction,
                        pointerW: pointerW,
                        pointerExt: pointerExt,
                        maxk: shadow,
                        cornerRadius: radius,
                        rgb2: bodyColor,
                        rgb3: borderColor,
                        r1: r1,
                        g1: g1,
                        b1: b1,
                        pointerFloatDirection: pointerFloatDirection,
                        pointerFloatSize: pointerFloatSize
                    });
                } else {
                    var cCloud = new TP.CanvasCloud.fullcCloudVt(id, {
                        width: width,
                        height: height,
                        direction: direction,
                        pointerW: pointerW,
                        pointerExt: pointerExt,
                        maxk: shadow,
                        cornerRadius: radius,
                        rgb2: bodyColor,
                        rgb3: borderColor,
                        r1: r1,
                        g1: g1,
                        b1: b1
                    });
                }
            } else {
                (orientation == 'right') ? direction = false: direction = true;
                var cCloud = new TP.CanvasCloud.fullcCloudHr(id, {
                    width: width,
                    height: height,
                    direction: direction,
                    pointerW: pointerW,
                    pointerExt: pointerExt,
                    maxk: shadow,
                    cornerRadius: radius,
                    rgb2: bodyColor,
                    rgb3: borderColor,
                    r1: r1,
                    g1: g1,
                    b1: b1
                });
            }
        },

        /* ustawia polozenie tooltipa */
        setPosition: function(target, tooltip, tooltipTarget, orientation, id, shadow, radius, pointerW, pointerExt, bodyColor, borderColor, shadowColor, pointerFloatDirection, pointerFloatSize) {
            if (target.identify() != this.callId) {
                target = target.up('#' + this.callId);
            }
            targetPosition = target.cumulativeOffset();
            targetDimensions = target.getDimensions();
            tooltip.setStyle({
                'visibility': 'hidden',
                'display': 'block',
                zIndex: '-1'
            });
            tooltip.setStyle({
                'position': 'absolute',
                'margin': '0',
                'top': '0',
                'left': '0'
            });
            tooltipPosition = tooltip.cumulativeOffset();

            var difLeft = targetPosition.left - tooltipPosition.left;
            var difTop = targetPosition.top - tooltipPosition.top;

            tooltipPositionTop = difTop;
            tooltipPositionLeft = difLeft;

            var canvasObject = $(id + '-canvas');
            var content = $(id + '-content');
            contentDimensions = content.getDimensions();
            canvasObject.writeAttribute('width', contentDimensions.width);
            canvasObject.writeAttribute('height', contentDimensions.height);
            canvasObject.setStyle({
                'width': contentDimensions.width + 'px',
                'height': contentDimensions.height + 'px'
            });
            tooltip.setStyle({
                'width': contentDimensions.width + 'px',
                'height': contentDimensions.height + 'px'
            });
            this.fireCanvas(canvasObject.id, contentDimensions.width, contentDimensions.height, orientation, shadow, radius, pointerW, pointerExt, bodyColor, borderColor, shadowColor, pointerFloatDirection, pointerFloatSize);

            if (orientation == 'left') {
                tooltipPositionTop -= contentDimensions.height / 2;
                tooltipPositionTop += targetDimensions.height / 2;
                if (pointerFloatDirection == 'left') {
                    tooltipPositionTop += (contentDimensions.height / 2 * pointerFloatSize)
                }
                if (pointerFloatDirection == 'right') {
                    tooltipPositionTop -= (contentDimensions.height / 2 * pointerFloatSize)
                }
                tooltipPositionLeft -= contentDimensions.width;
            } else if (orientation == 'top') {
                tooltipPositionTop -= contentDimensions.height;
                tooltipPositionLeft -= (contentDimensions.width - targetDimensions.width) / 2;
                if (pointerFloatDirection == 'left') {
                    tooltipPositionLeft += (contentDimensions.width / 2 * pointerFloatSize)
                }
                if (pointerFloatDirection == 'right') {
                    tooltipPositionLeft -= (contentDimensions.width / 2 * pointerFloatSize)
                }
            } else if (orientation == 'bottom') {
                tooltipPositionTop += targetDimensions.height;
                tooltipPositionLeft -= (contentDimensions.width - targetDimensions.width) / 2;
                if (pointerFloatDirection == 'left') {
                    tooltipPositionLeft += (contentDimensions.width / 2 * pointerFloatSize)
                }
                if (pointerFloatDirection == 'right') {
                    tooltipPositionLeft -= (contentDimensions.width / 2 * pointerFloatSize)
                }
            } else {
                /* po prawej stronie elementu wywolujacego tt*/
                tooltipPositionTop -= contentDimensions.height / 2;
                tooltipPositionTop += targetDimensions.height / 2;
                if (pointerFloatDirection == 'left') {
                    tooltipPositionTop += (contentDimensions.height / 2 * pointerFloatSize)
                }
                if (pointerFloatDirection == 'right') {
                    tooltipPositionTop -= (contentDimensions.height / 2 * pointerFloatSize)
                }
                tooltipPositionLeft += targetDimensions.width;
            }

            tooltip.setStyle({
                position: 'absolute',
                top: tooltipPositionTop + "px",
                left: tooltipPositionLeft + "px",
                display: "inline",
                zIndex: 100
            });
        },

        /* pokazuje tooltipa */
        showCanvasTooltip: function(tooltipTarget, id, orientation, shadow, radius, pointerW, pointerExt, bodyColor, borderColor, shadowColor, pointerFloatDirection, pointerFloatSize) {
            if (tooltipTarget.identify() != this.callId) {
                tooltipTarget = tooltipTarget.up('#' + this.callId);
            }
            var tooltip = $(id);
            /* bo max-width=1024*/
            if (this.options.tooltipWidth > 1024) this.options.tooltipWidth = 1024;
            this.setPosition(tooltipTarget, tooltip, tooltipTarget, orientation, id, shadow, radius, pointerW, pointerExt, bodyColor, borderColor, shadowColor, pointerFloatDirection, pointerFloatSize);

            /* pokazuje gotowy tooltip */
            tooltip.setStyle({
                'visibility': 'visible'
            });
        },

        /* ukrywa tt*/
        hideTooltip: function(element, id) {
            var tooltip = $(id);
            if (tooltip) {
                tooltip.hide();
            }
        },

        /* ukrywa tt*/
        hideAllTooltips: function() {
            $$('.tp-tooltip-body').invoke('hide')
        },

        /* dla wywolan ajax bez poza map usowa osierocona chmorke o zadanym id*/
        clearUnusedTooltips: function(cloudId) {
            var allBodyNodes = document.body.childNodes;
            for (var j = 0; j < allBodyNodes.length; j++) {
                if (allBodyNodes[j].id == cloudId) {
                    document.body.removeChild(allBodyNodes[j]);
                };
            }
        },

        /* dla wywolan ajax bez poza map 'inicjuje' element canvas*/
        initializeExcanvas: function(cloudId) {
            if (/MSIE/.test(navigator.userAgent) && !window.opera) {
                if (typeof G_vmlCanvasManager != 'undefined') {
                    G_vmlCanvasManager.initElement($(cloudId + '-canvas'));
                }
            }
        }

    });

}