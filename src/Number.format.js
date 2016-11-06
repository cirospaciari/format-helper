require("./Culture.js");
(function (global) {

	Number.parse = function (numberTxt, format, culture) {
		culture = culture || Culture.current();
		if (typeof culture == "string") {
			culture = Culture.get(culture);
		}
		format = format || culture.shortNumberFormat;
		var upperCaseFormat = (format || "").toUpperCase();

		if (upperCaseFormat.indexOf("N") == 0) {
			var decimalPlaces = parseInt(format.substring(1));
			if (isNaN(decimalPlaces)) {
				return Number.parse(numberTxt, culture.numberFormat, culture);
			}

			var separators = culture.numberFormat.match(/[^0]/g);

			var decimalSeparator = ".";
			if (separators) {
				decimalSeparator = separators[separators.length - 1];
				format = culture.numberFormat.split(decimalSeparator)[0];
			} else
				format = "0";

			if (decimalPlaces > 0) {
				format += decimalSeparator + padLeft(decimalPlaces, "");
			}
			return Number.parse(numberTxt, format, culture);
		}
		if (upperCaseFormat.indexOf("C") == 0) {
			var decimalPlaces = parseInt(format.substring(1));
			if (isNaN(decimalPlaces)) {
				decimalPlaces = "";
			}

			var symbolLength = culture.currencySymbol.length + (culture.currencySymbolWithSpace ?
				1 : 0);
			var symbol = "";
			if (culture.currencySymbolPosition == "after") {
				symbol = numberTxt.substring(numberTxt.length - culture.currencySymbol.length);
				numberTxt = numberTxt.substring(0, numberTxt.length - symbolLength);
			} else {
				symbol = numberTxt.substring(0, culture.currencySymbol.length);
				numberTxt = numberTxt.substring(symbolLength);
			}

			if (symbol != culture.currencySymbol)
				return NaN;
			return Number.parse(numberTxt, "N" + decimalPlaces, culture);
		}
		if (upperCaseFormat.indexOf("F") == 0) {
			var decimalPlaces = parseInt(format.substring(1));
			if (isNaN(decimalPlaces)) {
				return Number.parse(numberTxt, culture.shortNumberFormat, culture);
			}
			var separators = culture.shortNumberFormat.match(/[^0]/g);

			var decimalSeparator = ".";
			if (separators) {
				decimalSeparator = separators[separators.length - 1];
				format = culture.shortNumberFormat.split(decimalSeparator)[0];
			} else
				format = "0";

			if (decimalPlaces > 0) {
				format += decimalSeparator + padLeft(decimalPlaces, "");
			}
			return Number.parse(numberTxt, format, culture);
		}
		if (upperCaseFormat.indexOf("E") == 0) {
			return parseFloat(numberTxt);
		}
		if (upperCaseFormat.indexOf("D") == 0) {
			return parseInt(numberTxt);
		}
		if (upperCaseFormat.indexOf("X") == 0) {
			return parseFloat(numberTxt, 16);
		}
		if (upperCaseFormat.indexOf("P") == 0) {
			var decimalPlaces = parseInt(format.substring(1));
			if (isNaN(decimalPlaces)) {
				decimalPlaces = 2;
			}
			var symbolLength = (culture.percentageSymbolWithSpace ? " %" : "%").length;
			var symbol = numberTxt.substring(numberTxt.length - symbolLength);
			numberTxt = numberTxt.substring(0, numberTxt.length - symbolLength);

			if (symbol != (culture.percentageSymbolWithSpace ? " %" : "%"))
				return NaN;
			return Number.parse(numberTxt, "F" + decimalPlaces, culture) / 100;
		}
		var separators = format.match(/[^0]/g);
		var numberSeparators = numberTxt.match(/[^0-9]/gm);

		var separatorsCount = separators ? separators.length : 0;
		var numberSeparatorsCount = numberSeparators ? numberSeparators.length : 0;

		if (separatorsCount > 2)
			throw new Error("Invalid number format");

		if (numberSeparators && numberSeparatorsCount > 0) {
			var uniques = {};
			for (var i = 0; i < numberSeparatorsCount; i++)
				uniques[numberSeparators[i]] = true;
			numberSeparators = Object.keys(uniques);
			numberSeparatorsCount = numberSeparators.length;
		}
		if (separatorsCount < numberSeparatorsCount)
			return NaN;

		for (var i = 0; i < numberSeparatorsCount; i++) {
			if (separators.indexOf(numberSeparators[i]) == -1)
				return NaN;
		}

		if (numberSeparatorsCount == 0) {
			return parseFloat(numberTxt);
		} else if (numberSeparatorsCount == 1) {
			return parseFloat(numberTxt.split(numberSeparators[0]).join("."));
		} else if (numberSeparatorsCount == 2) {
			return parseFloat(numberTxt.split(numberSeparators[0]).join("")
				.split(numberSeparators[1]).join("."));
		}
	}
	Number.format = function (n, format, culture) {
		culture = culture || Culture.current();
		if (typeof culture == "string") {
			culture = Culture.get(culture);
		}
		format = format || culture.shortNumberFormat;
		var upperCaseFormat = (format || "").toUpperCase();
		if (upperCaseFormat.indexOf("N") == 0) {
			var decimalPlaces = parseInt(format.substring(1));
			if (isNaN(decimalPlaces)) {
				return Number.format(n, culture.numberFormat, culture);
			}

			var separators = culture.numberFormat.match(/[^0]/g);

			var decimalSeparator = ".";
			if (separators) {
				decimalSeparator = separators[separators.length - 1];
				format = culture.numberFormat.split(decimalSeparator)[0];
			} else
				format = "0";

			if (decimalPlaces > 0) {
				format += decimalSeparator + padLeft(decimalPlaces, "");
			}
			return Number.format(n, format, culture);

		}
		if (upperCaseFormat.indexOf("C") == 0) {
			var decimalPlaces = parseInt(format.substring(1));
			if (isNaN(decimalPlaces)) {
				decimalPlaces = "";
			}

			var money = Number.format(n, "N" + decimalPlaces, culture);

			if (culture.currencySymbolPosition == "after")
				return money + (culture.currencySymbolWithSpace ? " " : "") + culture.currencySymbol;
			return culture.currencySymbol + (culture.currencySymbolWithSpace ? " " :
				"") + money;
		}
		if (upperCaseFormat.indexOf("F") == 0) {
			var decimalPlaces = parseInt(format.substring(1));
			if (isNaN(decimalPlaces)) {
				return Number.format(n, culture.shortNumberFormat, culture);
			}
			var separators = culture.shortNumberFormat.match(/[^0]/g);

			var decimalSeparator = ".";
			if (separators) {
				decimalSeparator = separators[separators.length - 1];
				format = culture.shortNumberFormat.split(decimalSeparator)[0];
			} else
				format = "0";

			if (decimalPlaces > 0) {
				format += decimalSeparator + padLeft(decimalPlaces, "");
			}
			return Number.format(n, format, culture);
		}
		if (upperCaseFormat.indexOf("E") == 0) {
			var decimalPlaces = parseInt(format.substring(1));
			if (isNaN(decimalPlaces)) {
				if (format[0] == "e")
					return n.toExponential();
				return n.toExponential().toUpperCase();
			}
			if (format[0] == "e")
				return n.toExponential(decimalPlaces);
			return n.toExponential(decimalPlaces).toUpperCase();
		}
		if (upperCaseFormat.indexOf("D") == 0) {
			var padding = parseInt(format.substring(1));
			if (isNaN(padding)) {
				return parseInt(n);
			}
			return padLeft(padding, parseInt(n));
		}
		if (upperCaseFormat.indexOf("X") == 0) {
			var decimalPlaces = parseInt(format.substring(1));
			if (isNaN(decimalPlaces)) {
				if (format[0] == "x")
					return Math.abs(n).toString(16);
				return Math.abs(n).toString(16).toUpperCase();
			}
			if (format[0] == "x")
				return padLeft(decimalPlaces, Math.abs(n).toString(16));
			return padLeft(decimalPlaces, Math.abs(n).toString(16)).toUpperCase();
		}
		if (upperCaseFormat.indexOf("P") == 0) {
			var decimalPlaces = parseInt(format.substring(1));
			if (isNaN(decimalPlaces)) {
				decimalPlaces = 2;
			}
			return Number.format(n * 100, "F" + decimalPlaces, culture) + (culture.percentageSymbolWithSpace ?
				" %" : "%");
		}

		if (format.match(/[^0., ]/)) {
			throw new Error("Invalid number format");
		}
		var decimalSeparator = null;
		var thousandsSeparator = null;
		var separators = format.match(/[^0]/g);
		if (separators) {
			if (separators.length > 2)
				throw new Error("Invalid number format");

			if (separators.length == 1)
				decimalSeparator = separators[0];
			else {
				thousandsSeparator = separators[0];
				decimalSeparator = separators[1];
			}

		}

		var numberIntPart = parseInt(n);
		if (!separators || separators.length == 0) {
			return padLeft(format.length, numberIntPart);
		}
		//somente virgula
		if (decimalSeparator && !thousandsSeparator) {
			var parts = format.split(decimalSeparator);
			var end = (parts[1] || "");
			var init = (parts[0] || "");
			var decimalParts = n.toFixed(end.length).split(".")[1];
			return padLeft(init.length, numberIntPart) + (decimalParts ? (
				decimalSeparator + decimalParts) : "");
		}

		var decimalPartsSize = (format.split(decimalSeparator)[1] || "").length;
		var thousandsPartSize = (format.split(decimalSeparator)[0].split(
			thousandsSeparator)[1] || "").length;

		var formatComplex = function (n, c, d, t, tc) {
			c = isNaN(c = Math.abs(c)) ? 2 : c,
				d = d == undefined ? "." : d,
				t = t == undefined ? "," : t,
				s = n < 0 ? "-" : "",
				i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
				j = (j = i.length) > tc ? j % tc : 0;
			return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(new RegExp(
				"(\\d{" + tc + "})(?=\\d)", "g"), "$1" + t) + (c ? d + Math.abs(n - i).toFixed(
				c).slice(2) : "");
		};
		return formatComplex(n, decimalPartsSize, decimalSeparator,
			thousandsSeparator, thousandsPartSize);
	};

	Number.isInteger = Number.isInteger || function (value) {
		return typeof value === "number" &&
			isFinite(value) &&
			Math.floor(value) === value;
	};
	Number.isSafeInteger = Number.isSafeInteger || function (value) {
		return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
	};

	Object.defineProperty(Number.prototype, 'format', {
		enumerable: false,
		value: function format(format, culture) {
			return Number.format(this, format, culture);
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

	global.parseNumber = Number.parse;

})(typeof GLOBAL != "undefined" ? GLOBAL : window);
