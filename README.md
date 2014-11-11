# 成为一个体面的前端攻城狮
怎样算是个体面的前端攻城狮?     
大概是，PM，设计，开发等工种都觉得你很专业，很腻害吧～

下面阐述下我心中体面攻城狮该具备的

## 软件
能熟练使用前端会用的软件。软件主要分为以下几类

## IDE
我用的是[Sublime](http://www.sublimetext.com/3)。    

[Webstrom](https://www.jetbrains.com/webstorm/),[brackets](http://brackets.io/)也不错。当然爱折腾的，可以玩玩编辑器[vim](http://zh.wikipedia.org/zh/Vim)和神的编辑器[emacs](http://zh.wikipedia.org/zh/Emacs)。

Ps：貌似用DreamWeave，Nodepad＋＋的一般都比较Low

### 源代码管理
必须是Git～

### 图片类
* Photoshop 切图时用
* Picpick Windows系统可以用它预览PSD的文件；截屏之类。Mac本身系统就可以预览和截屏，所以不需要该软件。

### 静态文件服务器
我用的是基于nodejs的命令行工具－－[anywhere](https://www.npmjs.org/package/anywhere)

### 发送web请求的工具
推荐使用[httpie](https://github.com/jakubroztocil/httpie)。虽然用[curl](http://curl.haxx.se/)可以做一样的事。但httpie的命令比curl好用的多。

### Web调试工具
Windows系统可以用[fiddler](http://www.telerik.com/fiddler) 。它可以记录所有客户端和服务器的http和https请求，修改输入输出数据。

### 各种浏览器
Firefox，Chrome，IE等，如果还要兼容IE6，那还要用IETester。

### 项目构建工具（YEOMAN）
* 包管理工具： bower，npm之类
* 生成项目的脚手架：Yo
* 任务管理：Grunt，Gulp

## 基础知识
扎实的基础知识，主要包括以下的知识
* [html](learn/html)
* [css](learn/css)
* [js](learn/js)
* [浏览器相关的](learn/browser)
* svg
* canvas


## [代码风格/规范](coding-style)
有自己代码规范，并能遵守。在团队中，能遵守团队的代码风格。

## 代码组织
能很出组织的很好的代码。    

能写出这样的代码的方式，可以通过了解MVC，MVVM，MVP，以及各种js的设计模式。

## 积累
* 熟悉主流的js和css框架
* 有自己筛选的比较好的第三方[组件库](learn/js-pulgins.md)
* 当第三方组件达不到自己需求，可以自己开发。我开发的组件
    * [simple-slide](https://github.com/iamjoel/simple-slide) 基于jquery的简单幻灯组件。兼容 Firefox，Chrome，IE6+。
    * [paging](https://github.com/iamjoel/paging) 基于jquery的分页组件。兼容 Firefox，Chrome，IE6+。
    * [popup](https://github.com/iamjoel/popup) 弹出层组件。兼容 Firefox，Chrome，IE6+。
    * [ractive-paging](https://github.com/iamjoel/ractive-paging) 基于ractive的分页组件。不兼容IE6。
    * [number-controller](https://github.com/iamjoel/number-controller) 基于jquery的输入框中输入数字，左右两侧有加减来调节数字大小的组件。兼容 Firefox，Chrome，IE6+。
    * [jquery-linkage-select](https://github.com/iamjoel/jquery-linkage-select) 基于jquery的联动下拉框组件

## 预处理语言
会使用
* Less,Sass
* Coffee Script

## 熟悉多门后台语言
nodejs是肯定要会的。其他，像Python，Ruby，Go都可以玩一下～


[![Analytics](https://ga-beacon.appspot.com/UA-51355680-1/front-end-resource/readme)](https://github.com/igrigorik/ga-beacon)
