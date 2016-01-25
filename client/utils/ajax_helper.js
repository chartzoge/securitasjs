"use strict";

import Promise from "bluebird";
import $ from "jquery";

export default class AjaxHelper {
    constructor (params) {
        this.baseUrl = params.baseUrl;
    }

    _makeRequest (params) {

    }

    get (params) {
        params.method = "GET";
        return _makeRequest(params);
    }

    post (params) {
        params.method = "GET";
        return _makeRequest(params);
    }

    put (params) {
        params.method = "GET";
        return _makeRequest(params);
    }

    delete (params) {
        params.method = "GET";
        return _makeRequest(params);
    }
}
