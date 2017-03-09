> Node应用由模块组成,每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

`module`: 在每个模块内部，module变量代表当前模块，该变量是个对象，他`exports`属性是对外的接口，加载某个模块，其实是加载该模块的`module.exports`属性

`require`用于加载模块

`createServer`方法接收一个函数作为参数，如:

```
function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module2.myVar);
    response.end();
}

http.createServer(onRequest).listen(8000)
```
`request`参数是是一个对象，表示客户端的HTTP请求，`response`参数也是一个对象，表示服务器的HTTP回应。
`response.writeHead`方法用来写入HTTP回应的头信息；`response.end`方法用来写入HTTP回应的具体内容,以及回应完成后关闭本次对话。
最后的listen(8000)表示启动服务器实例，监听本机的8000端口.

createServer方法的回调函数的第一个参数是一个request对象，拥有以下属性：
- url：发出请求的网址。
- method：HTTP请求的方法。
- headers：HTTP请求的所有HTTP头信息