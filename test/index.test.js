//@ts-check

const assert = require("assert");
const { advancedSearch, metadata } = require("../lib/index");

describe("Interact with the Internet Archive search and metadata", () => {
    it("Should do an advanced search", (done) => {
        const opts = {
            q: 'Disneyland AND mediatype:movies AND collection:(home_movies OR prelingerhomemovies)',
            rows: '15',
            fl: ['identifier,title,collection,downloads,description,date']
        };
        const results = advancedSearch(opts);
        assert.notEqual(results, null);
        done();
    });
    it("Should return metadata for an ID", (done) => {
        done();
    });
});
