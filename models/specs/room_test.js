const assert = require('assert');
const Room = require('../room.js');

describe('Room', function() {
    let room;
    beforeEach(function() {
        room = new Room(10)
    });

    it('should have an area', function() {
        const actual = room.area;
        assert.strictEqual(actual, 10);
        
    });
    describe('painted', function() {
        it('should start not painted', function() {
            const actual = room.painted;
            assert.strictEqual(actual, false);
        });
    });    

});

