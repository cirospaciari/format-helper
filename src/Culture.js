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
