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
