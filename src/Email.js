function NormalizeEmail(input) {

	var rules = {
		"(AT)": "@",
		"-AT-": "@",
		"AT": "@",
		"(DOT)": ".",
		"-DOT-": ".",
		"DOT": "."
	}

	function replaceATandDOT(input) {
		var key;
		for (key in rules){
		  while (input.indexOf(key) !== -1) {
		  	// var text = removeSymbols(input);
		    input = input.replace(key, rules[key]);
		  }
		}
		return input;
	};

	return replaceATandDOT(input);

};