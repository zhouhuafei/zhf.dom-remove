const getDomArray = require('zhf.get-dom-array');

function domRemove(element) {
    const arr = getDomArray(element);
    const result = [];
    arr.forEach(function (dom) {
        const parent = dom.parentNode;
        if (dom && parent) {
            parent.removeChild(dom);
        }
        result.push({dom: dom, parent: parent});
    });
    return result;
}

module.exports = domRemove;
