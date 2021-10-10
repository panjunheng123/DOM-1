document.createElement('div');
const div = dom.create('<div>newDiv</div>');
console.log(div);

dom.after(test, div)

let nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test, 'title', 'hello')
const title = dom.attr(test, 'title');
console.log(title);

dom.text(test, '你好，这是新的内容');




dom.style(test, { border: '1px solid red', color: 'blue' });

console.log(dom.style(test, 'color'));

dom.class.add(test, 'red');
dom.class.add(test, 'blue');
dom.class.remove(test, 'blue');
console.log(dom.class.has(test, 'blue'));

dom.on(test, 'click', () => {
    console.log('点击了');
});


console.log(dom.find('#div2')[0]);
console.log(dom.index(dom.find('#div1')[0]));