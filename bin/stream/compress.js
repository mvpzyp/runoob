var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('20170831天津市肿瘤医院会议纪要.pdf')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('abc.pdf.gz'));

console.log("文件压缩完成！");