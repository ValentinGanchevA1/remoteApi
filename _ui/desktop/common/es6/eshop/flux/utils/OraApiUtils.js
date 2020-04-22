import $ from "jquery";
import _ from "lodash";

// Needed because jQuery's Deferred does NOT strictly follow the Promise standard
function promisifyAjaxCall(ajax, resolveWrapper) {
    return new Promise(
        (resolve, reject) => ajax.then(
            resolveWrapper ? resolveWrapper(resolve) : resolve,
            reject
        )
    );
}

//Promise.resolve accepts one arg. Need to wrap 3 args from ajax call
function promisifyAjaxCallWrap(ajax) {
    return promisifyAjaxCall(ajax, (resolve) => (data, textStatus, jqXHR) => resolve({
        data,
        textStatus,
        jqXHR
    }))
}

export function mock(data, output, timeout = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(output);
        }, timeout)
    });
}

export function mockRandomError(data, output, error, timeout = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve(output) : reject(error)
        }, timeout)
    });
}

const baseSetup = {
    statusCode: {
        403: function() {
            location.reload();
        },
    },
    headers: {
        "CSRFToken": $("#CSRFToken").val()
    },
    cache: false,
};

export function get(url, data) {
    console.log("GET from " + url + " with data: " + JSON.stringify(data));
    return promisifyAjaxCall($.ajax(_.extend({}, baseSetup, {
        url: url,
        data: data,
        dataType: "json",
        type: "get",
    })));
}

export function getPdf(url) {
    console.log("GET from " + url);
    return promisifyAjaxCall($.ajax(_.extend({}, baseSetup, {
        url: url,
        method: "GET",
        headers: {
            "Accept": "application/pdf",
        },
    })));
}

export function put(url, data) {
    console.log("PUT to " + url + " with data: " + JSON.stringify(data));
    return promisifyAjaxCall($.ajax(_.extend({}, baseSetup, {
        url: url,
        method: "PUT",
        data: data,
    })));
}

export function post(url, data) {
    console.log("POST to " + url + " with data: " + JSON.stringify(data));
    return promisifyAjaxCall($.ajax(_.extend({}, baseSetup, {
        url: url,
        method: "POST",
        data: data,
    })));
}

export function postWrap(url, data) {
    console.log("POST to " + url + " with data: " + JSON.stringify(data));
    return promisifyAjaxCallWrap($.ajax(_.extend({}, baseSetup, {
        url: url,
        method: "POST",
        data: data,
    })));
}

export function postWithContentType(url, contentType, data) {
    console.log("POST to " + url + " with contentType: " + contentType + " with data: " + JSON.stringify(data));
    return promisifyAjaxCall($.ajax(_.extend({}, baseSetup, {
        method: "POST",
        url,
        contentType,
        data,
    })));
}

export function postJson(url, data) {
    console.log("POST to " + url + " with data: " + JSON.stringify(data));
    return promisifyAjaxCall($.ajax(_.extend({}, baseSetup, {
        url: url,
        method: "POST",
        dataType: "json",
        data: data,
    })));
}

export function deleteJson(url, data) {
    console.log("DELETE to " + url + " with data: " + JSON.stringify(data));
    return promisifyAjaxCall($.ajax(_.extend({}, baseSetup, {
        url: url,
        method: "DELETE",
        dataType: "json",
        data: data,
    })));
}

export function postJsonObject(url, data) {
    console.log("POST to " + url + " with data: " + JSON.stringify(data));
    return promisifyAjaxCall($.ajax(_.extend({}, baseSetup, {
        url: url,
        method: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
    })));
}
export function patch(url, data) {
    console.log("PATCH to " + url + " with data: " + JSON.stringify(data));
    return promisifyAjaxCall($.ajax(_.extend({}, baseSetup, {
        url: url,
        method: "PATCH",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
    })));
}

export function postJsonObjectNoResult(url, data) {
    console.log("POST to " + url + " with data: " + JSON.stringify(data));
    return promisifyAjaxCall($.ajax(_.extend({}, baseSetup, {
        url: url,
        method: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
    })));
}

/**
 * Utility method for polling a remote controller.
 */
export function poll(url, data, readyFn, iterations = 20, timeout = 2000) {
    return new Promise((resolve, reject) => {
        (function poller() {
            if (--iterations < 0) {
                return reject();
            } else {
                get(url, data)
                    .then(dt => {
                        if (readyFn(dt)) {
                            return resolve(dt);
                        } else {
                            setTimeout(poller, timeout);
                        }
                    })
                    .catch(reject);
            }
        })();
    });
}