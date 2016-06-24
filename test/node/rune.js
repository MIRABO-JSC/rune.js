describe("Node", function() {

  var r;

  beforeEach(function() {
    r = new Rune();
  });

  describe("instantiation", function() {

    describe("when no width and height", function() {
      it("should set to 640x480", function() {
        var r = new Rune({container:".parent"});
        expect(r.width).toEqual(640);
        expect(r.height).toEqual(480);
      });
    });

    describe("when percentage values", function() {
      it("should set to 640x480", function() {
        var r = new Rune({width: "100%", height: "100%", container:".parent"});
        expect(r.width).toEqual(640);
        expect(r.height).toEqual(480);
      });
    });

  });

});
