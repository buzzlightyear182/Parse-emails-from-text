function ParseTextToEmail(input) {

		function replaceAtwithArruba(input) {
		  if (input.indexOf("AT") > 0) {
		    return input.replace("AT","@");
		  }
		  else {
				return input;
		  }
		}

		function replaceDot (input) {
			if (input.indexOf("DOT") > 0) {
		    return input.replace("DOT",".");
		  }
		  else {
				return input;
		  }
		}
    // var x = replaceAtwithArruba(input);
    // var y = replaceDot(x);
    // return y;

	var atreplaced = replaceAtwithArruba(input);
	return replaceDot(atreplaced);

};