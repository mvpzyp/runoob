
var events = require('events');
var eventEmitter = new events.EventEmitter();
//监听器1
var listener1 = function listener1(){
    console.log('监听器 listerer1 执行。');
}
//监听器2
var listener2 = function listener2(){
    console.log('监听器 listerer2 执行。');
}
//绑定connection事件，处理函数为listener1
eventEmitter.addListener('connection', listener1);
//绑定connection事件，处理函数为listener2
eventEmitter.addListener('connection', listener2);
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "个监听器连接事件。");
//触发connection监听
eventEmitter.emit('connection');
//移除监听绑定的listener1函数
eventEmitter.removeListener('connection', listener1);
console.log('listener1不再受监听');
//触发监听
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "个监听器连接事件。");
console.log('程序执行完毕！')
