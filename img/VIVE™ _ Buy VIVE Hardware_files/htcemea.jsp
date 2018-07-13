



if (typeof usi_commons === 'undefined') {
	usi_commons = {
		log:function(msg) {
			
		},
		log_error: function(msg) {
			
		},
		log_success: function(msg) {
			
		},
		dir:function(obj) {
			
		},
		log_styles: {
			error: 'color: red; font-weight: bold;',
			success: 'color: green; font-weight: bold;'
		},
		domain: "//www.upsellit.com",
		is_mobile: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()),
		gup:function(name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regexS = "[\\?&]" + name + "=([^&#\\?]*)";
			var regex = new RegExp(regexS);
			var results = regex.exec(window.location.href);
			if (results == null) return "";
			else return results[1];
		},
		load_script:function(source) {
			var docHead = document.getElementsByTagName("head")[0];
			if (top.location != location) docHead = parent.document.getElementsByTagName("head")[0];
			var newScript = document.createElement('script');
			newScript.type = 'text/javascript';
			newScript.src = source;
			docHead.appendChild(newScript);
		},
		load_display:function(usiQS, usiSiteID, usiKey) {
			usiKey = usiKey || "";
			this.load_script(this.domain + "/launch.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&keys=" + usiKey);
		},
		load_facebook:function(usiQS, usiSiteID, usiKey) {
			usiKey = usiKey || "";
			this.load_script(this.domain + "/hound/facebook.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&keys=" + usiKey);
		},
		load_view:function(usiHash, usiSiteID, usiKey) {
			if (typeof(usi_force) != "undefined" || location.href.indexOf("usi_force") != -1 || (usi_cookies.get("usi_launched") == null && usi_cookies.get("usi_launched"+usiSiteID) == null)) {
				usiKey = usiKey || "";
				var date = "";
				if (this.gup("usi_force_date") != "") date = "&usi_force_date=" + this.gup("usi_force_date");
				this.load_script(this.domain + "/view.jsp?hash=" + usiHash + "&siteID=" + usiSiteID + "&keys=" + usiKey + date);
			}
		},
		load_precapture:function(usiQS, usiSiteID) {
			this.load_script(this.domain + "/hound/monitor.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&domain=" + encodeURIComponent(this.domain));
		},
		send_prod_rec:function(siteID, info, real_time) {
			try {
				if (!!siteID && !!info.name && !!info.link && !!info.pid && !!info.price && !!info.image) {
					var queryString = siteID + "|" + info.name + "|" + info.link + "|" + info.pid + "|" + info.price + "|" + info.image;
					if (info.extra) queryString += "|" + info.extra;
					var filetype = real_time ? "jsp" : "js";
					this.load_script(this.domain + "/active/pv2." + filetype + "?" + encodeURIComponent(queryString));
				}
			} catch (e) {}
		}
	};
}



if (typeof usi_cookies === 'undefined') {
	usi_cookies = {
		expire_time: {
			minute: 60,
			hour: 60 * 60,
			day: 60 * 60 * 24,
			week: 60 * 60 * 24 * 7,
			two_weeks: 60 * 60 * 24 * 14,
			month: 60 * 60 * 24 * 30,
			year: 60 * 60 * 24 * 365,
			never: 60 * 60 * 24 * 365 * 10
		},
		update_window_name: function (name, value, exp_seconds) {
			try {
				var usi_exp_timestamp = -1;
				if (exp_seconds != -1) {
					var date = new Date();
					date.setTime(date.getTime() + (exp_seconds * 1000));
					usi_exp_timestamp = date.getTime();
				}
				var usi_win = window.top || window;
				var usi_found = 0;
				if (value != null && value.indexOf("=") != -1) value = value.replace(new RegExp('=', 'g'), 'USIEQLS');
				var usi_allValues = usi_win.name.split(";");
				var usi_newValues = "";
				for (var i = 0; i < usi_allValues.length; i++) {
					var usi_theValue = usi_allValues[i].split("=");
					if (usi_theValue.length == 3) {
						if (usi_theValue[0] == name) {
							usi_theValue[1] = value;
							usi_theValue[2] = usi_exp_timestamp;
							usi_found = 1;
						}
						if (usi_theValue[1] != null && usi_theValue[1] != "null") {
							usi_newValues += usi_theValue[0] + "=" + usi_theValue[1] + "=" + usi_theValue[2] + ";";
						}
					} else if (usi_allValues[i] != "") {
						//Not ours, disregard
						usi_newValues += usi_allValues[i] + ";";
					}
				}
				if (usi_found == 0) {
					//Add to the end
					usi_newValues += name + "=" + value + "=" + usi_exp_timestamp + ";";
				}
				usi_win.name = usi_newValues;
			} catch (e) {
			}
		},
		flush_window_name: function (usi_prefix) {
			try {
				var usi_win = window.top || window;
				var usi_allValues = usi_win.name.split(";");
				var usi_newValues = "";
				for (var i = 0; i < usi_allValues.length; i++) {
					var usi_theValue = usi_allValues[i].split("=");
					if (usi_theValue.length == 3) {
						if (usi_theValue[0].indexOf(usi_prefix) == 0) {
							//Ours, so delete
						} else {
							//Not ours, disregard
							usi_newValues += usi_allValues[i] + ";";
						}
					}
				}
				usi_win.name = usi_newValues;
			} catch (e) {
			}
		},
		get_from_window_name: function (name) {
			try {
				var usi_win = window.top || window;
				var usi_allValues = usi_win.name.split(";");
				for (var i = 0; i < usi_allValues.length; i++) {
					var usi_theValue = usi_allValues[i].split("=");
					if (usi_theValue.length == 3) {
						if (usi_theValue[0] == name) {
							var usi_value = usi_theValue[1];
							if (usi_value.indexOf("USIEQLS") != -1) usi_value = usi_value.replace(new RegExp('USIEQLS', 'g'), '=');
							if (usi_theValue[2] != "-1" && this.datediff(usi_theValue[2]) < 0) {
								//This expired, boo
							} else {
								if (typeof(usi_cookieless) === "undefined") this.create_cookie(usi_theValue[0], usi_value, this.datediff(usi_theValue[2]) / 1000);
								usi_results = [usi_value, usi_theValue[2]];
								return usi_results;
							}
						}
					} else if (usi_theValue.length == 2) {
						if (usi_theValue[0] == name) {
							var usi_value = usi_theValue[1];
							if (usi_value.indexOf("USIEQLS") != -1) usi_value = usi_value.replace(new RegExp('USIEQLS', 'g'), '=');
							usi_results = [usi_value, (new Date()).getTime() + (7 * 24 * 60 * 60 * 1000)];
							return usi_results;
						}
					}
				}
			} catch (e) {
			}
			return null;
		},
		datediff: function (timestamp) {
			return (timestamp - (new Date()).getTime());
		},
		count_cookies: function () {
			var count = 0;
			var allCookies = document.cookie.split(";");
			for (var i = 0; i < allCookies.length; i++) {
				var usiCookie = allCookies[i];
				if (usiCookie.trim().toLowerCase().indexOf("usi_") == 0) {
					count++;
				}
			}
			return count;
		},
		create_cookie: function (name, value, exp_seconds) {
			if (exp_seconds != -1) {
				var date = new Date();
				date.setTime(date.getTime() + (exp_seconds * 1000));
				var expires = "; expires=" + date.toGMTString();
			}
			if (typeof(usi_parent_domain) != "undefined" && document.domain.indexOf(usi_parent_domain) != -1) {
				document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/;domain=" + usi_parent_domain + ";";
			} else {
				document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/;domain=" + document.domain + ";";
			}
		},
		read_cookie: function (name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
			}
			return null;
		},
		del: function (name) {
			this.set(name, null, -100);
		},
		get: function (name) {
			var usi_results = null;
			var usi_value = this.read_cookie(name);
			if (usi_value == null) {
				usi_results = this.get_from_window_name(name);
				if (usi_results != null && usi_results.length > 1) {
					usi_value = decodeURIComponent(usi_results[0]);
				}
			}
			if (usi_value == null) return null;
			return usi_value;
		},
		get_json: function(name) {
			var value = null;
			var cookieValue = usi_cookies.get(name);
			
			if (cookieValue == null) {
				return null;
			}
			try {
				value = JSON.parse(cookieValue);
			}
			catch (err) {
				cookieValue = cookieValue.replace(/\\"/g, '"');
				try {
					value = JSON.parse(JSON.parse(cookieValue));
				}
				catch (err) {
					try {
						value = JSON.parse(cookieValue);
					}
					catch (err2) {
					
					}
				}
			}
			return value;
		},
		search_cookies: function(prefix) {
			var cookieNames = [];
			document.cookie.split(';').forEach(function(cookie) {
				var cookieName = cookie.split('=')[0].trim();
				
				if (cookieName.indexOf(prefix) === 0) {
					cookieNames.push(cookieName);
				}
			});
			return cookieNames;
		},
		set: function (name, value, exp_seconds, force_cookie) {
			try {
				value = value.replace(/(\r\n|\n|\r)/gm, "");
			} catch (e) {}
			if (typeof(usi_windownameless) === "undefined") this.update_window_name(name + "", value + "", exp_seconds);
			if (value != null) {
				if (this.count_cookies() > 15) return;
				if (value.length > 1000) value = value.substring(0, 999);
			}
			if (typeof(usi_cookieless) === "undefined" || !!force_cookie) this.create_cookie(name, value, exp_seconds);
		},
		set_json: function (name, obj, exp_seconds) {
			var value = JSON.stringify(obj).replace(/^"/, '').replace(/"$/, '');
			usi_cookies.set(name, value, exp_seconds);
		},
		flush: function (usi_prefix) {
			usi_prefix = usi_prefix || "usi_";
			var allCookies = document.cookie.split(";"), i, usiCookie, ourCookie;
			for (i = 0; i < allCookies.length; i++) {
				usiCookie = allCookies[i];
				if (usiCookie.trim().toLowerCase().indexOf(usi_prefix) == 0) {
					ourCookie = usiCookie.trim().split("=")[0];
					this.del(ourCookie);
				}
			}
			this.flush_window_name(usi_prefix);
		},
		print: function () {
			var allCookies = document.cookie.split(";");
			var usi_Found = "";
			for (var i = 0; i < allCookies.length; i++) {
				var usiCookie = allCookies[i];
				if (usiCookie.trim().toLowerCase().indexOf("usi_") == 0) {
					console.log(usiCookie.trim() + " (cookie)");
					usi_Found += ","+usiCookie.trim().toLowerCase().split("=")[0]+",";
				}
			}
			var usi_win = window.top || window;
			var usi_allValues = usi_win.name.split(";");
			for (var i = 0; i < usi_allValues.length; i++) {
				var usi_theValue = usi_allValues[i].split("=");
				if (usi_theValue.length == 3) {
					if (usi_theValue[0].indexOf("usi_") == 0) {
						if (usi_Found.indexOf(","+usi_theValue[0]+",") == -1)
						console.log(usi_theValue[0] + "=" + usi_theValue[1] + " (window.name)");
					}
				}
			}
		},
		value_exists: function () {
			var i, usiCookie;
			for (i = 0; i < arguments.length; i++) {
				usiCookie = this.get(arguments[i]);
				if (usiCookie === "" || usiCookie === null || usiCookie === "null" || usiCookie === "undefined") {
					return false;
				}
			}
			return true;
		}
	};
}
if (typeof usi_dom === 'undefined') {
	usi_dom = {};
	
	// returns an array of matching elements, or an empty array
	usi_dom.get_elements = function (selector, element) {
		var elements = [];
		
		// set default element
		element = (element || document);
		
		elements = Array.prototype.slice.call(element.querySelectorAll(selector));
		
		return elements;
	};
	
	// returns an integer count of matching elements, or 0
	usi_dom.count_elements = function (selector, element) {
		// set default element
		element = (element || document);
		
		return usi_dom.get_elements(selector, element).length;
	};
	
	// returns the nth matching element, or null
	// ordinal (not array index) is 1-based
	usi_dom.get_nth_element = function (ordinal, selector, element) {
		var nthElement = null;
		
		// set default element
		element = (element || document);
		
		var elements = usi_dom.get_elements(selector, element);
		
		// do we have "at least this many" matching elements?
		if (elements.length >= ordinal) {
			nthElement = elements[ordinal - 1];
		}
		
		return nthElement;
	};
	
	// returns the first matching element, or null
	// selector can be a string or an array of strings
	usi_dom.get_first_element = function (selector, element) {
		if ((selector || '') === '') {
			return null;
		}
		
		// set default element
		element = (element || document);
		
		if (Object.prototype.toString.call(selector) === '[object Array]') {
			var selectedElement = null;
			
			for (var selectorIndex = 0; selectorIndex < selector.length; selectorIndex++) {
				var selectorItem = selector[selectorIndex];
				
				selectedElement = usi_dom.get_first_element(selectorItem, element);
				
				if (selectedElement != null) {
					break;
				}
			}
			
			return selectedElement;
		}
		else {
			return element.querySelector(selector);
		}
	};
	
	// returns the text-only content of an element, HTML child nodes are ignored, or ''
	// optionally strips out any non-ascii characters
	usi_dom.get_element_text_no_children = function (element, doCleanString) {
		var content = '';
		
		if (doCleanString == null) {
			doCleanString = false;
		}
		
		// set default element
		element = (element || document);
		
		if (element != null && element.childNodes != null) {
			for (var i = 0; i < element.childNodes.length; ++i) {
				if (element.childNodes[i].nodeType === 3) {
					content += element.childNodes[i].textContent;
				}
			}
		}
		
		if (doCleanString === true) {
			content = usi_dom.clean_string(content);
		}
		
		return content.trim();
	};
	
	// convert non-standard versions of characters to standard versions
	// remove unsupported characters
	usi_dom.clean_string = function (content) {
		if (typeof content !== 'string') {
			return;
		}
		
		// convert fancy dashes
		content = content.replace(/[\u2010-\u2015\u2043]/g, '-');
		
		// convert fancy single quotes
		content = content.replace(/[\u2018-\u201B]/g, "'");
		
		// convert fancy double quotes
		content = content.replace(/[\u201C-\u201F]/g, '"');
		
		// convert fancy single dot
		content = content.replace(/\u2024/g, '.');
		
		// convert fancy double dot
		content = content.replace(/\u2025/g, '..');
		
		// convert fancy ellipsis
		content = content.replace(/\u2026/g, '...');
		
		// convert fancy slash
		content = content.replace(/\u2044/g, '/');
		
		// Latin Basic
		// Latin Supplement
		// Latin Extended A
		// Latin Extended B
		// Currency
		var nonAsciiChars = /[^\x20-\xFF\u0100-\u017F\u0180-\u024F\u20A0-\u20CF]/g;
		
		return content.replace(nonAsciiChars, '').trim();
	};
	
	usi_dom.encode = function (content) {
		if (typeof content !== 'string') {
			return;
		}
		
		var encodedContent = encodeURIComponent(content);
		
		// encodeURIComponent does not encode these characters, so we must manually do it
		encodedContent = encodedContent.replace(/[-_.!~*'()]/g, function (r) {
			return '%' + r.charCodeAt(0).toString(16).toUpperCase();
		});
		
		return encodedContent;
	};
	
	// non jQuery implementation of .closest()
	// given an element, go up the dom chain until an element that matches the selector is found, or null
	usi_dom.get_closest = function (element, selector) {
		// set default element
		element = (element || document);
		
		// Element.matches() polyfill
		if (typeof Element.prototype.matches !== 'function') {
			Element.prototype.matches =
					Element.prototype.matchesSelector ||
					Element.prototype.mozMatchesSelector ||
					Element.prototype.msMatchesSelector ||
					Element.prototype.oMatchesSelector ||
					Element.prototype.webkitMatchesSelector ||
					function (s) {
						var matches = (this.document || this.ownerDocument).querySelectorAll(s);
						var matchIndex = matches.length;
						
						while (--matchIndex >= 0 && matches.item(matchIndex) !== this) {
						}
						
						return matchIndex > -1;
					};
		}
		
		// Get closest match
		for (; element != null && element !== document; element = element.parentNode) {
			if (element.matches(selector)) {
				return element;
			}
		}
		
		return null;
	};
	
	usi_dom.set_css_property = function(element, property, value, isImportant) {
		if (element != null && element instanceof HTMLElement) {
			isImportant = (isImportant == null ? false : isImportant);
			
			if (element.style != null) {
				if (typeof element.style.setProperty === 'function') {
					if (isImportant) {
						element.style.setProperty(property, value, 'important');
					}
					else {
						element.style.setProperty(property, value);
					}
				}
				// before IE9
				else {
					element.style[property] = value;
				}
			}
		}
	};
	
	// some CSS properties require the vendor prefix to behave properly in certain browsers
	// sets a CSS property, with all of the vendor variants, to this element
	usi_dom.set_css_property_all_vendors = function (element, property, value) {
		if (element != null) {
			element.style[property] = value;
			element.style["webkit" + property] = value;
			element.style["moz" + property] = value;
			element.style["ms" + property] = value;
			element.style["o" + property] = value;
		}
	};
	
	// returns an array with the element's CSS class names, otherwise an empty array
	usi_dom.get_classes = function (element) {
		var classes = [];
		
		if (element != null && element.classList != null) {
			classes = Array.prototype.slice.call(element.classList);
		}
		
		return classes;
	};
	
	// add a CSS class to an element, does not add a duplicate
	usi_dom.add_class = function (element, className) {
		if (element != null) {
			var classes = usi_dom.get_classes(element);
			
			if (classes.indexOf(className) === -1) {
				classes.push(className);
				
				element.className = classes.join(' ');
			}
		}
	};
	
	// removes a CSS class name from an element
	usi_dom.remove_class = function (element, className) {
		if (element != null) {
			var existingClasses = usi_dom.get_classes(element);
			var newClasses = [];
			
			existingClasses.forEach(function (existingClass) {
				if (existingClass !== className) {
					newClasses.push(existingClass);
				}
			});
			
			element.className = newClasses.join(' ');
		}
	};
	
	// returns true if the element contains the CSS class name, otherwise false
	usi_dom.has_class = function (element, className) {
		var hasClass = false;
		
		if (element != null) {
			var classes = usi_dom.get_classes(element);
			
			hasClass = (classes.indexOf(className) > -1);
		}
		
		return hasClass;
	};
	
	// returns a decimal that has been converted after stripping all non-decimal characters from a string, or null
	usi_dom.string_to_decimal = function (stringContent) {
		var decimalValue = null;
		
		if (typeof stringContent === 'string') {
			try {
				var testValue = parseFloat(stringContent.replace(/[^0-9\.-]+/g, ''));
				
				if (isNaN(testValue) === false) {
					decimalValue = testValue;
				}
			}
			catch (err) {
				usi_commons.log('Error: ' + err.message);
			}
		}
		
		return decimalValue;
	};
	
	// returns an integer that has been converted after stripping all non-integer characters from a string, or null
	usi_dom.string_to_integer = function (stringContent) {
		var integerValue = null;
		
		if (typeof stringContent === 'string') {
			try {
				var testValue = parseInt(stringContent.replace(/[^0-9-]+/g, ''));
				
				if (isNaN(testValue) === false) {
					integerValue = testValue;
				}
			}
			catch (err) {
				usi_commons.log('Error: ' + err.message);
			}
		}
		
		return integerValue;
	};
	
	// returns a string that matches a currency pattern (first match only) that has been stripped out of another string , or ''
	usi_dom.get_currency_string_from_content = function (stringContent) {
		if (typeof stringContent !== 'string') {
			return '';
		}
		
		try {
			stringContent = stringContent.trim();
			
			// try with content in front and back of the currency
			var currencyPattern = /^([^\$]*?)(\$(?:[\,\,]?\d{1,3})+(?:\.\d{2})?)(.*?)$/;
			var currencyMatches = (stringContent.match(currencyPattern) || []);
			
			if (currencyMatches.length === 4) {
				return currencyMatches[2];
			}
			else {
				return '';
			}
		}
		catch (err) {
			usi_commons.log('Error: ' + err.message);
			
			return '';
		}
	};
	
	// given a url (relative or absolute) this will return the absolute url (fully qualified)
	usi_dom.get_absolute_url = (function () {
		var a;
		
		return function (url) {
			a = (a || document.createElement('a'));
			a.href = url;
			
			return a.href;
		};
	})();
	
	usi_dom.is_absolute_url = function(url) {
		var isAbsolute = false;
		
		if ((url || '') !== '') {
			var absoluteURL = usi_dom.get_absolute_url(url);
			
			isAbsolute = (url === absoluteURL);
		}
		
		return isAbsolute;
	};
	
	// takes a number and returns a string that contains commas, or ''
	usi_dom.format_number = function (number, decimalPlaces) {
		var formattedNumber = '';
		
		if (typeof number === 'number') {
			// set default decimal places
			decimalPlaces = (decimalPlaces || 0);
			
			// convert the number to the specified decimal places
			var workingNumber = number.toFixed(decimalPlaces);
			
			var numberParts = workingNumber.split(/\./g);
			
			if (numberParts.length == 1 || numberParts.length == 2) {
				var numberPortion = numberParts[0];
				
				formattedNumber = numberPortion.replace(/./g, function (c, i, a) {
					return i && c !== '.' && ((a.length - i) % 3 === 0) ? ',' + c : c;
				});
				
				if (numberParts.length == 2) {
					formattedNumber += '.' + numberParts[1];
				}
			}
		}
		
		return formattedNumber;
	};
	
	// takes a number and returns a currency-formatted string, or ''
	usi_dom.format_currency = function (number, languageCode, options) {
		var formattedCurrency = '';
		number = Number(number);
		
		if (isNaN(number) === false) {
			// check for toLocaleString support
			if (typeof Intl == 'object' && typeof Intl.NumberFormat == 'function') {
				languageCode = languageCode || 'en-US';
				options = options || {
					style: 'currency',
					currency: 'USD'
				};
				formattedCurrency = number.toLocaleString(languageCode, options);
			}
			else {
				formattedCurrency = number;
			}
		}
		
		return formattedCurrency;
	};
	
	usi_dom.format_percent = function (number1, number2, decimalPlaces, showDecimalSign) {
		if (decimalPlaces == null) {
			decimalPlaces = 0;
		}
		
		if (showDecimalSign == null) {
			showDecimalSign = true;
		}
		
		if (isNaN(number1) === false && isNaN(number2) === false) {
			if (number2 != 0) {
				var value = usi_dom.to_decimal_places(((parseFloat(number1) / parseFloat(number2)) * parseFloat(100)), decimalPlaces);
			}
			else {
				value = 0;
			}
			
			if (showDecimalSign == true) {
				value += '%';
			}
		}
		
		return value;
	};
	
	// force a number to a specific number of decimal places
	usi_dom.to_decimal_places = function (value, decimalPlaces) {
		if (value != null && typeof value === 'number' && decimalPlaces != null && typeof decimalPlaces === 'number') {
			if (decimalPlaces == 0) {
				return parseFloat(Math.round(value));
			}
			
			var multiplier = 10;
			
			for (var i = 1; i < decimalPlaces; i++) {
				multiplier *= 10;
			}
			
			return parseFloat(Math.round(value * multiplier) / multiplier);
		}
		else {
			return null;
		}
	};
	
	// trims a string to the maxLength and optionally appends trimmedText
	usi_dom.trim_string = function (stringValue, maxLength, trimmedText) {
		stringValue = (stringValue || '');
		trimmedText = (trimmedText || '');
		
		if (stringValue.length > maxLength) {
			stringValue = stringValue.substring(0, maxLength);
			
			if (trimmedText !== '') {
				stringValue += trimmedText;
			}
		}
		
		return stringValue;
	};
	
	// wire up an event handler to an element
	usi_dom.attach_event = function (eventName, func, element) {
		var attachToElement = usi_dom.find_supported_element(eventName, element);
		
		// first, un-wire it to make sure we only have one
		usi_dom.detach_event(eventName, func, attachToElement);
		
		if (attachToElement.addEventListener) {
			attachToElement.addEventListener(eventName, func, false);
		}
		else {
			attachToElement.attachEvent('on' + eventName, func);
		}
	};
	
	// un-wire an event handler from an element
	usi_dom.detach_event = function (eventName, func, element) {
		var removeFromElement = usi_dom.find_supported_element(eventName, element);
		
		if (removeFromElement.removeEventListener) {
			removeFromElement.removeEventListener(eventName, func, false);
		}
		else {
			removeFromElement.detachEvent('on' + eventName, func);
		}
	};
	
	// find the "best" element for attaching the event to, starting with the supplied element
	usi_dom.find_supported_element = function (eventName, element) {
		// preferred path: node (if supplied and supported) > document (if supported) > window
		element = (element || document);
		
		// the supplied element is the window, so return this
		if (element === window) {
			return window;
		}
		else if (usi_dom.is_event_supported(eventName, element) === true) {
			return element;
		}
		else {
			// the supplied element was the document and this event is not supported
			if (element === document) {
				return window;
			}
			else {
				return usi_dom.find_supported_element(eventName, document);
			}
		}
	};
	
	// returns true if the element has a handler for the eventName, or false
	usi_dom.is_event_supported = function (eventName, element) {
		return (element != null && typeof element['on' + eventName] !== 'undefined');
	};
	
	/*
	 Iteratively searches through an object's nested properties
	 through a given property path, e.g., "prop1.prop2" and
	 will return false if the path is not a prop of the
	 base obj or if the props are not typeof object
	 */
	usi_dom.is_defined = function (testObj, propertyPath) {
		if (testObj == null) {
			return false;
		}
		
		if ((propertyPath || '') === '') {
			return false;
		}
		
		var isDefined = true;
		var currentObj = testObj;
		var properties = propertyPath.split('.');
		
		properties.forEach(function (propertyName) {
			if (isDefined === true) {
				if (currentObj == null || typeof currentObj !== 'object' || currentObj.hasOwnProperty(propertyName) === false) {
					isDefined = false;
				}
				else {
					currentObj = currentObj[propertyName];
				}
			}
		});
		
		return isDefined;
	};
	
	/*
	  Instantiates a MutationObserver to detect changes
		  to the given element. If mutations are detected
		  and the URL is different from invocation,
		  it will fire the callback. Utilizes
		  DOMNodeInserted & DOMNodeRemoved
		  for graceful degradation.
	 */
	usi_dom.observe = (function (element, options, callback) {
		var url = location.href;
		var defaultOptions = {
			onUrlUpdate: false,
			observerOptions: {childList: true, subtree: true}
		};
		var MutationObserver = window.MutationObserver || window.WebkitMutationObserver;
		
		options = options || defaultOptions;
		
		return function (element, callback) {
			var observer = null;
			var callbackHandler = function () {
				var currentUrl = location.href;
				
				if (options.onUrlUpdate && currentUrl !== url) {
					callback();
					url = currentUrl;
				} else {
					callback();
				}
			};
			
			if (MutationObserver) {
				observer = new MutationObserver(function (mutations) {
					var currentUrl = location.href;
					var hasMutations = mutations[0].addedNodes.length || mutations[0].removedNodes.length;
					
					if (hasMutations && options.onUrlUpdate && currentUrl !== url) {
						callback();
						url = currentUrl;
					} else if (hasMutations) {
						callback();
					}
				});
				observer.observe(element, options.observerOptions);
			} else if (window.addEventListener) {
				element.addEventListener('DOMNodeInserted', callbackHandler, false);
				element.addEventListener('DOMNodeRemoved', callbackHandler, false);
			}
		};
	})();
	
	usi_dom.params_to_object = function (paramsString) {
		var paramsObj = {};
		
		if ((paramsString || '') != '') {
			var params = paramsString.split('&');
			
			params.forEach(function (param) {
				var paramParts = param.split('=');
				
				if (paramParts.length === 2) {
					paramsObj[decodeURIComponent(paramParts[0])] = decodeURIComponent(paramParts[1]);
				}
				else if (paramParts.length === 1) {
					paramsObj[decodeURIComponent(paramParts[0])] = null;
				}
			});
		}
		
		return paramsObj;
	};
	
	usi_dom.object_to_params = function (obj) {
		var params = [];
		
		if (obj != null) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key) === true) {
					params.push(encodeURIComponent(key) + '=' + (obj[key] == null ? '' : encodeURIComponent(obj[key])));
				}
			}
		}
		
		return params.join('&');
	};
	
	usi_dom.interval_with_timeout = function (iterationFunction, timeoutCallback, completeCallback, options) {
		if (typeof iterationFunction !== 'function') {
			throw new Error('usi_dom.interval_with_timeout(): iterationFunction must be a function');
		}
		
		if (timeoutCallback == null) {
			timeoutCallback = function (timeoutResult) {
				return timeoutResult;
			}
		}
		else if (typeof timeoutCallback !== 'function') {
			throw new Error('usi_dom.interval_with_timeout(): timeoutCallback must be a function');
		}
		
		if (completeCallback == null) {
			completeCallback = function (completeResult) {
				return completeResult;
			}
		}
		else if (typeof completeCallback !== 'function') {
			throw new Error('usi_dom.interval_with_timeout(): completeCallback must be a function');
		}
		
		// set default values
		options = (options || {});
		
		var intervalMS = (options.intervalMS || 20);
		var timeoutMS = (options.timeoutMS || 2000);
		
		if (typeof intervalMS !== 'number') {
			throw new Error('usi_dom.interval_with_timeout(): intervalMS must be a number');
		}
		
		if (typeof timeoutMS !== 'number') {
			throw new Error('usi_dom.interval_with_timeout(): timeoutMS must be a number');
		}
		
		var completionIsRunning = false;
		var intervalStartDate = new Date();
		
		var interval = setInterval(function () {
			var elapsedMS = ((new Date()) - intervalStartDate);
			
			// did we time out?
			if (elapsedMS >= timeoutMS) {
				clearInterval(interval);
				
				var timeoutResult = {
					elapsedMS: elapsedMS
				};
				
				return timeoutCallback(timeoutResult);
			}
			else {
				if (completionIsRunning === false) {
					completionIsRunning = true;
					
					// don't run the iterationFunction if the previous iteration's call hasn't completed yet
					iterationFunction(function (isComplete, completeResult) {
						completionIsRunning = false;
						
						// are we done?
						if (isComplete === true) {
							clearInterval(interval);
							
							completeResult = (completeResult || {});
							
							completeResult.elapsedMS = ((new Date()) - intervalStartDate);
							
							return completeCallback(completeResult);
						}
					});
				}
			}
		}, intervalMS);
	};
	
	// EXPERIMENTAL
	usi_dom.set_text_and_size = function(contentDiv, text, options) {
		if (contentDiv == null) {
			return;
		}
		
		// set default values
		options = (options || {});
		
		var minFontSize = (options.minFontSize || 1);
		var maxFontSize = (options.maxFontSize || 100);
		var lineHeightMultiplier = (options.lineHeightMultiplier || 1.2);
		var allowWrap = (options.allowWrap != null ? options.allowWrap : false);
		
		var fontSizeResult = usi_dom.get_max_font_size_for_space(contentDiv, text, minFontSize, maxFontSize, lineHeightMultiplier, allowWrap);
		
		// set our calculated values
		contentDiv.innerHTML = text;
		
		usi_dom.set_css_property(contentDiv, 'font-size', fontSizeResult.fontSize + 'px', true);
		usi_dom.set_css_property(contentDiv, 'line-height', fontSizeResult.lineHeight + 'px', true);
		usi_dom.set_css_property(contentDiv, 'visibility', 'visible', true);
	};
	
	
	usi_dom.get_max_font_size_for_space = function(contentDiv, text, minFontSize, maxFontSize, lineHeightMultiplier, allowWrap) {
		var result = {
			fontSize: 0,
			lineHeight: 0
		};
		
		// first, find it in course increments
		var courseFontSizeIncrement = Math.round((maxFontSize - minFontSize) / 20);
		
		var fontSizeResult = usi_dom.get_max_font_size_for_div(contentDiv, text, minFontSize, maxFontSize, lineHeightMultiplier, allowWrap, courseFontSizeIncrement);
		
		// now, fine tune the font size
		fontSizeResult = usi_dom.get_max_font_size_for_div(contentDiv, text, fontSizeResult.fontSize, fontSizeResult.breakFontSize, lineHeightMultiplier, allowWrap, 1);
		
		result.fontSize = fontSizeResult.fontSize;
		result.lineHeight = fontSizeResult.lineHeight;
		
		// these values need to be knocked down slightly as the fontSize gets larger
		var fontSizeScale = Math.round(parseFloat(result.fontSize) * 0.04);
		var lineHeightScale = 0;
		
		result.fontSize -= fontSizeScale;
		
		if (allowWrap === false) {
			result.lineHeight = result.fontSize;
		}
		else {
			lineHeightScale = (parseFloat(result.lineHeight) * 0.04);
		}
		
		result.lineHeight -= lineHeightScale;
		
		if (lineHeightMultiplier >= parseFloat(1.0) && result.lineHeight < result.fontSize) {
			result.lineHeight = result.fontSize;
		}
		
		return result;
	};
	
	usi_dom.get_max_font_size_for_div = function(contentDiv, text, minFontSize, maxFontSize, lineHeightMultiplier, allowWrap, fontSizeIncrement) {
		var result = {
			fontSize: minFontSize,
			breakFontSize: maxFontSize
		};
		
		// calculate contentDiv's physical size
		var contentDivActualSize = usi_dom.get_element_actual_size(contentDiv);
		
		var originalOverflow = contentDiv.style.overflow;
		var originalWhitespace = contentDiv.style.whiteSpace;
		
		// hide this while we're doing our magic
		usi_dom.set_css_property(contentDiv, 'visibility', 'hidden', true);
		usi_dom.set_css_property(contentDiv, 'overflow', 'hidden', true);
		
		if (allowWrap === false) {
			usi_dom.set_css_property(contentDiv, 'white-space', 'nowrap', true);
		}
		else {
			usi_dom.set_css_property(contentDiv, 'white-space', 'normal', true);
		}
		
		if (allowWrap === true) {
			usi_dom.set_css_property(contentDiv, 'height', contentDivActualSize.height + 'px', true);
		}
		
		contentDiv.innerHTML = text;
		
		for (var currentFontSize = minFontSize; currentFontSize <= maxFontSize; currentFontSize += fontSizeIncrement) {
			var currentLineHeight = Math.round(parseFloat(currentFontSize) * lineHeightMultiplier);
			
			if (allowWrap === false) {
				usi_dom.set_css_property(contentDiv, 'height', currentLineHeight + 'px', true);
			}
			
			usi_dom.set_css_property(contentDiv, 'font-size', currentFontSize + 'px', true);
			usi_dom.set_css_property(contentDiv, 'line-height', currentLineHeight + 'px', true);
			
			// check if the div had to scroll to fit the content
			if ((allowWrap === true && contentDiv.scrollHeight > contentDiv.clientHeight) || (allowWrap === false && contentDiv.scrollWidth > contentDiv.clientWidth)) {
				result.breakFontSize = currentFontSize;
				
				break;
			}
			else {
				result.fontSize = currentFontSize;
				result.lineHeight = currentLineHeight;
			}
		}
		
		// restore original values
		usi_dom.set_css_property(contentDiv, 'overflow', originalOverflow, true);
		usi_dom.set_css_property(contentDiv, 'white-space', originalWhitespace, true);
		
		return result;
	};
	
	usi_dom.get_element_actual_size = function(element) {
		var result = {
			width: null,
			height: null,
			top: null,
			left: null,
			bottom: null,
			right: null
		};
		
		if (element != null) {
			// store the previous CSS value for box-sizing
			var previousBoxSizing = element.style.boxSizing;
			
			usi_dom.set_css_property(element, 'box-sizing', 'border-box', true);
			
			//result.width = element.clientWidth;
			//result.height = element.clientHeight;
			
			result.width = element.offsetWidth;
			result.height = element.offsetHeight;
			
			// restore previous box-sizing value
			usi_dom.set_css_property(element, 'box-sizing', previousBoxSizing, true);
			
			var elementLocation = element.getBoundingClientRect();
			
			result.top = elementLocation.top;
			result.left = elementLocation.left;
			result.bottom = elementLocation.bottom;
			result.right = elementLocation.right;
		}
		
		return result;
	};
	
	usi_dom.clone = function (obj) {
		var copy = null;
		
		// Handle the 3 simple types, and null or undefined
		if (obj === null || typeof obj !== 'object') {
			copy = obj;
		}
		else if (obj instanceof Date === true) {
			copy = new Date();
			copy.setTime(obj.getTime());
		}
		else if (obj instanceof Array === true) {
			copy = [];
			
			for (var i = 0, len = obj.length; i < len; i++) {
				copy[i] = usi_dom.clone(obj[i]);
			}
		}
		else if (obj instanceof Object === true) {
			copy = {};
			
			for (var attr in obj) {
				if (obj.hasOwnProperty(attr)) {
					copy[attr] = usi_dom.clone(obj[attr]);
				}
			}
		}
		
		return copy;
	};
	
	// EXPERIMENTAL
	usi_dom.fit_text_in_element = function(element, text, options, doCenterVertical, doCenterHorizontal) {
		var result = {
			fontSize: 0,
			lineHeight: 0
		};
		
		if (element == null) {
			return result;
		}
		
		// set default values
		options = (options || {});
		
		options.minFontSize = (options.minFontSize == null ? 1 : options.minFontSize);
		options.maxFontSize = (options.maxFontSize == null ? 1000 : options.maxFontSize);
		options.lineHeightMultiplier = (options.lineHeightMultiplier == null ? 1.2 : options.lineHeightMultiplier);
		options.allowWrap = (options.allowWrap == null ? false : options.allowWrap);
		
		// this seems to be the magic number to make the resulting div height exactly the height of the font
		if (options.allowWrap == false) {
			options.lineHeightMultiplier = 0.7552;
		}
		
		doCenterVertical = (doCenterVertical == null ? true : doCenterVertical);
		doCenterHorizontal = (doCenterHorizontal == null ? true : doCenterHorizontal);
		
		// save the original dimensions
		var originalSize = usi_dom.get_element_actual_size(element);
		
		var originalWidth = originalSize.width;
		var originalHeight = originalSize.height;
		
		//alert(originalSize.width + ' x ' + originalSize.height);
		
		// hide while we find the font size
		usi_dom.set_css_property(element, 'visibility', 'hidden', true);
		
		var fontSizeResult = usi_dom.get_max_font_size_for_element(element, text, options.minFontSize, options.maxFontSize, options.lineHeightMultiplier, options.allowWrap);
		
		// set our calculated values
		element.innerHTML = text;
		usi_dom.set_css_property(element, 'font-size', fontSizeResult.fontSize + 'px', true);
		usi_dom.set_css_property(element, 'line-height', fontSizeResult.lineHeight + 'px', true);
		
		// restore original dimensions
		usi_dom.set_css_property(element, 'width', originalWidth + 'px', true);
		usi_dom.set_css_property(element, 'height', originalHeight + 'px', true);
		
		if (doCenterVertical || doCenterHorizontal) {
			usi_dom.center_content(element, doCenterVertical, doCenterHorizontal, options.allowWrap);
		}
		
		// restore visibility
		// only show the element if the font size is within our specified range
		if (fontSizeResult.fontSize >= options.minFontSize && fontSizeResult.fontSize <= options.maxFontSize) {
			usi_dom.set_css_property(element, 'visibility', 'visible', true);
		}
		
		result = fontSizeResult;
		
		return result;
	};
	
	usi_dom.get_max_font_size_for_element = function(element, text, minFontSize, maxFontSize, lineHeightMultiplier, allowWrap) {
		var result = {
			fontSize: 0,
			lineHeight: 0
		};
		
		// first, find it in course increments
		var courseFontSizeIncrement = Math.round((maxFontSize - minFontSize) / 20);
		
		if (courseFontSizeIncrement < 1) {
			courseFontSizeIncrement = 1;
		}
		
		var fontSizeResult = usi_dom.get_max_font_size_for_element_incremental(element, text, minFontSize, maxFontSize, lineHeightMultiplier, allowWrap, courseFontSizeIncrement);
		
		// now, fine tune the font size
		fontSizeResult = usi_dom.get_max_font_size_for_element_incremental(element, text, fontSizeResult.fontSize, fontSizeResult.breakFontSize, lineHeightMultiplier, allowWrap, 1);
		
		result.fontSize = fontSizeResult.fontSize;
		result.lineHeight = fontSizeResult.lineHeight;
		
		return result;
	};
	
	usi_dom.get_max_font_size_for_element_incremental = function(element, text, minFontSize, maxFontSize, lineHeightMultiplier, allowWrap, fontSizeIncrement) {
		var result = {
			fontSize: minFontSize,
			breakFontSize: maxFontSize
		};
		
		// calculate element's physical size
		var originalSize = usi_dom.get_element_actual_size(element);
		
		var originalOverflow = element.style.overflow;
		var originalWhitespace = element.style.whiteSpace;
		
		// hide this while we're doing our magic
		usi_dom.set_css_property(element, 'visibility', 'hidden', true);
		
		if (allowWrap === true) {
			usi_dom.set_css_property(element, 'white-space', 'normal', true);
			usi_dom.set_css_property(element, 'overflow', 'scroll', true);
		}
		else {
			usi_dom.set_css_property(element, 'white-space', 'nowrap', true);
			usi_dom.set_css_property(element, 'overflow', 'visible', true);
			
			usi_dom.set_css_property(element, 'width', 'auto', true);
			usi_dom.set_css_property(element, 'height', 'auto', true);
		}
		
		element.innerHTML = text;
		
		for (var currentFontSize = minFontSize; currentFontSize <= maxFontSize; currentFontSize += fontSizeIncrement) {
			var currentLineHeight = Math.round(parseFloat(currentFontSize) * lineHeightMultiplier);
			
			usi_dom.set_css_property(element, 'font-size', currentFontSize + 'px', true);
			usi_dom.set_css_property(element, 'line-height', currentLineHeight + 'px', true);
			
			var contentDivSize = usi_dom.get_element_actual_size(element);
			
			if (allowWrap === true) {
				// check if the div had to scroll to fit the content
				if (element.scrollHeight > element.clientHeight) {
					result.breakFontSize = currentFontSize;
					
					break;
				}
				else {
					result.fontSize = currentFontSize;
					result.lineHeight = currentLineHeight;
				}
			}
			else {
				if (contentDivSize.width > originalSize.width || contentDivSize.height > originalSize.height) {
					result.breakFontSize = currentFontSize;
					
					break;
				}
				else {
					result.fontSize = currentFontSize;
					result.lineHeight = currentLineHeight;
				}
			}
		}
		
		// restore original values
		usi_dom.set_css_property(element, 'white-space', originalWhitespace, true);
		usi_dom.set_css_property(element, 'overflow', originalOverflow, true);
		usi_dom.set_css_property(element, 'width', originalSize.width + 'px', true);
		usi_dom.set_css_property(element, 'height', originalSize.height + 'px', true);
		
		return result;
	};
	
	usi_dom.fit_text_in_element2 = function(element, text, options, doCenterVertical, doCenterHorizontal) {
		var result = {
			fontSize: 0,
			lineHeight: 0,
			width: 0,
			height: 0
		};
		
		if (element == null) {
			return result;
		}
		
		// set default values
		options = (options || {});
		
		options.minFontSize = (options.minFontSize == null ? 1 : options.minFontSize);
		options.maxFontSize = (options.maxFontSize == null ? 1000 : options.maxFontSize);
		options.lineHeightMultiplier = (options.lineHeightMultiplier == null ? 1.2 : options.lineHeightMultiplier);
		options.allowWrap = (options.allowWrap == null ? false : options.allowWrap);
		options.minLines = (options.minLines == null ? 0 : options.minLines);
		options.maxLines = (options.maxLines == null ? 0 : options.maxLines);
		
		// this seems to be the magic number to make the resulting div height exactly the height of the font
		if (options.allowWrap === false || options.maxLines === 1) {
			options.lineHeightMultiplier = 0.7552;
		}
		
		doCenterVertical = (doCenterVertical == null ? true : doCenterVertical);
		doCenterHorizontal = (doCenterHorizontal == null ? true : doCenterHorizontal);
		
		// save the original dimensions
		var originalSize = usi_dom.get_element_actual_size(element);
		
		var originalWidth = originalSize.width;
		var originalHeight = originalSize.height;
		
		//console.log(originalSize.width + ' x ' + originalSize.height);
		
		// hide while we find the font size
		usi_dom.set_css_property(element, 'visibility', 'hidden', true);
		
		var fontSizeResult = usi_dom.get_max_font_size_for_element2(element, text, options.minFontSize, options.maxFontSize, options.lineHeightMultiplier, options.allowWrap, options.minLines, options.maxLines);
		
		// restore original dimensions
		usi_dom.set_css_property(element, 'width', originalWidth + 'px', true);
		usi_dom.set_css_property(element, 'height', originalHeight + 'px', true);
		
		// valid values
		if (fontSizeResult.fontSize !== 0 && fontSizeResult.lineHeight !== 0 && fontSizeResult.width !== 0 && fontSizeResult.height !== 0 && fontSizeResult.fontSize >= options.minFontSize && fontSizeResult.fontSize <= options.maxFontSize && fontSizeResult.width <= originalWidth && fontSizeResult.height <= originalHeight) {
			// set our calculated values
			element.innerHTML = text;
			
			usi_dom.set_css_property(element, 'font-size', fontSizeResult.fontSize + 'px', true);
			usi_dom.set_css_property(element, 'line-height', fontSizeResult.lineHeight + 'px', true);
			
			if (doCenterVertical || doCenterHorizontal) {
				usi_dom.center_content(element, doCenterVertical, doCenterHorizontal, options.allowWrap);
			}
			
			usi_dom.set_css_property(element, 'visibility', 'visible', true);
			
			result = fontSizeResult;
		}
		
		return result;
	};
	
	usi_dom.get_max_font_size_for_element2 = function(element, text, minFontSize, maxFontSize, lineHeightMultiplier, allowWrap, minLines, maxLines) {
		var result = {
			fontSize: 0,
			lineHeight: 0,
			width: 0,
			height: 0
		};
		
		// first, find it in course increments
		var courseFontSizeIncrement = Math.round((maxFontSize - minFontSize) / 20);
		
		if (courseFontSizeIncrement < 1) {
			courseFontSizeIncrement = 1;
		}
		
		var fontSizeResult = {};
		
		if (minLines === 0 && maxLines === 0) {
			fontSizeResult = usi_dom.get_max_font_size_for_element_incremental2(element, text, minFontSize, maxFontSize, lineHeightMultiplier, allowWrap, courseFontSizeIncrement, minLines, maxLines);
			
			// now, fine tune the font size
			if (fontSizeResult.fontSize < fontSizeResult.breakFontSize) {
				fontSizeResult = usi_dom.get_max_font_size_for_element_incremental2(element, text, fontSizeResult.fontSize, fontSizeResult.breakFontSize, lineHeightMultiplier, allowWrap, 1, minLines, maxLines);
			}
		}
		else {
			fontSizeResult = usi_dom.get_max_font_size_for_element_incremental2(element, text, minFontSize, maxFontSize, lineHeightMultiplier, allowWrap, 1, minLines, maxLines);
		}
		
		if (fontSizeResult.fontSize !== 0 && fontSizeResult.lineHeight !== 0 && fontSizeResult.width !== 0 && fontSizeResult.height !== 0) {
			result.fontSize = fontSizeResult.fontSize;
			result.lineHeight = fontSizeResult.lineHeight;
			result.width = fontSizeResult.width;
			result.height = fontSizeResult.height;
		}
		
		return result;
	};
	
	usi_dom.get_max_font_size_for_element_incremental2 = function(element, text, minFontSize, maxFontSize, lineHeightMultiplier, allowWrap, fontSizeIncrement, minLines, maxLines) {
		var result = {
			fontSize: minFontSize,
			lineHeight: 0,
			breakFontSize: maxFontSize,
			width: 0,
			height: 0
		};
		
		// calculate element's physical size
		var originalSize = usi_dom.get_element_actual_size(element);
		
		//console.log(originalSize.width + ' x ' + originalSize.height);
		
		var originalOverflow = element.style.overflow;
		var originalWhitespace = element.style.whiteSpace;
		
		if (allowWrap === true) {
			usi_dom.set_css_property(element, 'white-space', 'normal', true);
			usi_dom.set_css_property(element, 'overflow', 'hidden', true);
		}
		else {
			usi_dom.set_css_property(element, 'white-space', 'nowrap', true);
			usi_dom.set_css_property(element, 'overflow', 'visible', true);
			
			usi_dom.set_css_property(element, 'width', 'auto', true);
			usi_dom.set_css_property(element, 'height', 'auto', true);
		}
		
		element.innerHTML = text;
		
		for (var currentFontSize = minFontSize; currentFontSize <= maxFontSize; currentFontSize += fontSizeIncrement) {
			var currentLineHeight = Math.round(parseFloat(currentFontSize) * lineHeightMultiplier);
			
			usi_dom.set_css_property(element, 'font-size', currentFontSize + 'px', true);
			usi_dom.set_css_property(element, 'line-height', currentLineHeight + 'px', true);
			
			if (allowWrap === true && maxLines > 0) {
				var maxHeight = (currentLineHeight * maxLines);
				
				if (maxHeight > originalSize.height) {
					//console.log('BREAK MAXHEIGHT fontSize [' + currentFontSize + '] width [' + contentDivSize.width + '] maxHeight [' + maxHeight + '] clientHeight [' + element.clientHeight + '] offsetHeight [' + element.offsetHeight + '] scrollHeight [' + element.scrollHeight + ']');
					
					result.breakFontSize = currentFontSize;
					
					break;
				}
				
				usi_dom.set_css_property(element, 'height', maxHeight + 'px', true);
			}
			
			var contentDivSize = usi_dom.get_element_actual_size(element);
			
			if (allowWrap === true) {
				//if ((element.offsetHeight + 2) < element.scrollHeight) {
				if (element.offsetHeight < element.scrollHeight) {
					//console.log('BREAK fontSize [' + currentFontSize + '] width [' + contentDivSize.width + '] maxHeight [' + maxHeight + '] height [' + contentDivSize.height + '] clientHeight [' + element.clientHeight + '] offsetHeight [' + element.offsetHeight + '] scrollHeight [' + element.scrollHeight + ']');
					
					result.breakFontSize = currentFontSize;
					
					break;
				}
				else {
					//console.log('fontSize [' + currentFontSize + '] width [' + contentDivSize.width + '] maxHeight [' + maxHeight + '] height [' + contentDivSize.height + '] clientHeight [' + element.clientHeight + '] offsetHeight [' + element.offsetHeight + '] scrollHeight [' + element.scrollHeight + ']');
					
					result.fontSize = currentFontSize;
					result.lineHeight = currentLineHeight;
					result.width = contentDivSize.width;
					result.height = contentDivSize.height;
				}
			}
			else {
				if (contentDivSize.width > originalSize.width || contentDivSize.height > originalSize.height) {
					result.breakFontSize = currentFontSize;
					
					break;
				}
				else {
					result.fontSize = currentFontSize;
					result.lineHeight = currentLineHeight;
					result.width = contentDivSize.width;
					result.height = contentDivSize.height;
				}
			}
		}
		
		usi_dom.set_css_property(element, 'visibility', 'visible', true);
		
		// restore original values
		usi_dom.set_css_property(element, 'white-space', originalWhitespace, true);
		usi_dom.set_css_property(element, 'overflow', originalOverflow, true);
		//usi_dom.set_css_property(element, 'width', originalSize.width + 'px', true);
		//usi_dom.set_css_property(element, 'height', originalSize.height + 'px', true);
		
		return result;
	};
	
	usi_dom.center_content = function(element, doVertical, doHorizontal, allowWrap) {
		if (element != null) {
			doVertical = (doVertical == null ? true : doVertical);
			doHorizontal = (doHorizontal == null ? true : doHorizontal);
			allowWrap = (allowWrap == null ? true : allowWrap);
			
			if (doVertical || doHorizontal) {
				var childElement = document.createElement('div');
				
				childElement.innerHTML = element.innerHTML;
				
				usi_dom.set_css_property(childElement, 'position', 'absolute', true);
				usi_dom.set_css_property(childElement, 'top', '0px', true);
				usi_dom.set_css_property(childElement, 'left', '0px', true);
				usi_dom.set_css_property(childElement, 'width', 'auto', true);
				usi_dom.set_css_property(childElement, 'height', 'auto', true);
				usi_dom.set_css_property(childElement, 'margin', '0px', true);
				usi_dom.set_css_property(childElement, 'padding', '0px', true);
				
				usi_dom.set_css_property(childElement, 'visibility', 'inherit', true);
				usi_dom.set_css_property(childElement, 'font-family', 'inherit', true);
				usi_dom.set_css_property(childElement, 'font-size', 'inherit', true);
				usi_dom.set_css_property(childElement, 'font-weight', 'inherit', true);
				usi_dom.set_css_property(childElement, 'font-style', 'inherit', true);
				usi_dom.set_css_property(childElement, 'line-height', 'inherit', true);
				usi_dom.set_css_property(childElement, 'color', 'inherit', true);
				usi_dom.set_css_property(childElement, 'text-shadow', 'inherit', true);
				usi_dom.set_css_property(childElement, 'border', 'inherit', true);
				usi_dom.set_css_property(childElement, 'outline', 'inherit', true);
				usi_dom.set_css_property(childElement, 'background-color', 'inherit', true);
				
				if (allowWrap === true) {
					usi_dom.set_css_property(childElement, 'white-space', 'normal', true);
					usi_dom.set_css_property(childElement, 'overflow', 'hidden', true);
				}
				else {
					usi_dom.set_css_property(childElement, 'white-space', 'nowrap', true);
					usi_dom.set_css_property(childElement, 'overflow', 'visible', true);
				}
				
				// wipe out the parent element and replace with the child element
				element.innerHTML = '';
				element.appendChild(childElement);
				
				// position the child inside the parent
				var parentSize = usi_dom.get_element_actual_size(element);
				var childSize = usi_dom.get_element_actual_size(childElement);
				
				if (doVertical) {
					usi_dom.set_css_property(childElement, 'top', parseInt((parentSize.height - childSize.height) / 2) + 'px', true);
				}
				
				if (doHorizontal) {
					usi_dom.set_css_property(childElement, 'left', parseInt((parentSize.width - childSize.width) / 2) + 'px', true);
					usi_dom.set_css_property(childElement, 'text-align', 'center', true);
				}
				
				usi_dom.set_css_property(childElement, 'width', childSize.width + 'px', true);
				usi_dom.set_css_property(childElement, 'height', childSize.height + 'px', true);
				//usi_dom.set_css_property(childElement, 'visibility', 'inherit', true);
			}
		}
	};
	
	usi_dom.get_head_element = function() {
		var headElement = null;
		
		if (top.location == location) {
			headElement = usi_dom.get_first_element('head');
		}
		else {
			var headElements = parent.document.getElementsByTagName('head');
			
			if (headElements != null && headElements.length > 0) {
				headElement = headElements[0];
			}
		}
		
		return headElement;
	};
	
	usi_dom.get_body_element = function() {
		var bodyElement = null;
		
		if (top.location == location) {
			bodyElement = usi_dom.get_first_element('body');
		}
		else {
			var bodyElements = parent.document.getElementsByTagName('body');
			
			if (bodyElements != null && bodyElements.length > 0) {
				bodyElement = bodyElements[0];
			}
		}
		
		return bodyElement;
	};
	
	usi_dom.place_css = function(css, id) {
		// if no id was passed in, generate a unique id
		if ((id || '') === '') {
			id = 'usi_style_' + ((new Date()).getTime());
		}
		
		var headElement = usi_dom.get_head_element();
		
		if (headElement != null) {
			var cssElement = document.createElement('style');
			
			cssElement.type = 'text/css';
			cssElement.id = id;
			cssElement.className = 'usi_style_tag';
			
			if (cssElement.styleSheet) {
				cssElement.styleSheet.cssText = css;
			}
			else {
				cssElement.innerHTML = css;
			}
			
			headElement.appendChild(cssElement);
		}
	};
	
	usi_dom.load_external_stylesheet = function(url, id, callback) {
		if ((url || '') !== '') {
			// if no id was passed in, generate a unique id
			if ((id || '') === '') {
				id = 'usi_stylesheet_' + ((new Date()).getTime());
			}
			
			var result = {
				url: url,
				id: id
			};
			
			var headElement = usi_dom.get_head_element();
			
			if (headElement != null) {
				var linkElement = document.createElement('link');
				
				linkElement.type = 'text/css';
				linkElement.rel = 'stylesheet';
				linkElement.id = result.id;
				linkElement.href = url;
				
				usi_dom.attach_event('load', function () {
					if (callback != null) {
						return callback(null, result);
					}
				}, linkElement);
				
				headElement.appendChild(linkElement);
			}
		}
		else {
			if (callback != null) {
				return callback(null, result);
			}
		}
	};
	
	usi_dom.preload_image = function(url, removeAfterLoad, callback) {
		var result = {};
		
		if (removeAfterLoad == null) {
			removeAfterLoad = true;
		}
		
		if ((url || '') !== '') {
			var bodyElement = usi_dom.get_body_element();
			
			if (bodyElement != null) {
				var imageElement = new Image();
				imageElement.id = 'usi_image_' + ((new Date()).getTime());
				imageElement.src = url;
				
				usi_dom.set_css_property(imageElement, 'visibility', 'hidden', true);
				
				usi_dom.attach_event('load', function () {
					if (removeAfterLoad === true) {
						bodyElement.removeChild(imageElement);
					}
					
					if (callback != null) {
						return callback(null, result);
					}
				}, imageElement);
				
				bodyElement.appendChild(imageElement);
			}
		}
		else {
			if (callback != null) {
				return callback(null, result);
			}
		}
	};
	
	usi_dom.get_with_script = function(src, removeAfterLoad, callback) {
		var result = {};
		
		if (removeAfterLoad == null) {
			removeAfterLoad = true;
		}
		
		var headElement = usi_dom.get_head_element();
		
		if (headElement != null) {
			var scriptID = 'usi_' + ((new Date()).getTime());
			
			var scriptElement = document.createElement('script');
			
			scriptElement.id = scriptID;
			scriptElement.type = 'text/javascript';
			scriptElement.src = src;
			
			usi_dom.attach_event('load', function () {
				if (removeAfterLoad === true) {
					headElement.removeChild(scriptElement);
				}
				
				if (callback != null) {
					return callback(null, result);
				}
			}, scriptElement);
			
			headElement.appendChild(scriptElement);
		}
		else {
			if (callback != null) {
				return callback(null, result);
			}
		}
	};
	
	usi_dom.privacy_disclaimer_options = {
		isEnabled: false,
		debugMode: false,
		fitTextVersion: 1,
		disclaimerText: {
			en: 'By providing your email address you are consenting to the terms of this <a target="_blank" href="https://labs.upsellit.com/privacy-policy">privacy policy</a>.',
			de: 'Indem Sie Ihre E-Mail-Adresse angeben, stimmen Sie den Bedingungen dieser <a target="_blank" href="https://labs.upsellit.com/privacy-policy">Datenschutzrichtlinie</a> zu.',
			es: 'Al proporcionar su dirección de correo electrónico usted está aceptando los términos de esta <a target="_blank" href="https://labs.upsellit.com/privacy-policy">política de privacidad</a>.',
			it: 'Fornendo il proprio indirizzo e-mail, si accettano i termini di questa <a target="_blank" href="https://labs.upsellit.com/privacy-policy">informativa sulla privacy</a>.',
			fr: 'En fournissant votre adresse email, vous acceptez les termes de cette <a target="_blank" href="https://labs.upsellit.com/privacy-policy">Politique de Confidentialité</a>.',
			Kay: 'By providing your email address you are consenting to the terms of this <a target="_blank" href="https://www.kay.com/en/kaystore/cms/privacy-policy">privacy policy</a>.',
			Jared: 'By providing your email address you are consenting to the terms of this <a target="_blank" href="https://www.jared.com/en/jaredstore/cms/privacy-policy">privacy policy</a>.'
		},
		language: 'en',
		privacyElementSelector: '#usi_privacy_disclaimer',
		displayDelayMS: 0,
		minHeight: 10,
		maxHeight: 24,
		minWidth: 190,
		maxWidth: 240,
		minFontSize: 9,
		maxFontSize: 12,
		minLines: 1,
		maxLines: 2,
		lineHeightMultiplier: 1.0,
		useCTAWidth: false,
		centerHorizontally: true,
		centerVertically: false,
		wrapIfNecessary: true,
		topMargin: 2,
		forcePosition: false,
		forcePositionUnits: 'pixel',
		forceTop: 0,
		forceLeft: 0,
		forceWidth: 0,
		forceHeight: 0,
		border: 'none',
		outline: 'none',
		backgroundColor: 'unset',
		fontFamily: 'Arial',
		fontColor: '#666',
		fontWeight: 'normal',
		fontStyle: 'normal',
		textShadow: 'none',
		attachToCTAParent: false,
		contentSelectors: [
			'#usi_content',
			'#USIchatskinDiv'
		],
		ctaSelectors: [
			'.usi_submitbutton',
			'#usi_submitbutton',
			'.usi_submit',
			'.usi_submitbutton20',
			'#usi_submit',
			'.usi_submitbutton1',
			'.usi_submitbutton_1'
		]
	};
	
	usi_dom.log_privacy_disclaimer = function(options, message) {
		if (options != null) {
			if (options.debugMode) {
				console.log(message);
			}
		}
	};
	
	usi_dom.add_privacy_disclaimer = function() {
		usi_dom.place_privacy_disclaimer();
	};
	
	usi_dom.place_privacy_disclaimer = function(options) {
		options = (options == null ? {} : options);
		
		// set default options for the ones that weren't overriden
		for (var key in usi_dom.privacy_disclaimer_options) {
			if (usi_dom.privacy_disclaimer_options.hasOwnProperty(key) && options[key] == null) {
				options[key] = usi_dom.privacy_disclaimer_options[key];
			}
		}
		
		setTimeout(function() {
			if (options.isEnabled) {
				var disclaimerText = (options.disclaimerText[options.language] || null);
				
				if (disclaimerText != null) {
					var privacyDisclaimerElement = usi_dom.get_first_element(options.privacyElementSelector);
					
					// only add it if we don't have one yet
					if (privacyDisclaimerElement == null) {
						usi_dom.log_privacy_disclaimer(options, options);
						
						var ctaElement = usi_dom.get_first_element(options.ctaSelectors);
						var contentElement = null;
						
						if (options.attachToCTAParent && ctaElement != null) {
							contentElement = ctaElement.parentNode;
						}
						else {
							contentElement = usi_dom.get_first_element(options.contentSelectors);
						}
						
						if (contentElement != null) {
							var contentSizeData = usi_dom.get_element_actual_size(contentElement);
							
							if (options.minWidth > options.maxWidth) {
								options.maxWidth = options.minWidth;
							}
							
							if (options.minFontSize > options.maxFontSize) {
								options.maxFontSize = options.minFontSize;
							}
							
							var privacySizeData = {};
							var isValid = true;
							
							if (options.forcePosition) {
								if (options.forcePositionUnits === 'percent') {
									privacySizeData.top = Math.round((options.forceTop / 100) * contentSizeData.height);
									privacySizeData.height = Math.round((options.forceHeight / 100) * contentSizeData.height);
									privacySizeData.left = Math.round((options.forceLeft / 100) * contentSizeData.width);
									privacySizeData.width = Math.round((options.forceWidth / 100) * contentSizeData.width);
								}
								else {
									privacySizeData.top = options.forceTop;
									privacySizeData.height = options.forceHeight;
									privacySizeData.left = options.forceLeft;
									privacySizeData.width = options.forceWidth;
								}
							}
							else {
								if (ctaElement != null) {
									var ctaSizeData = usi_dom.get_element_actual_size(ctaElement);
									
									var relativeSizeData = {};
									
									relativeSizeData.top = parseInt(ctaSizeData.top - contentSizeData.top);
									relativeSizeData.left = parseInt(ctaSizeData.left - contentSizeData.left);
									relativeSizeData.bottom = (relativeSizeData.top + ctaSizeData.height);
									relativeSizeData.width = parseInt(ctaSizeData.width);
									relativeSizeData.pixelsInOnePercent = Math.ceil(contentSizeData.height / parseFloat(100));
									
									//privacySizeData.top = (relativeSizeData.bottom + relativeSizeData.pixelsInOnePercent);
									privacySizeData.top = (relativeSizeData.bottom + options.topMargin);
									privacySizeData.height = (contentSizeData.height - privacySizeData.top - 1);
									privacySizeData.left = relativeSizeData.left;
									privacySizeData.width = relativeSizeData.width;
									
									// are we just using the CTA's width?
									if (options.useCTAWidth) {
										options.minWidth = relativeSizeData.width;
										options.maxWidth = relativeSizeData.width;
									}
									// check that we have enough room to support the minWidth
									else {
										if (privacySizeData.width < options.minWidth) {
											if (contentSizeData.width >= options.minWidth) {
												privacySizeData.left -= Math.ceil((options.minWidth - privacySizeData.width) / 2);
												
												privacySizeData.width = options.minWidth;
											}
										}
										else if (privacySizeData.width > options.maxWidth) {
											privacySizeData.left += Math.ceil((privacySizeData.width - options.maxWidth) / 2);
											
											privacySizeData.width = options.maxWidth;
										}
									}
									
									usi_dom.log_privacy_disclaimer(options, contentSizeData);
									
									// check that we have room to place the disclaimer element
									if (privacySizeData.width >= options.minWidth) {
										var heightSpace = (contentSizeData.height - privacySizeData.top - 1);
										
										if (heightSpace >= options.minHeight) {
											if (privacySizeData.height > options.maxHeight) {
												privacySizeData.height = options.maxHeight;
											}
										}
										else {
											usi_dom.log_privacy_disclaimer(options, 'Not enough height space: ' + heightSpace + ' (mininum: ' + options.minHeight + ')');
											
											isValid = false;
										}
									}
									else {
										usi_dom.log_privacy_disclaimer(options, 'Width too small: ' + privacySizeData.width + ' (mininum: ' + options.minWidth + ')');
										
										isValid = false;
									}
								}
								else {
									usi_dom.log_privacy_disclaimer(options, 'No CTA element found: ' + options.ctaSelectors);
									
									isValid = false;
								}
							}
							
							// we're still valid
							if (isValid) {
								privacySizeData.percentTop = ((privacySizeData.top / contentSizeData.height) * 100);
								privacySizeData.percentHeight = ((privacySizeData.height / contentSizeData.height) * 100);
								privacySizeData.percentLeft = ((privacySizeData.left / contentSizeData.width) * 100);
								privacySizeData.percentWidth = ((privacySizeData.width / contentSizeData.width) * 100);
								
								usi_dom.log_privacy_disclaimer(options, privacySizeData);
								
								privacyDisclaimerElement = document.createElement('div');
								privacyDisclaimerElement.id = 'usi_privacy_disclaimer';
								
								usi_dom.set_css_property(privacyDisclaimerElement, 'top', privacySizeData.percentTop + '%', true);
								usi_dom.set_css_property(privacyDisclaimerElement, 'height', privacySizeData.percentHeight + '%', true);
								usi_dom.set_css_property(privacyDisclaimerElement, 'left', privacySizeData.percentLeft + '%', true);
								usi_dom.set_css_property(privacyDisclaimerElement, 'width', privacySizeData.percentWidth + '%', true);
								usi_dom.set_css_property(privacyDisclaimerElement, 'z-index', 10000, true);
								usi_dom.set_css_property(privacyDisclaimerElement, 'visibility', 'hidden', true);
								
								// place the disclaimer CSS
								var textAlign = 'initial';
								
								if (options.centerHorizontally) {
									textAlign = 'center';
								}
								
								var privacyDisclaimerCSS = "#usi_privacy_disclaimer { position: absolute; padding: 0px; text-align: " + textAlign + "; border: " + options.border + " !important; outline: " + options.outline + " !important; background-color: " + options.backgroundColor + " !important; font-family: " + options.fontFamily + " !important; font-weight: " + options.fontWeight + " !important; font-style: " + options.fontStyle + " !important; color: " + options.fontColor + " !important; text-shadow: " + options.textShadow + " !important; } ";
								privacyDisclaimerCSS += "#usi_privacy_disclaimer a { font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; color: inherit !important; text-shadow: inherit !important; text-decoration: underline !important; border: inherit !important; outline: inherit !important; } ";
								
								usi_dom.place_css(privacyDisclaimerCSS);
								
								contentElement.appendChild(privacyDisclaimerElement);
								
								if (options.fitTextVersion === 1) {
									// first try to fit all on 1 line
									var fontSizeOptions = {
										maxFontSize: (0 + options.maxFontSize),
										allowWrap: false
									};
									
									var fontSizeResult = usi_dom.fit_text_in_element(privacyDisclaimerElement, disclaimerText, fontSizeOptions, options.centerVertically, options.centerHorizontally);
									
									// if the font size is too small
									if (fontSizeResult.fontSize < options.minFontSize) {
										usi_dom.set_css_property(privacyDisclaimerElement, 'visibility', 'hidden', true);
										
										usi_dom.log_privacy_disclaimer(options, 'fontSizeResult.fontSize too small: ' + fontSizeResult.fontSize + ' (minimum: ' + options.minFontSize + ')');
										
										// are we allowed to try multiple lines?
										if (options.wrapIfNecessary) {
											fontSizeOptions = {
												lineHeightMultiplier: options.lineHeightMultiplier,
												minFontSize: (0 + options.minFontSize),
												maxFontSize: (0 + options.maxFontSize),
												allowWrap: true
											};
											
											fontSizeResult = usi_dom.fit_text_in_element(privacyDisclaimerElement, disclaimerText, fontSizeOptions, options.centerVertically, options.centerHorizontally);
										}
										else {
											usi_dom.log_privacy_disclaimer(options, 'Not going to try to wrap');
										}
									}
									// if the font size is too big
									else if (fontSizeResult.fontSize > options.maxFontSize) {
										usi_dom.set_css_property(privacyDisclaimerElement, 'visibility', 'hidden', true);
										
										usi_dom.log_privacy_disclaimer(options, 'fontSizeResult.fontSize too big: ' + fontSizeResult.fontSize + ' (maximum: ' + options.maxFontSize + ')');
									}
									
									// only show the element if the font size is within our specified range
									if (fontSizeResult.fontSize >= options.minFontSize && fontSizeResult.fontSize <= options.maxFontSize) {
										usi_dom.log_privacy_disclaimer(options, 'final fontSizeResult: ' + JSON.stringify(fontSizeResult));
									}
								}
								else if (options.fitTextVersion === 2) {
									// handle conflicting settings ... wrapIfNecessary wins
									if (options.wrapIfNecessary === false) {
										options.minLines = 1;
										options.maxLines = 1;
									}
									
									// first try to fit all on 1 line
									var fontSizeOptions = {
										lineHeightMultiplier: options.lineHeightMultiplier,
										minFontSize: (0 + options.minFontSize),
										maxFontSize: (0 + options.maxFontSize),
										allowWrap: true,
										minLines: (0 + options.minLines),
										maxLines: (0 + options.maxLines)
									};
									
									var fontSizeResult = usi_dom.fit_text_in_element2(privacyDisclaimerElement, disclaimerText, fontSizeOptions, options.centerVertically, options.centerHorizontally);
									
									// if the font size is too small
									if (fontSizeResult.fontSize < options.minFontSize) {
										usi_dom.log_privacy_disclaimer(options, 'fontSizeResult.fontSize too small: ' + fontSizeResult.fontSize + ' (minimum: ' + options.minFontSize + ')');
									}
									// if the font size is too big
									else if (fontSizeResult.fontSize > options.maxFontSize) {
										usi_dom.log_privacy_disclaimer(options, 'fontSizeResult.fontSize too big: ' + fontSizeResult.fontSize + ' (maximum: ' + options.maxFontSize + ')');
									}
									// only show the element if the font size is within our specified range
									else if (fontSizeResult.fontSize >= options.minFontSize && fontSizeResult.fontSize <= options.maxFontSize) {
										usi_dom.log_privacy_disclaimer(options, 'final fontSizeResult: ' + JSON.stringify(fontSizeResult));
									}
								}
							}
						}
						else {
							usi_dom.log_privacy_disclaimer(options, 'No content element found: ' + options.contentSelectors);
						}
					}
					else {
						usi_dom.log_privacy_disclaimer(options, 'privacyDisclaimerElement already exists: ' + options.privacyElementSelector);
					}
				}
				else {
					usi_dom.log_privacy_disclaimer(options, 'No disclaimerText for language: ' + options.language);
				}
			}
			else {
				usi_dom.log_privacy_disclaimer(options, 'Not enabled');
			}
		}, options.displayDelayMS);
	};
	
	usi_dom.hide_privacy_disclaimer = function(options) {
		options = (options == null ? {} : options);
		
		// set default options for the ones that weren't overriden
		for (var key in usi_dom.privacy_disclaimer_options) {
			if (usi_dom.privacy_disclaimer_options.hasOwnProperty(key) && options[key] == null) {
				options[key] = usi_dom.privacy_disclaimer_options[key];
			}
		}
		
		var privacyDisclaimerElement = usi_dom.get_first_element(options.privacyElementSelector);
		
		// only add it if we don't have one yet
		if (privacyDisclaimerElement != null) {
			privacyDisclaimerElement.parentNode.removeChild(privacyDisclaimerElement);
		}
	};
	
	// Run the "func" only after "runAfterMS" has elapsed without any more calls to "func"
	// Handy for "resize" event handlers so the function won't fire until the page has "settled"
	usi_dom.debounce = function(func, runAfterMS) {
		// default to 250ms
		runAfterMS = (runAfterMS == null ? 250 : runAfterMS);
		
		// if a previous call to this function is waiting to fire, then cancel the previous timeout
		if (usi_dom.debounceID != null) {
			clearTimeout(usi_dom.debounceID);
			
			usi_dom.debounceID = null;
		}
		
		// schedule the function to run
		usi_dom.debounceID = setTimeout(func, runAfterMS);
	};
	
	// make a full copy of an object
	// pass in either an object, or an array of objects
	usi_dom.deep_copy = function(obj) {
		// exit if we didn't pass an object type in
		if (obj == null || typeof obj !== 'object') {
			return obj;
		}
		
		// exit if we passed in a RegExp
		if (obj instanceof RegExp) {
			return obj;
		}
		
		// this will also copy an array of objects
		var result = Array.isArray(obj) ? [] : {};
		
		Object.keys(obj).forEach(function(key) {
			if (obj[key] != null && typeof obj[key] === 'object') {
				result[key] = usi_dom.deep_copy(obj[key]);
			}
			else {
				result[key] = obj[key];
			}
		});
		
		return result;
	};
}

if (window.usi_app === undefined) {
	usi_app = {};

	usi_app.main = function () {
		usi_app.url = location.href.toLowerCase();
		usi_app.gb_cart = usi_app.url.indexOf('locale=en_gb') > -1;
		usi_app.ie_cart = usi_app.url.indexOf('locale=en_ie') > -1;
		usi_app.store_page = usi_app.url.indexOf('displaythreepgcheckoutaddresspaymentinfopage') > -1 ||
				usi_app.url == "https://store.eu.vive.com/drhm/store";
		usi_app.receipt_page = usi_app.url.indexOf("thankyoupage") > -1;
		usi_app.cart = usi_app.url.indexOf('threepgcheckoutshoppingcartpage') > -1;
		usi_app.visited_ie = !!usi_cookies.get('usi_ie');
		usi_app.visited_gb = !!usi_cookies.get('usi_gb');
		usi_app.can_launch = !!usi_cookies.get('usi_can_launch');

		if (usi_app.cart && usi_app.url.indexOf('en_gb') > -1) {
			usi_cookies.set('usi_gb', 'true', usi_cookies.expire_time.day);
		} else if (usi_app.cart && usi_app.url.indexOf('en_ie') > -1) {
			usi_cookies.set('usi_ie', 'true', usi_cookies.expire_time.day);
		}

		if (usi_app.cart) {
			usi_app.check_products();
			usi_app.set_cart_data(usi_app.get_cart_data());
		}

		usi_app.load();
	};

	usi_app.check_products = function() {
		if (usi_app.gb_cart && usi_app.has_vive_product()) {
			usi_cookies.set('usi_can_launch', 'true', usi_cookies.expire_time.day);
		} else if (usi_app.ie_cart && usi_app.has_vive_or_accessory()) {
			usi_cookies.set('usi_can_launch', 'true', usi_cookies.expire_time.day);
		}
	};

	usi_app.get_cart_data = function() {
		var cartData = usi_app.get_new_cart();
		var cartItems = usi_dom.get_elements('.dr_oddRow, .dr_evenRow');
		var subtotal = usi_dom.get_first_element('.cart-total .cart-price-col').innerText.trim();

		cartItems.forEach(function(item) {
			var prod = {
				image: usi_dom.get_first_element('img', item).src,
				name: usi_dom.get_first_element('h4', item).innerText,
				price: usi_dom.get_first_element('.dr_price', item).innerText
			};
			if (prod.price.indexOf("\n")!= -1) {
				prod.price = prod.price.substring(prod.price.indexOf("\n"));
			}
			cartData.products.push(prod);
		});

		cartData.subtotal = subtotal;

		return cartData;
	};

	usi_app.get_new_cart = function() {
		usi_commons.log('Retrieving new cart');

		return {
			subtotal: 0,
			products: []
		};
	};

	usi_app.set_cart_data = function(data) {
		usi_commons.log('Saving cart data...');
		usi_commons.log(data);
		usi_cookies.set('usi_cart', JSON.stringify(data), usi_cookies.expire_time.week);
	};

	// Have to store a cookie to differentiate
	// between different locales on store page
	usi_app.load = function() {
		if (usi_app.store_page && usi_app.visited_gb && usi_app.can_launch) {
			usi_commons.load_precapture('uYI9DC994dUIpwIEWiJDQWs', '19502');
		} else if (usi_app.store_page && usi_app.visited_ie && usi_app.can_launch) {
			usi_commons.load_precapture('i9DtlYINKWMHJ32OI4spDpw', '19500');
		}
	};

	// Only returns true if it is the only product
	usi_app.has_vive_product = function() {
		var hasViveProduct = false;
		var productImgs = usi_dom.get_elements('.cart-product-thumb');

		productImgs.forEach(function(image) {
			if (image.src.indexOf('-Vive-') > -1 && productImgs.length === 1) {
				usi_commons.log('Vive found');
				hasViveProduct = true;
			}
		});

		return hasViveProduct;
	};

	usi_app.has_vive_or_accessory = function() {
		var hasViveAccessory = false;
		var productImgs = usi_dom.get_elements('.cart-product-thumb');

		productImgs.forEach(function(image) {
			if (image.src.indexOf('ViveAccessory') > -1 || image.src.indexOf('-Vive-') > -1) {
				usi_commons.log('Vive accessory or Vive found');
				hasViveAccessory = true;
			}
		});

		return hasViveAccessory;
	};

	usi_app.main();
}