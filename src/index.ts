import * as qs from "qs";
import * as request from "request-promise";

export async function advancedSearch(options: any): Promise<any> {
    try {
        const response = await request(`https://archive.org/advancedsearch.php?${qs.stringify(options)}&output=json`);
        if (response.statusCode !== 200) {
            return Promise.reject("Request not successful");
        }
        return Promise.resolve(response.body);
    }
    catch (e) {
        return Promise.reject(e);
    }
}

export async function metadata(id: string, cb: Function): Promise<any> {
    try {
        const response = await request(`https://archive.org/metadata/${id}&output=json`);
        if (response.statusCode !== 200) {
            return Promise.reject("Request not successful");
        }
        return Promise.resolve(response.body);
    }
    catch (e) {
        return Promise.reject(e);
    }
}
