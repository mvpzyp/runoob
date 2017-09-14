var util = require('util');
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));
//util中可以对各种类型进行判断。