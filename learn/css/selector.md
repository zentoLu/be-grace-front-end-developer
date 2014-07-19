# CSS 选择器
用来选择页面上元素。

目录
* [基本选择器](#basic)
* [层次选择器](#)
* [伪类选择器](#)
* [伪元素](#)
* [属性选择器](#)

## <a name='basic'>基本选择器</a>
基本选择器是css中使用最频繁，最基础，也是CSS中最早定义的选择器。兼容主流浏览器(IE6+,FF,Chrome等)。

### 通配选择器
选择所有html元素。用法`*`。
注：有人说，通配选择器比较影响效率。但貌似不是这样的，见
* [关于css通配符性能问题不完全测试](http://i.wanz.im/2012/01/03/performance_testing_about_css_universal_selector/)
* [CSS通用元素选择器的都市流言](http://shawphy.com/2010/11/css-universal-selector.html)

### 元素(element)选择器
根据元素的名称选元素。用`elementName`。
如，要让所有p元素的文字变为红色，可使用
```
p {color:#f00;}
```

### id选择器
根据元素的id选元素。用`#id`。
注：页面中不应该存在id一样的两个或多个元素。

### 类选择器
根据元素的类名来选元素。用`.className`。
注:一个元素可以有多个类名，类名之间用空格分隔。如:
```
<p class="out-look pull-right">...</p>
<style>
.out-look{color:#F60;font-size: 16px;}
.pull-right{float: right;}
</style>
```
上面代码中的p元素会同时应用`.out-look`和`.pull-right`里的样式。

### 群组选择器
将每一个选择器匹配的元素集合并。用法: `selector1,selector2,...,selectorN`。

## 参考
* http://www.w3schools.com/css/css_selectors.asp
* [《图解CSS3：核心技术与案例实战》 ](http://www.w3cplus.com/book-comment.html)