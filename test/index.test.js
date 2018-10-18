const removeDom = require('../dist/index.min');

test(`删除dom`, () => {
    console.log(removeDom(document.querySelector('body')));
    expect(true).toEqual(true);
});
