define(["exports", "jquery", "lodash"], function(_exports, _jquery, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.mock = mock;
    _exports.mockRandomError = mockRandomError;
    _exports.get = get;
    _exports.getPdf = getPdf;
    _exports.put = put;
    _exports.post = post;
    _exports.postWrap = postWrap;
    _exports.postWithContentType = postWithContentType;
    _exports.postJson = postJson;
    _exports.deleteJson = deleteJson;
    _exports.postJsonObject = postJsonObject;
    _exports.patch = patch;
    _exports.postJsonObjectNoResult = postJsonObjectNoResult;
    _exports.poll = poll;
    _jquery = babelHelpers.interopRequireDefault(_jquery);
    _lodash = babelHelpers.interopRequireDefault(_lodash);

    // Needed because jQuery's Deferred does NOT strictly follow the Promise standard
    function promisifyAjaxCall(ajax, resolveWrapper) {
        return new Promise(function(resolve, reject) {
            return ajax.then(resolveWrapper ? resolveWrapper(resolve) : resolve, reject);
        });
    } //Promise.resolve accepts one arg. Need to wrap 3 args from ajax call


    function promisifyAjaxCallWrap(ajax) {
        return promisifyAjaxCall(ajax, function(resolve) {
            return function(data, textStatus, jqXHR) {
                return resolve({
                    data: data,
                    textStatus: textStatus,
                    jqXHR: jqXHR
                });
            };
        });
    }

    function mock(data, output) {
        var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(output);
            }, timeout);
        });
    }

    function mockRandomError(data, output, error) {
        var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                Math.random() > 0.2 ? resolve(output) : reject(error);
            }, timeout);
        });
    }

    var baseSetup = {
        statusCode: {
            403: function _() {
                location.reload();
            }
        },
        headers: {
            "CSRFToken": (0, _jquery.default)("#CSRFToken").val()
        },
        cache: false
    };

    function get(url, data) {
        console.log("GET from " + url + " with data: " + JSON.stringify(data));
        return promisifyAjaxCall(_jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
            url: url,
            data: data,
            dataType: "json",
            type: "get"
        })));
    }

    function getPdf(url) {
        console.log("GET from " + url);
        return promisifyAjaxCall(_jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
            url: url,
            method: "GET",
            headers: {
                "Accept": "application/pdf"
            }
        })));
    }

    function put(url, data) {
        console.log("PUT to " + url + " with data: " + JSON.stringify(data));
        return promisifyAjaxCall(_jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
            url: url,
            method: "PUT",
            data: data
        })));
    }

    function post(url, data) {
        console.log("POST to " + url + " with data: " + JSON.stringify(data));
        return promisifyAjaxCall(_jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
            url: url,
            method: "POST",
            data: data
        })));
    }

    function postWrap(url, data) {
        console.log("POST to " + url + " with data: " + JSON.stringify(data));
        return promisifyAjaxCallWrap(_jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
            url: url,
            method: "POST",
            data: data
        })));
    }

    function postWithContentType(url, contentType, data) {
        console.log("POST to " + url + " with contentType: " + contentType + " with data: " + JSON.stringify(data));
        return promisifyAjaxCall(_jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
            method: "POST",
            url: url,
            contentType: contentType,
            data: data
        })));
    }

    function postJson(url, data) {
        console.log("POST to " + url + " with data: " + JSON.stringify(data));
        return promisifyAjaxCall(_jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
            url: url,
            method: "POST",
            dataType: "json",
            data: data
        })));
    }

    function deleteJson(url, data) {
        console.log("DELETE to " + url + " with data: " + JSON.stringify(data));
        return promisifyAjaxCall(_jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
            url: url,
            method: "DELETE",
            dataType: "json",
            data: data
        })));
    }

    function postJsonObject(url, data) {
        console.log("POST to " + url + " with data: " + JSON.stringify(data));
        return promisifyAjaxCall(_jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
            url: url,
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data)
        })));
    }

    function patch(url, data) {
        console.log("PATCH to " + url + " with data: " + JSON.stringify(data));
        return promisifyAjaxCall(_jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
            url: url,
            method: "PATCH",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data)
        })));
    }

    function postJsonObjectNoResult(url, data) {
        console.log("POST to " + url + " with data: " + JSON.stringify(data));
        return promisifyAjaxCall(_jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
            url: url,
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data)
        })));
    }
    /**
     * Utility method for polling a remote controller.
     */


    function poll(url, data, readyFn) {
        var iterations = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
        var timeout = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2000;
        return new Promise(function(resolve, reject) {
            (function poller() {
                if (--iterations < 0) {
                    return reject();
                } else {
                    get(url, data).then(function(dt) {
                        if (readyFn(dt)) {
                            return resolve(dt);
                        } else {
                            setTimeout(poller, timeout);
                        }
                    }).catch(reject);
                }
            })();
        });
    }
});
//# sourceMappingURL=OraApiUtils.js.map