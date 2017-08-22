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
