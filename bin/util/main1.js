/*
* util.inherits
* 实现对详见原型继承的函数
* */

var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    /*this.sayHello = function () {
        console.log('Hello' + this.name);
    }*/
    //实例方法
    /*this.showName = function () {
        console.log(this.name);
    }*/
}
//原型方法
Base.prototype.showName = function(){
    console.log(this.name);
}

Base.prototype.sayHello = function () {
    console.log('Hello' + this.name);
}

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
objSub.sayHello();
console.log(objSub);