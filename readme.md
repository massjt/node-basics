## node basics and demo

- node http fs module
- render html and response
- route
- express basis, set up and handlerbar templating engine
- express request
- express validation and session



- [Express basis link](http://javascript.ruanyifeng.com/nodejs/express.html)
- [expressValidator method](https://github.com/chriso/validator.js)
- [node express-validator](https://www.npmjs.com/package/express-validator)
- [MongoDB fast tutorial](https://github.com/StevenSLXie/Tutorials-for-Web-Developers/blob/master/MongoDB%20%E6%9E%81%E7%AE%80%E5%AE%9E%E8%B7%B5%E5%85%A5%E9%97%A8.md)
[monk doc](https://automattic.github.io/monk/docs/GETTING_STARTED.html)
[mongoose doc](http://mongoosejs.com/docs/guide.html)

### require 和 import 有什么区别？
> 在使用 node 和 vue 分别使用 require和import导入模块，两者区别在哪?

`require`属于`CommonJS`规范的一部分，`import`是`ES6`的模块化规范。

[可以参考分析文章](http://imweb.io/topic/582293894067ce9726778be9)

## 调试

在`package.json`中有个`scripts`选项, `npm start`命令 即通过其设置 ,可以改为 `node --inspect xxxx`获得chrome调试帮助，像开发前端页面一样方便。(--inspect 是 6.4以上才有的功能)

使用该功能，需在chrome中设置,`chrome://flags` ,查找 **开发者工具实验性功能** 并启用

打开控制台,点开右上角三个...，点击Settings --> 点击 `Experlments`  --> 点击6次 shift  勾上`Node debugging`


`require` 一个文件时，没有指定具体文件，会自动引入 `index.js`

`es6` 和 `node` 可以使用 `class` 语法实现es5基于原型的继承的语法糖，就是那个`prototype`

`nodemon` npm包，用于自动构建代码，在修改完`node`代码时，需要重新 `npm start`来进行构建，非常麻烦， 安装此包，在`package.json` 中修改 `"start": "node ./bin/www"` 为 ` nodemon ./bin/www `

`node`的`readFile` 第一个参数的相对目录基准是根据 `process.cwd()` （current working directory）
