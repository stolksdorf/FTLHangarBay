;(function(){
	//Shim for Object.create, in case the browser doesn't support it
	Object.create = Object.create || function(proto) {
		function Obj(){};
		Obj.prototype = proto;
		return new Obj();
	};
	var archetype_EventCount = new Date().getTime();

	Archetype = archetype ={
		initialize : function(){
			return this;
		},
		create : function(args){
			var obj = this.extend();
			obj.deep('initialize').apply(obj, arguments);
			obj.trigger('created', obj);
			return obj;
		},
		extend : function(methods){
			var obj = Object.create(this);
			obj.events = obj._events.bind({storedEvents : []});
			return obj.mixin(methods);
		},
		mixin : function(methods){
			for(var methodName in methods){
				this[methodName] = methods[methodName];
			}
			return this;
		},
		deep : function(method){
			var self = this;
			var deep = function(){
				if(this[method]) deep.apply(Object.getPrototypeOf(this), arguments);
				if(this.hasOwnProperty(method)) return this[method].apply(self, arguments);
			};
			return deep.bind(this);
		},

		//Events
		_events : function(set, add){
			if(set) this.storedEvents = set;
			if(add) this.storedEvents.push(add);
			return this.storedEvents;
		},
		on : function(eventName, event, once){
			this.events(false, {
				id    : ++archetype_EventCount,
				name  : eventName,
				fn    : event,
				fireOnce  : once || false
			});
			return archetype_EventCount;
		},
		once : function(eventName, event){
			return this.on(eventName, event, true);
		},
		trigger : function(eventIdentifier){
			var evts = this.events();
			var args = [].slice.apply(arguments).slice(1);
			for(var i in evts){
				var evt = evts[i];
				if(eventIdentifier == evt.id || eventIdentifier == evt.name || evt.name === '*'){
					evt.fn.apply(this, args);
					if(evt.fireOnce) this.off(evt.id);
				}
			}
			return this;
		},
		off : function(eventIdentifier){
			//Clear the events if nothing provided
			if(!eventIdentifier) this.events([]);
			var remainingEvents = []
			for(var i in this.events()){
				var evt = this.events()[i];
				if(eventIdentifier != evt.id && eventIdentifier != evt.name){
					remainingEvents.push(evt);
				}
			}
			this.events(remainingEvents);
			return this;
		}
	};
})();

module.exports = archetype;