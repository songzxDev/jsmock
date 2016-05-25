/*
* @Author: lixinduan
* @Date:   2016-04-26 18:11:38
* @Last Modified by:   dlx
* @Last Modified time: 2016-05-25 23:28:08
*/

'use strict';

var fs = require('fs');
var url = require('url');
var path = require('path');

var init = function init(opts) {
    var request = opts.request;
    var response = opts.response;
    var callback = opts.callback;

    // 取出get参数
    var query = url.parse(request.url, true).query;

    var list = query.list || '';

    var listFile = [];

    listFile = require('../utils/listFile').init('./data' + list);

    response.write(listFile.join('\r'));
    response.end();
}

exports.init = init;