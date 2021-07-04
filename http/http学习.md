# HTTP的学习

## url => bitmap

![image-20210629132547856](C:\Users\10514\AppData\Roaming\Typora\typora-user-images\image-20210629132547856.png)

HTTP协议的解析



## ISO-OSI七层网络模型

![image-20210703115757800](C:\Users\10514\AppData\Roaming\Typora\typora-user-images\image-20210703115757800.png)



## TCP和IP的基础知识

* 流 	没有明显的分割单位，只保证前后顺序正确
* 端口     每一个软件会从网卡里去拿数据，一个计算机的网卡会根据端口把接受到的数据包分给各个应用



## HTTP

Request-Response机制 

* Request
  * request line
    * method:   GET/POST
    * path:   默认是一个斜杠
    * http版本： 版本号
  * headers   每一行以一个冒号(:)分割的键值对
  * body   由Content-Type决定，它规定什么格式，body就是用什么格式来写
* Response
  * status line
    * http协议版本号
    * http的状态码
    * http的状态文本
  * hearders
    * Content-Type: text/html
    * Date: 一个时间
    * Connection: 
    * Transfer-Encoding: chunked
  * body
    * 一个16进制的数字先独占一行
    * 内容部分
    * 0整个body的结尾

文本型协议：相对于二进制协议，文本型协议所有内容都可视为字符串 

设计一个HTTP请求的类

Content-Type是一个必要的字段，要有默认值

body是键值对格式

