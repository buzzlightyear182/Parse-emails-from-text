describe("ParseTextToEmail", function(){

  it("returns a string when string is input", function(){
      var result = ParseTextToEmail("fatcat");
      expect(result).toEqual("fatcat");
  });

  it("returns an email when an actual email is entered", function(){
    var result = ParseTextToEmail("fatcat@gmail.com");
    expect(result).toEqual("fatcat@gmail.com");
  });

  it("given AT, convert to @", function(){
    var result = ParseTextToEmail("fatcatATgmailDOTcom");
    expect(result).toEqual("fatcat@gmail.com");
  });

  it("given DOT, convert to .", function(){
    var result = ParseTextToEmail("fatcatATgmailDOTcom");
    expect(result).toEqual("fatcat@gmail.com");
  });

  it("given (AT) remove the parenthesis and convert to @", function(){
    var result = ParseTextToEmail("fatcat(AT)gmailDOTcom");
    expect(result).toEqual("fatcat@gmail.com");

    var second = ParseTextToEmail("fatcat-AT%gmail-DOT-com");
    expect(result).toEqual("fatcat@gmail.com");
  });

});
