var TP;
if (typeof TP == "undefined") TP = {};
if (typeof TP.TabsForm == "undefined") {
	TP.TabsForms = {};
	TP.TabsFormsPopup = {};
		
	TP.TabsForms = Class.create({
		trigger: null,
		popup: null,
		containerId: '',
		popupRightMargin: 0,
		initialize : function(options) {
			this.options = {};
			this.defaults = {
				containerIdPrefix: "tab-form-main-",
				configParam: "",
				url: '/gear/tab-form/ajax?',
				urlPrefix: 'slr',
				offset: 0,
				triggerSelector: ".side-popup-trigger",
				popupSelector: ".side-popup",
				visibleClass: "show-view",
				hiddenClass: "close-view",
				successMsgSelector: ".success-message",
				colorPopup: ""
				
			};
			this.options = Object.extend(this.defaults, options);
			this.containerId = this.options.containerIdPrefix + this.options.configParam;
			this.container;
			if(!$(this.containerId)) {
				this.container = new Element('div',{ 'id': this.containerId, 'class': 'tabs-form close-view' })
			} else {
				this.container = $(this.containerId);
			}
			
			($$("body")[0]).appendChild(this.container);
			
			
			
			this.releaseRequest();
			
		},
		
		releaseRequest: function(){
			var linkId = this.containerId+'-link',
				url = "/"+this.options.urlPrefix + this.options.url,
				fireElem = new Element('a',{ 'id': linkId, 'class': 'reader-only', 'href': url }),
				linkJSON = "'" + linkId+"':{a:'"+url +"',p:'toUpdate="+this.containerId+"&toGet=tab-form-main&config="+this.options.configParam+this.options.colorPopup+"',c:TP.TabsFormsPopup['"+linkId+"'].customCallback}";//,c:"+this.customCallback+"
			
			TP.TabsFormsPopup[linkId] = this;
			
			($$("body")[0]).appendChild(fireElem);
			TP.Ajax.ajaxifyLinks(linkJSON);
			TP.Ajax.fire(linkId);
			
		},
		
		setVerticalMargin: function(elem) {
			var elemHeight = elem.getHeight(),
				offset = -elemHeight/2 + this.options.offset; //margines o ktory wysuniemy o offset wskazany w opcjach

				elem.setStyle({marginTop: offset+"px"});			
		},
		
				
		customCallback: function(serverResponse, id){
			TP.Ajax.defaultCallback(serverResponse, id);
			
			//identyfikujemy za pomoca id
			var self = TP.TabsFormsPopup[id];
			if(self) {	
				self.trigger = self.container.select(self.options.triggerSelector);
				self.popup = self.container.select(self.options.popupSelector);
				if(self.trigger.length && self.trigger.first() && self.popup.length && self.popup.first() ){
					self.trigger = self.trigger.first();
					self.popup = self.popup.first();
					
					self.popupId = self.popup.identify();
					
					self.setVerticalMargin(self.trigger);
					self.setVerticalMargin(self.popup);
					
					self.popupRightMargin =  self.trigger.getHeight() + self.popup.getWidth(); //pobieramy wysokosc triggera, bo jest on obrocony o 90 stopni
					
					//Kolor dla triggera i popup-a
					self.popup.setStyle({backgroundColor: self.options.colorPopup});
					self.trigger.down('span').setStyle({backgroundColor: self.options.colorPopup});
					
					self.container.on("click", self.options.triggerSelector, self.triggerClickHandler.bindAsEventListener(self));
					self.container.on("click", self.options.successMsgSelector, self.successMsgClickHandler.bindAsEventListener(self));
					
				}
			}
			
			
		},
		
		triggerClickHandler: function(event){
			var rightMargin = 0,
				self = this;
				show = true;
				
			if(this.container.hasClassName(this.options.hiddenClass)) {
				rightMargin = this.popupRightMargin + 2; //odsuniêcie o 2px popup-a od triggera
				show = true;
			} else if(this.container.hasClassName(this.options.visibleClass)) {
				rightMargin = 0;
				show = false;
			}
			
			
			new Effect.Morph(this.popupId, {
				style: 'margin-right:'+rightMargin+'px;',
				duration: 0.8 ,
				beforeStart: function() {
					if(!show) {
						self.container.removeClassName(self.options.visibleClass).addClassName(self.options.hiddenClass);
					}
				},
				afterFinish: function(){
					if(show) {
						self.container.removeClassName(self.options.hiddenClass).addClassName(self.options.visibleClass);
					} 
				}
			});
			
		},
		
		successMsgClickHandler: function(event) {
			var target = event.findElement(this.options.successMsgSelector);
			target.remove();
		}
		
		
	});
		
}

var initTabsForms = function(configPrefix, offset, urlPrefix, colorPopup){
	new TP.TabsForms({'configParam': (configPrefix?configPrefix:''),'offset':(offset?offset:0),"urlPrefix":(urlPrefix?urlPrefix:'slr'), "colorPopup":(colorPopup?colorPopup:'')});
}