describe("The emails normalizer", function(){

  it("returns the same word when a word is input", function(){
      var result = NormalizeEmail("fatcat");
      expect(result).toEqual("fatcat");
  });

  it("returns an email when a real email is entered", function(){
    var result = NormalizeEmail("fatcat@gmail.com");
    expect(result).toEqual("fatcat@gmail.com");
  });

  it("given uppercase letters, convert to a symbol", function(){
    var result = NormalizeEmail("fatcatATgmailDOTcom");
    expect(result).toEqual("fatcat@gmail.com");
  });

  describe("given a text with uppercase AT and/or DOT", function(){
    it("removes the symbols and convert", function(){
      var result = NormalizeEmail("fatcat(AT)gmailDOTcom");
      expect(result).toEqual("fatcat@gmail.com");

      var second = NormalizeEmail("fatcat-AT%gmail-DOT-com");
      expect(second).toEqual("fatcat@gmail.com");
    });
  });

  describe('Email normalizer interface',function(){

    it ('Should return a correct email',function(){
      $('#textbox').val("hello Jane");

      $("#normalize").click();

      var result = $("#result").html();

      expect(result).toEqual('hello Jane');
    });
  })
})
