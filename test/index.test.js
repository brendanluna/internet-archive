//@ts-check

const assert = require("assert");
const { advancedSearch, metadata } = require("../lib/index");

describe("Interact with the Internet Archive search and metadata", () => {
    it("Should do an advanced search", async () => {
        const opts = {
            q: 'Disneyland AND mediatype:movies AND collection:(home_movies OR prelingerhomemovies)',
            rows: '15',
            fl: ['identifier,title,collection,downloads,description,date']
        };
        const results = await advancedSearch(opts);
        assert.notEqual(results, null);
    });
    it("Should return metadata for an ID", async () => {
        const results = await metadata("FrankenberryCountChoculaTevevisionCommercial1971");
        assert.notEqual(results, null);
    });
});
