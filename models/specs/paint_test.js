const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function() {
    let paint;
    beforeEach(function() {
        paint = new Paint(10)
    });

    it('should have amount of paint', function() {
        const actual = paint.amountOfPaint;
        assert.strictEqual(actual, 10);

    });
    // it('should be empty', function() {
    //     const actual = paint.amountOfPaint;
    //     assert.strictEqual(actual, False);

    // });
});