var request = require('request');
var Q = require('q');
var path = require('path');

var Postmark = function(token) {
    if (!(this instanceof Postmark))
        return new Postmark(token)
    this.token = token;
}

Postmark.prototype.baseUrl = 'https://api.postmarkapp.com/messages/outbound/opens';

Postmark.prototype.search = function(messageId, options, callback) {

    var deferred;
    var form;

    deferred = Q.defer();
    if (callback === void(0) && typeof options === 'function') {
        callback = options;
    }
    if (typeof messageId !== 'string') {
        options = messageId;
    }
    form = typeof options === 'object' ? options : {};
    form.count = options && options.count || 10;
    form.offset = options && options.offset || 0;
    var url = typeof messageId === 'string' ? [this.baseUrl, messageId].join('/') : this.baseUrl;
    request({
        url: url,
        headers: this.getHeaders(),
        qs: form
    }, function(err, httpResponse, body) {
        if (err) {
            return deferred.reject(JSON.parse(err));
        } else if (httpResponse.statusCode !== 200) {
            return deferred.reject(JSON.parse(body));
        }
        deferred.resolve(JSON.parse(body))
    })
    deferred.promise.nodeify(callback);
    return deferred.promise;
}

Postmark.prototype.getToken = function() {
    return this.token;
}

Postmark.prototype.setToken = function(token) {
    this.token = token;
    return this;
}

Postmark.prototype.getHeaders = function() {
    return {
        'Accept': 'application/json',
        'X-Postmark-Server-Token': this.getToken()
    }
}

module.exports = Postmark;
