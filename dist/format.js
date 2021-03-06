(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*! Format Helper - 2016*/
require("./src/Culture.js");
require('./src/CulturesPack.js');
require("./src/Number.format.js");
require("./src/Date.format.js");
require("./src/Time.format.js");
require("./src/String.format.js");

},{"./src/Culture.js":2,"./src/CulturesPack.js":3,"./src/Date.format.js":4,"./src/Number.format.js":5,"./src/String.format.js":6,"./src/Time.format.js":7}],2:[function(require,module,exports){
(function (global){
(function (global) {

	var Culture = {
		cultures: {},
		currentCulture: null,
		add: function (culture) {

			var countryCode = culture.name.toLowerCase();
			var languageCode = countryCode.split("-")[0];

			this.cultures[countryCode] = culture;
			//first country add is the language default
			if (!this.cultures[languageCode]) {
				this.cultures[languageCode] = culture;
			}
			//first culture add is the language default
			if (!this.currentCulture)
				this.currentCulture = culture.name;
		},
		set: function (cultureName) {
			this.currentCulture = cultureName.toLowerCase();
		},
		get: function (cultureName) {
			return this.cultures[cultureName.toLowerCase()];
		},
		current: function () {
			return Culture.get(this.currentCulture);
		}
	};

	global.Culture = Culture;
})(typeof global != "undefined" ? global : window);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
require("./Culture.js");

Culture.add({
	name: "pt-BR",
	displayName: "Português (Brasil)",
	//calendar month and week names
	shortMonths: "Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez".split(","),
	months: "Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro"
		.split(","),
	days: "Domingo,Segunda-Feira,Terça-Feira,Quarta-Feira,Quinta-Feira,Sexta-Feira,Sábado"
		.split(","),
	shortDays: "Dom,Seg,Ter,Quar,Qui,Sex,Sáb".split(","),
	//time format for Date Object
	dateTimePartFormat: "HH:mm:ss",
	shortDateTimePartFormat: "HH:mm",
	//time format for Time Object
	timeFormat: "HH:mm:ss",
	shortTimeFormat: "HH:mm",
	//dates formats
	shortDateFormat: "dd/MM",
	dateFormat: "dd/MM/yyyy",
	dateTimeFormat: "dd/MM/yyyy HH:mm:ss", //Date.format(new Date())-> 15/03/1992 15:45:19
	//currency and number formats
	currencySymbol: "R$",
	currencySymbolPosition: "before",
	currencySymbolWithSpace: true, //Number.format(1587.67, "C") -> R$ 1.587,67
	numberFormat: "0.000,00", //Number.format(1587.67, "N") -> 1.587,67
	shortNumberFormat: "0,00", //Number.format(1587.67, "F") -> 1587,67
	percentageSymbolWithSpace: false //Number.format(0.1567, "P") -> 15,67%
});
Culture.add({
	name: "pt-PT",
	displayName: "Português",
	//calendar month and week names
	shortMonths: "Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez".split(","),
	months: "Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro"
		.split(","),
	days: "Domingo,Segunda-Feira,Terça-Feira,Quarta-Feira,Quinta-Feira,Sexta-Feira,Sábado"
		.split(","),
	shortDays: "Dom,Seg,Ter,Quar,Qui,Sex,Sáb".split(","),
	//time format for Date Object
	dateTimePartFormat: "HH:mm:ss",
	shortDateTimePartFormat: "HH:mm",
	//time format for Time Object
	timeFormat: "HH:mm:ss",
	shortTimeFormat: "HH:mm",
	//dates formats
	shortDateFormat: "dd/MM",
	dateFormat: "dd/MM/yyyy",
	dateTimeFormat: "dd/MM/yyyy HH:mm:ss", //Date.format(new Date())-> 15/03/1992 15:45:19
	//currency and number formats
	currencySymbol: "\u20AC", //"€",
	currencySymbolPosition: "after",
	currencySymbolWithSpace: true, //Number.format(1587.67, "C") -> 1 587,67 €
	numberFormat: "0 000,00", //Number.format(1587.67, "N") -> 1 587,67
	shortNumberFormat: "0,00", //Number.format(1587.67, "F") -> 1587,67
	percentageSymbolWithSpace: false //Number.format(0.1567, "P") -> 15,67%
});
Culture.add({
	name: "de-DE",
	displayName: "Deutsch",
	//calendar month and week names
	shortMonths: "Jan,Feb,Mär,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","),
	months: "Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember"
		.split(","),
	days: "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(
		","),
	shortDays: "Son,Mon,Die,Mit,Don,Fre,Sam".split(","),
	//time format for Date Object
	dateTimePartFormat: "HH:mm:ss",
	shortDateTimePartFormat: "HH:mm",
	//time format for Time Object
	timeFormat: "HH:mm:ss",
	shortTimeFormat: "HH:mm",
	//dates formats
	shortDateFormat: "dd.MM",
	dateFormat: "dd.MM.yyyy",
	dateTimeFormat: "dd.MM.yyyy HH:mm:ss", //Date.format(new Date())-> 15.03.1992 15:45:19
	//currency and number formats
	currencySymbol: "\u20AC", //"€",
	currencySymbolPosition: "after",
	currencySymbolWithSpace: true, //Number.format(1587.67, "C") -> 1.587,67 €
	numberFormat: "0.000,00", //Number.format(1587.67, "N") -> 1.587,67
	shortNumberFormat: "0,00", //Number.format(1587.67, "F") -> 1587,67
	percentageSymbolWithSpace: true //Number.format(0.1567, "P") -> 15,67 %
});
Culture.add({
	name: "fr-FR",
	displayName: "Français",
	//calendar month and week names
	shortMonths: "janv,févr,mars,avr,mai,juin,juil,août,sept,oct,nov,déc".split(
		","),
	months: "janvier,février,mars,avril,mai,juin,juillet,août,septembre,octobre,novembre,décembre"
		.split(","),
	days: "dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi".split(","),
	shortDays: "dim,lun,mar,mer,jeu,vend,sam".split(","),
	//time format for Date Object
	dateTimePartFormat: "HH:mm:ss",
	shortDateTimePartFormat: "HH:mm",
	//time format for Time Object
	timeFormat: "HH:mm:ss",
	shortTimeFormat: "HH:mm",
	//dates formats
	shortDateFormat: "dd/MM",
	dateFormat: "dd/MM/yyyy",
	dateTimeFormat: "dd/MM/yyyy HH:mm:ss", //Date.format(new Date())-> 15/03/1992 15:45:19
	//currency and number formats
	currencySymbol: "\u20AC", //"€",
	currencySymbolPosition: "after",
	currencySymbolWithSpace: true, //Number.format(1587.67, "C") -> 1 587,67 €
	numberFormat: "0 000,00", //Number.format(1587.67, "N") -> 1 587,67
	shortNumberFormat: "0,00", //Number.format(1587.67, "F") -> 1587,67
	percentageSymbolWithSpace: true //Number.format(0.1567, "P") -> 15,67 %
});
Culture.add({
	name: "it-IT",
	displayName: "Italiano",
	//calendar month and week names
	shortMonths: "gen,feb,mar,apr,mag,giu,lug,ago,set,ott,nov,dic".split(","),
	months: "gennaio,febbraio,marzo,aprile,maggio,giugno,luglio,agosto,settembre,ottobre,novembre,dicembre"
		.split(","),
	days: "domenica,lunedì,martedì,mercoledì,giovedì,venerdì,sabato".split(","),
	shortDays: "dom,lun,mar,mer,gio,ven,sab".split(","),
	//time format for Date Object
	dateTimePartFormat: "HH:mm:ss",
	shortDateTimePartFormat: "HH:mm",
	//time format for Time Object
	timeFormat: "HH:mm:ss",
	shortTimeFormat: "HH:mm",
	//dates formats
	shortDateFormat: "dd/MM",
	dateFormat: "dd/MM/yyyy",
	dateTimeFormat: "dd/MM/yyyy HH:mm:ss", //Date.format(new Date())-> 15/03/1992 15:45:19
	//currency and number formats
	currencySymbol: "\u20AC", //"€",
	currencySymbolPosition: "after",
	currencySymbolWithSpace: true, //Number.format(1587.67, "C") -> 1.587,67 €
	numberFormat: "0.000,00", //Number.format(1587.67, "N") -> 1.587,67
	shortNumberFormat: "0,00", //Number.format(1587.67, "F") -> 1587,67
	percentageSymbolWithSpace: false //Number.format(0.1567, "P") -> 15,67%
});
Culture.add({
	name: "es-ES",
	displayName: "Español",
	//calendar month and week names
	shortMonths: "Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic".split(","),
	months: "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre"
		.split(","),
	days: "Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado".split(","),
	shortDays: "Dom,Lun,Mar,Mié,Jue,Vier,Sáb".split(","),
	//time format for Date Object
	dateTimePartFormat: "h:mm:ss tt",
	shortDateTimePartFormat: "h:mm tt",
	//time format for Time Object
	timeFormat: "HH:mm:ss",
	shortTimeFormat: "HH:mm",
	//dates formats
	shortDateFormat: "MM/dd",
	dateFormat: "MM/dd/yyyy",
	dateTimeFormat: "MM/dd/yyyy h:mm:ss tt", //Date.format(new Date())-> 15/03/1992 3:45:19 PM
	//currency and number formats
	currencySymbol: "\u20AC", //"€",
	currencySymbolPosition: "before",
	currencySymbolWithSpace: false, //Number.format(1587.67, "C") -> € 1,587.67
	numberFormat: "0,000.00", //Number.format(1587.67, "N") -> 1,587.67
	shortNumberFormat: "0.00", //Number.format(1587.67, "F") -> 1587.67
	percentageSymbolWithSpace: true //Number.format(0.1567, "P") -> 15.67 %
});

Culture.add({
	name: "en-US",
	displayName: "English",
	//calendar month and week names
	shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
	months: "January,February,March,April,May,June,July,August,September,October,November,December"
		.split(","),
	days: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
	shortDays: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
	//time format for Date Object
	dateTimePartFormat: "h:mm:ss tt",
	shortDateTimePartFormat: "h:mm tt",
	//time format for Time Object
	timeFormat: "HH:mm:ss",
	shortTimeFormat: "HH:mm",
	//dates formats
	shortDateFormat: "MM/dd",
	dateFormat: "MM/dd/yyyy",
	dateTimeFormat: "MM/dd/yyyy h:mm:ss tt", //Date.format(new Date())-> 15/03/1992 3:45:19 PM
	//currency and number formats
	currencySymbol: "$",
	currencySymbolPosition: "before",
	currencySymbolWithSpace: false, //Number.format(1587.67, "C") -> $1,587.67
	numberFormat: "0,000.00", //Number.format(1587.67, "N") -> 1,587.67
	shortNumberFormat: "0.00", //Number.format(1587.67, "F") -> 1587.67
	percentageSymbolWithSpace: true //Number.format(0.1567, "P") -> 15.67 %
});
Culture.add({
	name: "en-CA",
	displayName: "English (Canada)",
	//calendar month and week names
	shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
	months: "January,February,March,April,May,June,July,August,September,October,November,December"
		.split(","),
	days: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
	shortDays: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
	//time format for Date Object
	dateTimePartFormat: "h:mm:ss tt",
	shortDateTimePartFormat: "h:mm tt",
	//time format for Time Object
	timeFormat: "HH:mm:ss",
	shortTimeFormat: "HH:mm",
	//dates formats
	shortDateFormat: "MM-dd",
	dateFormat: "yyyy-MM-dd",
	dateTimeFormat: "yyyy-MM-dd h:mm:ss tt", //Date.format(new Date())-> 1992-MM-dd 3:45:19 PM
	//currency and number formats
	currencySymbol: "$",
	currencySymbolPosition: "before",
	currencySymbolWithSpace: false, //Number.format(1587.67, "C") -> $1,587.67
	numberFormat: "0,000.00", //Number.format(1587.67, "N") -> 1,587.67
	shortNumberFormat: "0.00", //Number.format(1587.67, "F") -> 1587.67
	percentageSymbolWithSpace: true //Number.format(0.1567, "P") -> 15.67 %
});
Culture.add({
	name: "en-GB",
	displayName: "British",
	//calendar month and week names
	shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
	months: "January,February,March,April,May,June,July,August,September,October,November,December"
		.split(","),
	days: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
	shortDays: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
	//time format for Date Object
	dateTimePartFormat: "HH:mm:ss",
	shortDateTimePartFormat: "HH:mm",
	//time format for Time Object
	timeFormat: "HH:mm:ss",
	shortTimeFormat: "HH:mm",
	//dates formats
	shortDateFormat: "dd/MM",
	dateFormat: "dd/MM/yyyy",
	dateTimeFormat: "dd/MM/yyyy HH:mm:ss", //Date.format(new Date())-> 15/03/1992 15:45:19
	//currency and number formats
	currencySymbol: "\u00A3", //"£",
	currencySymbolPosition: "before",
	currencySymbolWithSpace: false, //Number.format(1587.67, "C") -> £1,587.67
	numberFormat: "0,000.00", //Number.format(1587.67, "N") -> 1,587.67
	shortNumberFormat: "0.00", //Number.format(1587.67, "F") -> 1587.67
	percentageSymbolWithSpace: false //Number.format(0.1567, "P") -> 15.67%
});

},{"./Culture.js":2}],4:[function(require,module,exports){
(function (global){
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
})(typeof global != "undefined" ? global : window);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Culture.js":2,"./Time.format.js":7}],5:[function(require,module,exports){
(function (global){
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
			return Number.parse((numberTxt || "").trim(), format, culture);
		}
		if (upperCaseFormat.indexOf("C") == 0) {
			var decimalPlaces = parseInt(format.substring(1));
			if (isNaN(decimalPlaces)) {
				decimalPlaces = "";
			}

			var symbolLength = culture.currencySymbol.length;
			var symbol = "";
			if (culture.currencySymbolPosition == "after") {
				symbol = numberTxt.substring(numberTxt.length - culture.currencySymbol.length);
				numberTxt = numberTxt.substring(0, numberTxt.length - symbolLength).trim();
			} else {
				symbol = numberTxt.substring(0, culture.currencySymbol.length);
				numberTxt = numberTxt.substring(symbolLength).trim();
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

})(typeof global != "undefined" ? global : window);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Culture.js":2}],6:[function(require,module,exports){
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

},{"./Culture.js":2,"./Date.format.js":4,"./Number.format.js":5,"./Time.format.js":7}],7:[function(require,module,exports){
(function (global){
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Culture.js":2}]},{},[1]);
