require("./Culture.js");
require("./Time.format.js");

(function (global) {

	Date.format = function format(date, format, culture) {

		if (!(date instanceof Date))
			return null;

		if (format == "iso" || format == "ISO")
			return date.toISOString();
		culture = culture || Culture.current();
		if (typeof culture == "string") {
			culture = Culture.get(culture);
		}
		if (format == "date") {
			return Date.format(date, culture.dateFormat, culture);
		}
		if (format == "time") {
			return Date.format(date, culture.dateTimePartFormat, culture);
		}
		if (format == "sdate") {
			return Date.format(date, culture.shortDateFormat, culture);
		}
		if (format == "stime") {
			return Date.format(date, culture.shortDateTimePartFormat, culture);
		}

		format = format || culture.dateTimeFormat;

		format = replaceIfNotInBraces(format, "dddd", function () {
			return "`" + culture.days[date.getDay()] + "`";
		});
		format = replaceIfNotInBraces(format, "ddd", function () {
			return "`" + culture.shortDays[date.getDay()] + "`";
		});
		format = replaceIfNotInBraces(format, "dd", function () {
			return padLeft(2, date.getDate());
		});
		format = replaceIfNotInBraces(format, "d", function () {
			return date.getDate();
		});
		format = replaceIfNotInBraces(format, "MMMM", function () {
			return "`" + culture.months[date.getMonth()] + "`";
		});
		format = replaceIfNotInBraces(format, "MMM", function () {
			return "`" + culture.shortMonths[date.getMonth()] + "`";
		});
		format = replaceIfNotInBraces(format, "MM", function () {
			return padLeft(2, date.getMonth() + 1);
		});
		format = replaceIfNotInBraces(format, "M", function () {
			return date.getMonth() + 1;
		});
		format = replaceIfNotInBraces(format, "yyyy", function () {
			return padLeft(4, date.getFullYear());
		});
		format = replaceIfNotInBraces(format, "yy", function () {
			return getLast(2, date.getFullYear());
		});
		format = replaceIfNotInBraces(format, "HH", function () {
			return padLeft(2, date.getHours());
		});
		format = replaceIfNotInBraces(format, "H", function () {
			return date.getHours();
		});
		format = replaceIfNotInBraces(format, "hh", function () {
			return padLeft(2, date.getHours() > 12 ? date.getHours() - 12 : date.getHours());
		});
		format = replaceIfNotInBraces(format, "h", function () {
			return date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
		});
		format = replaceIfNotInBraces(format, "mm", function () {
			return padLeft(2, date.getMinutes());
		});
		format = replaceIfNotInBraces(format, "m", function () {
			return date.getMinutes();
		});
		format = replaceIfNotInBraces(format, "ss", function () {
			return padLeft(2, date.getSeconds());
		});
		format = replaceIfNotInBraces(format, "s", function () {
			return date.getSeconds();
		});
		format = replaceIfNotInBraces(format, "fff", function () {
			return padLeft(3, date.getMilliseconds());
		});
		format = replaceIfNotInBraces(format, "ff", function () {
			return getFirst(2, padLeft(2, date.getMilliseconds()));
		});
		format = replaceIfNotInBraces(format, "f", function () {
			return getFirst(1, date.getMilliseconds());
		});
		format = replaceIfNotInBraces(format, "tt", function () {
			return date.getHours() > 12 ? "PM" : "AM";
		});
		format = replaceIfNotInBraces(format, "zzzz", function () {
			var time = new Time();
			time.addMinutes(date.getTimezoneOffset() * -1);
			if (time.getTime() >= 0)
				return "+" + time.format("hhmm");
			return time.format("hhmm");
		});
		format = replaceIfNotInBraces(format, "zzz", function () {
			var time = new Time();
			time.addMinutes(date.getTimezoneOffset() * -1);
			if (time.getTime() >= 0)
				return "+" + time.format("hh:mm");
			return time.format("hh:mm");
		});
		format = replaceIfNotInBraces(format, "zz", function () {
			var time = new Time();
			time.addMinutes(date.getTimezoneOffset() * -1);
			if (time.getTime() >= 0)
				return "+" + time.format("hh");
			return time.format("hh");
		});
		format = replaceIfNotInBraces(format, "z", function () {
			var time = new Time();
			time.addMinutes(date.getTimezoneOffset() * -1);
			if (time.getTime() >= 0)
				return "+" + time.format("h");
			return time.format("h");
		});
		return format.split("`").join("");
	}

	function parseDate(dateTxt, format, culture) {
		culture = culture || Culture.current();
		if (typeof culture == "string") {
			culture = Culture.get(culture);
		}
		format = (format || culture.dateTimeFormat);

		if (format == "iso" || format == "ISO")
			return new Date(dateTxt);
		else if (format == "date") {
			format = culture.dateFormat;
		} else if (format == "time") {
			format = culture.timeFormat;
		} else if (format == "sdate") {
			format = culture.shortDateFormat;
		} else if (format == "stime") {
			format = culture.shortTimeFormat;
		}
		if (typeof dateTxt != "string" || typeof format != "string")
			return null;

		var d = 1;
		var h = 0;
		var m = 0;
		var M = 0;
		var s = 0;
		var y = 0;
		var f = 0;
		var tt = null;
		var timeZone = null;
		var keys = format
			.match(
				/`[^`]+`|([d]{1,4}|[M]{1,3}|yyyy|yy|[h]{1,2}|[H]{1,2}|[m]{1,2}|[s]{1,2}|[f]{1,3}|tt|zzzz|[z]{1,3})+/gm
			);
		var values = dateTxt.match(/`[^`]+`|[+|-][0-9]{2,4}([:][0-9]{2})?|\w+/gm);

		if (!values)
			return null;
		if (!keys)
			return null;
		if (values.length != keys.length) {
			return null;
		}

		for (var i = 0; i < values.length; i++) {
			var value = values[i];
			var key = keys[i];

			switch (key) {
			case "dddd": //week day (ignore)
			case "ddd": //week day (ignore)
				break;
			case "dd":
			case "d":
				d = Math.abs(parseInt(value));
				break;
			case "dd":
			case "d":
				d = Math.abs(parseInt(value));
				if (d == 0 && d > 31)
					return null;
				break;
			case "MMM":
				M = culture.shortMonths.indexOf(value);
				if (M < 0 || M > 11)
					return null;
				break;
			case "MM":
			case "M":
				M = Math.abs(parseInt(value)) - 1;
				if (M < 0 || M > 11)
					return null;
				break;
			case "yyyy":
				y = Math.abs(parseInt(value));
				break;
			case "yy":
				y = padLeft(2, Math.abs(parseInt(value)));
				var actualYear = (new Date().getFullYear() + "");
				y = parseInt(actualYear.substring(0, actualYear.length - 2) + y);
				break;
			case "HH":
			case "H":
				h = Math.abs(parseInt(value));
				if (h > 23)
					return null;
				if (h >= 12) {
					tt = "PM";
					h -= 12;
				} else {
					tt = "AM";
				}
				if (h == 0)
					h = 12;
				break;
			case "hh":
			case "h":
				h = Math.abs(parseInt(value));
				if (h > 12) {
					return null;
				}
				break;
			case "mm":
			case "m":
				m = Math.abs(parseInt(value));
				if (m > 60) {
					return null;
				}
				break;
			case "ss":
			case "s":
				s = parseInt(value);
				if (s > 60)
					return null;
				break;
			case "tt":
				tt = value;
				if (tt != "AM" && tt != "PM")
					return null;
				break;
			case "fff":
				f = Math.abs(parseInt(value));
				break;
			case "ff":
				f = Math.abs(parseInt(value)) * 10;
				break;
			case "f":
				f = Math.abs(parseInt(value)) * 100;
				break;
			case "zzzz":
				var time = null;

				if (value.indexOf("-") == 0)
					time = parseTime(value.substring(0, 3) + ":" + value.substring(3, 5),
						"HH:mm");
				else if (value.indexOf("+") == 0)
					time = parseTime(value.substring(1, 3) + ":" + value.substring(3, 5),
						"HH:mm");
				else
					time = parseTime(value.substring(0, 2) + ":" + value.substring(2, 4),
						"HH:mm");
				if (time == null)
					return null;

				timeZone = time.getTotalHours() * -1;
				break;
			case "zzz":
				var time = parseTime(value, "HH:mm");
				if (time == null)
					return null;

				timeZone = time.getTotalHours() * -1;
				break;
			case "zz":
			case "z":
				timeZone = parseInt(value) * -1;
				if (isNaN(timeZone))
					return null;
				break;
			default:
				if (key.indexOf('`') == -1)
					return null;
				break;
			}
		}
		if (tt == "PM" && h < 12) {
			h += 12;
		} else if (h == 12) {
			h = 0;
		}
		var date = null;
		if (timeZone != null) {
			date = new Date(Date.UTC(y, M, d, h, m, s, f) + (timeZone * 3600000));
		} else {
			date = new Date(y, M, d, h, m, s, f);
		}

		if (Date.format(date, format, culture) != dateTxt)
			return null;
		return date;
	}
	global.parseDate = parseDate;

	Date.isValid = function isValid(dateTxt, format, culture) {
		return parseDate(dateTxt, format, culture) != null;
	};
	Date.now = function () {
		return new Date();
	}
	Object.defineProperty(Date.prototype, 'format', {
		enumerable: false,
		value: function format(format, culture) {
			return Date.format(this, format, culture);
		}
	});
	Object.defineProperty(Date.prototype, 'date', {
		enumerable: false,
		value: function date() {
			var dateOnly = new Date(this.getTime());
			dateOnly.setHours(0, 0, 0, 0);
			return dateOnly;
		}
	});
	Object.defineProperty(Date.prototype, 'time', {
		enumerable: false,
		value: function date() {
			return Time.fromDate(this);
		}
	});
	Object.defineProperty(Date.prototype, 'compare', {
		enumerable: false,
		value: function compare(dateB) {
			return this.getTime() - dateB.getTime();
		}
	});

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

	function getLast(n, value) {
		value = (value + "");
		return value.substring(value.length - n);
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
})(typeof GLOBAL != "undefined" ? GLOBAL : window);
