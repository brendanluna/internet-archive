import * as qs from "qs";
import * as request from "request-promise";
import { SearchOptions, IASearchResponse } from "./schema";

/**
 * @module internet-archive
 */

export async function advancedSearch(options: SearchOptions): Promise<IASearchResponse> {
    try {
        const opts = {
            uri: `https://archive.org/advancedsearch.php?${qs.stringify(options)}&output=json`,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true,
            resolveWithFullResponse: true
        }
        const response = await request(opts);
        if (response.statusCode !== 200) {
            return Promise.reject("Request not successful");
        }
        return Promise.resolve(response.body);
    }
    catch (e) {
        return Promise.reject(e);
    }
}
