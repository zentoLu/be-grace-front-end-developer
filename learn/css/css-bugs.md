# 常见浏览器bug及处理
## 目录
* [双边距](#double-margin)
* [`overflow:hidden`失效](#double-margin)
* [滚动条bug](#double-margin)
* [浏览器未重绘导致的问题](#repaint)
* [li底部3px的Bug](#float-li-3px)
* [body上设置overflow-y:hidden的问题](#over-flow-y)

## <a name="double-margin">双边距</a>

## <a name="overflow-hidden-bug">`overflow:hidden`失效</a>

## <a name="scroll-hidden-bug">滚动条bug</a>

## <a name="repaint">浏览器未重绘导致的问题</a>
解决方式,用js,让其隐藏再显示
```
$elem.hide().show()
```

## <a name="float-li-3px">li底部3px的Bug</a>
IE6/IE7中li底部3px的Bug   当li的子元素中有浮动（float）时，IE6/IE7中li会产生3px空隙的bug的。




IE6出现重复字符(文字溢出)的bug  :浮动的两个元素间的注释
http://blog.163.com/luoqun_fang/blog/static/17298207720117173850667/


    解决Firefox下input button内文字垂直居中
        解决
            input[type="reset"]::-moz-focus-inner,
            input[type="button"]::-moz-focus-inner,
            input[type="submit"]::-moz-focus-inner,
            input[type="file"] > input[type="button"]::-moz-focus-inner{
            border:none;padding:0;
            }



            position：relative的父级元素overflow：hidden失效

    解决：父级也加position：relative




    position:absolute定位在IE6下存在的定位错误问题: 

    给其父类加zoom:1; 来触发 hasLayout  2，设宽


## <a name="over-flow-y">body上设置overflow-y:hidden的问题</a>

在ie6，7中，设置在body元素上`overflow-y:hidden`不能隐藏滚动条。
解决：在html元素上也设置`overflow-y:hidden`

