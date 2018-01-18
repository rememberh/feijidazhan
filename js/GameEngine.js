

// 游戏引擎        游戏背景						开始， 结束


//  仅此1份的对象，我们一般采用 字面量的形式  会更好

var gameEngine = {
	
	ele: $("#box"),		// 属性： 找到背景
	
	start: function() {	// 方法1： 启动游戏
		// 定时移动背景图片: 改变定位
		var self = this
		this.ele.animate({"background-position-y": "-230%"}, 10000, "linear", function() {
			// 先让图片回到 100% 的位置
			self.ele.css({"background-position-y": "0%"})
			// 继续滚动
			self.start()
		})
	}
}

//var youxiyinqing={
//	ele:$("#box"),
//	kaishi:function(){
//		var self=this
//		this.ele.animate({"background-position-y":"-230%"},10000,function(){
//			self.ele.css({"background-position-y":"0%"})
//		})
//	}
//	
//}
function Feiji(){
	this.ele=$('<div id="box1"></div>')
	this.ele.addClass("#box1")
	this.ele.appendTo("body")
}
Feiji.prototype.start=function(){
	var self=this
	this.ele.mousedown(function(e){
		e.preventDefault()
		var dataX=e.offsetX		
		var dataY=e.offsetY
		$(document).mousemove(function(e){
			e.preventDefault()
			var x=e.clientX - dataX
			var y=e.clientY - dataY
			self.move(x,y)
		})
		$(document).mouseup(function(){
			self.stop()
		})
	})
}
Feiji.prototype.move=function(x,y){
	this.ele.css({
		left:x,
		top:y
	})
}
Feiji.prototype.stop=function(){
	$(document).off("mousemove mouseup")
}
Feiji.prototype.kaihuo=function(){
	var self=this
	var timer=setInterval(function(){
		var x=self.ele.position().left+self.ele.width()/2-3
		var y=self.ele.position().top
		new Zidan(x,y)
	},50)
}
function Zidan(x,y){
	this.ele=$('<div></div>')
	this.ele.addClass('zidan')
	this.ele.appendTo('#box')
	this.ele.css({
		left:x,
		top:y
	})	
	this.move()
}
Zidan.prototype.move=function(){
	this.ele.animate({top:0},700,function(){
		this.remove()
	})
}

function Diji(){
	this.ele=$('<div id="box3"></div>')
	this.ele.addClass('diji')
	this.ele.appendTo('#box')
	var x=($('#box').width()-10)*Math.random()
	this.ele.css({'left':x})
}
Diji.prototype.move=function(){
	
	var self=this
	self.ele.animate({bottom:0},10000,function(){
		self.ele.remove()
	})
}
function Diji1(){               
	Diji.call(this)
	this.ele.removeClass().addClass('diji1')
}
Diji1.prototype={}
for(var k in Diji.prototype){
	Diji1.prototype[k]=Diji.prototype[k]
}
function Diji2(){            //这个怎么出不来？
	Diji.call(this)z
	this.ele.removeClass().addClass('diji2')
}
Diji2.prototype={}
for(var k in Diji.prototype){
	Diji1.prototype[k]=Diji.prototype[k]
}