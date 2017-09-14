var fs = require('fs');

fs.readFile('input',function (err, data) {
    if(err){
        return console.error(err);
    }
    console.log('异步读取：' + data.toString());
})

var data = fs.readFileSync('input');

console.log('同步读取：' + data);

console.log('程序执行完毕');
//文件打开方法
console.log('准备打开文件！');
fs.open('input','r+',function (err,data) {
    if (err){
        return console.error(err);
    }
    console.log('文件打开成功！');
})
//读取文件信息的方法
fs.stat('input',function (err,stats) {
    if(err){
        return console.error(err);
    }
    console.log(stats.isFile());
});

console.log('准备打开文件！');
fs.stat('input',function (err,stats) {
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log('读取文件信息成功！');

    //检测文件类型
    console.log('是否为文件(idFile)?' + stats.isFile());
    console.log('是否为目录(isDirectory)?' + stats.isDirectory());
});

console.log('准备写入文件！');
fs.writeFile('input2','我是通过方法写入的文件内容。啦啦啦啦',function (err) {
   if(err){
       return console.error(err);
   }
   console.log('数据写入成功！');
   console.log("--------------我是分割线--------------");
   console.log('读取写入的数据！');
   fs.readFile('input2',function (err,data) {
      if(err){
          return console.error(err);
      }
      console.log('异步读取文件数据：' + data.toString());
   });
});
/*
fs.read(fd, buffer, offset, length, position, callback)
该方法使用了文件描述符来读取文件。
参数
参数使用说明如下：
fd - 通过 fs.open() 方法返回的文件描述符。
buffer - 数据写入的缓冲区。
offset - 缓冲区写入的写入偏移量。
length - 要从文件中读取的字节数。
position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
*/
var buf = new Buffer(1024);
console.log("准备打开已存在文件。");
fs.open('input','r+',function(err,fd){
   if(err){
       return console.error(err);
   }
   console.log('文件打开成功！');
   console.log('准备读取文件');
   fs.read(fd,buf,0,buf.length,0,function(err,bytes){
      if(err){
          return console.error(err);
      }
      console.log(bytes + '字节被读取.');

      if(bytes > 0){
          console.log(buf.slice(0,bytes).toString());
      }

      fs.close(fd , function (err) {
          if(err){
              return console.error(err);
          }
          console.log('文件关闭成功！');
      });
   });
});
setTimeout(function() {
    console.log('程序分割等待等待结束！');
}, 2000);

