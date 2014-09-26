## 合理使用id
id会带来的两个副作用
1. 同一个页面上的该id的元素可重用性变差
1. id选择器的权重很高。带id选择器的选择器定义的样式很难重置。当带id的元素下的组件定义一些样式时，用了id选择器。那它在其他非id的元素下要重置一些样式的话，就很复杂了。

详情见 [这里](http://csswizardry.com/2011/09/when-using-ids-can-be-a-pain-in-the-class/)

## 选择器中，尽量不用标签名
容易对其包含的组件的样式造成污染

## 类名最好与内容无关
为了重用性。

## 类名要尽量抽象，为了重用
对于多块结构一样，内容不一样的元素，可以加属性` data-ui-component="表示其内容"`。如，
```
<div class="list" data-ui-component="selled-book-list">...</div>
<div class="list" data-ui-component="not-selled-book-list">...</div>
<div class="list" data-ui-component="user-list">...</div>
```

## 一个元素类名不要超过4个

## 和js相关的元素的类名或id加 js前缀


一些类名
### 描述状态
* collapsed 收拢的
* expanded 展开的
* current 当前
* enabled
* disabled


## 参考
* http://nicolasgallagher.com/about-html-semantics-front-end-architecture/ oocss的作者写的
* [OOCSS](https://github.com/stubbornella/oocss/wiki)
https://github.com/stubbornella/oocss/wiki
* [apple pie](http://www.apppie.org/g)
* http://smacss.com/book/
