/*global beforeEach, describe, it, Stem  */

describe('Group Model', function () {
    'use strict';

    beforeEach(function () {
        this.GroupModel = new Stem.Models.Group();
    });

    it('should generate the correct URL to access an OAE group', function() {
        this.GroupModel.url.should.equal('http://stemincubator.oae-qa1.oaeproject.org/api/group/');
    });
});
