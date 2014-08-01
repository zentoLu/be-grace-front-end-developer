/*
* 兼容ie9+，firefox，chrome
*/

function cursorMoveToEnd($input) {
    var length = $input.val().length;
    moveCursor($input[0], length, length);
}

// JS Range HTML文档/文字内容选中、库及应用介绍 http://www.zhangxinxu.com/wordpress/2011/04/js-range-html%E6%96%87%E6%A1%A3%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9%E9%80%89%E4%B8%AD%E3%80%81%E5%BA%93%E5%8F%8A%E5%BA%94%E7%94%A8%E4%BB%8B%E7%BB%8D/
function moveCursor(input, start, end) {
    start = parseInt(start, 10);
    end = parseInt(end, 10);
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(start, end);
    } else if (input.createTextRange) { // IE
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', start);
        range.inputect();
    }
}

