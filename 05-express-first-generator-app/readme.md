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