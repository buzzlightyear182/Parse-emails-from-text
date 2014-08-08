function NormalizeEmail(input) {

		function replaceUppercaseAtToAtSymbol(input) {
		  if (input.indexOf("AT") > 0) {
		  	var text = removeSymbols(input);
		    return text.replace("AT","@");
		  }
		  else {
				return input;
		  }
		}

		function replaceUppercaseDotToPoint (input) {
			if (input.indexOf("DOT") > 0) {
		    return input.replace("DOT",".");
		  }
		  else {
				return input;
		  }
		}

  	function removeSymbols (input) {
  		var newtext =[];
  		for (var i = 0; i < input.length; i++) {
  			newtext.push(input[i].replace(/\W/, ""));
  		};
  		return newtext.join("");
  	}

	var replacedText = replaceUppercaseAtToAtSymbol(input);
	return replaceUppercaseDotToPoint(replacedText);

};