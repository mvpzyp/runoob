var fs = require('fs');
var readerStream = fs.createReadStream('20170831天津市肿瘤医院会议纪要.pdf');

var writerStream = fs.createWriteStream('cope.pdf');

readerStream.pipe(writerStream);

console.log("程序运行完成！");