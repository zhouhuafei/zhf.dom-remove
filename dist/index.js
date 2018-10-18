'use strict';

var getDomArray = require('zhf.get-dom-array');

function domRemove(element) {
    var arr = getDomArray(element);
    var result = [];
    arr.forEach(function (dom) {
        var parent = dom.parentNode;
        if (dom && parent) {
            parent.removeChild(dom);
        }
        result.push({ dom: dom, parent: parent });
    });
    return result;
}

module.exports = domRemove;