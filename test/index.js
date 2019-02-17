//@ts-check

const { advancedSearch, metadata } = require("../lib/index");

const opts = {
    q: 'Disneyland AND mediatype:movies AND collection:(home_movies OR prelingerhomemovies)',
    rows: '15',
    fl: ['identifier,title,collection,downloads,description,date']
};
advancedSearch(opts).then((results) => { console.log(results); });
