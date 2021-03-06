# 将内容复制到剪切板兼容主流浏览器的解决方案
## 如果仅仅使用javascript，是否能解决问题?
对于 Internet Explorer
```
function copyToClipBoard(copyText) {
        if (window.clipboardData) { // ie
            window.clipboardData.setData("Text", copyText);
        }
    }
```
很简单~

对于其他浏览器，google了半天，发现不太好搞，比如
对于firefox，要让网站的js有使用剪切板的权限是要用户授权的 http://kb.mozillazine.org/Granting_JavaScript_access_to_the_clipboard

看来就靠js是很难搞定了，还是得要靠外援flash呀。

## 兼容主流浏览器的最终解决方案
使用[ZeroClipboard](https://github.com/zeroclipboard/ZeroClipboard)。

### 原理
把一个不可见的 Adobe Flash movie元素放到一个DOM元素上。用户点击那DOM元素时，其实点击的是那不可见的Adobe Flash movie元素，Flash代码来做将内容复制到剪切板的操作。

注意：如果用js模拟一个在那flash上的点击事件，并不能进行复制内容到剪贴板。原因是浏览器和flash的安全限制。

### 使用
html
```
<body>
	<div class="demo-area">
		<label for="copy-input">输入要复制到剪切板的文字:</label><br>
		<textarea id="copy-input" cols="30" rows="10"></textarea><br>
		<button id="copy-button">复制到剪贴板</button><br>
	</div>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js"></script>
    <script src="path/to/ZeroClipboard.js"></script>
</body>
</html>
```

js
```
//配置ZeroClipboard.swf
ZeroClipboard.config({
    swfPath: './vendor/ZeroClipboard.swf'
});

//初始化
var client = new ZeroClipboard(document.getElementById("copy-button"));

client.on("ready", function(readyEvent) {
    client.on("copy", function(event) {
        var clipboard = event.clipboardData;
        var copyText = $('#copy-input').val();
        clipboard.setData("text/plain", copyText); // 将内容添加到剪切板
    });
});
```

完整的demo源码见我写的[demo](https://github.com/iamjoel/front-end-resource/blob/master/learn/copyToClipboard/demo.html)。

注意：由于要使用flash的缘故，一定要在服务器上运行这个demo。这里推荐个基于nodejs的静态服务器[anywhere](https://www.npmjs.org/package/anywhere)。

[官方demo](zeroclipboard.org/#demo)
更多的关于ZeroClipboard的信息见它的[github项目页](https://github.com/zeroclipboard/ZeroClipboard)

