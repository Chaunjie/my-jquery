(function() {
	var version = "0.0.1", jQuery = function(selector) {
		return new jQuery.fn.init(selector)
	};

	jQuery.fn = jQuery.prototype = {
		jquery : version,
		constructor : jQuery,
		addClass : function(name) {
			for (var i = 0; i < this.length; i++) {
				this[0][i].classList.add(name);
			}

			return this;
		},

		removeClass : function(name) {
			for (var i = 0; i < this.length; i++) {
				this[0][i].classList.remove(name);
			}

			return this;
		},

		toggleClass : function(name) {
			for (var i = 0; i < this.length; i++) {
				this[0][i].classList.toggle(name);
			}

			return this;
		},

		index : function() {
			return this[0][0].index;
		},

		click : function(callback) {
			var self = this;
			for (var i = 0; i < this.length; i++) {
				(function(index) {
					self[0][index].addEventListener('click', callback);
				})(i)
			}
		},

		one : function(event, callback) {
			var self = this;

			var removeEvt = function() {
				for (var i = 0; i < this.length; i++) {
					(function(index) {
						self[0][index].removeEventListener(event, callback);
					})(i)
				}
			}
			
			for (var i = 0; i < this.length; i++) {
				(function(index) {
					self[0][index].addEventListener(event, removeEvt, callback);
				})(i)
			}

		},
		
		eq: function(index){
			var dom = [];
			dom.push(this[0][index]);
			this[0] = dom;
			return this;
		},
		
		bind: function(){
			
		},
		
		unbind: function(){
		
		}
	};

	var init = jQuery.fn.init = function(selector, context, root) {
		if (!selector || typeof selector == 'object') {
			var elem = [];
			elem.push(selector)
			this[0] = elem;
			this.length = 1;
		} else {
			var elem = document.querySelectorAll(selector);
			if (elem) {
				this[0] = elem;

				for (var i = 0; i < elem.length; i++) {
					this[0][i].index = i;
				}

				this.length = elem.length;
			}
		}
	};

	init.prototype = jQuery.fn;

	jQuery.extend = jQuery.fn.extend = function() {
		//console.log(this)
	};

	window.$ = window.jQuery = jQuery;
})();
