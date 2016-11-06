require("./Culture.js");
require("./Number.format.js");
require("./Date.format.js");
require("./Time.format.js");

String.format = function (text, values, culture) {

	var formatCulture = culture;
	if (values instanceof Array) {
		values = values;
	} else {
		values = Array.prototype.slice.call(arguments, 1);
		formatCulture = Culture.current();
	}

	if (typeof formatCulture == "string") {
		formatCulture = Culture.get(formatCulture);
	}
	return text.replace(/({([0-9]+)(:([^}]+))?})/gm, function () {
		var format = arguments[4];
		var index = arguments[2];
		var value = values[index];
		if (typeof value == "number" && format) {
			return Number.format(value, format, formatCulture);
		}
		if (value instanceof Date) {
			return Date.format(value, format, formatCulture);
		}
		if (value instanceof Time) {
			return Time.format(value, format, formatCulture);
		}

		return value;
	});
}
Object.defineProperty(String.prototype, 'format', {
	enumerable: false,
	value: function format(format, culture) {
		Array.prototype.unshift.call(arguments, this);
		return String.format.apply(null, arguments);
	}
});
