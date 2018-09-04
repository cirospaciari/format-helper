require("./Culture.js");

(function (global) {

	function Time() {
		//private
		var milliseconds = 0;
		var HOUR = 3600000;
		var MINUTE = 60000;
		var SECOND = 1000;
		this.addHours = function (hours) {
			milliseconds += hours * HOUR;
			return this;
		};
		this.addMinutes = function (minutes) {
			milliseconds += minutes * MINUTE;
			return this;
		};
		this.addSeconds = function (seconds) {
			milliseconds += seconds * SECOND;
			return this;
		};
		this.addMilliseconds = function (ms) {
			milliseconds += ms;
			return this;
		};

		this.addTime = function (time) {
			if (time instanceof Time)
				milliseconds += time.getTotalMilliseconds();
			else
				milliseconds += time;
			return this;
		};
		this.subTime = function (time) {
			if (time instanceof Time)
				milliseconds -= time.getTotalMilliseconds();
			else
				milliseconds -= time;
			return this;
		};
		this.subHours = function (hours) {
			this.addHours(-hours);
			return this;
		};
		this.subMinutes = function (minutes) {
			this.addMinutes(-minutes);
			return this;
		};
		this.subSeconds = function (hours) {
			this.addSeconds(-hours);
			return this;
		};
		this.subMilliseconds = function (ms) {
			this.addMilliseconds(-ms);
			return this;
		};
		this.setHours = function (hours, minutes, seconds, ms) {
			milliseconds = milliseconds - (this.getHours() * HOUR) + (hours * HOUR);
			if (arguments.length > 1) {
				this.setMinutes(minutes);
				if (arguments.length > 2) {
					this.setSeconds(seconds);
					if (arguments.length > 3) {
						this.setMilliseconds(ms);
					}
				}
			}
			return this;
		};
		this.setMinutes = function (minutes, seconds, ms) {
			milliseconds = milliseconds - (this.getMinutes() * MINUTE) + (minutes *
				MINUTE);
			if (arguments.length > 1) {
				this.setSeconds(seconds);
				if (arguments.length > 2) {
					this.setMilliseconds(ms);
				}
			}
			return this;
		};
		this.setSeconds = function (seconds, ms) {
			milliseconds = milliseconds - (this.getSeconds() * MINUTE) + (seconds *
				SECOND);
			if (arguments.length > 1) {
				this.setMilliseconds(ms);
			}
			return this;
		};
		this.setMilliseconds = function (ms) {
			milliseconds = milliseconds - this.getMilliseconds() + ms;
			return this;
		};

		this.getTotalHours = function () {
			return milliseconds / HOUR;
		};
		this.getTotalMinutes = function () {
			return milliseconds / MINUTE;
		};

		this.getTotalSeconds = function () {
			return milliseconds / SECOND;
		};
		this.getTotalMilliseconds = function () {
			return milliseconds;
		};
		this.getHours = function () {
			return parseInt(milliseconds / HOUR);
		};
		this.getMinutes = function () {
			return parseInt((Math.abs(milliseconds) - Math.abs(this.getHours() * HOUR)) /
				MINUTE);
		};
		this.getSeconds = function () {
			return parseInt((Math.abs(milliseconds) - Math.abs(this.getHours() * HOUR) -
				(this.getMinutes() * MINUTE)) / SECOND);
		};
		this.getMilliseconds = function () {
			return parseInt((Math.abs(milliseconds) - Math.abs(this.getHours() * HOUR) -
				(this.getMinutes() * MINUTE) - (this.getSeconds() * SECOND)));
		};
		this.getTime = function () {
			return this.getTotalMilliseconds();
		};
		this.setTime = function (ms) {
			milliseconds = ms;
			return this;
		};
		this.compare = function (timeB) {
			return this.getTotalMilliseconds() - timeB.getTotalMilliseconds();
		};
		this.date = function () {
			return new Date(milliseconds);
		}
		this.format = function (format, culture) {
				return Time.format(this, format, culture);
			}
			//constructor
		if (arguments.length == 1) {
			if (Number.isSafeInteger(arguments[0]))
				milliseconds = arguments[0];
			else if (typeof arguments[0] == "string") {
				var temp = parseTime(arguments[0]);
				if (temp)
					milliseconds = temp.getMilliseconds();
				else
					throw new Error("Invalid time format");
			} else {
				throw new Error("Invalid time format");
			}
		} else {
			this.addHours(arguments[0] || 0);
			this.addMinutes(arguments[1] || 0);
			this.addSeconds(arguments[2] || 0);
			this.addMilliseconds(arguments[3] || 0);
		}
	}
	Time.toDate = function (time) {
		return time.date();
	};
	Time.now = function () {
		return new Date().time();
	};
	Time.fromDate = function (date) {
		if (!date || !(date instanceof Date))
			return;
		return new Time(date.getHours(), date.getMinutes(), date.getSeconds(), date
			.getMilliseconds());
	};
	Time.fromDateDiff = function (dateA, dateB) {
		return new Time((dateA ? dateA.getTime() : 0) - (dateB ? dateB.getTime() :
			0));
	};
	Time.compare = function (timeA, timeB) {
		return timeA.compare(timeB);
	};
	Time.prototype.toString = function (format, culture) {
		format = format || "hh:mm:ss.fff";
		return Time.format(this, format, culture)
	};
	Time.format = function (time, format, culture) {

		if (!(time instanceof Time))
			return null;

		culture = culture || Culture.current();
		if (typeof culture == "string") {
			culture = Culture.get(culture);
		}
		format = (format || culture.timeFormat).toLowerCase();

		if (format == "iso" || format == "ISO")
			format = "hh:mm:ss.fff";
		else if (format == "time") {
			format = culture.timeFormat.toLowerCase();
		} else if (format == "stime") {
			format = culture.shortTimeFormat.toLowerCase();
		}

		format = replaceIfNotInBraces(format, "hhh", function () {
			return time.getTotalHours();
		});
		format = replaceIfNotInBraces(format, "hh", function () {
			return padLeft(2, time.getHours());
		});
		format = replaceIfNotInBraces(format, "h", function () {
			return time.getHours();
		});
		format = replaceIfNotInBraces(format, "mmm", function () {
			return time.getTotalMinutes();
		});
		format = replaceIfNotInBraces(format, "mm", function () {
			return padLeft(2, time.getMinutes());
		});
		format = replaceIfNotInBraces(format, "m", function () {
			return time.getMinutes();
		});
		format = replaceIfNotInBraces(format, "sss", function () {
			return time.getTotalSeconds();
		});
		format = replaceIfNotInBraces(format, "ss", function () {
			return padLeft(2, time.getSeconds());
		});
		format = replaceIfNotInBraces(format, "s", function () {
			return time.getSeconds();
		});
		format = replaceIfNotInBraces(format, "ffff", function () {
			return time.getTotalMilliseconds();
		});
		format = replaceIfNotInBraces(format, "fff", function () {
			return getFirst(3, padLeft(3, time.getMilliseconds()));
		});
		format = replaceIfNotInBraces(format, "ff", function () {
			return getFirst(2, padLeft(2, time.getMilliseconds()));
		});
		format = replaceIfNotInBraces(format, "f", function () {
			return time.getMilliseconds();
		});

		if (time.getTime() < 0) {
			if (format.indexOf("-") != 0)
				return "-" + format;
		}
		return format;

	};
	global.Time = Time;

	function parseTime(timeTxt, format, culture) {
		culture = culture || Culture.current();
		if (typeof culture == "string") {
			culture = Culture.get(culture);
		}
		format = (format || culture.timeFormat).toLowerCase();

		if (format == "iso" || format == "ISO")
			format = "hh:mm:ss.fff";
		else if (format == "time") {
			format = culture.timeFormat.toLowerCase();
		} else if (format == "stime") {
			format = culture.shortTimeFormat.toLowerCase();
		}

		var h = 0;
		var s = 0;
		var m = 0;
		var ms = 0;

		var match = null;

		var formatWithoutHH = format;

		var values = timeTxt.match(/(^[-|+]{0,1}[0-9]+|[0-9]+)/gm);
		if (!values)
			return null;
		var keys = format.match(/(mm|hh|ss|[f]{1,3})+/gm);
		if (!keys)
			return null;
		if (values.length != keys.length) {
			return null;
		}
		for (var i = 0; i < values.length; i++) {
			var value = values[i];
			var key = keys[i];
			switch (key) {
			case "h":
			case "hh":
				h = parseInt(value);
				break;
			case "m":
			case "mm":
				m = parseInt(value);
				break;
			case "s":
			case "ss":
				s = parseInt(value);
				break;
			case "fff":
				ms = parseInt(value);
				break;
			case "ff":
				ms = parseInt(value) * 10;
				break;
			case "f":
				ms = parseInt(value);
				if (ms < 10)
					ms *= 100;
				else if (ms >= 10 && ms < 100)
					ms *= 10;
				break;
			default:
				return null;
			}
		}

		if (h < 0 && m > 0) {
			m = m * -1;
		}
		if (m < 0 && s > 0) {
			s = s * -1;
		}
		if (s < 0 && ms > 0) {
			ms = ms * -1;
		}
		var time = new Time(h, m, s, ms);
		//if (Time.format(time, format, culture) == timeTxt)
		return time;
		//return null;
	};
	global.parseTime = parseTime;
	Time.parse = parseTime;

	function padLeft(n, value) {
		var negative = false;
		if (value < 0) {
			negative = true;
			value = Math.abs(value);
		}
		value = (value + "");
		while (value.length < n) {
			value = "0" + value;
		}
		if (negative)
			return "-" + value;
		return value;
	}

	function getFirst(n, value) {
		value = (value + "");
		return value.substring(0, n);
	}

	function replaceIfNotInBraces(text, separator, replacamentCallBack) {

		var newText = "";
		do {
			var regex = (/`[^`]+`/gm);
			var match = regex.exec(text);
			var preserve = (match) ? text.substring(match.index, regex.lastIndex) : "";
			var init = (match) ? text.substring(0, match.index) : text;

			var parts = init.split(separator);
			if (parts.length > 1) {
				init = parts.join(replacamentCallBack());
			} else {
				init = parts[0];
			}

			newText += init + preserve;

			if (!match)
				break;
			text = text.substring(regex.lastIndex);
			if (!text)
				break;
		} while (true);

		return newText;
	}
})(typeof global != "undefined" ? global : window);
