(function(ctx) {
    var defaults = {
        curvature: 0.001, // 实际指焦点到准线的距离，你可以抽象成曲率，这里模拟扔物体的抛物线，因此是开口向下的
        speed: 10,// 每帧移动的像素x的大小
       	debug: false // 调试
    }

    function parabola($el, param) {
        param = $.extend({}, defaults, param);
        this.param = param;
        param.$el = $el;
        param.start = {
            x: $el.offset().left,
            y: $el.offset().top
        };
        var shape = this.calShape();
        param.a = shape.a;
        param.b = shape.b;
        param.relStart = {
        	x: 0,
        	y: 0
        };
        param.relEnd = shape.relEnd;
        param.step = (param.end.x > param.start.x) ? param.speed : -param.speed;
        this.move();
    }

    $.extend(parabola.prototype, {
        /*
         * 因为经过(0, 0), 因此c = 0
         * 于是：
         * y = a * x*x + b*x;
         * b = (y- a*x*x) / x
         */
        calShape: function() {
            var param = this.param;
            var start = param.start;
            var end = param.end;// 终点的左上角的坐标
            var relEnd = {
                x: end.x - start.x,
                y: end.y - start.y
            }
            var shape = {
                a: param.curvature,
                b: 0
            };
            shape.b = (relEnd.y - shape.a * relEnd.x * relEnd.x) / relEnd.x;
            shape.relEnd = relEnd;
            return shape;
        },
        move: function(){
        	var param = this.param;
        	var start = param.start;
        	var relStart = param.relStart;
        	var relEnd = param.relEnd;
        	var step = param.step;
        	// 精度问题
        	if(step > 0 && relStart.x >= relEnd.x){
        		return;
        	}
        	if(step < 0 && relStart.x <= relEnd.x){
        		return;
        	}
        	var a = param.a;
        	var b = param.b;
        	relStart.x += step;
        	relStart.y = a * relStart.x * relStart.x + b * relStart.x;
        	relStart.start = start;
        	var left = start.x + relStart.x;
        	var top = start.y + relStart.y;
        	var $el = param.$el;
        	var self = this;
        	if(param.debug){
        		$el = $el.clone();
        		$('body').append($el);
        	}
        	requestAnimationFrame(function(){
        		$el.offset({
        			left: left,
        			top: top
        		});
        		self.move();
        	});
        }
    });
    ctx.parabola = function($el, param){
    	new parabola($el, param);
    }
})(this);

/*! requestAnimationFrame.js
 * by zhangxinxu 2013-09-30
 */
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // name has changed in Webkit
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());
