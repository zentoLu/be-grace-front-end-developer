# 样式琐碎知识
## 去浮动
在需要去浮动的元素上加类名
`clearfix` 内容为：
``` css
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
.clearfix{*+height:1%;}
```

## 行内元素与块级元素的区别
换行，可设置高度，宽度。

## display:none与visibility:hidden与opocity：0.00001（ie下要为filter: alpha(opacity = 0.00001);的区别与适应场合
display:none:不占位，不显示    
visibility:hidden 占位 如果改元素上有绑定事件，不触发    opocity：0.00001 占位 其上的如果有绑定事件，可以触发。如果设值为0，则有可能不触发。

