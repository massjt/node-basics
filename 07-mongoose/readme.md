用express生成器
```
sudo npm install -g express-generator
express 项目名
```

启动项目

    node start (该命令脚本配置在bin/www)
    或
    node ./bin/www 

##jade模板引擎写法:

     ul
      li mark test
      li.
        wwwwwwwwwwwwwwwwwww
    input(type='text').class-name#ididid
    if condition
      p it’s test variable

    - var anyArr = [1,2,3]
    each value in anyArr
      p= value

    注意空格
    模板中命名变量 `- var anyArr = [1,2,3]`
    类和ID是紧跟在标签后
    在route中可以传递变量，jade中接收

    block content 是在模板中 命名一块为content的内容区域，由后代继承
    extends layout 子模板继承用extends 模板名为layout
    #{title}    title为route中传递过来的变量，在模板内容中，通过#{}方式来解析变量


> 由于jade可视化太弱，效率低，学习和维护成本高，记建议使用，可以用Handlebars模板引擎

```
# 移除jade模板
npm uninstall jade --save   
# 安装 handlebars引擎
npm install express-handlebars --save
```

## handlebars基础语法

  {{ }}  解析变量
  {{{ }}}  变量原样输出

  {{# if condition }}
    yes
  {{ else }}
    no
  {{/if}

  {{# each anyArray as |val key|}}
    {{ key }} : {{ val }}
  {{/each}}
  
  {{# each anyArray }}
    {{this}}
  {{/each}}

  {{! 注释 }}

## get 与 post 

```javascript
router.get('/test/:id', function(req, res, next) {
  res.render('test', {output: req.params.id});
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'form Express'});
})

router.post('/test/submit', function(req, res, next){
  var id = req.body.id;
  res.redirect('/test/'+id);
})
```

掌握get和post请求及获取参数的方式

## Validator and Express-session
> express是一个框架，可以通过各种包去解决问题

  npm install express-validator --save
  npm install express-session --save

  包安装后，要在app.js中require
  var expressValidator = require('express-validator');
  var expressSession = require('express-session')

  再启动和建立服务，通过app.use(),use方法是注册中间件的方法。
  app.use(expressValidator())  
  // 注意  此条一定要在 pp.use(bodyParser.urlencoded({ extended: false })) 之后

  注意弃用的api

[expressValidator方法](https://github.com/chriso/validator.js)
[node express-validator](https://www.npmjs.com/package/express-validator)

## MongoDb
  安装node官方mongoDb驱动
  npm install mongodb --save

[assert模块](http://javascript.ruanyifeng.com/nodejs/assert.html)

注意：插入数据，每条数据生成的是`objectId`,引用该id，可以`require('mongodb').ObjectID`

## monk
> Node.JS连接MongoDB的插件

`npm install monk --save`

[monk官方文档](https://automattic.github.io/monk/)
  
