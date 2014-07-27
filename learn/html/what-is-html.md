# HTML是神马
HTML是一种描述网页的语言
* HTML是Hyper Text Markup Language(超文本标记语言)
* HTML是标记语言
* 标记语言是一系列的标签
* 标签描述了文档内容
* HTML文档由HTML标签和文本组成
* HTML文档也被称为网页
* 浏览器上显示的，从根本上来说，它们都是用HTML语言来进行描述的
* HTML规范由万维网联盟和WHATWG维护。现阶段最新的HTML规范是HTML5
* HTML5并没有描述样式和格式的内容，只是对内容本身和它的意义进行了描述。可以通过使用层叠样式表（CSS）来实现对样式和格式地定义和控制

网页示例
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>标题</title>
</head>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html> 
```
其中
* DOCTYPE定义了文档类型。`<!DOCTYPE html>`表明这是一个HTML5文档
* `<html>`和`</html>`之间的内容描述了网页
* `<head>`和`</head>`之间的内容描述了网页的一些额外信息。不会被显示
* `<title>`之间的内容描述了网页的标题。会在网页标签上显示
* `<meta charset="utf-8">`让浏览器用utf-8的编码格式来对文档内容进行编码
* `<body>`和`</body>`之间的内容描述网页的可见部分
* `<h1>`和`</h1>`之间的内容描述标题
* `<p>`和`</p>`之间的内容描述了段落


## 参考
* http://www.w3schools.com/html/html_intro.asp
* [mozilla html doc](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
