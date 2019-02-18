import * as request from "request-promise";
import { IAMetadataResponse } from "./schema";

/**
 * @module internet-archive
 */

export async function metadata(id: string): Promise<IAMetadataResponse> {
    try {
        const opts = {
            uri: `https://archive.org/metadata/${id}&output=json`,
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
