# internet-archive
An npm module for the [Internet Archive API](https://archive.org/help/json.php).

## Usage

### Main API Endpoints

Only two endpoints are present:
* `advancedSearch`
* `metadata`

Begin by including the module:

``` javascript
const ia = require('internet-archive');
```

### Advanced Search

Create an options/parameters object, and specify the query, number of results to show, and the filter on what information to return for each result.

The below example's query searches for movies that match 'Disneyland' and are part of either the home_movies or prelingerhomemovies collection. The example returns up to 15 results, and specifies that only the identifier, title, collection, number of downloads/views, description and date fields are returned for each result.

Please see the Internet Archive's API [Example queries page](https://archive.org/advancedsearch.php#raw) for further information on precise queries and using boolean operators.

``` javascript
const params = {
 q: 'Disneyland AND mediatype:movies AND collection:(home_movies OR prelingerhomemovies)',
 rows: '15',
 fl: ['identifier,title,collection,downloads,description,date']
};

ia.advancedSearch(opts).then((results) => {
    console.log(results);
}).catch((e) => {
    console.log(e);
});
```

You can also use async/await:

``` javascript
try {
	const results = await advancedSearch(opts);
}
catch(e) {
	console.log(e);
}

```

### Metadata

To return a specific item's details, you'll need the item's identifier from advancedSearch.

``` javascript
ia.metadata("FrankenberryCountChoculaTevevisionCommercial1971").then((results) => {
    console.log(results);
}).catch((e) => {
    console.log(e);
});
```

You can also use async/await:

``` javascript
try {
	const results = await metadata("FrankenberryCountChoculaTevevisionCommercial1971");
}
catch(e) {
	console.log(e);
}
```

## Roadmap

* Uploading media
* Downloading media
