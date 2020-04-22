var AjaxProcessor = function(activeAjaxLimit, eventBus) {
    this.eventBus = eventBus;
    this.activeAjaxLimit = activeAjaxLimit || 10;
    this.ajaxQueue = [];
    //Used to hold setInterval id while monitoring ajax queue
    this.timerHandler = null;
}
AjaxProcessor.prototype = {
    constructor: AjaxProcessor,
    addAjaxToQueue: function(call, context) {
        this.ajaxQueue.push({
            call: call,
            context: context
        });
    },
    sendQueuedAjaxCalls: function() {
        var numberOfAjaxReqSent = 0;
        for (var i = 0; i < this.ajaxQueue.length; i++) {
            if ($.active >= this.activeAjaxLimit) {
                console.log("Ajax active requests limit reached")
            } else {
                var callAjax = $.proxy(this.ajaxQueue[i].call, this.ajaxQueue[i].context);
                callAjax();
                numberOfAjaxReqSent++;
            }
        }
        this.ajaxQueue.splice(0, numberOfAjaxReqSent);
    },
    monitorAjaxQueue: function(isMonitoringQueue) {
        var that = this;
        if (isMonitoringQueue) {
            this.timerHandler = setInterval(function() {
                if (that.ajaxQueue.length > 0) that.sendQueuedAjaxCalls();
            }, 3000);
        } else clearInterval(this.timerHandler);
    }
}

var EventSystem = function() {
    this.listeners = [];
    this.eventLog = [];
};
EventSystem.prototype = {
    constructor: EventSystem,
    publish: function(eventType, dataObj, publisherRef) {
        this.eventLog.push({
            eventType: eventType,
            data: dataObj,
            publishTime: new Date(),
            publisherRef: publisherRef
        });
        for (var i = 0; i < this.listeners; i++) {
            var listener = this.listeners[i];
            if (listener.publisherRef) {
                if (listener.eventType == eventType && listener.publisherRef == publisherRef) {
                    listener.callback(dataObj);
                }
            } else if (listener.eventType == eventType) listener.callback(dataObj);
        };
    },
    subscribe: function(eventType, callback, publisherRef) {
        this.listeners.push({
            eventType: eventType,
            callback: callback,
            publisherRef: publisherRef
        });
    }
}

var DomParser = function(eventBus) {
    this.eventBus = eventBus;
    this.framesMap = {};
}
DomParser.prototype = {
    constructor: DomParser,
    getFramesFromDOM: function(element) {
        var frames = [];
        var htmlFrames = $(element || document).find('[data-groupId]');
        var enumEvents = EVENT_TYPE.getEventsWithHtmlAttribute();
        var eventsFromHtml = [];
        for (var i = 0; i < htmlFrames.length; i++) {
            //Getting events from HTML
            var groupId = htmlFrames[i].getAttribute('data-groupid');
            var ecareSlot = $("#" + groupId).closest(".ecareSlot");
            var onDemand = ecareSlot.length === 0 ? 'false' : ecareSlot.find(".slot_on_demand").val();
            var priority = ecareSlot.length === 0 ? 1 : ecareSlot.find(".slot_priority").val();
            var newFrame = new Frame(htmlFrames[i].getAttribute('id'), groupId, htmlFrames[i].getAttribute('data-groupactionurl'), this.eventBus, onDemand, priority);
            this.framesMap[groupId] = newFrame;
            //for every event with htmlattribute
            for (var j = 0; j < enumEvents.length; j++) {
                var attributeValue = $(htmlFrames[i]).attr(enumEvents[j].htmlAttribute);
                if (attributeValue) {
                    eventsFromHtml.push({
                        eventType: enumEvents[j].eventType,
                        groupId: attributeValue,
                        subscriberFrame: newFrame
                    });
                }
            };
            frames.push(newFrame);
        }
        this.subscribeFrameEventsFromHtml(eventsFromHtml);
        this.eventBus.publish(EVENT_TYPE.FRAMES_OBJECTS_INITIALIZED, "Number of Frames: " + frames.length, this);
        return frames;
    },
    subscribeFrameEventsFromHtml: function(events) {
        var that = this;
        for (var i = 0; i < events.length; i++) {
            var publisherFrame = that.framesMap[events[i].groupId];
            if (publisherFrame) {
                that.eventBus.subscribe(events[i].eventType, $.proxy(events[i].subscriberFrame.init, events[i].subscriberFrame), publisherFrame);
            }
        };

    }
}

var EventDebugComponent = function(eventBus) {
    this.eventBus = eventBus;
    this.timerHandler = null;

};
EventDebugComponent.prototype = {
    constructor: EventDebugComponent,
    loadEventLogToComponent: function() {
        var htmlContent = '';
        for (var i = 0; i < this.eventBus.eventLog.length; i++) {
            var event = this.eventBus.eventLog[i];
            htmlContent += '<div>' + event.publishTime.getHours() + ":" + event.publishTime.getMinutes() + ":" + event.publishTime.getSeconds() + ' - EventBus - ' + event.eventType.msg;
            var publisher = event.publisherRef;
            if (publisher) {
                if (publisher.hasOwnProperty('getGroupId')) {
                    htmlContent += ' - published by [Frame] = ' + publisher.getGroupId();
                }
            }
            htmlContent += '</div>';
        };
        this.eventBus.eventLog.splice(0, this.eventBus.eventLog.length);
        $('[data-groupId=debug]').html(htmlContent);
    },
    monitorEventLog: function(isMonitoringEventLog) {
        var that = this;
        if (isMonitoringEventLog) {
            this.timerHandler = setInterval(function() {
                if (that.eventBus.eventLog.length > 0) that.loadEventLogToComponent();
            }, 5000);
        } else clearInterval(this.timerHandler);
    }
}

var EVENT_TYPE = {
    //Frame objects initialized
    FRAMES_OBJECTS_INITIALIZED: {
        msg: "[Frames Objects Initialized Event]",
        data: {},
        value: 1
    },
    //Published after successfull ajax call from frame to get initial htmlcontent from service
    FRAME_INIT_SUCCESS: {
        msg: '[Frame Init Success Event]',
        value: 2
    },
    FRAME_BEFORE_CREATE: {
        msg: '[Frame Before Create Event]',
        htmlAttribute: 'beforeCreate',
        value: 3
    },
    FRAME_AFTER_CREATE: {
        msg: '[Frame After Create Event]',
        htmlAttribute: 'afterCreate',
        value: 4
    },
    getEventsWithHtmlAttribute: function() {
        var eventsWithHtmlFrameAttribute = [];
        $.each(this, function(key, value) {
            var htmlAttribute = EVENT_TYPE[key].htmlAttribute
            if (htmlAttribute) {
                eventsWithHtmlFrameAttribute.push({
                    eventType: EVENT_TYPE[key],
                    htmlAttribute: htmlAttribute
                });
            }
        });
        return eventsWithHtmlFrameAttribute;
    }
}

function Frame(id, groupId, groupActionUrl, eventBus, onDemand, priority) {
    //Public
    this.eventBus = eventBus;
    this.resendAjaxCounter = 0;
    //Private
    var id = id;
    var groupId = groupId;
    var groupActionUrl = groupActionUrl;
    var loaded = false;
    var priority = priority;
    var onDemand = onDemand;
    var demanded = false;
    //Getters
    this.getId = function() {
        return id
    };
    this.getGroupId = function() {
        return groupId
    };
    this.getGroupActionUrl = function() {
        return groupActionUrl
    };
    this.getLoaded = function() {
        return loaded;
    }
    this.setLoaded = function(isLoaded) {
        this.loaded = isLoaded;
    }
    this.getPriority = function() {
        return priority;
    }
    this.getOnDemand = function() {
        return onDemand;
    }
    this.setDemanded = function(isDemanded) {
        demanded = isDemanded;
    }
    this.isDemanded = function() {
        return demanded;
    }
}

Frame.prototype = {
    constructor: Frame,
    init: function(completeCallback, initFromException) {
        var that = this;
        var urlToCall = that.getGroupActionUrl() + '/init';
        if (initFromException) {
            urlToCall = urlToCall + '?initFromException=true';
        }
        var stokenElem = $('#_stoken');
        if (stokenElem.length) {
            if (initFromException) {
                urlToCall = urlToCall + '&_stoken=' + stokenElem.val();
            } else {
                urlToCall = urlToCall + '?_stoken=' + stokenElem.val();
            }
        }
        $.ajax({
            url: urlToCall,
            type: 'GET',
            statusCode: {
                404: function() {
                    //alert("Found 404");
                },
            },
            beforeSend: function(jqXHR, settings) {
                jqXHR.url = settings.url;
                that.eventBus.publish(EVENT_TYPE.FRAME_BEFORE_CREATE, {
                    frame: that
                }, that);
            },
            success: function(htmlContent) {
                if ($(htmlContent).find("#loginPage").length > 0) {
                    window.location.replace("login?backUrl=" + window.location.href)
                }
                that.eventBus.publish(EVENT_TYPE.FRAME_INIT_SUCCESS, {
                    frame: that,
                    htmlContent: htmlContent
                }, that);
                that.reloadView(htmlContent);
                that.eventBus.publish(EVENT_TYPE.FRAME_AFTER_CREATE, {
                    frame: that
                }, that);
                that.resendAjaxCounter = 0;
                that.setLoaded(true);
                emitDocumentEvent("frames." + that.getGroupId() + ".loaded");
            },
            error: function(jqXHR, status, error) {
                that.clearView();
                that.reloadView('<div style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border: 1px solid;margin: 10px 0px;padding:15px 10px 15px 50px;background-repeat: no-repeat;background-position: 10px center;color: #D8000C;background-color: #FFBABA;">' + jqXHR.responseText + ' </div>')
                if (that.resendAjaxCounter < 3 && that.getView != null) {
                    setTimeout($.proxy(that.getView, that), 5000);
                    that.resendAjaxCounter++;
                }
                emitDocumentEvent("frames." + that.getGroupId() + ".notLoaded");
            },
            complete: function(jqXHR, textStatus) {
                $("#parent_" + that.getId()).find(".initTryCompleted").val("true");
                if ("undefined" !== typeof completeCallback) {
                    completeCallback();
                }
            }
        });
    },
    reloadView: function(htmlContent) {
        this.clearView();
        var groupId = this.getGroupId();
        try {
            $('[data-groupId=' + groupId + ']').append($(htmlContent));
        } catch (err) {
            console.error("Error in component " + groupId, err);
            // ignored - allow modules initialization in case of js error in html content
        }
        onFrameworkReady(function() {
            var elementToInit = $('[data-groupId=' + groupId + ']').closest('[data-js-module="common/modules/opl-console"]').parent()[0] ||
                $('[data-groupId=' + groupId + ']').closest('[data-js-module="common/modules/opl-expander"]').parent()[0] ||
                $('[data-groupId=' + groupId + ']').parent()[0];
            if (elementToInit) {
                OPL.UI.initModules(elementToInit);
            }
        })
    },
    clearView: function() {
        $('[data-groupId=' + this.getGroupId() + ']').empty();
    }

};

function emitDocumentEvent(eventName, data) {
    if (data) {
        $(document).trigger(eventName, data);
    } else {
        $(document).trigger(eventName);
    }
};

function notifyWhenFramesLoaded(frames, counter) {
    var framesLoaded = true;
    if (frames) {
        for (var i = 0; i < frames.length; i++) {
            if (frames[i].getLoaded() == false) {
                framesLoaded = false;
            }
        }
    }
    counter++;
    if (framesLoaded) {
        emitDocumentEvent("frames.loaded");
    } else {
        if (counter < 3) {
            setTimeout(notifyWhenFramesLoaded, 250, frames, counter);
        }
    }
}


if (!EcareFramework) {
    var EcareFramework = {};
}
onFrameworkReady(function() {
    $(function() {
        var eventBus = new EventSystem();
        var ajaxProcessor = new AjaxProcessor(20, eventBus);
        ajaxProcessor.monitorAjaxQueue(true);
        var domParser = new DomParser(eventBus);
        var frames = domParser.getFramesFromDOM();
        var slotsByPriorities = {};
        var sortedFrames = [];
        var notifyPriorityGroupRendered = function(currentPriorityList, callback, callbackArg) {
            var initsCompleted = true;
            for (var i = 0; i < currentPriorityList.length; i++) {
                var isInitCompleted = $("#parent_" + currentPriorityList[i].getId()).find(".initTryCompleted").val();
                if (isInitCompleted != "true") {
                    initsCompleted = false;
                    break;
                }
            }
            if (initsCompleted) {
                callback(callbackArg);
            } else {
                setTimeout(notifyPriorityGroupRendered, 250, currentPriorityList, callback, callbackArg);
            }
        }
        var renderNextPrioritySlots = function(ajaxProcessor) {
            if (sortedFrames.length == 0) {
                var counter = 0;
                notifyWhenFramesLoaded(frames, counter);
                return;
            }
            var currentPriorityList = sortedFrames.shift();
            for (var k = 0; k < currentPriorityList.length; k++) {
                ajaxProcessor.addAjaxToQueue(currentPriorityList[k].init, currentPriorityList[k]);
            }
            ajaxProcessor.sendQueuedAjaxCalls();
            notifyPriorityGroupRendered(currentPriorityList, renderNextPrioritySlots, ajaxProcessor)
        };
        var slotsOnDemand = [];
        for (var i = 0; i < frames.length; i++) {
            if (frames[i].getGroupId() == 'debug') {
                var eventDebugComponent = new EventDebugComponent(eventBus);
                eventDebugComponent.monitorEventLog(true);
            } else {
                if (frames[i].getOnDemand() === 'true') {
                    var objectWithEcareSlot = $("#" + frames[i].getId()).closest(".ecareSlot");
                    slotsOnDemand.push(objectWithEcareSlot[Object.keys(objectWithEcareSlot)[0]]);
                    continue;
                }
                if (slotsByPriorities[frames[i].getPriority()] === undefined) {
                    slotsByPriorities[frames[i].getPriority()] = [frames[i]];
                } else {
                    slotsByPriorities[frames[i].getPriority()].push(frames[i]);
                }
            }
        }
        var uniqueSlotsOnDemand = slotsOnDemand.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
        })
        $(uniqueSlotsOnDemand).each(function(index, elem) {
            var componentGroupIds = [];
            $(elem).find(".ecareComponentDiv").each(function(ind, comp) {
                componentGroupIds.push($(comp).attr("data-groupId"));
            });
            if ($(elem).find(".slot_expanded").length === 0 || $(elem).find(".slot_expanded[value=true]").length > 0) {
                frames.forEach(function(frame) {
                    if (componentGroupIds.indexOf(frame.getGroupId()) > -1) {
                        frame.setDemanded(true);
                        var currentFirstPriority = slotsByPriorities[1];
                        if (currentFirstPriority === undefined) {
                            slotsByPriorities[1] = [frame];
                        } else {
                            slotsByPriorities[1].push(frame);
                        }
                    }
                })

            }
        });
        if ($(uniqueSlotsOnDemand).length > 0) {
            onFrameworkReady(function() {
                OPL.UI.on(OPL.UI.EVENTS.modules.expander.expanded, function(el) {
                    var componentGroupIds = [];
                    $(el).closest(".ecareSlot").find(".ecareComponentDiv").each(function(ind, comp) {
                        componentGroupIds.push($(comp).attr("data-groupId"));
                    });
                    var demanded = false;
                    frames.forEach(function(frame) {
                        if (frame.getOnDemand() === 'true' && componentGroupIds.indexOf(frame.getGroupId()) > -1 &&
                            !frame.isDemanded()) {
                            frame.setDemanded(true);
                            ajaxProcessor.addAjaxToQueue(frame.init, frame);
                            demanded = true;
                        }
                    });
                    if (demanded) {
                        ajaxProcessor.sendQueuedAjaxCalls();
                    }
                });
            });
        }
        Object.keys(slotsByPriorities).sort().forEach(function(key) {
            sortedFrames.push(slotsByPriorities[key]);
        });
        renderNextPrioritySlots(ajaxProcessor);
        EcareFramework.frames = frames;
        EcareFramework.refreshFrameByGroupId = function(groupId, initFromException) {
            for (var i = 0; i < frames.length; i++) {
                if (frames[i].getGroupId() == groupId) {
                    OPL.UI.stopModules(document.getElementById(frames[i].getId()));
                    var frameDiv = $('#' + frames[i].getId());
                    var frameHeight = frameDiv.height();
                    if ($(window).height() < frameHeight) {
                        frameDiv.empty();
                        frameDiv.height($(window).height());
                    }
                    OPL.UI.fire('modules.loader.show', $("[data-groupId='" + frames[i].getGroupId() + "']"));
                    frameDiv.height(frameHeight);
                    frames[i].init(function() {
                        OPL.UI.fire('modules.loader.hide', $("[data-groupId='" + frames[i].getGroupId() + "']"));
                        frameDiv.height('');
                        EcareFramework.clearLoaders($("[data-groupId='" + frames[i].getGroupId() + "']").parent(), 0);
                        EcareFramework.clearLoaders($("[data-groupId='" + frames[i].getGroupId() + "']").parent(), 1000);
                    }, initFromException);
                    break;
                }
            }
        }

        EcareFramework.refreshComponent = function(groupId) {
            console.log("Refreshing component: " + groupId);
            EcareFramework.refreshFrameByGroupId(groupId, false);
        }

        EcareFramework.refreshComponentAfterException = function(groupId) {
            console.log("Refreshing component after exception: " + groupId);
            EcareFramework.refreshFrameByGroupId(groupId, true);
        }

    });
});