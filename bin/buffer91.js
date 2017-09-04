/*创建 Buffer 类
Node Buffer 类可以通过多种方式来创建。
方法 1
创建长度为 10 字节的 Buffer 实例：
var buf = new Buffer(10);
方法 2
通过给定的数组创建 Buffer 实例：
var buf = new Buffer([10, 20, 30, 40, 50]);
方法 3
通过一个字符串来创建 Buffer 实例：
var buf = new Buffer("www.runoob.com", "utf-8");
utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。*/
/*
写入缓冲区
语法
写入 Node 缓冲区的语法如下所示：
buf.write(string[, offset[, length]][, encoding])
参数
参数描述如下：
string - 写入缓冲区的字符串。
offset - 缓冲区开始写入的索引值，默认为 0 。
length - 写入的字节数，默认为 buffer.length
encoding - 使用的编码。默认为 'utf8' 。
返回值
返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。*/
var buf = new Buffer(256);
var len = buf.write('www.runoob.com');
console.log("写入字节数：" + len);
/*
读取 Node 缓冲区数据的语法如下所示：
buf.toString([encoding[, start[, end]]])
参数
参数描述如下：
encoding - 使用的编码。默认为 'utf8' 。
start - 指定开始读取的索引位置，默认为 0。
end - 结束位置，默认为缓冲区的末尾。
返回值
解码缓冲区数据并使用指定的编码返回字符串。*/
buf = new Buffer(26);
for(var i = 0 ; i < 26 ; i++){
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));
/*
将 Node Buffer 转换为 JSON 对象的函数语法格式如下：
buf.toJSON()
返回值
返回 JSON 对象。*/
var buf = new Buffer('www.runoob.com');
var json = buf.toJSON();
 console.log(json);
/*
Node 缓冲区合并的语法如下所示：
Buffer.concat(list[, totalLength])
参数
参数描述如下：
list - 用于合并的 Buffer 对象数组列表。
totalLength - 指定合并后Buffer对象的总长度。
返回值
返回一个多个成员合并的新 Buffer 对象。*/
var buffer1 = new Buffer('菜鸟教程');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);
// console.log(buffer3.length)
console.log('buffer3 内容：' + buffer3.toString());
/*
Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：
buf.compare(otherBuffer);
参数
参数描述如下：
otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
返回值
返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。*/
var buffer11 = new Buffer('ABC');
var buffer12 = new Buffer('ABCD');
var result = buffer11.compare(buffer12);
if(result < 0){
    console.log(buffer11 + ' 在 ' + buffer12 + '之前');
}else if(result === 0){
    console.log(buffer11 + ' 与 ' + buffer12 + '相等');
}else{
    console.log(buffer11 + ' 在 ' + buffer12 + '之后');
}

var buf1 = new Buffer('1234');
var buf2 = new Buffer('12567');
var buf3 = new Buffer('1234');
var buf4 = new Buffer('0123');
console.log('buf1.compare(buf2) = ', buf1.compare(buf2));
console.log('buf1.compare(buf3) = ', buf1.compare(buf3));
console.log('buf1.compare(buf4) = ', buf1.compare(buf4));
/*
拷贝缓冲区
语法
Node 缓冲区拷贝语法如下所示：
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
参数
参数描述如下：
targetBuffer - 要拷贝的 Buffer 对象。
targetStart - 数字, 可选, 默认: 0
sourceStart - 数字, 可选, 默认: 0
sourceEnd - 数字, 可选, 默认: buffer.length
返回值
没有返回值。*/
console.log("缓存区复制");
var buffer1 = new Buffer("ABC");
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
/*
缓冲区裁剪
Node 缓冲区裁剪语法如下所示：
buf.slice([start[, end]])
参数
参数描述如下：
start - 数字, 可选, 默认: 0
end - 数字, 可选, 默认: buffer.length
返回值
返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。*/
var buffer1 = new Buffer('runoob');
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
/*
缓冲区长度
语法
Node 缓冲区长度计算语法如下所示：
buf.length;
返回值
返回 Buffer 对象所占据的内存长度。*/
console.log("buffer1 length: " + buffer1.length);

/*var buffer100 = new Buffer(1000);
buffer100.fill("a");
console.log(buffer100.toString());*/
