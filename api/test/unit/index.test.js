/**
 * Created by Moon on 13.11.2015.
 */


require("sails-test-helper");

describe(TEST_NAME, function() {
  describe(".create()", function() {
    it("should be successful", function(done) {
      Sample.create().exec(function(err, record) {
        expect(err).to.not.exist;
        expect(record).to.exist;
        done();
      });
    });
  });
});
