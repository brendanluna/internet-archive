/**
 * @module internet-archive
 */

export interface SearchOptions {
    q: string;
    rows: string;
    fl: string[];
}

export interface Docs {
    collection: string[];
    date: Date;
    description: string;
    downloads: number;
    identifier: string;
    title: string;
}

export interface Response {
    docs: Docs[];
    numFound: number;
    start: number;
}

export interface Params {
    fields: string;
    qin: string;
    query: string;
    rows: string;
    start: number;
    wt: string;
}

export interface ResponseHeader {
    params: Params;
    QTime: number;
    status: number;
}

export interface IASearchResponse {
    response: Response;
    responseHeader: ResponseHeader;
}

export interface Files {
    crc32: string;
    format: string;
    md5: string;
    mtime: string;
    name: string;
    original: string;
    sha1: string;
    size: string;
}

export interface Metadata {
    addeddate: Date;
    backup_location: string;
    collection: string[];
    color: string;
    creator: string;
    description: string;
    ia_orig__runtime: string;
    identifier: string;
    licenseurl: string;
    mediatype: string;
    publicdate: Date;
    runtime: string;
    sound: string;
    subject: string;
    title: string;
    updatedate: Date[];
    updater: string[];
    uploader: string;
}

export interface IAMetadataResponse {
    created: number;
    d1: string;
    d2: string;
    dir: string;
    files: Files[];
    files_count: number;
    item_size: number;
    metadata: Metadata;
    reviews: any;
    server: string;
    uniq: number;
    workable_servers: string[];
}
