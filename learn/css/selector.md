# CSS 选择器
用来选择页面上元素。

## 元素(element)选择器
根据元素的名称选元素。用`elementName`。
如，要让所有p元素的文字变为红色，可使用
```
p {color:#f00;}
```

## id选择器
根据元素的id选元素。用`#id`。
注：页面中不应该存在id一样的两个或多个元素。

## 类选择器
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

## 参考
* http://www.w3schools.com/css/css_selectors.asp