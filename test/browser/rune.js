describe("Rune", function() {

  var r;

  beforeEach(function() {
    r = new Rune();
  });

  describe("on()", function() {

    describe("update", function() {

      it("triggers update event", function(done) {
        var mock = { draw: function(){} };
        spyOn(mock, 'draw');
        var r = new Rune();
        r.on('update', mock.draw);
        r.play();
        setTimeout(function() {
          expect(mock.draw).toHaveBeenCalled();
          done();
        }, 100);
      }, 110);

    });

  });

  describe("pause()", function() {

    it("pauses draw loop", function(done) {
      var mock = { onetime: function(){} };
      spyOn(mock, 'onetime');
      var r = new Rune();
      r.on('update', function() {
        mock.onetime();
        r.pause();
      });
      r.play();
      setTimeout(function() {
        expect(mock.onetime.calls.count()).toEqual(1);
        done();
      }, 100);
    }, 150);

  });

  describe("frameRate()", function() {

    var mock;

    beforeEach(function() {
      mock = { draw: function(){} };
      spyOn(mock, 'draw');
    });

    it("defaults to 60 fps", function(done) {
      var r = new Rune();
      r.on('update', mock.draw);
      r.play();
      setTimeout(function() {
        expect(mock.draw.calls.count() > 14).toBe(true)
        expect(mock.draw.calls.count() < 18).toBe(true)
        done();
      }, 250);
    }, 260);

    it("follows framerate", function(done) {
      var r = new Rune({frameRate:10});
      r.on('update', mock.draw);
      r.play();
      setTimeout(function() {
        expect(mock.draw.calls.count() > 1).toBe(true)
        expect(mock.draw.calls.count() < 3).toBe(true)
        done();
      }, 250);
    }, 260);

  });


});
